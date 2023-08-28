"use strict";(self.webpackChunkcarbon_components_angular=self.webpackChunkcarbon_components_angular||[]).push([[3858],{"./node_modules/@carbon/utils-position/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _a,PLACEMENTS;__webpack_require__.d(__webpack_exports__,{FK:()=>position,ZP:()=>__WEBPACK_DEFAULT_EXPORT__}),function(PLACEMENTS){PLACEMENTS.LEFT="left",PLACEMENTS.RIGHT="right",PLACEMENTS.TOP="top",PLACEMENTS.BOTTOM="bottom"}(PLACEMENTS||(PLACEMENTS={}));var defaultPositions=((_a={})[PLACEMENTS.LEFT]=function(referenceOffset,target,referenceRect){return{top:referenceOffset.top-Math.round(target.offsetHeight/2)+Math.round(referenceRect.height/2),left:Math.round(referenceOffset.left-target.offsetWidth)}},_a[PLACEMENTS.RIGHT]=function(referenceOffset,target,referenceRect){return{top:referenceOffset.top-Math.round(target.offsetHeight/2)+Math.round(referenceRect.height/2),left:Math.round(referenceOffset.left+referenceRect.width)}},_a[PLACEMENTS.TOP]=function(referenceOffset,target,referenceRect){return{top:Math.round(referenceOffset.top-target.offsetHeight),left:referenceOffset.left-Math.round(target.offsetWidth/2)+Math.round(referenceRect.width/2)}},_a[PLACEMENTS.BOTTOM]=function(referenceOffset,target,referenceRect){return{top:Math.round(referenceOffset.top+referenceRect.height),left:referenceOffset.left-Math.round(target.offsetWidth/2)+Math.round(referenceRect.width/2)}},_a),windowRef="undefined"!=typeof window?window:{innerHeight:0,scrollY:0,innerWidth:0,scrollX:0},Position=function(){function Position(positions){void 0===positions&&(positions={}),this.positions=defaultPositions,this.positions=Object.assign({},defaultPositions,positions)}return Position.prototype.getRelativeOffset=function(target){for(var offsets={left:target.offsetLeft,top:target.offsetTop};target.offsetParent&&"static"===getComputedStyle(target.offsetParent).position;)offsets.left+=target.offsetLeft,offsets.top+=target.offsetTop,target=target.offsetParent;return offsets},Position.prototype.getAbsoluteOffset=function(target){for(var currentNode=target,margins={top:0,left:0};currentNode.offsetParent;){var computed=getComputedStyle(currentNode.offsetParent);"static"===computed.position&&computed.marginLeft&&computed.marginTop&&(parseInt(computed.marginTop,10)&&(margins.top+=parseInt(computed.marginTop,10)),parseInt(computed.marginLeft,10)&&(margins.left+=parseInt(computed.marginLeft,10))),currentNode=currentNode.offsetParent}var targetRect=target.getBoundingClientRect(),relativeRect=document.body.getBoundingClientRect();return{top:targetRect.top-relativeRect.top+margins.top,left:targetRect.left-relativeRect.left+margins.left}},Position.prototype.findRelative=function(reference,target,placement){var referenceOffset=this.getRelativeOffset(reference),referenceRect=reference.getBoundingClientRect();return this.calculatePosition(referenceOffset,referenceRect,target,placement)},Position.prototype.findAbsolute=function(reference,target,placement){var referenceOffset=this.getAbsoluteOffset(reference),referenceRect=reference.getBoundingClientRect();return this.calculatePosition(referenceOffset,referenceRect,target,placement)},Position.prototype.findPosition=function(reference,target,placement,offsetFunction){void 0===offsetFunction&&(offsetFunction=this.getAbsoluteOffset.bind(this));var referenceOffset=offsetFunction(reference),referenceRect=reference.getBoundingClientRect();return this.calculatePosition(referenceOffset,referenceRect,target,placement)},Position.prototype.findPositionAt=function(offset,target,placement){return this.calculatePosition(offset,{top:0,left:0,height:0,width:0},target,placement)},Position.prototype.getPlacementBox=function(target,position){var targetBottom=target.offsetHeight+position.top,targetRight=target.offsetWidth+position.left;return{top:position.top,bottom:targetBottom,left:position.left,right:targetRight}},Position.prototype.addOffset=function(position,top,left){return void 0===top&&(top=0),void 0===left&&(left=0),Object.assign({},position,{top:position.top+top,left:position.left+left})},Position.prototype.setElement=function(element,position){element.style.top=position.top+"px",element.style.left=position.left+"px"},Position.prototype.findBestPlacement=function(reference,target,placements,containerFunction,positionFunction){var _this=this;void 0===containerFunction&&(containerFunction=this.defaultContainerFunction.bind(this)),void 0===positionFunction&&(positionFunction=this.findPosition.bind(this));var weightedPlacements=placements.map((function(placement){var pos=positionFunction(reference,target,placement),box=_this.getPlacementBox(target,pos),hiddenHeight=0,hiddenWidth=0,container=containerFunction();box.top<container.top?hiddenHeight=container.top-box.top:box.bottom>container.height&&(hiddenHeight=box.bottom-container.height),box.left<container.left?hiddenWidth=container.left-box.left:box.right>container.width&&(hiddenWidth=box.right-container.width),hiddenHeight&&!hiddenWidth?hiddenWidth=1:hiddenWidth&&!hiddenHeight&&(hiddenHeight=1);var area=target.offsetHeight*target.offsetWidth;return{placement,weight:(area-hiddenHeight*hiddenWidth)/area}}));return weightedPlacements.sort((function(a,b){return b.weight-a.weight})),weightedPlacements[0].placement},Position.prototype.findBestPlacementAt=function(offset,target,placements,containerFunction){var _this=this;void 0===containerFunction&&(containerFunction=this.defaultContainerFunction.bind(this));return this.findBestPlacement(null,target,placements,containerFunction,(function(_,target,placement){return _this.findPositionAt(offset,target,placement)}))},Position.prototype.defaultContainerFunction=function(){return{top:0,left:0,height:windowRef.innerHeight,width:windowRef.innerWidth}},Position.prototype.calculatePosition=function(referenceOffset,referenceRect,target,placement){return this.positions[placement]?this.positions[placement](referenceOffset,target,referenceRect):(console.error("No function found for placement, defaulting to 0,0"),{left:0,top:0})},Position}(),position=new Position;const __WEBPACK_DEFAULT_EXPORT__=Position},"./src/code-snippet/code-snippet.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Inline:()=>Inline,Multi:()=>Multi,Skeleton:()=>Skeleton,default:()=>code_snippet_stories});var SnippetType,dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),i18n=__webpack_require__("./src/i18n/index.ts"),utils=__webpack_require__("./src/utils/index.ts"),src_button=__webpack_require__("./src/button/index.ts");!function(SnippetType){SnippetType.single="single",SnippetType.multi="multi",SnippetType.inline="inline"}(SnippetType||(SnippetType={}));let CodeSnippet=class CodeSnippet extends src_button.HL{constructor(i18n,eventService){super(),this.i18n=i18n,this.eventService=eventService,this.rowHeightInPixel=16,this.display=SnippetType.single,this.translations=this.i18n.get().CODE_SNIPPET,this.hideCopyButton=!1,this.disabled=!1,this.maxCollapsedNumberOfRows=15,this.minCollapsedNumberOfRows=3,this.maxExpandedNumberOfRows=0,this.minExpandedNumberOfRows=16,this.wrapText=!1,this.theme="dark",this.feedbackText=this.translations.COPIED,this.feedbackTimeout=2e3,this.expanded=!1,this.skeleton=!1,this.styles={},this.showFeedback=!1,this.animating=!1,this.hasExpandButton=null,this.isExpandable=!1,this.hasRightOverflow=!1,this.hasRight=!1,this.hasLeft=!1,this.dropShadow=!1}get snippetClass(){return this.display!==SnippetType.inline}get snippetSingleClass(){return this.display===SnippetType.single}get snippetMultiClass(){return this.display===SnippetType.multi}get snippetDisabledClass(){return"inline"!==this.display&&this.disabled}get snippetInlineLightClass(){return"light"===this.theme}handleScroll(){let ref;switch(this.display){case"multi":ref=this.codeContent.nativeElement;break;case"single":ref=this.codeContainer.nativeElement;break;default:return}if(ref){const{scrollWidth,clientWidth,scrollLeft}=ref,horizontalOverflow=scrollWidth>clientWidth;this.hasLeft=horizontalOverflow&&!!scrollLeft,this.hasRight=horizontalOverflow&&scrollLeft+clientWidth!==scrollWidth}}toggleSnippetExpansion(){this.expanded=!this.expanded,this.calculateContainerHeight()}onCopyButtonClicked(){this.disabled||window.navigator.clipboard.writeText(this.code.nativeElement.innerText||this.code.nativeElement.textContent).then((()=>{this.showFeedback=!0,this.animating=!0,setTimeout((()=>{this.showFeedback=!1,this.animating=!1}),this.feedbackTimeout)}))}ngOnInit(){this.calculateContainerHeight(),window&&this.eventService.on(window,"resize",(()=>{this.canExpand(),this.handleScroll()}))}ngAfterViewInit(){setTimeout((()=>{this.canExpand(),this.handleScroll()}))}calculateContainerHeight(){"multi"===this.display&&(this.styles={},this.expanded?(this.maxExpandedNumberOfRows>0&&(this.styles["max-height"]=this.maxExpandedNumberOfRows*this.rowHeightInPixel+"px"),this.minExpandedNumberOfRows>0&&(this.styles["min-height"]=this.minExpandedNumberOfRows*this.rowHeightInPixel+"px")):(this.maxCollapsedNumberOfRows>0&&(this.styles["max-height"]=this.maxCollapsedNumberOfRows*this.rowHeightInPixel+"px"),this.minCollapsedNumberOfRows>0&&(this.styles["min-height"]=this.minCollapsedNumberOfRows*this.rowHeightInPixel+"px")))}canExpand(){if("multi"===this.display){const height=this.codeContent.nativeElement.getBoundingClientRect().height;this.maxCollapsedNumberOfRows>0&&(this.maxExpandedNumberOfRows<=0||this.maxExpandedNumberOfRows>this.maxCollapsedNumberOfRows)&&height>this.maxCollapsedNumberOfRows*this.rowHeightInPixel?this.isExpandable=!0:this.isExpandable=!1,this.expanded&&this.minExpandedNumberOfRows>0&&height<=this.minExpandedNumberOfRows*this.rowHeightInPixel&&(this.isExpandable=!1)}}};CodeSnippet.ctorParameters=()=>[{type:i18n.oc},{type:utils.PO}],CodeSnippet.propDecorators={snippetClass:[{type:core.HostBinding,args:["class.cds--snippet"]}],snippetSingleClass:[{type:core.HostBinding,args:["class.cds--snippet--single"]}],snippetMultiClass:[{type:core.HostBinding,args:["class.cds--snippet--multi"]}],snippetDisabledClass:[{type:core.HostBinding,args:["class.cds--snippet--disabled"]}],snippetInlineLightClass:[{type:core.HostBinding,args:["class.cds--snippet--light"]}],display:[{type:core.Input}],translations:[{type:core.Input}],copyButtonDescription:[{type:core.Input}],hideCopyButton:[{type:core.Input}],disabled:[{type:core.Input}],maxCollapsedNumberOfRows:[{type:core.Input}],minCollapsedNumberOfRows:[{type:core.Input}],maxExpandedNumberOfRows:[{type:core.Input}],minExpandedNumberOfRows:[{type:core.Input}],wrapText:[{type:core.HostBinding,args:["class.cds--snippet--wraptext"]},{type:core.Input}],theme:[{type:core.Input}],feedbackText:[{type:core.Input}],feedbackTimeout:[{type:core.Input}],expanded:[{type:core.HostBinding,args:["class.cds--snippet--expand"]},{type:core.Input}],skeleton:[{type:core.HostBinding,args:["class.cds--skeleton"]},{type:core.Input}],code:[{type:core.ViewChild,args:["code"]}],codeContent:[{type:core.ViewChild,args:["codeContent"]}],codeContainer:[{type:core.ViewChild,args:["codeContainer"]}]},CodeSnippet=(0,tslib_es6.gn)([(0,core.Component)({selector:"cds-code-snippet, ibm-code-snippet",template:'\n\t\t<ng-container *ngIf="display === \'inline\'; else notInline">\n\t\t\t<ng-container *ngIf="!hideCopyButton; else noBtnInline">\n\t\t\t\t<ng-container *ngTemplateOutlet="buttonTemplate"></ng-container>\n\t\t\t</ng-container>\n\t\t\t<ng-template #noBtnInline>\n\t\t\t\t<span\n\t\t\t\t\tclass="cds--snippet cds--snippet--inline cds--snippet--no-copy"\n\t\t\t\t\t[ngClass]="{\n\t\t\t\t\t\t\'cds--snippet--light\': theme === \'light\'\n\t\t\t\t\t}">\n\t\t\t\t\t<ng-container *ngTemplateOutlet="codeTemplate"></ng-container>\n\t\t\t\t</span>\n\t\t\t</ng-template>\n\t\t</ng-container>\n\n\t\t<ng-template #notInline>\n\t\t\t<div\n\t\t\t\t#codeContainer\n\t\t\t\tclass="cds--snippet-container"\n\t\t\t\t[attr.aria-label]="translations.CODE_SNIPPET_TEXT"\n\t\t\t\t[attr.tabindex]="display === \'single\' && !disabled ? \'0\' : null"\n\t\t\t\t[attr.role]="display===\'single\' ? \'textarea\' : null"\n\t\t\t\t[ngStyle]="styles"\n\t\t\t\t(scroll)="(display === \'single\' ? handleScroll() : null)">\n\t\t\t\t<ng-container *ngIf="skeleton">\n\t\t\t\t\t<span *ngIf="display === \'single\'; else multiSkeleton"></span>\n\t\t\t\t\t<ng-template #multiSkeleton>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t<span></span>\n\t\t\t\t\t</ng-template>\n\t\t\t\t</ng-container>\n\t\t\t\t<pre\n\t\t\t\t\t#codeContent\n\t\t\t\t\t*ngIf="!skeleton"\n\t\t\t\t\t(scroll)="(display === \'multi\' ? handleScroll() : null)"><ng-container *ngTemplateOutlet="codeTemplate"></ng-container></pre>\n\t\t\t</div>\n\t\t\t<div *ngIf="hasLeft" class="cds--snippet__overflow-indicator--left"></div>\n\t\t\t<div *ngIf="hasRight" class="cds--snippet__overflow-indicator--right"></div>\n\t\t\t<ng-container *ngTemplateOutlet="buttonTemplate"></ng-container>\n\t\t\t<button\n\t\t\t\t*ngIf="isExpandable"\n\t\t\t\tclass="cds--btn cds--btn--ghost cds--btn--sm cds--snippet-btn--expand"\n\t\t\t\t(click)="toggleSnippetExpansion()"\n\t\t\t\ttype="button">\n\t\t\t\t<span class="cds--snippet-btn--text">{{expanded ? translations.SHOW_LESS : translations.SHOW_MORE}}</span>\n\t\t\t\t<svg cdsIcon="chevron--down" size="16" class="cds--icon-chevron--down" [attr.aria-label]="translations.SHOW_MORE_ICON"></svg>\n\t\t\t</button>\n\t\t</ng-template>\n\n\t\t<ng-template #buttonTemplate>\n\t\t\t<cds-icon-button\n\t\t\t\t*ngIf="!skeleton"\n\t\t\t\t[description]="showFeedback ? feedbackText : copyButtonDescription"\n\t\t\t\t[align]="align"\n\t\t\t\t[dropShadow]="dropShadow"\n\t\t\t\t[caret]="caret"\n\t\t\t\t[highContrast]="highContrast"\n\t\t\t\t[isOpen]="isOpen"\n\t\t\t\t[enterDelayMs]="enterDelayMs"\n\t\t\t\t[leaveDelayMs]="leaveDelayMs"\n\t\t\t\ttype="button"\n\t\t\t\tkind="primary"\n\t\t\t\tsize="md"\n\t\t\t\t(click)="onCopyButtonClicked($event)"\n\t\t\t\t[buttonNgClass]="{\n\t\t\t\t\t\'cds--snippet--light\': theme === \'light\',\n\t\t\t\t\t\'cds--snippet--inline\': display === \'inline\',\n\t\t\t\t\t\'cds--btn--icon-only\': display !== \'inline\',\n\t\t\t\t\t\'cds--copy-btn\': display !== \'inline\',\n\t\t\t\t\t\'cds--copy-btn--animating\': animating,\n\t\t\t\t\t\'cds--copy-btn--fade-in\': showFeedback,\n\t\t\t\t\t\'cds--copy-btn--fade-out\': !showFeedback && animating,\n\t\t\t\t\t\'cds--snippet cds--copy\': true\n\t\t\t\t}"\n\t\t\t\t[buttonAttributes]="{\n\t\t\t\t\t\'aria-label\': translations.COPY_CODE,\n\t\t\t\t\t\'aria-live\': \'polite\',\n\t\t\t\t\t\'tabindex\': \'0\'\n\t\t\t\t}">\n\t\t\t\t<ng-container *ngIf="display === \'inline\'">\n\t\t\t\t\t<ng-container *ngTemplateOutlet="codeTemplate"></ng-container>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container *ngIf="display !== \'inline\'">\n\t\t\t\t\t<svg cdsIcon="copy" size="16" class="cds--snippet__icon"></svg>\n\t\t\t\t</ng-container>\n\t\t\t</cds-icon-button>\n\t\t</ng-template>\n\n\t\t<ng-template #codeTemplate>\n\t\t\t<code #code><ng-content></ng-content></code>\n\t\t</ng-template>\n\t'})],CodeSnippet);var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),icon=__webpack_require__("./src/icon/index.ts");let CodeSnippetModule=class CodeSnippetModule{};CodeSnippetModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[CodeSnippet],exports:[CodeSnippet],imports:[common.CommonModule,src_button.hJ,i18n.LU,utils.As,icon.QX]})],CodeSnippetModule);const code_snippet_stories={title:"Components/Code Snippet",decorators:[(0,dist.moduleMetadata)({imports:[CodeSnippetModule]})],argTypes:{code:{control:!1},display:{control:!1},feedbackText:{control:!1},maxCollapsedNumberOfRows:{controls:!1},maxExpandedNumberOfRows:{controls:!1},minCollapsedNumberOfRows:{controls:!1},minExpandedNumberOfRows:{controls:!1},expanded:{control:!1}},component:CodeSnippet},Basic=(args=>({props:args,template:'\n\t\t<cds-code-snippet display="single">{{code}}</cds-code-snippet>\n\t'})).bind({});Basic.args={code:"import { UIShellModule } from 'carbon-components-angular'; // Single line of code"};const Inline=(args=>({props:args,template:'\n\t\tHere is some <cds-code-snippet display="inline" [theme]="theme">{{code}}</cds-code-snippet> for you.\n\t'})).bind({});Inline.args={code:"<inline code>"};const Multi=(args=>({props:args,template:'\n\t\t<cds-code-snippet display="multi">{{code}}</cds-code-snippet>\n\t'})).bind({});Multi.args={code:'{\n\t\t"name": "carbon-components-angular",\n\t\t"version": "0.0.0",\n\t\t"description": "Next generation components",\n\t\t"main": "index.js",\n\t\t"scripts": {\n\t\t\t"build": "bash scripts/build.sh",\n\t\t\t"storybook": "start-storybook -s .storybook/public -p 6006",\n\t\t\t"docs:build": "typedoc",\n\t\t\t"lint": "tslint \'src/**/*.ts\'",\n\t\t\t"lint:fix": "tslint --fix \'src/**/*.ts\'",\n\t\t\t"test": "ng test --no-watch",\n\t\t\t"test:watch": "ng test --watch",\n\t\t\t"build-storybook": "build-storybook -c .storybook -s .storybook/public -o dist/docs/storybook",\n\t\t\t"semantic-release": "semantic-release",\n\t\t\t"commit": "git-cz",\n\t\t\t"ng": "ng",\n\t\t\t"ng:build": "node --max_old_space_size=4096 ./node_modules/@angular/cli/bin/ng build"\n\t\t},\n\t\t"repository": {\n\t\t\t"type": "git",\n\t\t\t"url": "git@github.com:IBM/carbon-components-angular.git"\n\t\t},\n\t\t"license": "Apache-2.0",\n\t\t"author": "IBM",\n\t\t"peerDependencies": {\n\t\t\t"@angular/common": "^7.0.0 || ^8.0.0 || ^9.0.0 || ^10.0.0 || ^11.0.0 || ^12.0.0 || ^13.0.0",\n\t\t\t"@angular/core": "^7.0.0 || ^8.0.0 || ^9.0.0 || ^10.0.0 || ^11.0.0 || ^12.0.0 || ^13.0",\n\t\t\t"@angular/forms": "^7.0.0 || ^8.0.0 || ^9.0.0 || ^10.0.0 || ^11.0.0 || ^12.0.0 || ^13.0",\n\t\t\t"rxjs": "^6.0.0",\n\t\t\t"zone.js": "^0.8.26 || ^0.9.0 || ^0.10.0",\n\t\t\t"@carbon/styles": "^1.2.0"\n\t\t}\n\t}'},Multi.argTypes={maxCollapsedNumberOfRows:{controls:!0},maxExpandedNumberOfRows:{controls:!0},minCollapsedNumberOfRows:{controls:!0},minExpandedNumberOfRows:{controls:!0},expanded:{control:!0}};const Skeleton=(args=>({props:args,template:'\n\t\t<cds-code-snippet display="single" skeleton="true"></cds-code-snippet>\n\t\t<br>\n\t\t<cds-code-snippet display="multi" skeleton="true"></cds-code-snippet>\n\t'})).bind({})},"./src/icon/icon.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>IconDirective});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_icon_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");let IconDirective=class IconDirective{constructor(elementRef,iconService){this.elementRef=elementRef,this.iconService=iconService,this.cdsIcon="",this.size="16",this.title="",this.ariaLabel="",this.ariaLabelledBy="",this.ariaHidden="",this.isFocusable=!1}set ibmIcon(iconName){this.cdsIcon=iconName}renderIcon(iconName){const root=this.elementRef.nativeElement;let icon;try{icon=this.iconService.get(iconName,this.size.toString())}catch(error){return void console.warn(error)}const domParser=new DOMParser,rawSVG=icon.svg,svgElement=domParser.parseFromString(rawSVG,"image/svg+xml").documentElement;let node="SVG"!==root.tagName.toUpperCase()?svgElement:svgElement.firstChild;for(root.innerHTML="";node;)root.appendChild(root.ownerDocument.importNode(node,!0)),node=node.nextSibling;const svg="SVG"!==root.tagName.toUpperCase()?svgElement:root;svg.setAttribute("xmlns","http://www.w3.org/2000/svg");const attributes=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_1__.u9)({width:icon.attrs.width,height:icon.attrs.height,viewBox:icon.attrs.viewBox,title:this.title,"aria-label":this.ariaLabel,"aria-labelledby":this.ariaLabelledBy,"aria-hidden":this.ariaHidden,focusable:this.isFocusable.toString()}),attrKeys=Object.keys(attributes);for(let i=0;i<attrKeys.length;i++){const key=attrKeys[i],value=attributes[key];"title"!==key&&(value&&svg.setAttribute(key,value))}if(attributes.title){const title=document.createElement("title");title.textContent=attributes.title,IconDirective.titleIdCounter++,title.setAttribute("id",`${icon.name}-title-${IconDirective.titleIdCounter}`),svg.insertBefore(title,svg.firstElementChild),svg.setAttribute("aria-labelledby",`${icon.name}-title-${IconDirective.titleIdCounter}`)}}ngAfterViewInit(){this.renderIcon(this.cdsIcon)}ngOnChanges({cdsIcon}){cdsIcon&&!cdsIcon.isFirstChange()&&this.renderIcon(this.cdsIcon)}};IconDirective.titleIdCounter=0,IconDirective.ctorParameters=()=>[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef},{type:_icon_service__WEBPACK_IMPORTED_MODULE_0__.C6}],IconDirective.propDecorators={ibmIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],cdsIcon:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],title:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabel:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaLabelledBy:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],ariaHidden:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],isFocusable:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}]},IconDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({selector:"[cdsIcon], [ibmIcon]"})],IconDirective)},"./src/icon/icon.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{QX:()=>IconModule});var tslib__WEBPACK_IMPORTED_MODULE_53__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_52__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_54__=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),_icon_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/icon/icon.directive.ts"),_icon_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/icon/icon.service.ts"),_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@carbon/icons/es/add/16.js"),_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@carbon/icons/es/add/20.js"),_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@carbon/icons/es/bee/16.js"),_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@carbon/icons/es/bee/20.js"),_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@carbon/icons/es/calendar/16.js"),_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/16.js"),_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@carbon/icons/es/carbon/20.js"),_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@carbon/icons/es/caret--down/16.js"),_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@carbon/icons/es/caret--left/16.js"),_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@carbon/icons/es/caret--right/16.js"),_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@carbon/icons/es/caret--up/16.js"),_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark/16.js"),_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/16.js"),_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--filled/20.js"),_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@carbon/icons/es/checkmark--outline/16.js"),_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--down/16.js"),_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@carbon/icons/es/chevron--right/16.js"),_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@carbon/icons/es/circle-dash/16.js"),_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/@carbon/icons/es/close/16.js"),_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@carbon/icons/es/close/20.js"),_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/@carbon/icons/es/copy/16.js"),_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./node_modules/@carbon/icons/es/copy/20.js"),_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/16.js"),_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__("./node_modules/@carbon/icons/es/data--2/20.js"),_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__("./node_modules/@carbon/icons/es/document/16.js"),_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__("./node_modules/@carbon/icons/es/document/20.js"),_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__("./node_modules/@carbon/icons/es/download/16.js"),_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/16.js"),_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__=__webpack_require__("./node_modules/@carbon/icons/es/error--filled/20.js"),_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__=__webpack_require__("./node_modules/@carbon/icons/es/fade/16.js"),_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__=__webpack_require__("./node_modules/@carbon/icons/es/fade/20.js"),_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_33__=__webpack_require__("./node_modules/@carbon/icons/es/incomplete/16.js"),_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_34__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/16.js"),_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_35__=__webpack_require__("./node_modules/@carbon/icons/es/information--filled/20.js"),_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_36__=__webpack_require__("./node_modules/@carbon/icons/es/information--square--filled/20.js"),_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_37__=__webpack_require__("./node_modules/@carbon/icons/es/menu/16.js"),_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_38__=__webpack_require__("./node_modules/@carbon/icons/es/menu/20.js"),_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_39__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--vertical/16.js"),_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_40__=__webpack_require__("./node_modules/@carbon/icons/es/overflow-menu--horizontal/16.js"),_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_41__=__webpack_require__("./node_modules/@carbon/icons/es/save/16.js"),_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_42__=__webpack_require__("./node_modules/@carbon/icons/es/search/16.js"),_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_43__=__webpack_require__("./node_modules/@carbon/icons/es/settings/16.js"),_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_44__=__webpack_require__("./node_modules/@carbon/icons/es/settings--adjust/16.js"),_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_45__=__webpack_require__("./node_modules/@carbon/icons/es/subtract/16.js"),_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_46__=__webpack_require__("./node_modules/@carbon/icons/es/trash-can/16.js"),_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_47__=__webpack_require__("./node_modules/@carbon/icons/es/warning/16.js"),_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_48__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/16.js"),_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_49__=__webpack_require__("./node_modules/@carbon/icons/es/warning--filled/20.js"),_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_50__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/16.js"),_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_51__=__webpack_require__("./node_modules/@carbon/icons/es/warning--alt--filled/20.js");const ICON_SERVICE_PROVIDER={provide:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6,deps:[[new _angular_core__WEBPACK_IMPORTED_MODULE_52__.Optional,new _angular_core__WEBPACK_IMPORTED_MODULE_52__.SkipSelf,_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6]],useFactory:function ICON_SERVICE_PROVIDER_FACTORY(parentService){return parentService||new _icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}};let IconModule=class IconModule{constructor(iconService){this.iconService=iconService,iconService.registerAll([_carbon_icons_es_add_16__WEBPACK_IMPORTED_MODULE_2__.Z,_carbon_icons_es_add_20__WEBPACK_IMPORTED_MODULE_3__.Z,_carbon_icons_es_bee_16__WEBPACK_IMPORTED_MODULE_4__.Z,_carbon_icons_es_bee_20__WEBPACK_IMPORTED_MODULE_5__.Z,_carbon_icons_es_calendar_16__WEBPACK_IMPORTED_MODULE_6__.Z,_carbon_icons_es_carbon_16__WEBPACK_IMPORTED_MODULE_7__.Z,_carbon_icons_es_carbon_20__WEBPACK_IMPORTED_MODULE_8__.Z,_carbon_icons_es_caret_down_16__WEBPACK_IMPORTED_MODULE_9__.Z,_carbon_icons_es_caret_left_16__WEBPACK_IMPORTED_MODULE_10__.Z,_carbon_icons_es_caret_right_16__WEBPACK_IMPORTED_MODULE_11__.Z,_carbon_icons_es_caret_up_16__WEBPACK_IMPORTED_MODULE_12__.Z,_carbon_icons_es_checkmark_16__WEBPACK_IMPORTED_MODULE_13__.Z,_carbon_icons_es_checkmark_filled_16__WEBPACK_IMPORTED_MODULE_14__.Z,_carbon_icons_es_checkmark_filled_20__WEBPACK_IMPORTED_MODULE_15__.Z,_carbon_icons_es_checkmark_outline_16__WEBPACK_IMPORTED_MODULE_16__.Z,_carbon_icons_es_chevron_down_16__WEBPACK_IMPORTED_MODULE_17__.Z,_carbon_icons_es_chevron_right_16__WEBPACK_IMPORTED_MODULE_18__.Z,_carbon_icons_es_circle_dash_16__WEBPACK_IMPORTED_MODULE_19__.Z,_carbon_icons_es_close_16__WEBPACK_IMPORTED_MODULE_20__.Z,_carbon_icons_es_close_20__WEBPACK_IMPORTED_MODULE_21__.Z,_carbon_icons_es_copy_16__WEBPACK_IMPORTED_MODULE_22__.Z,_carbon_icons_es_copy_20__WEBPACK_IMPORTED_MODULE_23__.Z,_carbon_icons_es_data_2_16__WEBPACK_IMPORTED_MODULE_24__.Z,_carbon_icons_es_data_2_20__WEBPACK_IMPORTED_MODULE_25__.Z,_carbon_icons_es_document_16__WEBPACK_IMPORTED_MODULE_26__.Z,_carbon_icons_es_document_20__WEBPACK_IMPORTED_MODULE_27__.Z,_carbon_icons_es_download_16__WEBPACK_IMPORTED_MODULE_28__.Z,_carbon_icons_es_error_filled_16__WEBPACK_IMPORTED_MODULE_29__.Z,_carbon_icons_es_error_filled_20__WEBPACK_IMPORTED_MODULE_30__.Z,_carbon_icons_es_fade_16__WEBPACK_IMPORTED_MODULE_31__.Z,_carbon_icons_es_fade_20__WEBPACK_IMPORTED_MODULE_32__.Z,_carbon_icons_es_incomplete_16__WEBPACK_IMPORTED_MODULE_33__.Z,_carbon_icons_es_information_filled_16__WEBPACK_IMPORTED_MODULE_34__.Z,_carbon_icons_es_information_filled_20__WEBPACK_IMPORTED_MODULE_35__.Z,_carbon_icons_es_information_square_filled_20__WEBPACK_IMPORTED_MODULE_36__.Z,_carbon_icons_es_menu_16__WEBPACK_IMPORTED_MODULE_37__.Z,_carbon_icons_es_menu_20__WEBPACK_IMPORTED_MODULE_38__.Z,_carbon_icons_es_overflow_menu_vertical_16__WEBPACK_IMPORTED_MODULE_39__.Z,_carbon_icons_es_overflow_menu_horizontal_16__WEBPACK_IMPORTED_MODULE_40__.Z,_carbon_icons_es_save_16__WEBPACK_IMPORTED_MODULE_41__.Z,_carbon_icons_es_search_16__WEBPACK_IMPORTED_MODULE_42__.Z,_carbon_icons_es_settings_16__WEBPACK_IMPORTED_MODULE_43__.Z,_carbon_icons_es_settings_adjust_16__WEBPACK_IMPORTED_MODULE_44__.Z,_carbon_icons_es_subtract_16__WEBPACK_IMPORTED_MODULE_45__.Z,_carbon_icons_es_trash_can_16__WEBPACK_IMPORTED_MODULE_46__.Z,_carbon_icons_es_warning_16__WEBPACK_IMPORTED_MODULE_47__.Z,_carbon_icons_es_warning_filled_16__WEBPACK_IMPORTED_MODULE_48__.Z,_carbon_icons_es_warning_filled_20__WEBPACK_IMPORTED_MODULE_49__.Z,_carbon_icons_es_warning_alt_filled_16__WEBPACK_IMPORTED_MODULE_50__.Z,_carbon_icons_es_warning_alt_filled_20__WEBPACK_IMPORTED_MODULE_51__.Z])}};IconModule.ctorParameters=()=>[{type:_icon_service__WEBPACK_IMPORTED_MODULE_1__.C6}],IconModule=(0,tslib__WEBPACK_IMPORTED_MODULE_53__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_52__.NgModule)({declarations:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],exports:[_icon_directive__WEBPACK_IMPORTED_MODULE_0__.a],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_54__.CommonModule],providers:[ICON_SERVICE_PROVIDER]})],IconModule)},"./src/icon/icon.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C6:()=>IconService});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@carbon/icon-helpers/es/index.js");class IconNameNotFoundError extends Error{constructor(name){super(`Icon ${name} not found`)}}class IconSizeNotFoundError extends Error{constructor(size,name){super("Size ${size} for ${name} not found")}}class IconMemoryCache extends class IconCache{}{constructor(){super(...arguments),this.iconMap=new Map}get(name,size){if(!this.iconMap.has(name))throw new IconNameNotFoundError(name);const sizeMap=this.iconMap.get(name);if(!sizeMap.has(size))throw new IconSizeNotFoundError(size,name);return sizeMap.get(size)}set(name,size,descriptor){this.iconMap.has(name)||this.iconMap.set(name,new Map);this.iconMap.get(name).set(size,descriptor)}}let IconService=class IconService{constructor(){this.iconCache=new IconMemoryCache}registerAll(descriptors){descriptors.forEach((icon=>this.register(icon)))}register(descriptor){const{name}=descriptor;this.registerAs(name,descriptor)}registerAs(name,descriptor){const{size}=descriptor;this.iconCache.set(name,size.toString(),descriptor)}get(name,size){try{const icon=this.iconCache.get(name,size.toString());return icon.svg||(icon.svg=(0,_carbon_icon_helpers__WEBPACK_IMPORTED_MODULE_0__.BB)(icon)),icon}catch(e){throw e}}configure(options){this.iconCache=options.cache}};IconService=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()],IconService)},"./src/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ar:()=>icon_directive.a,QX:()=>icon_module.QX,C6:()=>icon_service.C6});var icon_directive=__webpack_require__("./src/icon/icon.directive.ts"),icon_module=__webpack_require__("./src/icon/icon.module.ts"),icon_service=__webpack_require__("./src/icon/icon.service.ts")}}]);