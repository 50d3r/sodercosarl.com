var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* begin Page */

/* Created by Artisteer v3.0.0.38499 */



(function() {
    // fix ie blinking
    var m = document.uniqueID && document.compatMode && !window.XMLHttpRequest && document.execCommand;
    try { if (!!m) { m('BackgroundImageCache', false, true); } }
    catch (oh) { };
    // css helper
    var u = navigator.userAgent.toLowerCase();
    var is = function(t) { return (u.indexOf(t) != -1) };
    jQuery('html').addClass([(!(/opera|webtv/i.test(u)) && /msie (\d)/.test(u)) ? ('ie ie' + RegExp.$1)
    : is('firefox/2') ? 'gecko firefox2'
    : is('firefox/3') ? 'gecko firefox3'
    : is('gecko/') ? 'gecko'
    : is('chrome/') ? 'chrome'
    : is('opera/9') ? 'opera opera9' : /opera (\d)/.test(u) ? 'opera opera' + RegExp.$1
    : is('konqueror') ? 'konqueror'
    : is('applewebkit/') ? 'webkit safari'
    : is('mozilla/') ? 'gecko' : '',
    (is('x11') || is('linux')) ? ' linux'
    : is('mac') ? ' mac'
    : is('win') ? ' win' : ''
    ].join(' '));
})();

var _artStyleUrlCached = null;
function artGetStyleUrl() {
    if (null == _artStyleUrlCached) {
        var ns;
        _artStyleUrlCached = '';
        ns = jQuery('link');
        for (var i = 0; i < ns.length; i++) {
            var l = ns[i].href;
            if (l && /style\.ie6\.css(\?.*)?$/.test(l))
                return _artStyleUrlCached = l.replace(/style\.ie6\.css(\?.*)?$/, '');
        }
        ns = jQuery('style');
        for (var i = 0; i < ns.length; i++) {
            var matches = new RegExp('import\\s+"([^"]+\\/)style\\.ie6\\.css"').exec(ns[i].html());
            if (null != matches && matches.length > 0)
                return _artStyleUrlCached = matches[1];
        }
    }
    return _artStyleUrlCached;
}

function artFixPNG(element) {
    if (jQuery.browser.msie && parseInt(jQuery.browser.version) < 7) {
		var src;
		if (element.tagName == 'IMG') {
			if (/\.png$/.test(element.src)) {
				src = element.src;
				element.src = artGetStyleUrl() + 'images/spacer.gif';
			}
		}
		else {
			src = element.currentStyle.backgroundImage.match(/url\("(.+\.png)"\)/i);
			if (src) {
				src = src[1];
				element.runtimeStyle.backgroundImage = 'none';
			}
		}
		if (src) element.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "')";
	}
}

jQuery(function() {
    jQuery.each(jQuery('ul.art-hmenu>li:not(.art-hmenu-li-separator),ul.art-vmenu>li:not(.art-vmenu-separator)'), function (i, val) {
        var l = jQuery(val); var s = l.children('span'); if (s.length == 0) return;
        var t = l.find('span.t').last(); l.children('a').append(t.html(t.text()));
        s.remove();
    });
});/* end Page */

/* begin Box, Sheet */

function artFluidSheetComputedWidth(percent, minval, maxval) {
    percent = parseInt(percent);
    var val = document.body.clientWidth / 100 * percent;
    return val < minval ? minval + 'px' : val > maxval ? maxval + 'px' : percent + '%';
}/* end Box, Sheet */

/* begin Flash */
jQuery(function () {
    swfobject.switchOffAutoHideShow();
    swfobject.registerObject("art-flash-object", "9.0.0", "expressInstall.swf");
});



/* end Flash */

/* begin Menu */
jQuery(function() {
    jQuery.each(jQuery('ul.art-hmenu>li:not(:last-child)'), function(i, val) {
        jQuery('<li class="art-hmenu-li-separator"><span class="art-hmenu-separator"> </span></li>').insertAfter(val);
    });
    if (!jQuery.browser.msie || parseInt(jQuery.browser.version) > 6) return;
    jQuery.each(jQuery('ul.art-hmenu li'), function(i, val) {
        val.j = jQuery(val);
        val.UL = val.j.children('ul:first');
        if (val.UL.length == 0) return;
        val.A = val.j.children('a:first');
        this.onmouseenter = function() {
            this.j.addClass('art-hmenuhover');
            this.UL.addClass('art-hmenuhoverUL');
            this.A.addClass('art-hmenuhoverA');
        };
        this.onmouseleave = function() {
            this.j.removeClass('art-hmenuhover');
            this.UL.removeClass('art-hmenuhoverUL');
            this.A.removeClass('art-hmenuhoverA');
        };

    });
});

