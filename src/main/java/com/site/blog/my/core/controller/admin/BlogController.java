package com.site.blog.my.core.controller.admin;

import com.site.blog.my.core.config.Constants;
import com.site.blog.my.core.entity.Blog;
import com.site.blog.my.core.service.BlogService;
import com.site.blog.my.core.service.CategoryService;
import com.site.blog.my.core.util.MyBlogUtils;
import com.site.blog.my.core.util.PageQueryUtil;
import com.site.blog.my.core.util.Result;
import com.site.blog.my.core.util.ResultGenerator;
import org.springframework.stereotype.Controller;
import org.springframework.util.ObjectUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import java.util.Random;

@Controller
@RequestMapping("/admin")
public class BlogController {

    @Resource
    private BlogService blogService;
    @Resource
    private CategoryService categoryService;

    @GetMapping("/blogs/list")
    @ResponseBody
    public Result list(@RequestParam Map<String, Object> params) {
        if (ObjectUtils.isEmpty(params.get("page")) || ObjectUtils.isEmpty(params.get("limit"))) {
            return ResultGenerator.genFailResult("Các thông số là bất thường!");
        }
        PageQueryUtil pageUtil = new PageQueryUtil(params);
        return ResultGenerator.genSuccessResult(blogService.getBlogsPage(pageUtil));
    }

    @GetMapping("/blogs")
    public String list(HttpServletRequest request) {
        request.setAttribute("path", "blogs");
        return "admin/blog";
    }

    @GetMapping("/blogs/edit")
    public String edit(HttpServletRequest request) {
        request.setAttribute("path", "edit");
        request.setAttribute("categories", categoryService.getAllCategories());
        return "admin/edit";
    }

    @GetMapping("/blogs/edit/{blogId}")
    public String edit(HttpServletRequest request, @PathVariable("blogId") Long blogId) {
        request.setAttribute("path", "edit");
        Blog blog = blogService.getBlogById(blogId);
        if (blog == null) {
            return "error/error_400";
        }
        request.setAttribute("blog", blog);
        request.setAttribute("categories", categoryService.getAllCategories());
        return "admin/edit";
    }

    @PostMapping("/blogs/save")
    @ResponseBody
    public Result save(@RequestParam("blogTitle") String blogTitle,
            @RequestParam(name = "blogSubUrl", required = false) String blogSubUrl,
            @RequestParam("blogCategoryId") Integer blogCategoryId,
            @RequestParam("blogTags") String blogTags,
            @RequestParam("blogContent") String blogContent,
            @RequestParam("blogCoverImage") String blogCoverImage,
            @RequestParam("blogStatus") Byte blogStatus,
            @RequestParam("enableComment") Byte enableComment) {
        if (!StringUtils.hasText(blogTitle)) {
            return ResultGenerator.genFailResult("Vui lòng nhập tiêu đề bài viết");
        }
        if (blogTitle.trim().length() > 150) {
            return ResultGenerator.genFailResult("Tiêu đề quá dài");
        }
        if (!StringUtils.hasText(blogTags)) {
            return ResultGenerator.genFailResult("Vui lòng nhập nhãn bài viết");
        }
        if (blogTags.trim().length() > 150) {
            return ResultGenerator.genFailResult("Nhãn");
        }
        if (blogSubUrl.trim().length() > 150) {
            return ResultGenerator.genFailResult("Url quá mức");
        }
        if (!StringUtils.hasText(blogContent)) {
            return ResultGenerator.genFailResult("Vui lòng nhập nội dung bài viết");
        }
        if (blogTags.trim().length() > 100000) {
            return ResultGenerator.genFailResult("Nội dung của bài báo quá dài");
        }
        if (!StringUtils.hasText(blogCoverImage)) {
            return ResultGenerator.genFailResult("Bản đồ bìa không thể trống");
        }
        Blog blog = new Blog();
        blog.setBlogTitle(blogTitle);
        blog.setBlogSubUrl(blogSubUrl);
        blog.setBlogCategoryId(blogCategoryId);
        blog.setBlogTags(blogTags);
        blog.setBlogContent(blogContent);
        blog.setBlogCoverImage(blogCoverImage);
        blog.setBlogStatus(blogStatus);
        blog.setEnableComment(enableComment);
        String saveBlogResult = blogService.saveBlog(blog);
        if ("success".equals(saveBlogResult)) {
            return ResultGenerator.genSuccessResult("Thêm thành công");
        } else {
            return ResultGenerator.genFailResult(saveBlogResult);
        }
    }

