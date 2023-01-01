package com.site.blog.my.core.service;

import com.site.blog.my.core.entity.BlogComment;
import com.site.blog.my.core.util.PageQueryUtil;
import com.site.blog.my.core.util.PageResult;

public interface CommentService {
    /**
     * thêm bình luận
     *
     * @param blogComment
     * @return
     */
    Boolean addComment(BlogComment blogComment);

    /**
     * Xem lại chức năng phân trang trong hệ thống quản lý nền
     *
     * @param pageUtil
     * @return
     */
    PageResult getCommentsPage(PageQueryUtil pageUtil);

    int getTotalComments();

    /**
     * Đánh giá hàng loạt
     *
     * @param ids
     * @return
     */
    Boolean checkDone(Integer[] ids);

    /**
     * Xóa hàng loạt
     *
     * @param ids
     * @return
     */
    Boolean deleteBatch(Integer[] ids);

    /**
     * Thêm phản hồi
     *
     * @param commentId
     * @param replyBody
     * @return
     */
    Boolean reply(Long commentId, String replyBody);

    /**
     * Có được danh sách nhận xét của bài viết theo ID bài viết và tham số phân trang
     *
     * @param blogId
     * @param page
     * @return
     */
    PageResult getCommentPageByBlogIdAndPageNum(Long blogId, int page);
}
