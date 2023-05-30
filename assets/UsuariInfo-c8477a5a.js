import{_ as f,r as c,s as g,a as v,o as s,c as t,b as e,t as n,j as h,d as y,e as l,F as p,f as m,p as w,i as b}from"./index-e1fa628c.js";const x={name:"UsuariInfo",setup(){let r=window.location.href;console.log("Url: ",r);let i=r.split("/");c(i[i.length-1]);let d=c("timeline"),o=c([]);return{userLogged:c([]),allUsers:o,mostrar:d}},mounted(){let i=window.location.href.split("/"),d=i[i.length-1];g("usuaris/","GET","").then(o=>this.allUsers=o),console.log("all Users: ",this.allUsers),g("usuaris/"+d+"/","GET","").then(o=>this.userLogged=o),console.log("Logged user: ",this.userLogged)}},a=r=>(w("data-v-37f06f94"),r=r(),b(),r),L={class:"profile centered",style:{"margin-left":"50px"}},N={class:"profile-bar"},C={key:0},T=["src"],U={key:1},I=["src"],S={class:"profile-data"},V={key:0,class:"not-full-name"},j={key:1,class:"not-full-name"},z=a(()=>e("p",null,"Nom no trobat",-1)),B=[z],E={key:2,class:"username"},F={key:3,class:"username"},D=a(()=>e("p",null,"@UsernameNoTrobat",-1)),G=[D],W=a(()=>e("div",{class:"profile-stats"},[e("div",{class:"stat"})],-1)),q={key:2,class:"profile-quote"},A={class:"main"},Y={style:{width:"450px","border-collapse":"separate","border-spacing":"0px 5px"}},H=a(()=>e("td",null,[e("h1",null," ")],-1)),J=a(()=>e("h1",null,[l(" "),e("u",null,"Timeline"),l("   ")],-1)),K=[J],M=a(()=>e("h1",null," Timeline   ",-1)),O=[M],P=a(()=>e("h1",null,[l(" "),e("u",null,"Watched"),l("   ")],-1)),Q=[P],R=a(()=>e("h1",null," Watched   ",-1)),X=[R],Z={key:0},$={key:1},ee=a(()=>e("h1",null,[l(" "),e("u",null,"Token"),l(" ")],-1)),se=[ee],te=a(()=>e("h1",null," Token ",-1)),_e=[te],oe=a(()=>e("p",{style:{color:"darkgrey"}},"______________________________________________________________________________",-1)),ie={key:0,class:"watched"},ne={class:"issues-table",style:{width:"100%","border-collapse":"separate","border-spacing":"0 10px"}},le={style:{display:"flex","align-items":"center"}},ae={key:0,style:{display:"flex","align-items":"center"}},re=["src"],de={key:1,style:{display:"flex","align-items":"center"}},ce=["src"],he={key:2},ue=["href"],ye=a(()=>e("p",{style:{color:"darkgrey"}},"______________________________________________________________________________",-1)),pe={key:1,class:"token"},me={key:2,class:"timeline"},ge={class:"issue-page",style:{width:"100%"}},ke={class:"issues-table",style:{width:"100%","border-collapse":"separate","border-spacing":"0 10px"}},fe={class:"row table-main",style:{"background-color":"white"}},ve={style:{display:"flex","align-items":"center"}},we=["src"],be={style:{display:"inline-block"}},xe=["href"],Le={key:0,style:{display:"inline"}},Ne={key:1,style:{display:"inline"}},Ce={key:0,style:{display:"inline"}},Te={key:1,style:{display:"inline"}},Ue={key:2,style:{display:"inline"}},Ie={key:0,style:{display:"inline"}},Se={key:1,style:{display:"inline"}},Ve={key:3,style:{display:"inline"}},je={key:0,style:{display:"inline"}},ze={key:1,style:{display:"inline"}},Be={key:4,style:{display:"inline"}},Ee={key:0,style:{display:"inline"}},Fe={key:1,style:{display:"inline"}},De={key:5,style:{display:"inline"}},Ge={key:0,style:{display:"inline"}},We={key:1,style:{display:"inline"}},qe={key:2,style:{display:"inline"}},Ae={key:3,style:{display:"inline"}},Ye=a(()=>e("span",{style:{display:"inline"}},"issue ",-1)),He={key:6},Je=["href"],Ke={key:7},Me=a(()=>e("p",null," ",-1)),Oe={style:{color:"darkgrey","font-size":"15px"}},Pe=a(()=>e("p",{style:{color:"darkgrey"}},"__________________________________________________________________________________________",-1)),Qe={class:"timeline-wrapper",style:{"margin-left":"30px",width:"130px"}},Re=a(()=>e("h1",{style:{"white-space":"nowrap"}},"Your team",-1)),Xe=["href"],Ze=["src"];function $e(r,i,d,o,k,es){const u=v("font-awesome-icon");return s(),t("div",L,[e("section",N,[o.userLogged.avatar?(s(),t("div",C,[e("img",{src:o.userLogged.avatar,width:"200",height:"200"},null,8,T)])):(s(),t("div",U,[e("img",{src:"https://issuestorage.s3.us-west-2.amazonaws.com/media/avatar/unnamed.png",width:"200",height:"200"},null,8,I)])),e("div",S,[o.userLogged.nom?(s(),t("h1",V,[e("p",null,n(o.userLogged.nom),1)])):(s(),t("h1",j,B)),o.userLogged.username?(s(),t("div",E,[e("p",null,"@"+n(o.userLogged.username),1)])):(s(),t("div",F,G))]),W,o.userLogged.bio?(s(),t("div",q,[e("span",null,n(o.userLogged.bio),1)])):h("",!0)]),e("div",A,[e("div",null,[e("table",Y,[e("tr",null,[H,e("td",null,[e("h1",{onClick:i[0]||(i[0]=_=>o.mostrar="timeline"),style:{cursor:"default"}},[y(u,{icon:"lock"})])]),e("td",null,[o.mostrar==="timeline"?(s(),t("a",{key:0,onClick:i[1]||(i[1]=_=>o.mostrar="timeline"),style:{cursor:"default"}},K)):(s(),t("a",{key:1,onClick:i[2]||(i[2]=_=>o.mostrar="timeline"),style:{cursor:"default"}},O))]),e("td",null,[e("a",{onClick:i[3]||(i[3]=_=>o.mostrar="watched"),style:{cursor:"default"}},[e("h1",null,[l(" "),y(u,{icon:"lock"})])])]),e("td",null,[o.mostrar==="watched"?(s(),t("a",{key:0,onClick:i[4]||(i[4]=_=>o.mostrar="watched"),style:{cursor:"default"}},Q)):(s(),t("a",{key:1,onClick:i[5]||(i[5]=_=>o.mostrar="watched"),style:{cursor:"default"}},X))]),o.userLogged.token?(s(),t("td",Z,[e("a",{onClick:i[6]||(i[6]=_=>o.mostrar="token"),style:{cursor:"default"}},[e("h1",null,[y(u,{icon:"lock"})])])])):h("",!0),o.userLogged.token?(s(),t("td",$,[o.mostrar==="token"?(s(),t("a",{key:0,onClick:i[7]||(i[7]=_=>o.mostrar="token"),style:{cursor:"default"}},se)):(s(),t("a",{key:1,onClick:i[8]||(i[8]=_=>o.mostrar="token"),style:{cursor:"default"}},_e))])):h("",!0)])]),oe,e("div",null,[o.mostrar==="watched"?(s(),t("section",ie,[e("table",ne,[(s(!0),t(p,null,m(o.userLogged.observats,_=>(s(),t("tr",null,[e("td",null,[e("div",le,[_.assignacio?(s(),t("div",ae,[e("img",{src:_.assignacio.avatar,width:"40",height:"40",style:{"border-radius":"50%","margin-right":"5px"}},null,8,re)])):(s(),t("div",de,[e("img",{src:"https://issuestorage.s3.us-west-2.amazonaws.com/media/avatar/unnamed.png",width:"40",height:"40",style:{"border-radius":"50%","margin-right":"5px"}},null,8,ce)])),_.assignacio?(s(),t("span",he,n(_.assignacio.username)+" ",1)):h("",!0),e("a",{href:"/edit/"+_.id},"#"+n(_.id)+" "+n(_.subject),9,ue),l("  "+n(_.estat),1)]),ye])]))),256))])])):o.userLogged.token&&o.mostrar==="token"?(s(),t("section",pe,[e("p",null,n(o.userLogged.token),1)])):(s(),t("section",me,[e("div",ge,[e("table",ke,[(s(!0),t(p,null,m(o.userLogged.logs,_=>(s(),t("tr",fe,[e("td",null,[e("div",ve,[e("img",{src:_.usuari.avatar,width:"40",height:"40",style:{"border-radius":"50%","margin-right":"5px"}},null,8,we),e("div",be,[e("a",{href:"/usuari/"+_.usuari.id},n(_.usuari.username)+"  ",9,xe),_.tipus==="Creada"?(s(),t("span",Le,"ha creat l'")):_.tipus==="Nou attachment"?(s(),t("span",Ne,[l("ha afegit el fitxer "),_.valor_nou?(s(),t("a",Ce,n(_.valor_nou),1)):(s(),t("a",Te,"No definit")),l(" al ")])):_.tipus==="Attachment esborrat"?(s(),t("span",Ue,[l("ha esborrat el fitxer "),_.valor_previ?(s(),t("span",Ie,n(_.valor_previ),1)):(s(),t("span",Se,"No definit")),l(" al ")])):_.tipus==="Tag afegida"?(s(),t("span",Ve,[l("ha afegit el tag "),_.valor_nou?(s(),t("a",je,n(_.valor_nou),1)):(s(),t("a",ze,"No definit")),l(" al ")])):_.tipus==="Tag esborrada"?(s(),t("span",Be,[l("ha esborrat el tag "),_.valor_previ?(s(),t("span",Ee,n(_.valor_previ),1)):(s(),t("span",Fe,"No definit")),l(" al ")])):(s(),t("span",De,[l("ha canviat l'atribut "+n(_.tipus)+" de ",1),_.valor_nou?(s(),t("a",Ge,n(_.valor_nou),1)):(s(),t("a",We,"No definit")),l(" a "),_.valor_previ?(s(),t("span",qe,n(_.valor_previ),1)):(s(),t("span",Ae,"No definit")),l(" del ")])),Ye,_.issue?(s(),t("span",He,[e("a",{href:"/edit/"+_.issue.id},"#"+n(_.issue.id)+" "+n(_.issue.subject),9,Je)])):(s(),t("span",Ke,"esborrat"))])]),Me,e("p",Oe,n(new Date(_.data).toLocaleString()),1),Pe])]))),256))])])]))])])]),e("div",Qe,[Re,e("div",null,[(s(!0),t(p,null,m(o.allUsers,_=>(s(),t("a",{href:"/usuari/"+_.id},[e("img",{src:_.avatar,width:"32",height:"32",style:{"border-radius":"50%","margin-right":"5px"}},null,8,Ze)],8,Xe))),256))])])])}const ts=f(x,[["render",$e],["__scopeId","data-v-37f06f94"]]);export{ts as default};