    @PostMapping("/blogs/update")
    @ResponseBody
    public Result update(@RequestParam("blogId") Long blogId,
            @RequestParam("blogTitle") String blogTitle,
            @RequestParam(name = "blogSubUrl", required = false) String blogSubUrl,
            @RequestParam("blogCategoryId") Integer blogCategoryId,
            @RequestParam("blogTags") String blogTags,
            @RequestParam("blogContent") String blogContent,
            @RequestParam("blogCoverImage") String blogCoverImage,
            @RequestParam("blogStatus") Byte blogStatus,
            @RequestParam("enableComment") Byte enableComment) {
        if (!StringUtils.hasText(blogTitle)) {
            return ResultGenerator.genFailResult("Vui lòng nhập tiêu đề bài viết");
        }
        if (blogTitle.trim().length() > 150) {
            return ResultGenerator.genFailResult("Tiêu đề quá dài");
        }
        if (!StringUtils.hasText(blogTags)) {
            return ResultGenerator.genFailResult("Vui lòng nhập nhãn bài viết");
        }
        if (blogTags.trim().length() > 150) {
            return ResultGenerator.genFailResult("Nhãn");
        }
        if (blogSubUrl.trim().length() > 150) {
            return ResultGenerator.genFailResult("URL quá mức");
        }
        if (!StringUtils.hasText(blogContent)) {
            return ResultGenerator.genFailResult("Vui lòng nhập nội dung bài viết");
        }
        if (blogTags.trim().length() > 100000) {
            return ResultGenerator.genFailResult("Nội dung của bài báo quá dài");
        }
        if (!StringUtils.hasText(blogCoverImage)) {
            return ResultGenerator.genFailResult("Bản đồ bìa không thể trống");
        }
        Blog blog = new Blog();
        blog.setBlogId(blogId);
        blog.setBlogTitle(blogTitle);
        blog.setBlogSubUrl(blogSubUrl);
        blog.setBlogCategoryId(blogCategoryId);
        blog.setBlogTags(blogTags);
        blog.setBlogContent(blogContent);
        blog.setBlogCoverImage(blogCoverImage);
        blog.setBlogStatus(blogStatus);
        blog.setEnableComment(enableComment);
        String updateBlogResult = blogService.updateBlog(blog);
        if ("success".equals(updateBlogResult)) {
            return ResultGenerator.genSuccessResult("Sửa đổi thành công");
        } else {
            return ResultGenerator.genFailResult(updateBlogResult);
        }
    }

    @PostMapping("/blogs/md/uploadfile")
    public void uploadFileByEditormd(HttpServletRequest request,
            HttpServletResponse response,
            @RequestParam(name = "editormd-image-file", required = true) MultipartFile file)
            throws IOException, URISyntaxException {
        String fileName = file.getOriginalFilename();
        String suffixName = fileName.substring(fileName.lastIndexOf("."));
        // Đặt tên tệp
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd_HHmmss");
        Random r = new Random();
        StringBuilder tempName = new StringBuilder();
        tempName.append(sdf.format(new Date())).append(r.nextInt(100)).append(suffixName);
        String newFileName = tempName.toString();
        // Tạo một tập tin
        File destFile = new File(Constants.FILE_UPLOAD_DIC + newFileName);
        String fileUrl = MyBlogUtils.getHost(new URI(request.getRequestURL() + "")) + "/upload/" + newFileName;
        File fileDirectory = new File(Constants.FILE_UPLOAD_DIC);
        try {
            if (!fileDirectory.exists()) {
                if (!fileDirectory.mkdir()) {
                    throw new IOException("Tạo thư mục không thành công,URL là:" + fileDirectory);
                }
            }
            file.transferTo(destFile);
            request.setCharacterEncoding("utf-8");
            response.setHeader("Content-Type", "text/html");
            response.getWriter().write("{\"success\": 1, \"message\":\"success\",\"url\":\"" + fileUrl + "\"}");
        } catch (UnsupportedEncodingException e) {
            response.getWriter().write("{\"success\":0}");
        } catch (IOException e) {
            response.getWriter().write("{\"success\":0}");
        }
    }

    @PostMapping("/blogs/delete")
    @ResponseBody
    public Result delete(@RequestBody Integer[] ids) {
        if (ids.length < 1) {
            return ResultGenerator.genFailResult("Các thông số là bất thường!");
        }
        if (blogService.deleteBatch(ids)) {
            return ResultGenerator.genSuccessResult();
        } else {
            return ResultGenerator.genFailResult("không xóa");
        }
    }

}
