(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Login"],{"647e":function(e,t,n){e.exports={loginWrapper:"index-module_loginWrapper_2zURn",logo:"index-module_logo_19d6B",checkBox:"index-module_checkBox__Jagz",checkBoxItem:"index-module_checkBoxItem_1DWu8",checkBoxInput:"index-module_checkBoxInput_3uA1X",checkBoxBtn:"index-module_checkBoxBtn_maeTX",focus:"index-module_focus_2Dsgj",check:"index-module_check_2fFGN"}},a1d8:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},b6d9:function(e,t,n){"use strict";n.r(t);n("ac1f"),n("5319");var a=n("ade3"),o=(n("96cf"),n("1da1")),i=n("2b0e"),c=n("a1d8"),s=n.n(c),u=n("4d26"),d=n.n(u),r=n("647e"),l=n.n(r),h=n("65b5");function p(e){return h["a"].post("/api/user/login",e)}function f(e){return h["a"].get("/api/user/getVerify",{phone:e})}function m(e){var t=/^((13[0-9])|(15[^4])|(166)|(17[0-8])|(18[0-9])|(19[8-9])|(14[5|7]))\d{8}$/;return t.test(e)}var g=n("b7c7");t["default"]=i["a"].extend({name:"Login",data:function(){return{focusName:"",phone:"",code:"",sendingCodeStatus:!1,sendingCodeText:"",leftTime:120,handleTimer:null,submitStatus:!1}},methods:{handlePhoneChange:function(e){this.phone=e.target.value},handleCodeChange:function(e){this.code=e.target.value,console.log({event:e})},handleInputFocus:function(e){this.focusName=e},handleInputBlur:function(){this.focusName=""},validatePhone:function(e){return e?!!m(e)||(this.$toast("您的号码输入错误"),!1):(this.$toast("请输入您的手机号码"),!1)},handleSendCode:function(){var e=this,t=this.$data.phone;this.validatePhone(t)&&(this.getLeftTime(),f(t).then((function(t){0===t.code&&(e.$toast("验证码为:"+t.result),e.getLeftTime())})).catch((function(e){console.log(e)})))},getLeftTime:function(){var e=this,t=this.$data.leftTime;this.sendingCodeStatus=!0,this.sendingCodeText="".concat(t," s"),void 0!==this.$data.handleTimer&&(clearInterval(this.$data.handleTimer),this.handleTimer=null);var n=setInterval((function(){t--,t<0?(e.sendingCodeStatus=!1,e.sendingCodeText="获取验证码",t=e.$data.leftTime,clearInterval(n)):e.sendingCodeText="".concat(t," s")}),1e3);this.handleTimer=n},handleSubmit:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$data,a=n.phone,o=n.code,e.validatePhone(a)){t.next=3;break}return t.abrupt("return");case 3:if(0!==o.length){t.next=5;break}return t.abrupt("return",e.$toast("请输入验证码"));case 5:p(a,o).then((function(t){0===t.code&&(e.$toast("欢迎回来!!!"),g["a"].set("token",t.result.token),e.$store.dispatch("updateUser",t.result),e.$router.replace({path:"/"}))})).catch((function(e){console.log(e)}));case 6:case"end":return t.stop()}}),t)})))()}},render:function(){var e=this,t=arguments[0],n=this.$data,o=n.focusName,i=n.phone,c=n.code,u=n.sendingCodeStatus,r=n.sendingCodeText,h=n.submitStatus;return t("EContainer",[t("div",{class:l.a.loginWrapper},[t("div",{class:l.a.content},[t("div",{class:l.a.logo},[t("img",{attrs:{src:s.a,alt:"logo",title:"logo"}})])]),t("div",{class:l.a.checkBox},[t("div",{class:l.a.checkBoxItem},[t("label",["手机号码"]),t("div",{class:d()(l.a.checkBoxInput,Object(a["a"])({},l.a.focus,"phone"===o))},[t("input",{attrs:{type:"number",placeholder:"请输入手机号码",autoFocus:!0},domProps:{value:i},on:{input:this.handlePhoneChange,focus:function(){return e.handleInputFocus("phone")},blur:this.handleInputBlur}})])]),t("div",{class:l.a.checkBoxItem},[t("label",["验证码"]),t("div",{class:d()(l.a.checkBoxInput,Object(a["a"])({},l.a.focus,"code"===o))},[t("input",{attrs:{type:"number",placeholder:"请输入验证码"},domProps:{value:c},on:{input:this.handleCodeChange,focus:function(){return e.handleInputFocus("code")},blur:this.handleInputBlur}}),t("div",{class:l.a.checkBoxBtn},[t("van-button",{attrs:{type:"primary",size:"small",block:!0,disabled:u},on:{click:function(){return e.handleSendCode()}}},[u?r:"发送验证码"])])])]),t("van-button",{attrs:{type:"info",block:!0,disabled:h},on:{click:this.handleSubmit}},["提交"])])])])}})}}]);
//# sourceMappingURL=Login.c4216a58.js.map