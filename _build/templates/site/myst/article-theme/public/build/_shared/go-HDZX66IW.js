import{b as h}from"/myst_assets_folder/_shared/chunk-2NH4LW52.js";function l(e,t){var n=e.next();if(n=='"'||n=="'"||n=="`")return t.tokenize=s(n),t.tokenize(e,t);if(/[\d\.]/.test(n))return n=="."?e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/):n=="0"?e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^0[0-7]+/):e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/),"number";if(/[\[\]{}\(\),;\:\.]/.test(n))return u=n,null;if(n=="/"){if(e.eat("*"))return t.tokenize=a,a(e,t);if(e.eat("/"))return e.skipToEnd(),"comment"}if(f.test(n))return e.eatWhile(f),"operator";e.eatWhile(/[\w\$_\xa1-\uffff]/);var r=e.current();return k.propertyIsEnumerable(r)?((r=="case"||r=="default")&&(u="case"),"keyword"):x.propertyIsEnumerable(r)?"atom":"variable"}function s(e){return function(t,n){for(var r=!1,i,o=!1;(i=t.next())!=null;){if(i==e&&!r){o=!0;break}r=!r&&e!="`"&&i=="\\"}return(o||!(r||e=="`"))&&(n.tokenize=l),"string"}}function a(e,t){for(var n=!1,r;r=e.next();){if(r=="/"&&n){t.tokenize=l;break}n=r=="*"}return"comment"}function d(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function c(e,t,n){return e.context=new d(e.indented,t,n,null,e.context)}function p(e){if(e.context.prev){var t=e.context.type;return(t==")"||t=="]"||t=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}}var k,x,f,u,v,g=h(()=>{k={break:!0,case:!0,chan:!0,const:!0,continue:!0,default:!0,defer:!0,else:!0,fallthrough:!0,for:!0,func:!0,go:!0,goto:!0,if:!0,import:!0,interface:!0,map:!0,package:!0,range:!0,return:!0,select:!0,struct:!0,switch:!0,type:!0,var:!0,bool:!0,byte:!0,complex64:!0,complex128:!0,float32:!0,float64:!0,int8:!0,int16:!0,int32:!0,int64:!0,string:!0,uint8:!0,uint16:!0,uint32:!0,uint64:!0,int:!0,uint:!0,uintptr:!0,error:!0,rune:!0,any:!0,comparable:!0},x={true:!0,false:!0,iota:!0,nil:!0,append:!0,cap:!0,close:!0,complex:!0,copy:!0,delete:!0,imag:!0,len:!0,make:!0,new:!0,panic:!0,print:!0,println:!0,real:!0,recover:!0},f=/[+\-*&^%:=<>!|\/]/;v={name:"go",startState:function(e){return{tokenize:null,context:new d(-e,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,t){var n=t.context;if(e.sol()&&(n.align==null&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,n.type=="case"&&(n.type="}")),e.eatSpace())return null;u=null;var r=(t.tokenize||l)(e,t);return r=="comment"||(n.align==null&&(n.align=!0),u=="{"?c(t,e.column(),"}"):u=="["?c(t,e.column(),"]"):u=="("?c(t,e.column(),")"):u=="case"?n.type="case":(u=="}"&&n.type=="}"||u==n.type)&&p(t),t.startOfLine=!1),r},indent:function(e,t,n){if(e.tokenize!=l&&e.tokenize!=null)return null;var r=e.context,i=t&&t.charAt(0);if(r.type=="case"&&/^(?:case|default)\b/.test(t))return r.indented;var o=i==r.type;return r.align?r.column+(o?0:1):r.indented+(o?0:n.unit)},languageData:{indentOnInput:/^\s([{}]|case |default\s*:)$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}});g();export{v as go};
