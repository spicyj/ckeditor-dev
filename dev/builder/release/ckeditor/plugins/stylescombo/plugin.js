﻿/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function(){CKEDITOR.plugins.add("stylescombo",{requires:"richcombo",lang:"af,ar,bg,bn,bs,ca,cs,cy,da,de,el,en-au,en-ca,en-gb,en,eo,es,et,eu,fa,fi,fo,fr-ca,fr,gl,gu,he,hi,hr,hu,is,it,ja,ka,km,ko,ku,lt,lv,mk,mn,ms,nb,nl,no,pl,pt-br,pt,ro,ru,sk,sl,sq,sr-latn,sr,sv,th,tr,ug,uk,vi,zh-cn,zh",init:function(c){var j=c.config,f=c.lang.stylescombo,g={},i=[],k=[];c.on("stylesSet",function(b){if(b=b.data.styles){for(var a,h,d=0,e=b.length;d<e;d++)if(a=b[d],!(c.blockless&&a.element in CKEDITOR.dtd.$block)&&(h=
a.name,a=new CKEDITOR.style(a),!c.filter.customConfig||c.filter.check(a)))a._name=h,a._.enterMode=j.enterMode,a._.weight=d+1E3*(a.type==CKEDITOR.STYLE_OBJECT?1:a.type==CKEDITOR.STYLE_BLOCK?2:3),g[h]=a,i.push(a),k.push(a);i.sort(function(a,b){return a._.weight-b._.weight})}});c.ui.addRichCombo("Styles",{label:f.label,title:f.panelTitle,toolbar:"styles,10",allowedContent:k,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(j.contentsCss),multiSelect:!0,attributes:{"aria-label":f.panelTitle}},init:function(){var b,
a,c,d,e,g;e=0;for(g=i.length;e<g;e++)b=i[e],a=b._name,d=b.type,d!=c&&(this.startGroup(f["panelTitle"+d]),c=d),this.add(a,b.type==CKEDITOR.STYLE_OBJECT?a:b.buildPreview(),a);this.commit()},onClick:function(b){c.focus();c.fire("saveSnapshot");var b=g[b],a=c.elementPath();c[b.checkActive(a)?"removeStyle":"applyStyle"](b);c.fire("saveSnapshot")},onRender:function(){c.on("selectionChange",function(b){for(var a=this.getValue(),b=b.data.path.elements,c=0,d=b.length,e;c<d;c++){e=b[c];for(var f in g)if(g[f].checkElementRemovable(e,
!0)){f!=a&&this.setValue(f);return}}this.setValue("")},this)},onOpen:function(){var b=c.getSelection().getSelectedElement(),b=c.elementPath(b),a=[0,0,0,0];this.showAll();this.unmarkAll();for(var h in g){var d=g[h],e=d.type;e==CKEDITOR.STYLE_BLOCK&&!b.isContextFor(d.element)?this.hideItem(h):(d.checkActive(b)?this.mark(h):e==CKEDITOR.STYLE_OBJECT&&!d.checkApplicable(b)&&(this.hideItem(h),a[e]--),a[e]++)}a[CKEDITOR.STYLE_BLOCK]||this.hideGroup(f["panelTitle"+CKEDITOR.STYLE_BLOCK]);a[CKEDITOR.STYLE_INLINE]||
this.hideGroup(f["panelTitle"+CKEDITOR.STYLE_INLINE]);a[CKEDITOR.STYLE_OBJECT]||this.hideGroup(f["panelTitle"+CKEDITOR.STYLE_OBJECT])},reset:function(){g={};i=[]}})}})})();