/* end Menu */

/* begin Layout */
jQuery(function () {
    if (jQuery.browser.msie && parseInt(jQuery.browser.version) < 8) {
        var c = jQuery('div.art-content');
        if (c.length !== 1) return;
        var s = c.parent().children('.art-layout-cell:not(.art-content)');
        jQuery(window).bind('resize', function () {
            var w = 0;
            c.hide();
            s.each(function () { w += this.clientWidth; });
            c.w = c.parent().width(); c.css('width', c.w - w + 'px');
            c.show();
        })

        var r = jQuery('div.art-content-layout-row').each(function () {
            this.c = jQuery(this).children('.art-layout-cell');
        });

        jQuery(window).bind('resize', function () {
            r.each(function () {
                if (this.h == this.clientHeight) return;
                this.c.css('height', 'auto');
                this.h = this.clientHeight;
                this.c.css('height', this.h + 'px');
            });
        });
    }

    var g = jQuery('.art-layout-glare-image');
    jQuery(window).bind('resize', function () {
        g.each(function () {
            var i = jQuery(this);
            i.css('height', i.parents('.art-layout-cell').height() + 'px');
        });
    });

    jQuery(window).trigger('resize');
});/* end Layout */

/* begin VMenu */
jQuery(function() {
    jQuery('ul.art-vmenu li').not(':first').before('<li class="art-vsubmenu-separator"><span class="art-vsubmenu-separator-span"> </span></li>');
    jQuery('ul.art-vmenu > li.art-vsubmenu-separator').removeClass('art-vsubmenu-separator').addClass('art-vmenu-separator').children('span').removeClass('art-vsubmenu-separator-span').addClass('art-vmenu-separator-span');
    jQuery('ul.art-vmenu > li > ul > li.art-vsubmenu-separator:first-child').removeClass('art-vsubmenu-separator').addClass('art-vmenu-separator').addClass('art-vmenu-separator-first').children('span').removeClass('art-vsubmenu-separator-span').addClass('art-vmenu-separator-span');
});  /* end VMenu */

/* begin VMenuItem */
jQuery(function() {
    jQuery('ul.art-vmenu a').click(function () {
        var a = jQuery(this);
        a.parents('ul.art-vmenu').find("ul, a").removeClass('active');
        a.parent().children('ul').addClass('active');
        a.parents('ul.art-vmenu ul').addClass('active');
        a.parents('ul.art-vmenu li').children('a').addClass('active');
    });
});
/* end VMenuItem */

/* begin Button */
function artButtonSetup(className) {
    jQuery.each(jQuery("a." + className + ", button." + className + ", input." + className), function (i, val) {
        var b = jQuery(val);
        if (!b.parent().hasClass('art-button-wrapper')) {
            if (b.is('input')) b.val(b.val().replace(/^\s*/, ''));
            if (!b.hasClass('art-button')) b.addClass('art-button');
            jQuery("<span class='art-button-wrapper'><span class='art-button-l'> </span><span class='art-button-r'> </span></span>").insertBefore(b).append(b);
            if (b.hasClass('active')) b.parent().addClass('active');
        }
        b.mouseover(function () { jQuery(this).parent().addClass("hover"); });
        b.mouseout(function () { var b = jQuery(this); b.parent().removeClass("hover"); if (!b.hasClass('active')) b.parent().removeClass('active'); });
        b.mousedown(function () { var b = jQuery(this); b.parent().removeClass("hover"); if (!b.hasClass('active')) b.parent().addClass('active'); });
        b.mouseup(function () { var b = jQuery(this); if (!b.hasClass('active')) b.parent().removeClass('active'); });
    });
}
jQuery(function() { artButtonSetup("art-button"); });

/* end Button */





}
/*
     FILE ARCHIVED ON 10:10:48 Nov 08, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:54:15 May 05, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.554
  exclusion.robots: 0.134
  exclusion.robots.policy: 0.125
  cdx.remote: 0.058
  esindex: 0.01
  LoadShardBlock: 356.344 (3)
  PetaboxLoader3.resolve: 221.023 (4)
  PetaboxLoader3.datanode: 301.152 (5)
  load_resource: 233.309 (2)
*/