"use strict";(self.webpackChunktutor=self.webpackChunktutor||[]).push([[156],{156:(O,g,s)=>{s.r(g),s.d(g,{LoginModule:()=>M});var m=s(177),c=s(897),r=s(9417),n=s(7705),d=s(8540),u=s(9213);function f(o,l){1&o&&(n.j41(0,"small"),n.EFF(1,"Phone number is required."),n.k0s())}function h(o,l){1&o&&(n.j41(0,"small"),n.EFF(1,"Invalid phone number. Must be 10 digits."),n.k0s())}function b(o,l){if(1&o&&(n.j41(0,"div",13),n.DNE(1,f,2,0,"small",14),n.DNE(2,h,2,0,"small",14),n.k0s()),2&o){const t=n.XpG();let i,e;n.R7$(1),n.Y8G("ngIf",null==(i=t.loginForm.get("phoneNumber"))?null:i.hasError("required")),n.R7$(1),n.Y8G("ngIf",null==(e=t.loginForm.get("phoneNumber"))?null:e.hasError("pattern"))}}function C(o,l){1&o&&(n.j41(0,"small"),n.EFF(1,"Password is required."),n.k0s())}function x(o,l){1&o&&(n.j41(0,"small"),n.EFF(1,"Password must be at least 6 characters long."),n.k0s())}function _(o,l){if(1&o&&(n.j41(0,"div",13),n.DNE(1,C,2,0,"small",14),n.DNE(2,x,2,0,"small",14),n.k0s()),2&o){const t=n.XpG();let i,e;n.R7$(1),n.Y8G("ngIf",null==(i=t.loginForm.get("password"))?null:i.hasError("required")),n.R7$(1),n.Y8G("ngIf",null==(e=t.loginForm.get("password"))?null:e.hasError("minlength"))}}const P=[{path:"",component:(()=>{class o{constructor(t,i,e){this.fb=t,this.route=i,this.signIn=e,this.hidePassword=!0,this.loginForm=this.fb.group({phoneNumber:["",[r.k0.required,r.k0.pattern("^[0-9]{10}$")]],password:["",[r.k0.required,r.k0.minLength(6)]]})}onSubmit(){this.loginForm.invalid?Object.values(this.loginForm.controls).forEach(t=>{t.markAsTouched()}):(this.signIn.login(this.loginForm.value).subscribe(t=>{console.log(t),1==t.success&&(this.route.navigate(["/home"]),localStorage.setItem("accessToken",t.data.accessToken))},t=>{}),console.log("Form Submitted!",this.loginForm.value))}togglePasswordVisibility(){this.hidePassword=!this.hidePassword}static{this.\u0275fac=function(i){return new(i||o)(n.rXU(r.ok),n.rXU(c.Ix),n.rXU(d._))}}static{this.\u0275cmp=n.VBU({type:o,selectors:[["app-login"]],decls:24,vars:5,consts:[[1,"login-container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","phoneNumber"],["type","text","id","phoneNumber","formControlName","phoneNumber","placeholder","Enter phone number",1,"form-control"],["class","error-message",4,"ngIf"],["for","password"],[1,"password-container"],["id","password","formControlName","password","placeholder","Enter password",1,"form-control",3,"type"],[1,"eye-icon",3,"click"],["type","submit",1,"btn","btn-primary"],[1,"create-account"],["routerLink","/account/signup"],[1,"error-message"],[4,"ngIf"]],template:function(i,e){if(1&i&&(n.j41(0,"div",0)(1,"h2"),n.EFF(2,"Login"),n.k0s(),n.j41(3,"form",1),n.bIt("ngSubmit",function(){return e.onSubmit()}),n.j41(4,"div",2)(5,"label",3),n.EFF(6,"Phone Number"),n.k0s(),n.nrm(7,"input",4),n.DNE(8,b,3,2,"div",5),n.k0s(),n.j41(9,"div",2)(10,"label",6),n.EFF(11,"Password"),n.k0s(),n.j41(12,"div",7),n.nrm(13,"input",8),n.j41(14,"mat-icon",9),n.bIt("click",function(){return e.togglePasswordVisibility()}),n.EFF(15),n.k0s()(),n.DNE(16,_,3,2,"div",5),n.k0s(),n.j41(17,"button",10),n.EFF(18,"Login"),n.k0s()(),n.j41(19,"div",11)(20,"p"),n.EFF(21,"Don't have an account? "),n.j41(22,"a",12),n.EFF(23,"Create an account"),n.k0s()()()()),2&i){let a,p;n.R7$(3),n.Y8G("formGroup",e.loginForm),n.R7$(5),n.Y8G("ngIf",(null==(a=e.loginForm.get("phoneNumber"))?null:a.touched)&&(null==(a=e.loginForm.get("phoneNumber"))?null:a.invalid)),n.R7$(5),n.Y8G("type",e.hidePassword?"password":"text"),n.R7$(2),n.SpI(" ",e.hidePassword?"visibility_off":"visibility"," "),n.R7$(1),n.Y8G("ngIf",(null==(p=e.loginForm.get("password"))?null:p.touched)&&(null==(p=e.loginForm.get("password"))?null:p.invalid))}},dependencies:[m.bT,c.Wk,r.qT,r.me,r.BC,r.cb,r.j4,r.JD,u.An],styles:[".login-container[_ngcontent-%COMP%]{width:300px;margin:50px auto;padding:20px;background-color:#000;border-radius:8px;box-shadow:0 4px 6px #0000001a;color:#fff}.form-group[_ngcontent-%COMP%]{margin-bottom:15px}.form-control[_ngcontent-%COMP%]{width:93%;padding:10px;font-size:14px;margin-top:5px;border-radius:4px;border:1px solid #ccc;background-color:#333;color:#fff}.password-container[_ngcontent-%COMP%]{position:relative}.eye-icon[_ngcontent-%COMP%]{position:absolute;top:50%;right:10px;transform:translateY(-50%);cursor:pointer;font-size:24px;color:#fff}.btn[_ngcontent-%COMP%]{width:100%;padding:10px;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-top:10px}.error-message[_ngcontent-%COMP%]{color:red}.btn[_ngcontent-%COMP%]:hover{background-color:#0056b3}.create-account[_ngcontent-%COMP%]{text-align:center;margin-top:15px}.create-account[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#fff}.create-account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#00aced;text-decoration:none}.create-account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}h2[_ngcontent-%COMP%]{text-align:center;font-size:20px}@media screen and (max-width: 768px){.login-container[_ngcontent-%COMP%]{width:85%;margin:20px auto;padding:15px}.form-control[_ngcontent-%COMP%]{width:90%;font-size:16px;padding:12px}.btn[_ngcontent-%COMP%]{padding:12px;font-size:16px}h2[_ngcontent-%COMP%]{font-size:18px}.create-account[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px}.eye-icon[_ngcontent-%COMP%]{font-size:20px}}@media screen and (max-width: 480px){.login-container[_ngcontent-%COMP%]{width:95%;margin:10px auto;padding:10px}.form-control[_ngcontent-%COMP%]{font-size:18px;padding:14px}.btn[_ngcontent-%COMP%]{padding:14px;font-size:18px}h2[_ngcontent-%COMP%]{font-size:16px}.create-account[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}.eye-icon[_ngcontent-%COMP%]{font-size:18px}}"]})}}return o})(),pathMatch:"full"}];let v=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275mod=n.$C({type:o})}static{this.\u0275inj=n.G2t({imports:[c.iI.forChild(P),c.iI]})}}return o})();var F=s(1626);let M=(()=>{class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275mod=n.$C({type:o})}static{this.\u0275inj=n.G2t({providers:[d._],imports:[m.MD,v,r.YN,r.X1,u.m_,F.q1]})}}return o})()}}]);