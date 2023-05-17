"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5208],{5208:function(e,t,n){n.r(t),n.d(t,{amplify_confirm_sign_in:function(){return g},amplify_confirm_sign_up:function(){return b},amplify_forgot_password:function(){return F},amplify_require_new_password:function(){return w},amplify_sign_in:function(){return v},amplify_sign_up:function(){return A},amplify_verify_contact:function(){return T}});var r=n(2508),i=n(1953),s=n(3769),a=n(9222),o=n(5573),u=n(531),h=n(8063),l=n(4636),d=n(1186),p=n(2168),c=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function a(e){try{u(r.next(e))}catch(t){s(t)}}function o(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}u((r=r.apply(e,t||[])).next())}))},f=function(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(o){s=[6,o],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}},m=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],a=0,o=s.length;a<o;a++,i++)r[i]=s[a];return r},g=function(){function e(e){var t=this;(0,r.r)(this,e),this.handleSubmit=function(e){return t.confirm(e)},this.headerText=h.T.CONFIRM_SMS_CODE,this.submitButtonText=h.T.CONFIRM,this.handleAuthStateChange=d.d,this.defaultFormFields=[{type:"code",required:!0,handleInputChange:function(e){return t.handleCodeChange(e)}}],this.formFields=this.defaultFormFields,this.mfaOption=o.M.SMS,this.loading=!1}return e.prototype.componentWillLoad=function(){this.setup()},e.prototype.userHandler=function(){this.setup()},e.prototype.setup=function(){this.user&&this.user.challengeName===o.C.SoftwareTokenMFA&&(this.mfaOption=o.M.TOTP,this.headerText===h.T.CONFIRM_SMS_CODE&&(this.headerText=h.T.CONFIRM_TOTP_CODE)),this.constructedFormFieldOptions=this.constructFormFieldOptions(this.formFields)},e.prototype.handleCodeChange=function(e){this.code=e.target.value},e.prototype.confirm=function(e){return c(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),t=this.user.challengeName===o.C.SoftwareTokenMFA?o.C.SoftwareTokenMFA:null,!u.g||"function"!==typeof u.g.confirmSignIn)throw new Error(l.N);this.loading=!0,r.label=1;case 1:return r.trys.push([1,4,5,6]),[4,u.g.confirmSignIn(this.user,this.code,t)];case 2:return r.sent(),[4,(0,p.c)(this.user,this.handleAuthStateChange)];case 3:return r.sent(),[3,6];case 4:return n=r.sent(),(0,d.a)(n),[3,6];case 5:return this.loading=!1,[7];case 6:return[2]}}))}))},e.prototype.constructFormFieldOptions=function(e){var t=this,n=[];if(void 0!==e)return e.length<=0?this.defaultFormFields:(e.forEach((function(e){"string"===typeof e||"code"!==e.type?n.push(e):n.push(Object.assign({handleInputChange:function(e){return t.handleCodeChange(e)}},e))})),n)},e.prototype.render=function(){var e=this;return(0,r.h)(r.H,null,(0,r.h)("amplify-form-section",{headerText:i.o.get(this.headerText),handleSubmit:this.handleSubmit,submitButtonText:i.o.get(this.submitButtonText),loading:this.loading,secondaryFooterContent:(0,r.h)("span",null,(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.A.SignIn)}},i.o.get(h.T.BACK_TO_SIGN_IN)))},(0,r.h)("amplify-auth-fields",{formFields:this.constructedFormFieldOptions})))},Object.defineProperty(e,"watchers",{get:function(){return{user:["userHandler"]}},enumerable:!1,configurable:!0}),e}(),b=function(){function e(e){var t=this;(0,r.r)(this,e),this.handleSubmit=function(e){return t.confirmSignUp(e)},this.headerText=h.T.CONFIRM_SIGN_UP_HEADER_TEXT,this.submitButtonText=h.T.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT,this.formFields=[],this.handleAuthStateChange=d.d,this.usernameAlias="username",this.loading=!1,this.newFormFields=[],this.phoneNumber={countryDialCodeValue:l.g,phoneNumberValue:null}}return e.prototype.componentWillLoad=function(){this.setup()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.userHandler=function(){this.setup()},e.prototype.setup=function(){this.userInput=this.user&&this.user.username,this._signUpAttrs=this.user&&this.user.signUpAttrs,(0,d.c)(this.usernameAlias),this.buildFormFields()},e.prototype.buildDefaultFormFields=function(){var e=this;this.newFormFields=[{type:""+this.usernameAlias,required:!0,handleInputChange:this.handleFormFieldInputChange(""+this.usernameAlias),value:this.userInput,disabled:!!this.userInput,inputProps:{autocomplete:"username"}},{type:"code",label:i.o.get(h.T.CONFIRM_SIGN_UP_CODE_LABEL),placeholder:i.o.get(h.T.CONFIRM_SIGN_UP_CODE_PLACEHOLDER),required:!0,hint:(0,r.h)("div",null,i.o.get(h.T.CONFIRM_SIGN_UP_LOST_CODE)," ",(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},i.o.get(h.T.CONFIRM_SIGN_UP_RESEND_CODE))),handleInputChange:this.handleFormFieldInputChange("code")}]},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var s=Object.assign({},n);"code"===s.type&&(s.hint=(0,d.i)(s)?(0,r.h)("div",null,i.o.get(h.T.CONFIRM_SIGN_UP_LOST_CODE)," ",(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.resendConfirmCode()}},i.o.get(h.T.CONFIRM_SIGN_UP_RESEND_CODE))):s.hint),s.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},t.push(s)})),this.newFormFields=t}},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.userInput=e.target.value};case"phone_number":return function(e){return(0,d.h)(e,t.phoneNumber)};case"code":return function(e){return t.code=e.target.value};default:return}},e.prototype.setFieldValue=function(e){switch(e.type){case"username":case"email":void 0===e.value?this.userInput="":this.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.getUsername=function(){if(this.user&&this.user.username)return this.user.username;switch(this.usernameAlias){case"username":case"email":return this.userInput;case"phone_number":return(0,d.b)(this.phoneNumber)}},e.prototype.resendConfirmCode=function(){return c(this,void 0,void 0,(function(){var e,t;return f(this,(function(n){switch(n.label){case 0:if(event&&event.preventDefault(),!u.g||"function"!==typeof u.g.resendSignUp)throw new Error(l.N);n.label=1;case 1:if(n.trys.push([1,3,,4]),!(e=this.getUsername()))throw new Error(h.T.EMPTY_USERNAME);return[4,u.g.resendSignUp(e.trim())];case 2:return n.sent(),[3,4];case 3:return t=n.sent(),(0,d.a)(t),[3,4];case 4:return[2]}}))}))},e.prototype.confirmSignUp=function(e){return c(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),!u.g||"function"!==typeof u.g.confirmSignUp)throw new Error(l.N);this.loading=!0,r.label=1;case 1:if(r.trys.push([1,6,7,8]),!(t=this.getUsername()))throw new Error(h.T.EMPTY_USERNAME);return t=t.trim(),[4,u.g.confirmSignUp(t,this.code)];case 2:if(!r.sent())throw new Error(i.o.get(h.T.CONFIRM_SIGN_UP_FAILED));return this._signUpAttrs&&this._signUpAttrs.password&&""!==this._signUpAttrs.password?[4,(0,p.h)(t,this._signUpAttrs.password,this.handleAuthStateChange)]:[3,4];case 3:return r.sent(),[3,5];case 4:this.handleAuthStateChange(o.A.SignIn),r.label=5;case 5:return[3,8];case 6:return n=r.sent(),(0,d.a)(n),[3,8];case 7:return this.loading=!1,[7];case 8:return[2]}}))}))},e.prototype.render=function(){var e=this;return(0,r.h)(r.H,null,(0,r.h)("amplify-form-section",{headerText:i.o.get(this.headerText),submitButtonText:i.o.get(this.submitButtonText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:(0,r.h)("div",null,(0,r.h)("span",null,(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.A.SignIn)}},i.o.get(h.T.BACK_TO_SIGN_IN))))},(0,r.h)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"],user:["userHandler"]}},enumerable:!1,configurable:!0}),e}(),y=new s.k("ForgotPassword"),F=function(){function e(e){var t=this;(0,r.r)(this,e),this.headerText=h.T.RESET_YOUR_PASSWORD,this.sendButtonText=h.T.SEND_CODE,this.submitButtonText=h.T.SUBMIT,this.formFields=[],this.handleSend=function(e){return t.send(e)},this.handleSubmit=function(e){return t.submit(e)},this.handleAuthStateChange=d.d,this.usernameAlias="username",this.delivery=null,this.loading=!1,this.phoneNumber={countryDialCodeValue:l.g,phoneNumberValue:null},this.newFormFields=[],this.forgotPasswordAttrs={userInput:"",password:"",code:""}}return e.prototype.componentWillLoad=function(){(0,d.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var r=Object.assign({},n);r.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},t.push(r)})),this.newFormFields=t}},e.prototype.buildDefaultFormFields=function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"forgot-password-email-input"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"forgot-password-phone-number-input"}}];break;case"username":default:this.newFormFields=[{type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"forgot-password-username-input"}}]}},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.forgotPasswordAttrs.userInput=e.target.value};case"phone_number":return function(e){return(0,d.h)(e,t.phoneNumber)};case"password":case"code":return function(n){return t.forgotPasswordAttrs[e]=n.target.value};default:return}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":case"email":void 0===e.value?t.userInput="":t.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":case"code":void 0===e.value?t[e.type]="":t[e.type]=e.value}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.send=function(e){return c(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),!u.g||"function"!==typeof u.g.forgotPassword)throw new Error(l.N);switch(this.loading=!0,this.usernameAlias){case"phone_number":try{this.forgotPasswordAttrs.userInput=(0,d.b)(this.phoneNumber)}catch(s){(0,d.a)(s)}}r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,u.g.forgotPassword(this.forgotPasswordAttrs.userInput.trim())];case 2:return t=r.sent(),y.debug(t),this.newFormFields=[{type:"code",required:!0,handleInputChange:this.handleFormFieldInputChange("code"),inputProps:{"data-test":"forgot-password-code-input"}},{type:"password",required:!0,handleInputChange:this.handleFormFieldInputChange("password"),label:i.o.get(h.T.NEW_PASSWORD_LABEL),placeholder:i.o.get(h.T.NEW_PASSWORD_PLACEHOLDER)}],this.delivery=t.CodeDeliveryDetails,[3,5];case 3:return n=r.sent(),(0,d.a)(n),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.submit=function(e){return c(this,void 0,void 0,(function(){var t,n,r,i,s,a;return f(this,(function(h){switch(h.label){case 0:if(e&&e.preventDefault(),!u.g||"function"!==typeof u.g.forgotPasswordSubmit)throw new Error(l.N);this.loading=!0,h.label=1;case 1:return h.trys.push([1,3,4,5]),t=this.forgotPasswordAttrs,n=t.userInput,r=t.code,i=t.password,[4,u.g.forgotPasswordSubmit(n.trim(),r,i)];case 2:return s=h.sent(),y.debug(s),this.handleAuthStateChange(o.A.SignIn),this.delivery=null,[3,5];case 3:return a=h.sent(),(0,d.a)(a),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.render=function(){var e=this,t=this.delivery?function(t){return e.handleSubmit(t)}:function(t){return e.handleSend(t)},n=this.delivery?this.submitButtonText:this.sendButtonText;return(0,r.h)(r.H,null,(0,r.h)("amplify-form-section",{headerText:i.o.get(this.headerText),handleSubmit:t,loading:this.loading,secondaryFooterContent:(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.A.SignIn)},"data-test":"forgot-password-back-to-sign-in-link"},i.o.get(h.T.BACK_TO_SIGN_IN)),testDataPrefix:"forgot-password",submitButtonText:i.o.get(n)},(0,r.h)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}(),C=new s.k("amplify-require-new-password"),w=function(){function e(e){var t=this;(0,r.r)(this,e),this.headerText=h.T.CHANGE_PASSWORD,this.submitButtonText=h.T.CHANGE_PASSWORD_ACTION,this.handleSubmit=function(e){return t.completeNewPassword(e)},this.handleAuthStateChange=d.d,this.formFields=[{type:o.a.Password,required:!0,handleInputChange:function(e){return t.handlePasswordChange(e)},label:i.o.get(h.T.NEW_PASSWORD_LABEL),placeholder:i.o.get(h.T.NEW_PASSWORD_PLACEHOLDER),inputProps:{"data-test":"require-new-password-password-input"}}],this.loading=!1,this.requiredAttributes={},this.newFormFields=this.formFields,this.phoneNumber={countryDialCodeValue:l.g,phoneNumberValue:" "}}return e.prototype.userHandler=function(){this.setCurrentUser()},e.prototype.handleRequiredAttributeInputChange=function(e,t){"phone_number"===e?this.formatPhoneNumber(t):this.requiredAttributes[e]=t.target.value},e.prototype.setCurrentUser=function(){return c(this,void 0,void 0,(function(){var e,t,n,r,i=this;return f(this,(function(s){switch(s.label){case 0:if(this.user)return[3,5];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,u.g.currentAuthenticatedUser()];case 2:return(e=s.sent())&&(this.currentUser=e),[3,4];case 3:return t=s.sent(),(0,d.a)(t),[3,4];case 4:return[3,6];case 5:this.currentUser=this.user,s.label=6;case 6:return this.currentUser&&this.currentUser.challengeParam&&this.currentUser.challengeParam.requiredAttributes&&(n=this.currentUser.challengeParam.requiredAttributes,r=(0,d.g)(),n.forEach((function(e){var t={type:e,required:!0,label:r[e].label,placeholder:r[e].placeholder,handleInputChange:function(t){return i.handleRequiredAttributeInputChange(e,t)},inputProps:{"data-test":"require-new-password-"+e+"-input"}};i.newFormFields=m(i.newFormFields,[t])}))),[2]}}))}))},e.prototype.componentWillLoad=function(){return this.setCurrentUser()},e.prototype.handlePasswordChange=function(e){this.password=e.target.value},e.prototype.formatPhoneNumber=function(e){(0,d.h)(e,this.phoneNumber);try{if(e.target.name===l.b&&this.phoneNumber.phoneNumberValue){var t=(0,d.b)(this.phoneNumber);this.requiredAttributes.phone_number=t}}catch(n){C.error("error in phone number field - "+n)}},e.prototype.completeNewPassword=function(e){return c(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(e&&e.preventDefault(),!u.g||"function"!==typeof u.g.completeNewPassword)throw new Error(l.N);this.loading=!0,r.label=1;case 1:return r.trys.push([1,8,9,10]),[4,u.g.completeNewPassword(this.currentUser,this.password,this.requiredAttributes)];case 2:switch(t=r.sent(),C.debug("complete new password",t),t.challengeName){case o.C.SMSMFA:return[3,3];case o.C.MFASetup:return[3,4]}return[3,5];case 3:return this.handleAuthStateChange(o.A.ConfirmSignIn,t),[3,7];case 4:return C.debug("TOTP setup",t.challengeParam),this.handleAuthStateChange(o.A.TOTPSetup,t),[3,7];case 5:return[4,(0,p.c)(t,this.handleAuthStateChange)];case 6:r.sent(),r.label=7;case 7:return[3,10];case 8:return n=r.sent(),(0,d.a)(n),[3,10];case 9:return this.loading=!1,[7];case 10:return[2]}}))}))},e.prototype.render=function(){var e=this;return(0,r.h)(r.H,null,(0,r.h)("amplify-form-section",{headerText:i.o.get(this.headerText),handleSubmit:this.handleSubmit,loading:this.loading,secondaryFooterContent:(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.A.SignIn)}},i.o.get(h.T.BACK_TO_SIGN_IN)),submitButtonText:i.o.get(this.submitButtonText)},(0,r.h)("amplify-auth-fields",{formFields:this.newFormFields})))},Object.defineProperty(e,"watchers",{get:function(){return{user:["userHandler"]}},enumerable:!1,configurable:!0}),e}(),v=function(){function e(e){var t=this;(0,r.r)(this,e),this.handleSubmit=function(e){return t.signIn(e)},this.headerText=h.T.SIGN_IN_HEADER_TEXT,this.submitButtonText=h.T.SIGN_IN_ACTION,this.handleAuthStateChange=d.d,this.usernameAlias="username",this.formFields=[],this.hideSignUp=!1,this.newFormFields=[],this.loading=!1,this.phoneNumber={countryDialCodeValue:l.g,phoneNumberValue:null},this.signInAttributes={userInput:"",password:""}}return e.prototype.componentWillLoad=function(){(0,d.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":case"email":return function(e){return t.signInAttributes.userInput=e.target.value};case"phone_number":return function(e){return(0,d.h)(e,t.phoneNumber)};case"password":return function(e){return t.signInAttributes.password=e.target.value};default:return function(){}}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.signIn=function(e){return c(this,void 0,void 0,(function(){var t;return f(this,(function(n){switch(n.label){case 0:switch(e&&e.preventDefault(),this.loading=!0,this.usernameAlias){case"phone_number":try{this.signInAttributes.userInput=(0,d.b)(this.phoneNumber)}catch(r){(0,d.a)(r)}}return t=this.signInAttributes.userInput.trim(),[4,(0,p.h)(t,this.signInAttributes.password,this.handleAuthStateChange,this.usernameAlias)];case 1:return n.sent(),this.loading=!1,[2]}}))}))},e.prototype.buildDefaultFormFields=function(){var e=this,t=[];switch(this.usernameAlias){case"email":t.push({type:"email",required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-in-email-input",autocomplete:"username"}});break;case"phone_number":t.push({type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-in-phone-number-input",autocomplete:"username"}});break;case"username":default:t.push({type:"username",required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-in-username-input",autocomplete:"username"}})}t.push({type:"password",hint:(0,r.h)("div",null,i.o.get(h.T.FORGOT_PASSWORD_TEXT)," ",(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.A.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},i.o.get(h.T.RESET_PASSWORD_TEXT))),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-in-password-input"}}),this.newFormFields=m(t)},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var s=Object.assign({},n);"password"===s.type&&(s.hint=(0,d.i)(s)?(0,r.h)("div",null,i.o.get(h.T.FORGOT_PASSWORD_TEXT)," ",(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.A.ForgotPassword)},"data-test":"sign-in-forgot-password-link"},i.o.get(h.T.RESET_PASSWORD_TEXT))):s.hint),s.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(s,e.signInAttributes),t.push(s)})),this.newFormFields=t}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":case"email":void 0===e.value?t.userInput="":t.userInput=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;case"password":void 0===e.value?t.password="":t.password=e.value}},e.prototype.render=function(){var e=this;return(0,r.h)(r.H,null,(0,r.h)("amplify-form-section",{headerText:i.o.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-in"},(0,r.h)("div",{slot:"subtitle"},(0,r.h)("slot",{name:"header-subtitle"})),(0,r.h)("slot",{name:"federated-buttons"},(0,r.h)("amplify-federated-buttons",{handleAuthStateChange:this.handleAuthStateChange,federated:this.federated})),!(0,a.xb)(this.federated)&&(0,r.h)("amplify-strike",null,"or"),(0,r.h)("amplify-auth-fields",{formFields:this.newFormFields}),(0,r.h)("div",{slot:"amplify-form-section-footer",class:"sign-in-form-footer"},(0,r.h)("slot",{name:"footer"},!this.hideSignUp&&(0,r.h)("slot",{name:"secondary-footer-content"},(0,r.h)("span",null,i.o.get(h.T.NO_ACCOUNT_TEXT)," ",(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.A.SignUp)},"data-test":"sign-in-create-account-link"},i.o.get(h.T.CREATE_ACCOUNT_TEXT)))),(0,r.h)("div",{class:this.hideSignUp?"full-width-footer-content":""},(0,r.h)("slot",{name:"primary-footer-content"},(0,r.h)("amplify-button",{type:"submit",disabled:this.loading,"data-test":"sign-in-sign-in-button"},this.loading?(0,r.h)("amplify-loading-spinner",null):(0,r.h)("span",null,i.o.get(this.submitButtonText)))))))))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}();v.style=":host{--footer-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--footer-font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.sign-in-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-in-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-in-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-in-form-footer amplify-button{margin-bottom:0}}.sign-in-form-footer *+*{margin-bottom:15px}.full-width-footer-content{width:100%}";var A=function(){function e(e){var t=this;(0,r.r)(this,e),this.handleSubmit=function(e){return t.signUp(e)},this.handleSignUp=function(e){return t.authSignUp(e)},this.headerText=h.T.SIGN_UP_HEADER_TEXT,this.submitButtonText=h.T.SIGN_UP_SUBMIT_BUTTON_TEXT,this.haveAccountText=h.T.SIGN_UP_HAVE_ACCOUNT_TEXT,this.signInText=h.T.SIGN_IN_TEXT,this.formFields=[],this.handleAuthStateChange=d.d,this.usernameAlias="username",this.newFormFields=[],this.phoneNumber={countryDialCodeValue:l.g,phoneNumberValue:null},this.loading=!1,this.signUpAttributes={username:"",password:"",attributes:{}}}return e.prototype.handleFormFieldInputChange=function(e){var t=this;switch(e){case"username":return function(e){return t.signUpAttributes.username=e.target.value};case"password":return function(e){return t.signUpAttributes.password=e.target.value};case"email":return function(e){return t.signUpAttributes.attributes.email=e.target.value};case"phone_number":return function(e){return(0,d.h)(e,t.phoneNumber)};default:return function(n){return t.signUpAttributes.attributes[e]=n.target.value}}},e.prototype.handleFormFieldInputWithCallback=function(e,t){(t.handleInputChange?t.handleInputChange:function(e,t){t(e)})(e,this.handleFormFieldInputChange(t.type).bind(this))},e.prototype.authSignUp=function(e){return c(this,void 0,void 0,(function(){var t;return f(this,(function(n){switch(n.label){case 0:return[4,u.g.signUp(e)];case 1:if(!(t=n.sent()))throw new Error(h.T.SIGN_UP_FAILED);return[2,t]}}))}))},e.prototype.assignPhoneNumberToSignUpAttributes=function(){if(this.phoneNumber.phoneNumberValue)try{this.signUpAttributes.attributes.phone_number=(0,d.b)(this.phoneNumber)}catch(e){(0,d.a)(e)}},e.prototype.assignUserNameAliasToSignUpAttributes=function(){switch(this.usernameAlias){case"email":case"phone_number":this.signUpAttributes.username=this.signUpAttributes.attributes[this.usernameAlias]}},e.prototype.assignFormInputToSignUpAttributes=function(){this.assignPhoneNumberToSignUpAttributes(),this.assignUserNameAliasToSignUpAttributes()},e.prototype.validateSignUpAttributes=function(){if(!this.signUpAttributes.username)throw this.usernameAlias===o.U.email?new Error(h.T.EMPTY_EMAIL):this.usernameAlias===o.U.phone_number?new Error(h.T.EMPTY_PHONE):new Error(h.T.EMPTY_USERNAME);if(this.signUpAttributes.username.indexOf(" ")>=0)throw new Error(h.T.USERNAME_REMOVE_WHITESPACE);if(this.signUpAttributes.password!==this.signUpAttributes.password.trim())throw new Error(h.T.PASSWORD_REMOVE_WHITESPACE)},e.prototype.signUp=function(e){return c(this,void 0,void 0,(function(){var t,n,r;return f(this,(function(i){switch(i.label){case 0:if(e&&e.preventDefault(),!u.g||"function"!==typeof u.g.signUp)throw new Error(l.N);this.loading=!0,this.assignFormInputToSignUpAttributes(),i.label=1;case 1:return i.trys.push([1,6,7,8]),this.validateSignUpAttributes(),[4,this.handleSignUp(this.signUpAttributes)];case 2:return(t=i.sent()).userConfirmed?[4,(0,p.h)(this.signUpAttributes.username,this.signUpAttributes.password,this.handleAuthStateChange)]:[3,4];case 3:return i.sent(),[3,5];case 4:n=Object.assign({},this.signUpAttributes),this.handleAuthStateChange(o.A.ConfirmSignUp,Object.assign(Object.assign({},t.user),{signUpAttrs:n})),i.label=5;case 5:return[3,8];case 6:return r=i.sent(),(0,d.a)(r),[3,8];case 7:return this.loading=!1,[7];case 8:return[2]}}))}))},e.prototype.buildDefaultFormFields=function(){switch(this.usernameAlias){case"email":this.newFormFields=[{type:"email",placeholder:i.o.get(h.T.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input",autocomplete:"username"}},{type:"password",placeholder:i.o.get(h.T.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input",autocomplete:"new-password"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input",autocomplete:"tel-national"}}];break;case"phone_number":this.newFormFields=[{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input",autocomplete:"username"}},{type:"password",placeholder:i.o.get(h.T.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input",autocomplete:"new-password"}},{type:"email",placeholder:i.o.get(h.T.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input",autocomplete:"email"}}];break;case"username":default:this.newFormFields=[{type:"username",placeholder:i.o.get(h.T.SIGN_UP_USERNAME_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("username"),inputProps:{"data-test":"sign-up-username-input",autocomplete:"username"}},{type:"password",placeholder:i.o.get(h.T.SIGN_UP_PASSWORD_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("password"),inputProps:{"data-test":"sign-up-password-input",autocomplete:"new-password"}},{type:"email",placeholder:i.o.get(h.T.SIGN_UP_EMAIL_PLACEHOLDER),required:!0,handleInputChange:this.handleFormFieldInputChange("email"),inputProps:{"data-test":"sign-up-email-input"}},{type:"phone_number",required:!0,handleInputChange:this.handleFormFieldInputChange("phone_number"),inputProps:{"data-test":"sign-up-phone-number-input"}}]}},e.prototype.buildFormFields=function(){var e=this;if(0===this.formFields.length)this.buildDefaultFormFields();else{var t=[];this.formFields.forEach((function(n){var r=Object.assign({},n);r.handleInputChange=function(t){return e.handleFormFieldInputWithCallback(t,n)},e.setFieldValue(n,e.signUpAttributes),t.push(r)})),this.newFormFields=t}},e.prototype.setFieldValue=function(e,t){switch(e.type){case"username":void 0===e.value?t.username="":t.username=e.value;break;case"password":void 0===e.value?t.password="":t.password=e.value;break;case"email":t.attributes.email=e.value;break;case"phone_number":e.dialCode&&(this.phoneNumber.countryDialCodeValue=e.dialCode),this.phoneNumber.phoneNumberValue=e.value;break;default:t.attributes[e.type]=e.value}},e.prototype.componentWillLoad=function(){(0,d.c)(this.usernameAlias),this.buildFormFields()},e.prototype.formFieldsHandler=function(){this.buildFormFields()},e.prototype.render=function(){var e=this;return(0,r.h)(r.H,null,(0,r.h)("amplify-form-section",{headerText:i.o.get(this.headerText),handleSubmit:this.handleSubmit,testDataPrefix:"sign-up"},(0,r.h)("div",{slot:"subtitle"},(0,r.h)("slot",{name:"header-subtitle"})),(0,r.h)("amplify-auth-fields",{formFields:this.newFormFields}),(0,r.h)("div",{class:"sign-up-form-footer",slot:"amplify-form-section-footer"},(0,r.h)("slot",{name:"footer"},(0,r.h)("slot",{name:"secondary-footer-content"},(0,r.h)("span",null,i.o.get(this.haveAccountText)," ",(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.A.SignIn)},"data-test":"sign-up-sign-in-link"},i.o.get(this.signInText)))),(0,r.h)("slot",{name:"primary-footer-content"},(0,r.h)("amplify-button",{type:"submit","data-test":"sign-up-create-account-button",disabled:this.loading},this.loading?(0,r.h)("amplify-loading-spinner",null):(0,r.h)("span",null,i.o.get(this.submitButtonText))))))))},Object.defineProperty(e,"watchers",{get:function(){return{formFields:["formFieldsHandler"]}},enumerable:!1,configurable:!0}),e}();A.style="amplify-sign-up{--footer-font-family:var(--amplify-font-family);--footer-font-size:var(--amplify-text-sm);--footer-color:var(--amplify-grey);--font-weight:var(--amplify-font-weight)}.sign-up-form-footer{font-family:var(--footer-font-family);font-size:var(--footer-font-size);color:var(--footer-color);font-weight:--font-weight;display:-ms-flexbox;display:flex;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.sign-up-form-footer amplify-button{margin-bottom:0.625rem}@media (min-width: 672px){.sign-up-form-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}.sign-up-form-footer amplify-button{margin-bottom:0}}.sign-up-form-footer *+*{margin-bottom:15px}";var _=new s.k("AmplifyVerifyContact"),T=function(){function e(e){(0,r.r)(this,e),this.handleAuthStateChange=d.d,this.loading=!1}return e.prototype.handleSubmit=function(e){e.preventDefault(),this.verifyAttr?this.submit(this.code):this.verify(this.contact)},e.prototype.submit=function(e){return c(this,void 0,void 0,(function(){var t,n,r;return f(this,(function(i){switch(i.label){case 0:if(t=this.verifyAttr,!u.g||"function"!==typeof u.g.verifyCurrentUserAttributeSubmit)throw new Error(l.N);this.loading=!0,i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,u.g.verifyCurrentUserAttributeSubmit(t,e)];case 2:return n=i.sent(),_.debug(n),this.handleAuthStateChange(o.A.SignedIn,this.user),this.verifyAttr=null,[3,5];case 3:return r=i.sent(),(0,d.a)(r),_.error(r),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.verify=function(e){return c(this,void 0,void 0,(function(){var t,n;return f(this,(function(r){switch(r.label){case 0:if(!e)return _.error("Neither Email nor Phone Number selected"),[2];if(!u.g||"function"!==typeof u.g.verifyCurrentUserAttribute)throw new Error(l.N);this.loading=!0,r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,u.g.verifyCurrentUserAttribute(e)];case 2:return t=r.sent(),_.debug(t),this.verifyAttr=e,[3,5];case 3:return n=r.sent(),(0,d.a)(n),_.error(n),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.handleInputChange=function(e){var t=e.target.name;"code"===t?this.code=e.target.value:"contact"===t&&(this.contact=e.target.value)},e.prototype.renderSubmit=function(){var e=this;return(0,r.h)("div",null,(0,r.h)("amplify-input",{inputProps:{autocomplete:"off","data-test":"verify-contact-code-input"},name:"code",placeholder:i.o.get(h.T.CODE_PLACEHOLDER),handleInputChange:function(t){return e.handleInputChange(t)}}))},e.prototype.renderVerify=function(){var e=this,t=this.user;if(!t)return _.debug("No user to verify"),null;var n=t.unverified;if(!n)return _.debug("Unverified variable does not exist on user"),null;var s=n.email,a=n.phone_number;return(0,r.h)("div",null,s&&(0,r.h)("amplify-radio-button",{label:i.o.get(h.T.VERIFY_CONTACT_EMAIL_LABEL),key:"email",name:"contact",value:"email",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-email-radio"}}),a&&(0,r.h)("amplify-radio-button",{label:i.o.get(h.T.VERIFY_CONTACT_PHONE_LABEL),key:"phone_number",name:"contact",value:"phone_number",handleInputChange:function(t){return e.handleInputChange(t)},inputProps:{"data-test":"verify-contact-phone-number-radio"}}))},e.prototype.render=function(){var e=this;return(0,r.h)(r.H,null,(0,r.h)("amplify-form-section",{handleSubmit:function(t){return e.handleSubmit(t)},headerText:i.o.get(h.T.VERIFY_CONTACT_HEADER_TEXT),loading:this.loading,secondaryFooterContent:(0,r.h)("span",null,(0,r.h)("amplify-button",{variant:"anchor",onClick:function(){return e.handleAuthStateChange(o.A.SignedIn,e.user)},"data-test":"verify-contact-skip-link"},i.o.get(h.T.SKIP))),submitButtonText:this.verifyAttr?i.o.get(h.T.VERIFY_CONTACT_SUBMIT_LABEL):i.o.get(h.T.VERIFY_CONTACT_VERIFY_LABEL)},this.verifyAttr?this.renderSubmit():this.renderVerify()))},e}()},2168:function(e,t,n){n.d(t,{c:function(){return f},h:function(){return m}});var r=n(3769),i=n(9222),s=n(5573),a=n(531),o=n(2551),u=n(8063),h=n(4636),l=n(1186),d=function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function a(e){try{u(r.next(e))}catch(t){s(t)}}function o(e){try{u(r.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}u((r=r.apply(e,t||[])).next())}))},p=function(e,t){var n,r,i,s,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(o){s=[6,o],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}},c=new r.k("auth-helpers");function f(e,t){return d(this,void 0,void 0,(function(){var n,r,o;return p(this,(function(u){switch(u.label){case 0:if(!a.g||"function"!==typeof a.g.verifiedContact)throw new Error(h.N);if(!g(e))return t(s.A.SignedIn,e),[2];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,a.g.verifiedContact(e)];case 2:return n=u.sent(),!(0,i.xb)(n.verified)||(0,i.xb)(n.unverified)?t(s.A.SignedIn,e):(r=Object.assign(e,n),t(s.A.VerifyContact,r)),[3,4];case 3:return o=u.sent(),(0,l.a)(o),[3,4];case 4:return[2]}}))}))}var m=function(e,t,n,r){return d(void 0,void 0,void 0,(function(){var i,o;return p(this,(function(d){switch(d.label){case 0:if(!a.g||"function"!==typeof a.g.signIn)throw new Error(h.N);d.label=1;case 1:return d.trys.push([1,9,,10]),[4,a.g.signIn(e,t)];case 2:return i=d.sent(),c.debug(i),i.challengeName!==s.C.SMSMFA&&i.challengeName!==s.C.SoftwareTokenMFA?[3,3]:(c.debug("confirm user with "+i.challengeName),n(s.A.ConfirmSignIn,i),[3,8]);case 3:return i.challengeName!==s.C.NewPasswordRequired?[3,4]:(c.debug("require new password",i.challengeParam),n(s.A.ResetPassword,i),[3,8]);case 4:return i.challengeName!==s.C.MFASetup?[3,5]:(c.debug("TOTP setup",i.challengeParam),n(s.A.TOTPSetup,i),[3,8]);case 5:return i.challengeName===s.C.CustomChallenge&&i.challengeParam&&"true"===i.challengeParam.trigger?(c.debug("custom challenge",i.challengeParam),n(s.A.CustomConfirmSignIn,i),[3,8]):[3,6];case 6:return[4,f(i,n)];case 7:d.sent(),d.label=8;case 8:return[3,10];case 9:return"UserNotConfirmedException"===(o=d.sent()).code?(c.debug("the user is not confirmed"),n(s.A.ConfirmSignUp,{username:e})):"PasswordResetRequiredException"===o.code?(c.debug("the user requires a new password"),n(s.A.ForgotPassword,{username:e})):"InvalidParameterException"===o.code&&""===t?(c.debug("Password cannot be empty"),o.message=u.T.EMPTY_PASSWORD):o.message===u.T.EMPTY_USERNAME&&(r===s.U.email&&(o.message=u.T.EMPTY_EMAIL),r===s.U.phone_number&&(o.message=u.T.EMPTY_PHONE)),(0,l.a)(o),[3,10];case 10:return[2]}}))}))},g=function(e){return e instanceof o.ws}}}]);