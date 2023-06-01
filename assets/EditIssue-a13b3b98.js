import{_ as Q,o as c,c as r,e as t,t as u,l as St,r as h,a as f,b as a,w as l,n as st,q as it,d as y,s as _,u as Et,x as At,j as z,F as U,f as j,h as P,k as Z,v as M,y as et,z as Dt,g as R,m as F,p as It,i as Bt}from"./index-8b1e70ea.js";import{S as Vt}from"./SelectUsers-105f61e2.js";const Nt={name:"ActivitesEdit",props:{activity:Object},setup(){return{}}},Ot={style:{display:"flex","justify-content":"space-between","margin-left":"5px","margin-right":"5px","margin-top":"5px","border-bottom":"0.5px solid grey"}},Lt={style:{display:"flex","justify-content":"space-between","margin-top":"10px","margin-bottom":"20px"}},qt=["src"],zt={style:{"margin-left":"10px"}},Mt={style:{display:"flex","margin-left":"5px"}},Rt=["href"],Ft={key:0,class:"diff-status-wrapper",style:{"margin-top":"20px"}},Gt=t("span",{style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},"Creada: ",-1),Wt=t("span",{style:{"margin-left":"5px"},class:"diff"},"userHardcoded",-1),Ht=[Gt,Wt],Qt={key:1,class:"diff-status-wrapper",style:{"margin-top":"20px"}},Jt=t("span",{style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},"New attachment: ",-1),Kt={style:{"margin-left":"5px"},class:"diff"},Xt={key:2,class:"diff-status-wrapper",style:{"margin-top":"20px"}},Yt=t("span",{style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},"Deleted attachment: ",-1),Zt={style:{"margin-left":"5px"},class:"diff"},$t={key:3,class:"diff-status-wrapper",style:{"margin-top":"20px"}},te=t("span",{style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},"Tags added: ",-1),ee={style:{"margin-left":"5px"},class:"diff"},se={key:4,class:"diff-status-wrapper",style:{"margin-top":"20px"}},ie=t("span",{style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},"Tags removed: ",-1),ae={style:{"margin-left":"5px"},class:"diff"},oe={key:5,class:"diff-status-wrapper",style:{"margin-top":"20px"}},ne={style:{"background-color":"#e2e3e9","font-weight":"bold"},class:"key"},le={style:{"margin-left":"5px"},class:"diff"};function ce(k,i,d,e,S,w){return c(),r("li",null,[t("div",Ot,[t("div",Lt,[t("img",{src:d.activity.usuari.avatar,width:"60",height:"60"},null,8,qt),t("div",zt,[t("div",Mt,[t("a",{href:"/#/usuari/"+d.activity.usuari.id,style:{"margin-right":"5px"},class:"comment-creator"},u(d.activity.usuari.nom),9,Rt),t("span",null,u(d.activity.data),1)]),d.activity.tipus==="Creada"?(c(),r("div",Ft,Ht)):d.activity.tipus==="Nou attachment"?(c(),r("div",Qt,[Jt,t("span",Kt,u(d.activity.valor_nou),1)])):d.activity.tipus==="Attachment esborrat"?(c(),r("div",Xt,[Yt,t("span",Zt,u(d.activity.valor_previ),1)])):d.activity.tipus==="Tag afegida"?(c(),r("div",$t,[te,t("span",ee,u(d.activity.valor_nou),1)])):d.activity.tipus==="Tag esborrada"?(c(),r("div",se,[ie,t("span",ae,u(d.activity.valor_previ),1)])):(c(),r("div",oe,[t("span",ne,u(d.activity.tipus)+": ",1),t("span",le,u(d.activity.valor_previ)+" > "+u(d.activity.valor_nou),1)]))])])])])}const re=Q(Nt,[["render",ce]]),de={name:"ComentarisEdit",props:{comentari:Object},setup(){return{}}},ue={style:{"border-bottom":"0.5px solid grey"}},_e={style:{display:"flex","margin-left":"5px","margin-right":"5px","margin-top":"10px","margin-bottom":"20px"}},me=["src"],ve={style:{"margin-left":"10px"}},he={style:{display:"flex","justify-content":"space-between"}},fe=["href"];function ge(k,i,d,e,S,w){return c(),r("li",null,[t("div",ue,[t("div",_e,[t("img",{src:d.comentari.autor.avatar,width:"60",height:"60"},null,8,me),t("div",ve,[t("div",he,[t("a",{href:"/#/usuari/"+d.comentari.autor.id,style:{"margin-right":"5px"},class:"comment-creator"},u(d.comentari.autor.nom),9,fe),t("span",null,u(d.comentari.data),1)]),t("span",null,u(d.comentari.text),1)])])])])}const ye=Q(de,[["render",ge]]),pe={name:"RowAttachment",components:{FontAwesomeIcon:St},props:{attachment:Array,issueId:Number},emits:["update_issues"],setup(k,i){console.log("props: ",k.issueId);let d=h(!1);function e(w){const x=w.split("/");return x[x.length-1]}async function S(w){await _("issues/"+k.issueId+"/attachments/"+w.id,"DELETE"),i.emit("update_issues")}return{dialogTrashAttachment:d,attachmentName:e,esborrar_attachment:S}}},be={style:{"margin-top":"5px","margin-left":"5px","border-bottom":"1px solid rgb(168, 168, 168)","font-size":"15px"}},ke={style:{display:"flex","justify-content":"space-between"}},xe=["href"],we=t("div",{style:{"margin-left":"auto","margin-right":"auto","font-size":"30px"}}," Delete attachment... ",-1),Te={style:{"margin-left":"auto","margin-right":"auto","font-size":"20px"}},Ce=t("p",null," Are you sure you want to delete? ",-1),Ue={style:{"margin-left":"auto","margin-right":"auto"}},je={style:{"margin-left":"auto","margin-right":"auto"}};function Pe(k,i,d,e,S,w){const x=f("font-awesome-icon"),m=f("v-btn"),B=f("v-card"),G=f("v-dialog");return c(),r("li",be,[t("div",ke,[t("div",null,[t("a",{href:d.attachment.document},u(e.attachmentName(d.attachment.document)),9,xe)]),a(G,{modelValue:e.dialogTrashAttachment,"onUpdate:modelValue":i[2]||(i[2]=C=>e.dialogTrashAttachment=C),width:"auto"},{activator:l(({props:C})=>[t("button",st(it(C)),[a(x,{icon:"trash"})],16)]),default:l(()=>[a(B,{width:"600px",class:"pa-5"},{default:l(()=>[we,t("div",Te,[Ce,t("p",Ue," the attachment "+u(e.attachmentName(d.attachment.document)),1),t("div",je,[a(m,{onClick:i[0]||(i[0]=C=>e.dialogTrashAttachment=!1),variant:"text"},{default:l(()=>[y(" Cancel ")]),_:1}),a(m,{onClick:i[1]||(i[1]=C=>e.esborrar_attachment(d.attachment)),color:"red",class:"ml-15"},{default:l(()=>[y(" Delete ")]),_:1})])])]),_:1})]),_:1},8,["modelValue"])])])}const Se=Q(pe,[["render",Pe]]);const Ee={name:"listIssue",components:{ActivitiesEdit:re,ComentarisEdit:ye,SelectUsers:Vt,RowAttachment:Se},setup(){const k=Et();let d=window.location.href.split("/"),e=h(d[d.length-1]),S=h(""),w=h(""),x=h(""),m=h(""),B=h();const G=["new","In progress","Ready for test","Closed","Needs info","Rejected","Postponed"],C=["Bug","Question","Enhancement"],J=["Wishlist","Minor","Normal","Important","Critical"],T=["Low","Normal","High"];let E=h("new"),A=h("Bug"),D=h("Wishlist"),I=h("Low"),V=h(),N=h(nt()),W=h(!0),H=h(!0),L=h(!1),s=h(!1),v=h(!1),O=h(!1),$=h([]);_("usuaris/","GET","").then(n=>$.value=n);let tt=h(),K=h(""),X=h(""),at=h(!1);const ot=At(()=>{let n=!1;for(let o of V.value.observadors)o.id==N.value&&(n=!0);return n});function nt(){let n="id=",b=decodeURIComponent(document.cookie).split(";");for(let Y=0;Y<b.length;Y++){let q=b[Y];for(;q.charAt(0)==" ";)q=q.substring(1);if(q.indexOf(n)==0)return q.substring(n.length,q.length)}return""}async function lt(){const n=new FormData;n.append("document",B.value[0]),await _("issues/"+e.value+"/attachments/","POST",n,"formData"),p(),B.value=null}async function ct(){let n={observador:N.value};await _("issues/"+e.value+"/observadors/","POST",n).then(o=>console.log("PUT",o)),p()}async function rt(n){let o={observador:n.id};await _("issues/"+e.value+"/observadors/","POST",o).then(b=>console.log("PUT",b)),p()}async function dt(){await _("issues/"+e.value+"/observadors/"+N.value,"DELETE").then(n=>console.log("PUT",n)),p()}async function ut(n){await _("issues/"+e.value+"/observadors/"+n,"DELETE").then(o=>console.log("PUT",o)),p()}function _t(n){E.value=n;let o;switch(E.value){case"new":o="N";break;case"In progress":o="D";break;case"Ready for test":o="T";break;case"Closed":o="C";break;case"Needs info":o="I";break;case"Rejected":o="R";break;case"Postponed":o="P";break;default:o="B"}let b={estat:o};_("issues/"+e.value+"/","PUT",b)}function mt(n){A.value=n;let o;switch(A.value){case"Bug":o="B";break;case"Question":o="P";break;case"Enhancement":o="M";break;default:o="B"}let b={tipus:o};_("issues/"+e.value+"/","PUT",b)}function vt(n){D.value=n;let o;switch(D.value){case"Wishlist":o="D";break;case"Minor":o="M";break;case"Normal":o="N";break;case"Important":o="I";break;case"Critical":o="C";break;default:o="D"}let b={gravetat:o};_("issues/"+e.value+"/","PUT",b)}function ht(n){I.value=n;let o;switch(I.value){case"High":o="A";break;case"Normal":o="M";break;case"Low":o="B";break;default:o="A"}let b={prioritat:o};_("issues/"+e.value+"/","PUT",b)}async function ft(){await _("issues/"+e.value,"DELETE"),k.push("/list")}async function gt(n){await _("issues/"+e.value+"/tags/"+n.nom,"DELETE"),p()}async function yt(){let n={nom:x.value,color:m.value};await _("issues/"+e.value+"/tags/","POST",n),p(),W.value=!0,x.value=""}async function pt(){let n={descripcio:w.value};await _("issues/"+e.value+"/","PUT",n)}async function bt(){let n={subject:S.value};await _("issues/"+e.value+"/","PUT",n)}async function kt(){let n={text:X.value};await _("issues/"+e.value+"/comentaris/","POST",n).then(o=>console.log("POST",o)),p(),X.value=""}async function xt(n){v.value=!1;let o={assignacio_id:n.id};await _("issues/"+e.value+"/","PUT",o).then(b=>console.log("PUT",b)),p()}async function wt(n){v.value=!1;let o={assignacio_id:n};await _("issues/"+e.value+"/","PUT",o).then(b=>console.log("PUT",b)),p()}async function Tt(){let n={assignacio_id:null};await _("issues/"+e.value+"/","PUT",n).then(o=>V.value=o),p()}async function Ct(){let n={dataLimit:null};await _("issues/"+e.value+"/","PUT",n).then(o=>console.log("PUT",o)),p()}async function Ut(){let n={bloquejat:!1,motiuBloqueig:""};await _("issues/"+e.value+"/","PUT",n).then(o=>console.log("PUT",o)),p()}async function jt(){L.value=!1;let n={dataLimit:new Date(tt.value).toISOString()};await _("issues/"+e.value+"/","PUT",n).then(o=>console.log("PUT",o)),p()}async function Pt(){let n={bloquejat:!0,motiuBloqueig:K.value};s.value=!1,await _("issues/"+e.value+"/","PUT",n).then(o=>console.log("PUT",o)),p(),K.value=""}function p(){_("issues/"+e.value+"/","GET","").then(n=>V.value=n)}return{nomTag:x,colorTag:m,comment:X,issueTitle:S,issueDesc:w,issue:V,hihaComentaris:H,addTag:W,TEstats:G,TTipus:C,TGravetat:J,TPrioritat:T,estat:E,tipus:A,gravetat:D,prioritat:I,idUser:N,showDatePickker:L,showBlock:s,autoObservador:ot,selectAssign:v,selectObs:O,allUsers:$,date:tt,motiuBlock:K,attachmentFile:B,dialogTrash:at,esborrar_observador:ut,esborrar_assignacio:Tt,esborrar_tag_issue:gt,addAttachment:lt,guardarDesc:pt,deleteBlock:Ut,deleteTimeLine:Ct,setEstat:_t,setTipus:mt,setPrioritat:ht,setGravetat:vt,saveEdit:bt,obsSelected:rt,assignSelect:xt,actualitzarInfo:p,btnSaveMotiuBloqueig:Pt,btnSaveDateDirect:jt,afegir_comentari:kt,addTagFetch:yt,deleteIssue:ft,unWatchIssue:dt,autoSelect:wt,selfWatch:ct}},mounted(){let i=window.location.href.split("/"),d=i[i.length-1];_("issues/"+d+"/","GET","").then(e=>{this.issue=e,this.issueTitle=e.subject,this.issueDesc=e.descripcio,this.showBlock=e.bloquejat,e.dataLimit!=null?this.showDatePickker=!0:this.showDatePickker=!1})}},g=k=>(It("data-v-f5c554d2"),k=k(),Bt(),k),Ae={key:0,class:"master"},De={class:"wrapper"},Ie={class:"main detail"},Be={class:"detail-header-container"},Ve={class:"detail-header"},Ne={class:"detail-title-wrapper"},Oe={class:"detail-ref"},Le={class:"issue-text",style:{display:"inline-flex"}},qe={class:"issue-ref"},ze=g(()=>t("div",{class:"detail-project"},[t("div",{class:"section-name"},"Issue")],-1)),Me={key:0,class:"detail-header-line block-desc-container"},Re={class:"blocked-sign",style:{color:"white"}},Fe={class:"block-description",style:{"margin-left":"5px",color:"#e5e5e5"}},Ge={key:1,class:"detail-header-line block-desc-container"},We={class:"blocked-sign",style:{color:"white"}},He={class:"block-description",style:{"margin-left":"5px",color:"#e5e5e5"}},Qe=g(()=>t("div",{class:"action-buttons"},null,-1)),Je={class:"subheader"},Ke={class:"tags-container",style:{display:"flex","justify-content":"space-between"}},Xe={style:{display:"flex","justify-content":"space-between"}},Ye={style:{"margin-top":"auto","margin-bottom":"auto","margin-right":"5px","margin-left":"5px"}},Ze=["onClick"],$e=g(()=>t("span",null,"Add tag",-1)),ts=g(()=>t("span",{style:{"font-size":"20px"}},"+",-1)),es=[$e,ts],ss={style:{display:"flex","justify-content":"space-between"}},is={style:{display:"flex","justify-content":"space-between"}},as={class:"created-by"},os={class:"created-date"},ns={class:"user-avatar",style:{"margin-left":"5px"}},ls=["src"],cs={class:"detail-content"},rs={class:"duty-content",style:{"justify-content":"flex-start"}},ds={style:{display:"flex","justify-content":"space-between"}},us={style:{"margin-top":"10px"},class:"attachments attachments-full"},_s={class:"attachments-header"},ms={class:"attachment-title",style:{"margin-left":"5px"}},vs={class:"attachments-num"},hs=g(()=>t("span",{class:"attachments-text",style:{"margin-left":"5px"}},"Attachments",-1)),fs={class:"options"},gs={class:"add-attach"},ys={class:"attachment-list sortable"},ps={class:"history"},bs={class:"history-tabs",style:{padding:"5px"}},ks={key:0,class:"comment"},xs={style:{display:"flex","justify-content":"space-between"}},ws={key:1,class:"activities"},Ts={class:"activities-wrapper"},Cs={class:"sidebar ticket-data"},Us={class:"ticket-header"},js=g(()=>t("span",{class:"ticket-title ng-pristine ng-valid ng-untouched ng-not-empty"},[t("span",null,"Open")],-1)),Ps={style:{"background-color":"whitesmoke",display:"flex","justify-content":"space-between"}},Ss=g(()=>t("button",{id:"btnSaveState",type:"submit",name:"guardar_estat",style:{display:"none"}},null,-1)),Es={class:"ticket-section ticket-data-container"},As={class:"ticket-data-container"},Ds={style:{display:"flex","justify-content":"space-between"}},Is=g(()=>t("label",null," type ",-1)),Bs=g(()=>t("button",{id:"btnSaveType",type:"submit",name:"guardar_tipus",style:{display:"none"}},null,-1)),Vs={style:{display:"flex","justify-content":"space-between"}},Ns=g(()=>t("label",null," severity ",-1)),Os=g(()=>t("button",{id:"btnSaveGrav",type:"submit",name:"guardar_gravetat",style:{display:"none"}},null,-1)),Ls={style:{display:"flex","justify-content":"space-between"}},qs=g(()=>t("label",null," priority ",-1)),zs=g(()=>t("button",{id:"btnSavePrior",type:"submit",name:"guardar_prioritat",style:{display:"none"}},null,-1)),Ms={class:"ticket-section ng-pristine ng-untouched ng-valid ng-not-empty"},Rs=g(()=>t("div",{class:"ticket-section-label"},[t("span",null,"Assigned")],-1)),Fs={class:"ticket-user-list-container"},Gs={class:"ticket-user-list-content"},Ws=g(()=>t("div",{class:"ticket-user-list"},null,-1)),Hs={key:0,style:{display:"flex","justify-content":"space-between","margin-left":"5px","margin-right":"5px"}},Qs=["src"],Js=["href"],Ks={class:"ticket-users-actions"},Xs={class:"ticket-section ticket-watchers"},Ys=g(()=>t("div",{class:"ticket-section-label"},[t("span",null,"Watchers")],-1)),Zs={class:"ticket-user-list-container"},$s={class:"ticket-user-list-content"},ti=g(()=>t("div",{class:"ticket-user-list"},null,-1)),ei={style:{display:"flex","justify-content":"space-between","margin-left":"5px","margin-right":"5px","margin-top":"5px"}},si=["src"],ii=["href"],ai=["onClick"],oi={class:"ticket-users-actions"},ni={class:"ticket-section ticket-detail-settings"},li={class:"ticket-detail-settings"},ci={style:{"margin-left":"5px"}},ri=g(()=>t("div",{style:{"margin-left":"auto","margin-right":"auto","font-size":"30px"}}," Delete issue ",-1)),di={style:{"margin-left":"auto","margin-right":"auto","font-size":"20px"}},ui=g(()=>t("p",null," Are you sure you want to delete? ",-1)),_i={style:{"margin-left":"auto","margin-right":"auto"}},mi={style:{"margin-left":"auto","margin-right":"auto"}},vi={style:{display:"flex","justify-content":"space-between"}},hi={style:{display:"flex","justify-content":"space-between"}};function fi(k,i,d,e,S,w){const x=f("v-text-field"),m=f("font-awesome-icon"),B=f("v-file-input"),G=f("RowAttachment"),C=f("ComentarisEdit"),J=f("ActivitiesEdit"),T=f("v-btn"),E=f("v-list-item-title"),A=f("v-list-item"),D=f("v-list"),I=f("v-menu"),V=f("v-card-title"),N=f("SelectUsers"),W=f("v-card-text"),H=f("v-card"),L=f("v-dialog");return e.issue?(c(),r("div",Ae,[t("div",De,[t("div",Ie,[t("div",Be,[t("div",Ve,[t("div",Ne,[t("div",Oe,[t("span",Le,[t("span",qe,"#"+u(e.issue.id),1),a(x,{modelValue:e.issueTitle,"onUpdate:modelValue":i[0]||(i[0]=s=>e.issueTitle=s),style:{"margin-top":"3px","margin-left":"5px","font-size":"25px",width:"300px"},class:"detail-subject"},null,8,["modelValue"])]),t("button",{style:{background:"none"},onClick:i[1]||(i[1]=s=>e.saveEdit())},[a(m,{icon:"floppy-disk"})])])]),ze,e.issue.dataLimit?(c(),r("div",Me,[t("span",Re,[a(m,{icon:"clock"})]),t("span",Fe,u(e.issue.dataModificacio),1)])):z("",!0),e.issue.bloquejat?(c(),r("div",Ge,[t("span",We,[a(m,{icon:"lock"})]),t("span",He,u(e.issue.motiuBloqueig),1)])):z("",!0),Qe,t("div",Je,[t("div",Ke,[t("div",Xe,[(c(!0),r(U,null,j(e.issue.tags,s=>(c(),r("div",{key:s,class:"tag my-tag",style:Dt({"background-color":s.color})},[t("span",Ye,u(s.nom),1),t("button",{onClick:v=>e.esborrar_tag_issue(s)},[a(m,{icon:"xmark"})],8,Ze)],4))),128)),e.addTag?(c(),r("button",{key:0,class:"btn-filter ng-animate-disabled",onClick:i[2]||(i[2]=s=>e.addTag=!1)},es)):z("",!0),P(t("div",ss,[P(t("input",{"onUpdate:modelValue":i[3]||(i[3]=s=>e.nomTag=s),type:"text",placeholder:"Enter tag"},null,512),[[M,e.nomTag]]),P(t("input",{"onUpdate:modelValue":i[4]||(i[4]=s=>e.colorTag=s),type:"color",style:{"margin-top":"auto","margin-bottom":"auto","margin-left":"5px"}},null,512),[[M,e.colorTag]]),t("button",{onClick:i[5]||(i[5]=s=>e.addTagFetch())},[a(m,{icon:"floppy-disk"})])],512),[[Z,!e.addTag]])]),t("div",is,[t("div",as,[t("span",null,[y(" Created by "),t("span",null,u(e.issue.creador.nom),1)]),t("div",os,u(e.issue.dataModificacio),1)]),t("div",ns,[t("img",{src:e.issue.creador.avatar,width:"40",height:"40"},null,8,ls)])])])])])]),t("div",cs,[t("section",rs,[t("div",ds,[e.issue.descripcio?P((c(),r("textarea",{key:0,placeholder:"Empty space is so boring... go on, be descriptive...",name:"descripcio",class:"description ng-pristine ng-untouched ng-valid ng-empty","onUpdate:modelValue":i[6]||(i[6]=s=>e.issueDesc=s)},`\r
                            `,512)),[[M,e.issueDesc]]):z("",!0),t("button",{style:{"max-height":"32px",background:"none"},onClick:i[7]||(i[7]=s=>e.guardarDesc())},[a(m,{icon:"floppy-disk"})])])]),t("section",us,[t("div",_s,[t("h3",ms,[t("span",vs,u(e.issue.attachments.length),1),hs]),t("div",fs,[t("div",gs,[a(B,{label:"+",modelValue:e.attachmentFile,"onUpdate:modelValue":i[8]||(i[8]=s=>e.attachmentFile=s),onChange:i[9]||(i[9]=s=>e.addAttachment())},{default:l(()=>[a(m,{icon:"plus"})]),_:1},8,["modelValue"])])])]),t("div",ys,[(c(!0),r(U,null,j(e.issue.attachments,(s,v)=>(c(),r("ul",{key:v},[a(G,{attachment:s,issueId:e.issue.id,onUpdate_issues:i[10]||(i[10]=O=>e.actualitzarInfo())},null,8,["attachment","issueId"])]))),128))])]),t("section",ps,[t("nav",bs,[t("button",{class:et(e.hihaComentaris?"history-tab active":"history-tab"),onClick:i[11]||(i[11]=s=>e.hihaComentaris=!0)}," Comentaris ",2),t("button",{class:et(e.hihaComentaris?"history-tab":"history-tab active"),style:{"margin-left":"15px"},onClick:i[12]||(i[12]=s=>e.hihaComentaris=!1)}," Activities ",2)])]),e.hihaComentaris?(c(),r("section",ks,[t("div",xs,[P(t("textarea",{"onUpdate:modelValue":i[13]||(i[13]=s=>e.comment=s),placeholder:"Type a new comment here",style:{"margin-top":"5px","margin-bottom":"5px"}},null,512),[[M,e.comment]]),t("button",{onClick:i[14]||(i[14]=s=>e.afegir_comentari()),style:{"margin-left":"5px"}},[a(m,{icon:"floppy-disk"})])]),t("div",null,[t("ul",null,[(c(!0),r(U,null,j(e.issue.comentaris,(s,v)=>(c(),R(C,{key:v,comentari:s},null,8,["comentari"]))),128))])])])):(c(),r("section",ws,[t("div",Ts,[t("ul",null,[(c(!0),r(U,null,j(e.issue.logs,(s,v)=>(c(),R(J,{key:v,activity:s},null,8,["activity"]))),128))])])]))])]),t("div",Cs,[t("section",Us,[js,t("div",Ps,[a(I,null,{activator:l(({props:s})=>[a(T,F(s,{variant:"text"}),{default:l(()=>[y(u(e.estat),1)]),_:2},1040)]),default:l(()=>[a(D,null,{default:l(()=>[(c(!0),r(U,null,j(e.TEstats,(s,v)=>(c(),R(A,{key:v,value:v},{default:l(()=>[a(E,{onClick:O=>e.setEstat(s)},{default:l(()=>[y(u(s),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1}),a(m,{icon:"arrow-down",style:{"margin-top":"8px"}})]),Ss]),t("section",Es,[t("div",As,[t("div",Ds,[Is,a(I,null,{activator:l(({props:s})=>[a(T,F(s,{variant:"text"}),{default:l(()=>[y(u(e.tipus),1)]),_:2},1040)]),default:l(()=>[a(D,null,{default:l(()=>[(c(!0),r(U,null,j(e.TTipus,(s,v)=>(c(),R(A,{key:v,value:v},{default:l(()=>[a(E,{onClick:O=>e.setTipus(s)},{default:l(()=>[y(u(s),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),Bs,t("div",Vs,[Ns,a(I,null,{activator:l(({props:s})=>[a(T,F(s,{variant:"text"}),{default:l(()=>[y(u(e.gravetat),1)]),_:2},1040)]),default:l(()=>[a(D,null,{default:l(()=>[(c(!0),r(U,null,j(e.TGravetat,(s,v)=>(c(),R(A,{key:v,value:v},{default:l(()=>[a(E,{onClick:O=>e.setGravetat(s)},{default:l(()=>[y(u(s),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),Os,t("div",Ls,[qs,a(I,null,{activator:l(({props:s})=>[a(T,F({variant:"text"},s),{default:l(()=>[y(u(e.prioritat),1)]),_:2},1040)]),default:l(()=>[a(D,null,{default:l(()=>[(c(!0),r(U,null,j(e.TPrioritat,(s,v)=>(c(),R(A,{key:v,value:v},{default:l(()=>[a(E,{onClick:O=>e.setPrioritat(s)},{default:l(()=>[y(u(s),1)]),_:2},1032,["onClick"])]),_:2},1032,["value"]))),128))]),_:1})]),_:1})]),zs])]),t("section",Ms,[Rs,t("div",Fs,[t("div",Gs,[Ws,t("div",null,[e.issue.assignacio?(c(),r("div",Hs,[t("img",{src:e.issue.assignacio.avatar,width:"60",height:"60"},null,8,Qs),t("a",{href:"/#/usuari/"+e.issue.assignacio.id,style:{"margin-top":"20px"}},u(e.issue.assignacio.nom),9,Js),t("button",{onClick:i[15]||(i[15]=s=>e.esborrar_assignacio())},[a(m,{icon:"xmark"})])])):z("",!0)]),t("div",Ks,[a(L,{modelValue:e.selectAssign,"onUpdate:modelValue":i[17]||(i[17]=s=>e.selectAssign=s),width:"auto"},{activator:l(({props:s})=>[t("button",F({color:"primary"},s,{style:{"margin-right":"10px"},class:"ticket-users-actions"})," + Add assigned ",16)]),default:l(()=>[a(H,{width:"600px"},{default:l(()=>[a(V,null,{default:l(()=>[y(" Select user ")]),_:1}),a(W,null,{default:l(()=>[a(x,{placeholder:"Search for users"}),a(N,{type:"assign",users:e.allUsers,onUserSelect:e.assignSelect},null,8,["users","onUserSelect"]),a(T,{onClick:i[16]||(i[16]=s=>e.selectAssign=!1),color:"red",class:"mt-10 ml-16"},{default:l(()=>[y(" close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e.issue.assignacio&&e.issue.assignacio.id==e.idUser?(c(),r("button",{key:0,class:"ticket-users-actions",style:{"maassignSelectautorgin-left":"5px"},onClick:i[18]||(i[18]=s=>e.esborrar_assignacio())}," Dont assign to me ")):(c(),r("button",{key:1,class:"ticket-users-actions",style:{"margin-left":"5px"},onClick:i[19]||(i[19]=s=>e.autoSelect(e.idUser))}," Assign to me "))])])])]),t("section",Xs,[Ys,t("div",Zs,[t("div",$s,[ti,t("div",null,[t("ul",null,[(c(!0),r(U,null,j(e.issue.observadors,(s,v)=>(c(),r("li",{key:v},[t("div",ei,[t("img",{src:s.avatar,width:"60",height:"60"},null,8,si),t("a",{href:"/#/usuari/"+s.id,style:{"margin-top":"20px"}},u(s.nom),9,ii),t("button",{onClick:O=>e.esborrar_observador(s.id)},[a(m,{icon:"xmark"})],8,ai)])]))),128))])]),t("div",oi,[a(L,{modelValue:e.selectObs,"onUpdate:modelValue":i[21]||(i[21]=s=>e.selectObs=s),width:"auto"},{activator:l(({props:s})=>[t("button",F({color:"primary"},s,{style:{"margin-right":"10px"},class:"ticket-users-actions"})," + Add watchers ",16)]),default:l(()=>[a(H,{width:"400px"},{default:l(()=>[a(V,null,{default:l(()=>[y(" Add watchers ")]),_:1}),a(W,null,{default:l(()=>[a(x,{placeholder:"Search for users"}),a(N,{type:"obs",users:e.allUsers,onUserSelect:e.obsSelected},null,8,["users","onUserSelect"]),a(T,{onClick:i[20]||(i[20]=s=>e.selectObs=!1),color:"red",class:"mt-10 ml-16"},{default:l(()=>[y(" close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e.autoObservador?(c(),r("button",{key:0,class:"ticket-users-actions",style:{"margin-left":"5px"},onClick:i[22]||(i[22]=s=>e.unWatchIssue())}," Unwatch ")):(c(),r("button",{key:1,class:"ticket-users-actions",style:{"margin-left":"5px"},onClick:i[23]||(i[23]=s=>e.selfWatch())}," Watch "))])])])]),t("section",ni,[t("div",li,[t("div",null,[e.issue.dataLimit?(c(),r("button",{key:0,style:{background:"red"},onClick:i[24]||(i[24]=s=>e.deleteTimeLine())},[a(m,{icon:"clock"})])):(c(),r("button",{key:1,onClick:i[25]||(i[25]=s=>e.showDatePickker=!0)},[a(m,{icon:"clock"})]))]),t("div",null,[e.issue.bloquejat?(c(),r("button",{key:0,style:{background:"red","margin-left":"5px"},onClick:i[26]||(i[26]=s=>e.deleteBlock())},[a(m,{icon:"lock"})])):(c(),r("button",{key:1,style:{"margin-left":"5px"},onClick:i[27]||(i[27]=s=>e.showBlock=!0)},[a(m,{icon:"lock"})]))]),t("div",ci,[a(L,{modelValue:e.dialogTrash,"onUpdate:modelValue":i[30]||(i[30]=s=>e.dialogTrash=s),width:"auto"},{activator:l(({props:s})=>[t("button",st(it(s)),[a(m,{icon:"trash"})],16)]),default:l(()=>[a(H,{width:"600px",class:"pa-5"},{default:l(()=>[ri,t("div",di,[ui,t("p",_i,u(e.issueTitle),1),t("div",mi,[a(T,{onClick:i[28]||(i[28]=s=>e.dialogTrash=!1),variant:"text"},{default:l(()=>[y(" Cancel ")]),_:1}),a(T,{onClick:i[29]||(i[29]=s=>e.deleteIssue()),color:"red",class:"ml-15"},{default:l(()=>[y(" Delete ")]),_:1})])])]),_:1})]),_:1},8,["modelValue"])])])]),P(t("div",vi,[P(t("input",{type:"date",id:"datePickerInput",name:"dataLimit","onUpdate:modelValue":i[31]||(i[31]=s=>e.date=s)},null,512),[[M,e.date]]),t("button",{onClick:i[32]||(i[32]=s=>e.btnSaveDateDirect()),style:{"margin-left":"5px"}},[a(m,{icon:"floppy-disk"})])],512),[[Z,e.showDatePickker]]),P(t("div",hi,[P(t("input",{type:"text",id:"inputMotiuBloqueig",name:"motiuBloqueig","onUpdate:modelValue":i[33]||(i[33]=s=>e.motiuBlock=s)},null,512),[[M,e.motiuBlock]]),t("button",{onClick:i[34]||(i[34]=(...s)=>e.btnSaveMotiuBloqueig&&e.btnSaveMotiuBloqueig(...s))},[a(m,{icon:"floppy-disk"})])],512),[[Z,e.showBlock]])])])])):z("",!0)}const pi=Q(Ee,[["render",fi],["__scopeId","data-v-f5c554d2"]]);export{pi as default};
