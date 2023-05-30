import{_ as X,u as Y,r as o,s as q,a as c,o as u,c as p,e as n,h as g,v as V,b as a,w as l,t as m,g as _,k as M,m as L,d,F as D,f as E}from"./index-ca4c79a5.js";import{S as Z}from"./SelectUsers-b27ad9ac.js";const $={name:"CreateIssue",components:{SelectUsers:Z},setup(){const C=Y();let s=o(""),A=o(""),e=o("new"),T=o("Bug"),j=o("Wishlist"),k=o("Low"),i=o(null),y=o(),P=o(null),B=o(!1),N=o(""),I=o(!1),S=o([]);q("usuaris/","GET","").then(r=>S.value=r);const f=["new","In progress","Ready for test","Closed","Needs info","Rejected","Postponed"],x=["Bug","Question","Enhancement"],h=["Wishlist","Minor","Normal","Important","Critical"],b=["Low","Normal","High"];let w=o(!1),t=o(!1);function v(r){T.value=r}function U(r){j.value=r}function G(r){k.value=r}function R(){switch(e.value){case"new":return"N";case"In progress":return"D";case"Ready for test":return"T";case"Closed":return"C";case"Needs info":return"I";case"Rejected":return"R";case"Postponed":return"P";default:return"B"}}function F(){switch(T.value){case"Bug":return"B";case"Question":return"P";case"Enhancement":return"M";default:return"B"}}function W(){switch(j.value){case"Wishlist":return"D";case"Minor":return"M";case"Normal":return"N";case"Important":return"I";case"Critical":return"C";default:return"D"}}function H(){switch(k.value){case"High":return"A";case"Normal":return"M";case"Low":return"B";default:return"A"}}function Q(r){i.value=r.id,y.value=r,I.value=!1}function O(){i.value=1,console.log("auto assign user hardcoded: ",i.value)}function z(){i.value=null,y.value=void 0}async function J(){let r={subject:s.value,descripcio:A.value,tipus:F(),estat:R(),gravetat:W(),prioritat:H(),assignacio_id:i.value,dataLimit:P.value,bloquejat:B.value,motiuBloqueig:N.value};console.log("result obj: ",r),await q("issues/","POST",r).then(K=>console.log("post response: ",K)),C.push("/"),console.log("issue create")}return{estat:e,TEstats:f,tipus:T,TTipus:x,gravetat:j,TPrioritat:b,prioritat:k,TGravetat:h,titleIssue:s,description:A,assignat:i,assignatPerfil:y,selectAssign:I,allUsers:S,dataLimit:P,isTimeLine:t,showDatePickker:w,bloquejat:B,motiuBlock:N,esborrar_assignacio:z,assignSelect:Q,autoAssign:O,setGravetat:U,setTipus:v,createNewIssue:J,setPrioritat:G}}},ee={class:"lightbox lightbox-generic-form lightbox-create-edit open"},te=n("a",{class:"close",href:"/issues"},[n("i",{class:"fa fa-times","aria-hidden":"true"})],-1),se={method:"post",enctype:"multipart/form-data"},le=n("h2",{class:"title"},"New issue",-1),ne={class:"form-wrapper"},ae={class:"main"},ie={class:"sidebar ticket-data"},oe={key:0,style:{border:"1px solid black","border-radius":"10px"}},re={key:1,style:{display:"flex","justify-content":"space-between","margin-left":"5px","margin-right":"5px","background-color":"whitesmoke",padding:"5px","min-width":"200px"}},ce=["src"],ue=["href"],de={class:"ticket-data-container",style:{"margin-top":"10px"}},ve={style:{display:"flex","justify-content":"space-between","margin-left":"10px"}},fe=n("label",null," type ",-1),me={style:{display:"flex","justify-content":"space-between","margin-left":"10px"}},_e=n("label",null," severity ",-1),pe={style:{display:"flex","justify-content":"space-between","margin-left":"10px"}},ge=n("label",null," priority ",-1),ke={class:"ticket-section ticket-detail-settings"},ye={class:"ticket-detail-settings"},xe={style:{display:"flex","justify-content":"space-between"}},he={style:{display:"flex","justify-content":"space-between"}},be=n("label",{style:{"margin-top":"5px","margin-right":"5px"}},"Motiu: ",-1);function we(C,s,A,e,T,j){const k=c("v-select"),i=c("v-btn"),y=c("v-card-title"),P=c("v-text-field"),B=c("SelectUsers"),N=c("v-card-text"),I=c("v-card"),S=c("v-dialog"),f=c("font-awesome-icon"),x=c("v-list-item-title"),h=c("v-list-item"),b=c("v-list"),w=c("v-menu");return u(),p("div",ee,[te,n("div",null,[n("form",se,[le,n("div",null,[n("div",ne,[n("div",ae,[g(n("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>e.titleIssue=t),type:"text"},null,512),[[V,e.titleIssue]]),g(n("textarea",{"onUpdate:modelValue":s[1]||(s[1]=t=>e.description=t),rows:"7",placeholder:"Description",class:"description ng-pristine ng-untouched ng-valid ng-empty",style:{"margin-top":"5px"}},null,512),[[V,e.description]])]),n("div",ie,[n("div",null,[a(k,{class:"ml-3",label:"Select",density:"compact",items:e.TEstats,modelValue:e.estat,"onUpdate:modelValue":s[2]||(s[2]=t=>e.estat=t)},null,8,["items","modelValue"]),e.assignat==null?(u(),p("div",oe,[a(S,{modelValue:e.selectAssign,"onUpdate:modelValue":s[4]||(s[4]=t=>e.selectAssign=t),width:"auto"},{activator:l(({props:t})=>[a(i,L(t,{variant:"text",class:"ticket-users-actions ml-0"}),{default:l(()=>[d(" Assign ")]),_:2},1040)]),default:l(()=>[a(I,{width:"600px"},{default:l(()=>[a(y,null,{default:l(()=>[d(" Select user ")]),_:1}),a(N,null,{default:l(()=>[a(P,{placeholder:"Search for users"}),a(B,{type:"assign",users:e.allUsers,onUserSelect:e.assignSelect},null,8,["users","onUserSelect"]),a(i,{onClick:s[3]||(s[3]=t=>e.selectAssign=!1),color:"red",class:"mt-10 ml-16"},{default:l(()=>[d(" close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(i,{variant:"text",onClick:s[5]||(s[5]=t=>e.autoAssign())},{default:l(()=>[d(" Assign to me ")]),_:1})])):(u(),p("div",re,[n("img",{src:e.assignatPerfil.avatar,width:"60",height:"60"},null,8,ce),n("a",{href:/usuaris/+C.issue.assignacio.id,style:{"margin-top":"20px"}},m(C.issue.assignacio.nom),9,ue),n("button",{onClick:s[6]||(s[6]=t=>e.esborrar_assignacio()),variant:"flat",color:"whitesmoke"},[a(f,{icon:"xmark"})])])),n("div",de,[n("div",ve,[fe,a(w,null,{activator:l(({props:t})=>[a(i,L(t,{variant:"text"}),{default:l(()=>[d(m(e.tipus),1)]),_:2},1040)]),default:l(()=>[a(b,null,{default:l(()=>[(u(!0),p(D,null,E(e.TTipus,(t,v)=>(u(),_(h,{key:v,value:v},{default:l(()=>[a(x,{onClick:U=>e.setTipus(t)},{default:l(()=>[d(m(t),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),n("div",me,[_e,a(w,null,{activator:l(({props:t})=>[a(i,L(t,{variant:"text"}),{default:l(()=>[d(m(e.gravetat),1)]),_:2},1040)]),default:l(()=>[a(b,null,{default:l(()=>[(u(!0),p(D,null,E(e.TGravetat,(t,v)=>(u(),_(h,{key:v,value:v},{default:l(()=>[a(x,{onClick:U=>e.setGravetat(t)},{default:l(()=>[d(m(t),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),n("div",pe,[ge,a(w,null,{activator:l(({props:t})=>[a(i,L({variant:"text"},t),{default:l(()=>[d(m(e.prioritat),1)]),_:2},1040)]),default:l(()=>[a(b,null,{default:l(()=>[(u(!0),p(D,null,E(e.TPrioritat,(t,v)=>(u(),_(h,{key:v,value:v},{default:l(()=>[a(x,{onClick:U=>e.setPrioritat(t)},{default:l(()=>[d(m(t),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),n("section",ke,[n("div",ye,[n("div",null,[e.isTimeLine?(u(),_(i,{key:0,style:{background:"red"},variant:"flat",onClick:s[7]||(s[7]=t=>{e.isTimeLine=!1,e.showDatePickker=!1})},{default:l(()=>[a(f,{icon:"clock"})]),_:1})):(u(),_(i,{key:1,onClick:s[8]||(s[8]=t=>e.showDatePickker=!0),variant:"flat"},{default:l(()=>[a(f,{icon:"clock"})]),_:1}))]),n("div",null,[e.bloquejat?(u(),_(i,{key:0,variant:"flat",style:{background:"red","margin-left":"5px"},onClick:s[9]||(s[9]=t=>e.bloquejat=!1)},{default:l(()=>[a(f,{icon:"lock"})]),_:1})):(u(),_(i,{key:1,style:{"margin-left":"5px"},onClick:s[10]||(s[10]=t=>e.bloquejat=!0),variant:"flat"},{default:l(()=>[a(f,{icon:"lock"})]),_:1}))])])]),g(n("div",xe,[g(n("input",{type:"date","onUpdate:modelValue":s[11]||(s[11]=t=>e.dataLimit=t)},null,512),[[V,e.dataLimit]]),a(i,{onClick:s[12]||(s[12]=t=>e.isTimeLine=!0),style:{"margin-left":"5px"},variant:"flat"},{default:l(()=>[a(f,{icon:"floppy-disk"})]),_:1})],512),[[M,e.showDatePickker]]),g(n("div",he,[be,g(n("input",{type:"text","onUpdate:modelValue":s[13]||(s[13]=t=>e.motiuBlock=t)},null,512),[[V,e.motiuBlock]])],512),[[M,e.bloquejat]])])])]),a(i,{onClick:s[14]||(s[14]=t=>e.createNewIssue()),class:"btn-big add-item",style:{"margin-top":"10px","margin-bottom":"10px"}},{default:l(()=>[d(" Enviar ")]),_:1})])])])])}const je=X($,[["render",we]]);export{je as default};
