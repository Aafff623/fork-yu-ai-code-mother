package com.threetwoa.yuaicodemother.ai.tools;

import cn.hutool.json.JSONObject;
import org.junit.jupiter.api.Test;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * BaseTool 沙箱路径解析回归测试
 * 验证 resolveSafePath 拒绝越界路径（../ 上跳与绝对路径）、放行沙箱内合法路径
 */
class BaseToolTest {

    /**
     * 最小子类，仅用于暴露受保护的 resolveSafePath
     */
    private static final class TestTool extends BaseTool {
        @Override
        public String getToolName() {
            return "testTool";
        }

        @Override
        public String getDisplayName() {
            return "测试工具";
        }

        @Override
        public String generateToolExecutedResult(JSONObject arguments) {
            return "";
        }
    }

    private final TestTool testTool = new TestTool();

    private final Path expectedRoot = Paths.get(System.getProperty("user.dir"),
            "tmp/code_output", "vue_project_99999").toAbsolutePath().normalize();

    @Test
    void resolveSafePathAcceptsLegalRelativePath() {
        Path path = testTool.resolveSafePath(99999L, "src/App.vue");
        assertEquals(expectedRoot.resolve("src").resolve("App.vue").normalize(), path);
        assertTrue(path.startsWith(expectedRoot));
    }

    @Test
    void resolveSafePathRejectsParentDirectoryEscape() {
        assertThrows(SecurityException.class,
                () -> testTool.resolveSafePath(99999L, "../../etc/passwd"));
    }

    @Test
    void resolveSafePathRejectsAbsolutePath() {
        // 按平台取绝对路径：Linux 下 "C:/Windows/..." 会被解析成沙箱内的相对路径，不会触发拒绝
        String absPath = File.separatorChar == '/' ? "/etc/hosts" : "C:/Windows/system32/config";
        assertThrows(SecurityException.class,
                () -> testTool.resolveSafePath(99999L, absPath));
    }
}
