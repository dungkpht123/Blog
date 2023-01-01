package com.site.blog.my.core.service;

import java.util.Map;

public interface ConfigService {
    /**
     * Sửa đổi mục cấu hình
     *
     * @param configName
     * @param configValue
     * @return
     */
    int updateConfig(String configName, String configValue);

    /**
     * Nhận tất cả các mục cấu hình
     *
     * @return
     */
    Map<String,String> getAllConfigs();
}
