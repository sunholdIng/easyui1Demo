package priv.xsun.mobile.controller;

import com.alibaba.fastjson.JSONObject;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import priv.xsun.mobile.common.ResultMessage;
import priv.xsun.mobile.dao.dal.Mobile;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by sunholdIng on 2017/7/8.
 */
@RestController
@RequestMapping("/mobile")
public class MobileAction {

    @RequestMapping("/getMobileList")
    public ResultMessage getMobileList() {
        Mobile mobile = new Mobile();
        mobile.setAttr1("1");
        mobile.setItemid("1");
        mobile.setListprice("1");
        mobile.setProductid("1");
        mobile.setStatus("1");
        mobile.setUnitcost("1");

        JSONObject jsonObject = new JSONObject();
        jsonObject.put("total", 50);

        List list = new ArrayList<>();
        list.add(mobile);

        mobile = new Mobile();
        mobile.setAttr1("1");
        mobile.setItemid("1");
        mobile.setListprice("1");
        mobile.setProductid("1");
        mobile.setStatus("1");
        mobile.setUnitcost("1");


        list.add(mobile);
        jsonObject.put("rows", list);

        ResultMessage resultMessage = new ResultMessage();
        resultMessage.setMessage("成功");
        resultMessage.setData(jsonObject);
        resultMessage.setSuccess(true);
        return resultMessage;
    }
}
