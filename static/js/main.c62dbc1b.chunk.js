(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(8),r=a.n(n),i=a(3),o=a(2),l=a(4),j=(a(13),a(14),a(0));var u=function(e){var t=e.statisticsActive,a=e.setStatisticsActive,c=e.sec,s=e.min,n=e.correctCount,r=e.wrongCount,o=e.sizeField,l=Object(i.a)(Array(8).keys());return Object(j.jsxs)("div",{className:t?"statistics_active":"statistics",children:[Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:["\u041d\u043e\u043c\u0435\u0440 \u0438\u0433\u0440\u043e\u043a\u0430","\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u043e\u043b\u044f","\u0412\u0440\u0435\u043c\u044f","\u0412\u0435\u0440\u043d\u044b\u0435 \u0448\u0430\u0433\u0438","\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0448\u0430\u0433\u0438","\u041d\u0430\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u043b\u043b\u044b"].map((function(e,t){return Object(j.jsx)("th",{children:e},t)}))})}),Object(j.jsx)("tbody",{children:l.map((function(e,t){return 0===t?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:"1"}),Object(j.jsx)("td",{children:o}),Object(j.jsx)("td",{children:"".concat(s,":").concat(c)}),Object(j.jsx)("td",{children:n}),Object(j.jsx)("td",{children:r}),Object(j.jsx)("td",{children:100-(c/2+r)})]},t):Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{}),Object(j.jsx)("td",{}),Object(j.jsx)("td",{}),Object(j.jsx)("td",{}),Object(j.jsx)("td",{})]},t)}))})]}),Object(j.jsx)("button",{className:"btn-back__stat",onClick:function(){return a(!1)},children:"\u043d\u0430\u0437\u0430\u0434"})]})};var O=function(e){var t=e.header,a=e.items,n=e.active,r=e.setActive,O=e.cards,m=e.cardFruits,b=e.cardCars,d=e.pairOfCards,S=e.SetPairOfCards,g=e.setSizeCards,f=e.setStyleCards,h=e.setplayGameCard,y=e.setVolumeCard,v=e.volumeCard,p=e.setStartTimer,x=e.setMatched,C=e.setopenCard,N=e.setSec,k=e.setMin,I=e.SetCorrectCount,J=e.SetWrongCount,w=e.setUpBound,_=e.setDownBound,A=e.setSelectCard,G=e.handleFlip,M=e.setGameWin,E=e.setResumeGame,z=e.resumeGame,F=e.setAnime,T=e.sec,B=e.min,P=e.correctCount,R=e.wrongCount,W=["\u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0435","\u0444\u0440\u0443\u043a\u0442\u044b","\u043c\u0430\u0448\u0438\u043d\u044b"],L=[10,8,6,3],V=["\u043d\u0435\u0442\u0443","\u043f\u0438\u043a\u0438","\u0447\u0435\u0440\u0432\u0438","\u043a\u0440\u0435\u0441\u0442\u0438","\u0431\u0443\u0431\u044b"],D=Object(c.useState)(JSON.parse(localStorage.getItem("myCategoryCard"))||W[0]),U=Object(o.a)(D,2),q=U[0],X=U[1],H=Object(c.useState)(JSON.parse(localStorage.getItem("myCategoryMain"))||O),K=Object(o.a)(H,2),Q=K[0],Y=K[1],Z=Object(c.useState)(JSON.parse(localStorage.getItem("mySizeField"))||L[0]),$=Object(o.a)(Z,2),ee=$[0],te=$[1],ae=Object(c.useState)(10),ce=Object(o.a)(ae,2),se=ce[0],ne=ce[1],re=Object(c.useState)(JSON.parse(localStorage.getItem("myStyleCard"))||V[0]),ie=Object(o.a)(re,2),oe=ie[0],le=ie[1],je=Object(c.useState)(!1),ue=Object(o.a)(je,2),Oe=ue[0],me=ue[1],be=Object(c.useState)(!1),de=Object(o.a)(be,2),Se=de[0],ge=de[1],fe=Object(c.useState)(JSON.parse(localStorage.getItem("myPosition"))||Object(i.a)(Array(20).keys())),he=Object(o.a)(fe,2),ye=he[0],ve=he[1];function pe(e){0===e&&(r(!1),p(!0)),1===e&&tt(),2===e&&ge(!0),3===e&&(tt(),function(){var e=[];d.map((function(t){e.push(t.name)})),lt(e)}(),et(!0)),4===e&&me(!0),5===e&&function(e){var t=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.call(e)}(document.body)}function xe(){E(!1),x([]),C([]),N(0),k(0),I(0),J(0),A(-1)}var Ce=["\u0412\u044b\u043a\u043b","\u0412\u043a\u043b"],Ne=s.a.useState(Ce[0]),ke=Object(o.a)(Ne,2),Ie=ke[0],Je=ke[1],we=Object(c.useState)(.1),_e=Object(o.a)(we,2),Ae=_e[0],Ge=_e[1],Me=["10%","20%","30%","40%","50%","60%","70%","80%","90%","100%"],Ee=Object(c.useState)(JSON.parse(localStorage.getItem("myVolumeSound"))||Me[0]),ze=Object(o.a)(Ee,2),Fe=ze[0],Te=ze[1],Be=Object(l.a)("./image/level.mp3",{playGame:Ie,volume:Ae}),Pe=Object(o.a)(Be,2),Re=Pe[0],We=Pe[1].stop,Le=["\u0412\u044b\u043a\u043b","\u0412\u043a\u043b"],Ve=s.a.useState(Ce[1]),De=Object(o.a)(Ve,2),Ue=De[0],qe=De[1],Xe=Object(c.useState)(JSON.parse(localStorage.getItem("myVolumeSoundCard"))||Me[0]),He=Object(o.a)(Xe,2),Ke=He[0],Qe=He[1],Ye=Object(c.useState)(!1),Ze=Object(o.a)(Ye,2),$e=Ze[0],et=Ze[1];function tt(){F(!0),setTimeout((function(){F(!1)}),500),r(!1),p(!0),E(!0),x([]),C([]),N(0),k(0),I(0),J(0),M(!1),S(d.sort((function(){return Math.random()-.5})))}var at=Object(c.useState)([]),ct=Object(o.a)(at,2),st=ct[0],nt=ct[1],rt=Object(c.useState)([]),it=Object(o.a)(rt,2),ot=it[0],lt=it[1];return Object(c.useEffect)((function(){var e,t;$e&&(e=setTimeout((function(){var e=ot.lastIndexOf(ot[ye[0]]);A(ye[0]),G(ye[0]);var t=ye.lastIndexOf(e),a=ye.splice(t,1);ye.splice(0,1,a[0])}),2e3),t=setTimeout((function(){A(ye[0]),G(ye[0]),ye.splice(0,1),nt([])}),2500)),0===ye.length&&(clearInterval(e),clearInterval(t))}),[$e,st]),Object(c.useEffect)((function(){localStorage.setItem("myCategoryCard",JSON.stringify(q)),localStorage.setItem("myCategoryMain",JSON.stringify(Q)),localStorage.setItem("mySizeField",JSON.stringify(ee)),localStorage.setItem("myStyleCard",JSON.stringify(oe)),localStorage.setItem("myPosition",JSON.stringify(ye)),localStorage.setItem("myVolumeSound",JSON.stringify(Fe)),localStorage.setItem("myVolumeSoundCard",JSON.stringify(Ke))}),[Q,ee,q,oe,ye,Fe,Ke]),Object(j.jsxs)("div",{className:n?"menu active":"menu",onClick:function(){return r(!0)},children:[Object(j.jsx)("div",{className:"blur"}),Object(j.jsxs)("div",{className:"menu__content",onClick:function(e){return e.stopPropagation()},children:[Object(j.jsx)("div",{className:"menu__header",children:t}),Object(j.jsx)("ul",{style:Oe||Se?{display:"none"}:{display:"flex"},children:a.map((function(e,t){return Object(j.jsx)("li",{style:z?e.styleblock:e.stylenone,onClick:function(){return pe(t)},children:Object(j.jsxs)("a",{href:e.href,children:[" ",e.value,"  "]},e.value)},e.value)}))}),Object(j.jsx)(u,{statisticsActive:Oe,setStatisticsActive:me,sec:T,min:B,correctCount:P,wrongCount:R,sizeField:ee}),Object(j.jsxs)("ul",{className:Se?"settings active":"settings",children:[Object(j.jsx)("li",{children:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f ",Object(j.jsx)("span",{className:"settings__value",onClick:function(){var e=W.indexOf(q)+1;if(3===e&&(e=0),X(W[e]),function(e){"\u0436\u0438\u0432\u043e\u0442\u043d\u044b\u0435"===e&&Y(O);"\u0444\u0440\u0443\u043a\u0442\u044b"===e&&Y(m);"\u043c\u0430\u0448\u0438\u043d\u044b"===e&&Y(b)}(W[e]),ee===se){if(0===e){xe();var t=O.slice(0,se);return S([].concat(Object(i.a)(t),Object(i.a)(t)))}if(1===e){xe();var a=m.slice(0,se);return S([].concat(Object(i.a)(a),Object(i.a)(a)))}if(2===e){xe();var c=b.slice(0,se);return S([].concat(Object(i.a)(c),Object(i.a)(c)))}}},children:q})]}),Object(j.jsxs)("li",{children:["\u0420\u0430\u0437\u043c\u0435\u0440 \u043f\u043e\u043b\u044f ",Object(j.jsx)("span",{className:"settings__value",onClick:function(){var e=L.indexOf(ee)+1;if(4===e&&(e=0),te(L[e]),ne(L[e]),1===e){var t=Q.slice(0,8);return g("eight"),xe(),_(11),w(4),ve(Object(i.a)(Array(16).keys())),S([].concat(Object(i.a)(t),Object(i.a)(t)))}if(2===e){var a=Q.slice(0,6);return g("six"),xe(),_(8),w(3),ve(Object(i.a)(Array(12).keys())),S([].concat(Object(i.a)(a),Object(i.a)(a)))}if(0===e){var c=Q.slice(0,10);return g(""),xe(),_(14),w(5),ve(Object(i.a)(Array(20).keys())),S([].concat(Object(i.a)(c),Object(i.a)(c)))}if(3===e){var s=Q.slice(0,3);return g("three"),xe(),_(2),w(3),ve(Object(i.a)(Array(6).keys())),S([].concat(Object(i.a)(s),Object(i.a)(s)))}},children:ee})]}),Object(j.jsxs)("li",{children:["\u0420\u0443\u0431\u0430\u0448\u043a\u0430 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a ",Object(j.jsx)("span",{className:"settings__value",onClick:function(){var e=V.indexOf(oe)+1;switch(5===e&&(e=0),le(V[e]),e){case 0:f("");break;case 1:f("piki");break;case 2:f("chervi");break;case 3:f("kresti");break;case 4:f("bybi")}},children:oe})]})]}),Object(j.jsx)("li",{children:" \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0437\u0432\u0443\u043a\u0430"}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{onClick:function(){var e=Ce.indexOf(Ie)+1;2===e&&(e=0),Je(Ce[e]),0===e?We():Re()},children:["\u0417\u0432\u0443\u043a \u0438\u0433\u0440\u044b ",Object(j.jsx)("span",{className:"settings__value",children:Ie})]}),Object(j.jsxs)("li",{onClick:function(){var e=Le.indexOf(Ue)+1;2===e&&(e=0),h(!!e),qe(Le[e])},children:["\u0417\u0432\u0443\u043a \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a ",Object(j.jsx)("span",{className:"settings__value",children:Ue})]}),Object(j.jsxs)("li",{onClick:function(){var e=Me.indexOf(Fe)+1;10===e&&(e=0),Ge(Ae>.9?.1:function(e){return e+.1}),Te(Me[e])},children:["\u0413\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u044c \u0438\u0433\u0440\u044b   ",Object(j.jsx)("span",{className:"settings__value",children:Fe})]}),Object(j.jsxs)("li",{onClick:function(){var e=Me.indexOf(Ke)+1;10===e&&(e=0),y(v>.9?.1:function(e){return e+.1}),Qe(Me[e])},children:["\u0413\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a ",Object(j.jsx)("span",{className:"settings__value",children:Ke})]})]}),Object(j.jsx)("li",{className:"btn-back",onClick:function(){return ge(!1)},children:"\u043d\u0430\u0437\u0430\u0434"})]})]})]})},m=(a(16),[{name:"belka",id:"1"},{name:"ezhik",id:"2"},{name:"golub",id:"3"},{name:"krolik",id:"4"},{name:"lev",id:"5"},{name:"lvica",id:"6"},{name:"pesec",id:"7"},{name:"popugay",id:"8"},{name:"sova",id:"9"},{name:"verbljud",id:"10"}]),b=[{name:"zhuk",id:"1"},{name:"taxi",id:"2"},{name:"skor",id:"3"},{name:"pojar",id:"4"},{name:"kabriolet",id:"5"},{name:"gruzovik",id:"6"},{name:"fura",id:"7"},{name:"evakuator",id:"8"},{name:"cuper",id:"9"},{name:"avtomob",id:"10"}],d=[{name:"abrikos",id:"1"},{name:"apelsin",id:"2"},{name:"apple",id:"3"},{name:"banan",id:"4"},{name:"dynja",id:"5"},{name:"granate",id:"6"},{name:"grusha",id:"7"},{name:"klubnika",id:"8"},{name:"vinograd",id:"9"},{name:"vishnja",id:"10"}];var S=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(JSON.parse(localStorage.getItem("myPairOfCards"))||[].concat(m,m)),r=Object(o.a)(n,2),u=r[0],S=r[1],g=Object(c.useState)(JSON.parse(localStorage.getItem("myUpBound"))||5),f=Object(o.a)(g,2),h=f[0],y=f[1],v=Object(c.useState)(JSON.parse(localStorage.getItem("myDownBound"))||14),p=Object(o.a)(v,2),x=p[0],C=p[1],N=Object(c.useState)(JSON.parse(localStorage.getItem("mySizeCards"))||""),k=Object(o.a)(N,2),I=k[0],J=k[1],w=Object(c.useState)(JSON.parse(localStorage.getItem("myStyleCards"))||""),_=Object(o.a)(w,2),A=_[0],G=_[1],M=Object(c.useState)(JSON.parse(localStorage.getItem("myCorrectCount"))||0),E=Object(o.a)(M,2),z=E[0],F=E[1],T=Object(c.useState)(JSON.parse(localStorage.getItem("myWrongCount"))||0),B=Object(o.a)(T,2),P=B[0],R=B[1],W=Object(c.useState)([]),L=Object(o.a)(W,2),V=L[0],D=L[1],U=Object(c.useState)(JSON.parse(localStorage.getItem("myMatched"))||[]),q=Object(o.a)(U,2),X=q[0],H=q[1],K=Object(c.useState)(!1),Q=Object(o.a)(K,2),Y=Q[0],Z=Q[1],$=Object(c.useState)(JSON.parse(localStorage.getItem("myResumeGame"))||!1),ee=Object(o.a)($,2),te=ee[0],ae=ee[1];Object(c.useEffect)((function(){if(u.length/2===X.length&&(Z(!0),Ie(),setTimeout((function(){ae(!1),H([]),D([]),ct(0),$e(0),F(0),R(0),mt(-1),window.location.reload()}),2e3)),!(V<2)){var e=u[V[0]],t=u[V[1]];t&&e.id===t.id?(H([].concat(Object(i.a)(X),[e.id])),F(z+1),setTimeout((function(){Be()}),200)):t&&e.id!==t.id&&(R(P+1),setTimeout((function(){Ke()}),200)),2===V.length&&setTimeout((function(){D([])}),400)}}),[V]);var ce=function(e){D((function(t){return[].concat(Object(i.a)(t),[e])})),Se()},se=Object(c.useState)(!0),ne=Object(o.a)(se,2),re=ne[0],ie=ne[1],oe=Object(c.useState)(.1),le=Object(o.a)(oe,2),je=le[0],ue=le[1],Oe=Object(l.a)("./image/card.mp3",{playGameCard:re,volumeCard:je}),me=Object(o.a)(Oe,2),be=me[0],de=me[1].stop,Se=function(){re?be():de()},ge=Object(c.useState)(!0),fe=Object(o.a)(ge,2),he=fe[0],ye=(fe[1],Object(c.useState)(.5)),ve=Object(o.a)(ye,2),pe=ve[0],xe=(ve[1],Object(l.a)("./image/gamewin.mp3",{playGameWin:he,volumeGameWin:pe})),Ce=Object(o.a)(xe,2),Ne=Ce[0],ke=Ce[1].stopwin,Ie=function(){he?Ne():ke()},Je=Object(c.useState)(!0),we=Object(o.a)(Je,2),_e=we[0],Ae=(we[1],Object(c.useState)(.2)),Ge=Object(o.a)(Ae,2),Me=Ge[0],Ee=(Ge[1],Object(l.a)("./image/correct.mp3",{playCorrect:_e,volumeCorrect:Me})),ze=Object(o.a)(Ee,2),Fe=ze[0],Te=ze[1].stopcor,Be=function(){_e?Fe():Te()},Pe=Object(c.useState)(!0),Re=Object(o.a)(Pe,2),We=Re[0],Le=(Re[1],Object(c.useState)(.2)),Ve=Object(o.a)(Le,2),De=Ve[0],Ue=(Ve[1],Object(l.a)("./image/error.mp3",{playError:We,volumeError:De})),qe=Object(o.a)(Ue,2),Xe=qe[0],He=qe[1].stoperr,Ke=function(){We?Xe():He()},Qe=Object(c.useState)(JSON.parse(localStorage.getItem("myMinInLocalStorage"))||0),Ye=Object(o.a)(Qe,2),Ze=Ye[0],$e=Ye[1],et=Object(c.useState)(JSON.parse(localStorage.getItem("mySecInLocalStorage"))||0),tt=Object(o.a)(et,2),at=tt[0],ct=tt[1],st=Object(c.useState)(!1),nt=Object(o.a)(st,2),rt=nt[0],it=nt[1],ot=0,lt=0;at>9&&(lt=""),Ze>9&&(ot=""),Object(c.useEffect)((function(){var e;rt&&(e=setTimeout((function(){59===at?(ct(0),$e(Ze+1)):ct(at+1)}),1e3)),a&&clearInterval(e),Y&&clearInterval(e)}),[Ze,at,rt,a]),Object(c.useEffect)((function(){localStorage.setItem("mySecInLocalStorage",JSON.stringify(at)),localStorage.setItem("myMinInLocalStorage",JSON.stringify(Ze)),localStorage.setItem("myCorrectCount",JSON.stringify(z)),localStorage.setItem("myWrongCount",JSON.stringify(P)),localStorage.setItem("myMatched",JSON.stringify(X)),localStorage.setItem("myPairOfCards",JSON.stringify(u)),localStorage.setItem("mySizeCards",JSON.stringify(I)),localStorage.setItem("myStyleCards",JSON.stringify(A)),localStorage.setItem("myUpBound",JSON.stringify(h)),localStorage.setItem("myDownBound",JSON.stringify(x)),localStorage.setItem("myResumeGame",JSON.stringify(te))}),[at,Ze,z,P,X,u,A,h,x,te]);var jt=Object(c.useState)(-1),ut=Object(o.a)(jt,2),Ot=ut[0],mt=ut[1],bt=function(e){var t=e.key;if("ArrowRight"===t&&(mt(Ot+1),console.log(Ot),Ot===u.length-1&&mt(0)),"ArrowLeft"===t&&(mt(Ot-1),0===Ot&&mt(u.length-1)),"ArrowUp"===t){if(Ot<h)return;mt(Ot-h)}if("ArrowDown"===t){if(Ot>x)return;mt(Ot+h)}"Escape"===t&&s(!a),"Control"===t&&ce(Ot)};Object(c.useEffect)((function(){if(rt)return window.addEventListener("keyup",bt),function(){window.removeEventListener("keyup",bt)}}),[Ot,a]);var dt=Object(c.useState)(!1),St=Object(o.a)(dt,2),gt=St[0],ft=St[1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("nav",{children:[Object(j.jsx)("div",{className:a?"burger-btn active":"burger-btn",onClick:function(){return s(!a)}}),Object(j.jsx)("span",{className:"timer",children:"".concat(ot).concat(Ze,":").concat(lt).concat(at)}),Object(j.jsxs)("div",{children:["\u0425\u043e\u0434\u044b ",Object(j.jsx)("span",{className:"wrong-count",children:P}),"/",Object(j.jsx)("span",{className:"correct-count",children:z})]})]}),Object(j.jsx)(O,{active:a,setActive:s,header:"Memory Game",items:[{value:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",href:"#",stylenone:{display:"none"},styleblock:{display:"flex"}},{value:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430",href:"#"},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",href:"#"},{value:"\u0410\u0432\u0442\u043e\u0438\u0433\u0440\u0430",href:"#"},{value:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",href:"#"},{value:"\u0412\u043e \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d",href:"#"}],cards:m,cardCars:b,cardFruits:d,setSizeCards:J,pairOfCards:u,SetPairOfCards:S,setStyleCards:G,setplayGameCard:ie,setVolumeCard:ue,volumeCard:je,setStartTimer:it,setMatched:H,setopenCard:D,setSec:ct,setMin:$e,SetCorrectCount:F,SetWrongCount:R,setUpBound:y,setDownBound:C,setSelectCard:mt,selectCard:Ot,handleFlip:ce,setGameWin:Z,setResumeGame:ae,resumeGame:te,setAnime:ft,sec:at,min:Ze,correctCount:z,wrongCount:P}),Object(j.jsx)("div",{className:"cards ".concat(I),children:u.map((function(e,t){var a;return a=!1,V.includes(t)&&(a=!0),X.includes(e.id)&&(a=!0),Object(j.jsx)("div",{className:"card ".concat(a||gt?"flipped":""),onClick:function(){return ce(t)},children:Object(j.jsxs)("div",{className:"inner",children:[Object(j.jsx)("div",{className:"front ".concat(Ot===t?"select":""),children:Object(j.jsx)("img",{className:"imgcard",src:"./image/".concat(e.name,".png"),alt:"".concat(e.name),width:"100",onClick:function(e){return e.stopPropagation()}})}),Object(j.jsx)("div",{className:"back ".concat(Ot===t?"select":""),style:{backgroundImage:"url("+A+".jpg)"}})]})},t)}))})]}),Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsxs)("a",{href:"https://github.com/MAXONVTEC",children:[Object(j.jsx)("img",{className:"img-git",src:"./image/git.png",alt:"rfh"})," "]}),Object(j.jsx)("p",{className:"text-footer",children:"2021"}),Object(j.jsxs)("a",{href:"https://rs.school/js/",children:[" ",Object(j.jsx)("img",{className:"img-logo",src:"https://rs.school/images/rs_school_js.svg",alt:"rfh"})," "]})]})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c62dbc1b.chunk.js.map