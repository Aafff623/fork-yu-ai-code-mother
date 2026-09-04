package com.threetwoa.yuaicodemother.ai.tools;

import cn.hutool.json.JSONObject;
import com.threetwoa.yuaicodemother.constant.AppConstant;

import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * 工具基类
 * 定义所有工具的通用接口
 */
public abstract class BaseTool {

    /**
     * 将模型给出的路径解析到应用沙箱目录内
     * 以 vue_project_{appId} 为唯一根目录，resolve 后 normalize，再用 startsWith 校验仍在根目录内；
     * 绝对路径与 ../ 上跳会被统一拦截，越界抛 SecurityException
     *
     * @param appId        应用 ID，决定沙箱根目录
     * @param relativePath 模型给出的相对路径
     * @return 沙箱内规范化后的绝对路径
     * @throws SecurityException 当路径越界时抛出
     */
    protected Path resolveSafePath(Long appId, String relativePath) {
        Path projectRoot = Paths.get(AppConstant.CODE_OUTPUT_ROOT_DIR, "vue_project_" + appId)
                .toAbsolutePath().normalize();
        Path resolvedPath = projectRoot.resolve(relativePath).normalize();
        if (!resolvedPath.startsWith(projectRoot)) {
            throw new SecurityException("路径越界，已拒绝访问: " + relativePath);
        }
        return resolvedPath;
    }

    /**
     * 获取工具的英文名称（对应方法名）
     *
     * @return 工具英文名称
     */
    public abstract String getToolName();

    /**
     * 获取工具的中文显示名称
     *
     * @return 工具中文名称
     */
    public abstract String getDisplayName();

    /**
     * 生成工具请求时的返回值（显示给用户）
     *
     * @return 工具请求显示内容
     */
    public String generateToolRequestResponse() {
        return String.format("\n\n[选择工具] %s\n\n", getDisplayName());
    }

    /**
     * 生成工具执行结果格式（保存到数据库）
     *
     * @param arguments 工具执行参数
     * @return 格式化的工具执行结果
     */
    public abstract String generateToolExecutedResult(JSONObject arguments);
} 