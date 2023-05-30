import{_ as Z,o as c,c as r,b as t,t as d,u as At,r as m,s as _,l as Bt,a as b,d as a,j as O,F as C,f as U,h as j,k as Y,v as L,e as p,w as l,n as tt,q as Vt,x as et,y as st,g as N,m as q,p as It,i as Ot}from"./index-e1fa628c.js";import{S as Lt}from"./SelectUsers-7a522de7.js";const Nt={name:"ActivitesEdit",props:{activity:Object},setup(){return{}}},qt={style:{display:"flex","justify-content":"space-between","margin-left":"5px","margin-right":"5px","margin-top":"5px","border-bottom":"0.5px solid grey"}},Mt={style:{display:"flex","justify-content":"space-between","margin-top":"10px","margin-bottom":"20px"}},zt=["src"],Ft={style:{"margin-left":"10px"}},Gt={style:{display:"flex","margin-left":"5px"}},Wt={href:"/usuaris/{{activity.usuari.id}}",style:{"margin-right":"5px"},class:"comment-creator"},Rt={key:0,class:"diff-status-wrapper",style:{"margin-top":"20px"}},Ht=t("span",{style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},"Creada: ",-1),Qt=t("span",{style:{"margin-left":"5px"},class:"diff"},"userHardcoded",-1),Jt=[Ht,Qt],Kt={key:1,class:"diff-status-wrapper",style:{"margin-top":"20px"}},Xt=t("span",{style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},"New attachment: ",-1),Yt={style:{"margin-left":"5px"},class:"diff"},Zt={key:2,class:"diff-status-wrapper",style:{"margin-top":"20px"}},$t=t("span",{style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},"Deleted attachment: ",-1),te={style:{"margin-left":"5px"},class:"diff"},ee={key:3,class:"diff-status-wrapper",style:{"margin-top":"20px"}},se=t("span",{style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},"Tags added: ",-1),ie={style:{"margin-left":"5px"},class:"diff"},oe={key:4,class:"diff-status-wrapper",style:{"margin-top":"20px"}},ae=t("span",{style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},"Tags removed: ",-1),ne={style:{"margin-left":"5px"},class:"diff"},le={key:5,class:"diff-status-wrapper",style:{"margin-top":"20px"}},ce={style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},re={style:{"margin-left":"5px"},class:"diff"};function de(w,i,u,e,M,z){return c(),r("li",null,[t("div",qt,[t("div",Mt,[t("img",{src:u.activity.usuari.avatar,width:"60",height:"60"},null,8,zt),t("div",Ft,[t("div",Gt,[t("a",Wt,d(u.activity.usuari.nom),1),t("span",null,d(u.activity.data),1)]),u.activity.tipus==="Creada"?(c(),r("div",Rt,Jt)):u.activity.tipus==="Nou attachment"?(c(),r("div",Kt,[Xt,t("span",Yt,d(u.activity.valor_nou),1)])):u.activity.tipus==="Attachment esborrat"?(c(),r("div",Zt,[$t,t("span",te,d(u.activity.valor_previ),1)])):u.activity.tipus==="Tag afegida"?(c(),r("div",ee,[se,t("span",ie,d(u.activity.valor_nou),1)])):u.activity.tipus==="Tag esborrada"?(c(),r("div",oe,[ae,t("span",ne,d(u.activity.valor_previ),1)])):(c(),r("div",le,[t("span",ce,d(u.activity.tipus)+": ",1),t("span",re,d(u.activity.valor_previ)+" > "+d(u.activity.valor_nou),1)]))])])])])}const ue=Z(Nt,[["render",de]]),_e={name:"ComentarisEdit",props:{comentari:Object},setup(){return{}}},me={style:{"border-bottom":"0.5px solid grey"}},ve={style:{display:"flex","margin-left":"5px","margin-right":"5px","margin-top":"10px","margin-bottom":"20px"}},he=["src"],ge={style:{"margin-left":"10px"}},fe={style:{display:"flex","justify-content":"space-between"}},ye={href:"/usuaris/{{comentari.autor.id}}",style:{"margin-right":"5px"},class:"comment-creator"};function pe(w,i,u,e,M,z){return c(),r("li",null,[t("div",me,[t("div",ve,[t("img",{src:u.comentari.autor.avatar,width:"60",height:"60"},null,8,he),t("div",ge,[t("div",fe,[t("a",ye,d(u.comentari.autor.nom),1),t("span",null,d(u.comentari.data),1)]),t("span",null,d(u.comentari.text),1)])])])])}const be=Z(_e,[["render",pe]]);const ke={name:"listIssue",components:{ActivitiesEdit:ue,ComentarisEdit:be,SelectUsers:Lt},setup(){const w=At();let u=window.location.href.split("/"),e=m(u[u.length-1]),M=m(""),z=m(""),D=m(""),h=m(""),F=m();const x=["new","In progress","Ready for test","Closed","Needs info","Rejected","Postponed"],B=["Bug","Question","Enhancement"],V=["Wishlist","Minor","Normal","Important","Critical"],Q=["Low","Normal","High"];let G=m("new"),P=m("Bug"),S=m("Wishlist"),E=m("Low"),T=m(),A=m(lt()),W=m(!0),R=m(!0),s=m(!1),v=m(!1),k=m(!1),it=m(!1),J=m([]);_("usuaris/","GET","").then(o=>J.value=o),console.log("all Users: ",J.value);let $=m(),K=m(""),H=m(""),ot=m(!1),at=m(!1);const nt=Bt(()=>{let o=!1;for(let n of T.value.observadors)n.id==A.value&&(o=!0);return o});function lt(){let o="id=",y=decodeURIComponent(document.cookie).split(";");for(let X=0;X<y.length;X++){let I=y[X];for(;I.charAt(0)==" ";)I=I.substring(1);if(I.indexOf(o)==0)return I.substring(o.length,I.length)}return""}async function ct(){const o=new FormData;o.append("document",F.value[0]),await _("issues/"+e.value+"/attachments/","POST",o,"formData"),f(),F.value=null}function rt(o){const n=o.split("/");return n[n.length-1]}async function dt(){let o={observador:A.value};await _("issues/"+e.value+"/observadors/","POST",o).then(n=>console.log("PUT",n)),f()}async function ut(o){console.log("new obs: ",o.id);let n={observador:o.id};await _("issues/"+e.value+"/observadors/","POST",n).then(y=>console.log("PUT",y)),f()}async function _t(){await _("issues/"+e.value+"/observadors/"+A.value,"DELETE").then(o=>console.log("PUT",o)),f()}async function mt(o){await _("issues/"+e.value+"/observadors/"+o,"DELETE").then(n=>console.log("PUT",n)),f()}function vt(o){G.value=o;let n;switch(G.value){case"new":n="N";break;case"In progress":n="D";break;case"Ready for test":n="T";break;case"Closed":n="C";break;case"Needs info":n="I";break;case"Rejected":n="R";break;case"Postponed":n="P";break;default:n="B"}let y={estat:n};_("issues/"+e.value+"/","PUT",y)}function ht(o){P.value=o;let n;switch(P.value){case"Bug":n="B";break;case"Question":n="P";break;case"Enhancement":n="M";break;default:n="B"}let y={tipus:n};_("issues/"+e.value+"/","PUT",y)}function gt(o){S.value=o;let n;switch(S.value){case"Wishlist":n="D";break;case"Minor":n="M";break;case"Normal":n="N";break;case"Important":n="I";break;case"Critical":n="C";break;default:n="D"}let y={gravetat:n};_("issues/"+e.value+"/","PUT",y)}function ft(o){E.value=o;let n;switch(E.value){case"High":n="A";break;case"Normal":n="M";break;case"Low":n="B";break;default:n="A"}let y={prioritat:n};_("issues/"+e.value+"/","PUT",y)}async function yt(){console.log("issue deleted"),await _("issues/"+e.value,"DELETE"),w.push("/")}async function pt(o){console.log("esborrar attachment: ",o),await _("issues/"+e.value+"/attachments/"+o.id,"DELETE"),f()}async function bt(o){console.log("esborrar tag issue: ",o.nom),await _("issues/"+e.value+"/tags/"+o.nom,"DELETE"),f()}async function kt(){let o={nom:D.value,color:h.value};await _("issues/"+e.value+"/tags/","POST",o),f(),W.value=!0,D.value=""}async function xt(){let o={descripcio:z.value};await _("issues/"+e.value+"/","PUT",o)}async function wt(){let o={subject:M.value};await _("issues/"+e.value+"/","PUT",o)}async function Tt(){console.log("comment added: ",H.value);let o={text:H.value};await _("issues/"+e.value+"/comentaris/","POST",o).then(n=>console.log("POST",n)),f(),H.value=""}async function Ct(o){k.value=!1;let n={assignacio_id:o.id};await _("issues/"+e.value+"/","PUT",n).then(y=>console.log("PUT",y)),f()}async function Ut(o){k.value=!1;let n={assignacio_id:o};await _("issues/"+e.value+"/","PUT",n).then(y=>console.log("PUT",y)),f()}async function jt(){let o={assignacio_id:null};await _("issues/"+e.value+"/","PUT",o).then(n=>T.value=n),f()}async function Pt(){let o={dataLimit:null};await _("issues/"+e.value+"/","PUT",o).then(n=>console.log("PUT",n)),f()}async function St(){let o={bloquejat:!1,motiuBloqueig:""};await _("issues/"+e.value+"/","PUT",o).then(n=>console.log("PUT",n)),f()}async function Et(){s.value=!1;let o={dataLimit:new Date($.value).toISOString()};await _("issues/"+e.value+"/","PUT",o).then(n=>console.log("PUT",n)),f()}async function Dt(){let o={bloquejat:!0,motiuBloqueig:K.value};v.value=!1,await _("issues/"+e.value+"/","PUT",o).then(n=>console.log("PUT",n)),f(),K.value=""}function f(){_("issues/"+e.value+"/","GET","").then(o=>T.value=o)}return{nomTag:D,colorTag:h,comment:H,issueTitle:M,issueDesc:z,issue:T,hihaComentaris:R,addTag:W,TEstats:x,TTipus:B,TGravetat:V,TPrioritat:Q,estat:G,tipus:P,gravetat:S,prioritat:E,idUser:A,showDatePickker:s,showBlock:v,autoObservador:nt,selectAssign:k,selectObs:it,allUsers:J,date:$,motiuBlock:K,attachmentFile:F,dialogTrash:ot,dialogTrashAttachment:at,esborrar_observador:mt,esborrar_assignacio:jt,esborrar_tag_issue:bt,esborrar_attachment:pt,addAttachment:ct,guardarDesc:xt,deleteBlock:St,deleteTimeLine:Pt,setEstat:vt,setTipus:ht,setPrioritat:ft,setGravetat:gt,saveEdit:wt,obsSelected:ut,assignSelect:Ct,actualitzarInfo:f,btnSaveMotiuBloqueig:Dt,btnSaveDateDirect:Et,afegir_comentari:Tt,addTagFetch:kt,deleteIssue:yt,unWatchIssue:_t,autoSelect:Ut,selfWatch:dt,attachmentName:rt}},mounted(){let i=window.location.href.split("/"),u=i[i.length-1];_("issues/"+u+"/","GET","").then(e=>{this.issue=e,this.issueTitle=e.subject,this.issueDesc=e.descripcio,this.showBlock=e.bloquejat,e.dataLimit!=null?this.showDatePickker=!0:this.showDatePickker=!1}),console.log("issueObject: ",this.issue)}},g=w=>(It("data-v-0c080c69"),w=w(),Ot(),w),xe={key:0,class:"master"},we={class:"wrapper"},Te={class:"main detail"},Ce={class:"detail-header-container"},Ue={class:"detail-header"},je={class:"detail-title-wrapper"},Pe={class:"detail-ref"},Se={class:"issue-text",style:{display:"inline-flex"}},Ee={class:"issue-ref"},De=g(()=>t("div",{class:"detail-project"},[t("div",{class:"section-name"},"Issue")],-1)),Ae={key:0,class:"detail-header-line block-desc-container"},Be={class:"blocked-sign",style:{color:"white"}},Ve={class:"block-description",style:{"margin-left":"5px",color:"#e5e5e5"}},Ie={key:1,class:"detail-header-line block-desc-container"},Oe={class:"blocked-sign",style:{color:"white"}},Le={class:"block-description",style:{"margin-left":"5px",color:"#e5e5e5"}},Ne=g(()=>t("div",{class:"action-buttons"},null,-1)),qe={class:"subheader"},Me={class:"tags-container",style:{display:"flex","justify-content":"space-between"}},ze={style:{display:"flex","justify-content":"space-between"}},Fe={style:{"margin-top":"auto","margin-bottom":"auto","margin-right":"5px","margin-left":"5px"}},Ge=["onClick"],We=g(()=>t("span",null,"Add tag",-1)),Re=g(()=>t("span",{style:{"font-size":"20px"}},"+",-1)),He=[We,Re],Qe={style:{display:"flex","justify-content":"space-between"}},Je={style:{display:"flex","justify-content":"space-between"}},Ke={class:"created-by"},Xe={class:"created-date"},Ye={class:"user-avatar",style:{"margin-left":"5px"}},Ze=["src"],$e={class:"detail-content"},ts={class:"duty-content",style:{"justify-content":"flex-start"}},es={style:{display:"flex","justify-content":"space-between"}},ss={style:{"margin-top":"10px"},class:"attachments attachments-full"},is={class:"attachments-header"},os={class:"attachment-title",style:{"margin-left":"5px"}},as={class:"attachments-num"},ns=g(()=>t("span",{class:"attachments-text",style:{"margin-left":"5px"}},"Attachments",-1)),ls={class:"options"},cs={class:"add-attach"},rs={class:"attachment-list sortable"},ds={style:{"margin-top":"5px","margin-left":"5px","border-bottom":"1px solid rgb(168, 168, 168)","font-size":"15px"}},us={style:{display:"flex","justify-content":"space-between"}},_s=["href"],ms=g(()=>t("div",{style:{"margin-left":"auto","margin-right":"auto","font-size":"30px"}}," Delete attachment... ",-1)),vs={style:{"margin-left":"auto","margin-right":"auto","font-size":"20px"}},hs=g(()=>t("p",null," Are you sure you want to delete? ",-1)),gs={style:{"margin-left":"auto","margin-right":"auto"}},fs={style:{"margin-left":"auto","margin-right":"auto"}},ys={class:"history"},ps={class:"history-tabs",style:{padding:"5px"}},bs={key:0,class:"comment"},ks={style:{display:"flex","justify-content":"space-between"}},xs={key:1,class:"activities"},ws={class:"activities-wrapper"},Ts={class:"sidebar ticket-data"},Cs={class:"ticket-header"},Us=g(()=>t("span",{class:"ticket-title ng-pristine ng-valid ng-untouched ng-not-empty"},[t("span",null,"Open")],-1)),js={style:{"background-color":"whitesmoke",display:"flex","justify-content":"space-between"}},Ps=g(()=>t("button",{id:"btnSaveState",type:"submit",name:"guardar_estat",style:{display:"none"}},null,-1)),Ss={class:"ticket-section ticket-data-container"},Es={class:"ticket-data-container"},Ds={style:{display:"flex","justify-content":"space-between"}},As=g(()=>t("label",null," type ",-1)),Bs=g(()=>t("button",{id:"btnSaveType",type:"submit",name:"guardar_tipus",style:{display:"none"}},null,-1)),Vs={style:{display:"flex","justify-content":"space-between"}},Is=g(()=>t("label",null," severity ",-1)),Os=g(()=>t("button",{id:"btnSaveGrav",type:"submit",name:"guardar_gravetat",style:{display:"none"}},null,-1)),Ls={style:{display:"flex","justify-content":"space-between"}},Ns=g(()=>t("label",null," priority ",-1)),qs=g(()=>t("button",{id:"btnSavePrior",type:"submit",name:"guardar_prioritat",style:{display:"none"}},null,-1)),Ms={class:"ticket-section ng-pristine ng-untouched ng-valid ng-not-empty"},zs=g(()=>t("div",{class:"ticket-section-label"},[t("span",null,"Assigned")],-1)),Fs={class:"ticket-user-list-container"},Gs={class:"ticket-user-list-content"},Ws=g(()=>t("div",{class:"ticket-user-list"},null,-1)),Rs={key:0,style:{display:"flex","justify-content":"space-between","margin-left":"5px","margin-right":"5px"}},Hs=["src"],Qs=["href"],Js={class:"ticket-users-actions"},Ks={class:"ticket-section ticket-watchers"},Xs=g(()=>t("div",{class:"ticket-section-label"},[t("span",null,"Watchers")],-1)),Ys={class:"ticket-user-list-container"},Zs={class:"ticket-user-list-content"},$s=g(()=>t("div",{class:"ticket-user-list"},null,-1)),ti={style:{display:"flex","justify-content":"space-between","margin-left":"5px","margin-right":"5px","margin-top":"5px"}},ei=["src"],si=["href"],ii=["onClick"],oi={class:"ticket-users-actions"},ai={class:"ticket-section ticket-detail-settings"},ni={class:"ticket-detail-settings"},li={style:{"margin-left":"5px"}},ci=g(()=>t("div",{style:{"margin-left":"auto","margin-right":"auto","font-size":"30px"}}," Delete issue ",-1)),ri={style:{"margin-left":"auto","margin-right":"auto","font-size":"20px"}},di=g(()=>t("p",null," Are you sure you want to delete? ",-1)),ui={style:{"margin-left":"auto","margin-right":"auto"}},_i={style:{"margin-left":"auto","margin-right":"auto"}},mi={style:{display:"flex","justify-content":"space-between"}},vi={style:{display:"flex","justify-content":"space-between"}};function hi(w,i,u,e,M,z){const D=b("v-text-field"),h=b("font-awesome-icon"),F=b("v-file-input"),x=b("v-btn"),B=b("v-card"),V=b("v-dialog"),Q=b("ComentarisEdit"),G=b("ActivitiesEdit"),P=b("v-list-item-title"),S=b("v-list-item"),E=b("v-list"),T=b("v-menu"),A=b("v-card-title"),W=b("SelectUsers"),R=b("v-card-text");return e.issue?(c(),r("div",xe,[t("div",we,[t("div",Te,[t("div",Ce,[t("div",Ue,[t("div",je,[t("div",Pe,[t("span",Se,[t("span",Ee,"#"+d(e.issue.id),1),a(D,{modelValue:e.issueTitle,"onUpdate:modelValue":i[0]||(i[0]=s=>e.issueTitle=s),style:{"margin-top":"3px","margin-left":"5px","font-size":"25px",width:"300px"},class:"detail-subject"},null,8,["modelValue"])]),t("button",{style:{background:"none"},onClick:i[1]||(i[1]=s=>e.saveEdit())},[a(h,{icon:"floppy-disk"})])])]),De,e.issue.dataLimit?(c(),r("div",Ae,[t("span",Be,[a(h,{icon:"clock"})]),t("span",Ve,d(e.issue.dataModificacio),1)])):O("",!0),e.issue.bloquejat?(c(),r("div",Ie,[t("span",Oe,[a(h,{icon:"lock"})]),t("span",Le,d(e.issue.motiuBloqueig),1)])):O("",!0),Ne,t("div",qe,[t("div",Me,[t("div",ze,[(c(!0),r(C,null,U(e.issue.tags,s=>(c(),r("div",{key:s,class:"tag my-tag",style:Vt({"background-color":s.color})},[t("span",Fe,d(s.nom),1),t("button",{onClick:v=>e.esborrar_tag_issue(s)},[a(h,{icon:"xmark"})],8,Ge)],4))),128)),e.addTag?(c(),r("button",{key:0,class:"btn-filter ng-animate-disabled",onClick:i[2]||(i[2]=s=>e.addTag=!1)},He)):O("",!0),j(t("div",Qe,[j(t("input",{"onUpdate:modelValue":i[3]||(i[3]=s=>e.nomTag=s),type:"text",placeholder:"Enter tag"},null,512),[[L,e.nomTag]]),j(t("input",{"onUpdate:modelValue":i[4]||(i[4]=s=>e.colorTag=s),type:"color",style:{"margin-top":"auto","margin-bottom":"auto","margin-left":"5px"}},null,512),[[L,e.colorTag]]),t("button",{onClick:i[5]||(i[5]=s=>e.addTagFetch())},[a(h,{icon:"floppy-disk"})])],512),[[Y,!e.addTag]])]),t("div",Je,[t("div",Ke,[t("span",null,[p(" Created by "),t("span",null,d(e.issue.creador.nom),1)]),t("div",Xe,d(e.issue.dataModificacio),1)]),t("div",Ye,[t("img",{src:e.issue.creador.avatar,width:"40",height:"40"},null,8,Ze)])])])])])]),t("div",$e,[t("section",ts,[t("div",es,[e.issue.descripcio?j((c(),r("textarea",{key:0,placeholder:"Empty space is so boring... go on, be descriptive...",name:"descripcio",class:"description ng-pristine ng-untouched ng-valid ng-empty","onUpdate:modelValue":i[6]||(i[6]=s=>e.issueDesc=s)},`\r
                            `,512)),[[L,e.issueDesc]]):O("",!0),t("button",{style:{"max-height":"32px",background:"none"},onClick:i[7]||(i[7]=s=>e.guardarDesc())},[a(h,{icon:"floppy-disk"})])])]),t("section",ss,[t("div",is,[t("h3",os,[t("span",as,d(e.issue.attachments.length),1),ns]),t("div",ls,[t("div",cs,[a(F,{label:"+",modelValue:e.attachmentFile,"onUpdate:modelValue":i[8]||(i[8]=s=>e.attachmentFile=s),onChange:i[9]||(i[9]=s=>e.addAttachment())},{default:l(()=>[a(h,{icon:"plus"})]),_:1},8,["modelValue"])])])]),t("div",rs,[(c(!0),r(C,null,U(e.issue.attachments,(s,v)=>(c(),r("ul",{key:v},[t("li",ds,[t("div",us,[t("div",null,[t("a",{href:s.document},d(e.attachmentName(s.document)),9,_s)]),a(V,{modelValue:e.dialogTrashAttachment,"onUpdate:modelValue":i[11]||(i[11]=k=>e.dialogTrashAttachment=k),width:"auto"},{activator:l(({props:k})=>[t("button",et(st(k)),[a(h,{icon:"trash"})],16)]),default:l(()=>[a(B,{width:"600px",class:"pa-5"},{default:l(()=>[ms,t("div",vs,[hs,t("p",gs," the attachment "+d(e.attachmentName(s.document)),1),t("div",fs,[a(x,{onClick:i[10]||(i[10]=k=>e.dialogTrashAttachment=!1),variant:"text"},{default:l(()=>[p(" Cancel ")]),_:1}),a(x,{onClick:k=>e.esborrar_attachment(s),color:"red",class:"ml-15"},{default:l(()=>[p(" Delete ")]),_:2},1032,["onClick"])])])]),_:2},1024)]),_:2},1032,["modelValue"])])])]))),128))])]),t("section",ys,[t("nav",ps,[t("button",{class:tt(e.hihaComentaris?"history-tab active":"history-tab"),onClick:i[12]||(i[12]=s=>e.hihaComentaris=!0)}," Comentaris ",2),t("button",{class:tt(e.hihaComentaris?"history-tab":"history-tab active"),style:{"margin-left":"15px"},onClick:i[13]||(i[13]=s=>e.hihaComentaris=!1)}," Activities ",2)])]),e.hihaComentaris?(c(),r("section",bs,[t("div",ks,[j(t("textarea",{"onUpdate:modelValue":i[14]||(i[14]=s=>e.comment=s),placeholder:"Type a new comment here",style:{"margin-top":"5px","margin-bottom":"5px"}},null,512),[[L,e.comment]]),t("button",{onClick:i[15]||(i[15]=s=>e.afegir_comentari()),style:{"margin-left":"5px"}},[a(h,{icon:"floppy-disk"})])]),t("div",null,[t("ul",null,[(c(!0),r(C,null,U(e.issue.comentaris,(s,v)=>(c(),N(Q,{key:v,comentari:s},null,8,["comentari"]))),128))])])])):(c(),r("section",xs,[t("div",ws,[t("ul",null,[(c(!0),r(C,null,U(e.issue.logs,(s,v)=>(c(),N(G,{key:v,activity:s},null,8,["activity"]))),128))])])]))])]),t("div",Ts,[t("section",Cs,[Us,t("div",js,[a(T,null,{activator:l(({props:s})=>[a(x,q(s,{variant:"text"}),{default:l(()=>[p(d(e.estat),1)]),_:2},1040)]),default:l(()=>[a(E,null,{default:l(()=>[(c(!0),r(C,null,U(e.TEstats,(s,v)=>(c(),N(S,{key:v,value:v},{default:l(()=>[a(P,{onClick:k=>e.setEstat(s)},{default:l(()=>[p(d(s),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),a(h,{icon:"arrow-down",style:{"margin-top":"8px"}})]),Ps]),t("section",Ss,[t("div",Es,[t("div",Ds,[As,a(T,null,{activator:l(({props:s})=>[a(x,q(s,{variant:"text"}),{default:l(()=>[p(d(e.tipus),1)]),_:2},1040)]),default:l(()=>[a(E,null,{default:l(()=>[(c(!0),r(C,null,U(e.TTipus,(s,v)=>(c(),N(S,{key:v,value:v},{default:l(()=>[a(P,{onClick:k=>e.setTipus(s)},{default:l(()=>[p(d(s),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),Bs,t("div",Vs,[Is,a(T,null,{activator:l(({props:s})=>[a(x,q(s,{variant:"text"}),{default:l(()=>[p(d(e.gravetat),1)]),_:2},1040)]),default:l(()=>[a(E,null,{default:l(()=>[(c(!0),r(C,null,U(e.TGravetat,(s,v)=>(c(),N(S,{key:v,value:v},{default:l(()=>[a(P,{onClick:k=>e.setGravetat(s)},{default:l(()=>[p(d(s),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),Os,t("div",Ls,[Ns,a(T,null,{activator:l(({props:s})=>[a(x,q({variant:"text"},s),{default:l(()=>[p(d(e.prioritat),1)]),_:2},1040)]),default:l(()=>[a(E,null,{default:l(()=>[(c(!0),r(C,null,U(e.TPrioritat,(s,v)=>(c(),N(S,{key:v,value:v},{default:l(()=>[a(P,{onClick:k=>e.setPrioritat(s)},{default:l(()=>[p(d(s),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),qs])]),t("section",Ms,[zs,t("div",Fs,[t("div",Gs,[Ws,t("div",null,[e.issue.assignacio?(c(),r("div",Rs,[t("img",{src:e.issue.assignacio.avatar,width:"60",height:"60"},null,8,Hs),t("a",{href:/usuari/+e.issue.assignacio.id,style:{"margin-top":"20px"}},d(e.issue.assignacio.nom),9,Qs),t("button",{onClick:i[16]||(i[16]=s=>e.esborrar_assignacio())},[a(h,{icon:"xmark"})])])):O("",!0)]),t("div",Js,[a(V,{modelValue:e.selectAssign,"onUpdate:modelValue":i[18]||(i[18]=s=>e.selectAssign=s),width:"auto"},{activator:l(({props:s})=>[t("button",q({color:"primary"},s,{style:{"margin-right":"10px"},class:"ticket-users-actions"})," + Add assigned ",16)]),default:l(()=>[a(B,{width:"600px"},{default:l(()=>[a(A,null,{default:l(()=>[p(" Select user ")]),_:1}),a(R,null,{default:l(()=>[a(D,{placeholder:"Search for users"}),a(W,{type:"assign",users:e.allUsers,onUserSelect:e.assignSelect},null,8,["users","onUserSelect"]),a(x,{onClick:i[17]||(i[17]=s=>e.selectAssign=!1),color:"red",class:"mt-10 ml-16"},{default:l(()=>[p(" close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e.issue.assignacio&&e.issue.assignacio.id==e.idUser?(c(),r("button",{key:0,class:"ticket-users-actions",style:{"maassignSelectautorgin-left":"5px"},onClick:i[19]||(i[19]=s=>e.esborrar_assignacio())}," Dont assign to me ")):(c(),r("button",{key:1,class:"ticket-users-actions",style:{"margin-left":"5px"},onClick:i[20]||(i[20]=s=>e.autoSelect(e.idUser))}," Assign to me "))])])])]),t("section",Ks,[Xs,t("div",Ys,[t("div",Zs,[$s,t("div",null,[t("ul",null,[(c(!0),r(C,null,U(e.issue.observadors,(s,v)=>(c(),r("li",{key:v},[t("div",ti,[t("img",{src:s.avatar,width:"60",height:"60"},null,8,ei),t("a",{href:/usuari/+s.id,style:{"margin-top":"20px"}},d(s.nom),9,si),t("button",{onClick:k=>e.esborrar_observador(s.id)},[a(h,{icon:"xmark"})],8,ii)])]))),128))])]),t("div",oi,[a(V,{modelValue:e.selectObs,"onUpdate:modelValue":i[22]||(i[22]=s=>e.selectObs=s),width:"auto"},{activator:l(({props:s})=>[t("button",q({color:"primary"},s,{style:{"margin-right":"10px"},class:"ticket-users-actions"})," + Add watchers ",16)]),default:l(()=>[a(B,{width:"400px"},{default:l(()=>[a(A,null,{default:l(()=>[p(" Add watchers ")]),_:1}),a(R,null,{default:l(()=>[a(D,{placeholder:"Search for users"}),a(W,{type:"obs",users:e.allUsers,onUserSelect:e.obsSelected},null,8,["users","onUserSelect"]),a(x,{onClick:i[21]||(i[21]=s=>e.selectObs=!1),color:"red",class:"mt-10 ml-16"},{default:l(()=>[p(" close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e.autoObservador?(c(),r("button",{key:0,class:"ticket-users-actions",style:{"margin-left":"5px"},onClick:i[23]||(i[23]=s=>e.unWatchIssue())}," Unwatch ")):(c(),r("button",{key:1,class:"ticket-users-actions",style:{"margin-left":"5px"},onClick:i[24]||(i[24]=s=>e.selfWatch())}," Watch "))])])])]),t("section",ai,[t("div",ni,[t("div",null,[e.issue.dataLimit?(c(),r("button",{key:0,style:{background:"red"},onClick:i[25]||(i[25]=s=>e.deleteTimeLine())},[a(h,{icon:"clock"})])):(c(),r("button",{key:1,onClick:i[26]||(i[26]=s=>e.showDatePickker=!0)},[a(h,{icon:"clock"})]))]),t("div",null,[e.issue.bloquejat?(c(),r("button",{key:0,style:{background:"red","margin-left":"5px"},onClick:i[27]||(i[27]=s=>e.deleteBlock())},[a(h,{icon:"lock"})])):(c(),r("button",{key:1,style:{"margin-left":"5px"},onClick:i[28]||(i[28]=s=>e.showBlock=!0)},[a(h,{icon:"lock"})]))]),t("div",li,[a(V,{modelValue:e.dialogTrash,"onUpdate:modelValue":i[31]||(i[31]=s=>e.dialogTrash=s),width:"auto"},{activator:l(({props:s})=>[t("button",et(st(s)),[a(h,{icon:"trash"})],16)]),default:l(()=>[a(B,{width:"600px",class:"pa-5"},{default:l(()=>[ci,t("div",ri,[di,t("p",ui,d(e.issueTitle),1),t("div",_i,[a(x,{onClick:i[29]||(i[29]=s=>e.dialogTrash=!1),variant:"text"},{default:l(()=>[p(" Cancel ")]),_:1}),a(x,{onClick:i[30]||(i[30]=s=>e.deleteIssue()),color:"red",class:"ml-15"},{default:l(()=>[p(" Delete ")]),_:1})])])]),_:1})]),_:1},8,["modelValue"])])])]),j(t("div",mi,[j(t("input",{type:"date",id:"datePickerInput",name:"dataLimit","onUpdate:modelValue":i[32]||(i[32]=s=>e.date=s)},null,512),[[L,e.date]]),t("button",{onClick:i[33]||(i[33]=s=>e.btnSaveDateDirect()),style:{"margin-left":"5px"}},[a(h,{icon:"floppy-disk"})])],512),[[Y,e.showDatePickker]]),j(t("div",vi,[j(t("input",{type:"text",id:"inputMotiuBloqueig",name:"motiuBloqueig","onUpdate:modelValue":i[34]||(i[34]=s=>e.motiuBlock=s)},null,512),[[L,e.motiuBlock]]),t("button",{onClick:i[35]||(i[35]=(...s)=>e.btnSaveMotiuBloqueig&&e.btnSaveMotiuBloqueig(...s))},[a(h,{icon:"floppy-disk"})])],512),[[Y,e.showBlock]])])])])):O("",!0)}const yi=Z(ke,[["render",hi],["__scopeId","data-v-0c080c69"]]);export{yi as default};
