!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-cropper",[],t):"object"==typeof exports?exports["vue-cropper"]=t():e["vue-cropper"]=t()}(this,function(){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,o){o(7);var r=o(5)(o(1),o(6),"data-v-7f57ac98",null);e.exports=r.exports},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{w:0,h:0,scale:1,x:0,y:0,loading:!0,trueWidth:0,trueHeight:0,move:!0,moveX:0,moveY:0,crop:!1,cropping:!1,cropW:0,cropH:0,cropOldW:0,cropOldH:0,canChangeX:!1,canChangeY:!1,changeCropTypeX:1,changeCropTypeY:1,cropX:0,cropY:0,cropChangeX:0,cropChangeY:0,cropOffsertX:0,cropOffsertY:0,support:"",touches:[],touchNow:!1}},props:{img:{type:String,default:""},outputSize:{type:Number,default:1},outputType:{type:String,default:"jpeg"},info:{type:Boolean,default:!0},canScale:{type:Boolean,default:!0},autoCrop:{type:Boolean,default:!1},autoCropWidth:{type:Number,default:0},autoCropHeight:{type:Number,default:0},fixed:{type:Boolean,default:!1},fixedNumber:{type:Array,default:function(){return[1,1]}}},computed:{cropInfo:function(){return this.cropOffsertY>20?"-20px":"0px"}},watch:{img:function(){var e=this;this.loading=!0,this.scale=1,this.clearCrop();var t=new Image;t.onload=function(){e.reload()},t.src=this.img},cropW:function(){this.showPreview()},cropH:function(){this.showPreview()},cropOffsertX:function(){this.showPreview()},cropOffsertY:function(){this.showPreview()},scale:function(){this.showPreview()},x:function(){this.showPreview()},y:function(){this.showPreview()}},methods:{startMove:function(e){e.preventDefault(),this.move&&!this.crop?(this.moveX=(e.clientX?e.clientX:e.touches[0].clientX)-this.x,this.moveY=(e.clientY?e.clientY:e.touches[0].clientY)-this.y,e.touches?(window.addEventListener("touchmove",this.moveImg),window.addEventListener("touchend",this.leaveImg),2==e.touches.length&&(this.touches=e.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancleTouchScale))):(window.addEventListener("mousemove",this.moveImg),window.addEventListener("mouseup",this.leaveImg))):(this.cropping=!0,window.addEventListener("mousemove",this.createCrop),window.addEventListener("mouseup",this.endCrop),window.addEventListener("touchmove",this.createCrop),window.addEventListener("touchend",this.endCrop),this.cropOffsertX=e.offsetX?e.offsetX:e.touches[0].pageX-this.$refs.cropper.offsetLeft,this.cropOffsertY=e.offsetY?e.offsetY:e.touches[0].pageY-this.$refs.cropper.offsetTop,this.cropX=e.clientX?e.clientX:e.touches[0].clientX,this.cropY=e.clientY?e.clientY:e.touches[0].clientY,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.cropW=0,this.cropH=0)},touchScale:function(e){var t=this;e.preventDefault();var o={x:this.touches[0].clientX,y:this.touches[0].clientY},r={x:e.touches[0].clientX,y:e.touches[0].clientY},n={x:this.touches[1].clientX,y:this.touches[1].clientY},i={x:e.touches[1].clientX,y:e.touches[1].clientY},c=Math.sqrt(Math.pow(o.x-n.x,2)+Math.pow(o.y-n.y,2)),s=Math.sqrt(Math.pow(r.x-i.x,2)+Math.pow(r.y-i.y,2)),a=~~(s-c);this.touchNow||(this.touchNow=!0,a>0?this.scale+=.003*a:a<0&&(this.scale=this.scale-.003*-a>0?this.scale-=.003*-a:.05),this.touches=e.touches,setTimeout(function(){t.touchNow=!1},50))},cancleTouchScale:function(e){window.removeEventListener("touchmove",this.touchScale)},moveImg:function(e){var t=this;if(e.preventDefault(),e.touches&&2===e.touches.length)return this.touches=e.touches,window.addEventListener("touchmove",this.touchScale),window.addEventListener("touchend",this.cancleTouchScale),window.removeEventListener("touchmove",this.moveImg),!1;var o=e.clientX?e.clientX:e.touches[0].clientX,r=e.clientY?e.clientY:e.touches[0].clientY;this.$nextTick(function(){t.x=~~(o-t.moveX),t.y=~~(r-t.moveY)})},leaveImg:function(e){window.removeEventListener("mousemove",this.moveImg),window.removeEventListener("touchmove",this.moveImg),window.removeEventListener("mouseup",this.leaveImg),window.removeEventListener("touchend",this.leaveImg)},scaleImg:function(){this.support="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",this.canScale&&window.addEventListener(this.support,this.changeSize)},cancleScale:function(){this.canScale&&window.removeEventListener(this.support,this.changeSize)},changeSize:function(e){e.deltaY<0?this.scale+=.05:this.scale>.05?this.scale-=.05:this.scale,e.preventDefault()},createCrop:function(e){var t=this;e.preventDefault();var o=e.clientX?e.clientX:e.touches?e.touches[0].clientX:0,r=e.clientY?e.clientY:e.touches?e.touches[0].clientY:0;this.$nextTick(function(){var e=~~(o-t.cropX),n=~~(r-t.cropY);if(e>0?(t.cropW=e+t.cropChangeX>t.w?t.w-t.cropChangeX:e,t.cropOffsertX=t.cropChangeX):(t.cropW=t.w-t.cropChangeX+Math.abs(e)>t.w?t.cropChangeX:Math.abs(e),t.cropOffsertX=t.cropChangeX+e>0?t.cropChangeX+e:0),t.fixed){var i=~~(t.cropW/t.fixedNumber[0]*t.fixedNumber[1]);i+t.cropOffsertY>t.h?(t.cropH=t.h-t.cropOffsertY,t.cropW=~~(t.cropH/t.fixedNumber[1]*t.fixedNumber[0]),t.cropOffsertX=e>0?t.cropChangeX:t.cropChangeX-t.cropW):t.cropH=i,t.cropOffsertY=t.cropOffsertY}else n>0?(t.cropH=n+t.cropChangeY>t.h?t.h-t.cropChangeY:n,t.cropOffsertY=t.cropChangeY):(t.cropH=t.h-t.cropChangeY+Math.abs(n)>t.h?t.cropChangeY:Math.abs(n),t.cropOffsertY=t.cropChangeY+n>0?t.cropChangeY+n:0)})},changeCropSize:function(e,t,o,r,n){e.preventDefault(),window.addEventListener("mousemove",this.changeCropNow),window.addEventListener("mouseup",this.changeCropEnd),window.addEventListener("touchmove",this.changeCropNow),window.addEventListener("touchend",this.changeCropEnd),this.canChangeX=t,this.canChangeY=o,this.changeCropTypeX=r,this.changeCropTypeY=n,this.cropX=e.clientX?e.clientX:e.touches[0].clientX,this.cropY=e.clientY?e.clientY:e.touches[0].clientY,this.cropOldW=this.cropW,this.cropOldH=this.cropH,this.cropChangeX=this.cropOffsertX,this.cropChangeY=this.cropOffsertY,this.fixed&&this.canChangeX&&this.canChangeY&&(this.canChangeY=0)},changeCropNow:function(e){var t=this;e.preventDefault();var o=e.clientX?e.clientX:e.touches?e.touches[0].clientX:0,r=e.clientY?e.clientY:e.touches?e.touches[0].clientY:0;this.$nextTick(function(){var e=~~(o-t.cropX),n=~~(r-t.cropY);if(t.canChangeX&&(1===t.changeCropTypeX?t.cropOldW-e>0?(t.cropW=t.w-t.cropChangeX-e<=t.w?t.cropOldW-e:t.cropOldW+t.cropChangeX,t.cropOffsertX=t.w-t.cropChangeX-e<=t.w?t.cropChangeX+e:0):(t.cropW=Math.abs(e)+t.cropChangeX<=t.w?Math.abs(e)-t.cropOldW:t.w-t.cropOldW-t.cropChangeX,t.cropOffsertX=t.cropChangeX+t.cropOldW):2===t.changeCropTypeX&&(t.cropOldW+e>0?(t.cropW=t.cropOldW+e+t.cropOffsertX<=t.w?t.cropOldW+e:t.w-t.cropOffsertX,t.cropOffsertX=t.cropChangeX):(t.cropW=t.w-t.cropChangeX+Math.abs(e+t.cropOldW)<=t.w?Math.abs(e+t.cropOldW):t.cropChangeX,t.cropOffsertX=t.w-t.cropChangeX+Math.abs(e+t.cropOldW)<=t.w?t.cropChangeX-Math.abs(e+t.cropOldW):0))),t.canChangeY&&(1===t.changeCropTypeY?t.cropOldH-n>0?(t.cropH=t.h-t.cropChangeY-n<=t.h?t.cropOldH-n:t.cropOldH+t.cropChangeY,t.cropOffsertY=t.h-t.cropChangeY-n<=t.h?t.cropChangeY+n:0):(t.cropH=Math.abs(n)+t.cropChangeY<=t.h?Math.abs(n)-t.cropOldH:t.h-t.cropOldH-t.cropChangeY,t.cropOffsertY=t.cropChangeY+t.cropOldH):2===t.changeCropTypeY&&(t.cropOldH+n>0?(t.cropH=t.cropOldH+n+t.cropOffsertY<=t.h?t.cropOldH+n:t.h-t.cropOffsertY,t.cropOffsertY=t.cropChangeY):(t.cropH=t.h-t.cropChangeY+Math.abs(n+t.cropOldH)<=t.h?Math.abs(n+t.cropOldH):t.cropChangeY,t.cropOffsertY=t.h-t.cropChangeY+Math.abs(n+t.cropOldH)<=t.h?t.cropChangeY-Math.abs(n+t.cropOldH):0))),t.canChangeX&&t.fixed){var i=~~(t.cropW/t.fixedNumber[0]*t.fixedNumber[1]);i+t.cropOffsertY>t.h?(t.cropH=t.h-t.cropOffsertY,t.cropW=~~(t.cropH/t.fixedNumber[1]*t.fixedNumber[0])):t.cropH=i}if(t.canChangeY&&t.fixed){var c=~~(t.cropH/t.fixedNumber[1]*t.fixedNumber[0]);c+t.cropOffsertX>t.w?(t.cropW=t.w-t.cropOffsertX,t.cropH=~~(t.cropW/t.fixedNumber[0]*t.fixedNumber[1])):t.cropW=c}})},changeCropEnd:function(e){window.removeEventListener("mousemove",this.changeCropNow),window.removeEventListener("mouseup",this.changeCropEnd),window.removeEventListener("touchmove",this.changeCropNow),window.removeEventListener("touchend",this.changeCropEnd)},endCrop:function(){0===this.cropW&&0===this.cropH&&(this.cropping=!1),window.removeEventListener("mousemove",this.createCrop),window.removeEventListener("mouseup",this.endCrop),window.removeEventListener("touchmove",this.createCrop),window.removeEventListener("touchend",this.endCrop)},startCrop:function(){this.crop=!0},stopCrop:function(){this.crop=!1},clearCrop:function(){this.cropping=!1,this.cropW=0,this.cropH=0},cropMove:function(e){e.preventDefault(),window.addEventListener("mousemove",this.moveCrop),window.addEventListener("mouseup",this.leaveCrop),window.addEventListener("touchmove",this.moveCrop),window.addEventListener("touchend",this.leaveCrop),this.cropX=(e.clientX?e.clientX:e.touches[0].clientX)-this.cropOffsertX,this.cropY=(e.clientY?e.clientY:e.touches[0].clientY)-this.cropOffsertY},moveCrop:function(e){var t=this;e.preventDefault();var o=e.clientX?e.clientX:e.touches[0].clientX,r=e.clientY?e.clientY:e.touches[0].clientY;this.$nextTick(function(){var e=~~(o-t.cropX),n=~~(r-t.cropY);e<=1?t.cropOffsertX=1:~~(e+t.cropW)>t.w?t.cropOffsertX=t.w-t.cropW-1:t.cropOffsertX=e,n<=1?t.cropOffsertY=1:~~(n+t.cropH)>t.h?t.cropOffsertY=t.h-t.cropH-1:t.cropOffsertY=n})},leaveCrop:function(e){window.removeEventListener("mousemove",this.moveCrop),window.removeEventListener("mouseup",this.leaveCrop),window.removeEventListener("touchmove",this.moveCrop),window.removeEventListener("touchend",this.leaveCrop)},getCropData:function(e){var t=this,o=document.createElement("canvas");o.width=this.cropW,o.height=this.cropH;var r=new Image;r.onload=function(){if(0!=~~o.width){var n=o.getContext("2d"),i=t.x-t.cropOffsertX+t.trueWidth*(1-t.scale)/2,c=t.y-t.cropOffsertY+t.trueHeight*(1-t.scale)/2;n.drawImage(r,i,c,t.trueWidth*t.scale,t.trueHeight*t.scale)}else{o.width=t.trueWidth*t.scale,o.height=t.trueHeight*t.scale;o.getContext("2d").drawImage(r,0,0,t.trueWidth*t.scale,t.trueHeight*t.scale)}var s=o.toDataURL("image/"+t.outputType,t.outputSize);e(s)},"data"!==this.img.substr(0,4)&&(r.crossOrigin="anonymous"),r.src=this.img},getCropBlob:function(e){this.getCropData(function(t){for(var o=t.split(","),r=o[0].match(/:(.*?);/)[1],n=atob(o[1]),i=n.length,c=new Uint8Array(i);i--;)c[i]=n.charCodeAt(i);e(new Blob([c],{type:r}))})},showPreview:function(){var e={};e.div={width:this.cropW+"px",height:this.cropH+"px"},e.img={width:this.trueWidth+"px",height:this.trueHeight+"px",transform:"scale("+this.scale+","+this.scale+") translate3d("+(this.x-this.cropOffsertX)/this.scale+"px,"+(this.y-this.cropOffsertY)/this.scale+"px,0)"},e.w=this.cropW,e.h=this.cropH,this.$emit("realTime",e)},reload:function(){var e=this;this.w=~~window.getComputedStyle(this.$refs.cropper).width.replace("px",""),this.h=~~window.getComputedStyle(this.$refs.cropper).height.replace("px",""),this.trueWidth=this.$refs.cropperImg.width,this.trueHeight=this.$refs.cropperImg.height,this.trueWidth>this.w&&(this.scale=this.w/this.trueWidth),this.trueHeight*this.scale>this.h&&(this.scale=this.h/this.trueHeight),this.$nextTick(function(){e.x=-(e.trueWidth-e.trueWidth*e.scale)/2+(e.w-e.trueWidth*e.scale)/2,e.y=-(e.trueHeight-e.trueHeight*e.scale)/2+(e.h-e.trueHeight*e.scale)/2,e.loading=!1,e.autoCrop&&e.goAutoCrop()})},goAutoCrop:function(){this.cropping=!0;var e=this.autoCropWidth,t=this.autoCropHeight;0!==e&&0!==t||(e=.8*this.w,t=.8*this.h),e=e>this.w?this.w:e,t=t>this.h?this.h:t,this.fixed&&(t=e/this.fixedNumber[0]*this.fixedNumber[1]),this.changeCrop(e,t)},changeCrop:function(e,t){this.cropW=e,this.cropH=t,this.cropOffsertX=(this.w-e)/2,this.cropOffsertY=(this.h-t)/2},refresh:function(){}},mounted:function(){var e=this;this.showPreview(),this.$refs.cropperImg.onload=function(){e.reload()}}}},function(e,t,o){"use strict";var r=o(0);e.exports=r},function(e,t,o){t=e.exports=o(4)(),t.push([e.i,'.vue-cropper[data-v-7f57ac98]{position:relative;width:100%;height:100%;box-sizing:border-box;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;direction:ltr;touch-action:none;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-box-canvas[data-v-7f57ac98],.cropper-box[data-v-7f57ac98],.cropper-crop-box[data-v-7f57ac98],.cropper-drag-box[data-v-7f57ac98],.cropper-face[data-v-7f57ac98]{position:absolute;top:0;right:0;bottom:0;left:0;user-select:none}.cropper-box-canvas img[data-v-7f57ac98]{position:relative;user-select:none;transform:none}.cropper-box[data-v-7f57ac98]{overflow:hidden}.cropper-move[data-v-7f57ac98]{cursor:move}.cropper-crop[data-v-7f57ac98]{cursor:crosshair}.cropper-modal[data-v-7f57ac98]{background:rgba(0,0,0,.5)}.cropper-view-box[data-v-7f57ac98]{display:block;overflow:hidden;width:100%;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);user-select:none}.cropper-view-box img[data-v-7f57ac98]{user-select:none}.cropper-face[data-v-7f57ac98]{top:0;left:0;background-color:#fff;opacity:.1}.crop-info[data-v-7f57ac98]{position:absolute;left:0;min-width:65px;text-align:center;color:#fff;line-height:20px;background-color:rgba(0,0,0,.8);font-size:12px}.crop-line[data-v-7f57ac98]{position:absolute;display:block;width:100%;height:100%;opacity:.1}.line-w[data-v-7f57ac98]{top:-3px;left:0;height:5px;cursor:n-resize}.line-a[data-v-7f57ac98]{top:0;left:-3px;width:5px;cursor:w-resize}.line-s[data-v-7f57ac98]{bottom:-3px;left:0;height:5px;cursor:s-resize}.line-d[data-v-7f57ac98]{top:0;right:-3px;width:5px;cursor:e-resize}.crop-point[data-v-7f57ac98]{position:absolute;width:8px;height:8px;opacity:.75;background-color:#39f;border-radius:100%}.point1[data-v-7f57ac98]{top:-4px;left:-4px;cursor:nw-resize}.point2[data-v-7f57ac98]{top:-5px;left:50%;margin-left:-3px;cursor:n-resize}.point3[data-v-7f57ac98]{top:-4px;right:-4px;cursor:ne-resize}.point4[data-v-7f57ac98]{top:50%;left:-4px;margin-top:-3px;cursor:w-resize}.point5[data-v-7f57ac98]{top:50%;right:-4px;margin-top:-3px;cursor:w-resize}.point6[data-v-7f57ac98]{bottom:-5px;left:-4px;cursor:sw-resize}.point7[data-v-7f57ac98]{bottom:-5px;left:50%;margin-left:-3px;cursor:s-resize}.point8[data-v-7f57ac98]{bottom:-5px;right:-4px;cursor:nw-resize}@media screen and (max-width:500px){.crop-point[data-v-7f57ac98]{position:absolute;width:20px;height:20px;opacity:.45;background-color:#39f;border-radius:100%}.point1[data-v-7f57ac98]{top:-10px;left:-10px}.point2[data-v-7f57ac98],.point4[data-v-7f57ac98],.point5[data-v-7f57ac98],.point7[data-v-7f57ac98]{display:none}.point3[data-v-7f57ac98]{top:-10px;right:-10px}.point4[data-v-7f57ac98]{top:0;left:0}.point6[data-v-7f57ac98]{bottom:-10px;left:-10px}.point8[data-v-7f57ac98]{bottom:-10px;right:-10px}}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(r[i]=!0)}for(n=0;n<t.length;n++){var c=t[n];"number"==typeof c[0]&&r[c[0]]||(o&&!c[2]?c[2]=o:o&&(c[2]="("+c[2]+") and ("+o+")"),e.push(c))}},e}},function(e,t){e.exports=function(e,t,o,r){var n,i=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(n=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),o&&(s._scopeId=o),r){var a=Object.create(s.computed||null);Object.keys(r).forEach(function(e){var t=r[e];a[e]=function(){return t}}),s.computed=a}return{esModule:n,exports:i,options:s}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"cropper",staticClass:"vue-cropper"},[o("div",{staticClass:"cropper-box"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"cropper-box-canvas",style:{width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+e.x/e.scale+"px,"+e.y/e.scale+"px,0)"}},[o("img",{ref:"cropperImg",attrs:{src:e.img,alt:"cropper-img"}})])]),e._v(" "),o("div",{staticClass:"cropper-drag-box",class:{"cropper-move":e.move&&!e.crop,"cropper-crop":e.crop,"cropper-modal":e.cropping},on:{mousedown:e.startMove,touchstart:e.startMove,mouseover:e.scaleImg,mouseout:e.cancleScale}}),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.cropping,expression:"cropping"}],staticClass:"cropper-crop-box",style:{width:e.cropW+"px",height:e.cropH+"px",transform:"translate3d("+e.cropOffsertX+"px,"+e.cropOffsertY+"px,0)"}},[o("span",{staticClass:"cropper-view-box"},[o("img",{style:{width:e.trueWidth+"px",height:e.trueHeight+"px",transform:"scale("+e.scale+","+e.scale+") translate3d("+(e.x-e.cropOffsertX)/e.scale+"px,"+(e.y-e.cropOffsertY)/e.scale+"px,0)"},attrs:{src:e.img,alt:"cropper-img"}})]),e._v(" "),o("span",{staticClass:"cropper-face cropper-move",on:{mousedown:e.cropMove,touchstart:e.cropMove}}),e._v(" "),e.info?o("span",{staticClass:"crop-info",style:{top:e.cropInfo}},[e._v(e._s(this.cropW)+" × "+e._s(this.cropH))]):e._e(),e._v(" "),o("span",{staticClass:"crop-line line-w",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,1)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,1)}}}),e._v(" "),o("span",{staticClass:"crop-line line-a",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,1,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,1,0)}}}),e._v(" "),o("span",{staticClass:"crop-line line-s",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,2)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,2)}}}),e._v(" "),o("span",{staticClass:"crop-line line-d",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,2,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,2,0)}}}),e._v(" "),o("span",{staticClass:"crop-point point1",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,1,1)},touchstart:function(t){e.changeCropSize(t,!0,!0,1,1)}}}),e._v(" "),o("span",{staticClass:"crop-point point2",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,1)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,1)}}}),e._v(" "),o("span",{staticClass:"crop-point point3",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,2,1)},touchstart:function(t){e.changeCropSize(t,!0,!0,2,1)}}}),e._v(" "),o("span",{staticClass:"crop-point point4",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,1,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,1,0)}}}),e._v(" "),o("span",{staticClass:"crop-point point5",on:{mousedown:function(t){e.changeCropSize(t,!0,!1,2,0)},touchstart:function(t){e.changeCropSize(t,!0,!1,2,0)}}}),e._v(" "),o("span",{staticClass:"crop-point point6",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,1,2)},touchstart:function(t){e.changeCropSize(t,!0,!0,1,2)}}}),e._v(" "),o("span",{staticClass:"crop-point point7",on:{mousedown:function(t){e.changeCropSize(t,!1,!0,0,2)},touchstart:function(t){e.changeCropSize(t,!1,!0,0,2)}}}),e._v(" "),o("span",{staticClass:"crop-point point8",on:{mousedown:function(t){e.changeCropSize(t,!0,!0,2,2)},touchstart:function(t){e.changeCropSize(t,!0,!0,2,2)}}})])])},staticRenderFns:[]}},function(e,t,o){var r=o(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o(8)("86f24dac",r,!0)},function(e,t,o){function r(e){for(var t=0;t<e.length;t++){var o=e[t],r=h[o.id];if(r){r.refs++;for(var n=0;n<r.parts.length;n++)r.parts[n](o.parts[n]);for(;n<o.parts.length;n++)r.parts.push(i(o.parts[n]));r.parts.length>o.parts.length&&(r.parts.length=o.parts.length)}else{for(var c=[],n=0;n<o.parts.length;n++)c.push(i(o.parts[n]));h[o.id]={id:o.id,refs:1,parts:c}}}}function n(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function i(e){var t,o,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(l)return v;r.parentNode.removeChild(r)}if(g){var i=d++;r=f||(f=n()),t=c.bind(null,r,i,!1),o=c.bind(null,r,i,!0)}else r=n(),t=s.bind(null,r),o=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else o()}}function c(e,t,o,r){var n=o?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,n);else{var i=document.createTextNode(n),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function s(e,t){var o=t.css,r=t.media,n=t.sourceMap;if(r&&e.setAttribute("media",r),n&&(o+="\n/*# sourceURL="+n.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var p=o(9),h={},u=a&&(document.head||document.getElementsByTagName("head")[0]),f=null,d=0,l=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o){l=o;var n=p(e,t);return r(n),function(t){for(var o=[],i=0;i<n.length;i++){var c=n[i],s=h[c.id];s.refs--,o.push(s)}t?(n=p(e,t),r(n)):n=[];for(var i=0;i<o.length;i++){var s=o[i];if(0===s.refs){for(var a=0;a<s.parts.length;a++)s.parts[a]();delete h[s.id]}}}};var m=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var o=[],r={},n=0;n<t.length;n++){var i=t[n],c=i[0],s=i[1],a=i[2],p=i[3],h={id:e+":"+n,css:s,media:a,sourceMap:p};r[c]?r[c].parts.push(h):o.push(r[c]={id:c,parts:[h]})}return o}}])});