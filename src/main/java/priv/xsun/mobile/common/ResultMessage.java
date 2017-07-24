package priv.xsun.mobile.common;

/**
 * Created by sunholdIng on 2017/7/20.
 */
public class ResultMessage<T> {
    private String message;
    private Boolean success;
    private T data;


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getSuccess() {
        return success;
    }

    public void setSuccess(Boolean success) {
        this.success = success;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
