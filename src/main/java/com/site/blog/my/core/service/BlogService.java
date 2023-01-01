package com.site.blog.my.core.service;

import com.site.blog.my.core.controller.vo.BlogDetailVO;
import com.site.blog.my.core.controller.vo.SimpleBlogListVO;
import com.site.blog.my.core.entity.Blog;
import com.site.blog.my.core.util.PageQueryUtil;
import com.site.blog.my.core.util.PageResult;

import java.util.List;

public interface BlogService {
    String saveBlog(Blog blog);

    PageResult getBlogsPage(PageQueryUtil pageUtil);

    Boolean deleteBatch(Integer[] ids);

    int getTotalBlogs();

    /**
     * Nhận chi tiết theo ID
     *
     * @param blogId
     * @return
     */
    Blog getBlogById(Long blogId);

    /**
     * Sửa đổi nền
     *
     * @param blog
     * @return
     */
    String updateBlog(Blog blog);

    /**
     * Nhận danh sách các bài viết trang đầu tiên
     *
     * @param page
     * @return
     */
    PageResult getBlogsForIndexPage(int page);

    /**
     * Danh sách dữ liệu Barn nhi tại nhà
     * 0 Nhấp vào nhiều nhất là bản phát hành 1 tốt nhất
     *
     * @param type
     * @return
     */
    List<SimpleBlogListVO> getBlogListForIndexPage(int type);
    /**
     * Chi tiết bài viết
     *
     * @param blogId
     * @return
     */
    BlogDetailVO getBlogDetail(Long blogId);

    /**
     * Có được danh sách bài viết theo nhãn
     *
     * @param tagName
     * @param page
     * @return
     */
    PageResult getBlogsPageByTag(String tagName, int page);

    /**
     * Có được một danh sách các bài viết dựa trên phân loại
     *
     * @param categoryId
     * @param page
     * @return
     */
    PageResult getBlogsPageByCategory(String categoryId, int page);

    /**
     * Có được danh sách bài viết theo tìm kiếm
     *
     * @param keyword
     * @param page
     * @return
     */
    PageResult getBlogsPageBySearch(String keyword, int page);

    BlogDetailVO getBlogDetailBySubUrl(String subUrl);
}
