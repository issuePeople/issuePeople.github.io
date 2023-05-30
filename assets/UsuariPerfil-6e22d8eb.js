import{_ as U,r,s as h,a as g,o as u,c as m,e,b,w as V,h as c,v as p,F as C,f as P,p as D,i as T}from"./index-ca4c79a5.js";const k={name:"UsuariPerfil",setup(){let n=window.location.href;console.log("Url: ",n);let a=n.split("/");r(a[a.length-1]);let l=r([]),t=r(""),f=r(""),v=r(""),_=r(""),d=r(),s=r("");async function y(){let i=new FormData;i.append("username",t.value),i.append("email",f.value),i.append("nom",v.value),i.append("bio",_.value),i.append("avatar",s.value[0]),await h("usuaris/1","PUT",i,"formData"),await h("usuaris/1/","GET","").then(x=>d.value=x.avatar)}async function w(){await new Promise(i=>setTimeout(i,3e3)),d.value="https://issuestorage.s3.amazonaws.com/media/default.png"}return{allUsers:l,username:t,email:f,nom:v,bio:_,avatar:s,avatarUrl:d,setAvatarPerDefecte:w,saveChanges:y}},mounted(){let a=window.location.href.split("/");a[a.length-1],h("usuaris/1/","GET","").then(l=>{console.log("dataaaa: ",l),this.username=l.username,this.email=l.email,this.nom=l.nom,this.bio=l.bio,this.avatarUrl=l.avatar}),console.log("ei"),h("usuaris/","GET","").then(l=>this.allUsers=l),console.log("all Users: ",this.allUsers)}},o=n=>(D("data-v-4ad6adaf"),n=n(),T(),n),A={class:"master",style:{width:"100%",display:"grid","place-content":"center"}},E=o(()=>e("br",null,null,-1)),S=o(()=>e("header",null,[e("h1",{style:{color:"#1e96b1"}},"Configuració d'usuari")],-1)),B={class:"main user-profile",style:{display:"grid","grid-template-columns":"30% 67% 20%",gap:"20px"}},F={class:"project-details-image"},G={class:"image-container"},I=["src"],j={class:"add-attach"},N=o(()=>e("button",{type:"submit",id:"btnSaveAvatar",style:{display:"none"},name:"guardar_avatar",class:"btn-small button-full js-change-avatar"},null,-1)),M=o(()=>e("p",{style:{color:"#1e96b1"}},"     Avatar per defecte",-1)),z=[M],L={class:"project-details-form-data"},Y=o(()=>e("label",{for:"username"},"Username",-1)),q=o(()=>e("label",{for:"email"},"Email",-1)),H=o(()=>e("label",{for:"first_name"},"Nom",-1)),J=o(()=>e("label",{for:"bio"},"Bio",-1)),K={class:"submit"},O=o(()=>e("br",null,null,-1)),Q=o(()=>e("a",{href:"/usuaris/logout"},[e("p",{style:{color:"#1e96b1","margin-left":"380px"}},"     Tancar sessió")],-1)),R={class:"timeline-wrapper",style:{"margin-left":"30px",width:"130px"}},W=o(()=>e("h1",{style:{"white-space":"nowrap"}},"Your team",-1)),X=["href"],Z=["src"];function $(n,a,l,t,f,v){const _=g("font-awesome-icon"),d=g("v-file-input");return u(),m("div",A,[E,S,e("section",B,[e("div",F,[e("fieldset",G,[e("img",{src:t.avatarUrl,width:"180",height:"180"},null,8,I)]),e("div",j,[b(d,{style:{width:"180px"},label:"Canviar foto",width:"180",modelValue:t.avatar,"onUpdate:modelValue":a[0]||(a[0]=s=>t.avatar=s)},{default:V(()=>[b(_,{icon:"plus"})]),_:1},8,["modelValue"])]),N,e("button",{type:"submit",name:"guardar_avatar_defecte",class:"botonMenu",onClick:a[1]||(a[1]=(...s)=>t.setAvatarPerDefecte&&t.setAvatarPerDefecte(...s))},z)]),e("div",L,[e("fieldset",null,[Y,c(e("input",{type:"text",name:"username","onUpdate:modelValue":a[2]||(a[2]=s=>t.username=s)},null,512),[[p,t.username]])]),e("fieldset",null,[q,c(e("input",{type:"text",name:"email","onUpdate:modelValue":a[3]||(a[3]=s=>t.email=s)},null,512),[[p,t.email]])]),e("fieldset",null,[H,c(e("input",{type:"text",name:"first_name","onUpdate:modelValue":a[4]||(a[4]=s=>t.nom=s)},null,512),[[p,t.nom]])]),e("fieldset",null,[J,t.bio?c((u(),m("textarea",{key:0,"onUpdate:modelValue":a[5]||(a[5]=s=>t.bio=s),name:"bio",id:"bio",class:"ng-pristine ng-valid ng-not-empty ng-valid-maxlenght ng-touched",style:{width:"500px",height:"227px"}},null,512)),[[p,t.bio]]):c((u(),m("textarea",{key:1,name:"bio","onUpdate:modelValue":a[6]||(a[6]=s=>t.bio=s),id:"bio",class:"ng-pristine ng-valid ng-not-empty ng-valid-maxlenght ng-touched",placeholder:"Digues alguna cosa sobre tu",style:{width:"500px",height:"227px"}},null,512)),[[p,t.bio]])]),e("fieldset",K,[e("button",{onClick:a[7]||(a[7]=(...s)=>t.saveChanges&&t.saveChanges(...s)),name:"guardar_info",variant:"primary",title:"Save",class:"btn-small",style:{"margin-left":"400px"}}," Guardar ")]),O,Q]),e("div",R,[W,e("div",null,[(u(!0),m(C,null,P(t.allUsers,s=>(u(),m("a",{href:"/usuari/"+s.id},[e("img",{src:s.avatar,width:"32",height:"32",style:{"border-radius":"50%","margin-right":"5px"}},null,8,Z)],8,X))),256))])])])])}const ae=U(k,[["render",$],["__scopeId","data-v-4ad6adaf"]]);export{ae as default};
