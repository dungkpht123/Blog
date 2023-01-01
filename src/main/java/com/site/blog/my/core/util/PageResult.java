package com.site.blog.my.core.util;

import java.io.Serializable;
import java.util.List;

/**
 * Công cụ phân trang
 
 */
public class PageResult implements Serializable {

    //đếm
    private int totalCount;
    //Số lượng hồ sơ trên mỗi trang
    private int pageSize;
    //Tổng số trang
    private int totalPage;
    //Số trang hiện tại
    private int currPage;
    //Danh sách dữ liệu
    private List<?> list;

    /**
     * Phân trang
     *
     * @param list      
     * @param totalCount 
     * @param pageSize   
     * @param currPage   
     */
    public PageResult(List<?> list, int totalCount, int pageSize, int currPage) {
        this.list = list;
        this.totalCount = totalCount;
        this.pageSize = pageSize;
        this.currPage = currPage;
        this.totalPage = (int) Math.ceil((double) totalCount / pageSize);
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public int getCurrPage() {
        return currPage;
    }

    public void setCurrPage(int currPage) {
        this.currPage = currPage;
    }

    public List<?> getList() {
        return list;
    }

    public void setList(List<?> list) {
        this.list = list;
    }

}
