(() => {
  'use strict';
  var _0x4adbgf = (645712 ^ 645715) + (771512 ^ 771517);
  const LS = 'ometv-hud-v2';
  _0x4adbgf = 656283 ^ 656283;
  var _0x3b_0x9aa = (651766 ^ 651764) + (505260 ^ 505256);
  const DEF = {
    "fx": !![],
    "bass": 0,
    '\u0070\u0072\u0065\u0073': 0,
    '\u0074\u0072\u0065\u0062\u006C\u0065': 0,
    '\u0067\u0061\u0069\u006E': 0,
    '\u0067\u0061\u0074\u0065': -(112924 ^ 112972),
    '\u006C\u0069\u006D\u0069\u0074': !![],
    "tab": "\u006C\u0069\u0076\u0065",
    "min": false,
    '\u0078': null,
    '\u0079': null
  };
  _0x3b_0x9aa = (635883 ^ 635881) + (582107 ^ 582111);
  let _0x356d4e;
  const cfg = {
    ...DEF
  };
  _0x356d4e = (298335 ^ 298333) + (964468 ^ 964467);
  try {
    Object['\u0061\u0073\u0073\u0069\u0067\u006E'](cfg, JSON['\u0070\u0061\u0072\u0073\u0065'](localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D'](LS) || "\u007B\u007D"));
  } catch (_) {}
  let _0xfc_0x986;
  const save = () => {
    try {
      localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D'](LS, JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](cfg));
    } catch (_) {}
  };
  _0xfc_0x986 = 541045 ^ 541040;
  var _0xed7f = (860246 ^ 860240) + (478657 ^ 478656);
  const PRESETS = {
    '\u0046\u006C\u0061\u0074': {
      "bass": 0,
      '\u0070\u0072\u0065\u0073': 0,
      '\u0074\u0072\u0065\u0062\u006C\u0065': 0,
      '\u0067\u0061\u0069\u006E': 0,
      '\u0067\u0061\u0074\u0065': -(311151 ^ 311103)
    },
    "Deep": {
      '\u0062\u0061\u0073\u0073': 9,
      '\u0070\u0072\u0065\u0073': 2,
      "treble": -(858924 ^ 858926),
      '\u0067\u0061\u0069\u006E': 0,
      '\u0067\u0061\u0074\u0065': -(393158 ^ 393210)
    },
    "Radio": {
      "bass": 5,
      '\u0070\u0072\u0065\u0073': 6,
      "treble": 2,
      '\u0067\u0061\u0069\u006E': 1,
      '\u0067\u0061\u0074\u0065': -(692726 ^ 692673)
    },
    '\u0043\u006C\u0065\u0061\u0072': {
      '\u0062\u0061\u0073\u0073': -(249405 ^ 249407),
      "pres": 5,
      "treble": 3,
      '\u0067\u0061\u0069\u006E': 0,
      "gate": -(994161 ^ 994125)
    }
  };
  _0xed7f = (984018 ^ 984020) + (187488 ^ 187489);
  const S = {
    '\u0063\u0074\u0078': null,
    '\u0063\u0068\u0061\u0069\u006E': null,
    '\u0072\u0065\u006D\u006F\u0074\u0065': null,
    "pcs": new Set(),
    '\u0070\u0072\u0065\u0076': {},
    "muted": false,
    '\u0064\u0065\u0076\u004C\u0061\u0062\u0065\u006C': '',
    "count": 0,
    "chatStart": 0,
    '\u006C\u0061\u0073\u0074\u0050\u0063': null,
    "fbuf": null
  };
  var _0x5f92d = (586319 ^ 586313) + (851468 ^ 851469);
  const AC = window['\u0041\u0075\u0064\u0069\u006F\u0043\u006F\u006E\u0074\u0065\u0078\u0074'] || window['\u0077\u0065\u0062\u006B\u0069\u0074\u0041\u0075\u0064\u0069\u006F\u0043\u006F\u006E\u0074\u0065\u0078\u0074'];
  _0x5f92d = '\u0070\u006D\u006B\u006E\u0070\u0070';
  const getCtx = () => S['\u0063\u0074\u0078'] ||= new AC({
    "latencyHint": "\u0069\u006E\u0074\u0065\u0072\u0061\u0063\u0074\u0069\u0076\u0065"
  });
  var _0x2651fa = (432113 ^ 432112) + (391179 ^ 391178);
  const resume = () => S['\u0063\u0074\u0078'] && S['\u0063\u0074\u0078']['\u0073\u0074\u0061\u0074\u0065'] === "\u0073\u0075\u0073\u0070\u0065\u006E\u0064\u0065\u0064" && S['\u0063\u0074\u0078']['\u0072\u0065\u0073\u0075\u006D\u0065']();
  _0x2651fa = (876552 ^ 876552) + (410930 ^ 410938);
  ["\u0063\u006C\u0069\u0063\u006B", 'keydown', "\u0070\u006F\u0069\u006E\u0074\u0065\u0072\u0064\u006F\u0077\u006E"]['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](e => addEventListener(e, resume, {
    '\u0070\u0061\u0073\u0073\u0069\u0076\u0065': !![]
  }));
  let _0x_0x8ca;
  const meterFor = an => ({
    "an": an,
    '\u0062\u0075\u0066': new Float32Array(an['\u0066\u0066\u0074\u0053\u0069\u007A\u0065']),
    "db": -(750259 ^ 750295),
    '\u0069\u006E\u0073\u0074': -(729713 ^ 729621),
    "peak": -(304216 ^ 304188),
    '\u0070\u0065\u0061\u006B\u0041\u0074': 0,
    "clipAt": 0
  });
  _0x_0x8ca = '\u0063\u0069\u006F\u006A\u006D\u0067';
  function _0x53db(m) {
    if (!m) return;
    m['\u0061\u006E']['\u0067\u0065\u0074\u0046\u006C\u006F\u0061\u0074\u0054\u0069\u006D\u0065\u0044\u006F\u006D\u0061\u0069\u006E\u0044\u0061\u0074\u0061'](m['\u0062\u0075\u0066']);
    let _0xd875a = 116049 ^ 116049,
      _0x50281f = 202179 ^ 202179;
    for (const v of m['\u0062\u0075\u0066']) {
      _0xd875a += v * v;
      let _0x4f631a;
      const a = Math['\u0061\u0062\u0073'](v);
      _0x4f631a = (569727 ^ 569719) + (906263 ^ 906257);
      if (a > _0x50281f) _0x50281f = a;
    }
    var _0x2_0xa6f = (459004 ^ 458996) + (630233 ^ 630237);
    const _0xc5f5f = Math['\u006D\u0061\u0078'](-(191449 ^ 191421), (654014 ^ 653994) * Math['\u006C\u006F\u0067\u0031\u0030'](Math['\u0073\u0071\u0072\u0074'](_0xd875a / m['\u0062\u0075\u0066']['\u006C\u0065\u006E\u0067\u0074\u0068']) || 1e-5));
    _0x2_0xa6f = (321582 ^ 321574) + (566009 ^ 566015);
    var _0x5021cf = (988789 ^ 988786) + (229726 ^ 229719);
    const _0xf04b8a = performance['\u006E\u006F\u0077']();
    _0x5021cf = '\u006D\u0065\u0062\u0061\u006D\u0070';
    m['\u0069\u006E\u0073\u0074'] = _0xc5f5f;
    m['\u0064\u0062'] = _0xc5f5f > m['\u0064\u0062'] ? _0xc5f5f : m['\u0064\u0062'] * 0.9 + _0xc5f5f * 0.1;
    if (_0xc5f5f > m['\u0070\u0065\u0061\u006B'] || _0xf04b8a - m['\u0070\u0065\u0061\u006B\u0041\u0074'] > (625823 ^ 624963)) {
      m['\u0070\u0065\u0061\u006B'] = _0xc5f5f;
      m['\u0070\u0065\u0061\u006B\u0041\u0074'] = _0xf04b8a;
    }
    if (_0x50281f >= 0.99) m['\u0063\u006C\u0069\u0070\u0041\u0074'] = _0xf04b8a;
  }
  function _0x876fa(stream) {
    var _0x9ddc = (396780 ^ 396780) + (893100 ^ 893093);
    const c = getCtx();
    _0x9ddc = '\u0063\u0067\u006B\u0067\u0068\u0062';
    resume();
    var _0xeecec = (724650 ^ 724653) + (772576 ^ 772578);
    const _0x1f24c = c['\u0063\u0072\u0065\u0061\u0074\u0065\u004D\u0065\u0064\u0069\u0061\u0053\u0074\u0072\u0065\u0061\u006D\u0053\u006F\u0075\u0072\u0063\u0065'](new MediaStream(stream['\u0067\u0065\u0074\u0041\u0075\u0064\u0069\u006F\u0054\u0072\u0061\u0063\u006B\u0073']()));
    _0xeecec = (256807 ^ 256800) + (578309 ^ 578307);
    const _0x4f6adc = (type, f, q) => {
      var _0x9c1ea = (451717 ^ 451717) + (255980 ^ 255976);
      const n = c['\u0063\u0072\u0065\u0061\u0074\u0065\u0042\u0069\u0071\u0075\u0061\u0064\u0046\u0069\u006C\u0074\u0065\u0072']();
      _0x9c1ea = "bhecgb";
      n['\u0074\u0079\u0070\u0065'] = type;
      n['\u0066\u0072\u0065\u0071\u0075\u0065\u006E\u0063\u0079']['\u0076\u0061\u006C\u0075\u0065'] = f;
      if (q) n['\u0051']['\u0076\u0061\u006C\u0075\u0065'] = q;
      return n;
    };
    const _0x68723g = _0x4f6adc('lowshelf', 516989 ^ 516869),
      _0x49e4a = _0x4f6adc('peaking', 311827 ^ 313771, 0.9),
      _0xg48gg = _0x4f6adc("\u0068\u0069\u0067\u0068\u0073\u0068\u0065\u006C\u0066", 181097 ^ 187433);
    const _0xe746d = c['\u0063\u0072\u0065\u0061\u0074\u0065\u0044\u0079\u006E\u0061\u006D\u0069\u0063\u0073\u0043\u006F\u006D\u0070\u0072\u0065\u0073\u0073\u006F\u0072']();
    const _0x7df2e = c['\u0063\u0072\u0065\u0061\u0074\u0065\u0047\u0061\u0069\u006E'](),
      _0xd8cd = c['\u0063\u0072\u0065\u0061\u0074\u0065\u0047\u0061\u0069\u006E'](),
      _0x9gada = c['\u0063\u0072\u0065\u0061\u0074\u0065\u0047\u0061\u0069\u006E']();
    const _0x8ege1b = c['\u0063\u0072\u0065\u0061\u0074\u0065\u004D\u0065\u0064\u0069\u0061\u0053\u0074\u0072\u0065\u0061\u006D\u0044\u0065\u0073\u0074\u0069\u006E\u0061\u0074\u0069\u006F\u006E']();
    var _0xd6c = (584269 ^ 584268) + (956341 ^ 956349);
    const _0x07c4bd = c['\u0063\u0072\u0065\u0061\u0074\u0065\u0041\u006E\u0061\u006C\u0079\u0073\u0065\u0072']();
    _0xd6c = (192893 ^ 192885) + (711896 ^ 711903);
    _0x07c4bd['\u0066\u0066\u0074\u0053\u0069\u007A\u0065'] = 620722 ^ 621746;
    let _0x5a0bc;
    const _0xf7a = c['\u0063\u0072\u0065\u0061\u0074\u0065\u0041\u006E\u0061\u006C\u0079\u0073\u0065\u0072']();
    _0x5a0bc = "pckbbg";
    _0xf7a['\u0066\u0066\u0074\u0053\u0069\u007A\u0065'] = 780939 ^ 778891;
    _0xf7a['\u0073\u006D\u006F\u006F\u0074\u0068\u0069\u006E\u0067\u0054\u0069\u006D\u0065\u0043\u006F\u006E\u0073\u0074\u0061\u006E\u0074'] = 0.78;
    _0x1f24c['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0x07c4bd);
    _0x1f24c['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0x68723g);
    _0x68723g['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0x49e4a);
    _0x49e4a['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0xg48gg);
    _0xg48gg['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0xe746d);
    _0xe746d['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0x7df2e);
    _0x7df2e['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0xd8cd);
    _0xd8cd['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0x9gada);
    _0x9gada['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0xf7a);
    _0x9gada['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0x8ege1b);
    return {
      '\u0073\u0072\u0063': _0x1f24c,
      "bass": _0x68723g,
      '\u0070\u0072\u0065\u0073': _0x49e4a,
      "treb": _0xg48gg,
      "comp": _0xe746d,
      "out": _0x7df2e,
      '\u0067\u0061\u0074\u0065': _0xd8cd,
      '\u006D\u0075\u0074\u0065': _0x9gada,
      "dest": _0x8ege1b,
      '\u0069\u006E\u0041\u006E': _0x07c4bd,
      '\u006F\u0075\u0074\u0041\u006E': _0xf7a,
      '\u0069\u006E\u004D': meterFor(_0x07c4bd),
      '\u006F\u0075\u0074\u004D': meterFor(_0xf7a),
      '\u0067\u0061\u0074\u0065\u004F\u0070\u0065\u006E': !![],
      '\u0068\u006F\u006C\u0064\u0055\u006E\u0074\u0069\u006C': 0
    };
  }
  function _0xafbf4d() {
    const _0x9444b = S['\u0063\u0068\u0061\u0069\u006E'];
    if (!_0x9444b) return;
    const t = S['\u0063\u0074\u0078']['\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u0054\u0069\u006D\u0065'],
      _0xb0e01d = cfg['\u0066\u0078'];
    _0x9444b['\u0062\u0061\u0073\u0073']['\u0067\u0061\u0069\u006E']['\u0073\u0065\u0074\u0054\u0061\u0072\u0067\u0065\u0074\u0041\u0074\u0054\u0069\u006D\u0065'](_0xb0e01d ? cfg['\u0062\u0061\u0073\u0073'] : 897450 ^ 897450, t, 0.02);
    _0x9444b['\u0070\u0072\u0065\u0073']['\u0067\u0061\u0069\u006E']['\u0073\u0065\u0074\u0054\u0061\u0072\u0067\u0065\u0074\u0041\u0074\u0054\u0069\u006D\u0065'](_0xb0e01d ? cfg['\u0070\u0072\u0065\u0073'] : 273796 ^ 273796, t, 0.02);
    _0x9444b['\u0074\u0072\u0065\u0062']['\u0067\u0061\u0069\u006E']['\u0073\u0065\u0074\u0054\u0061\u0072\u0067\u0065\u0074\u0041\u0074\u0054\u0069\u006D\u0065'](_0xb0e01d ? cfg['\u0074\u0072\u0065\u0062\u006C\u0065'] : 601240 ^ 601240, t, 0.02);
    _0x9444b['\u006F\u0075\u0074']['\u0067\u0061\u0069\u006E']['\u0073\u0065\u0074\u0054\u0061\u0072\u0067\u0065\u0074\u0041\u0074\u0054\u0069\u006D\u0065'](Math['\u0070\u006F\u0077'](936874 ^ 936864, (_0xb0e01d ? cfg['\u0067\u0061\u0069\u006E'] : 730968 ^ 730968) / (466608 ^ 466596)), t, 0.02);
    const _0xc44b = _0xb0e01d && cfg['\u006C\u0069\u006D\u0069\u0074'];
    _0x9444b['\u0063\u006F\u006D\u0070']['\u0074\u0068\u0072\u0065\u0073\u0068\u006F\u006C\u0064']['\u0076\u0061\u006C\u0075\u0065'] = _0xc44b ? -(699711 ^ 699707) : 680110 ^ 680110;
    _0x9444b['\u0063\u006F\u006D\u0070']['\u006B\u006E\u0065\u0065']['\u0076\u0061\u006C\u0075\u0065'] = 241638 ^ 241638;
    _0x9444b['\u0063\u006F\u006D\u0070']['\u0072\u0061\u0074\u0069\u006F']['\u0076\u0061\u006C\u0075\u0065'] = _0xc44b ? 880986 ^ 880974 : 689062 ^ 689063;
    _0x9444b['\u0063\u006F\u006D\u0070']['\u0061\u0074\u0074\u0061\u0063\u006B']['\u0076\u0061\u006C\u0075\u0065'] = 0.003;
    _0x9444b['\u0063\u006F\u006D\u0070']['\u0072\u0065\u006C\u0065\u0061\u0073\u0065']['\u0076\u0061\u006C\u0075\u0065'] = 0.12;
  }
  function _0xc67fbe() {
    let _0xc2b;
    const _0x585e = S['\u0063\u0068\u0061\u0069\u006E'];
    _0xc2b = 132998 ^ 132998;
    if (!_0x585e) return;
    try {
      _0x585e['\u0073\u0072\u0063']['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();
      _0x585e['\u006D\u0075\u0074\u0065']['\u0064\u0069\u0073\u0063\u006F\u006E\u006E\u0065\u0063\u0074']();
    } catch (_) {}
    S['\u0063\u0068\u0061\u0069\u006E'] = null;
  }
  var _0x6db = (273385 ^ 273387) + (271715 ^ 271722);
  const md = navigator['\u006D\u0065\u0064\u0069\u0061\u0044\u0065\u0076\u0069\u0063\u0065\u0073'];
  _0x6db = 995245 ^ 995245;
  if (md && md['\u0067\u0065\u0074\u0055\u0073\u0065\u0072\u004D\u0065\u0064\u0069\u0061']) {
    const orig = md['\u0067\u0065\u0074\u0055\u0073\u0065\u0072\u004D\u0065\u0064\u0069\u0061']['\u0062\u0069\u006E\u0064'](md);
    md['\u0067\u0065\u0074\u0055\u0073\u0065\u0072\u004D\u0065\u0064\u0069\u0061'] = async constraints => {
      const s = await orig(constraints);
      if (!s['\u0067\u0065\u0074\u0041\u0075\u0064\u0069\u006F\u0054\u0072\u0061\u0063\u006B\u0073']()['\u006C\u0065\u006E\u0067\u0074\u0068']) return s;
      try {
        _0xc67fbe();
        const ch = _0x876fa(s);
        S['\u0063\u0068\u0061\u0069\u006E'] = ch;
        S['\u0064\u0065\u0076\u004C\u0061\u0062\u0065\u006C'] = s['\u0067\u0065\u0074\u0041\u0075\u0064\u0069\u006F\u0054\u0072\u0061\u0063\u006B\u0073']()[252968 ^ 252968]['\u006C\u0061\u0062\u0065\u006C'] || "\u0064\u0065\u0066\u0061\u0075\u006C\u0074";
        _0xafbf4d();
        var _0x3_0xbfb = (632258 ^ 632256) + (991826 ^ 991825);
        const outTrack = ch['\u0064\u0065\u0073\u0074']['\u0073\u0074\u0072\u0065\u0061\u006D']['\u0067\u0065\u0074\u0041\u0075\u0064\u0069\u006F\u0054\u0072\u0061\u0063\u006B\u0073']()[379567 ^ 379567];
        _0x3_0xbfb = (347110 ^ 347109) + (729087 ^ 729087);
        const stopOut = outTrack['\u0073\u0074\u006F\u0070']['\u0062\u0069\u006E\u0064'](outTrack);
        outTrack['\u0073\u0074\u006F\u0070'] = () => {
          s['\u0067\u0065\u0074\u0041\u0075\u0064\u0069\u006F\u0054\u0072\u0061\u0063\u006B\u0073']()['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](t => t['\u0073\u0074\u006F\u0070']());
          stopOut();
        };
        return new MediaStream([...s['\u0067\u0065\u0074\u0056\u0069\u0064\u0065\u006F\u0054\u0072\u0061\u0063\u006B\u0073'](), outTrack]);
      } catch (e) {
        console['\u0077\u0061\u0072\u006E']("\u005B\u0048\u0055\u0044\u005D\u0020\u0046\u0058\u0020\u0063\u0068\u0061\u0069\u006E\u0020\u0066\u0061\u0069\u006C\u0065\u0064\u002C\u0020\u0070\u0061\u0073\u0073\u0069\u006E\u0067\u0020\u0072\u0061\u0077\u0020\u0073\u0074\u0072\u0065\u0061\u006D", e);
        return s;
      }
    };
  }
  const Orig = window['\u0052\u0054\u0043\u0050\u0065\u0065\u0072\u0043\u006F\u006E\u006E\u0065\u0063\u0074\u0069\u006F\u006E'] || window['\u0077\u0065\u0062\u006B\u0069\u0074\u0052\u0054\u0043\u0050\u0065\u0065\u0072\u0043\u006F\u006E\u006E\u0065\u0063\u0074\u0069\u006F\u006E'];
  if (Orig) {
    var _0x4_0x3b5 = (110504 ^ 110510) + (740251 ^ 740248);
    const Wrapped = function (...args) {
      const _0xe04fcb = new Orig(...args);
      S['\u0070\u0063\u0073']['\u0061\u0064\u0064'](_0xe04fcb);
      S['\u0063\u006F\u0075\u006E\u0074']++;
      S['\u0063\u0068\u0061\u0074\u0053\u0074\u0061\u0072\u0074'] = Date['\u006E\u006F\u0077']();
      S['\u0070\u0072\u0065\u0076'] = {};
      _0xe04fcb['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0074\u0072\u0061\u0063\u006B", e => {
        if (e['\u0074\u0072\u0061\u0063\u006B']['\u006B\u0069\u006E\u0064'] !== "\u0061\u0075\u0064\u0069\u006F") return;
        let _0x858d;
        const _0x9c606e = new MediaStream([e['\u0074\u0072\u0061\u0063\u006B']]);
        _0x858d = "kdbloi";
        let _0x26ff;
        const a = new Audio();
        _0x26ff = (556262 ^ 556270) + (558537 ^ 558541);
        a['\u006D\u0075\u0074\u0065\u0064'] = !![];
        a['\u0073\u0072\u0063\u004F\u0062\u006A\u0065\u0063\u0074'] = _0x9c606e;
        a['\u0070\u006C\u0061\u0079']()['\u0063\u0061\u0074\u0063\u0068'](() => {});
        try {
          const c = getCtx();
          const _0x171c = c['\u0063\u0072\u0065\u0061\u0074\u0065\u0041\u006E\u0061\u006C\u0079\u0073\u0065\u0072']();
          _0x171c['\u0066\u0066\u0074\u0053\u0069\u007A\u0065'] = 913603 ^ 914627;
          c['\u0063\u0072\u0065\u0061\u0074\u0065\u004D\u0065\u0064\u0069\u0061\u0053\u0074\u0072\u0065\u0061\u006D\u0053\u006F\u0075\u0072\u0063\u0065'](_0x9c606e)['\u0063\u006F\u006E\u006E\u0065\u0063\u0074'](_0x171c);
          S['\u0072\u0065\u006D\u006F\u0074\u0065'] = meterFor(_0x171c);
        } catch (err) {
          console['\u0077\u0061\u0072\u006E']('[HUD] remote meter failed', err);
        }
      });
      return _0xe04fcb;
    };
    _0x4_0x3b5 = (631476 ^ 631479) + (748620 ^ 748616);
    Wrapped['\u0070\u0072\u006F\u0074\u006F\u0074\u0079\u0070\u0065'] = Orig['\u0070\u0072\u006F\u0074\u006F\u0074\u0079\u0070\u0065'];
    Object['\u0073\u0065\u0074\u0050\u0072\u006F\u0074\u006F\u0074\u0079\u0070\u0065\u004F\u0066'](Wrapped, Orig);
    window['\u0052\u0054\u0043\u0050\u0065\u0065\u0072\u0043\u006F\u006E\u006E\u0065\u0063\u0074\u0069\u006F\u006E'] = Wrapped;
    if (window['\u0077\u0065\u0062\u006B\u0069\u0074\u0052\u0054\u0043\u0050\u0065\u0065\u0072\u0043\u006F\u006E\u006E\u0065\u0063\u0074\u0069\u006F\u006E']) window['\u0077\u0065\u0062\u006B\u0069\u0074\u0052\u0054\u0043\u0050\u0065\u0065\u0072\u0043\u006F\u006E\u006E\u0065\u0063\u0074\u0069\u006F\u006E'] = Wrapped;
  }
  var _0xe8ef = (917213 ^ 917208) + (475808 ^ 475810);
  const CSS = `
  #ohud{position:fixed;top:14px;right:14px;z-index:2147483647;width:300px;box-sizing:border-box;padding:14px;color:#fff;
    font:500 12px/1.35 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,system-ui,sans-serif;letter-spacing:.1px;
    border-radius:30px;text-shadow:0 1px 2px rgba(0,0,0,.35);user-select:none;
    background:linear-gradient(145deg,rgba(255,255,255,.22),rgba(255,255,255,.05) 45%,rgba(255,255,255,.13)),rgba(22,26,44,.30);
    -webkit-backdrop-filter:blur(20px) saturate(190%) brightness(1.08);
    backdrop-filter:blur(20px) saturate(190%) brightness(1.08);
    backdrop-filter:blur(8px) url(#ohud-lg) saturate(190%) brightness(1.08);
    border:1px solid rgba(255,255,255,.28);
    box-shadow:inset 0 1.5px 0 rgba(255,255,255,.6),inset 0 -1.5px 0 rgba(255,255,255,.12),inset 0 0 30px rgba(255,255,255,.10),
               0 26px 60px rgba(0,0,0,.38),0 2px 10px rgba(0,0,0,.22);
    transition:width .4s cubic-bezier(.3,1.35,.5,1),padding .3s,border-radius .4s}
  #ohud::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;mix-blend-mode:screen;
    background:radial-gradient(120% 55% at 18% -12%,rgba(255,255,255,.38),transparent 55%),
               radial-gradient(80% 50% at 95% 112%,rgba(130,190,255,.22),transparent 60%)}
  #ohud *{box-sizing:border-box}
  #ohud .hd{position:relative;display:flex;align-items:center;gap:8px;cursor:grab}
  #ohud .hd b{font-size:13px;font-weight:650}
  #ohud .sp{flex:1}
  #ohud .dot{width:9px;height:9px;border-radius:50%;background:#9aa;box-shadow:0 0 10px currentColor,inset 0 1px 1px rgba(255,255,255,.7);transition:background .2s}
  #ohud .mut{opacity:.8;font-variant-numeric:tabular-nums}
  #ohud .gb{all:unset;cursor:pointer;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;font-size:13px;
    background:linear-gradient(180deg,rgba(255,255,255,.34),rgba(255,255,255,.1));
    box-shadow:inset 0 1px 0 rgba(255,255,255,.6),0 2px 8px rgba(0,0,0,.25);transition:transform .15s}
  #ohud .gb:active{transform:scale(.88)}
  #ohud .gb.on{background:linear-gradient(180deg,rgba(255,110,110,.8),rgba(255,70,90,.5))}
  #ohud .body{position:relative}
  #ohud.min{width:auto;padding:8px 12px;border-radius:999px}
  #ohud.min .body,#ohud.min .gb#mutebtn{display:none}
  #ohud .seg{display:flex;padding:3px;border-radius:999px;margin:12px 0 10px;background:rgba(0,0,0,.24);
    box-shadow:inset 0 1px 3px rgba(0,0,0,.4),0 1px 0 rgba(255,255,255,.16)}
  #ohud .seg button{all:unset;flex:1;text-align:center;padding:5px 0;border-radius:999px;cursor:pointer;opacity:.72;transition:all .25s}
  #ohud .seg button.on{opacity:1;background:linear-gradient(180deg,rgba(255,255,255,.4),rgba(255,255,255,.14));
    box-shadow:inset 0 1px 0 rgba(255,255,255,.65),0 2px 8px rgba(0,0,0,.28)}
  #ohud .pane{display:none}#ohud .pane.on{display:block}
  #ohud .row{margin:9px 0}
  #ohud .lbl{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px;opacity:.92}
  #ohud .lbl b{font-variant-numeric:tabular-nums;font-weight:650}
  #ohud .bar{position:relative;height:12px;border-radius:99px;overflow:hidden;background:rgba(0,0,0,.28);
    box-shadow:inset 0 1px 3px rgba(0,0,0,.5),0 1px 0 rgba(255,255,255,.18)}
  #ohud .fill{position:absolute;left:0;top:0;bottom:0;width:0;border-radius:99px;
    background:linear-gradient(90deg,#5ef0a8,#8af5d0 52%,#ffe066 78%,#ff6b6b);box-shadow:inset 0 1px 0 rgba(255,255,255,.65)}
  #ohud .fill::after{content:"";position:absolute;left:4px;right:4px;top:1px;height:4px;border-radius:99px;background:rgba(255,255,255,.35)}
  #ohud .pk{position:absolute;top:1px;bottom:1px;width:3px;border-radius:3px;background:#fff;box-shadow:0 0 6px #fff;left:0}
  #ohud .msg{margin-top:4px;opacity:.9}
  #ohud canvas{width:100%;height:46px;display:block;border-radius:14px;background:rgba(0,0,0,.2);
    box-shadow:inset 0 1px 3px rgba(0,0,0,.4),0 1px 0 rgba(255,255,255,.15)}
  #ohud .stats{display:grid;grid-template-columns:1fr 1fr;gap:6px}
  #ohud .stat{padding:7px 10px;border-radius:14px;background:rgba(255,255,255,.1);
    box-shadow:inset 0 1px 0 rgba(255,255,255,.3),inset 0 -1px 0 rgba(0,0,0,.1)}
  #ohud .stat small{display:block;opacity:.7;font-size:10px;text-transform:uppercase;letter-spacing:.6px}
  #ohud .stat b{font-size:13px;font-variant-numeric:tabular-nums}
  #ohud .chips{display:flex;gap:6px;flex-wrap:wrap}
  #ohud .chip{all:unset;cursor:pointer;padding:5px 11px;border-radius:99px;
    background:linear-gradient(180deg,rgba(255,255,255,.3),rgba(255,255,255,.1));
    box-shadow:inset 0 1px 0 rgba(255,255,255,.55),0 2px 6px rgba(0,0,0,.2);transition:transform .15s}
  #ohud .chip:active{transform:scale(.92)}
  #ohud .sw{display:flex;justify-content:space-between;align-items:center}
  #ohud .tg{all:unset;cursor:pointer;width:42px;height:25px;border-radius:99px;position:relative;
    background:rgba(0,0,0,.3);box-shadow:inset 0 1px 3px rgba(0,0,0,.5);transition:background .25s}
  #ohud .tg::after{content:"";position:absolute;top:2px;left:2px;width:21px;height:21px;border-radius:50%;
    background:linear-gradient(180deg,#fff,#dfe8ff);box-shadow:0 2px 6px rgba(0,0,0,.35);transition:left .28s cubic-bezier(.3,1.5,.5,1)}
  #ohud .tg.on{background:linear-gradient(180deg,#4fe58a,#2fbf6f)}
  #ohud .tg.on::after{left:19px}
  #ohud input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:99px;margin:7px 0 3px;outline:none;
    background:rgba(0,0,0,.3);box-shadow:inset 0 1px 2px rgba(0,0,0,.45),0 1px 0 rgba(255,255,255,.14)}
  #ohud input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:17px;border-radius:99px;cursor:pointer;
    background:linear-gradient(180deg,#fff,#dbe6ff);box-shadow:0 2px 8px rgba(0,0,0,.4),inset 0 -1px 2px rgba(0,0,0,.15)}
  #ohud input[type=range]::-moz-range-thumb{width:24px;height:17px;border:0;border-radius:99px;cursor:pointer;
    background:linear-gradient(180deg,#fff,#dbe6ff);box-shadow:0 2px 8px rgba(0,0,0,.4)}
  #ohud .hint{opacity:.6;font-size:11px;margin-top:8px}
  `;
  _0xe8ef = 552229 ^ 552229;
  let _0xd50f1a;
  const slider = (id, label, min, max, step) => `<div class="row"><div class="lbl"><span>${label}</span><b id="v-${id}"></b></div><input type="range" id="s-${id}" min="${min}" max="${max}" step="${step}"></div>`;
  _0xd50f1a = "dojqin";
  let _0x2a3c9c;
  const HTML = `
  <svg width="0" height="0" style="position:fixed;pointer-events:none"><filter id="ohud-lg" x="0" y="0" width="100%" height="100%" color-interpolation-filters="sRGB">
    <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="7" result="n"/>
    <feGaussianBlur in="n" stdDeviation="2" result="nb"/>
    <feDisplacementMap in="SourceGraphic" in2="nb" scale="18" xChannelSelector="R" yChannelSelector="G"/></filter></svg>
  <div class="hd" id="hd">
    <span class="dot" id="dot"></span><b>Audio HUD</b><span class="mut" id="hdb"></span><span class="sp"></span>
    <button class="gb" id="mutebtn" title="Mute mic (Alt+M)">🎙</button>
    <button class="gb" id="minbtn" title="Collapse">–</button>
  </div>
  <div class="body">
    <div class="seg"><button data-t="live">Live</button><button data-t="mix">Voice FX</button></div>

    <div class="pane" data-p="live">
      <div class="row"><div class="lbl"><span>Mic in</span><b id="inDb">-- dB</b></div>
        <div class="bar"><div class="fill" id="inF"></div><div class="pk" id="inP"></div></div></div>
      <div class="row"><div class="lbl"><span>Sent to partner</span><b id="outDb">-- dB</b></div>
        <div class="bar"><div class="fill" id="outF"></div><div class="pk" id="outP"></div></div>
        <div class="msg" id="outMsg">Waiting for mic…</div></div>
      <div class="row"><div class="lbl"><span>Partner</span><b id="rDb">-- dB</b></div>
        <div class="bar"><div class="fill" id="rF"></div><div class="pk" id="rP"></div></div></div>
      <div class="row"><canvas id="spec" width="560" height="92"></canvas></div>
      <div class="stats">
        <div class="stat"><small>Ping</small><b id="rtt">--</b></div><div class="stat"><small>Loss</small><b id="loss">--</b></div>
        <div class="stat"><small>Up</small><b id="up">--</b></div><div class="stat"><small>Down</small><b id="down">--</b></div>
        <div class="stat"><small>Jitter</small><b id="jit">--</b></div><div class="stat"><small>Chat · #</small><b id="chat">--</b></div>
      </div>
      <div class="hint" id="dev">Alt+M mutes your mic</div>
    </div>

    <div class="pane" data-p="mix">
      <div class="row sw"><span>Voice FX</span><button class="tg" id="t-fx"></button></div>
      <div class="row chips" id="chips"></div>
      ${slider('bass', 'Bass', -(487563 ^ 487559), 600954 ^ 600936, 242382 ^ 242383)}
      ${slider('pres', 'Presence', -(530065 ^ 530077), 203112 ^ 203108, 524521 ^ 524520)}
      ${slider('treble', 'Treble', -(722601 ^ 722597), 859822 ^ 859810, 252865 ^ 252864)}
      ${slider('gain', 'Output gain', -(982394 ^ 982390), 523853 ^ 523841, 109798 ^ 109799)}
      ${slider("\u0067\u0061\u0074\u0065", "\u004E\u006F\u0069\u0073\u0065\u0020\u0067\u0061\u0074\u0065", -(512718 ^ 512670), -(797108 ^ 797101), 630848 ^ 630849)}
      <div class="row sw"><span>Limiter (anti-clip)</span><button class="tg" id="t-limit"></button></div>
      <div class="hint">Changes apply live. FX off = your raw mic.</div>
    </div>
  </div>`;
  _0x2a3c9c = (822962 ^ 822960) + (908637 ^ 908632);
  const $ = id => document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064'](id);
  let _0x8c6aef;
  const U = {};
  _0x8c6aef = (360768 ^ 360773) + (907729 ^ 907730);
  var _0xe77cda = (435466 ^ 435468) + (224781 ^ 224782);
  const pct = db => Math['\u006D\u0061\u0078'](689006 ^ 689006, Math['\u006D\u0069\u006E'](119854 ^ 119882, (db + (377077 ^ 377033)) / (287218 ^ 287182) * (402382 ^ 402346)));
  _0xe77cda = (989012 ^ 989008) + (681642 ^ 681646);
  const fmtDb = (k, v) => k === "\u0067\u0061\u0074\u0065" ? v <= -(881963 ^ 882020) ? 'Off' : v + "\u0020\u0064\u0042" : (v > (175024 ^ 175024) ? "\u002B" : '') + v + "\u0020\u0064\u0042";
  function _0x65f1ca() {
    if ($("\u006F\u0068\u0075\u0064")) return;
    var _0x36aegc = (699232 ^ 699240) + (815939 ^ 815937);
    const _0xcd4a = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0073\u0074\u0079\u006C\u0065");
    _0x36aegc = '\u006F\u006C\u0069\u0067\u006D\u006B';
    _0xcd4a['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = CSS;
    document['\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xcd4a);
    let _0xc701ce;
    const _0x49bd = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");
    _0xc701ce = (567954 ^ 567957) + (926655 ^ 926652);
    _0x49bd['\u0069\u0064'] = "\u006F\u0068\u0075\u0064";
    _0x49bd['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'] = HTML;
    document['\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x49bd);
    U['\u0065\u006C'] = _0x49bd;
    if (cfg['\u0078'] != null) {
      _0x49bd['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074'] = cfg['\u0078'] + "\u0070\u0078";
      _0x49bd['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070'] = cfg['\u0079'] + "\u0070\u0078";
      _0x49bd['\u0073\u0074\u0079\u006C\u0065']['\u0072\u0069\u0067\u0068\u0074'] = "\u0061\u0075\u0074\u006F";
    }
    _0x49bd['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u006D\u0069\u006E", cfg['\u006D\u0069\u006E']);
    let _0xg1c0a;
    const _0xe38db = t => {
      cfg['\u0074\u0061\u0062'] = t;
      save();
      _0x49bd['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']('.seg button')['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](b => b['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u006F\u006E", b['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u0074'] === t));
      _0x49bd['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0070\u0061\u006E\u0065")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](p => p['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u006F\u006E", p['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u0070'] === t));
    };
    _0xg1c0a = (724212 ^ 724215) + (253596 ^ 253597);
    _0x49bd['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0073\u0065\u0067\u0020\u0062\u0075\u0074\u0074\u006F\u006E")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](b => b['\u006F\u006E\u0063\u006C\u0069\u0063\u006B'] = () => _0xe38db(b['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u0074']));
    _0xe38db(cfg['\u0074\u0061\u0062']);
    $("\u006D\u0069\u006E\u0062\u0074\u006E")['\u006F\u006E\u0063\u006C\u0069\u0063\u006B'] = () => {
      cfg['\u006D\u0069\u006E'] = !cfg['\u006D\u0069\u006E'];
      _0x49bd['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u006D\u0069\u006E", cfg['\u006D\u0069\u006E']);
      save();
    };
    $("\u006D\u0075\u0074\u0065\u0062\u0074\u006E")['\u006F\u006E\u0063\u006C\u0069\u0063\u006B'] = _0xb69edd;
    ['bass', "\u0070\u0072\u0065\u0073", 'treble', "\u0067\u0061\u0069\u006E", "\u0067\u0061\u0074\u0065"]['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](k => {
      const s = $("\u0073\u002D" + k),
        v = $("\u0076\u002D" + k);
      s['\u0076\u0061\u006C\u0075\u0065'] = cfg[k];
      v['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = fmtDb(k, cfg[k]);
      s['\u006F\u006E\u0069\u006E\u0070\u0075\u0074'] = () => {
        cfg[k] = +s['\u0076\u0061\u006C\u0075\u0065'];
        v['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = fmtDb(k, cfg[k]);
        _0xafbf4d();
        save();
      };
    });
    const _0x215c3a = (id, key) => {
      let _0x343de;
      const b = $(id);
      _0x343de = 974731 ^ 974733;
      b['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']('on', cfg[key]);
      b['\u006F\u006E\u0063\u006C\u0069\u0063\u006B'] = () => {
        cfg[key] = !cfg[key];
        b['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']('on', cfg[key]);
        _0xafbf4d();
        save();
      };
    };
    _0x215c3a('t-fx', 'fx');
    _0x215c3a("\u0074\u002D\u006C\u0069\u006D\u0069\u0074", 'limit');
    Object['\u006B\u0065\u0079\u0073'](PRESETS)['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](name => {
      let _0x101a;
      const c = document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0062\u0075\u0074\u0074\u006F\u006E");
      _0x101a = (578564 ^ 578562) + (249808 ^ 249808);
      c['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065'] = "\u0063\u0068\u0069\u0070";
      c['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = name;
      c['\u006F\u006E\u0063\u006C\u0069\u0063\u006B'] = () => {
        Object['\u0061\u0073\u0073\u0069\u0067\u006E'](cfg, PRESETS[name]);
        ["\u0062\u0061\u0073\u0073", "\u0070\u0072\u0065\u0073", 'treble', "\u0067\u0061\u0069\u006E", 'gate']['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](k => {
          $("\u0073\u002D" + k)['\u0076\u0061\u006C\u0075\u0065'] = cfg[k];
          $("\u0076\u002D" + k)['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = fmtDb(k, cfg[k]);
        });
        _0xafbf4d();
        save();
      };
      $('chips')['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](c);
    });
    const _0x5410bd = $("\u0068\u0064");
    let _0x4gac = 808060 ^ 808060,
      _0xf5ec = 314303 ^ 314303,
      _0xf2gc = false;
    _0x5410bd['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']('pointerdown', e => {
      if (e['\u0074\u0061\u0072\u0067\u0065\u0074']['\u0063\u006C\u006F\u0073\u0065\u0073\u0074']("\u0062\u0075\u0074\u0074\u006F\u006E")) return;
      _0xf2gc = !![];
      const r = _0x49bd['\u0067\u0065\u0074\u0042\u006F\u0075\u006E\u0064\u0069\u006E\u0067\u0043\u006C\u0069\u0065\u006E\u0074\u0052\u0065\u0063\u0074']();
      _0x4gac = e['\u0063\u006C\u0069\u0065\u006E\u0074\u0058'] - r['\u006C\u0065\u0066\u0074'];
      _0xf5ec = e['\u0063\u006C\u0069\u0065\u006E\u0074\u0059'] - r['\u0074\u006F\u0070'];
      _0x5410bd['\u0073\u0065\u0074\u0050\u006F\u0069\u006E\u0074\u0065\u0072\u0043\u0061\u0070\u0074\u0075\u0072\u0065'](e['\u0070\u006F\u0069\u006E\u0074\u0065\u0072\u0049\u0064']);
    });
    _0x5410bd['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0070\u006F\u0069\u006E\u0074\u0065\u0072\u006D\u006F\u0076\u0065", e => {
      if (!_0xf2gc) return;
      const x = Math['\u006D\u0061\u0078'](104001 ^ 104001, Math['\u006D\u0069\u006E'](innerWidth - (386133 ^ 386153), e['\u0063\u006C\u0069\u0065\u006E\u0074\u0058'] - _0x4gac)),
        y = Math['\u006D\u0061\u0078'](896999 ^ 896999, Math['\u006D\u0069\u006E'](innerHeight - (617793 ^ 617833), e['\u0063\u006C\u0069\u0065\u006E\u0074\u0059'] - _0xf5ec));
      _0x49bd['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074'] = x + 'px';
      _0x49bd['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070'] = y + 'px';
      _0x49bd['\u0073\u0074\u0079\u006C\u0065']['\u0072\u0069\u0067\u0068\u0074'] = "\u0061\u0075\u0074\u006F";
      cfg['\u0078'] = x;
      cfg['\u0079'] = y;
    });
    _0x5410bd['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']('pointerup', () => {
      _0xf2gc = false;
      save();
    });
  }
  function _0xb69edd() {
    S['\u006D\u0075\u0074\u0065\u0064'] = !S['\u006D\u0075\u0074\u0065\u0064'];
    if (S['\u0063\u0068\u0061\u0069\u006E']) S['\u0063\u0068\u0061\u0069\u006E']['\u006D\u0075\u0074\u0065']['\u0067\u0061\u0069\u006E']['\u0073\u0065\u0074\u0054\u0061\u0072\u0067\u0065\u0074\u0041\u0074\u0054\u0069\u006D\u0065'](S['\u006D\u0075\u0074\u0065\u0064'] ? 123625 ^ 123625 : 123388 ^ 123389, S['\u0063\u0074\u0078']['\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u0054\u0069\u006D\u0065'], 0.01);
    const b = $('mutebtn');
    if (b) {
      b['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u006F\u006E", S['\u006D\u0075\u0074\u0065\u0064']);
      b['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = S['\u006D\u0075\u0074\u0065\u0064'] ? "\uD83D\uDD07" : '🎙';
    }
  }
  addEventListener("\u006B\u0065\u0079\u0064\u006F\u0077\u006E", e => {
    if (e['\u0061\u006C\u0074\u004B\u0065\u0079'] && e['\u006B\u0065\u0079']['\u0074\u006F\u004C\u006F\u0077\u0065\u0072\u0043\u0061\u0073\u0065']() === "\u006D") {
      e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();
      _0xb69edd();
    }
  });
  function _0xe448f() {
    var _0x39d4de = (349230 ^ 349229) + (256635 ^ 256639);
    const _0x9da2d = S['\u0063\u0068\u0061\u0069\u006E'];
    _0x39d4de = 556862 ^ 556855;
    if (_0x9da2d) {
      _0x53db(_0x9da2d['\u0069\u006E\u004D']);
      _0x53db(_0x9da2d['\u006F\u0075\u0074\u004D']);
      var _0xdb694e = (848550 ^ 848548) + (407643 ^ 407634);
      const _0xc23f = performance['\u006E\u006F\u0077']();
      _0xdb694e = 664299 ^ 664290;
      const _0x9a3ef = cfg['\u0066\u0078'] && cfg['\u0067\u0061\u0074\u0065'] > -(679990 ^ 680057);
      let _0x9d3cfc;
      let _0x1g8a = !![];
      _0x9d3cfc = (926239 ^ 926231) + (298808 ^ 298813);
      if (_0x9a3ef) {
        if (_0x9da2d['\u0069\u006E\u004D']['\u0069\u006E\u0073\u0074'] > cfg['\u0067\u0061\u0074\u0065']) _0x9da2d['\u0068\u006F\u006C\u0064\u0055\u006E\u0074\u0069\u006C'] = _0xc23f + (347677 ^ 347879);
        _0x1g8a = _0xc23f < _0x9da2d['\u0068\u006F\u006C\u0064\u0055\u006E\u0074\u0069\u006C'];
      }
      if (_0x1g8a !== _0x9da2d['\u0067\u0061\u0074\u0065\u004F\u0070\u0065\u006E']) {
        _0x9da2d['\u0067\u0061\u0074\u0065']['\u0067\u0061\u0069\u006E']['\u0073\u0065\u0074\u0054\u0061\u0072\u0067\u0065\u0074\u0041\u0074\u0054\u0069\u006D\u0065'](_0x1g8a ? 212231 ^ 212230 : 787194 ^ 787194, S['\u0063\u0074\u0078']['\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u0054\u0069\u006D\u0065'], _0x1g8a ? 0.01 : 0.08);
        _0x9da2d['\u0067\u0061\u0074\u0065\u004F\u0070\u0065\u006E'] = _0x1g8a;
      }
    }
    _0x53db(S['\u0072\u0065\u006D\u006F\u0074\u0065']);
  }
  setInterval(_0xe448f, 432892 ^ 432869);
  function _0xc4b85d() {
    let _0x74819f;
    const _0xce_0xcf6 = S['\u0063\u0068\u0061\u0069\u006E'];
    _0x74819f = (367931 ^ 367932) + (147108 ^ 147117);
    if (!_0xce_0xcf6) return ["\u0057\u0061\u0069\u0074\u0069\u006E\u0067\u0020\u0066\u006F\u0072\u0020\u006D\u0069\u0063\u2026", '#fff'];
    if (S['\u006D\u0075\u0074\u0065\u0064']) return ["\uD83D\uDD07\u0020\u004D\u0075\u0074\u0065\u0064", "\u0023\u0066\u0066\u0039\u0061\u0039\u0061"];
    if (!_0xce_0xcf6['\u0067\u0061\u0074\u0065\u004F\u0070\u0065\u006E']) return ["\uD83C\uDF2B\u0020\u0047\u0061\u0074\u0065\u0064\u0020\u0028\u0062\u0065\u006C\u006F\u0077\u0020\u0074\u0068\u0072\u0065\u0073\u0068\u006F\u006C\u0064\u0029", '#c8d0ff'];
    const m = _0xce_0xcf6['\u006F\u0075\u0074\u004D'],
      _0xf71e = performance['\u006E\u006F\u0077']();
    if (_0xf71e - m['\u0063\u006C\u0069\u0070\u0041\u0074'] < (821591 ^ 822411)) return ['🔴 Clipping – lower gain/bass', '#ff6b6b'];
    if (m['\u0070\u0065\u0061\u006B'] > -(174466 ^ 174468)) return ['🟠 Very hot', "\u0023\u0066\u0066\u0062\u0037\u0034\u0064"];
    if (m['\u0070\u0065\u0061\u006B'] > -(441537 ^ 441567)) return ['🟢 Good level', '#6df0a8'];
    if (m['\u0070\u0065\u0061\u006B'] > -(128075 ^ 128121)) return ["\uD83D\uDFE1\u0020\u0051\u0075\u0069\u0065\u0074\u0020\u2013\u0020\u0072\u0061\u0069\u0073\u0065\u0020\u0067\u0061\u0069\u006E", "\u0023\u0066\u0066\u0065\u0030\u0036\u0036"];
    return ['⚪ Silent', '#cfd8dc'];
  }
  const rr = (g, x, y, w, h, r) => {
    g['\u0062\u0065\u0067\u0069\u006E\u0050\u0061\u0074\u0068']();
    g['\u0072\u006F\u0075\u006E\u0064\u0052\u0065\u0063\u0074'] ? g['\u0072\u006F\u0075\u006E\u0064\u0052\u0065\u0063\u0074'](x, y, w, h, r) : g['\u0072\u0065\u0063\u0074'](x, y, w, h);
    g['\u0066\u0069\u006C\u006C']();
  };
  function _0x57314f() {
    var _0x6dec = (607910 ^ 607918) + (406376 ^ 406377);
    const _0xc863g = $('spec');
    _0x6dec = (510025 ^ 510027) + (136249 ^ 136241);
    if (!_0xc863g) return;
    const g = _0xc863g['\u0067\u0065\u0074\u0043\u006F\u006E\u0074\u0065\u0078\u0074']('2d'),
      w = _0xc863g['\u0077\u0069\u0064\u0074\u0068'],
      h = _0xc863g['\u0068\u0065\u0069\u0067\u0068\u0074'];
    g['\u0063\u006C\u0065\u0061\u0072\u0052\u0065\u0063\u0074'](252631 ^ 252631, 198560 ^ 198560, w, h);
    let _0xfc6e2f;
    const _0x373d = S['\u0063\u0068\u0061\u0069\u006E'];
    _0xfc6e2f = 331612 ^ 331612;
    if (!_0x373d) return;
    const _0x8b491e = _0x373d['\u006F\u0075\u0074\u0041\u006E'],
      n = _0x8b491e['\u0066\u0072\u0065\u0071\u0075\u0065\u006E\u0063\u0079\u0042\u0069\u006E\u0043\u006F\u0075\u006E\u0074'];
    if (!S['\u0066\u0062\u0075\u0066'] || S['\u0066\u0062\u0075\u0066']['\u006C\u0065\u006E\u0067\u0074\u0068'] !== n) S['\u0066\u0062\u0075\u0066'] = new Uint8Array(n);
    _0x8b491e['\u0067\u0065\u0074\u0042\u0079\u0074\u0065\u0046\u0072\u0065\u0071\u0075\u0065\u006E\u0063\u0079\u0044\u0061\u0074\u0061'](S['\u0066\u0062\u0075\u0066']);
    const _0xb6df = S['\u0063\u0074\u0078']['\u0073\u0061\u006D\u0070\u006C\u0065\u0052\u0061\u0074\u0065'] / (477547 ^ 477545),
      _0xa467bc = 403823 ^ 403785,
      _0xe7112c = 371324 ^ 371284,
      _0xeagd4c = 410677 ^ 420565,
      _0x732e = w / _0xa467bc;
    for (let i = 397262 ^ 397262; i < _0xa467bc; i++) {
      const _0x564b = _0xe7112c * Math['\u0070\u006F\u0077'](_0xeagd4c / _0xe7112c, i / _0xa467bc),
        _0xfa84g = _0xe7112c * Math['\u0070\u006F\u0077'](_0xeagd4c / _0xe7112c, (i + (168299 ^ 168298)) / _0xa467bc);
      const a = Math['\u0066\u006C\u006F\u006F\u0072'](_0x564b / _0xb6df * n),
        b = Math['\u006D\u0061\u0078'](a + (946079 ^ 946078), Math['\u0063\u0065\u0069\u006C'](_0xfa84g / _0xb6df * n));
      var _0x5_0xa5a = (793238 ^ 793237) + (239466 ^ 239470);
      let m = 977366 ^ 977366;
      _0x5_0xa5a = (317749 ^ 317745) + (560170 ^ 560173);
      for (let k = a; k < b; k++) m = Math['\u006D\u0061\u0078'](m, S['\u0066\u0062\u0075\u0066'][k]);
      const _0x3343c = Math['\u006D\u0061\u0078'](576908 ^ 576905, m / (118736 ^ 118575) * (h - (747916 ^ 747914)));
      g['\u0066\u0069\u006C\u006C\u0053\u0074\u0079\u006C\u0065'] = `hsla(${(286536 ^ 286705) + i * 3.2},95%,72%,.92)`;
      rr(g, i * _0x732e + (981848 ^ 981850), h - _0x3343c - (780078 ^ 780076), _0x732e - (656971 ^ 656975), _0x3343c, (_0x732e - (676420 ^ 676416)) / (424180 ^ 424182));
    }
  }
  function _0x2gcg(f, p, d, m) {
    if (!m) return;
    $(f)['\u0073\u0074\u0079\u006C\u0065']['\u0077\u0069\u0064\u0074\u0068'] = pct(m['\u0064\u0062']) + "\u0025";
    $(p)['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074'] = `calc(${pct(m['\u0070\u0065\u0061\u006B'])}% - 2px)`;
    $(d)['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = m['\u0064\u0062']['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](129979 ^ 129979) + ' dB';
  }
  function _0x42eb() {
    if ($("\u006F\u0068\u0075\u0064")) {
      const _0xfdc = S['\u0063\u0068\u0061\u0069\u006E'];
      const [txt, col] = _0xc4b85d();
      const _0x65a0de = $("\u0064\u006F\u0074");
      _0x65a0de['\u0073\u0074\u0079\u006C\u0065']['\u0062\u0061\u0063\u006B\u0067\u0072\u006F\u0075\u006E\u0064'] = col;
      _0x65a0de['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072'] = col;
      $("\u0068\u0064\u0062")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0xfdc ? _0xfdc['\u006F\u0075\u0074\u004D']['\u0064\u0062']['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](104766 ^ 104766) + ' dB' : '';
      if (!cfg['\u006D\u0069\u006E'] && cfg['\u0074\u0061\u0062'] === 'live') {
        if (_0xfdc) {
          _0x2gcg("\u0069\u006E\u0046", "\u0069\u006E\u0050", 'inDb', _0xfdc['\u0069\u006E\u004D']);
          _0x2gcg("\u006F\u0075\u0074\u0046", "\u006F\u0075\u0074\u0050", 'outDb', _0xfdc['\u006F\u0075\u0074\u004D']);
        }
        _0x2gcg('rF', 'rP', 'rDb', S['\u0072\u0065\u006D\u006F\u0074\u0065']);
        var _0xf02cf = (140935 ^ 140942) + (236329 ^ 236332);
        const m = $('outMsg');
        _0xf02cf = (721812 ^ 721812) + (622418 ^ 622420);
        m['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = txt;
        m['\u0073\u0074\u0079\u006C\u0065']['\u0063\u006F\u006C\u006F\u0072'] = col;
        _0x57314f();
        if (S['\u0063\u0068\u0061\u0074\u0053\u0074\u0061\u0072\u0074']) {
          const s = Math['\u0066\u006C\u006F\u006F\u0072']((Date['\u006E\u006F\u0077']() - S['\u0063\u0068\u0061\u0074\u0053\u0074\u0061\u0072\u0074']) / (996387 ^ 997323));
          $('chat')['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = `${Math['\u0066\u006C\u006F\u006F\u0072'](s / (204805 ^ 204857))}:${String(s % (844426 ^ 844470))['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](415815 ^ 415813, "\u0030")} · ${S['\u0063\u006F\u0075\u006E\u0074']}`;
        }
      }
    }
    requestAnimationFrame(_0x42eb);
  }
  async function _0x6_0x68f() {
    S['\u0070\u0063\u0073'] = new Set([...S['\u0070\u0063\u0073']]['\u0066\u0069\u006C\u0074\u0065\u0072'](p => p['\u0063\u006F\u006E\u006E\u0065\u0063\u0074\u0069\u006F\u006E\u0053\u0074\u0061\u0074\u0065'] !== "\u0063\u006C\u006F\u0073\u0065\u0064"));
    const _0xcg1e = [...S['\u0070\u0063\u0073']]['\u0070\u006F\u0070']();
    if (!_0xcg1e || !$("\u006F\u0068\u0075\u0064")) return;
    try {
      const _0xb337bg = await _0xcg1e['\u0067\u0065\u0074\u0053\u0074\u0061\u0074\u0073'](),
        _0x3c5dbd = performance['\u006E\u006F\u0077']();
      let _0x8_0x487,
        _0xg_0xc32,
        _0x44732b = 323557 ^ 323557,
        _0x9_0xd17 = 406014 ^ 406014,
        _0xa9f3b = 475938 ^ 475938,
        _0x69318f = 921357 ^ 921357;
      _0xb337bg['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](s => {
        if (s['\u0074\u0079\u0070\u0065'] === "\u0063\u0061\u006E\u0064\u0069\u0064\u0061\u0074\u0065\u002D\u0070\u0061\u0069\u0072" && (s['\u006E\u006F\u006D\u0069\u006E\u0061\u0074\u0065\u0064'] || s['\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064']) && s['\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u0052\u006F\u0075\u006E\u0064\u0054\u0072\u0069\u0070\u0054\u0069\u006D\u0065'] != null) _0x8_0x487 = s['\u0063\u0075\u0072\u0072\u0065\u006E\u0074\u0052\u006F\u0075\u006E\u0064\u0054\u0072\u0069\u0070\u0054\u0069\u006D\u0065'] * (827336 ^ 826400);
        if (s['\u0074\u0079\u0070\u0065'] === 'inbound-rtp') {
          _0x44732b += s['\u0070\u0061\u0063\u006B\u0065\u0074\u0073\u004C\u006F\u0073\u0074'] || 838770 ^ 838770;
          _0x9_0xd17 += s['\u0070\u0061\u0063\u006B\u0065\u0074\u0073\u0052\u0065\u0063\u0065\u0069\u0076\u0065\u0064'] || 189314 ^ 189314;
          _0x69318f += s['\u0062\u0079\u0074\u0065\u0073\u0052\u0065\u0063\u0065\u0069\u0076\u0065\u0064'] || 999120 ^ 999120;
          if (s['\u006B\u0069\u006E\u0064'] === 'audio' && s['\u006A\u0069\u0074\u0074\u0065\u0072'] != null) _0xg_0xc32 = s['\u006A\u0069\u0074\u0074\u0065\u0072'] * (581050 ^ 581202);
        }
        if (s['\u0074\u0079\u0070\u0065'] === 'outbound-rtp') _0xa9f3b += s['\u0062\u0079\u0074\u0065\u0073\u0053\u0065\u006E\u0074'] || 758597 ^ 758597;
      });
      var _0x61f4f = (625342 ^ 625335) + (351724 ^ 351725);
      const p = S['\u0070\u0072\u0065\u0076'];
      _0x61f4f = "kdkkko";
      if (p['\u0074']) {
        const _0x23af = (_0x3c5dbd - p['\u0074']) / (252440 ^ 252400);
        $('up')['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = ((_0xa9f3b - p['\u0075\u0070']) * (989782 ^ 989790) / (574651 ^ 575315) / _0x23af)['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](940464 ^ 940464) + ' kbps';
        $("\u0064\u006F\u0077\u006E")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = ((_0x69318f - p['\u0064\u006F\u0077\u006E']) * (437768 ^ 437760) / (419474 ^ 419194) / _0x23af)['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](101941 ^ 101941) + "\u0020\u006B\u0062\u0070\u0073";
      }
      S['\u0070\u0072\u0065\u0076'] = {
        '\u0074': _0x3c5dbd,
        '\u0075\u0070': _0xa9f3b,
        "down": _0x69318f
      };
      if (_0x8_0x487 != null) $('rtt')['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0x8_0x487['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](622273 ^ 622273) + "\u0020\u006D\u0073";
      if (_0xg_0xc32 != null) $("\u006A\u0069\u0074")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0xg_0xc32['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](182352 ^ 182352) + "\u0020\u006D\u0073";
      $("\u006C\u006F\u0073\u0073")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = _0x9_0xd17 + _0x44732b ? (_0x44732b / (_0x9_0xd17 + _0x44732b) * (786846 ^ 786938))['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](557895 ^ 557894) + "\u0025" : '0%';
    } catch (_) {}
    if (S['\u0064\u0065\u0076\u004C\u0061\u0062\u0065\u006C'] && $("\u0064\u0065\u0076")) $('dev')['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074'] = "\uD83C\uDFA4\u0020" + S['\u0064\u0065\u0076\u004C\u0061\u0062\u0065\u006C']['\u0073\u006C\u0069\u0063\u0065'](818390 ^ 818390, 303164 ^ 303134) + "\u0020\u00B7\u0020\u0041\u006C\u0074\u002B\u004D\u0020\u006D\u0075\u0074\u0065\u0073";
  }
  const start = () => {
    _0x65f1ca();
    requestAnimationFrame(_0x42eb);
    setInterval(_0x6_0x68f, 153292 ^ 152868);
  };
  if (document['\u0072\u0065\u0061\u0064\u0079\u0053\u0074\u0061\u0074\u0065'] === 'loading') document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0044\u004F\u004D\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u004C\u006F\u0061\u0064\u0065\u0064", start);else start();
})();
