var cr = {
    plugins_: {},
    behaviors: {}
};
"function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(t) {
        return t.__proto__
    } : function(t) {
        return t.constructor.prototype
    }),
    function() {
        function t(t, e) {
            this.x = t, this.y = e, cr.seal(this)
        }

        function e(t, e, i, s) {
            this.set(t, e, i, s), cr.seal(this)
        }

        function i() {
            this.tlx = 0, this.tly = 0, this.trx = 0, this.try_ = 0, this.brx = 0, this.bry = 0, this.blx = 0, this.bly = 0, cr.seal(this)
        }
        cr.logexport = function(t) {
            window.console && window.console.log && window.console.log(t)
        }, cr.logerror = function(t) {
            window.console && window.console.error && window.console.error(t)
        }, cr.seal = function(t) {
            return t
        }, cr.freeze = function(t) {
            return t
        }, cr.is_undefined = function(t) {
            return void 0 === t
        }, cr.is_number = function(t) {
            return "number" == typeof t
        }, cr.is_string = function(t) {
            return "string" == typeof t
        }, cr.isPOT = function(t) {
            return 0 < t && 0 == (t - 1 & t)
        }, cr.nextHighestPowerOfTwo = function(t) {
            --t;
            for (var e = 1; e < 32; e <<= 1) t |= t >> e;
            return t + 1
        }, cr.abs = function(t) {
            return t < 0 ? -t : t
        }, cr.max = function(t, e) {
            return e < t ? t : e
        }, cr.min = function(t, e) {
            return t < e ? t : e
        }, cr.PI = Math.PI, cr.round = function(t) {
            return t + .5 | 0
        }, cr.floor = function(t) {
            return 0 <= t ? 0 | t : (0 | t) - 1
        }, cr.ceil = function(t) {
            var e = 0 | t;
            return e === t ? e : 1 + e
        }, t.prototype.offset = function(t, e) {
            return this.x += t, this.y += e, this
        }, t.prototype.mul = function(t, e) {
            return this.x *= t, this.y *= e, this
        }, cr.vector2 = t, cr.segments_intersect = function(t, e, i, s, n, r, a, o) {
            var h, c, l, u, p, d;
            if (l = n < a ? (u = n, a) : (u = a, n), (t < i ? (h = t, i) : (h = i, t)) < u || l < h) return !1;
            if (p = r < o ? (d = r, o) : (d = o, r), (e < s ? (c = e, s) : (c = s, e)) < d || p < c) return !1;
            var f = n - t + a - i,
                g = r - e + o - s,
                m = i - t,
                y = s - e,
                _ = a - n,
                v = o - r,
                b = cr.abs(y * _ - v * m),
                w = _ * g - v * f;
            if (cr.abs(w) > b) return !1;
            var x = m * g - y * f;
            return cr.abs(x) <= b
        }, e.prototype.set = function(t, e, i, s) {
            this.left = t, this.top = e, this.right = i, this.bottom = s
        }, e.prototype.copy = function(t) {
            this.left = t.left, this.top = t.top, this.right = t.right, this.bottom = t.bottom
        }, e.prototype.width = function() {
            return this.right - this.left
        }, e.prototype.height = function() {
            return this.bottom - this.top
        }, e.prototype.offset = function(t, e) {
            return this.left += t, this.top += e, this.right += t, this.bottom += e, this
        }, e.prototype.normalize = function() {
            var t = 0;
            this.left > this.right && (t = this.left, this.left = this.right, this.right = t), this.top > this.bottom && (t = this.top, this.top = this.bottom, this.bottom = t)
        }, e.prototype.intersects_rect = function(t) {
            return !(t.right < this.left || t.bottom < this.top || t.left > this.right || t.top > this.bottom)
        }, e.prototype.intersects_rect_off = function(t, e, i) {
            return !(t.right + e < this.left || t.bottom + i < this.top || t.left + e > this.right || t.top + i > this.bottom)
        }, e.prototype.contains_pt = function(t, e) {
            return t >= this.left && t <= this.right && e >= this.top && e <= this.bottom
        }, e.prototype.equals = function(t) {
            return this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom
        }, cr.rect = e, i.prototype.set_from_rect = function(t) {
            this.tlx = t.left, this.tly = t.top, this.trx = t.right, this.try_ = t.top, this.brx = t.right, this.bry = t.bottom, this.blx = t.left, this.bly = t.bottom
        }, i.prototype.set_from_rotated_rect = function(t, e) {
            if (0 === e) this.set_from_rect(t);
            else {
                var i = Math.sin(e),
                    s = Math.cos(e),
                    n = t.left * i,
                    r = t.top * i,
                    a = t.right * i,
                    o = t.bottom * i,
                    h = t.left * s,
                    c = t.top * s,
                    l = t.right * s,
                    u = t.bottom * s;
                this.tlx = h - r, this.tly = c + n, this.trx = l - r, this.try_ = c + a, this.brx = l - o, this.bry = u + a, this.blx = h - o, this.bly = u + n
            }
        }, i.prototype.offset = function(t, e) {
            return this.tlx += t, this.tly += e, this.trx += t, this.try_ += e, this.brx += t, this.bry += e, this.blx += t, this.bly += e, this
        };
        var n = 0,
            r = 0;

        function s(t, e, i, s) {
            r = t < e ? i < s ? (n = t < i ? t : i, s < e ? e : s) : (n = t < s ? t : s, i < e ? e : i) : i < s ? (n = e < i ? e : i, s < t ? t : s) : (n = e < s ? e : s, i < t ? t : i)
        }
        i.prototype.bounding_box = function(t) {
            s(this.tlx, this.trx, this.brx, this.blx), t.left = n, t.right = r, s(this.tly, this.try_, this.bry, this.bly), t.top = n, t.bottom = r
        }, i.prototype.contains_pt = function(t, e) {
            var i, s, n, r = this.tlx,
                a = this.tly,
                o = this.trx - r,
                h = this.try_ - a,
                c = this.brx - r,
                l = this.bry - a,
                u = t - r,
                p = e - a,
                d = c * c + l * l,
                f = c * u + l * p,
                g = 1 / ((i = o * o + h * h) * d - (s = o * c + h * l) * s),
                m = (d * (n = o * u + h * p) - s * f) * g,
                y = (i * f - s * n) * g;
            return 0 <= m && 0 < y && m + y < 1 || (y = ((i = (o = this.blx - r) * o + (h = this.bly - a) * h) * f - (s = o * c + h * l) * (n = o * u + h * p)) * (g = 1 / (i * d - s * s)), 0 <= (m = (d * n - s * f) * g) && 0 < y && m + y < 1)
        }, i.prototype.at = function(t, e) {
            if (e) switch (t) {
                case 0:
                    return this.tlx;
                case 1:
                    return this.trx;
                case 2:
                    return this.brx;
                case 3:
                    return this.blx;
                case 4:
                default:
                    return this.tlx
            } else switch (t) {
                case 0:
                    return this.tly;
                case 1:
                    return this.try_;
                case 2:
                    return this.bry;
                case 3:
                    return this.bly;
                case 4:
                default:
                    return this.tly
            }
        }, i.prototype.midX = function() {
            return (this.tlx + this.trx + this.brx + this.blx) / 4
        }, i.prototype.midY = function() {
            return (this.tly + this.try_ + this.bry + this.bly) / 4
        }, i.prototype.intersects_segment = function(t, e, i, s) {
            if (this.contains_pt(t, e) || this.contains_pt(i, s)) return !0;
            var n, r, a, o, h;
            for (h = 0; h < 4; h++)
                if (n = this.at(h, !0), r = this.at(h, !1), a = this.at(h + 1, !0), o = this.at(h + 1, !1), cr.segments_intersect(t, e, i, s, n, r, a, o)) return !0;
            return !1
        }, i.prototype.intersects_quad = function(t) {
            var e, i, s, n, r, a, o, h, c, l, u = t.midX(),
                p = t.midY();
            if (this.contains_pt(u, p)) return !0;
            if (u = this.midX(), p = this.midY(), t.contains_pt(u, p)) return !0;
            for (c = 0; c < 4; c++)
                for (l = 0; l < 4; l++)
                    if (e = this.at(c, !0), i = this.at(c, !1), s = this.at(c + 1, !0), n = this.at(c + 1, !1), r = t.at(l, !0), a = t.at(l, !1), o = t.at(l + 1, !0), h = t.at(l + 1, !1), cr.segments_intersect(e, i, s, n, r, a, o, h)) return !0;
            return !1
        }, cr.quad = i, cr.RGB = function(t, e, i) {
            return Math.max(Math.min(t, 255), 0) | Math.max(Math.min(e, 255), 0) << 8 | Math.max(Math.min(i, 255), 0) << 16
        }, cr.GetRValue = function(t) {
            return 255 & t
        }, cr.GetGValue = function(t) {
            return (65280 & t) >> 8
        }, cr.GetBValue = function(t) {
            return (16711680 & t) >> 16
        }, cr.shallowCopy = function(t, e, i) {
            var s;
            for (s in e) e.hasOwnProperty(s) && (t[s] = e[s]);
            return t
        }, cr.arrayRemove = function(t, e) {
            var i, s;
            if (!((e = cr.floor(e)) < 0 || e >= t.length)) {
                for (i = e, s = t.length - 1; i < s; i++) t[i] = t[i + 1];
                cr.truncateArray(t, s)
            }
        }, cr.truncateArray = function(t, e) {
            t.length = e
        }, cr.clearArray = function(t) {
            cr.truncateArray(t, 0)
        }, cr.shallowAssignArray = function(t, e) {
            var i, s;
            for (cr.clearArray(t), i = 0, s = e.length; i < s; ++i) t[i] = e[i]
        }, cr.appendArray = function(t, e) {
            t.push.apply(t, e)
        }, cr.fastIndexOf = function(t, e) {
            var i, s;
            for (i = 0, s = t.length; i < s; ++i)
                if (t[i] === e) return i;
            return -1
        }, cr.arrayFindRemove = function(t, e) {
            var i = cr.fastIndexOf(t, e); - 1 !== i && cr.arrayRemove(t, i)
        }, cr.clamp = function(t, e, i) {
            return t < e ? e : i < t ? i : t
        }, cr.to_radians = function(t) {
            return t / (180 / cr.PI)
        }, cr.to_degrees = function(t) {
            return t * (180 / cr.PI)
        }, cr.clamp_angle_degrees = function(t) {
            return (t %= 360) < 0 && (t += 360), t
        }, cr.clamp_angle = function(t) {
            return (t %= 2 * cr.PI) < 0 && (t += 2 * cr.PI), t
        }, cr.to_clamped_degrees = function(t) {
            return cr.clamp_angle_degrees(cr.to_degrees(t))
        }, cr.to_clamped_radians = function(t) {
            return cr.clamp_angle(cr.to_radians(t))
        }, cr.angleTo = function(t, e, i, s) {
            var n = i - t,
                r = s - e;
            return Math.atan2(r, n)
        }, cr.angleDiff = function(t, e) {
            if (t === e) return 0;
            var i = Math.sin(t),
                s = Math.cos(t),
                n = i * Math.sin(e) + s * Math.cos(e);
            return 1 <= n ? 0 : n <= -1 ? cr.PI : Math.acos(n)
        }, cr.angleRotate = function(t, e, i) {
            var s = Math.sin(t),
                n = Math.cos(t),
                r = Math.sin(e),
                a = Math.cos(e);
            return Math.acos(s * r + n * a) > i ? 0 < n * r - s * a ? cr.clamp_angle(t + i) : cr.clamp_angle(t - i) : cr.clamp_angle(e)
        }, cr.angleClockwise = function(t, e) {
            var i = Math.sin(t);
            return Math.cos(t) * Math.sin(e) - i * Math.cos(e) <= 0
        }, cr.rotatePtAround = function(t, e, i, s, n, r) {
            if (0 === i) return r ? t : e;
            var a = Math.sin(i),
                o = Math.cos(i),
                h = (t -= s) * a;
            return t = t * o - (e -= n) * a, e = e * o + h, t += s, e += n, r ? t : e
        }, cr.distanceTo = function(t, e, i, s) {
            var n = i - t,
                r = s - e;
            return Math.sqrt(n * n + r * r)
        }, cr.xor = function(t, e) {
            return !t != !e
        }, cr.lerp = function(t, e, i) {
            return t + (e - t) * i
        }, cr.unlerp = function(t, e, i) {
            return t === e ? 0 : (i - t) / (e - t)
        }, cr.anglelerp = function(t, e, i) {
            var s = cr.angleDiff(t, e);
            return cr.angleClockwise(e, t) ? t + s * i : t - s * i
        }, cr.qarp = function(t, e, i, s) {
            return cr.lerp(cr.lerp(t, e, s), cr.lerp(e, i, s), s)
        }, cr.cubic = function(t, e, i, s, n) {
            return cr.lerp(cr.qarp(t, e, i, n), cr.qarp(e, i, s, n), n)
        }, cr.cosp = function(t, e, i) {
            return (t + e + (t - e) * Math.cos(i * Math.PI)) / 2
        }, cr.hasAnyOwnProperty = function(t) {
            var e;
            for (e in t)
                if (t.hasOwnProperty(e)) return !0;
            return !1
        }, cr.wipe = function(t) {
            var e;
            for (e in t) t.hasOwnProperty(e) && delete t[e]
        };
        var a = +new Date,
            o = (cr.performance_now = function() {
                if (void 0 !== window.performance) {
                    var t = window.performance;
                    if (void 0 !== t.now) return t.now();
                    if (void 0 !== t.webkitNow) return t.webkitNow();
                    if (void 0 !== t.mozNow) return t.mozNow();
                    if (void 0 !== t.msNow) return t.msNow()
                }
                return Date.now() - a
            }, !1),
            h = !1,
            c = !1;
        "undefined" != typeof window && (o = !(/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && /safari/i.test(navigator.userAgent), h = /(iphone|ipod|ipad)/i.test(navigator.userAgent), c = window.c2ejecta);
        var l = !o && !c && !h && "undefined" != typeof Set && void 0 !== Set.prototype.forEach;

        function u() {
            this.s = null, this.items = null, this.item_count = 0, l && (this.s = new Set), this.values_cache = [], this.cache_valid = !0, cr.seal(this)
        }
        u.prototype.contains = function(t) {
            return !this.isEmpty() && (l ? this.s.has(t) : this.items && this.items.hasOwnProperty(t))
        }, u.prototype.add = function(t) {
            if (l) this.s.has(t) || (this.s.add(t), this.cache_valid = !1);
            else {
                var e = t.toString(),
                    i = this.items;
                i ? i.hasOwnProperty(e) || (i[e] = t, this.item_count++, this.cache_valid = !1) : (this.items = {}, this.items[e] = t, this.item_count = 1, this.cache_valid = !1)
            }
        }, u.prototype.remove = function(t) {
            if (!this.isEmpty())
                if (l) this.s.has(t) && (this.s.delete(t), this.cache_valid = !1);
                else if (this.items) {
                var e = t.toString(),
                    i = this.items;
                i.hasOwnProperty(e) && (delete i[e], this.item_count--, this.cache_valid = !1)
            }
        }, u.prototype.clear = function() {
            this.isEmpty() || (l ? this.s.clear() : (this.items = null, this.item_count = 0), cr.clearArray(this.values_cache), this.cache_valid = !0)
        }, u.prototype.isEmpty = function() {
            return 0 === this.count()
        }, u.prototype.count = function() {
            return l ? this.s.size : this.item_count
        };
        var p = null,
            d = 0;

        function f(t) {
            p[d++] = t
        }
        u.prototype.update_cache = function() {
            if (!this.cache_valid) {
                if (l) cr.clearArray(this.values_cache), p = this.values_cache, d = 0, this.s.forEach(f), p = null, d = 0;
                else {
                    var t = this.values_cache;
                    cr.clearArray(t);
                    var e, i = 0,
                        s = this.items;
                    if (s)
                        for (e in s) s.hasOwnProperty(e) && (t[i++] = s[e])
                }
                this.cache_valid = !0
            }
        }, u.prototype.valuesRef = function() {
            return this.update_cache(), this.values_cache
        }, cr.ObjectSet = u;
        var g = new cr.ObjectSet;

        function m() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0, cr.seal(this)
        }

        function y(t) {
            this.pts_cache = [], this.bboxLeft = 0, this.bboxTop = 0, this.bboxRight = 0, this.bboxBottom = 0, this.convexpolys = null, this.set_pts(t), cr.seal(this)
        }

        function _(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }

        function v(t, e) {
            this.cellwidth = t, this.cellheight = e, this.cells = {}
        }
        cr.removeArrayDuplicates = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; ++e) g.add(t[e]);
            cr.shallowAssignArray(t, g.valuesRef()), g.clear()
        }, cr.arrayRemoveAllFromObjectSet = function(t, e) {
            l ? cr.arrayRemoveAll_set(t, e.s) : cr.arrayRemoveAll_arr(t, e.valuesRef())
        }, cr.arrayRemoveAll_set = function(t, e) {
            var i, s, n, r;
            for (s = i = 0, n = t.length; i < n; ++i) r = t[i], e.has(r) || (t[s++] = r);
            cr.truncateArray(t, s)
        }, cr.arrayRemoveAll_arr = function(t, e) {
            var i, s, n, r;
            for (s = i = 0, n = t.length; i < n; ++i) r = t[i], -1 === cr.fastIndexOf(e, r) && (t[s++] = r);
            cr.truncateArray(t, s)
        }, m.prototype.add = function(t) {
            this.y = t - this.c, this.t = this.sum + this.y, this.c = this.t - this.sum - this.y, this.sum = this.t
        }, m.prototype.reset = function() {
            this.c = 0, this.y = 0, this.t = 0, this.sum = 0
        }, cr.KahanAdder = m, cr.regexp_escape = function(t) {
            return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        }, y.prototype.set_pts = function(t) {
            this.pts_array = t, this.pts_count = t.length / 2, this.pts_cache.length = t.length, this.cache_width = -1, this.cache_height = -1, this.cache_angle = 0
        }, y.prototype.is_empty = function() {
            return !this.pts_array.length
        }, y.prototype.update_bbox = function() {
            for (var t, e, i, s = this.pts_cache, n = s[0], r = n, a = s[1], o = a, h = 1, c = this.pts_count; h < c; ++h)(t = s[i = 2 * h]) < n && (n = t), r < t && (r = t), (e = s[1 + i]) < a && (a = e), o < e && (o = e);
            this.bboxLeft = n, this.bboxRight = r, this.bboxTop = a, this.bboxBottom = o
        }, y.prototype.set_from_rect = function(t, e, i) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var s = this.pts_cache;
            s[0] = t.left - e, s[1] = t.top - i, s[2] = t.right - e, s[3] = t.top - i, s[4] = t.right - e, s[5] = t.bottom - i, s[6] = t.left - e, s[7] = t.bottom - i, this.cache_width = t.right - t.left, this.cache_height = t.bottom - t.top, this.update_bbox()
        }, y.prototype.set_from_quad = function(t, e, i, s, n) {
            this.pts_cache.length = 8, this.pts_count = 4;
            var r = this.pts_cache;
            r[0] = t.tlx - e, r[1] = t.tly - i, r[2] = t.trx - e, r[3] = t.try_ - i, r[4] = t.brx - e, r[5] = t.bry - i, r[6] = t.blx - e, r[7] = t.bly - i, this.cache_width = s, this.cache_height = n, this.update_bbox()
        }, y.prototype.set_from_poly = function(t) {
            this.pts_count = t.pts_count, cr.shallowAssignArray(this.pts_cache, t.pts_cache), this.bboxLeft = t.bboxLeft, this.bboxTop, t.bboxTop, this.bboxRight = t.bboxRight, this.bboxBottom = t.bboxBottom
        }, y.prototype.cache_poly = function(t, e, i) {
            if (this.cache_width !== t || this.cache_height !== e || this.cache_angle !== i) {
                var s, n, r, a, o, h;
                this.cache_width = t, this.cache_height = e, this.cache_angle = i;
                var c = 0,
                    l = 1,
                    u = this.pts_array,
                    p = this.pts_cache;
                for (0 !== i && (c = Math.sin(i), l = Math.cos(i)), s = 0, a = this.pts_count; s < a; s++) r = 1 + (n = 2 * s), o = u[n] * t, h = u[r] * e, p[n] = o * l - h * c, p[r] = h * l + o * c;
                this.update_bbox()
            }
        }, y.prototype.contains_pt = function(t, e) {
            var i = this.pts_cache;
            if (t === i[0] && e === i[1]) return !0;
            var s, n, r, a, o, h, c, l = this.pts_count,
                u = this.bboxLeft - 110,
                p = this.bboxTop - 101,
                d = this.bboxRight + 131,
                f = this.bboxBottom + 120,
                g = 0,
                m = 0;
            for (s = 0; s < l; s++) r = (s + 1) % l * 2, a = i[n = 2 * s], o = i[1 + n], h = i[r], c = i[1 + r], cr.segments_intersect(u, p, t, e, a, o, h, c) && g++, cr.segments_intersect(d, f, t, e, a, o, h, c) && m++;
            return g % 2 == 1 || m % 2 == 1
        }, y.prototype.intersects_poly = function(t, e, i) {
            var s, n, r, a, o, h, c, l, u, p, d, f, g, m, y, _, v = t.pts_cache,
                b = this.pts_cache;
            if (this.contains_pt(v[0] + e, v[1] + i)) return !0;
            if (t.contains_pt(b[0] - e, b[1] - i)) return !0;
            for (s = 0, a = this.pts_count; s < a; s++)
                for (r = (s + 1) % a * 2, u = b[n = 2 * s], p = b[1 + n], d = b[r], f = b[1 + r], o = 0, l = t.pts_count; o < l; o++)
                    if (c = (o + 1) % l * 2, g = v[h = 2 * o] + e, m = v[1 + h] + i, y = v[c] + e, _ = v[1 + c] + i, cr.segments_intersect(u, p, d, f, g, m, y, _)) return !0;
            return !1
        }, y.prototype.intersects_segment = function(t, e, i, s, n, r) {
            var a, o, h, c, l, u, p, d, f = this.pts_cache;
            if (this.contains_pt(i - t, s - e)) return !0;
            for (a = 0, o = this.pts_count; a < o; a++)
                if (c = (a + 1) % o * 2, l = f[h = 2 * a] + t, u = f[1 + h] + e, p = f[c] + t, d = f[1 + c] + e, cr.segments_intersect(i, s, n, r, l, u, p, d)) return !0;
            return !1
        }, y.prototype.mirror = function(t) {
            var e, i, s;
            for (e = 0, i = this.pts_count; e < i; ++e) s = 2 * e, this.pts_cache[s] = 2 * t - this.pts_cache[s]
        }, y.prototype.flip = function(t) {
            var e, i, s;
            for (e = 0, i = this.pts_count; e < i; ++e) s = 2 * e + 1, this.pts_cache[s] = 2 * t - this.pts_cache[s]
        }, y.prototype.diag = function() {
            var t, e, i, s, n;
            for (t = 0, e = this.pts_count; t < e; ++t) s = 1 + (i = 2 * t), n = this.pts_cache[i], this.pts_cache[i] = this.pts_cache[s], this.pts_cache[s] = n
        }, cr.CollisionPoly = y, _.prototype.totalCellCount = 0, _.prototype.getCell = function(t, e, i) {
            var s, n = this.cells[t];
            return n ? (s = n[e]) || (i ? (s = w(this, t, e), this.cells[t][e] = s) : null) : i ? (s = w(this, t, e), this.cells[t] = {}, this.cells[t][e] = s) : null
        }, _.prototype.XToCell = function(t) {
            return cr.floor(t / this.cellwidth)
        }, _.prototype.YToCell = function(t) {
            return cr.floor(t / this.cellheight)
        }, _.prototype.update = function(t, e, i) {
            var s, n, r, a, o;
            if (e)
                for (s = e.left, n = e.right; s <= n; ++s)
                    for (r = e.top, a = e.bottom; r <= a; ++r) i && i.contains_pt(s, r) || (o = this.getCell(s, r, !1)) && (o.remove(t), o.isEmpty() && (x(o), this.cells[s][r] = null));
            if (i)
                for (s = i.left, n = i.right; s <= n; ++s)
                    for (r = i.top, a = i.bottom; r <= a; ++r) e && e.contains_pt(s, r) || this.getCell(s, r, !0).insert(t)
        }, _.prototype.queryRange = function(t, e) {
            var i, s, n, r, a, o;
            for (i = this.XToCell(t.left), n = this.YToCell(t.top), s = this.XToCell(t.right), a = this.YToCell(t.bottom); i <= s; ++i)
                for (r = n; r <= a; ++r)(o = this.getCell(i, r, !1)) && o.dump(e)
        }, cr.SparseGrid = _, v.prototype.totalCellCount = 0, v.prototype.getCell = function(t, e, i) {
            var s, n = this.cells[t];
            return n ? (s = n[e]) || (i ? (s = C(this, t, e), this.cells[t][e] = s) : null) : i ? (s = C(this, t, e), this.cells[t] = {}, this.cells[t][e] = s) : null
        }, v.prototype.XToCell = function(t) {
            return cr.floor(t / this.cellwidth)
        }, v.prototype.YToCell = function(t) {
            return cr.floor(t / this.cellheight)
        }, v.prototype.update = function(t, e, i) {
            var s, n, r, a, o;
            if (e)
                for (s = e.left, n = e.right; s <= n; ++s)
                    for (r = e.top, a = e.bottom; r <= a; ++r) i && i.contains_pt(s, r) || (o = this.getCell(s, r, !1)) && (o.remove(t), o.isEmpty() && (A(o), this.cells[s][r] = null));
            if (i)
                for (s = i.left, n = i.right; s <= n; ++s)
                    for (r = i.top, a = i.bottom; r <= a; ++r) e && e.contains_pt(s, r) || this.getCell(s, r, !0).insert(t)
        }, v.prototype.queryRange = function(t, e, i, s, n) {
            var r, a, o, h, c, l;
            for (r = this.XToCell(t), o = this.YToCell(e), a = this.XToCell(i), c = this.YToCell(s); r <= a; ++r)
                for (h = o; h <= c; ++h)(l = this.getCell(r, h, !1)) && l.dump(n)
        }, v.prototype.markRangeChanged = function(t) {
            var e, i, s, n, r, a;
            for (e = t.left, s = t.top, i = t.right, r = t.bottom; e <= i; ++e)
                for (n = s; n <= r; ++n)(a = this.getCell(e, n, !1)) && (a.is_sorted = !1)
        }, cr.RenderGrid = v;
        var b = [];

        function w(t, e, i) {
            var s;
            return _.prototype.totalCellCount++, b.length ? ((s = b.pop()).grid = t, s.x = e, s.y = i, s) : new cr.GridCell(t, e, i)
        }

        function x(t) {
            _.prototype.totalCellCount--, t.objects.clear(), b.length < 1e3 && b.push(t)
        }

        function S(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = new cr.ObjectSet
        }
        S.prototype.isEmpty = function() {
            return this.objects.isEmpty()
        }, S.prototype.insert = function(t) {
            this.objects.add(t)
        }, S.prototype.remove = function(t) {
            this.objects.remove(t)
        }, S.prototype.dump = function(t) {
            cr.appendArray(t, this.objects.valuesRef())
        }, cr.GridCell = S;
        var T = [];

        function C(t, e, i) {
            var s;
            return v.prototype.totalCellCount++, T.length ? ((s = T.pop()).grid = t, s.x = e, s.y = i, s) : new cr.RenderCell(t, e, i)
        }

        function A(t) {
            v.prototype.totalCellCount--, t.reset(), T.length < 1e3 && T.push(t)
        }

        function P(t, e, i) {
            this.grid = t, this.x = e, this.y = i, this.objects = [], this.is_sorted = !0, this.pending_removal = new cr.ObjectSet, this.any_pending_removal = !1
        }

        function O(t, e) {
            return t.zindex - e.zindex
        }
        P.prototype.isEmpty = function() {
            return !this.objects.length || !(this.objects.length > this.pending_removal.count()) && (this.flush_pending(), !0)
        }, P.prototype.insert = function(t) {
            if (this.pending_removal.contains(t)) return this.pending_removal.remove(t), void(this.pending_removal.isEmpty() && (this.any_pending_removal = !1));
            this.objects.length ? (this.objects[this.objects.length - 1].get_zindex() > t.get_zindex() && (this.is_sorted = !1), this.objects.push(t)) : (this.objects.push(t), this.is_sorted = !0)
        }, P.prototype.remove = function(t) {
            this.pending_removal.add(t), this.any_pending_removal = !0, 30 <= this.pending_removal.count() && this.flush_pending()
        }, P.prototype.flush_pending = function() {
            this.any_pending_removal && (this.pending_removal.count() !== this.objects.length ? (cr.arrayRemoveAllFromObjectSet(this.objects, this.pending_removal), this.pending_removal.clear(), this.any_pending_removal = !1) : this.reset())
        }, P.prototype.ensure_sorted = function() {
            this.is_sorted || (this.objects.sort(O), this.is_sorted = !0)
        }, P.prototype.reset = function() {
            cr.clearArray(this.objects), this.is_sorted = !0, this.pending_removal.clear(), this.any_pending_removal = !1
        }, P.prototype.dump = function(t) {
            this.flush_pending(), this.ensure_sorted(), this.objects.length && t.push(this.objects)
        }, cr.RenderCell = P;
        var k = ["lighter", "xor", "copy", "destination-over", "source-in", "destination-in", "source-out", "destination-out", "source-atop", "destination-atop"];
        cr.effectToCompositeOp = function(t) {
            return t <= 0 || 11 <= t ? "source-over" : k[t - 1]
        }, cr.setGLBlend = function(t, e, i) {
            if (i) switch (t.srcBlend = i.ONE, t.destBlend = i.ONE_MINUS_SRC_ALPHA, e) {
                case 1:
                    t.srcBlend = i.ONE, t.destBlend = i.ONE;
                    break;
                case 2:
                    break;
                case 3:
                    t.srcBlend = i.ONE, t.destBlend = i.ZERO;
                    break;
                case 4:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ONE;
                    break;
                case 5:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 6:
                    t.srcBlend = i.ZERO, t.destBlend = i.SRC_ALPHA;
                    break;
                case 7:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.ZERO;
                    break;
                case 8:
                    t.srcBlend = i.ZERO, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 9:
                    t.srcBlend = i.DST_ALPHA, t.destBlend = i.ONE_MINUS_SRC_ALPHA;
                    break;
                case 10:
                    t.srcBlend = i.ONE_MINUS_DST_ALPHA, t.destBlend = i.SRC_ALPHA
            }
        }, cr.round6dp = function(t) {
            return Math.round(1e6 * t) / 1e6
        }, cr.equals_nocase = function(t, e) {
            return "string" == typeof t && "string" == typeof e && (t.length === e.length && (t === e || t.toLowerCase() === e.toLowerCase()))
        }, cr.isCanvasInputEvent = function(t) {
            var e = t.target;
            return !e || (e === document || e === window || (!(!document || !document.body || e !== document.body) || !!cr.equals_nocase(e.tagName, "canvas")))
        }
    }();
var MatrixArray = "undefined" != typeof Float32Array ? Float32Array : Array,
    glMatrixArrayType = MatrixArray,
    vec3 = {},
    mat3 = {},
    mat4 = {},
    quat4 = {};

function trim(t) {
    return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
}
vec3.create = function(t) {
        var e = new MatrixArray(3);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2]), e
    }, vec3.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
    }, vec3.add = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] + e[0], i[1] = t[1] + e[1], i[2] = t[2] + e[2], i) : (t[0] += e[0], t[1] += e[1], t[2] += e[2], t)
    }, vec3.subtract = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] - e[0], i[1] = t[1] - e[1], i[2] = t[2] - e[2], i) : (t[0] -= e[0], t[1] -= e[1], t[2] -= e[2], t)
    }, vec3.negate = function(t, e) {
        return e || (e = t), e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e
    }, vec3.scale = function(t, e, i) {
        return i && t !== i ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e, i) : (t[0] *= e, t[1] *= e, t[2] *= e, t)
    }, vec3.normalize = function(t, e) {
        e || (e = t);
        var i = t[0],
            s = t[1],
            n = t[2],
            r = Math.sqrt(i * i + s * s + n * n);
        return r ? 1 === r ? (e[0] = i, e[1] = s, e[2] = n) : (r = 1 / r, e[0] = i * r, e[1] = s * r, e[2] = n * r) : (e[0] = 0, e[1] = 0, e[2] = 0), e
    }, vec3.cross = function(t, e, i) {
        i || (i = t);
        var s = t[0],
            n = t[1],
            r = (t = t[2], e[0]),
            a = e[1];
        e = e[2];
        return i[0] = n * e - t * a, i[1] = t * r - s * e, i[2] = s * a - n * r, i
    }, vec3.length = function(t) {
        var e = t[0],
            i = t[1];
        t = t[2];
        return Math.sqrt(e * e + i * i + t * t)
    }, vec3.dot = function(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    }, vec3.direction = function(t, e, i) {
        i || (i = t);
        var s = t[0] - e[0],
            n = t[1] - e[1];
        t = t[2] - e[2];
        return (e = Math.sqrt(s * s + n * n + t * t)) ? (e = 1 / e, i[0] = s * e, i[1] = n * e, i[2] = t * e) : (i[0] = 0, i[1] = 0, i[2] = 0), i
    }, vec3.lerp = function(t, e, i, s) {
        return s || (s = t), s[0] = t[0] + i * (e[0] - t[0]), s[1] = t[1] + i * (e[1] - t[1]), s[2] = t[2] + i * (e[2] - t[2]), s
    }, vec3.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + "]"
    }, mat3.create = function(t) {
        var e = new MatrixArray(9);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8]), e
    }, mat3.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e
    }, mat3.identity = function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
    }, mat3.transpose = function(t, e) {
        if (e && t !== e) return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], e;
        var i = t[1],
            s = t[2],
            n = t[5];
        return t[1] = t[3], t[2] = t[6], t[3] = i, t[5] = t[7], t[6] = s, t[7] = n, t
    }, mat3.toMat4 = function(t, e) {
        return e || (e = mat4.create()), e[15] = 1, e[14] = 0, e[13] = 0, e[12] = 0, e[11] = 0, e[10] = t[8], e[9] = t[7], e[8] = t[6], e[7] = 0, e[6] = t[5], e[5] = t[4], e[4] = t[3], e[3] = 0, e[2] = t[2], e[1] = t[1], e[0] = t[0], e
    }, mat3.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + "]"
    }, mat4.create = function(t) {
        var e = new MatrixArray(16);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e
    }, mat4.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    }, mat4.identity = function(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t
    }, mat4.transpose = function(t, e) {
        if (e && t !== e) return e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15], e;
        var i = t[1],
            s = t[2],
            n = t[3],
            r = t[6],
            a = t[7],
            o = t[11];
        return t[1] = t[4], t[2] = t[8], t[3] = t[12], t[4] = i, t[6] = t[9], t[7] = t[13], t[8] = s, t[9] = r, t[11] = t[14], t[12] = n, t[13] = a, t[14] = o, t
    }, mat4.determinant = function(t) {
        var e = t[0],
            i = t[1],
            s = t[2],
            n = t[3],
            r = t[4],
            a = t[5],
            o = t[6],
            h = t[7],
            c = t[8],
            l = t[9],
            u = t[10],
            p = t[11],
            d = t[12],
            f = t[13],
            g = t[14];
        return d * l * o * n - c * f * o * n - d * a * u * n + r * f * u * n + c * a * g * n - r * l * g * n - d * l * s * h + c * f * s * h + d * i * u * h - e * f * u * h - c * i * g * h + e * l * g * h + d * a * s * p - r * f * s * p - d * i * o * p + e * f * o * p + r * i * g * p - e * a * g * p - c * a * s * (t = t[15]) + r * l * s * t + c * i * o * t - e * l * o * t - r * i * u * t + e * a * u * t
    }, mat4.inverse = function(t, e) {
        e || (e = t);
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            a = t[4],
            o = t[5],
            h = t[6],
            c = t[7],
            l = t[8],
            u = t[9],
            p = t[10],
            d = t[11],
            f = t[12],
            g = t[13],
            m = t[14],
            y = t[15],
            _ = i * o - s * a,
            v = i * h - n * a,
            b = i * c - r * a,
            w = s * h - n * o,
            x = s * c - r * o,
            S = n * c - r * h,
            T = l * g - u * f,
            C = l * m - p * f,
            A = l * y - d * f,
            P = u * m - p * g,
            O = u * y - d * g,
            k = p * y - d * m,
            E = 1 / (_ * k - v * O + b * P + w * A - x * C + S * T);
        return e[0] = (o * k - h * O + c * P) * E, e[1] = (-s * k + n * O - r * P) * E, e[2] = (g * S - m * x + y * w) * E, e[3] = (-u * S + p * x - d * w) * E, e[4] = (-a * k + h * A - c * C) * E, e[5] = (i * k - n * A + r * C) * E, e[6] = (-f * S + m * b - y * v) * E, e[7] = (l * S - p * b + d * v) * E, e[8] = (a * O - o * A + c * T) * E, e[9] = (-i * O + s * A - r * T) * E, e[10] = (f * x - g * b + y * _) * E, e[11] = (-l * x + u * b - d * _) * E, e[12] = (-a * P + o * C - h * T) * E, e[13] = (i * P - s * C + n * T) * E, e[14] = (-f * w + g * v - m * _) * E, e[15] = (l * w - u * v + p * _) * E, e
    }, mat4.toRotationMat = function(t, e) {
        return e || (e = mat4.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, mat4.toMat3 = function(t, e) {
        return e || (e = mat3.create()), e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e
    }, mat4.toInverseMat3 = function(t, e) {
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[4],
            a = t[5],
            o = t[6],
            h = t[8],
            c = t[9],
            l = t[10],
            u = l * a - o * c,
            p = -l * r + o * h,
            d = c * r - a * h,
            f = i * u + s * p + n * d;
        return f ? (f = 1 / f, e || (e = mat3.create()), e[0] = u * f, e[1] = (-l * s + n * c) * f, e[2] = (o * s - n * a) * f, e[3] = p * f, e[4] = (l * i - n * h) * f, e[5] = (-o * i + n * r) * f, e[6] = d * f, e[7] = (-c * i + s * h) * f, e[8] = (a * i - s * r) * f, e) : null
    }, mat4.multiply = function(t, e, i) {
        i || (i = t);
        var s = t[0],
            n = t[1],
            r = t[2],
            a = t[3],
            o = t[4],
            h = t[5],
            c = t[6],
            l = t[7],
            u = t[8],
            p = t[9],
            d = t[10],
            f = t[11],
            g = t[12],
            m = t[13],
            y = t[14],
            _ = (t = t[15], e[0]),
            v = e[1],
            b = e[2],
            w = e[3],
            x = e[4],
            S = e[5],
            T = e[6],
            C = e[7],
            A = e[8],
            P = e[9],
            O = e[10],
            k = e[11],
            E = e[12],
            R = e[13],
            L = e[14];
        e = e[15];
        return i[0] = _ * s + v * o + b * u + w * g, i[1] = _ * n + v * h + b * p + w * m, i[2] = _ * r + v * c + b * d + w * y, i[3] = _ * a + v * l + b * f + w * t, i[4] = x * s + S * o + T * u + C * g, i[5] = x * n + S * h + T * p + C * m, i[6] = x * r + S * c + T * d + C * y, i[7] = x * a + S * l + T * f + C * t, i[8] = A * s + P * o + O * u + k * g, i[9] = A * n + P * h + O * p + k * m, i[10] = A * r + P * c + O * d + k * y, i[11] = A * a + P * l + O * f + k * t, i[12] = E * s + R * o + L * u + e * g, i[13] = E * n + R * h + L * p + e * m, i[14] = E * r + R * c + L * d + e * y, i[15] = E * a + R * l + L * f + e * t, i
    }, mat4.multiplyVec3 = function(t, e, i) {
        i || (i = e);
        var s = e[0],
            n = e[1];
        e = e[2];
        return i[0] = t[0] * s + t[4] * n + t[8] * e + t[12], i[1] = t[1] * s + t[5] * n + t[9] * e + t[13], i[2] = t[2] * s + t[6] * n + t[10] * e + t[14], i
    }, mat4.multiplyVec4 = function(t, e, i) {
        i || (i = e);
        var s = e[0],
            n = e[1],
            r = e[2];
        e = e[3];
        return i[0] = t[0] * s + t[4] * n + t[8] * r + t[12] * e, i[1] = t[1] * s + t[5] * n + t[9] * r + t[13] * e, i[2] = t[2] * s + t[6] * n + t[10] * r + t[14] * e, i[3] = t[3] * s + t[7] * n + t[11] * r + t[15] * e, i
    }, mat4.translate = function(t, e, i) {
        var s, n, r, a, o, h, c, l, u, p, d, f, g = e[0],
            m = e[1];
        e = e[2];
        return i && t !== i ? (s = t[0], n = t[1], r = t[2], a = t[3], o = t[4], h = t[5], c = t[6], l = t[7], u = t[8], p = t[9], d = t[10], f = t[11], i[0] = s, i[1] = n, i[2] = r, i[3] = a, i[4] = o, i[5] = h, i[6] = c, i[7] = l, i[8] = u, i[9] = p, i[10] = d, i[11] = f, i[12] = s * g + o * m + u * e + t[12], i[13] = n * g + h * m + p * e + t[13], i[14] = r * g + c * m + d * e + t[14], i[15] = a * g + l * m + f * e + t[15], i) : (t[12] = t[0] * g + t[4] * m + t[8] * e + t[12], t[13] = t[1] * g + t[5] * m + t[9] * e + t[13], t[14] = t[2] * g + t[6] * m + t[10] * e + t[14], t[15] = t[3] * g + t[7] * m + t[11] * e + t[15], t)
    }, mat4.scale = function(t, e, i) {
        var s = e[0],
            n = e[1];
        e = e[2];
        return i && t !== i ? (i[0] = t[0] * s, i[1] = t[1] * s, i[2] = t[2] * s, i[3] = t[3] * s, i[4] = t[4] * n, i[5] = t[5] * n, i[6] = t[6] * n, i[7] = t[7] * n, i[8] = t[8] * e, i[9] = t[9] * e, i[10] = t[10] * e, i[11] = t[11] * e, i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15], i) : (t[0] *= s, t[1] *= s, t[2] *= s, t[3] *= s, t[4] *= n, t[5] *= n, t[6] *= n, t[7] *= n, t[8] *= e, t[9] *= e, t[10] *= e, t[11] *= e, t)
    }, mat4.rotate = function(t, e, i, s) {
        var n, r, a, o, h, c, l, u, p, d, f, g, m, y, _, v, b, w, x, S, T = i[0],
            C = i[1],
            A = (i = i[2], Math.sqrt(T * T + C * C + i * i));
        return A ? (1 !== A && (T *= A = 1 / A, C *= A, i *= A), n = Math.sin(e), a = 1 - (r = Math.cos(e)), e = t[0], A = t[1], o = t[2], h = t[3], c = t[4], l = t[5], u = t[6], p = t[7], d = t[8], f = t[9], g = t[10], m = t[11], y = T * T * a + r, _ = C * T * a + i * n, v = i * T * a - C * n, b = T * C * a - i * n, w = C * C * a + r, x = i * C * a + T * n, S = T * i * a + C * n, T = C * i * a - T * n, C = i * i * a + r, s ? t !== s && (s[12] = t[12], s[13] = t[13], s[14] = t[14], s[15] = t[15]) : s = t, s[0] = e * y + c * _ + d * v, s[1] = A * y + l * _ + f * v, s[2] = o * y + u * _ + g * v, s[3] = h * y + p * _ + m * v, s[4] = e * b + c * w + d * x, s[5] = A * b + l * w + f * x, s[6] = o * b + u * w + g * x, s[7] = h * b + p * w + m * x, s[8] = e * S + c * T + d * C, s[9] = A * S + l * T + f * C, s[10] = o * S + u * T + g * C, s[11] = h * S + p * T + m * C, s) : null
    }, mat4.rotateX = function(t, e, i) {
        var s = Math.sin(e),
            n = (e = Math.cos(e), t[4]),
            r = t[5],
            a = t[6],
            o = t[7],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11];
        return i ? t !== i && (i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[4] = n * e + h * s, i[5] = r * e + c * s, i[6] = a * e + l * s, i[7] = o * e + u * s, i[8] = n * -s + h * e, i[9] = r * -s + c * e, i[10] = a * -s + l * e, i[11] = o * -s + u * e, i
    }, mat4.rotateY = function(t, e, i) {
        var s = Math.sin(e),
            n = (e = Math.cos(e), t[0]),
            r = t[1],
            a = t[2],
            o = t[3],
            h = t[8],
            c = t[9],
            l = t[10],
            u = t[11];
        return i ? t !== i && (i[4] = t[4], i[5] = t[5], i[6] = t[6], i[7] = t[7], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = n * e + h * -s, i[1] = r * e + c * -s, i[2] = a * e + l * -s, i[3] = o * e + u * -s, i[8] = n * s + h * e, i[9] = r * s + c * e, i[10] = a * s + l * e, i[11] = o * s + u * e, i
    }, mat4.rotateZ = function(t, e, i) {
        var s = Math.sin(e),
            n = (e = Math.cos(e), t[0]),
            r = t[1],
            a = t[2],
            o = t[3],
            h = t[4],
            c = t[5],
            l = t[6],
            u = t[7];
        return i ? t !== i && (i[8] = t[8], i[9] = t[9], i[10] = t[10], i[11] = t[11], i[12] = t[12], i[13] = t[13], i[14] = t[14], i[15] = t[15]) : i = t, i[0] = n * e + h * s, i[1] = r * e + c * s, i[2] = a * e + l * s, i[3] = o * e + u * s, i[4] = n * -s + h * e, i[5] = r * -s + c * e, i[6] = a * -s + l * e, i[7] = o * -s + u * e, i
    }, mat4.frustum = function(t, e, i, s, n, r, a) {
        a || (a = mat4.create());
        var o = e - t,
            h = s - i,
            c = r - n;
        return a[0] = 2 * n / o, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 * n / h, a[6] = 0, a[7] = 0, a[8] = (e + t) / o, a[9] = (s + i) / h, a[10] = -(r + n) / c, a[11] = -1, a[12] = 0, a[13] = 0, a[14] = -r * n * 2 / c, a[15] = 0, a
    }, mat4.perspective = function(t, e, i, s, n) {
        return e *= t = i * Math.tan(t * Math.PI / 360), mat4.frustum(-e, e, -t, t, i, s, n)
    }, mat4.ortho = function(t, e, i, s, n, r, a) {
        a || (a = mat4.create());
        var o = e - t,
            h = s - i,
            c = r - n;
        return a[0] = 2 / o, a[1] = 0, a[2] = 0, a[3] = 0, a[4] = 0, a[5] = 2 / h, a[6] = 0, a[7] = 0, a[8] = 0, a[9] = 0, a[10] = -2 / c, a[11] = 0, a[12] = -(t + e) / o, a[13] = -(s + i) / h, a[14] = -(r + n) / c, a[15] = 1, a
    }, mat4.lookAt = function(t, e, i, s) {
        s || (s = mat4.create());
        var n, r, a, o, h, c, l, u, p = t[0],
            d = t[1];
        t = t[2];
        return r = i[0], a = i[1], n = i[2], i = e[1], c = e[2], p === e[0] && d === i && t === c ? mat4.identity(s) : (i = p - e[0], c = d - e[1], l = t - e[2], e = a * (l *= u = 1 / Math.sqrt(i * i + c * c + l * l)) - n * (c *= u), n = n * (i *= u) - r * l, r = r * c - a * i, (u = Math.sqrt(e * e + n * n + r * r)) ? (e *= u = 1 / u, n *= u, r *= u) : r = n = e = 0, a = c * r - l * n, o = l * e - i * r, h = i * n - c * e, (u = Math.sqrt(a * a + o * o + h * h)) ? (a *= u = 1 / u, o *= u, h *= u) : h = o = a = 0, s[0] = e, s[1] = a, s[2] = i, s[3] = 0, s[4] = n, s[5] = o, s[6] = c, s[7] = 0, s[8] = r, s[9] = h, s[10] = l, s[11] = 0, s[12] = -(e * p + n * d + r * t), s[13] = -(a * p + o * d + h * t), s[14] = -(i * p + c * d + l * t), s[15] = 1, s)
    }, mat4.fromRotationTranslation = function(t, e, i) {
        i || (i = mat4.create());
        var s = t[0],
            n = t[1],
            r = t[2],
            a = t[3],
            o = s + s,
            h = n + n,
            c = r + r,
            l = (t = s * o, s * h);
        s *= c;
        var u = n * h;
        return n *= c, r *= c, o *= a, h *= a, a *= c, i[0] = 1 - (u + r), i[1] = l + a, i[2] = s - h, i[3] = 0, i[4] = l - a, i[5] = 1 - (t + r), i[6] = n + o, i[7] = 0, i[8] = s + h, i[9] = n - o, i[10] = 1 - (t + u), i[11] = 0, i[12] = e[0], i[13] = e[1], i[14] = e[2], i[15] = 1, i
    }, mat4.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + "]"
    }, quat4.create = function(t) {
        var e = new MatrixArray(4);
        return t && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3]), e
    }, quat4.set = function(t, e) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e
    }, quat4.calculateW = function(t, e) {
        var i = t[0],
            s = t[1],
            n = t[2];
        return e && t !== e ? (e[0] = i, e[1] = s, e[2] = n, e[3] = -Math.sqrt(Math.abs(1 - i * i - s * s - n * n)), e) : (t[3] = -Math.sqrt(Math.abs(1 - i * i - s * s - n * n)), t)
    }, quat4.inverse = function(t, e) {
        return e && t !== e ? (e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e) : (t[0] *= -1, t[1] *= -1, t[2] *= -1, t)
    }, quat4.length = function(t) {
        var e = t[0],
            i = t[1],
            s = t[2];
        t = t[3];
        return Math.sqrt(e * e + i * i + s * s + t * t)
    }, quat4.normalize = function(t, e) {
        e || (e = t);
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            a = Math.sqrt(i * i + s * s + n * n + r * r);
        return 0 === a ? (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0) : (a = 1 / a, e[0] = i * a, e[1] = s * a, e[2] = n * a, e[3] = r * a), e
    }, quat4.multiply = function(t, e, i) {
        i || (i = t);
        var s = t[0],
            n = t[1],
            r = t[2],
            a = (t = t[3], e[0]),
            o = e[1],
            h = e[2];
        e = e[3];
        return i[0] = s * e + t * a + n * h - r * o, i[1] = n * e + t * o + r * a - s * h, i[2] = r * e + t * h + s * o - n * a, i[3] = t * e - s * a - n * o - r * h, i
    }, quat4.multiplyVec3 = function(t, e, i) {
        i || (i = e);
        var s = e[0],
            n = e[1],
            r = e[2],
            a = (e = t[0], t[1]),
            o = t[2],
            h = (t = t[3]) * s + a * r - o * n,
            c = t * n + o * s - e * r,
            l = t * r + e * n - a * s;
        s = -e * s - a * n - o * r;
        return i[0] = h * t + s * -e + c * -o - l * -a, i[1] = c * t + s * -a + l * -e - h * -o, i[2] = l * t + s * -o + h * -a - c * -e, i
    }, quat4.toMat3 = function(t, e) {
        e || (e = mat3.create());
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            a = i + i,
            o = s + s,
            h = n + n,
            c = i * a,
            l = i * o;
        i *= h;
        var u = s * o;
        return s *= h, n *= h, a *= r, o *= r, r *= h, e[0] = 1 - (u + n), e[1] = l + r, e[2] = i - o, e[3] = l - r, e[4] = 1 - (c + n), e[5] = s + a, e[6] = i + o, e[7] = s - a, e[8] = 1 - (c + u), e
    }, quat4.toMat4 = function(t, e) {
        e || (e = mat4.create());
        var i = t[0],
            s = t[1],
            n = t[2],
            r = t[3],
            a = i + i,
            o = s + s,
            h = n + n,
            c = i * a,
            l = i * o;
        i *= h;
        var u = s * o;
        return s *= h, n *= h, a *= r, o *= r, r *= h, e[0] = 1 - (u + n), e[1] = l + r, e[2] = i - o, e[3] = 0, e[4] = l - r, e[5] = 1 - (c + n), e[6] = s + a, e[7] = 0, e[8] = i + o, e[9] = s - a, e[10] = 1 - (c + u), e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e
    }, quat4.slerp = function(t, e, i, s) {
        s || (s = t);
        var n, r, a = t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
        return 1 <= Math.abs(a) ? (s !== t && (s[0] = t[0], s[1] = t[1], s[2] = t[2], s[3] = t[3]), s) : (n = Math.acos(a), r = Math.sqrt(1 - a * a), Math.abs(r) < .001 ? (s[0] = .5 * t[0] + .5 * e[0], s[1] = .5 * t[1] + .5 * e[1], s[2] = .5 * t[2] + .5 * e[2], s[3] = .5 * t[3] + .5 * e[3]) : (a = Math.sin((1 - i) * n) / r, i = Math.sin(i * n) / r, s[0] = t[0] * a + e[0] * i, s[1] = t[1] * a + e[1] * i, s[2] = t[2] * a + e[2] * i, s[3] = t[3] * a + e[3] * i), s)
    }, quat4.str = function(t) {
        return "[" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + "]"
    },
    function() {
        var i = mat4.create();

        function t(t, e, i) {
            this.isIE = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent), this.width = 0, this.height = 0, this.enableFrontToBack = !!i, this.isEarlyZPass = !1, this.isBatchInEarlyZPass = !1, this.currentZ = 0, this.zNear = 1, this.zFar = 1e3, this.zIncrement = (this.zFar - this.zNear) / 32768, this.zA = this.zFar / (this.zFar - this.zNear), this.zB = this.zFar * this.zNear / (this.zNear - this.zFar), this.kzA = 65536 * this.zA, this.kzB = 65536 * this.zB, this.cam = vec3.create([0, 0, 100]), this.look = vec3.create([0, 0, 0]), this.up = vec3.create([0, 1, 0]), this.worldScale = vec3.create([1, 1, 1]), this.enable_mipmaps = !0, this.matP = mat4.create(), this.matMV = mat4.create(), this.lastMV = mat4.create(), this.currentMV = mat4.create(), this.gl = t, this.version = 0 === this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2") ? 2 : 1, this.initState()
        }

        function u(t, e, i) {
            this.gl = t, this.shaderProgram = e, this.name = i, this.locAPos = t.getAttribLocation(e, "aPos"), this.locATex = t.getAttribLocation(e, "aTex"), this.locMatP = t.getUniformLocation(e, "matP"), this.locMatMV = t.getUniformLocation(e, "matMV"), this.locOpacity = t.getUniformLocation(e, "opacity"), this.locColorFill = t.getUniformLocation(e, "colorFill"), this.locSamplerFront = t.getUniformLocation(e, "samplerFront"), this.locSamplerBack = t.getUniformLocation(e, "samplerBack"), this.locDestStart = t.getUniformLocation(e, "destStart"), this.locDestEnd = t.getUniformLocation(e, "destEnd"), this.locSeconds = t.getUniformLocation(e, "seconds"), this.locPixelWidth = t.getUniformLocation(e, "pixelWidth"), this.locPixelHeight = t.getUniformLocation(e, "pixelHeight"), this.locLayerScale = t.getUniformLocation(e, "layerScale"), this.locLayerAngle = t.getUniformLocation(e, "layerAngle"), this.locViewOrigin = t.getUniformLocation(e, "viewOrigin"), this.locScrollPos = t.getUniformLocation(e, "scrollPos"), this.hasAnyOptionalUniforms = !!(this.locPixelWidth || this.locPixelHeight || this.locSeconds || this.locSamplerBack || this.locDestStart || this.locDestEnd || this.locLayerScale || this.locLayerAngle || this.locViewOrigin || this.locScrollPos), this.lpPixelWidth = -999, this.lpPixelHeight = -999, this.lpOpacity = 1, this.lpDestStartX = 0, this.lpDestStartY = 0, this.lpDestEndX = 1, this.lpDestEndY = 1, this.lpLayerScale = 1, this.lpLayerAngle = 0, this.lpViewOriginX = 0, this.lpViewOriginY = 0, this.lpScrollPosX = 0, this.lpScrollPosY = 0, this.lpSeconds = 0, this.lastCustomParams = [], this.lpMatMV = mat4.create(), this.locOpacity && t.uniform1f(this.locOpacity, 1), this.locColorFill && t.uniform4f(this.locColorFill, 1, 1, 1, 1), this.locSamplerFront && t.uniform1i(this.locSamplerFront, 0), this.locSamplerBack && t.uniform1i(this.locSamplerBack, 1), this.locDestStart && t.uniform2f(this.locDestStart, 0, 0), this.locDestEnd && t.uniform2f(this.locDestEnd, 1, 1), this.locLayerScale && t.uniform1f(this.locLayerScale, 1), this.locLayerAngle && t.uniform1f(this.locLayerAngle, 0), this.locViewOrigin && t.uniform2f(this.locViewOrigin, 0, 0), this.locScrollPos && t.uniform2f(this.locScrollPos, 0, 0), this.locSeconds && t.uniform1f(this.locSeconds, 0), this.hasCurrentMatMV = !1
        }

        function e(t, e) {
            return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
        }

        function s(t, e) {
            this.type = t, this.glwrap = e, this.gl = e.gl, this.opacityParam = 0, this.startIndex = 0, this.indexCount = 0, this.texParam = null, this.mat4param = null, this.shaderParams = [], cr.seal(this)
        }
        t.prototype.initState = function() {
            var t, e = this.gl;
            for (this.lastOpacity = 1, this.lastTexture0 = null, this.lastTexture1 = null, this.currentOpacity = 1, e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), e.disable(e.CULL_FACE), e.disable(e.STENCIL_TEST), e.disable(e.DITHER), this.enableFrontToBack ? (e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL)) : e.disable(e.DEPTH_TEST), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.lastSrcBlend = e.ONE, this.lastDestBlend = e.ONE_MINUS_SRC_ALPHA, this.vertexData = new Float32Array(8e3 * (this.enableFrontToBack ? 3 : 2)), this.texcoordData = new Float32Array(16e3), this.pointData = new Float32Array(32e3), this.pointBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.pointBuffer), e.bufferData(e.ARRAY_BUFFER, this.pointData.byteLength, e.DYNAMIC_DRAW), this.vertexBuffers = new Array(4), this.texcoordBuffers = new Array(4), t = 0; t < 4; t++) this.vertexBuffers[t] = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffers[t]), e.bufferData(e.ARRAY_BUFFER, this.vertexData.byteLength, e.DYNAMIC_DRAW), this.texcoordBuffers[t] = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.texcoordBuffers[t]), e.bufferData(e.ARRAY_BUFFER, this.texcoordData.byteLength, e.DYNAMIC_DRAW);
            this.curBuffer = 0, this.indexBuffer = e.createBuffer(), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            var i = new Uint16Array(12e3);
            for (var s, n, r = t = 0; t < 12e3;) i[t++] = r, i[t++] = r + 1, i[t++] = r + 2, i[t++] = r, i[t++] = r + 2, i[t++] = r + 3, r += 4;
            e.bufferData(e.ELEMENT_ARRAY_BUFFER, i, e.STATIC_DRAW), this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0, this.shaderPrograms = [], s = ["varying mediump vec2 vTex;", "uniform lowp float opacity;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, vTex);", "\tgl_FragColor *= opacity;", "}"].join("\n"), n = this.enableFrontToBack ? ["attribute highp vec3 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);", "\tvTex = aTex;", "}"].join("\n") : ["attribute highp vec2 aPos;", "attribute mediump vec2 aTex;", "varying mediump vec2 vTex;", "uniform highp mat4 matP;", "uniform highp mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tvTex = aTex;", "}"].join("\n");
            var a = this.createShaderProgram({
                src: s
            }, n, "<default>");
            this.shaderPrograms.push(a), s = ["uniform mediump sampler2D samplerFront;", "varying lowp float opacity;", "void main(void) {", "\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);", "\tgl_FragColor *= opacity;", "}"].join("\n");
            var o = ["attribute vec4 aPos;", "varying float opacity;", "uniform mat4 matP;", "uniform mat4 matMV;", "void main(void) {", "\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);", "\tgl_PointSize = aPos.z;", "\topacity = aPos.w;", "}"].join("\n");
            a = this.createShaderProgram({
                src: s
            }, o, "<point>"), this.shaderPrograms.push(a), s = ["varying mediump vec2 vTex;", "uniform lowp sampler2D samplerFront;", "void main(void) {", "\tif (texture2D(samplerFront, vTex).a < 1.0)", "\t\tdiscard;", "}"].join("\n");
            a = this.createShaderProgram({
                src: s
            }, n, "<earlyz>");
            this.shaderPrograms.push(a), s = ["uniform lowp vec4 colorFill;", "void main(void) {", "\tgl_FragColor = colorFill;", "}"].join("\n");
            a = this.createShaderProgram({
                src: s
            }, n, "<fill>");
            for (var h in this.shaderPrograms.push(a), cr.shaders) cr.shaders.hasOwnProperty(h) && this.shaderPrograms.push(this.createShaderProgram(cr.shaders[h], n, h));
            e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, null), this.batch = [], this.batchPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.lastProgram = -1, this.currentProgram = -1, this.currentShader = null, this.fbo = e.createFramebuffer(), this.renderToTex = null, this.depthBuffer = null, this.attachedDepthBuffer = !1, this.enableFrontToBack && (this.depthBuffer = e.createRenderbuffer()), this.tmpVec3 = vec3.create([0, 0, 0]);
            var c = e.getParameter(e.ALIASED_POINT_SIZE_RANGE);
            this.minPointSize = c[0], this.maxPointSize = c[1], 2048 < this.maxPointSize && (this.maxPointSize = 2048), this.switchProgram(0), cr.seal(this)
        }, u.prototype.updateMatMV = function(t) {
            e(this.lpMatMV, t) || (mat4.set(t, this.lpMatMV), this.gl.uniformMatrix4fv(this.locMatMV, !1, t))
        }, t.prototype.createShaderProgram = function(t, e, i) {
            var s = this.gl,
                n = s.createShader(s.FRAGMENT_SHADER);
            if (s.shaderSource(n, t.src), s.compileShader(n), !s.getShaderParameter(n, s.COMPILE_STATUS)) {
                var r = s.getShaderInfoLog(n);
                throw s.deleteShader(n), new Error("error compiling fragment shader: " + r)
            }
            var a = s.createShader(s.VERTEX_SHADER);
            if (s.shaderSource(a, e), s.compileShader(a), !s.getShaderParameter(a, s.COMPILE_STATUS)) {
                r = s.getShaderInfoLog(a);
                throw s.deleteShader(n), s.deleteShader(a), new Error("error compiling vertex shader: " + r)
            }
            var o = s.createProgram();
            if (s.attachShader(o, n), s.attachShader(o, a), s.linkProgram(o), !s.getProgramParameter(o, s.LINK_STATUS)) {
                r = s.getProgramInfoLog(o);
                throw s.deleteShader(n), s.deleteShader(a), s.deleteProgram(o), new Error("error linking shader program: " + r)
            }
            s.useProgram(o), s.deleteShader(n), s.deleteShader(a);
            var h, c, l = new u(s, o, i);
            for (l.extendBoxHorizontal = t.extendBoxHorizontal || 0, l.extendBoxVertical = t.extendBoxVertical || 0, l.crossSampling = !!t.crossSampling, l.preservesOpaqueness = !!t.preservesOpaqueness, l.animated = !!t.animated, l.parameters = t.parameters || [], h = 0, c = l.parameters.length; h < c; h++) l.parameters[h][1] = s.getUniformLocation(o, l.parameters[h][0]), l.lastCustomParams.push(0), s.uniform1f(l.parameters[h][1], 0);
            return cr.seal(l), l
        }, t.prototype.getShaderIndex = function(t) {
            var e, i;
            for (e = 0, i = this.shaderPrograms.length; e < i; e++)
                if (this.shaderPrograms[e].name === t) return e;
            return -1
        }, t.prototype.project = function(t, e, i) {
            var s = this.matMV,
                n = this.matP,
                r = [0, 0, 0, 0, 0, 0, 0, 0];
            r[0] = s[0] * t + s[4] * e + s[12], r[1] = s[1] * t + s[5] * e + s[13], r[2] = s[2] * t + s[6] * e + s[14], r[3] = s[3] * t + s[7] * e + s[15], r[4] = n[0] * r[0] + n[4] * r[1] + n[8] * r[2] + n[12] * r[3], r[5] = n[1] * r[0] + n[5] * r[1] + n[9] * r[2] + n[13] * r[3], r[6] = n[2] * r[0] + n[6] * r[1] + n[10] * r[2] + n[14] * r[3], r[7] = -r[2], 0 !== r[7] && (r[7] = 1 / r[7], r[4] *= r[7], r[5] *= r[7], r[6] *= r[7], i[0] = (.5 * r[4] + .5) * this.width, i[1] = (.5 * r[5] + .5) * this.height)
        }, t.prototype.setSize = function(t, e, i) {
            if (this.width !== t || this.height !== e || i) {
                this.endBatch();
                var s, n, r, a = this.gl;
                if (this.width = t, this.height = e, a.viewport(0, 0, t, e), mat4.lookAt(this.cam, this.look, this.up, this.matMV), this.enableFrontToBack) mat4.ortho(-t / 2, t / 2, e / 2, -e / 2, this.zNear, this.zFar, this.matP), this.worldScale[0] = 1, this.worldScale[1] = 1;
                else {
                    mat4.perspective(45, t / e, this.zNear, this.zFar, this.matP);
                    var o = [0, 0],
                        h = [0, 0];
                    this.project(0, 0, o), this.project(1, 1, h), this.worldScale[0] = 1 / (h[0] - o[0]), this.worldScale[1] = -1 / (h[1] - o[1])
                }
                for (s = 0, n = this.shaderPrograms.length; s < n; s++)(r = this.shaderPrograms[s]).hasCurrentMatMV = !1, r.locMatP && (a.useProgram(r.shaderProgram), a.uniformMatrix4fv(r.locMatP, !1, this.matP));
                a.useProgram(this.shaderPrograms[this.lastProgram].shaderProgram), a.bindTexture(a.TEXTURE_2D, null), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, null), a.activeTexture(a.TEXTURE0), this.lastTexture0 = null, this.lastTexture1 = null, this.depthBuffer && (a.bindFramebuffer(a.FRAMEBUFFER, this.fbo), a.bindRenderbuffer(a.RENDERBUFFER, this.depthBuffer), a.renderbufferStorage(a.RENDERBUFFER, a.DEPTH_COMPONENT16, this.width, this.height), this.attachedDepthBuffer || (a.framebufferRenderbuffer(a.FRAMEBUFFER, a.DEPTH_ATTACHMENT, a.RENDERBUFFER, this.depthBuffer), this.attachedDepthBuffer = !0), a.bindRenderbuffer(a.RENDERBUFFER, null), a.bindFramebuffer(a.FRAMEBUFFER, null), this.renderToTex = null)
            }
        }, t.prototype.resetModelView = function() {
            mat4.lookAt(this.cam, this.look, this.up, this.matMV), mat4.scale(this.matMV, this.worldScale)
        }, t.prototype.translate = function(t, e) {
            0 === t && 0 === e || (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 0, mat4.translate(this.matMV, this.tmpVec3))
        }, t.prototype.scale = function(t, e) {
            1 === t && 1 === e || (this.tmpVec3[0] = t, this.tmpVec3[1] = e, this.tmpVec3[2] = 1, mat4.scale(this.matMV, this.tmpVec3))
        }, t.prototype.rotateZ = function(t) {
            0 !== t && mat4.rotateZ(this.matMV, t)
        }, t.prototype.updateModelView = function() {
            if (!e(this.lastMV, this.matMV)) {
                var t = this.pushBatch();
                t.type = 5, t.mat4param ? mat4.set(this.matMV, t.mat4param) : t.mat4param = mat4.create(this.matMV), mat4.set(this.matMV, this.lastMV), this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setEarlyZIndex = function(t) {
            this.enableFrontToBack && (32760 < t && (t = 32760), this.currentZ = this.cam[2] - this.zNear - t * this.zIncrement)
        }, s.prototype.doSetEarlyZPass = function() {
            var t = this.gl,
                e = this.glwrap;
            0 !== this.startIndex ? (t.depthMask(!0), t.colorMask(!1, !1, !1, !1), t.disable(t.BLEND), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.clear(t.DEPTH_BUFFER_BIT), t.bindFramebuffer(t.FRAMEBUFFER, null), e.isBatchInEarlyZPass = !0) : (t.depthMask(!1), t.colorMask(!0, !0, !0, !0), t.enable(t.BLEND), e.isBatchInEarlyZPass = !1)
        }, s.prototype.doSetTexture = function() {
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.texParam)
        }, s.prototype.doSetTexture1 = function() {
            var t = this.gl;
            t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, this.texParam), t.activeTexture(t.TEXTURE0)
        }, s.prototype.doSetOpacity = function() {
            var t = this.opacityParam,
                e = this.glwrap;
            e.currentOpacity = t;
            var i = e.currentShader;
            i.locOpacity && i.lpOpacity !== t && (i.lpOpacity = t, this.gl.uniform1f(i.locOpacity, t))
        }, s.prototype.doQuad = function() {
            this.gl.drawElements(this.gl.TRIANGLES, this.indexCount, this.gl.UNSIGNED_SHORT, this.startIndex)
        }, s.prototype.doSetBlend = function() {
            this.gl.blendFunc(this.startIndex, this.indexCount)
        }, s.prototype.doUpdateModelView = function() {
            var t, e, i, s = this.glwrap.shaderPrograms,
                n = this.glwrap.currentProgram;
            for (t = 0, e = s.length; t < e; t++) i = s[t], t === n && i.locMatMV ? (i.updateMatMV(this.mat4param), i.hasCurrentMatMV = !0) : i.hasCurrentMatMV = !1;
            mat4.set(this.mat4param, this.glwrap.currentMV)
        }, s.prototype.doRenderToTexture = function() {
            var t = this.gl,
                e = this.glwrap;
            this.texParam ? (e.lastTexture1 === this.texParam && (t.activeTexture(t.TEXTURE1), t.bindTexture(t.TEXTURE_2D, null), e.lastTexture1 = null, t.activeTexture(t.TEXTURE0)), t.bindFramebuffer(t.FRAMEBUFFER, e.fbo), e.isBatchInEarlyZPass || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texParam, 0)) : (e.enableFrontToBack || t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, null, 0), t.bindFramebuffer(t.FRAMEBUFFER, null))
        }, s.prototype.doClear = function() {
            var t = this.gl,
                e = this.startIndex;
            0 === e ? (t.clearColor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clear(t.COLOR_BUFFER_BIT)) : 1 === e ? (t.enable(t.SCISSOR_TEST), t.scissor(this.mat4param[0], this.mat4param[1], this.mat4param[2], this.mat4param[3]), t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.SCISSOR_TEST)) : t.clear(t.DEPTH_BUFFER_BIT)
        }, s.prototype.doSetDepthTestEnabled = function() {
            var t = this.gl;
            0 !== this.startIndex ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST)
        }, s.prototype.doPoints = function() {
            var t = this.gl,
                e = this.glwrap;
            e.enableFrontToBack && t.disable(t.DEPTH_TEST);
            var i = e.shaderPrograms[1];
            t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.pointBuffer), t.vertexAttribPointer(i.locAPos, 4, t.FLOAT, !1, 0, 0), t.drawArrays(t.POINTS, this.startIndex / 4, this.indexCount), i = e.currentShader, t.useProgram(i.shaderProgram), 0 <= i.locAPos && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), 0 <= i.locATex && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0)), e.enableFrontToBack && t.enable(t.DEPTH_TEST)
        }, s.prototype.doSetProgram = function() {
            var t = this.gl,
                e = this.glwrap,
                i = e.shaderPrograms[this.startIndex];
            e.currentProgram = this.startIndex, e.currentShader = i, t.useProgram(i.shaderProgram), !i.hasCurrentMatMV && i.locMatMV && (i.updateMatMV(e.currentMV), i.hasCurrentMatMV = !0), i.locOpacity && i.lpOpacity !== e.currentOpacity && (i.lpOpacity = e.currentOpacity, t.uniform1f(i.locOpacity, e.currentOpacity)), 0 <= i.locAPos && (t.enableVertexAttribArray(i.locAPos), t.bindBuffer(t.ARRAY_BUFFER, e.vertexBuffers[e.curBuffer]), t.vertexAttribPointer(i.locAPos, e.enableFrontToBack ? 3 : 2, t.FLOAT, !1, 0, 0)), 0 <= i.locATex && (t.enableVertexAttribArray(i.locATex), t.bindBuffer(t.ARRAY_BUFFER, e.texcoordBuffers[e.curBuffer]), t.vertexAttribPointer(i.locATex, 2, t.FLOAT, !1, 0, 0))
        }, s.prototype.doSetColor = function() {
            var t = this.glwrap.currentShader,
                e = this.mat4param;
            this.gl.uniform4f(t.locColorFill, e[0], e[1], e[2], e[3])
        }, s.prototype.doSetProgramParameters = function() {
            var t, e, i = this.glwrap.currentShader,
                s = this.gl,
                n = this.mat4param;
            i.locSamplerBack && this.glwrap.lastTexture1 !== this.texParam && (s.activeTexture(s.TEXTURE1), s.bindTexture(s.TEXTURE_2D, this.texParam), this.glwrap.lastTexture1 = this.texParam, s.activeTexture(s.TEXTURE0));
            var r, a = n[0];
            if (i.locPixelWidth && a !== i.lpPixelWidth && (i.lpPixelWidth = a, s.uniform1f(i.locPixelWidth, a)), a = n[1], i.locPixelHeight && a !== i.lpPixelHeight && (i.lpPixelHeight = a, s.uniform1f(i.locPixelHeight, a)), a = n[2], r = n[3], !i.locDestStart || a === i.lpDestStartX && r === i.lpDestStartY || (i.lpDestStartX = a, i.lpDestStartY = r, s.uniform2f(i.locDestStart, a, r)), a = n[4], r = n[5], !i.locDestEnd || a === i.lpDestEndX && r === i.lpDestEndY || (i.lpDestEndX = a, i.lpDestEndY = r, s.uniform2f(i.locDestEnd, a, r)), a = n[6], i.locLayerScale && a !== i.lpLayerScale && (i.lpLayerScale = a, s.uniform1f(i.locLayerScale, a)), a = n[7], i.locLayerAngle && a !== i.lpLayerAngle && (i.lpLayerAngle = a, s.uniform1f(i.locLayerAngle, a)), a = n[8], r = n[9], !i.locViewOrigin || a === i.lpViewOriginX && r === i.lpViewOriginY || (i.lpViewOriginX = a, i.lpViewOriginY = r, s.uniform2f(i.locViewOrigin, a, r)), a = n[10], r = n[11], !i.locScrollPos || a === i.lpScrollPosX && r === i.lpScrollPosY || (i.lpScrollPosX = a, i.lpScrollPosY = r, s.uniform2f(i.locScrollPos, a, r)), a = n[12], i.locSeconds && a !== i.lpSeconds && (i.lpSeconds = a, s.uniform1f(i.locSeconds, a)), i.parameters.length)
                for (t = 0, e = i.parameters.length; t < e; t++)(a = this.shaderParams[t]) !== i.lastCustomParams[t] && (i.lastCustomParams[t] = a, s.uniform1f(i.parameters[t][1], a))
        }, t.prototype.pushBatch = function() {
            return this.batchPtr === this.batch.length && this.batch.push(new s(0, this)), this.batch[this.batchPtr++]
        }, t.prototype.endBatch = function() {
            if (0 !== this.batchPtr && !this.gl.isContextLost()) {
                var t, e, i, s = this.gl;
                if (0 < this.pointPtr && (s.bindBuffer(s.ARRAY_BUFFER, this.pointBuffer), s.bufferSubData(s.ARRAY_BUFFER, 0, this.pointData.subarray(0, this.pointPtr)), n && 0 <= n.locAPos && "<point>" === n.name && s.vertexAttribPointer(n.locAPos, 4, s.FLOAT, !1, 0, 0)), 0 < this.vertexPtr) {
                    var n = this.currentShader;
                    s.bindBuffer(s.ARRAY_BUFFER, this.vertexBuffers[this.curBuffer]), s.bufferSubData(s.ARRAY_BUFFER, 0, this.vertexData.subarray(0, this.vertexPtr)), n && 0 <= n.locAPos && "<point>" !== n.name && s.vertexAttribPointer(n.locAPos, this.enableFrontToBack ? 3 : 2, s.FLOAT, !1, 0, 0), s.bindBuffer(s.ARRAY_BUFFER, this.texcoordBuffers[this.curBuffer]), s.bufferSubData(s.ARRAY_BUFFER, 0, this.texcoordData.subarray(0, this.texPtr)), n && 0 <= n.locATex && "<point>" !== n.name && s.vertexAttribPointer(n.locATex, 2, s.FLOAT, !1, 0, 0)
                }
                for (t = 0, e = this.batchPtr; t < e; t++) switch ((i = this.batch[t]).type) {
                    case 1:
                        i.doQuad();
                        break;
                    case 2:
                        i.doSetTexture();
                        break;
                    case 3:
                        i.doSetOpacity();
                        break;
                    case 4:
                        i.doSetBlend();
                        break;
                    case 5:
                        i.doUpdateModelView();
                        break;
                    case 6:
                        i.doRenderToTexture();
                        break;
                    case 7:
                        i.doClear();
                        break;
                    case 8:
                        i.doPoints();
                        break;
                    case 9:
                        i.doSetProgram();
                        break;
                    case 10:
                        i.doSetProgramParameters();
                        break;
                    case 11:
                        i.doSetTexture1();
                        break;
                    case 12:
                        i.doSetColor();
                        break;
                    case 13:
                        i.doSetDepthTestEnabled();
                        break;
                    case 14:
                        i.doSetEarlyZPass()
                }
                this.batchPtr = 0, this.vertexPtr = 0, this.texPtr = 0, this.pointPtr = 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isBatchInEarlyZPass = !1, this.curBuffer++, 4 <= this.curBuffer && (this.curBuffer = 0)
            }
        }, t.prototype.setOpacity = function(t) {
            if (t !== this.lastOpacity && !this.isEarlyZPass) {
                var e = this.pushBatch();
                e.type = 3, e.opacityParam = t, this.lastOpacity = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setTexture = function(t) {
            if (t !== this.lastTexture0) {
                var e = this.pushBatch();
                e.type = 2, e.texParam = t, this.lastTexture0 = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.setBlend = function(t, e) {
            if ((t !== this.lastSrcBlend || e !== this.lastDestBlend) && !this.isEarlyZPass) {
                var i = this.pushBatch();
                i.type = 4, i.startIndex = t, i.indexCount = e, this.lastSrcBlend = t, this.lastDestBlend = e, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.isPremultipliedAlphaBlend = function() {
            return this.lastSrcBlend === this.gl.ONE && this.lastDestBlend === this.gl.ONE_MINUS_SRC_ALPHA
        }, t.prototype.setAlphaBlend = function() {
            this.setBlend(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
        }, t.prototype.setNoPremultiplyAlphaBlend = function() {
            this.setBlend(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA)
        };
        t.prototype.quad = function(t, e, i, s, n, r, a, o) {
            15992 <= this.vertexPtr && this.endBatch();
            var h = this.vertexPtr,
                c = this.texPtr,
                l = this.vertexData,
                u = this.texcoordData,
                p = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var d = this.pushBatch();
                d.type = 1, d.startIndex = this.enableFrontToBack ? h : h / 2 * 3, d.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (l[h++] = t, l[h++] = e, l[h++] = p, l[h++] = i, l[h++] = s, l[h++] = p, l[h++] = n, l[h++] = r, l[h++] = p, l[h++] = a, l[h++] = o, l[h++] = p) : (l[h++] = t, l[h++] = e, l[h++] = i, l[h++] = s, l[h++] = n, l[h++] = r, l[h++] = a, l[h++] = o), u[c++] = 0, u[c++] = 0, u[c++] = 1, u[c++] = 0, u[c++] = 1, u[c++] = 1, u[c++] = 0, u[c++] = 1, this.vertexPtr = h, this.texPtr = c
        }, t.prototype.quadTex = function(t, e, i, s, n, r, a, o, h) {
            15992 <= this.vertexPtr && this.endBatch();
            var c = this.vertexPtr,
                l = this.texPtr,
                u = this.vertexData,
                p = this.texcoordData,
                d = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var f = this.pushBatch();
                f.type = 1, f.startIndex = this.enableFrontToBack ? c : c / 2 * 3, f.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            var g = h.left,
                m = h.top,
                y = h.right,
                _ = h.bottom;
            this.enableFrontToBack ? (u[c++] = t, u[c++] = e, u[c++] = d, u[c++] = i, u[c++] = s, u[c++] = d, u[c++] = n, u[c++] = r, u[c++] = d, u[c++] = a, u[c++] = o, u[c++] = d) : (u[c++] = t, u[c++] = e, u[c++] = i, u[c++] = s, u[c++] = n, u[c++] = r, u[c++] = a, u[c++] = o), p[l++] = g, p[l++] = m, p[l++] = y, p[l++] = m, p[l++] = y, p[l++] = _, p[l++] = g, p[l++] = _, this.vertexPtr = c, this.texPtr = l
        }, t.prototype.quadTexUV = function(t, e, i, s, n, r, a, o, h, c, l, u, p, d, f, g) {
            15992 <= this.vertexPtr && this.endBatch();
            var m = this.vertexPtr,
                y = this.texPtr,
                _ = this.vertexData,
                v = this.texcoordData,
                b = this.currentZ;
            if (this.hasQuadBatchTop) this.batch[this.batchPtr - 1].indexCount += 6;
            else {
                var w = this.pushBatch();
                w.type = 1, w.startIndex = this.enableFrontToBack ? m : m / 2 * 3, w.indexCount = 6, this.hasQuadBatchTop = !0, this.hasPointBatchTop = !1
            }
            this.enableFrontToBack ? (_[m++] = t, _[m++] = e, _[m++] = b, _[m++] = i, _[m++] = s, _[m++] = b, _[m++] = n, _[m++] = r, _[m++] = b, _[m++] = a, _[m++] = o, _[m++] = b) : (_[m++] = t, _[m++] = e, _[m++] = i, _[m++] = s, _[m++] = n, _[m++] = r, _[m++] = a, _[m++] = o), v[y++] = h, v[y++] = c, v[y++] = l, v[y++] = u, v[y++] = p, v[y++] = d, v[y++] = f, v[y++] = g, this.vertexPtr = m, this.texPtr = y
        }, t.prototype.convexPoly = function(t) {
            var e, i, s, n, r, a, o, h, c = t.length / 2 - 2,
                l = c - 1,
                u = t[0],
                p = t[1];
            for (e = 0; e < c; e += 2) s = t[2 + (i = 2 * e)], n = t[3 + i], r = t[4 + i], a = t[5 + i], e === l ? this.quad(u, p, s, n, r, a, r, a) : (o = t[6 + i], h = t[7 + i], this.quad(u, p, s, n, r, a, o, h))
        };
        t.prototype.point = function(t, e, i, s) {
            7996 <= this.pointPtr && this.endBatch();
            var n = this.pointPtr,
                r = this.pointData;
            if (this.hasPointBatchTop) this.batch[this.batchPtr - 1].indexCount++;
            else {
                var a = this.pushBatch();
                a.type = 8, a.startIndex = n, a.indexCount = 1, this.hasPointBatchTop = !0, this.hasQuadBatchTop = !1
            }
            r[n++] = t, r[n++] = e, r[n++] = i, r[n++] = s, this.pointPtr = n
        }, t.prototype.switchProgram = function(t) {
            if (this.lastProgram !== t) {
                var e = this.shaderPrograms[t];
                if (!e) {
                    if (0 === this.lastProgram) return;
                    t = 0, e = this.shaderPrograms[0]
                }
                var i = this.pushBatch();
                i.type = 9, i.startIndex = t, this.lastProgram = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.programUsesDest = function(t) {
            var e = this.shaderPrograms[t];
            return !(!e.locDestStart && !e.locDestEnd)
        }, t.prototype.programUsesCrossSampling = function(t) {
            var e = this.shaderPrograms[t];
            return !!(e.locDestStart || e.locDestEnd || e.crossSampling)
        }, t.prototype.programPreservesOpaqueness = function(t) {
            return this.shaderPrograms[t].preservesOpaqueness
        }, t.prototype.programExtendsBox = function(t) {
            var e = this.shaderPrograms[t];
            return 0 !== e.extendBoxHorizontal || 0 !== e.extendBoxVertical
        }, t.prototype.getProgramBoxExtendHorizontal = function(t) {
            return this.shaderPrograms[t].extendBoxHorizontal
        }, t.prototype.getProgramBoxExtendVertical = function(t) {
            return this.shaderPrograms[t].extendBoxVertical
        }, t.prototype.getProgramParameterType = function(t, e) {
            return this.shaderPrograms[t].parameters[e][2]
        }, t.prototype.programIsAnimated = function(t) {
            return this.shaderPrograms[t].animated
        }, t.prototype.setProgramParameters = function(t, e, i, s, n, r, a, o, h, c, l, u, p, d, f) {
            var g, m, y, _, v, b = this.shaderPrograms[this.lastProgram];
            if (b.hasAnyOptionalUniforms || f.length) {
                if ((y = this.pushBatch()).type = 10, y.mat4param ? mat4.set(this.matMV, y.mat4param) : y.mat4param = mat4.create(), (_ = y.mat4param)[0] = e, _[1] = i, _[2] = s, _[3] = n, _[4] = r, _[5] = a, _[6] = o, _[7] = h, _[8] = c, _[9] = l, _[10] = u, _[11] = p, _[12] = d, b.locSamplerBack ? y.texParam = t : y.texParam = null, f.length)
                    for ((v = y.shaderParams).length = f.length, g = 0, m = f.length; g < m; g++) v[g] = f[g];
                this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.clear = function(t, e, i, s) {
            var n = this.pushBatch();
            n.type = 7, n.startIndex = 0, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = s, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.clearRect = function(t, e, i, s) {
            if (!(i < 0 || s < 0)) {
                var n = this.pushBatch();
                n.type = 7, n.startIndex = 1, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = s, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.clearDepth = function() {
            var t = this.pushBatch();
            t.type = 7, t.startIndex = 2, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.setEarlyZPass = function(t) {
            if (this.enableFrontToBack && (t = !!t, this.isEarlyZPass !== t)) {
                var e = this.pushBatch();
                e.type = 14, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1, this.isEarlyZPass = t, this.renderToTex = null, this.isEarlyZPass ? this.switchProgram(2) : this.switchProgram(0)
            }
        }, t.prototype.setDepthTestEnabled = function(t) {
            if (this.enableFrontToBack) {
                var e = this.pushBatch();
                e.type = 13, e.startIndex = t ? 1 : 0, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, t.prototype.fullscreenQuad = function() {
            mat4.set(this.lastMV, i), this.resetModelView(), this.updateModelView();
            var t = this.width / 2,
                e = this.height / 2;
            this.quad(-t, e, t, e, t, -e, -t, -e), mat4.set(i, this.matMV), this.updateModelView()
        }, t.prototype.setColorFillMode = function(t, e, i, s) {
            this.switchProgram(3);
            var n = this.pushBatch();
            n.type = 12, n.mat4param || (n.mat4param = mat4.create()), n.mat4param[0] = t, n.mat4param[1] = e, n.mat4param[2] = i, n.mat4param[3] = s, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
        }, t.prototype.setTextureFillMode = function() {
            this.switchProgram(0)
        }, t.prototype.restoreEarlyZMode = function() {
            this.switchProgram(2)
        }, t.prototype.present = function() {
            this.endBatch(), this.gl.flush()
        };
        var g = [],
            m = {};
        t.prototype.contextLost = function() {
            cr.clearArray(g), m = {}
        };
        t.prototype.loadTexture = function(t, e, i, s, n, r) {
            e = !!e, i = !!i;
            var a = t.src + "," + e + "," + i + (e ? "," + n : ""),
                o = null;
            if (void 0 !== t.src && m.hasOwnProperty(a)) return (o = m[a]).c2refcount++, o;
            this.endBatch();
            var h = this.gl,
                c = cr.isPOT(t.width) && cr.isPOT(t.height);
            o = h.createTexture(), h.bindTexture(h.TEXTURE_2D, o), h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            var l = h.RGBA,
                u = h.RGBA,
                p = h.UNSIGNED_BYTE;
            if (s && !this.isIE) switch (s) {
                case 1:
                    l = h.RGB, u = h.RGB;
                    break;
                case 2:
                    p = h.UNSIGNED_SHORT_4_4_4_4;
                    break;
                case 3:
                    p = h.UNSIGNED_SHORT_5_5_5_1;
                    break;
                case 4:
                    l = h.RGB, u = h.RGB, p = h.UNSIGNED_SHORT_5_6_5
            }
            if (1 === this.version && !c && e) {
                var d = document.createElement("canvas");
                d.width = cr.nextHighestPowerOfTwo(t.width), d.height = cr.nextHighestPowerOfTwo(t.height);
                var f = d.getContext("2d");
                void 0 !== f.imageSmoothingEnabled ? f.imageSmoothingEnabled = i : (f.webkitImageSmoothingEnabled = i, f.mozImageSmoothingEnabled = i, f.msImageSmoothingEnabled = i), f.drawImage(t, 0, 0, t.width, t.height, 0, 0, d.width, d.height), h.texImage2D(h.TEXTURE_2D, 0, l, u, p, d)
            } else h.texImage2D(h.TEXTURE_2D, 0, l, u, p, t);
            return e ? "repeat-x" === n ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.REPEAT), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE)) : ("repeat-y" === n ? h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE) : h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.REPEAT), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.REPEAT)) : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE)), i ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR), (c || 2 <= this.version) && this.enable_mipmaps && !r ? (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR_MIPMAP_LINEAR), h.generateMipmap(h.TEXTURE_2D)) : h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.LINEAR)) : (h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.NEAREST), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST)), h.bindTexture(h.TEXTURE_2D, null), this.lastTexture0 = null, o.c2width = t.width, o.c2height = t.height, o.c2refcount = 1, o.c2texkey = a, g.push(o), m[a] = o
        }, t.prototype.createEmptyTexture = function(t, e, i, s, n) {
            this.endBatch();
            var r = this.gl;
            this.isIE && (s = !1);
            var a = r.createTexture();
            return r.bindTexture(r.TEXTURE_2D, a), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, t, e, 0, r.RGBA, s ? r.UNSIGNED_SHORT_4_4_4_4 : r.UNSIGNED_BYTE, null), n ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.REPEAT), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.REPEAT)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE)), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, i ? r.LINEAR : r.NEAREST), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, i ? r.LINEAR : r.NEAREST), r.bindTexture(r.TEXTURE_2D, null), this.lastTexture0 = null, a.c2width = t, a.c2height = e, g.push(a), a
        }, t.prototype.videoToTexture = function(t, e, i) {
            this.endBatch();
            var s = this.gl;
            this.isIE && (i = !1), s.bindTexture(s.TEXTURE_2D, e), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
            try {
                s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, i ? s.UNSIGNED_SHORT_4_4_4_4 : s.UNSIGNED_BYTE, t)
            } catch (t) {
                console && console.error && console.error("Error updating WebGL texture: ", t)
            }
            s.bindTexture(s.TEXTURE_2D, null), this.lastTexture0 = null
        }, t.prototype.deleteTexture = function(t) {
            t && (void 0 !== t.c2refcount && 1 < t.c2refcount ? t.c2refcount-- : (this.endBatch(), t === this.lastTexture0 && (this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.lastTexture0 = null), t === this.lastTexture1 && (this.gl.activeTexture(this.gl.TEXTURE1), this.gl.bindTexture(this.gl.TEXTURE_2D, null), this.gl.activeTexture(this.gl.TEXTURE0), this.lastTexture1 = null), cr.arrayFindRemove(g, t), void 0 !== t.c2texkey && delete m[t.c2texkey], this.gl.deleteTexture(t)))
        }, t.prototype.estimateVRAM = function() {
            var t, e, i, s = this.width * this.height * 4 * 2;
            for (t = 0, e = g.length; t < e; t++) s += (i = g[t]).c2width * i.c2height * 4;
            return s
        }, t.prototype.textureCount = function() {
            return g.length
        }, t.prototype.setRenderingToTexture = function(t) {
            if (t !== this.renderToTex) {
                var e = this.pushBatch();
                e.type = 6, e.texParam = t, this.renderToTex = t, this.hasQuadBatchTop = !1, this.hasPointBatchTop = !1
            }
        }, cr.GLWrap = t
    }(),
    function() {
        var v = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;

        function i(t) {
            if (t && (t.getContext || t.dc) && !t.c2runtime) {
                var e = t.c2runtime = this;
                this.isCrosswalk = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !(void 0 === window.c2isCrosswalk || !window.c2isCrosswalk), this.isCordova = this.isCrosswalk || void 0 !== window.device && (void 0 !== window.device.cordova || void 0 !== window.device.phonegap) || void 0 !== window.c2iscordova && window.c2iscordova, this.isPhoneGap = this.isCordova, this.isDirectCanvas = !!t.dc, this.isAppMobi = void 0 !== window.AppMobi || this.isDirectCanvas, this.isCocoonJs = !!window.c2cocoonjs, this.isEjecta = !!window.c2ejecta, this.isCocoonJs && (CocoonJS.App.onSuspended.addEventListener(function() {
                    e.setSuspended(!0)
                }), CocoonJS.App.onActivated.addEventListener(function() {
                    e.setSuspended(!1)
                })), this.isEjecta && (document.addEventListener("pagehide", function() {
                    e.setSuspended(!0)
                }), document.addEventListener("pageshow", function() {
                    e.setSuspended(!1)
                }), document.addEventListener("resize", function() {
                    e.setSize(window.innerWidth, window.innerHeight)
                })), this.isDomFree = this.isDirectCanvas || this.isCocoonJs || this.isEjecta, this.isMicrosoftEdge = /edge\//i.test(navigator.userAgent), this.isIE = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.isMicrosoftEdge, this.isTizen = /tizen/i.test(navigator.userAgent), this.isAndroid = /android/i.test(navigator.userAgent) && !this.isTizen && !this.isIE && !this.isMicrosoftEdge, this.isiPhone = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isiPad = /ipad/i.test(navigator.userAgent), this.isiOS = this.isiPhone || this.isiPad || this.isEjecta, this.isiPhoneiOS6 = this.isiPhone && /os\s6/i.test(navigator.userAgent), this.isChrome = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.isIE && !this.isMicrosoftEdge, this.isAmazonWebApp = /amazonwebappplatform/i.test(navigator.userAgent), this.isFirefox = /firefox/i.test(navigator.userAgent), this.isSafari = /safari/i.test(navigator.userAgent) && !this.isChrome && !this.isIE && !this.isMicrosoftEdge, this.isWindows = /windows/i.test(navigator.userAgent), this.isNWjs = void 0 !== window.c2nodewebkit || void 0 !== window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent), this.isNodeWebkit = this.isNWjs, this.isArcade = void 0 !== window.is_scirra_arcade, this.isWindows8App = !(void 0 === window.c2isWindows8 || !window.c2isWindows8), this.isWindows8Capable = !(void 0 === window.c2isWindows8Capable || !window.c2isWindows8Capable), this.isWindowsPhone8 = !(void 0 === window.c2isWindowsPhone8 || !window.c2isWindowsPhone8), this.isWindowsPhone81 = !(void 0 === window.c2isWindowsPhone81 || !window.c2isWindowsPhone81), this.isWindows10 = !!window.cr_windows10, this.isWinJS = this.isWindows8App || this.isWindows8Capable || this.isWindowsPhone81 || this.isWindows10, this.isBlackberry10 = !(void 0 === window.c2isBlackberry10 || !window.c2isBlackberry10), this.isAndroidStockBrowser = this.isAndroid && !this.isChrome && !this.isCrosswalk && !this.isFirefox && !this.isAmazonWebApp && !this.isDomFree, this.devicePixelRatio = 1, this.isMobile = this.isCordova || this.isCrosswalk || this.isAppMobi || this.isCocoonJs || this.isAndroid || this.isiOS || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isBlackberry10 || this.isTizen || this.isEjecta, this.isMobile || (this.isMobile = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent)), this.isWKWebView = !!(this.isiOS && this.isCordova && window.webkit), "undefined" == typeof cr_is_preview || this.isNWjs || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.isNWjs = !0), this.isDebug = "undefined" != typeof cr_is_preview && -1 < window.location.search.indexOf("debug"), this.canvas = t, this.canvasdiv = document.getElementById("c2canvasdiv"), this.gl = null, this.glwrap = null, this.glUnmaskedRenderer = "(unavailable)", this.enableFrontToBack = !1, this.earlyz_index = 0, this.ctx = null, this.firstInFullscreen = !1, this.oldWidth = 0, this.oldHeight = 0, this.canvas.oncontextmenu = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.canvas.onselectstart = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.canvas.ontouchstart = function(t) {
                    return t.preventDefault && t.preventDefault(), !1
                }, this.isDirectCanvas && (window.c2runtime = this), this.isNWjs && (window.ondragover = function(t) {
                    return t.preventDefault(), !1
                }, window.ondrop = function(t) {
                    return t.preventDefault(), !1
                }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache()), this.isAndroidStockBrowser && "undefined" != typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible"), this.width = t.width, this.height = t.height, this.draw_width = this.width, this.draw_height = this.height, this.cssWidth = this.width, this.cssHeight = this.height, this.lastWindowWidth = window.innerWidth, this.lastWindowHeight = window.innerHeight, this.forceCanvasAlpha = !1, this.redraw = !0, this.isSuspended = !1, Date.now || (Date.now = function() {
                    return +new Date
                }), this.plugins = [], this.types = {}, this.types_by_index = [], this.behaviors = [], this.layouts = {}, this.layouts_by_index = [], this.eventsheets = {}, this.eventsheets_by_index = [], this.wait_for_textures = [], this.triggers_to_postinit = [], this.all_global_vars = [], this.all_local_vars = [], this.solidBehavior = null, this.jumpthruBehavior = null, this.shadowcasterBehavior = null, this.deathRow = {}, this.hasPendingInstances = !1, this.isInClearDeathRow = !1, this.isInOnDestroy = 0, this.isRunningEvents = !1, this.isEndingLayout = !1, this.createRow = [], this.isLoadingState = !1, this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = null, this.lastSaveJson = "", this.signalledContinuousPreview = !1, this.suspendDrawing = !1, this.fireOnCreateAfterLoad = [], this.dt = 0, this.dt1 = 0, this.minimumFramerate = 30, this.logictime = 0, this.cpuutilisation = 0, this.timescale = 1, this.kahanTime = new cr.KahanAdder, this.wallTime = new cr.KahanAdder, this.last_tick_time = 0, this.fps = 0, this.last_fps_time = 0, this.tickcount = 0, this.tickcount_nosave = 0, this.execcount = 0, this.framecount = 0, this.objectcount = 0, this.changelayout = null, this.destroycallbacks = [], this.event_stack = [], this.event_stack_index = -1, this.localvar_stack = [
                    []
                ], this.localvar_stack_index = 0, this.trigger_depth = 0, this.pushEventStack(null), this.loop_stack = [], this.loop_stack_index = -1, this.next_uid = 0, this.next_puid = 0, this.layout_first_tick = !0, this.family_count = 0, this.suspend_events = [], this.raf_id = -1, this.timeout_id = -1, this.isloading = !0, this.loadingprogress = 0, this.isNodeFullscreen = !1, this.stackLocalCount = 0, this.audioInstance = null, this.had_a_click = !1, this.isInUserInputEvent = !1, this.objects_to_pretick = new cr.ObjectSet, this.objects_to_tick = new cr.ObjectSet, this.objects_to_tick2 = new cr.ObjectSet, this.registered_collisions = [], this.temp_poly = new cr.CollisionPoly([]), this.temp_poly2 = new cr.CollisionPoly([]), this.allGroups = [], this.groups_by_name = {}, this.cndsBySid = {}, this.actsBySid = {}, this.varsBySid = {}, this.blocksBySid = {}, this.running_layout = null, this.layer_canvas = null, this.layer_ctx = null, this.layer_tex = null, this.layout_tex = null, this.layout_canvas = null, this.layout_ctx = null, this.is_WebGL_context_lost = !1, this.uses_background_blending = !1, this.fx_tex = [null, null], this.fullscreen_scaling = 0, this.files_subfolder = "", this.objectsByUid = {}, this.loaderlogos = null, this.snapshotCanvas = null, this.snapshotData = "", this.objectRefTable = [], this.requestProjectData()
            }
        }
        i.prototype.requestProjectData = function() {
            var e = this;
            if (this.isWKWebView) this.fetchLocalFileViaCordovaAsText("data.js", function(t) {
                e.loadProject(JSON.parse(t))
            }, function(t) {
                alert("Error fetching data.js")
            });
            else {
                var i;
                i = this.isWindowsPhone8 ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest;
                var s = "data.js";
                (this.isWindows8App || this.isWindowsPhone8 || this.isWindowsPhone81 || this.isWindows10) && (s = "data.json"), i.open("GET", s, !0);
                var n = !1;
                if (!this.isDomFree && "response" in i && "responseType" in i) try {
                    i.responseType = "json", n = "json" === i.responseType
                } catch (t) {
                    n = !1
                }
                if (!n && "responseType" in i) try {
                    i.responseType = "text"
                } catch (t) {}
                if ("overrideMimeType" in i) try {
                    i.overrideMimeType("application/json; charset=utf-8")
                } catch (t) {}
                this.isWindowsPhone8 ? i.onreadystatechange = function() {
                    4 === i.readyState && e.loadProject(JSON.parse(i.responseText))
                } : (i.onload = function() {
                    if (n) e.loadProject(i.response);
                    else if (e.isEjecta) {
                        var t = i.responseText;
                        t = t.substr(t.indexOf("{")), e.loadProject(JSON.parse(t))
                    } else e.loadProject(JSON.parse(i.responseText))
                }, i.onerror = function(t) {
                    cr.logerror("Error requesting " + s + ":"), cr.logerror(t)
                }), i.send()
            }
        };
        i.prototype.initRendererAndLoader = function() {
            var t, e, i, s, n, r, a, o, h, c, l, u = this;
            this.isRetina = (!this.isDomFree || this.isEjecta || this.isCordova) && this.useHighDpi && !this.isAndroidStockBrowser, 0 === this.fullscreen_mode && this.isiOS && (this.isRetina = !1), this.devicePixelRatio = this.isRetina && (window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio) || 1, this.ClearDeathRow(), 0 < this.fullscreen_mode && this.setSize(window.innerWidth, window.innerHeight, !0), this.canvas.addEventListener("webglcontextlost", function(t) {
                t.preventDefault(), u.onContextLost(), cr.logexport("[Construct 2] WebGL context lost"), window.cr_setSuspended(!0)
            }, !1), this.canvas.addEventListener("webglcontextrestored", function(t) {
                u.glwrap.initState(), u.glwrap.setSize(u.glwrap.width, u.glwrap.height, !0), u.layer_tex = null, u.layout_tex = null, u.fx_tex[0] = null, u.fx_tex[1] = null, u.onContextRestored(), u.redraw = !0, cr.logexport("[Construct 2] WebGL context restored"), window.cr_setSuspended(!1)
            }, !1);
            try {
                this.enableWebGL && (this.isCocoonJs || this.isEjecta || !this.isDomFree) && (l = {
                    alpha: !0,
                    depth: !1,
                    antialias: !1,
                    powerPreference: "high-performance",
                    failIfMajorPerformanceCaveat: !0
                }, this.gl = this.canvas.getContext("webgl2", l) || this.canvas.getContext("webgl", l) || this.canvas.getContext("experimental-webgl", l))
            } catch (t) {}
            if (this.gl) {
                this.gl.getParameter(this.gl.VERSION).indexOf("WebGL 2");
                var p = this.gl.getExtension("WEBGL_debug_renderer_info");
                if (p) {
                    var d = this.gl.getParameter(p.UNMASKED_VENDOR_WEBGL),
                        f = this.gl.getParameter(p.UNMASKED_RENDERER_WEBGL);
                    this.glUnmaskedRenderer = f + " [" + d + "]"
                }
                for (this.enableFrontToBack && (this.glUnmaskedRenderer += " [front-to-back enabled]"), this.isDomFree || (this.overlay_canvas = document.createElement("canvas"), jQuery(this.overlay_canvas).appendTo(this.canvas.parentNode), this.overlay_canvas.oncontextmenu = function(t) {
                        return !1
                    }, this.overlay_canvas.onselectstart = function(t) {
                        return !1
                    }, this.overlay_canvas.width = Math.round(this.cssWidth * this.devicePixelRatio), this.overlay_canvas.height = Math.round(this.cssHeight * this.devicePixelRatio), jQuery(this.overlay_canvas).css({
                        width: this.cssWidth + "px",
                        height: this.cssHeight + "px"
                    }), this.positionOverlayCanvas(), this.overlay_ctx = this.overlay_canvas.getContext("2d")), this.glwrap = new cr.GLWrap(this.gl, this.isMobile, this.enableFrontToBack), this.glwrap.setSize(this.canvas.width, this.canvas.height), this.glwrap.enable_mipmaps = 0 !== this.downscalingQuality, this.ctx = null, t = 0, e = this.types_by_index.length; t < e; t++)
                    for (i = 0, s = (a = this.types_by_index[t]).effect_types.length; i < s; i++)(o = a.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(o.id), o.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(o.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(o.shaderindex);
                for (t = 0, e = this.layouts_by_index.length; t < e; t++) {
                    for (i = 0, s = (h = this.layouts_by_index[t]).effect_types.length; i < s; i++)(o = h.effect_types[i]).shaderindex = this.glwrap.getShaderIndex(o.id), o.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(o.shaderindex);
                    for (h.updateActiveEffects(), i = 0, s = h.layers.length; i < s; i++) {
                        for (n = 0, r = (c = h.layers[i]).effect_types.length; n < r; n++)(o = c.effect_types[n]).shaderindex = this.glwrap.getShaderIndex(o.id), o.preservesOpaqueness = this.glwrap.programPreservesOpaqueness(o.shaderindex), this.uses_background_blending = this.uses_background_blending || this.glwrap.programUsesDest(o.shaderindex);
                        c.updateActiveEffects()
                    }
                }
            } else {
                if (0 < this.fullscreen_mode && this.isDirectCanvas) {
                    this.canvas = null, document.oncontextmenu = function(t) {
                        return !1
                    }, document.onselectstart = function(t) {
                        return !1
                    }, this.ctx = AppMobi.canvas.getContext("2d");
                    try {
                        this.ctx.samplingMode = this.linearSampling ? "smooth" : "sharp", this.ctx.globalScale = 1, this.ctx.HTML5CompatibilityMode = !0, this.ctx.imageSmoothingEnabled = this.linearSampling
                    } catch (t) {}
                    0 !== this.width && 0 !== this.height && (this.ctx.width = this.width, this.ctx.height = this.height)
                }
                this.ctx || (l = this.isCocoonJs ? {
                    antialias: !!this.linearSampling,
                    alpha: !0
                } : {
                    alpha: !0
                }, this.ctx = this.canvas.getContext("2d", l), this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling)), this.overlay_canvas = null, this.overlay_ctx = null
            }
            if (this.tickFunc = function(t) {
                    u.tick(!1, t)
                }, window == window.top || this.isDomFree || this.isWinJS || this.isWindowsPhone8 || (document.addEventListener("mousedown", function() {
                    window.focus()
                }, !0), document.addEventListener("touchstart", function() {
                    window.focus()
                }, !0)), "undefined" != typeof cr_is_preview && (this.isCocoonJs && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (cr.logexport("Reloading for continuous preview"), this.loadFromSlot = "__c2_continuouspreview", this.suspendDrawing = !0), this.pauseOnBlur && !this.isMobile && (jQuery(window).focus(function() {
                    u.setSuspended(!1)
                }), jQuery(window).blur(function() {
                    var t = window.parent;
                    t && t.document.hasFocus() || u.setSuspended(!0)
                }))), window.addEventListener("blur", function() {
                    u.onWindowBlur()
                }), !this.isDomFree) {
                function g(t) {
                    if (cr.isCanvasInputEvent(t) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                        document.activeElement.blur()
                    } catch (t) {}
                }
                "undefined" != typeof PointerEvent ? document.addEventListener("pointerdown", g) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", g) : document.addEventListener("touchstart", g), document.addEventListener("mousedown", g)
            }
            0 === this.fullscreen_mode && this.isRetina && 1 < this.devicePixelRatio && this.setSize(this.original_width, this.original_height, !0), this.tryLockOrientation(), this.getready(), this.go(), this.extra = {}, cr.seal(this)
        };
        i.prototype.setSize = function(t, e, i) {
            var s = 0,
                n = 0,
                r = 0,
                a = 0,
                o = 0;
            if (this.lastWindowWidth !== t || this.lastWindowHeight !== e || i) {
                this.lastWindowWidth = t, this.lastWindowHeight = e;
                var h, c, l = this.fullscreen_mode,
                    u = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen) && !this.isCordova;
                if (u || 0 !== this.fullscreen_mode || i) {
                    u && 0 < this.fullscreen_scaling && (l = this.fullscreen_scaling);
                    var p = this.devicePixelRatio;
                    4 <= l ? (h = this.original_width / this.original_height) < (c = t / e) ? (r = e * h, 5 === l ? (1 < (o = r * p / this.original_width) ? o = Math.floor(o) : o < 1 && (o = 1 / Math.ceil(1 / o)), s = (t - (r = this.original_width * o / p)) / 2, n = (e - (a = this.original_height * o / p)) / 2, t = r, e = a) : (s = (t - r) / 2, t = r)) : (a = t / h, e = (5 === l ? (1 < (o = a * p / this.original_height) ? o = Math.floor(o) : o < 1 && (o = 1 / Math.ceil(1 / o)), s = (t - (r = this.original_width * o / p)) / 2, n = (e - (a = this.original_height * o / p)) / 2, t = r) : n = (e - a) / 2, a)) : this.isNWjs && this.isNodeFullscreen && 0 === this.fullscreen_mode_set && (s = Math.floor((t - this.original_width) / 2), n = Math.floor((e - this.original_height) / 2), t = this.original_width, e = this.original_height), l < 2 && (this.aspect_scale = p), this.cssWidth = Math.round(t), this.cssHeight = Math.round(e), this.width = Math.round(t * p), this.height = Math.round(e * p), this.redraw = !0, this.wantFullscreenScalingQuality ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : this.width < this.original_width && this.height < this.original_height || 1 === l ? (this.draw_width = this.width, this.draw_height = this.height, this.fullscreenScalingQuality = !0) : (this.draw_width = this.original_width, this.draw_height = this.original_height, this.fullscreenScalingQuality = !1, 2 === l ? (h = this.original_width / this.original_height, (c = this.lastWindowWidth / this.lastWindowHeight) < h ? this.draw_width = this.draw_height * c : h < c && (this.draw_height = this.draw_width / c)) : 3 === l && ((h = this.original_width / this.original_height) < (c = this.lastWindowWidth / this.lastWindowHeight) ? this.draw_width = this.draw_height * c : c < h && (this.draw_height = this.draw_width / c))), this.canvasdiv && !this.isDomFree && (jQuery(this.canvasdiv).css({
                        width: Math.round(t) + "px",
                        height: Math.round(e) + "px",
                        "margin-left": Math.floor(s) + "px",
                        "margin-top": Math.floor(n) + "px"
                    }), "undefined" != typeof cr_is_preview && jQuery("#borderwrap").css({
                        width: Math.round(t) + "px",
                        height: Math.round(e) + "px"
                    })), this.canvas && (this.canvas.width = Math.round(t * p), this.canvas.height = Math.round(e * p), this.isEjecta ? (this.canvas.style.left = Math.floor(s) + "px", this.canvas.style.top = Math.floor(n) + "px", this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px") : this.isRetina && !this.isDomFree && (this.canvas.style.width = Math.round(t) + "px", this.canvas.style.height = Math.round(e) + "px")), this.overlay_canvas && (this.overlay_canvas.width = Math.round(t * p), this.overlay_canvas.height = Math.round(e * p), this.overlay_canvas.style.width = this.cssWidth + "px", this.overlay_canvas.style.height = this.cssHeight + "px"), this.glwrap && this.glwrap.setSize(Math.round(t * p), Math.round(e * p)), this.isDirectCanvas && this.ctx && (this.ctx.width = Math.round(t), this.ctx.height = Math.round(e)), this.ctx && this.setCtxImageSmoothingEnabled(this.ctx, this.linearSampling), this.tryLockOrientation(), this.isiPhone && !this.isCordova && window.scrollTo(0, 0)
                }
            }
        }, i.prototype.tryLockOrientation = function() {
            if (this.autoLockOrientation && 0 !== this.orientations) {
                var t = "portrait";
                2 === this.orientations && (t = "landscape");
                try {
                    screen.orientation && screen.orientation.lock ? screen.orientation.lock(t).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(t) : screen.webkitLockOrientation ? screen.webkitLockOrientation(t) : screen.mozLockOrientation ? screen.mozLockOrientation(t) : screen.msLockOrientation && screen.msLockOrientation(t)
                } catch (t) {
                    console && console.warn && console.warn("Failed to lock orientation: ", t)
                }
            }
        }, i.prototype.onContextLost = function() {
            var t, e, i;
            for (this.glwrap.contextLost(), this.is_WebGL_context_lost = !0, t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onLostWebGLContext && i.onLostWebGLContext()
        }, i.prototype.onContextRestored = function() {
            var t, e, i;
            for (this.is_WebGL_context_lost = !1, t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onRestoreWebGLContext && i.onRestoreWebGLContext()
        }, i.prototype.positionOverlayCanvas = function() {
            if (!this.isDomFree) {
                var t = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
                t.position = "absolute", jQuery(this.overlay_canvas).css(t)
            }
        };
        var s = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
        i.prototype.setSuspended = function(t) {
            var e, i;
            if (t && !this.isSuspended)
                for (cr.logexport("[Construct 2] Suspending"), this.isSuspended = !0, -1 !== this.raf_id && s && s(this.raf_id), -1 !== this.timeout_id && clearTimeout(this.timeout_id), e = 0, i = this.suspend_events.length; e < i; e++) this.suspend_events[e](!0);
            else if (!t && this.isSuspended) {
                for (cr.logexport("[Construct 2] Resuming"), this.isSuspended = !1, this.last_tick_time = cr.performance_now(), this.last_fps_time = cr.performance_now(), this.framecount = 0, e = this.logictime = 0, i = this.suspend_events.length; e < i; e++) this.suspend_events[e](!1);
                this.tick(!1)
            }
        }, i.prototype.addSuspendCallback = function(t) {
            this.suspend_events.push(t)
        }, i.prototype.GetObjectReference = function(t) {
            return this.objectRefTable[t]
        };
        var b = !(i.prototype.loadProject = function(t) {
                t && t.project || cr.logerror("Project model unavailable");
                var e, i, s, n, r, a, o, h, c, l, u, p, d, f = t.project;
                if (this.name = f[0], this.first_layout = f[1], this.fullscreen_mode = f[12], this.fullscreen_mode_set = f[12], this.original_width = f[10], this.original_height = f[11], this.parallax_x_origin = this.original_width / 2, this.parallax_y_origin = this.original_height / 2, this.isDomFree && !this.isEjecta && (4 <= f[12] || 0 === f[12]) && (cr.logexport("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.fullscreen_mode = 3, this.fullscreen_mode_set = 3), this.uses_loader_layout = f[18], this.loaderstyle = f[19], 0 === this.loaderstyle) {
                    var g = new Image;
                    g.crossOrigin = "anonymous", this.setImageSrc(g, "loading-logo.png"), this.loaderlogos = {
                        logo: g
                    }
                } else if (4 === this.loaderstyle) {
                    var m = new Image;
                    m.src = "";
                    var y = new Image;
                    y.src = "";
                    var _ = new Image;
                    _.src = "";
                    var v = new Image;
                    v.src = "";
                    var b = new Image;
                    b.src = "";
                    var w = new Image;
                    w.src = "";
                    var x = new Image;
                    x.src = "";
                    var S = new Image;
                    S.src = "";
                    var T = new Image;
                    T.src = "";
                    var C = new Image;
                    C.src = "";
                    var A = new Image;
                    A.src = "";
                    var P = new Image;
                    P.src = "", this.loaderlogos = {
                        logo: [m, y, _, v],
                        powered: [b, w, x, S],
                        website: [T, C, A, P]
                    }
                }
                for (this.next_uid = f[21], this.objectRefTable = cr.getObjectRefTable(), this.system = new cr.system_object(this), e = 0, i = f[2].length; e < i; e++) o = f[2][e], u = this.GetObjectReference(o[0]), cr.add_common_aces(o, u.prototype), (p = new u(this)).singleglobal = o[1], p.is_world = o[2], p.is_rotatable = o[5], p.must_predraw = o[9], p.onCreate && p.onCreate(), cr.seal(p), this.plugins.push(p);
                for (this.objectRefTable = cr.getObjectRefTable(), e = 0, i = f[3].length; e < i; e++) {
                    for (o = f[3][e], d = this.GetObjectReference(o[1]), p = null, s = 0, n = this.plugins.length; s < n; s++)
                        if (this.plugins[s] instanceof d) {
                            p = this.plugins[s];
                            break
                        }
                    var O = new p.Type(p);
                    for (O.name = o[0], O.is_family = o[2], O.instvar_sids = o[3].slice(0), O.vars_count = o[3].length, O.behs_count = o[4], O.fx_count = o[5], O.sid = o[11], O.is_family ? (O.members = [], O.family_index = this.family_count++, O.families = null) : (O.members = null, O.family_index = -1, O.families = []), O.family_var_map = null, O.family_beh_map = null, O.family_fx_map = null, O.is_contained = !1, O.container = null, o[6] ? (O.texture_file = o[6][0], O.texture_filesize = o[6][1], O.texture_pixelformat = o[6][2]) : (O.texture_file = null, O.texture_filesize = 0, O.texture_pixelformat = 0), o[7] ? O.animations = o[7] : O.animations = null, O.index = e, O.instances = [], O.deadCache = [], O.solstack = [new cr.selection(O)], O.cur_sol = 0, O.default_instance = null, O.default_layerindex = 0, O.stale_iids = !0, O.updateIIDs = cr.type_updateIIDs, O.getFirstPicked = cr.type_getFirstPicked, O.getPairedInstance = cr.type_getPairedInstance, O.getCurrentSol = cr.type_getCurrentSol, O.pushCleanSol = cr.type_pushCleanSol, O.pushCopySol = cr.type_pushCopySol, O.popSol = cr.type_popSol, O.getBehaviorByName = cr.type_getBehaviorByName, O.getBehaviorIndexByName = cr.type_getBehaviorIndexByName, O.getEffectIndexByName = cr.type_getEffectIndexByName, O.applySolToContainer = cr.type_applySolToContainer, O.getInstanceByIID = cr.type_getInstanceByIID, O.collision_grid = new cr.SparseGrid(this.original_width, this.original_height), O.any_cell_changed = !0, O.any_instance_parallaxed = !1, O.extra = {}, O.toString = cr.type_toString, O.behaviors = [], s = 0, n = o[8].length; s < n; s++) {
                        h = o[8][s];
                        var k = this.GetObjectReference(h[1]),
                            E = null;
                        for (r = 0, a = this.behaviors.length; r < a; r++)
                            if (this.behaviors[r] instanceof k) {
                                E = this.behaviors[r];
                                break
                            }
                        E || ((E = new k(this)).my_types = [], E.my_instances = new cr.ObjectSet, E.onCreate && E.onCreate(), cr.seal(E), this.behaviors.push(E), cr.behaviors.solid && E instanceof cr.behaviors.solid && (this.solidBehavior = E), cr.behaviors.jumpthru && E instanceof cr.behaviors.jumpthru && (this.jumpthruBehavior = E), cr.behaviors.shadowcaster && E instanceof cr.behaviors.shadowcaster && (this.shadowcasterBehavior = E)), -1 === E.my_types.indexOf(O) && E.my_types.push(O);
                        var R = new E.Type(E, O);
                        R.name = h[0], R.sid = h[2], R.onCreate(), cr.seal(R), O.behaviors.push(R)
                    }
                    for (O.global = o[9], O.isOnLoaderLayout = o[10], O.effect_types = [], s = 0, n = o[12].length; s < n; s++) O.effect_types.push({
                        id: o[12][s][0],
                        name: o[12][s][1],
                        shaderindex: -1,
                        preservesOpaqueness: !1,
                        active: !0,
                        index: s
                    });
                    if (O.tile_poly_data = o[13], this.uses_loader_layout && !O.is_family && !O.isOnLoaderLayout && p.is_world || (O.onCreate(), cr.seal(O)), O.name && (this.types[O.name] = O), this.types_by_index.push(O), p.singleglobal) {
                        var L = new p.Instance(O);
                        L.uid = this.next_uid++, L.puid = this.next_puid++, L.iid = 0, L.get_iid = cr.inst_get_iid, L.toString = cr.inst_toString, L.properties = o[14], L.onCreate(), cr.seal(L), O.instances.push(L), this.objectsByUid[L.uid.toString()] = L
                    }
                }
                for (e = 0, i = f[4].length; e < i; e++) {
                    var I, B = f[4][e],
                        M = this.types_by_index[B[0]];
                    for (s = 1, n = B.length; s < n; s++)(I = this.types_by_index[B[s]]).families.push(M), M.members.push(I)
                }
                for (e = 0, i = f[28].length; e < i; e++) {
                    var F = f[28][e],
                        N = [];
                    for (s = 0, n = F.length; s < n; s++) N.push(this.types_by_index[F[s]]);
                    for (s = 0, n = N.length; s < n; s++) N[s].is_contained = !0, N[s].container = N
                }
                if (0 < this.family_count)
                    for (e = 0, i = this.types_by_index.length; e < i; e++)
                        if (!(c = this.types_by_index[e]).is_family && c.families.length) {
                            c.family_var_map = new Array(this.family_count), c.family_beh_map = new Array(this.family_count), c.family_fx_map = new Array(this.family_count);
                            var D = [],
                                j = 0,
                                W = 0,
                                z = 0;
                            for (s = 0, n = c.families.length; s < n; s++)
                                for (l = c.families[s], c.family_var_map[l.family_index] = j, j += l.vars_count, c.family_beh_map[l.family_index] = W, W += l.behs_count, c.family_fx_map[l.family_index] = z, z += l.fx_count, r = 0, a = l.effect_types.length; r < a; r++) D.push(cr.shallowCopy({}, l.effect_types[r]));
                            for (c.effect_types = D.concat(c.effect_types), s = 0, n = c.effect_types.length; s < n; s++) c.effect_types[s].index = s
                        }
                for (e = 0, i = f[5].length; e < i; e++) {
                    o = f[5][e];
                    var V = new cr.layout(this, o);
                    cr.seal(V), this.layouts[V.name] = V, this.layouts_by_index.push(V)
                }
                for (e = 0, i = f[6].length; e < i; e++) {
                    o = f[6][e];
                    var G = new cr.eventsheet(this, o);
                    cr.seal(G), this.eventsheets[G.name] = G, this.eventsheets_by_index.push(G)
                }
                for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].postInit();
                for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].updateDeepIncludes();
                for (e = 0, i = this.triggers_to_postinit.length; e < i; e++) this.triggers_to_postinit[e].postInit();
                cr.clearArray(this.triggers_to_postinit), this.audio_to_preload = f[7], this.files_subfolder = f[8], this.pixel_rounding = f[9], this.aspect_scale = 1, this.enableWebGL = f[13], this.linearSampling = f[14], this.clearBackground = f[15], this.versionstr = f[16], this.useHighDpi = f[17], this.orientations = f[20], this.autoLockOrientation = 0 < this.orientations, this.pauseOnBlur = f[22], this.wantFullscreenScalingQuality = f[23], this.fullscreenScalingQuality = this.wantFullscreenScalingQuality, this.downscalingQuality = f[24], this.preloadSounds = f[25], this.projectName = f[26], this.enableFrontToBack = f[27] && !this.isIE, this.start_time = Date.now(), cr.clearArray(this.objectRefTable), this.initRendererAndLoader()
            }),
            n = 0,
            r = [];
        i.prototype.queueImageLoad = function(t, e) {
            function i() {
                n--, s.maybeLoadNextImages()
            }
            var s = this;
            t.addEventListener("load", i), t.addEventListener("error", i), r.push([t, e]), this.maybeLoadNextImages()
        }, i.prototype.maybeLoadNextImages = function() {
            for (var t; r.length && n < 100;) n++, t = r.shift(), this.setImageSrc(t[0], t[1])
        }, i.prototype.waitForImageLoad = function(e, i) {
            e.cocoonLazyLoad = !0, e.onerror = function(t) {
                e.c2error = !0, b = !0, console && console.error && console.error("Error loading image '" + e.src + "': ", t)
            }, this.isEjecta ? e.src = i : e.src || ("undefined" != typeof XAPKReader ? XAPKReader.get(i, function(t) {
                e.src = t
            }, function(t) {
                e.c2error = !0, b = !0, console && console.error && console.error("Error extracting image '" + i + "' from expansion file: ", t)
            }) : (e.crossOrigin = "anonymous", this.queueImageLoad(e, i))), this.wait_for_textures.push(e)
        };
        var h = 0,
            c = !(i.prototype.findWaitingTexture = function(t) {
                var e, i;
                for (e = 0, i = this.wait_for_textures.length; e < i; e++)
                    if (this.wait_for_textures[e].cr_src === t) return this.wait_for_textures[e];
                return null
            });
        i.prototype.getready = function() {
            this.audioInstance && (h = this.audioInstance.setPreloadList(this.audio_to_preload))
        };
        var w = !(i.prototype.areAllTexturesAndSoundsLoaded = function() {
            var t, e, i, s = h,
                n = 0,
                r = 0,
                a = !0;
            for (t = 0, e = this.wait_for_textures.length; t < e; t++) {
                var o = (i = this.wait_for_textures[t]).cr_filesize;
                (!o || o <= 0) && (o = 5e4), s += o, i.src && (i.complete || i.loaded) && !i.c2error ? n += o : a = !1
            }
            return a && this.preloadSounds && this.audioInstance && (c || (this.audioInstance.startPreloads(), c = !0), n += r = this.audioInstance.getPreloadedSize(), r < h && (a = !1)), this.progress = 0 == s ? 1 : n / s, a
        });
        i.prototype.go = function() {
            if (this.ctx || this.glwrap) {
                var t = this.ctx || this.overlay_ctx;
                this.overlay_canvas && this.positionOverlayCanvas();
                var e = window.innerWidth,
                    i = window.innerHeight;
                this.lastWindowWidth === e && this.lastWindowHeight === i || this.setSize(e, i), this.progress = 0, this.last_progress = -1;
                var s = this;
                if (this.areAllTexturesAndSoundsLoaded() && (4 !== this.loaderstyle || w)) this.go_loading_finished();
                else {
                    var n = Date.now() - this.start_time;
                    if (t) {
                        var r = this.width,
                            a = this.height,
                            o = this.devicePixelRatio;
                        if (this.loaderstyle < 3 && (this.isCocoonJs || 500 <= n && this.last_progress != this.progress)) {
                            t.clearRect(0, 0, r, a);
                            var h, c = r / 2,
                                l = a / 2,
                                u = 0 === this.loaderstyle && this.loaderlogos.logo.complete,
                                p = 40 * o,
                                d = 0,
                                f = 80 * o;
                            if (u) {
                                var g = this.loaderlogos.logo;
                                p = (f = g.width * o) / 2, d = (h = g.height * o) / 2, t.drawImage(g, cr.floor(c - p), cr.floor(l - d), f, h)
                            }
                            if (this.loaderstyle <= 1) l += d + (u ? 12 * o : 0), c -= p, c = cr.floor(c) + .5, l = cr.floor(l) + .5, t.fillStyle = b ? "red" : "DodgerBlue", t.fillRect(c, l, Math.floor(f * this.progress), 6 * o), t.strokeStyle = "black", t.strokeRect(c, l, f, 6 * o), t.strokeStyle = "white", t.strokeRect(c - 1 * o, l - 1 * o, f + 2 * o, 8 * o);
                            else if (2 === this.loaderstyle) {
                                t.font = this.isEjecta ? "12pt ArialMT" : "12pt Arial", t.fillStyle = b ? "#f00" : "#999", t.textBaseLine = "middle";
                                var m = Math.round(100 * this.progress) + "%",
                                    y = t.measureText ? t.measureText(m) : null,
                                    _ = y ? y.width : 0;
                                t.fillText(m, c - _ / 2, l)
                            }
                            this.last_progress = this.progress
                        } else if (4 === this.loaderstyle) return this.draw_c2_splash_loader(t), void(v ? v(function() {
                            s.go()
                        }) : setTimeout(function() {
                            s.go()
                        }, 16))
                    }
                    setTimeout(function() {
                        s.go()
                    }, this.isCocoonJs ? 10 : 100)
                }
            }
        };
        var p = -1,
            d = "undefined" == typeof cr_is_preview ? 200 : 0,
            f = !0,
            g = !1,
            m = 0,
            y = 0,
            _ = "undefined" == typeof cr_is_preview ? 3e3 : 0,
            x = null,
            S = null,
            T = 0;

        function C(t, e) {
            return e <= 128 ? t[3] : e <= 256 ? t[2] : e <= 512 ? t[1] : t[0]
        }
        i.prototype.draw_c2_splash_loader = function(t) {
            if (!w) {
                for (var e = Math.ceil(this.width), i = Math.ceil(this.height), s = (this.devicePixelRatio, this.loaderlogos.logo), n = this.loaderlogos.powered, r = this.loaderlogos.website, a = 0; a < 4; ++a)
                    if (!s[a].complete || !n[a].complete || !r[a].complete) return;
                0 === T && (p = Date.now());
                var o, h, c = Date.now(),
                    l = !1,
                    u = t;
                f || g ? (t.clearRect(0, 0, e, i), function(t, e) {
                    x && x.width === t && x.height === e || ((x = document.createElement("canvas")).width = t, x.height = e, S = x.getContext("2d"))
                }(e, i), u = S, l = !0, f && 1 === T && (p = Date.now())) : t.globalAlpha = 1, u.fillStyle = "#333333", u.fillRect(0, 0, e, i), 256 < this.cssHeight ? (h = .25 * (o = cr.clamp(.22 * i, 105, .6 * e)), u.drawImage(C(n, o), .5 * e - o / 2, .2 * i - h / 2, o, h), h = o = Math.min(.395 * i, .95 * e), u.drawImage(C(s, o), .5 * e - o / 2, .485 * i - h / 2, o, h), h = .25 * (o = cr.clamp(.22 * i, 105, .6 * e)), u.drawImage(C(r, o), .5 * e - o / 2, .868 * i - h / 2, o, h), u.fillStyle = "#3C3C3C", o = e, h = Math.max(.005 * i, 2), u.fillRect(0, .8 * i - h / 2, o, h), u.fillStyle = b ? "red" : "#E0FF65", o = e * this.progress, u.fillRect(.5 * e - o / 2, .8 * i - h / 2, o, h)) : (h = o = .55 * i, u.drawImage(C(s, o), .5 * e - o / 2, .45 * i - h / 2, o, h), u.fillStyle = "#3C3C3C", o = e, h = Math.max(.005 * i, 2), u.fillRect(0, .85 * i - h / 2, o, h), u.fillStyle = b ? "red" : "#E0FF65", o = e * this.progress, u.fillRect(.5 * e - o / 2, .85 * i - h / 2, o, h)), l && (f ? t.globalAlpha = 0 === T ? 0 : Math.min((c - p) / 300, 1) : g && (t.globalAlpha = Math.max(1 - (c - y) / 300, 0)), t.drawImage(x, 0, 0, e, i)), f && 300 <= c - p && 2 <= T && (f = !1, m = c), !f && _ <= c - m && !g && 1 <= this.progress && (g = !0, y = c), (g && 300 + d <= c - y || "undefined" != typeof cr_is_preview && 1 <= this.progress && Date.now() - p < 500) && (g = f = !(w = !0), S = x = null, this.loaderlogos = null), ++T
            }
        }, i.prototype.go_loading_finished = function() {
            var t, e, i;
            if (this.overlay_canvas && (this.canvas.parentNode.removeChild(this.overlay_canvas), this.overlay_ctx = null, this.overlay_canvas = null), this.start_time = Date.now(), this.last_fps_time = cr.performance_now(), this.uses_loader_layout)
                for (t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).is_family || i.isOnLoaderLayout || !i.plugin.is_world || (i.onCreate(), cr.seal(i));
            else this.isloading = !1;
            for (t = 0, e = this.layouts_by_index.length; t < e; t++) this.layouts_by_index[t].createGlobalNonWorlds();
            if (2 <= this.fullscreen_mode) {
                var s = this.original_width / this.original_height,
                    n = this.width / this.height;
                2 !== this.fullscreen_mode && s < n || 2 === this.fullscreen_mode && n < s ? this.aspect_scale = this.height / this.original_height : this.aspect_scale = this.width / this.original_width
            }
            for (this.first_layout ? this.layouts[this.first_layout].startRunning() : this.layouts_by_index[0].startRunning(), this.uses_loader_layout || (this.loadingprogress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW()), navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide(), t = 0, e = this.types_by_index.length; t < e; t++)(i = this.types_by_index[t]).onAppBegin && i.onAppBegin();
            document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.tick(!1), this.isDirectCanvas && AppMobi.webview.execute("onGameReady();")
        }, i.prototype.tick = function(t, e, i) {
            if (this.running_layout) {
                var s = cr.performance_now(),
                    n = s;
                if (i || !this.isSuspended || t) {
                    t || (v ? this.raf_id = v(this.tickFunc) : this.timeout_id = setTimeout(this.tickFunc, this.isMobile ? 1 : 16));
                    var r = e || s,
                        a = this.fullscreen_mode,
                        o = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.isCordova;
                    if ((o || this.isNodeFullscreen) && 0 < this.fullscreen_scaling && (a = this.fullscreen_scaling), 0 < a) {
                        var h = window.innerWidth,
                            c = window.innerHeight;
                        this.lastWindowWidth === h && this.lastWindowHeight === c || this.setSize(h, c)
                    }
                    if (this.isDomFree || (o ? this.firstInFullscreen || (this.firstInFullscreen = !0) : this.firstInFullscreen ? (this.firstInFullscreen = !1, 0 === this.fullscreen_mode && this.setSize(Math.round(this.oldWidth / this.devicePixelRatio), Math.round(this.oldHeight / this.devicePixelRatio), !0)) : (this.oldWidth = this.width, this.oldHeight = this.height)), this.isloading) {
                        var l = this.areAllTexturesAndSoundsLoaded();
                        this.loadingprogress = this.progress, l && (this.isloading = !1, this.progress = 1, this.trigger(cr.system_object.prototype.cnds.OnLoadFinished, null), window.C2_RegisterSW && window.C2_RegisterSW())
                    }
                    this.logic(r), !this.redraw && !this.isCocoonJs || this.is_WebGL_context_lost || this.suspendDrawing || t || (this.redraw = !1, this.glwrap ? this.drawGL() : this.draw(), this.snapshotCanvas && (this.canvas && this.canvas.toDataURL && (this.snapshotData = this.canvas.toDataURL(this.snapshotCanvas[0], this.snapshotCanvas[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.snapshotData), this.trigger(cr.system_object.prototype.cnds.OnCanvasSnapshot, null)), this.snapshotCanvas = null)), this.hit_breakpoint || (this.tickcount++, this.tickcount_nosave++, this.execcount++, this.framecount++), this.logictime += cr.performance_now() - n
                }
            }
        }, i.prototype.logic = function(t) {
            var e, i, s, n, r, a, o, h;
            1e3 <= t - this.last_fps_time && (this.last_fps_time += 1e3, 1e3 <= t - this.last_fps_time && (this.last_fps_time = t), this.fps = this.framecount, this.framecount = 0, this.cpuutilisation = this.logictime, this.logictime = 0);
            var c = 0;
            if (0 !== this.last_tick_time) {
                var l = t - this.last_tick_time;
                l < 0 && (l = 0), c = l / 1e3, this.dt1 = c, .5 < this.dt1 ? this.dt1 = 0 : this.dt1 > 1 / this.minimumFramerate && (this.dt1 = 1 / this.minimumFramerate)
            }
            this.last_tick_time = t, this.dt = this.dt1 * this.timescale, this.kahanTime.add(this.dt), this.wallTime.add(c);
            var u = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.isNodeFullscreen) && !this.isCordova;
            if (2 <= this.fullscreen_mode || u && 0 < this.fullscreen_scaling) {
                var p = this.original_width / this.original_height,
                    d = this.width / this.height,
                    f = this.fullscreen_mode;
                u && 0 < this.fullscreen_scaling && (f = this.fullscreen_scaling), this.aspect_scale = 2 !== f && p < d || 2 === f && d < p ? this.height / this.original_height : this.width / this.original_width, this.running_layout && (this.running_layout.scrollToX(this.running_layout.scrollX), this.running_layout.scrollToY(this.running_layout.scrollY))
            } else this.aspect_scale = this.isRetina ? this.devicePixelRatio : 1;
            this.ClearDeathRow(), this.isInOnDestroy++, this.system.runWaits(), this.isInOnDestroy--, this.ClearDeathRow(), this.isInOnDestroy++;
            var g = this.objects_to_pretick.valuesRef();
            for (e = 0, i = g.length; e < i; e++) g[e].pretick();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (!(o = this.types_by_index[e]).is_family && (o.behaviors.length || o.families.length))
                    for (s = 0, n = o.instances.length; s < n; s++)
                        for (r = 0, a = (m = o.instances[s]).behavior_insts.length; r < a; r++) m.behavior_insts[r].tick();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (!(o = this.types_by_index[e]).is_family && (o.behaviors.length || o.families.length))
                    for (s = 0, n = o.instances.length; s < n; s++)
                        for (r = 0, a = (m = o.instances[s]).behavior_insts.length; r < a; r++)(h = m.behavior_insts[r]).posttick && h.posttick();
            for (e = 0, i = (g = this.objects_to_tick.valuesRef()).length; e < i; e++) g[e].tick();
            for (this.isInOnDestroy--, this.handleSaveLoad(), e = 0; this.changelayout && e++ < 10;) this.doChangeLayout(this.changelayout);
            for (e = 0, i = this.eventsheets_by_index.length; e < i; e++) this.eventsheets_by_index[e].hasRun = !1;
            for (this.running_layout.event_sheet && this.running_layout.event_sheet.run(), cr.clearArray(this.registered_collisions), this.layout_first_tick = !1, this.isInOnDestroy++, e = 0, i = this.types_by_index.length; e < i; e++)
                if (!(o = this.types_by_index[e]).is_family && (o.behaviors.length || o.families.length))
                    for (s = 0, n = o.instances.length; s < n; s++) {
                        var m;
                        for (r = 0, a = (m = o.instances[s]).behavior_insts.length; r < a; r++)(h = m.behavior_insts[r]).tick2 && h.tick2()
                    }
            for (e = 0, i = (g = this.objects_to_tick2.valuesRef()).length; e < i; e++) g[e].tick2();
            this.isInOnDestroy--
        }, i.prototype.onWindowBlur = function() {
            var t, e, i, s, n, r, a, o, h;
            for (t = 0, e = this.types_by_index.length; t < e; t++)
                if (!(a = this.types_by_index[t]).is_family)
                    for (i = 0, s = a.instances.length; i < s; i++)
                        if ((o = a.instances[i]).onWindowBlur && o.onWindowBlur(), o.behavior_insts)
                            for (n = 0, r = o.behavior_insts.length; n < r; n++)(h = o.behavior_insts[n]).onWindowBlur && h.onWindowBlur()
        }, i.prototype.doChangeLayout = function(t) {
            var e, i, s, n = this.running_layout;
            if (this.running_layout.stopRunning(), this.glwrap)
                for (e = 0, i = this.types_by_index.length; e < i; e++)(s = this.types_by_index[e]).is_family || !s.unloadTextures || s.global && 0 !== s.instances.length || -1 !== t.initial_types.indexOf(s) || s.unloadTextures();
            n == t && cr.clearArray(this.system.waits), cr.clearArray(this.registered_collisions), this.runLayoutChangeMethods(!0), t.startRunning(), this.runLayoutChangeMethods(!1), this.redraw = !0, this.layout_first_tick = !0, this.ClearDeathRow()
        }, i.prototype.runLayoutChangeMethods = function(t) {
            var e, i, s, n, r, a, o, h, c, l;
            for (e = 0, i = this.behaviors.length; e < i; e++) s = this.behaviors[e], t ? s.onBeforeLayoutChange && s.onBeforeLayoutChange() : s.onLayoutChange && s.onLayoutChange();
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if ((n = this.types_by_index[e]).global || n.plugin.singleglobal)
                    for (r = 0, a = n.instances.length; r < a; r++)
                        if (o = n.instances[r], t ? o.onBeforeLayoutChange && o.onBeforeLayoutChange() : o.onLayoutChange && o.onLayoutChange(), o.behavior_insts)
                            for (h = 0, c = o.behavior_insts.length; h < c; h++) l = o.behavior_insts[h], t ? l.onBeforeLayoutChange && l.onBeforeLayoutChange() : l.onLayoutChange && l.onLayoutChange()
        }, i.prototype.pretickMe = function(t) {
            this.objects_to_pretick.add(t)
        }, i.prototype.unpretickMe = function(t) {
            this.objects_to_pretick.remove(t)
        }, i.prototype.tickMe = function(t) {
            this.objects_to_tick.add(t)
        }, i.prototype.untickMe = function(t) {
            this.objects_to_tick.remove(t)
        }, i.prototype.tick2Me = function(t) {
            this.objects_to_tick2.add(t)
        }, i.prototype.untick2Me = function(t) {
            this.objects_to_tick2.remove(t)
        }, i.prototype.getDt = function(t) {
            return t && -1 !== t.my_timescale ? this.dt1 * t.my_timescale : this.dt
        }, i.prototype.draw = function() {
            this.running_layout.draw(this.ctx), this.isDirectCanvas && this.ctx.present()
        }, i.prototype.drawGL = function() {
            this.enableFrontToBack && (this.earlyz_index = 1, this.running_layout.drawGL_earlyZPass(this.glwrap)), this.running_layout.drawGL(this.glwrap), this.glwrap.present()
        }, i.prototype.addDestroyCallback = function(t) {
            t && this.destroycallbacks.push(t)
        }, i.prototype.removeDestroyCallback = function(t) {
            cr.arrayFindRemove(this.destroycallbacks, t)
        }, i.prototype.getObjectByUID = function(t) {
            var e = t.toString();
            return this.objectsByUid.hasOwnProperty(e) ? this.objectsByUid[e] : null
        };
        var A = [];
        i.prototype.DestroyInstance = function(t) {
            var e, i, s = t.type.name,
                n = null;
            if (this.deathRow.hasOwnProperty(s)) {
                if ((n = this.deathRow[s]).contains(t)) return
            } else n = A.length ? A.pop() : new cr.ObjectSet, this.deathRow[s] = n;
            if (n.add(t), this.hasPendingInstances = !0, t.is_contained)
                for (e = 0, i = t.siblings.length; e < i; e++) this.DestroyInstance(t.siblings[e]);
            this.isInClearDeathRow && n.values_cache.push(t), this.isEndingLayout || (this.isInOnDestroy++, this.trigger(Object.getPrototypeOf(t.type.plugin).cnds.OnDestroyed, t), this.isInOnDestroy--)
        }, i.prototype.ClearDeathRow = function() {
            if (this.hasPendingInstances) {
                var t, e, i, s, n, r;
                for (this.isInClearDeathRow = !0, i = 0, n = this.createRow.length; i < n; ++i)
                    for ((e = (t = this.createRow[i]).type).instances.push(t), s = 0, r = e.families.length; s < r; ++s) e.families[s].instances.push(t), e.families[s].stale_iids = !0;
                cr.clearArray(this.createRow), this.IterateDeathRow(), cr.wipe(this.deathRow), this.isInClearDeathRow = !1, this.hasPendingInstances = !1
            }
        }, i.prototype.IterateDeathRow = function() {
            for (var t in this.deathRow) this.deathRow.hasOwnProperty(t) && this.ClearDeathRowForType(this.deathRow[t])
        }, i.prototype.ClearDeathRowForType = function(t) {
            var e, i, s, n, r, a, o, h, c = t.valuesRef(),
                l = c[0].type;
            for (cr.arrayRemoveAllFromObjectSet(l.instances, t), l.stale_iids = !0, 0 === l.instances.length && (l.any_instance_parallaxed = !1), e = 0, i = l.families.length; e < i; ++e) a = l.families[e], cr.arrayRemoveAllFromObjectSet(a.instances, t), a.stale_iids = !0;
            for (e = 0, i = this.system.waits.length; e < i; ++e)
                if ((r = this.system.waits[e]).sols.hasOwnProperty(l.index) && cr.arrayRemoveAllFromObjectSet(r.sols[l.index].insts, t), !l.is_family)
                    for (s = 0, n = l.families.length; s < n; ++s) a = l.families[s], r.sols.hasOwnProperty(a.index) && cr.arrayRemoveAllFromObjectSet(r.sols[a.index].insts, t);
            var u = c[0].layer;
            if (u) {
                if (u.useRenderCells)
                    for (e = 0, i = (o = u.instances).length; e < i; ++e) h = o[e], t.contains(h) && (h.update_bbox(), u.render_grid.update(h, h.rendercells, null), h.rendercells.set(0, 0, -1, -1));
                cr.arrayRemoveAllFromObjectSet(u.instances, t), u.setZIndicesStaleFrom(0)
            }
            for (e = 0; e < c.length; ++e) this.ClearDeathRowForSingleInstance(c[e], l);
            ! function(t) {
                t.clear(), A.push(t)
            }(t), this.redraw = !0
        }, i.prototype.ClearDeathRowForSingleInstance = function(t, e) {
            var i, s, n;
            for (i = 0, s = this.destroycallbacks.length; i < s; ++i) this.destroycallbacks[i](t);
            t.collcells && e.collision_grid.update(t, t.collcells, null);
            var r = t.layer;
            if (r && r.removeFromInstanceList(t, !0), t.behavior_insts)
                for (i = 0, s = t.behavior_insts.length; i < s; ++i)(n = t.behavior_insts[i]).onDestroy && n.onDestroy(), n.behavior.my_instances.remove(t);
            this.objects_to_pretick.remove(t), this.objects_to_tick.remove(t), this.objects_to_tick2.remove(t), t.onDestroy && t.onDestroy(), this.objectsByUid.hasOwnProperty(t.uid.toString()) && delete this.objectsByUid[t.uid.toString()], this.objectcount--, e.deadCache.length < 100 && e.deadCache.push(t)
        }, i.prototype.createInstance = function(t, e, i, s) {
            if (t.is_family) {
                var n = cr.floor(Math.random() * t.members.length);
                return this.createInstance(t.members[n], e, i, s)
            }
            return t.default_instance ? this.createInstanceFromInit(t.default_instance, e, !1, i, s, !1) : null
        };
        var P = [];
        i.prototype.createInstanceFromInit = function(t, e, i, s, n, r) {
            var a, o, h, c, l;
            if (!t) return null;
            var u = this.types_by_index[t[1]],
                p = u.plugin.is_world;
            if (this.isloading && p && !u.isOnLoaderLayout) return null;
            if (p && !this.glwrap && 11 === t[0][11]) return null;
            var d, f = e;
            for (p || (e = null), u.deadCache.length ? ((d = u.deadCache.pop()).recycled = !0, u.plugin.Instance.call(d, u)) : (d = new u.plugin.Instance(u)).recycled = !1, !i || r || this.objectsByUid.hasOwnProperty(t[2].toString()) ? d.uid = this.next_uid++ : d.uid = t[2], (this.objectsByUid[d.uid.toString()] = d).puid = this.next_puid++, d.iid = u.instances.length, a = 0, o = this.createRow.length; a < o; ++a) this.createRow[a].type === u && d.iid++;
            d.get_iid = cr.inst_get_iid, d.toString = cr.inst_toString;
            var g, m = t[3];
            if (d.recycled) cr.wipe(d.extra);
            else {
                if (d.extra = {}, "undefined" != typeof cr_is_preview)
                    for (d.instance_var_names = [], d.instance_var_names.length = m.length, a = 0, o = m.length; a < o; a++) d.instance_var_names[a] = m[a][1];
                d.instance_vars = [], d.instance_vars.length = m.length
            }
            for (a = 0, o = m.length; a < o; a++) d.instance_vars[a] = m[a][0];
            if (p) {
                var y = t[0];
                if (d.x = cr.is_undefined(s) ? y[0] : s, d.y = cr.is_undefined(n) ? y[1] : n, d.z = y[2], d.width = y[3], d.height = y[4], d.depth = y[5], d.angle = y[6], d.opacity = y[7], d.hotspotX = y[8], d.hotspotY = y[9], d.blend_mode = y[10], l = y[11], !this.glwrap && u.effect_types.length && (d.blend_mode = l), d.compositeOp = cr.effectToCompositeOp(d.blend_mode), this.gl && cr.setGLBlend(d, d.blend_mode, this.gl), d.recycled) {
                    for (a = 0, o = y[12].length; a < o; a++)
                        for (h = 0, c = y[12][a].length; h < c; h++) d.effect_params[a][h] = y[12][a][h];
                    d.bbox.set(0, 0, 0, 0), d.collcells.set(0, 0, -1, -1), d.rendercells.set(0, 0, -1, -1), d.bquad.set_from_rect(d.bbox), cr.clearArray(d.bbox_changed_callbacks)
                } else {
                    for (d.effect_params = y[12].slice(0), a = 0, o = d.effect_params.length; a < o; a++) d.effect_params[a] = y[12][a].slice(0);
                    d.active_effect_types = [], d.active_effect_flags = [], d.active_effect_flags.length = u.effect_types.length, d.bbox = new cr.rect(0, 0, 0, 0), d.collcells = new cr.rect(0, 0, -1, -1), d.rendercells = new cr.rect(0, 0, -1, -1), d.bquad = new cr.quad, d.bbox_changed_callbacks = [], d.set_bbox_changed = cr.set_bbox_changed, d.add_bbox_changed_callback = cr.add_bbox_changed_callback, d.contains_pt = cr.inst_contains_pt, d.update_bbox = cr.update_bbox, d.update_render_cell = cr.update_render_cell, d.update_collision_cell = cr.update_collision_cell, d.get_zindex = cr.inst_get_zindex
                }
                for (d.tilemap_exists = !1, d.tilemap_width = 0, d.tilemap_height = 0, d.tilemap_data = null, 14 === y.length && (d.tilemap_exists = !0, d.tilemap_width = y[13][0], d.tilemap_height = y[13][1], d.tilemap_data = y[13][2]), a = 0, o = u.effect_types.length; a < o; a++) d.active_effect_flags[a] = !0;
                d.shaders_preserve_opaqueness = !0, d.updateActiveEffects = cr.inst_updateActiveEffects, d.updateActiveEffects(), d.uses_shaders = !!d.active_effect_types.length, d.bbox_changed = !0, d.cell_changed = !0, u.any_cell_changed = !0, d.visible = !0, d.my_timescale = -1, d.layer = e, d.zindex = e.instances.length, void(d.earlyz_index = 0) === d.collision_poly && (d.collision_poly = null), d.collisionsEnabled = !0, this.redraw = !0
            }
            for (cr.clearArray(P), a = 0, o = u.families.length; a < o; a++) P.push.apply(P, u.families[a].behaviors);
            if (P.push.apply(P, u.behaviors), d.recycled)
                for (a = 0, o = P.length; a < o; a++) {
                    var _ = P[a];
                    for ((v = d.behavior_insts[a]).recycled = !0, _.behavior.Instance.call(v, _, d), h = 0, c = (g = t[4][a]).length; h < c; h++) v.properties[h] = g[h];
                    v.onCreate(), _.behavior.my_instances.add(d)
                } else
                    for (d.behavior_insts = [], a = 0, o = P.length; a < o; a++) {
                        var v;
                        (v = new(_ = P[a]).behavior.Instance(_, d)).recycled = !1, v.properties = t[4][a].slice(0), v.onCreate(), cr.seal(v), d.behavior_insts.push(v), _.behavior.my_instances.add(d)
                    }
            if (g = t[5], d.recycled)
                for (a = 0, o = g.length; a < o; a++) d.properties[a] = g[a];
            else d.properties = g.slice(0);
            if (this.createRow.push(d), this.hasPendingInstances = !0, e && (e.appendToInstanceList(d, !0), 1 === e.parallaxX && 1 === e.parallaxY || (u.any_instance_parallaxed = !0)), this.objectcount++, u.is_contained) {
                if (d.is_contained = !0, d.recycled ? cr.clearArray(d.siblings) : d.siblings = [], !i && !r) {
                    for (a = 0, o = u.container.length; a < o; a++)
                        if (u.container[a] !== u) {
                            if (!u.container[a].default_instance) return null;
                            d.siblings.push(this.createInstanceFromInit(u.container[a].default_instance, f, !1, p ? d.x : s, p ? d.y : n, !0))
                        }
                    for (a = 0, o = d.siblings.length; a < o; a++)
                        for (d.siblings[a].siblings.push(d), h = 0; h < o; h++) a !== h && d.siblings[a].siblings.push(d.siblings[h])
                }
            } else d.is_contained = !1, d.siblings = null;
            for (d.onCreate(), d.recycled || cr.seal(d), a = 0, o = d.behavior_insts.length; a < o; a++) d.behavior_insts[a].postCreate && d.behavior_insts[a].postCreate();
            return d
        }, i.prototype.getLayerByName = function(t) {
            var e, i;
            for (e = 0, i = this.running_layout.layers.length; e < i; e++) {
                var s = this.running_layout.layers[e];
                if (cr.equals_nocase(s.name, t)) return s
            }
            return null
        }, i.prototype.getLayerByNumber = function(t) {
            return (t = cr.floor(t)) < 0 && (t = 0), t >= this.running_layout.layers.length && (t = this.running_layout.layers.length - 1), this.running_layout.layers[t]
        }, i.prototype.getLayer = function(t) {
            return cr.is_number(t) ? this.getLayerByNumber(t) : this.getLayerByName(t.toString())
        }, i.prototype.clearSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].getCurrentSol().select_all = !0
        }, i.prototype.pushCleanSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].pushCleanSol()
        }, i.prototype.pushCopySol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].pushCopySol()
        }, i.prototype.popSol = function(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) t[e].popSol()
        }, i.prototype.updateAllCells = function(t) {
            if (t.any_cell_changed) {
                var e, i, s = t.instances;
                for (e = 0, i = s.length; e < i; ++e) s[e].update_collision_cell();
                var n = this.createRow;
                for (e = 0, i = n.length; e < i; ++e) n[e].type === t && n[e].update_collision_cell();
                t.any_cell_changed = !1
            }
        }, i.prototype.getCollisionCandidates = function(t, e, i, s) {
            var n, r, a, o = !!t && (1 !== t.parallaxX || 1 !== t.parallaxY);
            if (e.is_family)
                for (n = 0, r = e.members.length; n < r; ++n) a = e.members[n], o || a.any_instance_parallaxed ? cr.appendArray(s, a.instances) : (this.updateAllCells(a), a.collision_grid.queryRange(i, s));
            else o || e.any_instance_parallaxed ? cr.appendArray(s, e.instances) : (this.updateAllCells(e), e.collision_grid.queryRange(i, s))
        }, i.prototype.getTypesCollisionCandidates = function(t, e, i, s) {
            var n, r;
            for (n = 0, r = e.length; n < r; ++n) this.getCollisionCandidates(t, e[n], i, s)
        }, i.prototype.getSolidCollisionCandidates = function(t, e, i) {
            var s = this.getSolidBehavior();
            if (!s) return null;
            this.getTypesCollisionCandidates(t, s.my_types, e, i)
        }, i.prototype.getJumpthruCollisionCandidates = function(t, e, i) {
            var s = this.getJumpthruBehavior();
            if (!s) return null;
            this.getTypesCollisionCandidates(t, s.my_types, e, i)
        }, i.prototype.testAndSelectCanvasPointOverlap = function(t, e, i, s) {
            var n, r, a, o, h, c, l, u = t.getCurrentSol(),
                p = this.getCurrentEventStack().current_event.orblock;
            if (u.select_all)
                for (s || (u.select_all = !1, cr.clearArray(u.instances)), n = 0, o = t.instances.length; n < o; n++)
                    if ((a = t.instances[n]).update_bbox(), h = a.layer.canvasToLayer(e, i, !0), c = a.layer.canvasToLayer(e, i, !1), a.contains_pt(h, c)) {
                        if (s) return !1;
                        u.instances.push(a)
                    } else p && u.else_instances.push(a);
            else {
                for (n = r = 0, o = (l = p ? u.else_instances : u.instances).length; n < o; n++)
                    if ((a = l[n]).update_bbox(), h = a.layer.canvasToLayer(e, i, !0), c = a.layer.canvasToLayer(e, i, !1), a.contains_pt(h, c)) {
                        if (s) return !1;
                        p ? u.instances.push(a) : (u.instances[r] = u.instances[n], r++)
                    }
                s || (l.length = r)
            }
            return t.applySolToContainer(), !!s || u.hasObjects()
        }, i.prototype.testOverlap = function(t, e) {
            if (!(t && e && t !== e && t.collisionsEnabled && e.collisionsEnabled)) return !1;
            t.update_bbox(), e.update_bbox();
            var i, s, n, r, a, o, h, c, l, u, p = t.layer,
                d = e.layer;
            if (p === d || p.parallaxX === d.parallaxX && d.parallaxY == d.parallaxY && p.scale === d.scale && p.angle === d.angle && p.zoomRate === d.zoomRate) return !!t.bbox.intersects_rect(e.bbox) && (!!t.bquad.intersects_quad(e.bquad) && ((!t.tilemap_exists || !e.tilemap_exists) && (t.tilemap_exists ? this.testTilemapOverlap(t, e) : e.tilemap_exists ? this.testTilemapOverlap(e, t) : (h = t.collision_poly && !t.collision_poly.is_empty(), c = e.collision_poly && !e.collision_poly.is_empty(), !h && !c || (l = h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), t.collision_poly) : (this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), this.temp_poly), u = c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), e.collision_poly) : (this.temp_poly.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), this.temp_poly), l.intersects_poly(u, e.x - t.x, e.y - t.y))))));
            for (h = t.collision_poly && !t.collision_poly.is_empty(), c = e.collision_poly && !e.collision_poly.is_empty(), h ? (t.collision_poly.cache_poly(t.width, t.height, t.angle), this.temp_poly.set_from_poly(t.collision_poly)) : this.temp_poly.set_from_quad(t.bquad, t.x, t.y, t.width, t.height), l = this.temp_poly, c ? (e.collision_poly.cache_poly(e.width, e.height, e.angle), this.temp_poly2.set_from_poly(e.collision_poly)) : this.temp_poly2.set_from_quad(e.bquad, e.x, e.y, e.width, e.height), u = this.temp_poly2, i = 0, s = l.pts_count; i < s; i++) r = (n = 2 * i) + 1, a = l.pts_cache[n], o = l.pts_cache[r], l.pts_cache[n] = p.layerToCanvas(a + t.x, o + t.y, !0), l.pts_cache[r] = p.layerToCanvas(a + t.x, o + t.y, !1);
            for (l.update_bbox(), i = 0, s = u.pts_count; i < s; i++) r = (n = 2 * i) + 1, a = u.pts_cache[n], o = u.pts_cache[r], u.pts_cache[n] = d.layerToCanvas(a + e.x, o + e.y, !0), u.pts_cache[r] = d.layerToCanvas(a + e.x, o + e.y, !1);
            return u.update_bbox(), l.intersects_poly(u, 0, 0)
        };
        var O = new cr.quad,
            k = new cr.rect(0, 0, 0, 0),
            E = [];
        i.prototype.testTilemapOverlap = function(t, e) {
            var i, s, n, r, a = e.bbox,
                o = t.x,
                h = t.y;
            t.getCollisionRectCandidates(a, E);
            var c = E,
                l = e.collision_poly && !e.collision_poly.is_empty();
            for (i = 0, s = c.length; i < s; ++i)
                if (r = (n = c[i]).rc, a.intersects_rect_off(r, o, h) && (O.set_from_rect(r), O.offset(o, h), O.intersects_quad(e.bquad)))
                    if (l) {
                        if (e.collision_poly.cache_poly(e.width, e.height, e.angle), n.poly) {
                            if (n.poly.intersects_poly(e.collision_poly, e.x - (o + r.left), e.y - (h + r.top))) return cr.clearArray(E), !0
                        } else if (this.temp_poly.set_from_quad(O, 0, 0, r.right - r.left, r.bottom - r.top), this.temp_poly.intersects_poly(e.collision_poly, e.x, e.y)) return cr.clearArray(E), !0
                    } else {
                        if (!n.poly) return cr.clearArray(E), !0;
                        if (this.temp_poly.set_from_quad(e.bquad, 0, 0, e.width, e.height), n.poly.intersects_poly(this.temp_poly, -(o + r.left), -(h + r.top))) return cr.clearArray(E), !0
                    }
            return cr.clearArray(E), !1
        }, i.prototype.testRectOverlap = function(t, e) {
            if (!e || !e.collisionsEnabled) return !1;
            e.update_bbox();
            e.layer;
            if (!e.bbox.intersects_rect(t)) return !1;
            if (e.tilemap_exists) {
                e.getCollisionRectCandidates(t, E);
                var i, s, n, r, a = E,
                    o = e.x,
                    h = e.y;
                for (i = 0, s = a.length; i < s; ++i)
                    if (r = (n = a[i]).rc, t.intersects_rect_off(r, o, h)) {
                        if (!n.poly) return cr.clearArray(E), !0;
                        if (this.temp_poly.set_from_rect(t, 0, 0), n.poly.intersects_poly(this.temp_poly, -(o + r.left), -(h + r.top))) return cr.clearArray(E), !0
                    }
                return cr.clearArray(E), !1
            }
            return O.set_from_rect(t), !!e.bquad.intersects_quad(O) && (!(e.collision_poly && !e.collision_poly.is_empty()) || (e.collision_poly.cache_poly(e.width, e.height, e.angle), O.offset(-t.left, -t.top), this.temp_poly.set_from_quad(O, 0, 0, 1, 1), e.collision_poly.intersects_poly(this.temp_poly, t.left - e.x, t.top - e.y)))
        }, i.prototype.testSegmentOverlap = function(t, e, i, s, n) {
            if (!n || !n.collisionsEnabled) return !1;
            n.update_bbox();
            n.layer;
            if (k.set(cr.min(t, i), cr.min(e, s), cr.max(t, i), cr.max(e, s)), !n.bbox.intersects_rect(k)) return !1;
            if (n.tilemap_exists) {
                n.getCollisionRectCandidates(k, E);
                var r, a, o, h, c = E,
                    l = n.x,
                    u = n.y;
                for (r = 0, a = c.length; r < a; ++r)
                    if (h = (o = c[r]).rc, k.intersects_rect_off(h, l, u) && (O.set_from_rect(h), O.offset(l, u), O.intersects_segment(t, e, i, s))) {
                        if (!o.poly) return cr.clearArray(E), !0;
                        if (o.poly.intersects_segment(l + h.left, u + h.top, t, e, i, s)) return cr.clearArray(E), !0
                    }
                return cr.clearArray(E), !1
            }
            return !!n.bquad.intersects_segment(t, e, i, s) && (!(n.collision_poly && !n.collision_poly.is_empty()) || (n.collision_poly.cache_poly(n.width, n.height, n.angle), n.collision_poly.intersects_segment(n.x, n.y, t, e, i, s)))
        }, i.prototype.typeHasBehavior = function(t, e) {
            if (!e) return !1;
            var i, s, n, r, a;
            for (i = 0, s = t.behaviors.length; i < s; i++)
                if (t.behaviors[i].behavior instanceof e) return !0;
            if (!t.is_family)
                for (i = 0, s = t.families.length; i < s; i++)
                    for (n = 0, r = (a = t.families[i]).behaviors.length; n < r; n++)
                        if (a.behaviors[n].behavior instanceof e) return !0;
            return !1
        }, i.prototype.typeHasNoSaveBehavior = function(t) {
            return this.typeHasBehavior(t, cr.behaviors.NoSave)
        }, i.prototype.typeHasPersistBehavior = function(t) {
            return this.typeHasBehavior(t, cr.behaviors.Persist)
        }, i.prototype.getSolidBehavior = function() {
            return this.solidBehavior
        }, i.prototype.getJumpthruBehavior = function() {
            return this.jumpthruBehavior
        };
        var a = [];
        i.prototype.testOverlapSolid = function(t) {
            var e, i, s;
            for (t.update_bbox(), this.getSolidCollisionCandidates(t.layer, t.bbox, a), e = 0, i = a.length; e < i; ++e)
                if ((s = a[e]).extra.solidEnabled && this.testOverlap(t, s)) return cr.clearArray(a), s;
            return cr.clearArray(a), null
        }, i.prototype.testRectOverlapSolid = function(t) {
            var e, i, s;
            for (this.getSolidCollisionCandidates(null, t, a), e = 0, i = a.length; e < i; ++e)
                if ((s = a[e]).extra.solidEnabled && this.testRectOverlap(t, s)) return cr.clearArray(a), s;
            return cr.clearArray(a), null
        };
        var o = [];
        i.prototype.testOverlapJumpThru = function(t, e) {
            var i, s, n, r = null;
            for (e && (r = o, cr.clearArray(r)), t.update_bbox(), this.getJumpthruCollisionCandidates(t.layer, t.bbox, a), i = 0, s = a.length; i < s; ++i)
                if ((n = a[i]).extra.jumpthruEnabled && this.testOverlap(t, n)) {
                    if (!e) return cr.clearArray(a), n;
                    r.push(n)
                }
            return cr.clearArray(a), r
        }, i.prototype.pushOutSolid = function(t, e, i, s, n, r) {
            var a, o = s || 50,
                h = t.x,
                c = t.y,
                l = null,
                u = null;
            for (a = 0; a < o; a++)
                if (t.x = h + e * a, t.y = c + i * a, t.set_bbox_changed(), !this.testOverlap(t, l) && ((l = this.testOverlapSolid(t)) && (u = l), !l && (n && (l = r ? this.testOverlap(t, r) ? r : null : this.testOverlapJumpThru(t)) && (u = l), !l))) return u && this.pushInFractional(t, e, i, u, 16), !0;
            return t.x = h, t.y = c, t.set_bbox_changed(), !1
        }, i.prototype.pushOutSolidAxis = function(t, e, i, s) {
            s = s || 50;
            var n, r, a, o = t.x,
                h = t.y,
                c = null,
                l = null;
            for (n = 0; n < s; ++n)
                for (r = 0; r < 2; ++r)
                    if (a = 2 * r - 1, t.x = o + e * n * a, t.y = h + i * n * a, t.set_bbox_changed(), !this.testOverlap(t, c)) {
                        if (!(c = this.testOverlapSolid(t))) return l && this.pushInFractional(t, e * a, i * a, l, 16), !0;
                        l = c
                    }
            return t.x = o, t.y = h, t.set_bbox_changed(), !1
        }, i.prototype.pushOut = function(t, e, i, s, n) {
            var r, a = s || 50,
                o = t.x,
                h = t.y;
            for (r = 0; r < a; r++)
                if (t.x = o + e * r, t.y = h + i * r, t.set_bbox_changed(), !this.testOverlap(t, n)) return !0;
            return t.x = o, t.y = h, t.set_bbox_changed(), !1
        }, i.prototype.pushInFractional = function(t, e, i, s, n) {
            for (var r, a = 2, o = !1, h = !1, c = t.x, l = t.y; a <= n;) r = 1 / a, a *= 2, t.x += e * r * (o ? 1 : -1), t.y += i * r * (o ? 1 : -1), t.set_bbox_changed(), this.testOverlap(t, s) ? h = o = !0 : (h = o = !1, c = t.x, l = t.y);
            h && (t.x = c, t.y = l, t.set_bbox_changed())
        }, i.prototype.pushOutSolidNearest = function(t, e) {
            var i = cr.is_undefined(e) ? 100 : e,
                s = 0,
                n = t.x,
                r = t.y,
                a = 0,
                o = 0,
                h = 0,
                c = this.testOverlapSolid(t);
            if (!c) return !0;
            for (; s <= i;) {
                switch (a) {
                    case 0:
                        o = 0, h = -1, s++;
                        break;
                    case 1:
                        h = -(o = 1);
                        break;
                    case 2:
                        o = 1, h = 0;
                        break;
                    case 3:
                        h = o = 1;
                        break;
                    case 4:
                        o = 0, h = 1;
                        break;
                    case 5:
                        o = -1, h = 1;
                        break;
                    case 6:
                        o = -1, h = 0;
                        break;
                    case 7:
                        h = o = -1
                }
                if (a = (a + 1) % 8, t.x = cr.floor(n + o * s), t.y = cr.floor(r + h * s), t.set_bbox_changed(), !this.testOverlap(t, c) && !(c = this.testOverlapSolid(t))) return !0
            }
            return t.x = n, t.y = r, t.set_bbox_changed(), !1
        }, i.prototype.registerCollision = function(t, e) {
            t.collisionsEnabled && e.collisionsEnabled && this.registered_collisions.push([t, e])
        }, i.prototype.addRegisteredCollisionCandidates = function(t, e, i) {
            var s, n, r, a;
            for (s = 0, n = this.registered_collisions.length; s < n; ++s) {
                if ((r = this.registered_collisions[s])[0] === t) a = r[1];
                else {
                    if (r[1] !== t) continue;
                    a = r[0]
                }
                if (e.is_family) {
                    if (-1 === e.members.indexOf(e)) continue
                } else if (a.type !== e) continue; - 1 === i.indexOf(a) && i.push(a)
            }
        }, i.prototype.checkRegisteredCollision = function(t, e) {
            var i, s, n;
            for (i = 0, s = this.registered_collisions.length; i < s; i++)
                if ((n = this.registered_collisions[i])[0] === t && n[1] === e || n[0] === e && n[1] === t) return !0;
            return !1
        }, i.prototype.calculateSolidBounceAngle = function(t, e, i, s) {
            var n = t.x,
                r = t.y,
                a = cr.max(10, cr.distanceTo(e, i, n, r)),
                o = cr.angleTo(e, i, n, r),
                h = s || this.testOverlapSolid(t);
            if (!h) return cr.clamp_angle(o + cr.PI);
            var c, l, u, p, d = h,
                f = cr.to_radians(5);
            for (c = 1; c < 36; c++)
                if (l = o - c * f, t.x = e + Math.cos(l) * a, t.y = i + Math.sin(l) * a, t.set_bbox_changed(), !this.testOverlap(t, d) && !(d = s ? null : this.testOverlapSolid(t))) {
                    u = l;
                    break
                }
            36 === c && (u = cr.clamp_angle(o + cr.PI));
            d = h;
            for (c = 1; c < 36; c++)
                if (l = o + c * f, t.x = e + Math.cos(l) * a, t.y = i + Math.sin(l) * a, t.set_bbox_changed(), !this.testOverlap(t, d) && !(d = s ? null : this.testOverlapSolid(t))) {
                    p = l;
                    break
                }
            if (36 === c && (p = cr.clamp_angle(o + cr.PI)), t.x = n, t.y = r, t.set_bbox_changed(), p === u) return p;
            var g, m = cr.angleDiff(p, u) / 2;
            g = cr.angleClockwise(p, u) ? cr.clamp_angle(u + m + cr.PI) : cr.clamp_angle(p + m);
            var y = Math.cos(o),
                _ = Math.sin(o),
                v = Math.cos(g),
                b = Math.sin(g),
                w = y * v + _ * b,
                x = y - 2 * w * v,
                S = _ - 2 * w * b;
            return cr.angleTo(0, 0, x, S)
        };
        var R = -1;

        function l() {
            try {
                return !!window.indexedDB
            } catch (t) {
                return !1
            }
        }

        function u(t) {
            t.target.result.createObjectStore("saves", {
                keyPath: "slot"
            })
        }

        function L() {
            cr.logexport("Reloading for continuous preview"), window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
        }

        function I(t) {
            var e, i = {};
            for (e in t)
                if (t.hasOwnProperty(e)) {
                    if (t[e] instanceof cr.ObjectSet) continue;
                    if (t[e] && void 0 !== t[e].c2userdata) continue;
                    if ("spriteCreatedDestroyCallback" === e) continue;
                    i[e] = t[e]
                }
            return i
        }
        i.prototype.trigger = function(t, e, i) {
            if (!this.running_layout) return !1;
            var s = this.running_layout.event_sheet;
            if (!s) return !1;
            var n, r, a, o = !1;
            R++;
            var h = s.deep_includes;
            for (r = 0, a = h.length; r < a; ++r) n = this.triggerOnSheet(t, e, h[r], i), o = o || n;
            return n = this.triggerOnSheet(t, e, s, i), R--, o = o || n
        }, i.prototype.triggerOnSheet = function(t, e, i, s) {
            var n, r, a, o, h = !1;
            if (e)
                for (a = this.triggerOnSheetForTypeName(t, e, e.type.name, i, s), h = h || a, n = 0, r = (o = e.type.families).length; n < r; ++n) a = this.triggerOnSheetForTypeName(t, e, o[n].name, i, s), h = h || a;
            else a = this.triggerOnSheetForTypeName(t, e, "system", i, s), h = h || a;
            return h
        }, i.prototype.triggerOnSheetForTypeName = function(t, e, i, s, n) {
            var r, a, o, h, c = !1,
                l = !1,
                u = void 0 !== n,
                p = (u ? s.fasttriggers : s.triggers)[i];
            if (!p) return c;
            var d, f = null;
            for (r = 0, a = p.length; r < a; ++r)
                if (p[r].method == t) {
                    f = p[r].evs;
                    break
                }
            if (!f) return c;
            if (!(d = u ? f[n] : f)) return null;
            for (r = 0, a = d.length; r < a; r++) o = d[r][0], h = d[r][1], l = this.executeSingleTrigger(e, i, o, h), c = c || l;
            return c
        }, i.prototype.executeSingleTrigger = function(t, e, i, s) {
            var n, r, a = !1;
            this.trigger_depth++;
            var o = this.getCurrentEventStack().current_event;
            o && this.pushCleanSol(o.solModifiersIncludingParents);
            var h = 1 < this.trigger_depth;
            this.pushCleanSol(i.solModifiersIncludingParents), h && this.pushLocalVarStack();
            var c = this.pushEventStack(i);
            if (c.current_event = i, t) {
                var l = this.types[e].getCurrentSol();
                l.select_all = !1, cr.clearArray(l.instances), l.instances[0] = t, this.types[e].applySolToContainer()
            }
            var u = !0;
            if (i.parent) {
                for (var p = c.temp_parents_arr, d = i.parent; d;) p.push(d), d = d.parent;
                for (p.reverse(), n = 0, r = p.length; n < r; n++)
                    if (!p[n].run_pretrigger()) {
                        u = !1;
                        break
                    }
            }
            return u && (this.execcount++, i.orblock ? i.run_orblocktrigger(s) : i.run(), a = a || c.last_event_true), this.popEventStack(), h && this.popLocalVarStack(), this.popSol(i.solModifiersIncludingParents), o && this.popSol(o.solModifiersIncludingParents), this.hasPendingInstances && 0 === this.isInOnDestroy && 0 === R && !this.isRunningEvents && this.ClearDeathRow(), this.trigger_depth--, a
        }, i.prototype.getCurrentCondition = function() {
            var t = this.getCurrentEventStack();
            return t.current_event.conditions[t.cndindex]
        }, i.prototype.getCurrentConditionObjectType = function() {
            return this.getCurrentCondition().type
        }, i.prototype.isCurrentConditionFirst = function() {
            return 0 === this.getCurrentEventStack().cndindex
        }, i.prototype.getCurrentAction = function() {
            var t = this.getCurrentEventStack();
            return t.current_event.actions[t.actindex]
        }, i.prototype.pushLocalVarStack = function() {
            this.localvar_stack_index++, this.localvar_stack_index >= this.localvar_stack.length && this.localvar_stack.push([])
        }, i.prototype.popLocalVarStack = function() {
            this.localvar_stack_index--
        }, i.prototype.getCurrentLocalVarStack = function() {
            return this.localvar_stack[this.localvar_stack_index]
        }, i.prototype.pushEventStack = function(t) {
            this.event_stack_index++, this.event_stack_index >= this.event_stack.length && this.event_stack.push(new cr.eventStackFrame);
            var e = this.getCurrentEventStack();
            return e.reset(t), e
        }, i.prototype.popEventStack = function() {
            this.event_stack_index--
        }, i.prototype.getCurrentEventStack = function() {
            return this.event_stack[this.event_stack_index]
        }, i.prototype.pushLoopStack = function(t) {
            this.loop_stack_index++, this.loop_stack_index >= this.loop_stack.length && this.loop_stack.push(cr.seal({
                name: t,
                index: 0,
                stopped: !1
            }));
            var e = this.getCurrentLoop();
            return e.name = t, e.index = 0, e.stopped = !1, e
        }, i.prototype.popLoopStack = function() {
            this.loop_stack_index--
        }, i.prototype.getCurrentLoop = function() {
            return this.loop_stack[this.loop_stack_index]
        }, i.prototype.getEventVariableByName = function(t, e) {
            for (var i, s, n, r, a, o; e;) {
                for (i = 0, s = e.subevents.length; i < s; i++)
                    if ((o = e.subevents[i]) instanceof cr.eventvariable && cr.equals_nocase(t, o.name)) return o;
                e = e.parent
            }
            for (i = 0, s = this.eventsheets_by_index.length; i < s; i++)
                for (n = 0, r = (a = this.eventsheets_by_index[i]).events.length; n < r; n++)
                    if ((o = a.events[n]) instanceof cr.eventvariable && cr.equals_nocase(t, o.name)) return o;
            return null
        }, i.prototype.getLayoutBySid = function(t) {
            var e, i;
            for (e = 0, i = this.layouts_by_index.length; e < i; e++)
                if (this.layouts_by_index[e].sid === t) return this.layouts_by_index[e];
            return null
        }, i.prototype.getObjectTypeBySid = function(t) {
            var e, i;
            for (e = 0, i = this.types_by_index.length; e < i; e++)
                if (this.types_by_index[e].sid === t) return this.types_by_index[e];
            return null
        }, i.prototype.getGroupBySid = function(t) {
            var e, i;
            for (e = 0, i = this.allGroups.length; e < i; e++)
                if (this.allGroups[e].sid === t) return this.allGroups[e];
            return null
        }, i.prototype.doCanvasSnapshot = function(t, e) {
            this.snapshotCanvas = [t, e], this.redraw = !0
        }, i.prototype.signalContinuousPreview = function() {
            this.signalledContinuousPreview = !0
        }, i.prototype.handleSaveLoad = function() {
            var i = this,
                t = this.saveToSlot,
                s = this.lastSaveJson,
                e = this.loadFromSlot,
                n = !1;
            if (this.signalledContinuousPreview && (n = !0, t = "__c2_continuouspreview", this.signalledContinuousPreview = !1), t.length) {
                if (this.ClearDeathRow(), s = this.saveToJSONString(), l() && !this.isCocoonJs) ! function(i, s, n, r) {
                    try {
                        var t = indexedDB.open("_C2SaveStates");
                        t.onupgradeneeded = u, t.onerror = r, t.onsuccess = function(t) {
                            var e = t.target.result;
                            e.onerror = r, e.transaction(["saves"], "readwrite").objectStore("saves").put({
                                slot: i,
                                data: s
                            }).onsuccess = n
                        }
                    } catch (t) {
                        r(t)
                    }
                }(t, s, function() {
                    cr.logexport("Saved state to IndexedDB storage (" + s.length + " bytes)"), i.lastSaveJson = s, i.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), i.lastSaveJson = "", n && L()
                }, function(e) {
                    try {
                        localStorage.setItem("__c2save_" + t, s), cr.logexport("Saved state to WebStorage (" + s.length + " bytes)"), i.lastSaveJson = s, i.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), i.lastSaveJson = "", n && L()
                    } catch (t) {
                        cr.logexport("Failed to save game state: " + e + "; " + t), i.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                    }
                });
                else try {
                    localStorage.setItem("__c2save_" + t, s), cr.logexport("Saved state to WebStorage (" + s.length + " bytes)"), i.lastSaveJson = s, this.trigger(cr.system_object.prototype.cnds.OnSaveComplete, null), i.lastSaveJson = "", n && L()
                } catch (t) {
                    cr.logexport("Error saving to WebStorage: " + t), i.trigger(cr.system_object.prototype.cnds.OnSaveFailed, null)
                }
                this.saveToSlot = "", this.loadFromSlot = "", this.loadFromJson = null
            }
            if (e.length) {
                if (l() && !this.isCocoonJs) ! function(s, n, r) {
                    try {
                        var t = indexedDB.open("_C2SaveStates");
                        t.onupgradeneeded = u, t.onerror = r, t.onsuccess = function(t) {
                            var e = t.target.result;
                            e.onerror = r;
                            var i = e.transaction(["saves"]).objectStore("saves").get(s);
                            i.onsuccess = function(t) {
                                i.result ? n(i.result.data) : n(null)
                            }
                        }
                    } catch (t) {
                        r(t)
                    }
                }(e, function(t) {
                    t ? (i.loadFromJson = t, cr.logexport("Loaded state from IndexedDB storage (" + i.loadFromJson.length + " bytes)")) : (i.loadFromJson = localStorage.getItem("__c2save_" + e) || "", cr.logexport("Loaded state from WebStorage (" + i.loadFromJson.length + " bytes)")), i.suspendDrawing = !1, i.loadFromJson || (i.loadFromJson = null, i.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }, function(t) {
                    i.loadFromJson = localStorage.getItem("__c2save_" + e) || "", cr.logexport("Loaded state from WebStorage (" + i.loadFromJson.length + " bytes)"), i.suspendDrawing = !1, i.loadFromJson || (i.loadFromJson = null, i.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                });
                else {
                    try {
                        this.loadFromJson = localStorage.getItem("__c2save_" + e) || "", cr.logexport("Loaded state from WebStorage (" + this.loadFromJson.length + " bytes)")
                    } catch (t) {
                        this.loadFromJson = null
                    }
                    this.suspendDrawing = !1, i.loadFromJson || (i.loadFromJson = null, i.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null))
                }
                this.loadFromSlot = "", this.saveToSlot = ""
            }
            null !== this.loadFromJson && (this.ClearDeathRow(), this.loadFromJSONString(this.loadFromJson) ? (this.lastSaveJson = this.loadFromJson, this.trigger(cr.system_object.prototype.cnds.OnLoadComplete, null), this.lastSaveJson = "") : i.trigger(cr.system_object.prototype.cnds.OnLoadFailed, null), this.loadFromJson = null)
        }, i.prototype.saveToJSONString = function() {
            var t, e, i, s, n, r, a, o, h, c, l, u, p = {
                c2save: !0,
                version: 1,
                rt: {
                    time: this.kahanTime.sum,
                    walltime: this.wallTime.sum,
                    timescale: this.timescale,
                    tickcount: this.tickcount,
                    execcount: this.execcount,
                    next_uid: this.next_uid,
                    running_layout: this.running_layout.sid,
                    start_time_offset: Date.now() - this.start_time
                },
                types: {},
                layouts: {},
                events: {
                    groups: {},
                    cnds: {},
                    acts: {},
                    vars: {}
                }
            };
            for (t = 0, e = this.types_by_index.length; t < e; t++)
                if (!(n = this.types_by_index[t]).is_family && !this.typeHasNoSaveBehavior(n)) {
                    for (a = {
                            instances: []
                        }, cr.hasAnyOwnProperty(n.extra) && (a.ex = I(n.extra)), i = 0, s = n.instances.length; i < s; i++) a.instances.push(this.saveInstanceToJSON(n.instances[i]));
                    p.types[n.sid.toString()] = a
                }
            for (t = 0, e = this.layouts_by_index.length; t < e; t++) r = this.layouts_by_index[t], p.layouts[r.sid.toString()] = r.saveToJSON();
            var d = p.events.groups;
            for (t = 0, e = this.allGroups.length; t < e; t++) d[(o = this.allGroups[t]).sid.toString()] = this.groups_by_name[o.group_name].group_active;
            var f = p.events.cnds;
            for (u in this.cndsBySid) this.cndsBySid.hasOwnProperty(u) && (h = this.cndsBySid[u], cr.hasAnyOwnProperty(h.extra) && (f[u] = {
                ex: I(h.extra)
            }));
            var g = p.events.acts;
            for (u in this.actsBySid) this.actsBySid.hasOwnProperty(u) && (c = this.actsBySid[u], cr.hasAnyOwnProperty(c.extra) && (g[u] = {
                ex: I(c.extra)
            }));
            var m = p.events.vars;
            for (u in this.varsBySid) this.varsBySid.hasOwnProperty(u) && ((l = this.varsBySid[u]).is_constant || l.parent && !l.is_static || (m[u] = l.data));
            return p.system = this.system.saveToJSON(), JSON.stringify(p)
        }, i.prototype.refreshUidMap = function() {
            var t, e, i, s, n, r;
            for (this.objectsByUid = {}, t = 0, e = this.types_by_index.length; t < e; t++)
                if (!(i = this.types_by_index[t]).is_family)
                    for (s = 0, n = i.instances.length; s < n; s++) r = i.instances[s], this.objectsByUid[r.uid.toString()] = r
        }, i.prototype.loadFromJSONString = function(t) {
            var e;
            try {
                e = JSON.parse(t)
            } catch (t) {
                return !1
            }
            if (!e.c2save) return !1;
            if (1 < e.version) return !1;
            this.isLoadingState = !0;
            var i = e.rt;
            this.kahanTime.reset(), this.kahanTime.sum = i.time, this.wallTime.reset(), this.wallTime.sum = i.walltime || 0, this.timescale = i.timescale, this.tickcount = i.tickcount, this.execcount = i.execcount, this.start_time = Date.now() - i.start_time_offset;
            var s, n, r, a, o, h, c, l, u, p, d, f, g, m, y, _, v, b = i.running_layout;
            if (b !== this.running_layout.sid) {
                var w = this.getLayoutBySid(b);
                if (!w) return;
                this.doChangeLayout(w)
            }
            var x = e.types;
            for (c in x)
                if (x.hasOwnProperty(c)) {
                    if (!(l = this.getObjectTypeBySid(parseInt(c, 10))) || l.is_family || this.typeHasNoSaveBehavior(l)) continue;
                    for (x[c].ex ? l.extra = x[c].ex : cr.wipe(l.extra), u = l.instances, p = x[c].instances, s = 0, n = cr.min(u.length, p.length); s < n; s++) this.loadInstanceFromJSON(u[s], p[s]);
                    for (s = p.length, n = u.length; s < n; s++) this.DestroyInstance(u[s]);
                    for (s = u.length, n = p.length; s < n; s++) m = null, l.plugin.is_world && !(m = this.running_layout.getLayerBySid(p[s].w.l)) || (d = this.createInstanceFromInit(l.default_instance, m, !1, 0, 0, !0), this.loadInstanceFromJSON(d, p[s]));
                    l.stale_iids = !0
                }
            this.ClearDeathRow(), this.refreshUidMap();
            var S = e.layouts;
            for (c in S)
                if (S.hasOwnProperty(c)) {
                    if (!(g = this.getLayoutBySid(parseInt(c, 10)))) continue;
                    g.loadFromJSON(S[c])
                }
            var T = e.events.groups;
            for (c in T) T.hasOwnProperty(c) && (y = this.getGroupBySid(parseInt(c, 10))) && this.groups_by_name[y.group_name] && this.groups_by_name[y.group_name].setGroupActive(T[c]);
            var C = e.events.cnds;
            for (c in this.cndsBySid) this.cndsBySid.hasOwnProperty(c) && (C.hasOwnProperty(c) ? this.cndsBySid[c].extra = C[c].ex : this.cndsBySid[c].extra = {});
            var A = e.events.acts;
            for (c in this.actsBySid) this.actsBySid.hasOwnProperty(c) && (A.hasOwnProperty(c) ? this.actsBySid[c].extra = A[c].ex : this.actsBySid[c].extra = {});
            var P = e.events.vars;
            for (c in P) P.hasOwnProperty(c) && this.varsBySid.hasOwnProperty(c) && (this.varsBySid[c].data = P[c]);
            for (this.next_uid = i.next_uid, this.isLoadingState = !1, s = 0, n = this.fireOnCreateAfterLoad.length; s < n; ++s) d = this.fireOnCreateAfterLoad[s], this.trigger(Object.getPrototypeOf(d.type.plugin).cnds.OnCreated, d);
            for (cr.clearArray(this.fireOnCreateAfterLoad), this.system.loadFromJSON(e.system), s = 0, n = this.types_by_index.length; s < n; s++)
                if (!(l = this.types_by_index[s]).is_family && !this.typeHasNoSaveBehavior(l))
                    for (r = 0, a = l.instances.length; r < a; r++) {
                        if (d = l.instances[r], l.is_contained)
                            for (_ = d.get_iid(), cr.clearArray(d.siblings), o = 0, h = l.container.length; o < h; o++) l !== (v = l.container[o]) && d.siblings.push(v.instances[_]);
                        if (d.afterLoad && d.afterLoad(), d.behavior_insts)
                            for (o = 0, h = d.behavior_insts.length; o < h; o++)(f = d.behavior_insts[o]).afterLoad && f.afterLoad()
                    }
            return this.redraw = !0
        }, i.prototype.saveInstanceToJSON = function(t, e) {
            var i, s, n, r, a, o = t.type,
                h = o.plugin,
                c = {};
            if (e ? c.c2 = !0 : c.uid = t.uid, cr.hasAnyOwnProperty(t.extra) && (c.ex = I(t.extra)), t.instance_vars && t.instance_vars.length)
                for (c.ivs = {}, i = 0, s = t.instance_vars.length; i < s; i++) c.ivs[t.type.instvar_sids[i].toString()] = t.instance_vars[i];
            if (h.is_world) {
                if (n = {
                        x: t.x,
                        y: t.y,
                        w: t.width,
                        h: t.height,
                        l: t.layer.sid,
                        zi: t.get_zindex()
                    }, 0 !== t.angle && (n.a = t.angle), 1 !== t.opacity && (n.o = t.opacity), .5 !== t.hotspotX && (n.hX = t.hotspotX), .5 !== t.hotspotY && (n.hY = t.hotspotY), 0 !== t.blend_mode && (n.bm = t.blend_mode), t.visible || (n.v = t.visible), t.collisionsEnabled || (n.ce = t.collisionsEnabled), -1 !== t.my_timescale && (n.mts = t.my_timescale), o.effect_types.length)
                    for (n.fx = [], i = 0, s = o.effect_types.length; i < s; i++) a = o.effect_types[i], n.fx.push({
                        name: a.name,
                        active: t.active_effect_flags[a.index],
                        params: t.effect_params[a.index]
                    });
                c.w = n
            }
            if (t.behavior_insts && t.behavior_insts.length)
                for (c.behs = {}, i = 0, s = t.behavior_insts.length; i < s; i++)(r = t.behavior_insts[i]).saveToJSON && (c.behs[r.type.sid.toString()] = r.saveToJSON());
            return t.saveToJSON && (c.data = t.saveToJSON()), c
        }, i.prototype.getInstanceVarIndexBySid = function(t, e) {
            var i, s;
            for (i = 0, s = t.instvar_sids.length; i < s; i++)
                if (t.instvar_sids[i] === e) return i;
            return -1
        }, i.prototype.getBehaviorIndexBySid = function(t, e) {
            var i, s;
            for (i = 0, s = t.behavior_insts.length; i < s; i++)
                if (t.behavior_insts[i].type.sid === e) return i;
            return -1
        }, i.prototype.loadInstanceFromJSON = function(t, e, i) {
            var s, n, r, a, o, h, c, l, u, p, d, f = t.type,
                g = f.plugin;
            if (i) {
                if (!e.c2) return
            } else t.uid = e.uid;
            if (e.ex ? t.extra = e.ex : cr.wipe(t.extra), o = e.ivs)
                for (s in o)
                    if (o.hasOwnProperty(s)) {
                        if ((a = this.getInstanceVarIndexBySid(f, parseInt(s, 10))) < 0 || a >= t.instance_vars.length) continue;
                        null === (p = o[s]) && (p = NaN), t.instance_vars[a] = p
                    }
            if (g.is_world) {
                if (h = e.w, t.layer.sid !== h.l && (d = t.layer, t.layer = this.running_layout.getLayerBySid(h.l), t.layer ? (d.removeFromInstanceList(t, !0), t.layer.appendToInstanceList(t, !0), t.set_bbox_changed(), t.layer.setZIndicesStaleFrom(0)) : (t.layer = d, i || this.DestroyInstance(t))), t.x = h.x, t.y = h.y, t.width = h.w, t.height = h.h, t.zindex = h.zi, t.angle = h.hasOwnProperty("a") ? h.a : 0, t.opacity = h.hasOwnProperty("o") ? h.o : 1, t.hotspotX = h.hasOwnProperty("hX") ? h.hX : .5, t.hotspotY = h.hasOwnProperty("hY") ? h.hY : .5, t.visible = !h.hasOwnProperty("v") || h.v, t.collisionsEnabled = !h.hasOwnProperty("ce") || h.ce, t.my_timescale = h.hasOwnProperty("mts") ? h.mts : -1, t.blend_mode = h.hasOwnProperty("bm") ? h.bm : 0, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.gl && cr.setGLBlend(t, t.blend_mode, this.gl), t.set_bbox_changed(), h.hasOwnProperty("fx"))
                    for (n = 0, r = h.fx.length; n < r; n++)(c = f.getEffectIndexByName(h.fx[n].name)) < 0 || (t.active_effect_flags[c] = h.fx[n].active, t.effect_params[c] = h.fx[n].params);
                t.updateActiveEffects()
            }
            if (l = e.behs)
                for (s in l)
                    if (l.hasOwnProperty(s)) {
                        if ((u = this.getBehaviorIndexBySid(t, parseInt(s, 10))) < 0) continue;
                        t.behavior_insts[u].loadFromJSON(l[s])
                    }
            e.data && t.loadFromJSON(e.data)
        }, i.prototype.fetchLocalFileViaCordova = function(t, e, i) {
            var s = cordova.file.applicationDirectory + "www/" + t;
            window.resolveLocalFileSystemURL(s, function(t) {
                t.file(e, i)
            }, i)
        }, i.prototype.fetchLocalFileViaCordovaAsText = function(t, i, s) {
            this.fetchLocalFileViaCordova(t, function(t) {
                var e = new FileReader;
                e.onload = function(t) {
                    i(t.target.result)
                }, e.onerror = s, e.readAsText(t)
            }, s)
        };
        var B = [],
            M = 0;
        i.prototype.maybeStartNextArrayBufferRead = function() {
            if (B.length && !(8 <= M)) {
                M++;
                var t = B.shift();
                this.doFetchLocalFileViaCordovaAsArrayBuffer(t.filename, t.successCallback, t.errorCallback)
            }
        }, i.prototype.fetchLocalFileViaCordovaAsArrayBuffer = function(t, e, i) {
            var s = this;
            B.push({
                filename: t,
                successCallback: function(t) {
                    M--, s.maybeStartNextArrayBufferRead(), e(t)
                },
                errorCallback: function(t) {
                    M--, s.maybeStartNextArrayBufferRead(), i(t)
                }
            }), this.maybeStartNextArrayBufferRead()
        }, i.prototype.doFetchLocalFileViaCordovaAsArrayBuffer = function(t, i, e) {
            this.fetchLocalFileViaCordova(t, function(t) {
                var e = new FileReader;
                e.onload = function(t) {
                    i(t.target.result)
                }, e.readAsArrayBuffer(t)
            }, e)
        }, i.prototype.fetchLocalFileViaCordovaAsURL = function(t, s, e) {
            var n = "",
                i = t.toLowerCase(),
                r = i.substr(i.length - 4),
                a = i.substr(i.length - 5);
            ".mp4" === r ? n = "video/mp4" : ".webm" === a ? n = "video/webm" : ".m4a" === r ? n = "audio/mp4" : ".mp3" === r && (n = "audio/mpeg"), this.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                var e = new Blob([t], {
                        type: n
                    }),
                    i = URL.createObjectURL(e);
                s(i)
            }, e)
        }, i.prototype.isAbsoluteUrl = function(t) {
            return /^(?:[a-z]+:)?\/\//.test(t) || "data:" === t.substr(0, 5) || "blob:" === t.substr(0, 5)
        }, i.prototype.setImageSrc = function(e, t) {
            this.isWKWebView && !this.isAbsoluteUrl(t) ? this.fetchLocalFileViaCordovaAsURL(t, function(t) {
                e.src = t
            }, function(t) {
                alert("Failed to load image: " + t)
            }) : e.src = t
        }, i.prototype.setCtxImageSmoothingEnabled = function(t, e) {
            void 0 !== t.imageSmoothingEnabled ? t.imageSmoothingEnabled = e : (t.webkitImageSmoothingEnabled = e, t.mozImageSmoothingEnabled = e, t.msImageSmoothingEnabled = e)
        }, cr.runtime = i, cr.createRuntime = function(t) {
            return new i(document.getElementById(t))
        }, cr.createDCRuntime = function(t, e) {
            return new i({
                dc: !0,
                width: t,
                height: e
            })
        }, window.cr_createRuntime = cr.createRuntime, window.cr_createDCRuntime = cr.createDCRuntime, window.createCocoonJSRuntime = function() {
            window.c2cocoonjs = !0;
            var t = document.createElement("screencanvas") || document.createElement("canvas");
            t.screencanvas = !0, document.body.appendChild(t);
            var e = new i(t);
            return window.c2runtime = e, window.addEventListener("orientationchange", function() {
                window.c2runtime.setSize(window.innerWidth, window.innerHeight)
            }), window.c2runtime.setSize(window.innerWidth, window.innerHeight), e
        }, window.createEjectaRuntime = function() {
            var t = new i(document.getElementById("canvas"));
            return window.c2runtime = t, window.c2runtime.setSize(window.innerWidth, window.innerHeight), t
        }
    }(), window.cr_getC2Runtime = function() {
        var t = document.getElementById("c2canvas");
        return t ? t.c2runtime : window.c2runtime ? window.c2runtime : null
    }, window.cr_getSnapshot = function(t, e) {
        var i = window.cr_getC2Runtime();
        i && i.doCanvasSnapshot(t, e)
    }, window.cr_sizeCanvas = function(t, e) {
        if (0 !== t && 0 !== e) {
            var i = window.cr_getC2Runtime();
            i && i.setSize(t, e)
        }
    }, window.cr_setSuspended = function(t) {
        var e = window.cr_getC2Runtime();
        e && e.setSuspended(t)
    },
    function() {
        function t(t, e) {
            this.runtime = t, this.event_sheet = null, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, this.scale = 1, this.angle = 0, this.first_visit = !0, this.name = e[0], this.originalWidth = e[1], this.originalHeight = e[2], this.width = e[1], this.height = e[2], this.unbounded_scrolling = e[3], this.sheetname = e[4], this.sid = e[5];
            var i, s, n = e[6];
            for (this.layers = [], this.initial_types = [], i = 0, s = n.length; i < s; i++) {
                var r = new cr.layer(this, n[i]);
                r.number = i, cr.seal(r), this.layers.push(r)
            }
            var a = e[7];
            for (this.initial_nonworld = [], i = 0, s = a.length; i < s; i++) {
                var o = a[i],
                    h = this.runtime.types_by_index[o[1]];
                h.default_instance || (h.default_instance = o), this.initial_nonworld.push(o), -1 === this.initial_types.indexOf(h) && this.initial_types.push(h)
            }
            for (this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, s = e[8].length; i < s; i++) this.effect_types.push({
                id: e[8][i][0],
                name: e[8][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[8][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1), this.persist_data = {}
        }
        t.prototype.saveObjectToPersist = function(t) {
            var e = t.type.sid.toString();
            this.persist_data.hasOwnProperty(e) || (this.persist_data[e] = []), this.persist_data[e].push(this.runtime.saveInstanceToJSON(t))
        }, t.prototype.hasOpaqueBottomLayer = function() {
            var t = this.layers[0];
            return !t.transparent && 1 === t.opacity && !t.forceOwnTexture && t.visible
        }, t.prototype.updateActiveEffects = function() {
            var t, e, i;
            for (cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0, t = 0, e = this.effect_types.length; t < e; t++)(i = this.effect_types[t]).active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, t.prototype.getEffectByName = function(t) {
            var e, i, s;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if ((s = this.effect_types[e]).name === t) return s;
            return null
        };
        var m = [];

        function y(t, e) {
            return t.zindex - e.zindex
        }
        var _ = !0;
        t.prototype.startRunning = function() {
            var t, e, i, s, n, r, a, o, h, c, l, u, p, d;
            for (this.sheetname && (this.event_sheet = this.runtime.eventsheets[this.sheetname], this.event_sheet.updateDeepIncludes()), (this.runtime.running_layout = this).width = this.originalWidth, this.height = this.originalHeight, this.scrollX = this.runtime.original_width / 2, this.scrollY = this.runtime.original_height / 2, t = 0, i = this.runtime.types_by_index.length; t < i; t++)
                if (!(n = this.runtime.types_by_index[t]).is_family)
                    for (e = 0, s = (r = n.instances).length; e < s; e++)
                        if ((o = r[e]).layer) {
                            var f = o.layer.number;
                            f >= this.layers.length && (f = this.layers.length - 1), o.layer = this.layers[f], -1 === o.layer.instances.indexOf(o) && o.layer.instances.push(o), o.layer.zindices_stale = !0
                        }
            if (!_)
                for (t = 0, i = this.layers.length; t < i; ++t) this.layers[t].instances.sort(y);
            for (cr.clearArray(m), this.boundScrolling(), t = 0, i = this.layers.length; t < i; t++)(d = this.layers[t]).createInitialInstances(), d.updateViewport(null);
            var g = !1;
            if (!this.first_visit) {
                for (u in this.persist_data)
                    if (this.persist_data.hasOwnProperty(u)) {
                        if (!(n = this.runtime.getObjectTypeBySid(parseInt(u, 10))) || n.is_family || !this.runtime.typeHasPersistBehavior(n)) continue;
                        for (t = 0, i = (p = this.persist_data[u]).length; t < i; t++) d = null, n.plugin.is_world && !(d = this.getLayerBySid(p[t].w.l)) || (o = this.runtime.createInstanceFromInit(n.default_instance, d, !1, 0, 0, !0), this.runtime.loadInstanceFromJSON(o, p[t]), g = !0, m.push(o));
                        cr.clearArray(p)
                    }
                for (t = 0, i = this.layers.length; t < i; t++) this.layers[t].instances.sort(y), this.layers[t].zindices_stale = !0
            }
            for (g && (this.runtime.ClearDeathRow(), this.runtime.refreshUidMap()), t = 0; t < m.length; t++)
                if ((o = m[t]).type.is_contained)
                    for (h = o.get_iid(), e = 0, s = o.type.container.length; e < s; e++) c = o.type.container[e], o.type !== c && (c.instances.length > h ? o.siblings.push(c.instances[h]) : c.default_instance && (l = this.runtime.createInstanceFromInit(c.default_instance, o.layer, !0, o.x, o.y, !0), this.runtime.ClearDeathRow(), c.updateIIDs(), o.siblings.push(l), m.push(l)));
            for (t = 0, i = this.initial_nonworld.length; t < i; t++) a = this.initial_nonworld[t], (n = this.runtime.types_by_index[a[1]]).is_contained || (o = this.runtime.createInstanceFromInit(this.initial_nonworld[t], null, !0));
            if (this.runtime.changelayout = null, this.runtime.ClearDeathRow(), this.runtime.ctx && !this.runtime.isDomFree)
                for (t = 0, i = this.runtime.types_by_index.length; t < i; t++) !(c = this.runtime.types_by_index[t]).is_family && c.instances.length && c.preloadCanvas2D && c.preloadCanvas2D(this.runtime.ctx);
            if (this.runtime.isLoadingState) cr.shallowAssignArray(this.runtime.fireOnCreateAfterLoad, m);
            else
                for (t = 0, i = m.length; t < i; t++) o = m[t], this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
            cr.clearArray(m), this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutStart, null), this.first_visit = !1
        }, t.prototype.createGlobalNonWorlds = function() {
            var t, e, i, s, n;
            for (e = t = 0, i = this.initial_nonworld.length; t < i; t++) s = this.initial_nonworld[t], (n = this.runtime.types_by_index[s[1]]).global ? n.is_contained || this.runtime.createInstanceFromInit(s, null, !0) : (this.initial_nonworld[e] = s, e++);
            cr.truncateArray(this.initial_nonworld, e)
        }, t.prototype.stopRunning = function() {
            var t, e, i, s, n, r, a;
            if (this.runtime.isLoadingState || this.runtime.trigger(cr.system_object.prototype.cnds.OnLayoutEnd, null), this.runtime.isEndingLayout = !0, cr.clearArray(this.runtime.system.waits), !this.first_visit)
                for (t = 0, e = this.layers.length; t < e; t++)
                    for (this.layers[t].updateZIndices(), i = 0, s = (n = this.layers[t].instances).length; i < s; i++)(r = n[i]).type.global || this.runtime.typeHasPersistBehavior(r.type) && this.saveObjectToPersist(r);
            for (t = 0, e = this.layers.length; t < e; t++) {
                for (i = 0, s = (n = this.layers[t].instances).length; i < s; i++)(r = n[i]).type.global || this.runtime.DestroyInstance(r);
                this.runtime.ClearDeathRow(), cr.clearArray(n), this.layers[t].zindices_stale = !0
            }
            for (t = 0, e = this.runtime.types_by_index.length; t < e; t++)
                if (!((a = this.runtime.types_by_index[t]).global || a.plugin.is_world || a.plugin.singleglobal || a.is_family)) {
                    for (i = 0, s = a.instances.length; i < s; i++) this.runtime.DestroyInstance(a.instances[i]);
                    this.runtime.ClearDeathRow()
                }
            _ = !1, this.runtime.isEndingLayout = !1
        };
        var o = new cr.rect(0, 0, 0, 0);

        function e(t, e) {
            this.layout = t, this.runtime = t.runtime, this.instances = [], this.scale = 1, this.angle = 0, this.disableAngle = !1, this.tmprect = new cr.rect(0, 0, 0, 0), this.tmpquad = new cr.quad, this.viewLeft = 0, this.viewRight = 0, this.viewTop = 0, this.viewBottom = 0, this.zindices_stale = !1, this.zindices_stale_from = -1, this.clear_earlyz_index = 0, this.name = e[0], this.index = e[1], this.sid = e[2], this.visible = e[3], this.background_color = e[4], this.transparent = e[5], this.parallaxX = e[6], this.parallaxY = e[7], this.opacity = e[8], this.forceOwnTexture = e[9], this.useRenderCells = e[10], this.zoomRate = e[11], this.blend_mode = e[12], this.effect_fallback = e[13], this.compositeOp = "source-over", this.srcBlend = 0, this.destBlend = 0, this.render_grid = null, this.last_render_list = h(), this.render_list_stale = !0, this.last_render_cells = new cr.rect(0, 0, -1, -1), this.cur_render_cells = new cr.rect(0, 0, -1, -1), this.useRenderCells && (this.render_grid = new cr.RenderGrid(this.runtime.original_width, this.runtime.original_height)), this.render_offscreen = !1;
            var i, s, n = e[14];
            for (this.startup_initial_instances = [], this.initial_instances = [], this.created_globals = [], i = 0, s = n.length; i < s; i++) {
                var r = n[i],
                    a = this.runtime.types_by_index[r[1]];
                a.default_instance || (a.default_instance = r, a.default_layerindex = this.index), this.initial_instances.push(r), -1 === this.layout.initial_types.indexOf(a) && this.layout.initial_types.push(a)
            }
            for (cr.shallowAssignArray(this.startup_initial_instances, this.initial_instances), this.effect_types = [], this.active_effect_types = [], this.shaders_preserve_opaqueness = !0, this.effect_params = [], i = 0, s = e[15].length; i < s; i++) this.effect_types.push({
                id: e[15][i][0],
                name: e[15][i][1],
                shaderindex: -1,
                preservesOpaqueness: !1,
                active: !0,
                index: i
            }), this.effect_params.push(e[15][i][2].slice(0));
            this.updateActiveEffects(), this.rcTex = new cr.rect(0, 0, 1, 1), this.rcTex2 = new cr.rect(0, 0, 1, 1)
        }
        t.prototype.recreateInitialObjects = function(t, e, i, s, n) {
            var r, a;
            for (o.set(e, i, s, n), r = 0, a = this.layers.length; r < a; r++) this.layers[r].recreateInitialObjects(t, o)
        }, t.prototype.draw = function(t) {
            var e, i, s, n, r = t,
                a = !1,
                o = !this.runtime.fullscreenScalingQuality;
            for (o && (this.runtime.layout_canvas || (this.runtime.layout_canvas = document.createElement("canvas"), (e = this.runtime.layout_canvas).width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layout_ctx = e.getContext("2d"), a = !0), e = this.runtime.layout_canvas, r = this.runtime.layout_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, a = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, a = !0), a && this.runtime.setCtxImageSmoothingEnabled(r, this.runtime.linearSampling)), r.globalAlpha = 1, r.globalCompositeOperation = "source-over", this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && r.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height), i = 0, s = this.layers.length; i < s; i++)(n = this.layers[i]).visible && 0 < n.opacity && 11 !== n.blend_mode && (n.instances.length || !n.transparent) ? n.draw(r) : n.updateViewport(null);
            o && t.drawImage(e, 0, 0, this.runtime.width, this.runtime.height)
        }, t.prototype.drawGL_earlyZPass = function(t) {
            var e, i;
            for (t.setEarlyZPass(!0), this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height), e = this.layers.length - 1; 0 <= e; --e)(i = this.layers[e]).visible && 1 === i.opacity && i.shaders_preserve_opaqueness && 0 === i.blend_mode && (i.instances.length || !i.transparent) ? i.drawGL_earlyZPass(t) : i.updateViewport(null);
            t.setEarlyZPass(!1)
        }, t.prototype.drawGL = function(t) {
            var e, i, s, n = 0 < this.active_effect_types.length || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack;
            for (n ? (this.runtime.layout_tex || (this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layout_tex.c2width === this.runtime.draw_width && this.runtime.layout_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layout_tex), this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.draw_width, this.runtime.draw_height)) : this.runtime.layout_tex && (t.setRenderingToTexture(null), t.deleteTexture(this.runtime.layout_tex), this.runtime.layout_tex = null), this.runtime.clearBackground && !this.hasOpaqueBottomLayer() && t.clear(0, 0, 0, 0), e = 0, i = this.layers.length; e < i; e++)(s = this.layers[e]).visible && 0 < s.opacity && (s.instances.length || !s.transparent) ? s.drawGL(t) : s.updateViewport(null);
            if (n)
                if (0 === this.active_effect_types.length || 1 === this.active_effect_types.length && this.runtime.fullscreenScalingQuality) {
                    if (1 === this.active_effect_types.length) {
                        var r = this.active_effect_types[0].index;
                        t.switchProgram(this.active_effect_types[0].shaderindex), t.setProgramParameters(null, 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, this.scale, this.angle, 0, 0, this.runtime.draw_width / 2, this.runtime.draw_height / 2, this.runtime.kahanTime.sum, this.effect_params[r]), t.programIsAnimated(this.active_effect_types[0].shaderindex) && (this.runtime.redraw = !0)
                    } else t.switchProgram(0);
                    this.runtime.fullscreenScalingQuality || t.setSize(this.runtime.width, this.runtime.height), t.setRenderingToTexture(null), t.setDepthTestEnabled(!1), t.setOpacity(1), t.setTexture(this.runtime.layout_tex), t.setAlphaBlend(), t.resetModelView(), t.updateModelView();
                    var a = this.runtime.width / 2,
                        o = this.runtime.height / 2;
                    t.quad(-a, o, a, o, a, -o, -a, -o), t.setTexture(null), t.setDepthTestEnabled(!0)
                } else this.renderEffectChain(t, null, null, null)
        }, t.prototype.getRenderTarget = function() {
            return 0 < this.active_effect_types.length || this.runtime.uses_background_blending || !this.runtime.fullscreenScalingQuality || this.runtime.enableFrontToBack ? this.runtime.layout_tex : null
        }, t.prototype.getMinLayerScale = function() {
            var t, e, i, s = this.layers[0].getScale();
            for (t = 1, e = this.layers.length; t < e; t++) 0 === (i = this.layers[t]).parallaxX && 0 === i.parallaxY || i.getScale() < s && (s = i.getScale());
            return s
        }, t.prototype.scrollToX = function(t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_width * (1 / this.getMinLayerScale()) / 2;
                t > this.width - e && (t = this.width - e), t < e && (t = e)
            }
            this.scrollX !== t && (this.scrollX = t, this.runtime.redraw = !0)
        }, t.prototype.scrollToY = function(t) {
            if (!this.unbounded_scrolling) {
                var e = this.runtime.draw_height * (1 / this.getMinLayerScale()) / 2;
                t > this.height - e && (t = this.height - e), t < e && (t = e)
            }
            this.scrollY !== t && (this.scrollY = t, this.runtime.redraw = !0)
        }, t.prototype.boundScrolling = function() {
            this.scrollToX(this.scrollX), this.scrollToY(this.scrollY)
        }, t.prototype.renderEffectChain = function(t, e, i, s) {
            var n = i ? i.active_effect_types : e ? e.active_effect_types : this.active_effect_types,
                r = 1,
                a = 0,
                o = 0,
                h = 0,
                c = this.runtime.draw_width,
                l = this.runtime.draw_height;
            i ? (r = i.layer.getScale(), a = i.layer.getAngle(), o = i.layer.viewLeft, h = i.layer.viewTop, c = i.layer.viewRight, l = i.layer.viewBottom) : e && (r = e.getScale(), a = e.getAngle(), o = e.viewLeft, h = e.viewTop, c = e.viewRight, l = e.viewBottom);
            var u, p, d, f, g, m = this.runtime.fx_tex,
                y = 0,
                _ = 1,
                v = this.runtime.draw_width,
                b = this.runtime.draw_height,
                w = v / 2,
                x = b / 2,
                S = e ? e.rcTex : this.rcTex,
                T = e ? e.rcTex2 : this.rcTex2,
                C = 0,
                A = 0,
                P = 0,
                O = 0,
                k = v,
                E = v,
                R = b,
                L = b,
                I = 0,
                B = 0,
                M = i ? i.layer.getAngle() : 0;
            if (i) {
                for (u = 0, p = n.length; u < p; u++) I += t.getProgramBoxExtendHorizontal(n[u].shaderindex), B += t.getProgramBoxExtendVertical(n[u].shaderindex);
                var F = i.bbox;
                if (C = e.layerToCanvas(F.left, F.top, !0, !0), P = e.layerToCanvas(F.left, F.top, !1, !0), k = e.layerToCanvas(F.right, F.bottom, !0, !0), R = e.layerToCanvas(F.right, F.bottom, !1, !0), 0 !== M) {
                    var N = e.layerToCanvas(F.right, F.top, !0, !0),
                        D = e.layerToCanvas(F.right, F.top, !1, !0),
                        j = e.layerToCanvas(F.left, F.bottom, !0, !0),
                        W = e.layerToCanvas(F.left, F.bottom, !1, !0);
                    d = Math.min(C, k, N, j), k = Math.max(C, k, N, j), C = d, d = Math.min(P, R, D, W), R = Math.max(P, R, D, W), P = d
                }
                C -= I, P -= B, k += I, R += B, T.left = C / v, T.top = 1 - P / b, T.right = k / v, T.bottom = 1 - R / b, A = C = cr.floor(C), O = P = cr.floor(P), E = k = cr.ceil(k), L = R = cr.ceil(R), C < 0 && (C = 0), P < 0 && (P = 0), v < k && (k = v), b < R && (R = b), (A -= I) < 0 && (A = 0), (O -= B) < 0 && (O = 0), v < (E += I) && (E = v), b < (L += B) && (L = b), S.left = C / v, S.top = 1 - P / b, S.right = k / v, S.bottom = 1 - R / b
            } else S.left = T.left = 0, S.top = T.top = 0, S.right = T.right = 1, S.bottom = T.bottom = 1;
            var z = i && (t.programUsesDest(n[0].shaderindex) || 0 !== I || 0 !== B || 1 !== i.opacity || i.type.plugin.must_predraw) || e && !i && 1 !== e.opacity;
            t.setAlphaBlend(), z && (m[y] || (m[y] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), m[y].c2width === v && m[y].c2height === b || (t.deleteTexture(m[y]), m[y] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), t.switchProgram(0), t.setRenderingToTexture(m[y]), f = b - O - (g = L - O), t.clearRect(A, f, E - A, g), i ? i.drawGL(t) : (t.setTexture(this.runtime.layer_tex), t.setOpacity(e.opacity), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), t.quadTex(C, R, k, R, k, P, C, P, S)), T.left = T.top = 0, T.right = T.bottom = 1, i && (d = S.top, S.top = S.bottom, S.bottom = d), y = 1, _ = 0), t.setOpacity(1);
            var V = n.length - 1,
                G = t.programUsesCrossSampling(n[V].shaderindex) || !e && !i && !this.runtime.fullscreenScalingQuality,
                U = 0;
            for (u = 0, p = n.length; u < p; u++) {
                if (m[y] || (m[y] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), m[y].c2width === v && m[y].c2height === b || (t.deleteTexture(m[y]), m[y] = t.createEmptyTexture(v, b, this.runtime.linearSampling)), t.switchProgram(n[u].shaderindex), U = n[u].index, t.programIsAnimated(n[u].shaderindex) && (this.runtime.redraw = !0), 0 != u || z) t.setProgramParameters(s, 1 / v, 1 / b, T.left, T.top, T.right, T.bottom, r, a, o, h, (o + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i ? i.effect_params[U] : e ? e.effect_params[U] : this.effect_params[U]), t.setTexture(null), u !== V || G ? (t.setRenderingToTexture(m[y]), f = b - O - (g = L - O), t.clearRect(A, f, E - A, g)) : (i ? t.setBlend(i.srcBlend, i.destBlend) : e && t.setBlend(e.srcBlend, e.destBlend), t.setRenderingToTexture(s)), t.setTexture(m[_]), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), t.quadTex(C, R, k, R, k, P, C, P, S), u !== V || G || t.setTexture(null);
                else {
                    if (t.setRenderingToTexture(m[y]), f = b - O - (g = L - O), t.clearRect(A, f, E - A, g), i) {
                        var X, q;
                        if (i.curFrame && i.curFrame.texture_img) {
                            var H = i.curFrame.texture_img;
                            X = 1 / H.width, q = 1 / H.height
                        } else X = 1 / i.width, q = 1 / i.height;
                        t.setProgramParameters(s, X, q, T.left, T.top, T.right, T.bottom, r, a, o, h, (o + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, i.effect_params[U]), i.drawGL(t)
                    } else t.setProgramParameters(s, 1 / v, 1 / b, 0, 0, 1, 1, r, a, o, h, (o + c) / 2, (h + l) / 2, this.runtime.kahanTime.sum, e ? e.effect_params[U] : this.effect_params[U]), t.setTexture(e ? this.runtime.layer_tex : this.runtime.layout_tex), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), t.quadTex(C, R, k, R, k, P, C, P, S);
                    T.left = T.top = 0, T.right = T.bottom = 1, i && !G && (d = R, R = P, P = d)
                }
                _ = 0 === (y = 0 === y ? 1 : 0) ? 1 : 0
            }
            G && (t.switchProgram(0), i ? t.setBlend(i.srcBlend, i.destBlend) : e ? t.setBlend(e.srcBlend, e.destBlend) : this.runtime.fullscreenScalingQuality || (t.setSize(this.runtime.width, this.runtime.height), w = this.runtime.width / 2, x = this.runtime.height / 2, P = C = 0, k = this.runtime.width, R = this.runtime.height), t.setRenderingToTexture(s), t.setTexture(m[_]), t.resetModelView(), t.translate(-w, -x), t.updateModelView(), i && 1 === n.length && !z ? t.quadTex(C, P, k, P, k, R, C, R, S) : t.quadTex(C, R, k, R, k, P, C, P, S), t.setTexture(null))
        }, t.prototype.getLayerBySid = function(t) {
            var e, i;
            for (e = 0, i = this.layers.length; e < i; e++)
                if (this.layers[e].sid === t) return this.layers[e];
            return null
        }, t.prototype.saveToJSON = function() {
            var t, e, i, s, n = {
                sx: this.scrollX,
                sy: this.scrollY,
                s: this.scale,
                a: this.angle,
                w: this.width,
                h: this.height,
                fv: this.first_visit,
                persist: this.persist_data,
                fx: [],
                layers: {}
            };
            for (t = 0, e = this.effect_types.length; t < e; t++) s = this.effect_types[t], n.fx.push({
                name: s.name,
                active: s.active,
                params: this.effect_params[s.index]
            });
            for (t = 0, e = this.layers.length; t < e; t++) i = this.layers[t], n.layers[i.sid.toString()] = i.saveToJSON();
            return n
        }, t.prototype.loadFromJSON = function(t) {
            var e, i, s, n, r;
            this.scrollX = t.sx, this.scrollY = t.sy, this.scale = t.s, this.angle = t.a, this.width = t.w, this.height = t.h, this.persist_data = t.persist, void 0 !== t.fv && (this.first_visit = t.fv);
            var a = t.fx;
            for (e = 0, i = a.length; e < i; e++)(s = this.getEffectByName(a[e].name)) && (s.active = a[e].active, this.effect_params[s.index] = a[e].params);
            this.updateActiveEffects();
            var o = t.layers;
            for (n in o)
                if (o.hasOwnProperty(n)) {
                    if (!(r = this.getLayerBySid(parseInt(n, 10)))) continue;
                    r.loadFromJSON(o[n])
                }
        }, cr.layout = t, e.prototype.updateActiveEffects = function() {
            var t, e, i;
            for (cr.clearArray(this.active_effect_types), this.shaders_preserve_opaqueness = !0, t = 0, e = this.effect_types.length; t < e; t++)(i = this.effect_types[t]).active && (this.active_effect_types.push(i), i.preservesOpaqueness || (this.shaders_preserve_opaqueness = !1))
        }, e.prototype.getEffectByName = function(t) {
            var e, i, s;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if ((s = this.effect_types[e]).name === t) return s;
            return null
        }, e.prototype.createInitialInstances = function() {
            var t, e, i, s, n, r, a;
            for (e = t = 0, i = this.initial_instances.length; t < i; t++) {
                if (n = this.initial_instances[t], r = this.runtime.types_by_index[n[1]], a = !0, !this.runtime.typeHasPersistBehavior(r) || this.layout.first_visit) {
                    if (!(s = this.runtime.createInstanceFromInit(n, this, !0))) continue;
                    m.push(s), s.type.global && (a = !1, this.created_globals.push(s.uid))
                }
                a && (this.initial_instances[e] = this.initial_instances[t], e++)
            }
            this.initial_instances.length = e, this.runtime.ClearDeathRow(), !this.runtime.glwrap && this.effect_types.length && (this.blend_mode = this.effect_fallback), this.compositeOp = cr.effectToCompositeOp(this.blend_mode), this.runtime.gl && cr.setGLBlend(this, this.blend_mode, this.runtime.gl), this.render_list_stale = !0
        }, e.prototype.recreateInitialObjects = function(t, e) {
            var i, s, n, r, a, o, h, c, l, u, p, d = this.runtime.types_by_index,
                f = t.is_family,
                g = t.members;
            for (i = 0, s = this.initial_instances.length; i < s; ++i)
                if (o = (a = (n = this.initial_instances[i])[0])[0], h = a[1], e.contains_pt(o, h)) {
                    if ((r = d[n[1]]) !== t) {
                        if (!f) continue;
                        if (g.indexOf(r) < 0) continue
                    }
                    if (c = this.runtime.createInstanceFromInit(n, this, !1), this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(r.plugin).cnds.OnCreated, c), c.is_contained)
                        for (l = 0, u = c.siblings.length; l < u; l++) p = c.siblings[i], this.runtime.trigger(Object.getPrototypeOf(p.type.plugin).cnds.OnCreated, p);
                    this.runtime.isInOnDestroy--
                }
        }, e.prototype.removeFromInstanceList = function(t, e) {
            var i = cr.fastIndexOf(this.instances, t);
            i < 0 || (e && this.useRenderCells && t.rendercells && t.rendercells.right >= t.rendercells.left && (t.update_bbox(), this.render_grid.update(t, t.rendercells, null), t.rendercells.set(0, 0, -1, -1)), i === this.instances.length - 1 ? this.instances.pop() : (cr.arrayRemove(this.instances, i), this.setZIndicesStaleFrom(i)), this.render_list_stale = !0)
        }, e.prototype.appendToInstanceList = function(t, e) {
            t.zindex = this.instances.length, this.instances.push(t), e && this.useRenderCells && t.rendercells && t.set_bbox_changed(), this.render_list_stale = !0
        }, e.prototype.prependToInstanceList = function(t, e) {
            this.instances.unshift(t), this.setZIndicesStaleFrom(0), e && this.useRenderCells && t.rendercells && t.set_bbox_changed()
        }, e.prototype.moveInstanceAdjacent = function(t, e, i) {
            var s = t.get_zindex(),
                n = e.get_zindex();
            cr.arrayRemove(this.instances, s), s < n && n--, i && n++, n === this.instances.length ? this.instances.push(t) : this.instances.splice(n, 0, t), this.setZIndicesStaleFrom(s < n ? s : n)
        }, e.prototype.setZIndicesStaleFrom = function(t) {
            -1 === this.zindices_stale_from ? this.zindices_stale_from = t : t < this.zindices_stale_from && (this.zindices_stale_from = t), this.zindices_stale = !0, this.render_list_stale = !0
        }, e.prototype.updateZIndices = function() {
            if (this.zindices_stale) {
                var t, e, i;
                if (-1 === this.zindices_stale_from && (this.zindices_stale_from = 0), this.useRenderCells)
                    for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t)(i = this.instances[t]).zindex = t, this.render_grid.markRangeChanged(i.rendercells);
                else
                    for (t = this.zindices_stale_from, e = this.instances.length; t < e; ++t) this.instances[t].zindex = t;
                this.zindices_stale = !1, this.zindices_stale_from = -1
            }
        }, e.prototype.getScale = function(t) {
            return this.getNormalScale() * (this.runtime.fullscreenScalingQuality || t ? this.runtime.aspect_scale : 1)
        }, e.prototype.getNormalScale = function() {
            return (this.scale * this.layout.scale - 1) * this.zoomRate + 1
        }, e.prototype.getAngle = function() {
            return this.disableAngle ? 0 : cr.clamp_angle(this.layout.angle + this.angle)
        };
        var i = [];

        function h() {
            return i.length ? i.pop() : []
        }

        function d(t) {
            cr.clearArray(t), i.push(t)
        }

        function c(t, e, i) {
            var s, n, r = 0,
                a = 0,
                o = 0,
                h = t.length,
                c = e.length;
            for (i.length = h + c; r < h && a < c; ++o) s = t[r], n = e[a], s.zindex < n.zindex ? (i[o] = s, ++r) : (i[o] = n, ++a);
            for (; r < h; ++r, ++o) i[o] = t[r];
            for (; a < c; ++a, ++o) i[o] = e[a]
        }
        var l = [];

        function s(t, e) {
            var i, s, n, r, a;
            for (i = 0, s = t.length; i < s - 1; i += 2) c(n = t[i], r = t[i + 1], a = h()), e || (d(n), d(r)), l.push(a);
            s % 2 == 1 && (e ? (n = h(), cr.shallowAssignArray(n, t[s - 1]), l.push(n)) : l.push(t[s - 1])), cr.shallowAssignArray(t, l), cr.clearArray(l)
        }
        var n = [];
        e.prototype.getRenderCellInstancesToDraw = function() {
            if (this.updateZIndices(), this.render_grid.queryRange(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom, n), !n.length) return h();
            if (1 === n.length) {
                var t = h();
                return cr.shallowAssignArray(t, n[0]), cr.clearArray(n), t
            }
            var e = function(t) {
                for (var e = !0; 1 < t.length;) s(t, e), e = !1;
                return t[0]
            }(n);
            return cr.clearArray(n), e
        }, e.prototype.draw = function(t) {
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 !== this.blend_mode;
            var e = this.runtime.canvas,
                i = t,
                s = !1;
            this.render_offscreen && (this.runtime.layer_canvas || (this.runtime.layer_canvas = document.createElement("canvas"), (e = this.runtime.layer_canvas).width = this.runtime.draw_width, e.height = this.runtime.draw_height, this.runtime.layer_ctx = e.getContext("2d"), s = !0), e = this.runtime.layer_canvas, i = this.runtime.layer_ctx, e.width !== this.runtime.draw_width && (e.width = this.runtime.draw_width, s = !0), e.height !== this.runtime.draw_height && (e.height = this.runtime.draw_height, s = !0), s && this.runtime.setCtxImageSmoothingEnabled(i, this.runtime.linearSampling), this.transparent && i.clearRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.globalAlpha = 1, i.globalCompositeOperation = "source-over", this.transparent || (i.fillStyle = "rgb(" + this.background_color[0] + "," + this.background_color[1] + "," + this.background_color[2] + ")", i.fillRect(0, 0, this.runtime.draw_width, this.runtime.draw_height)), i.save(), this.disableAngle = !0;
            var n = this.canvasToLayer(0, 0, !0, !0),
                r = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (n = Math.round(n), r = Math.round(r)), this.rotateViewport(n, r, i);
            var a, o = this.getScale();
            i.scale(o, o), i.translate(-n, -r), this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (d(this.last_render_list), a = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : a = this.last_render_list) : a = this.instances;
            var h, c, l, u = null;
            for (h = 0, c = a.length; h < c; ++h)(l = a[h]) !== u && (this.drawInstance(l, i), u = l);
            this.useRenderCells && (this.last_render_list = a), i.restore(), this.render_offscreen && (t.globalCompositeOperation = this.compositeOp, t.globalAlpha = this.opacity, t.drawImage(e, 0, 0))
        }, e.prototype.drawInstance = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.globalCompositeOperation = t.compositeOp, t.draw(e))
            }
        }, e.prototype.updateViewport = function(t) {
            this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, t)
        }, e.prototype.rotateViewport = function(t, e, i) {
            var s, n = this.getScale();
            this.viewLeft = t, this.viewTop = e, this.viewRight = t + this.runtime.draw_width * (1 / n), this.viewBottom = e + this.runtime.draw_height * (1 / n), this.viewLeft > this.viewRight && (s = this.viewLeft, this.viewLeft = this.viewRight, this.viewRight = s), this.viewTop > this.viewBottom && (s = this.viewTop, this.viewTop = this.viewBottom, this.viewBottom = s);
            var r = this.getAngle();
            0 !== r && (i && (i.translate(this.runtime.draw_width / 2, this.runtime.draw_height / 2), i.rotate(-r), i.translate(this.runtime.draw_width / -2, this.runtime.draw_height / -2)), this.tmprect.set(this.viewLeft, this.viewTop, this.viewRight, this.viewBottom), this.tmprect.offset((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), this.tmpquad.set_from_rotated_rect(this.tmprect, r), this.tmpquad.bounding_box(this.tmprect), this.tmprect.offset((this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2), this.viewLeft = this.tmprect.left, this.viewTop = this.tmprect.top, this.viewRight = this.tmprect.right, this.viewBottom = this.tmprect.bottom)
        }, e.prototype.drawGL_earlyZPass = function(t) {
            this.runtime.draw_width, this.runtime.draw_height;
            this.render_offscreen = this.forceOwnTexture, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex)), this.disableAngle = !0;
            var e = this.canvasToLayer(0, 0, !0, !0),
                i = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i)), this.rotateViewport(e, i, null);
            var s, n = this.getScale();
            t.resetModelView(), t.scale(n, n), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView(), this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (d(this.last_render_list), s = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : s = this.last_render_list) : s = this.instances;
            var r, a, o = null;
            for (r = s.length - 1; 0 <= r; --r)(a = s[r]) !== o && (this.drawInstanceGL_earlyZPass(s[r], t), o = a);
            this.useRenderCells && (this.last_render_list = s), this.transparent || (this.clear_earlyz_index = this.runtime.earlyz_index++, t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(1, 1, 1, 1), t.fullscreenQuad(), t.restoreEarlyZMode())
        }, e.prototype.drawGL = function(t) {
            this.runtime.draw_width, this.runtime.draw_height;
            var e = 0,
                i = 0;
            this.render_offscreen = this.forceOwnTexture || 1 !== this.opacity || 0 < this.active_effect_types.length || 0 !== this.blend_mode, this.render_offscreen && (this.runtime.layer_tex || (this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), this.runtime.layer_tex.c2width === this.runtime.draw_width && this.runtime.layer_tex.c2height === this.runtime.draw_height || (t.deleteTexture(this.runtime.layer_tex), this.runtime.layer_tex = t.createEmptyTexture(this.runtime.draw_width, this.runtime.draw_height, this.runtime.linearSampling)), t.setRenderingToTexture(this.runtime.layer_tex), this.transparent && t.clear(0, 0, 0, 0)), this.transparent || (this.runtime.enableFrontToBack ? (t.setEarlyZIndex(this.clear_earlyz_index), t.setColorFillMode(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1), t.fullscreenQuad(), t.setTextureFillMode()) : t.clear(this.background_color[0] / 255, this.background_color[1] / 255, this.background_color[2] / 255, 1)), this.disableAngle = !0;
            var s = this.canvasToLayer(0, 0, !0, !0),
                n = this.canvasToLayer(0, 0, !1, !0);
            this.disableAngle = !1, this.runtime.pixel_rounding && (s = Math.round(s), n = Math.round(n)), this.rotateViewport(s, n, null);
            var r, a = this.getScale();
            t.resetModelView(), t.scale(a, a), t.rotateZ(-this.getAngle()), t.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), t.updateModelView(), this.useRenderCells ? (this.cur_render_cells.left = this.render_grid.XToCell(this.viewLeft), this.cur_render_cells.top = this.render_grid.YToCell(this.viewTop), this.cur_render_cells.right = this.render_grid.XToCell(this.viewRight), this.cur_render_cells.bottom = this.render_grid.YToCell(this.viewBottom), this.render_list_stale || !this.cur_render_cells.equals(this.last_render_cells) ? (d(this.last_render_list), r = this.getRenderCellInstancesToDraw(), this.render_list_stale = !1, this.last_render_cells.copy(this.cur_render_cells)) : r = this.last_render_list) : r = this.instances;
            var o, h, c, l = null;
            for (o = 0, h = r.length; o < h; ++o)(c = r[o]) !== l && (this.drawInstanceGL(r[o], t), l = c);
            if (this.useRenderCells && (this.last_render_list = r), this.render_offscreen)
                if (e = this.active_effect_types.length ? this.active_effect_types[0].shaderindex : 0, i = this.active_effect_types.length ? this.active_effect_types[0].index : 0, 0 === this.active_effect_types.length || 1 === this.active_effect_types.length && !t.programUsesCrossSampling(e) && 1 === this.opacity) {
                    1 === this.active_effect_types.length ? (t.switchProgram(e), t.setProgramParameters(this.layout.getRenderTarget(), 1 / this.runtime.draw_width, 1 / this.runtime.draw_height, 0, 0, 1, 1, a, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, this.effect_params[i]), t.programIsAnimated(e) && (this.runtime.redraw = !0)) : t.switchProgram(0), t.setRenderingToTexture(this.layout.getRenderTarget()), t.setOpacity(this.opacity), t.setTexture(this.runtime.layer_tex), t.setBlend(this.srcBlend, this.destBlend), t.resetModelView(), t.updateModelView();
                    var u = this.runtime.draw_width / 2,
                        p = this.runtime.draw_height / 2;
                    t.quad(-u, p, u, p, u, -p, -u, -p), t.setTexture(null)
                } else this.layout.renderEffectChain(t, this, null, this.layout.getRenderTarget())
        }, e.prototype.drawInstanceGL = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (e.setEarlyZIndex(t.earlyz_index), t.uses_shaders ? this.drawInstanceWithShadersGL(t, e) : (e.switchProgram(0), e.setBlend(t.srcBlend, t.destBlend), t.drawGL(e)))
            }
        }, e.prototype.drawInstanceGL_earlyZPass = function(t, e) {
            if (t.visible && 0 !== t.width && 0 !== t.height) {
                t.update_bbox();
                var i = t.bbox;
                i.right < this.viewLeft || i.bottom < this.viewTop || i.left > this.viewRight || i.top > this.viewBottom || (t.earlyz_index = this.runtime.earlyz_index++, 0 === t.blend_mode && 1 === t.opacity && t.shaders_preserve_opaqueness && t.drawGL_earlyZPass && (e.setEarlyZIndex(t.earlyz_index), t.drawGL_earlyZPass(e)))
            }
        }, e.prototype.drawInstanceWithShadersGL = function(t, e) {
            var i = t.active_effect_types[0].shaderindex,
                s = t.active_effect_types[0].index,
                n = this.getScale();
            if (1 !== t.active_effect_types.length || e.programUsesCrossSampling(i) || e.programExtendsBox(i) || (t.angle || t.layer.getAngle()) && e.programUsesDest(i) || 1 !== t.opacity || t.type.plugin.must_predraw) this.layout.renderEffectChain(e, this, t, this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget()), e.resetModelView(), e.scale(n, n), e.rotateZ(-this.getAngle()), e.translate((this.viewLeft + this.viewRight) / -2, (this.viewTop + this.viewBottom) / -2), e.updateModelView();
            else {
                e.switchProgram(i), e.setBlend(t.srcBlend, t.destBlend), e.programIsAnimated(i) && (this.runtime.redraw = !0);
                var r, a, o = 0,
                    h = 0,
                    c = 0,
                    l = 0;
                if (e.programUsesDest(i)) {
                    var u = t.bbox,
                        p = this.layerToCanvas(u.left, u.top, !0, !0),
                        d = this.layerToCanvas(u.left, u.top, !1, !0),
                        f = this.layerToCanvas(u.right, u.bottom, !0, !0),
                        g = this.layerToCanvas(u.right, u.bottom, !1, !0);
                    o = p / windowWidth, h = 1 - d / windowHeight, c = f / windowWidth, l = 1 - g / windowHeight
                }
                if (t.curFrame && t.curFrame.texture_img) {
                    var m = t.curFrame.texture_img;
                    r = 1 / m.width, a = 1 / m.height
                } else r = 1 / t.width, a = 1 / t.height;
                e.setProgramParameters(this.render_offscreen ? this.runtime.layer_tex : this.layout.getRenderTarget(), r, a, o, h, c, l, n, this.getAngle(), this.viewLeft, this.viewTop, (this.viewLeft + this.viewRight) / 2, (this.viewTop + this.viewBottom) / 2, this.runtime.kahanTime.sum, t.effect_params[s]), t.drawGL(e)
            }
        }, e.prototype.canvasToLayer = function(t, e, i, s) {
            var n = this.runtime.devicePixelRatio;
            this.runtime.isRetina && (t *= n, e *= n);
            var r = this.runtime.parallax_x_origin,
                a = this.runtime.parallax_y_origin,
                o = (this.layout.scrollX - r) * this.parallaxX + r,
                h = (this.layout.scrollY - a) * this.parallaxY + a,
                c = o,
                l = h,
                u = 1 / this.getScale(!s);
            s ? (c -= this.runtime.draw_width * u / 2, l -= this.runtime.draw_height * u / 2) : (c -= this.runtime.width * u / 2, l -= this.runtime.height * u / 2), c += t * u, l += e * u;
            var p = this.getAngle();
            if (0 !== p) {
                c -= o, l -= h;
                var d = Math.cos(p),
                    f = Math.sin(p),
                    g = c * d - l * f;
                l = l * d + c * f, c = g, c += o, l += h
            }
            return i ? c : l
        }, e.prototype.layerToCanvas = function(t, e, i, s) {
            var n = this.runtime.parallax_x_origin,
                r = this.runtime.parallax_y_origin,
                a = (this.layout.scrollX - n) * this.parallaxX + n,
                o = (this.layout.scrollY - r) * this.parallaxY + r,
                h = a,
                c = o,
                l = this.getAngle();
            if (0 !== l) {
                t -= a, e -= o;
                var u = Math.cos(-l),
                    p = Math.sin(-l),
                    d = t * u - e * p;
                e = e * u + t * p, t = d, t += a, e += o
            }
            var f = 1 / this.getScale(!s);
            s ? (h -= this.runtime.draw_width * f / 2, c -= this.runtime.draw_height * f / 2) : (h -= this.runtime.width * f / 2, c -= this.runtime.height * f / 2), h = (t - h) / f, c = (e - c) / f;
            var g = this.runtime.devicePixelRatio;
            return this.runtime.isRetina && !s && (h /= g, c /= g), i ? h : c
        }, e.prototype.rotatePt = function(t, e, i) {
            if (0 === this.getAngle()) return i ? t : e;
            var s = this.layerToCanvas(t, e, !0),
                n = this.layerToCanvas(t, e, !1);
            this.disableAngle = !0;
            var r = this.canvasToLayer(s, n, !0),
                a = this.canvasToLayer(s, n, !0);
            return this.disableAngle = !1, i ? r : a
        }, e.prototype.saveToJSON = function() {
            var t, e, i, s = {
                s: this.scale,
                a: this.angle,
                vl: this.viewLeft,
                vt: this.viewTop,
                vr: this.viewRight,
                vb: this.viewBottom,
                v: this.visible,
                bc: this.background_color,
                t: this.transparent,
                px: this.parallaxX,
                py: this.parallaxY,
                o: this.opacity,
                zr: this.zoomRate,
                fx: [],
                cg: this.created_globals,
                instances: []
            };
            for (t = 0, e = this.effect_types.length; t < e; t++) i = this.effect_types[t], s.fx.push({
                name: i.name,
                active: i.active,
                params: this.effect_params[i.index]
            });
            return s
        }, e.prototype.loadFromJSON = function(t) {
            var e, i, s, n;
            this.scale = t.s, this.angle = t.a, this.viewLeft = t.vl, this.viewTop = t.vt, this.viewRight = t.vr, this.viewBottom = t.vb, this.visible = t.v, this.background_color = t.bc, this.transparent = t.t, this.parallaxX = t.px, this.parallaxY = t.py, this.opacity = t.o, this.zoomRate = t.zr, this.created_globals = t.cg || [], cr.shallowAssignArray(this.initial_instances, this.startup_initial_instances);
            var r = new cr.ObjectSet;
            for (e = 0, s = this.created_globals.length; e < s; ++e) r.add(this.created_globals[e]);
            for (i = e = 0, s = this.initial_instances.length; e < s; ++e) r.contains(this.initial_instances[e][2]) || (this.initial_instances[i] = this.initial_instances[e], ++i);
            cr.truncateArray(this.initial_instances, i);
            var a = t.fx;
            for (e = 0, s = a.length; e < s; e++)(n = this.getEffectByName(a[e].name)) && (n.active = a[e].active, this.effect_params[n.index] = a[e].params);
            this.updateActiveEffects(), this.instances.sort(y), this.zindices_stale = !0
        }, cr.layer = e
    }(),
    function() {
        var a = [];

        function o(t, e) {
            var i, s = t.length;
            switch (s) {
                case 0:
                    return !0;
                case 1:
                    return t[0] === e[0];
                case 2:
                    return t[0] === e[0] && t[1] === e[1];
                default:
                    for (i = 0; i < s; i++)
                        if (t[i] !== e[i]) return !1;
                    return !0
            }
        }

        function h(t, e) {
            return t.index - e.index
        }

        function n(t) {
            var e, i, s, n, r;
            for (2 === t.length ? t[0].index > t[1].index && (n = t[0], t[0] = t[1], t[1] = n) : 2 < t.length && t.sort(h), t.length >= a.length && (a.length = t.length + 1), a[t.length] || (a[t.length] = []), e = 0, i = (r = a[t.length]).length; e < i; e++)
                if (o(t, s = r[e])) return s;
            return r.push(t), t
        }

        function t(t, e) {
            this.runtime = t, this.triggers = {}, this.fasttriggers = {}, this.hasRun = !1, this.includes = new cr.ObjectSet, this.deep_includes = [], this.already_included_sheets = [], this.name = e[0];
            var i, s, n = e[1];
            for (this.events = [], i = 0, s = n.length; i < s; i++) this.init_event(n[i], null, this.events)
        }

        function e(t) {
            this.type = t, this.instances = [], this.else_instances = [], this.select_all = !0
        }

        function i(t, e, i) {
            var s, n;
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.solModifiersIncludingParents = [], this.solWriterAfterCnds = !1, this.group = !1, this.initially_activated = !1, this.toplevelevent = !1, this.toplevelgroup = !1, this.has_else_block = !1, this.conditions = [], this.actions = [], this.subevents = [], this.group_name = "", this.group = !1, this.initially_activated = !1, this.group_active = !1, this.contained_includes = null, i[1] && (this.group_name = i[1][1].toLowerCase(), this.group = !0, this.initially_activated = !!i[1][0], this.contained_includes = [], this.group_active = this.initially_activated, this.runtime.allGroups.push(this), this.runtime.groups_by_name[this.group_name] = this), this.orblock = i[2], this.sid = i[4], this.group || (this.runtime.blocksBySid[this.sid.toString()] = this);
            var r = i[5];
            for (s = 0, n = r.length; s < n; s++) {
                var a = new cr.condition(this, r[s]);
                a.index = s, cr.seal(a), this.conditions.push(a), this.addSolModifier(a.type)
            }
            var o = i[6];
            for (s = 0, n = o.length; s < n; s++) {
                var h = new cr.action(this, o[s]);
                h.index = s, cr.seal(h), this.actions.push(h)
            }
            if (8 === i.length) {
                var c = i[7];
                for (s = 0, n = c.length; s < n; s++) this.sheet.init_event(c[s], this, this.subevents)
            }
            this.is_else_block = !1, this.conditions.length && (this.is_else_block = null == this.conditions[0].type && this.conditions[0].func == cr.system_object.prototype.cnds.Else)
        }

        function s(t, e) {
            var i, s, n;
            if (t && (-1 === e.indexOf(t) && e.push(t), t.is_contained))
                for (i = 0, s = t.container.length; i < s; i++) t !== (n = t.container[i]) && -1 === e.indexOf(n) && e.push(n)
        }

        function r(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), this.trigger = 0 < e[3], this.fasttrigger = 2 === e[3], this.looping = e[4], this.inverted = e[5], this.isstatic = e[6], this.sid = e[7], this.runtime.cndsBySid[this.sid.toString()] = this, -1 === e[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.isstatic ? this.run = this.run_static : this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1), this.block.parent && this.block.parent.setSolWriterAfterCnds()), this.fasttrigger && (this.run = this.run_true), 10 === e.length) {
                var i, s, n = e[9];
                for (i = 0, s = n.length; i < s; i++) {
                    var r = new cr.parameter(this, n[i]);
                    cr.seal(r), this.parameters.push(r)
                }
                this.results.length = n.length
            }
        }

        function c(t, e) {
            if (this.block = t, this.sheet = t.sheet, this.runtime = t.runtime, this.parameters = [], this.results = [], this.extra = {}, this.index = -1, this.anyParamVariesPerInstance = !1, this.func = this.runtime.GetObjectReference(e[1]), -1 === e[0] ? (this.type = null, this.run = this.run_system, this.behaviortype = null, this.beh_index = -1) : (this.type = this.runtime.types_by_index[e[0]], this.run = this.run_object, e[2] ? (this.behaviortype = this.type.getBehaviorByName(e[2]), this.beh_index = this.type.getBehaviorIndexByName(e[2])) : (this.behaviortype = null, this.beh_index = -1)), this.sid = e[3], this.runtime.actsBySid[this.sid.toString()] = this, 6 === e.length) {
                var i, s, n = e[5];
                for (i = 0, s = n.length; i < s; i++) {
                    var r = new cr.parameter(this, n[i]);
                    cr.seal(r), this.parameters.push(r)
                }
                this.results.length = n.length
            }
        }
        t.prototype.toString = function() {
            return this.name
        }, t.prototype.init_event = function(t, e, i) {
            switch (t[0]) {
                case 0:
                    var s, n, r = new cr.eventblock(this, e, t);
                    if (cr.seal(r), r.orblock)
                        for (i.push(r), s = 0, n = r.conditions.length; s < n; s++) r.conditions[s].trigger && this.init_trigger(r, s);
                    else r.is_trigger() ? this.init_trigger(r, 0) : i.push(r);
                    break;
                case 1:
                    var a = new cr.eventvariable(this, e, t);
                    cr.seal(a), i.push(a);
                    break;
                case 2:
                    var o = new cr.eventinclude(this, e, t);
                    cr.seal(o), i.push(o)
            }
        }, t.prototype.postInit = function() {
            var t, e;
            for (t = 0, e = this.events.length; t < e; t++) this.events[t].postInit(t < e - 1 && this.events[t + 1].is_else_block)
        }, t.prototype.updateDeepIncludes = function() {
            cr.clearArray(this.deep_includes), cr.clearArray(this.already_included_sheets), this.addDeepIncludes(this), cr.clearArray(this.already_included_sheets)
        }, t.prototype.addDeepIncludes = function(t) {
            var e, i, s, n, r = t.deep_includes,
                a = t.already_included_sheets,
                o = this.includes.valuesRef();
            for (e = 0, i = o.length; e < i; ++e) n = (s = o[e]).include_sheet, !s.isActive() || t === n || -1 < a.indexOf(n) || (a.push(n), n.addDeepIncludes(t), r.push(n))
        }, t.prototype.run = function(t) {
            var e, i;
            for (this.runtime.resuming_breakpoint || (this.hasRun = !0, t || (this.runtime.isRunningEvents = !0)), e = 0, i = this.events.length; e < i; e++) {
                var s = this.events[e];
                s.run(), this.runtime.clearSol(s.solModifiers), this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
            }
            t || (this.runtime.isRunningEvents = !1)
        }, t.prototype.init_trigger = function(t, e) {
            t.orblock || this.runtime.triggers_to_postinit.push(t);
            var i, s = t.conditions[e];
            i = s.type ? s.type.name : "system";
            var n = s.fasttrigger,
                r = n ? this.fasttriggers : this.triggers;
            r[i] || (r[i] = []);
            var a = r[i],
                o = s.func;
            if (n) {
                if (!s.parameters.length) return;
                var h, c = s.parameters[0];
                if (1 !== c.type || 2 !== c.expression.type) return;
                var l, u, p = c.expression.value.toLowerCase();
                for (l = 0, u = a.length; l < u; l++)
                    if (a[l].method == o) return void((h = a[l].evs)[p] ? h[p].push([t, e]) : h[p] = [
                        [t, e]
                    ]);
                (h = {})[p] = [
                    [t, e]
                ], a.push({
                    method: o,
                    evs: h
                })
            } else {
                for (l = 0, u = a.length; l < u; l++)
                    if (a[l].method == o) return void a[l].evs.push([t, e]);
                ! function(t) {
                    return !(!cr.plugins_.Sprite || t !== cr.plugins_.Sprite.prototype.cnds.OnFrameChanged)
                }(o) ? a.push({
                    method: o,
                    evs: [
                        [t, e]
                    ]
                }): a.unshift({
                    method: o,
                    evs: [
                        [t, e]
                    ]
                })
            }
        }, cr.eventsheet = t, e.prototype.hasObjects = function() {
            return this.select_all ? this.type.instances.length : this.instances.length
        }, e.prototype.getObjects = function() {
            return this.select_all ? this.type.instances : this.instances
        }, e.prototype.pick_one = function(t) {
            if (t)
                if (t.runtime.getCurrentEventStack().current_event.orblock) {
                    this.select_all && (cr.clearArray(this.instances), cr.shallowAssignArray(this.else_instances, t.type.instances), this.select_all = !1);
                    var e = this.else_instances.indexOf(t); - 1 !== e && (this.instances.push(this.else_instances[e]), this.else_instances.splice(e, 1))
                } else this.select_all = !1, cr.clearArray(this.instances), this.instances[0] = t
        }, cr.selection = e, window._c2hh_ = "2C11753B2D090739935A22BED3E3EBB32AA9FD96", i.prototype.postInit = function(t) {
            var e, i, s = this.parent;
            if (this.group)
                for (this.toplevelgroup = !0; s;) {
                    if (!s.group) {
                        this.toplevelgroup = !1;
                        break
                    }
                    s = s.parent
                }
            for (this.toplevelevent = !this.is_trigger() && (!this.parent || this.parent.group && this.parent.toplevelgroup), this.has_else_block = !!t, this.solModifiersIncludingParents = this.solModifiers.slice(0), s = this.parent; s;) {
                for (e = 0, i = s.solModifiers.length; e < i; e++) this.addParentSolModifier(s.solModifiers[e]);
                s = s.parent
            }
            for (this.solModifiers = n(this.solModifiers), this.solModifiersIncludingParents = n(this.solModifiersIncludingParents), e = 0, i = this.conditions.length; e < i; e++) this.conditions[e].postInit();
            for (e = 0, i = this.actions.length; e < i; e++) this.actions[e].postInit();
            for (e = 0, i = this.subevents.length; e < i; e++) this.subevents[e].postInit(e < i - 1 && this.subevents[e + 1].is_else_block)
        }, i.prototype.setGroupActive = function(t) {
            if (this.group_active !== !!t) {
                var e, i;
                for (this.group_active = !!t, e = 0, i = this.contained_includes.length; e < i; ++e) this.contained_includes[e].updateActive();
                0 < i && this.runtime.running_layout.event_sheet && this.runtime.running_layout.event_sheet.updateDeepIncludes()
            }
        }, i.prototype.addSolModifier = function(t) {
            s(t, this.solModifiers)
        }, i.prototype.addParentSolModifier = function(t) {
            s(t, this.solModifiersIncludingParents)
        }, i.prototype.setSolWriterAfterCnds = function() {
            this.solWriterAfterCnds = !0, this.parent && this.parent.setSolWriterAfterCnds()
        }, i.prototype.is_trigger = function() {
            return !!this.conditions.length && this.conditions[0].trigger
        }, i.prototype.run = function() {
            var t, e, i = !1,
                s = this.runtime,
                n = this.runtime.getCurrentEventStack(),
                r = (n.current_event = this).conditions;
            if (this.is_else_block || (n.else_branch_ran = !1), this.orblock) {
                for (0 === r.length && (i = !0), n.cndindex = 0, t = r.length; n.cndindex < t; n.cndindex++)(e = r[n.cndindex]).trigger || e.run() && (i = !0);
                (n.last_event_true = i) && this.run_actions_and_subevents()
            } else {
                for (n.cndindex = 0, t = r.length; n.cndindex < t; n.cndindex++)
                    if (!r[n.cndindex].run()) return n.last_event_true = !1, void(this.toplevelevent && s.hasPendingInstances && s.ClearDeathRow());
                n.last_event_true = !0, this.run_actions_and_subevents()
            }
            this.end_run(n)
        }, i.prototype.end_run = function(t) {
            t.last_event_true && this.has_else_block && (t.else_branch_ran = !0), this.toplevelevent && this.runtime.hasPendingInstances && this.runtime.ClearDeathRow()
        }, i.prototype.run_orblocktrigger = function(t) {
            (this.runtime.getCurrentEventStack().current_event = this).conditions[t].run() && (this.run_actions_and_subevents(), this.runtime.getCurrentEventStack().last_event_true = !0)
        }, i.prototype.run_actions_and_subevents = function() {
            var t, e = this.runtime.getCurrentEventStack();
            for (e.actindex = 0, t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, i.prototype.resume_actions_and_subevents = function() {
            var t, e = this.runtime.getCurrentEventStack();
            for (t = this.actions.length; e.actindex < t; e.actindex++)
                if (this.actions[e.actindex].run()) return;
            this.run_subevents()
        }, i.prototype.run_subevents = function() {
            if (this.subevents.length) {
                var t, e, i, s, n = this.subevents.length - 1;
                if (this.runtime.pushEventStack(this), this.solWriterAfterCnds)
                    for (t = 0, e = this.subevents.length; t < e; t++) i = this.subevents[t], (s = !this.toplevelgroup || !this.group && t < n) && this.runtime.pushCopySol(i.solModifiers), i.run(), s ? this.runtime.popSol(i.solModifiers) : this.runtime.clearSol(i.solModifiers);
                else
                    for (t = 0, e = this.subevents.length; t < e; t++) this.subevents[t].run();
                this.runtime.popEventStack()
            }
        }, i.prototype.run_pretrigger = function() {
            var t = this.runtime.getCurrentEventStack();
            t.current_event = this;
            var e, i = !1;
            for (t.cndindex = 0, e = this.conditions.length; t.cndindex < e; t.cndindex++)
                if (this.conditions[t.cndindex].run()) i = !0;
                else if (!this.orblock) return !1;
            return !this.orblock || i
        }, i.prototype.retrigger = function() {
            this.runtime.execcount++;
            var t, e = this.runtime.getCurrentEventStack().cndindex,
                i = this.runtime.pushEventStack(this);
            if (!this.orblock)
                for (i.cndindex = e + 1, t = this.conditions.length; i.cndindex < t; i.cndindex++)
                    if (!this.conditions[i.cndindex].run()) return this.runtime.popEventStack(), !1;
            return this.run_actions_and_subevents(), this.runtime.popEventStack(), !0
        }, i.prototype.isFirstConditionOfType = function(t) {
            var e = t.index;
            if (0 === e) return !0;
            for (--e; 0 <= e; --e)
                if (this.conditions[e].type === t.type) return !1;
            return !0
        }, cr.eventblock = i, r.prototype.postInit = function() {
            var t, e, i;
            for (t = 0, e = this.parameters.length; t < e; t++)(i = this.parameters[t]).postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, r.prototype.run_true = function() {
            return !0
        }, r.prototype.run_system = function() {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
            return cr.xor(this.func.apply(this.runtime.system, this.results), this.inverted)
        }, r.prototype.run_static = function() {
            var t, e;
            for (t = 0, e = this.parameters.length; t < e; t++) this.results[t] = this.parameters[t].get();
            var i = this.func.apply(this.behaviortype ? this.behaviortype : this.type, this.results);
            return this.type.applySolToContainer(), i
        }, r.prototype.run_object = function() {
            var t, e, i, s, n, r, a, o, h, c, l, u, p = this.type,
                d = p.getCurrentSol(),
                f = this.block.orblock && !this.trigger,
                g = 0,
                m = p.is_contained,
                y = p.is_family,
                _ = p.family_index,
                v = this.beh_index,
                b = -1 < v,
                w = this.anyParamVariesPerInstance,
                x = this.parameters,
                S = this.results,
                T = this.inverted,
                C = this.func;
            if (w)
                for (e = 0, n = x.length; e < n; ++e)(r = x[e]).variesPerInstance || (S[e] = r.get(0));
            else
                for (e = 0, n = x.length; e < n; ++e) S[e] = x[e].get(0);
            if (d.select_all) {
                for (cr.clearArray(d.instances), cr.clearArray(d.else_instances), t = 0, s = (l = p.instances).length; t < s; ++t) {
                    if (o = l[t], w)
                        for (e = 0, n = x.length; e < n; ++e)(r = x[e]).variesPerInstance && (S[e] = r.get(t));
                    a = b ? (g = 0, y && (g = o.type.family_beh_map[_]), C.apply(o.behavior_insts[v + g], S)) : C.apply(o, S), cr.xor(a, T) ? d.instances.push(o) : f && d.else_instances.push(o)
                }
                return p.finish && p.finish(!0), d.select_all = !1, p.applySolToContainer(), d.hasObjects()
            }
            i = 0;
            var A = f && !this.block.isFirstConditionOfType(this),
                P = !1;
            for (t = 0, s = (l = A ? d.else_instances : d.instances).length; t < s; ++t) {
                if (o = l[t], w)
                    for (e = 0, n = x.length; e < n; ++e)(r = x[e]).variesPerInstance && (S[e] = r.get(t));
                if (a = b ? (g = 0, y && (g = o.type.family_beh_map[_]), C.apply(o.behavior_insts[v + g], S)) : C.apply(o, S), cr.xor(a, T))
                    if (P = !0, A) {
                        if (d.instances.push(o), m)
                            for (e = 0, n = o.siblings.length; e < n; e++)(h = o.siblings[e]).type.getCurrentSol().instances.push(h)
                    } else {
                        if (l[i] = o, m)
                            for (e = 0, n = o.siblings.length; e < n; e++)(h = o.siblings[e]).type.getCurrentSol().instances[i] = h;
                        i++
                    }
                else if (A) {
                    if (l[i] = o, m)
                        for (e = 0, n = o.siblings.length; e < n; e++)(h = o.siblings[e]).type.getCurrentSol().else_instances[i] = h;
                    i++
                } else if (f && (d.else_instances.push(o), m))
                    for (e = 0, n = o.siblings.length; e < n; e++)(h = o.siblings[e]).type.getCurrentSol().else_instances.push(h)
            }
            if (cr.truncateArray(l, i), m)
                for (t = 0, s = (u = p.container).length; t < s; t++) c = u[t].getCurrentSol(), A ? cr.truncateArray(c.else_instances, i) : cr.truncateArray(c.instances, i);
            var O = P;
            if (A && !P)
                for (t = 0, s = d.instances.length; t < s; t++) {
                    if (o = d.instances[t], w)
                        for (e = 0, n = x.length; e < n; e++)(r = x[e]).variesPerInstance && (S[e] = r.get(t));
                    if (a = b ? C.apply(o.behavior_insts[v], S) : C.apply(o, S), cr.xor(a, T)) {
                        P = !0;
                        break
                    }
                }
            return p.finish && p.finish(O || f), f ? P : d.hasObjects()
        }, cr.condition = r, c.prototype.postInit = function() {
            var t, e, i;
            for (t = 0, e = this.parameters.length; t < e; t++)(i = this.parameters[t]).postInit(), i.variesPerInstance && (this.anyParamVariesPerInstance = !0)
        }, c.prototype.run_system = function() {
            var t, e, i = this.runtime,
                s = this.parameters,
                n = this.results;
            for (t = 0, e = s.length; t < e; ++t) n[t] = s[t].get();
            return this.func.apply(i.system, n)
        }, c.prototype.run_object = function() {
            var t, e, i, s, n, r, a, o = this.type,
                h = this.beh_index,
                c = o.family_index,
                l = this.anyParamVariesPerInstance,
                u = this.parameters,
                p = this.results,
                d = this.func,
                f = o.getCurrentSol().getObjects(),
                g = o.is_family,
                m = -1 < h;
            if (l)
                for (e = 0, s = u.length; e < s; ++e)(n = u[e]).variesPerInstance || (p[e] = n.get(0));
            else
                for (e = 0, s = u.length; e < s; ++e) p[e] = u[e].get(0);
            for (t = 0, i = f.length; t < i; ++t) {
                if (r = f[t], l)
                    for (e = 0, s = u.length; e < s; ++e)(n = u[e]).variesPerInstance && (p[e] = n.get(t));
                m ? (a = 0, g && (a = r.type.family_beh_map[c]), d.apply(r.behavior_insts[h + a], p)) : d.apply(r, p)
            }
            return !1
        }, cr.action = c;
        var l = [],
            u = -1;

        function p() {
            return u++, l.length === u && l.push(new cr.expvalue), l[u]
        }

        function d() {
            u--
        }

        function f(t, e) {
            var i, s, n;
            switch (this.owner = t, this.block = t.block, this.sheet = t.sheet, this.runtime = t.runtime, this.type = e[0], this.expression = null, this.solindex = 0, this.get = null, this.combosel = 0, this.layout = null, this.key = 0, this.object = null, this.index = 0, this.varname = null, this.eventvar = null, this.fileinfo = null, this.subparams = null, this.variadicret = null, this.subparams = null, this.variadicret = null, this.variesPerInstance = !1, e[0]) {
                case 0:
                case 7:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp;
                    break;
                case 1:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_exp_str;
                    break;
                case 5:
                    this.expression = new cr.expNode(this, e[1]), this.solindex = 0, this.get = this.get_layer;
                    break;
                case 3:
                case 8:
                    this.combosel = e[1], this.get = this.get_combosel;
                    break;
                case 6:
                    this.layout = this.runtime.layouts[e[1]], this.get = this.get_layout;
                    break;
                case 9:
                    this.key = e[1], this.get = this.get_key;
                    break;
                case 4:
                    this.object = this.runtime.types_by_index[e[1]], this.get = this.get_object, this.block.addSolModifier(this.object), this.owner instanceof cr.action ? this.block.setSolWriterAfterCnds() : this.block.parent && this.block.parent.setSolWriterAfterCnds();
                    break;
                case 10:
                    this.index = e[1], t.type && t.type.is_family ? (this.get = this.get_familyvar, this.variesPerInstance = !0) : this.get = this.get_instvar;
                    break;
                case 11:
                    this.varname = e[1], this.eventvar = null, this.get = this.get_eventvar;
                    break;
                case 2:
                case 12:
                    this.fileinfo = e[1], this.get = this.get_audiofile;
                    break;
                case 13:
                    for (this.get = this.get_variadic, this.subparams = [], this.variadicret = [], i = 1, s = e.length; i < s; i++) n = new cr.parameter(this.owner, e[i]), cr.seal(n), this.subparams.push(n), this.variadicret.push(0)
            }
        }

        function g(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.name = i[1], this.vartype = i[2], this.initial = i[3], this.is_static = !!i[4], this.is_constant = !!i[5], this.sid = i[6], (this.runtime.varsBySid[this.sid.toString()] = this).data = this.initial, this.parent ? (this.is_static || this.is_constant ? this.localIndex = -1 : this.localIndex = this.runtime.stackLocalCount++, this.runtime.all_local_vars.push(this)) : (this.localIndex = -1, this.runtime.all_global_vars.push(this))
        }

        function m(t, e, i) {
            this.sheet = t, this.parent = e, this.runtime = t.runtime, this.solModifiers = [], this.include_sheet = null, this.include_sheet_name = i[1], this.active = !0
        }

        function y() {
            this.temp_parents_arr = [], this.reset(null), cr.seal(this)
        }
        f.prototype.postInit = function() {
            var t, e;
            if (11 === this.type) this.eventvar = this.runtime.getEventVariableByName(this.varname, this.block.parent);
            else if (13 === this.type)
                for (t = 0, e = this.subparams.length; t < e; t++) this.subparams[t].postInit();
            this.expression && this.expression.postInit()
        }, f.prototype.maybeVaryForType = function(t) {
            this.variesPerInstance || t && (t.plugin.singleglobal || (this.variesPerInstance = !0))
        }, f.prototype.setVaries = function() {
            this.variesPerInstance = !0
        }, f.prototype.get_exp = function(t) {
            this.solindex = t || 0;
            var e = p();
            return this.expression.get(e), d(), e.data
        }, f.prototype.get_exp_str = function(t) {
            this.solindex = t || 0;
            var e = p();
            return this.expression.get(e), d(), cr.is_string(e.data) ? e.data : ""
        }, f.prototype.get_object = function() {
            return this.object
        }, f.prototype.get_combosel = function() {
            return this.combosel
        }, f.prototype.get_layer = function(t) {
            this.solindex = t || 0;
            var e = p();
            return this.expression.get(e), d(), e.is_number() ? this.runtime.getLayerByNumber(e.data) : this.runtime.getLayerByName(e.data)
        }, f.prototype.get_layout = function() {
            return this.layout
        }, f.prototype.get_key = function() {
            return this.key
        }, f.prototype.get_instvar = function() {
            return this.index
        }, f.prototype.get_familyvar = function(t) {
            var e = t || 0,
                i = this.owner.type,
                s = null,
                n = i.getCurrentSol(),
                r = n.getObjects();
            if (r.length) s = r[e % r.length].type;
            else if (n.else_instances.length) s = n.else_instances[e % n.else_instances.length].type;
            else {
                if (!i.instances.length) return 0;
                s = i.instances[e % i.instances.length].type
            }
            return this.index + s.family_var_map[i.family_index]
        }, f.prototype.get_eventvar = function() {
            return this.eventvar
        }, f.prototype.get_audiofile = function() {
            return this.fileinfo
        }, f.prototype.get_variadic = function() {
            var t, e;
            for (t = 0, e = this.subparams.length; t < e; t++) this.variadicret[t] = this.subparams[t].get();
            return this.variadicret
        }, cr.parameter = f, g.prototype.postInit = function() {
            this.solModifiers = n(this.solModifiers)
        }, g.prototype.setValue = function(t) {
            var e = this.runtime.getCurrentLocalVarStack();
            this.parent && !this.is_static && e ? (this.localIndex >= e.length && (e.length = this.localIndex + 1), e[this.localIndex] = t) : this.data = t
        }, g.prototype.getValue = function() {
            var t = this.runtime.getCurrentLocalVarStack();
            return !this.parent || this.is_static || !t || this.is_constant ? this.data : this.localIndex >= t.length ? this.initial : void 0 === t[this.localIndex] ? this.initial : t[this.localIndex]
        }, g.prototype.run = function() {
            !this.parent || this.is_static || this.is_constant || this.setValue(this.initial)
        }, cr.eventvariable = g, m.prototype.toString = function() {
            return "include:" + this.include_sheet.toString()
        }, m.prototype.postInit = function() {
            this.include_sheet = this.runtime.eventsheets[this.include_sheet_name], this.sheet.includes.add(this), this.solModifiers = n(this.solModifiers);
            for (var t = this.parent; t;) t.group && t.contained_includes.push(this), t = t.parent;
            this.updateActive()
        }, m.prototype.run = function() {
            this.parent && this.runtime.pushCleanSol(this.runtime.types_by_index), this.include_sheet.hasRun || this.include_sheet.run(!0), this.parent && this.runtime.popSol(this.runtime.types_by_index)
        }, m.prototype.updateActive = function() {
            for (var t = this.parent; t;) {
                if (t.group && !t.group_active) return void(this.active = !1);
                t = t.parent
            }
            this.active = !0
        }, m.prototype.isActive = function() {
            return this.active
        }, cr.eventinclude = m, y.prototype.reset = function(t) {
            this.current_event = t, this.cndindex = 0, this.actindex = 0, cr.clearArray(this.temp_parents_arr), this.last_event_true = !1, this.else_branch_ran = !1, this.any_true_state = !1
        }, y.prototype.isModifierAfterCnds = function() {
            return !!this.current_event.solWriterAfterCnds || this.cndindex < this.current_event.conditions.length - 1 && !!this.current_event.solModifiers.length
        }, cr.eventStackFrame = y
    }(),
    function() {
        function t(t, e) {
            this.owner = t, this.runtime = t.runtime, this.type = e[0], this.get = [this.eval_int, this.eval_float, this.eval_string, this.eval_unaryminus, this.eval_add, this.eval_subtract, this.eval_multiply, this.eval_divide, this.eval_mod, this.eval_power, this.eval_and, this.eval_or, this.eval_equal, this.eval_notequal, this.eval_less, this.eval_lessequal, this.eval_greater, this.eval_greaterequal, this.eval_conditional, this.eval_system_exp, this.eval_object_exp, this.eval_instvar_exp, this.eval_behavior_exp, this.eval_eventvar_exp][this.type];
            var i, s, n = null;
            switch (this.value = null, this.first = null, this.second = null, this.third = null, this.func = null, this.results = null, this.parameters = null, this.object_type = null, this.beh_index = -1, this.instance_expr = null, this.varindex = -1, this.behavior_type = null, this.varname = null, this.eventvar = null, this.return_string = !1, this.type) {
                case 0:
                case 1:
                case 2:
                    this.value = e[1];
                    break;
                case 3:
                    this.first = new cr.expNode(t, e[1]);
                    break;
                case 18:
                    this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2]), this.third = new cr.expNode(t, e[3]);
                    break;
                case 19:
                    this.func = this.runtime.GetObjectReference(e[1]), this.func !== cr.system_object.prototype.exps.random && this.func !== cr.system_object.prototype.exps.choose || this.owner.setVaries(), this.results = [], this.parameters = [], 3 === e.length ? (n = e[2], this.results.length = n.length + 1) : this.results.length = 1;
                    break;
                case 20:
                    this.object_type = this.runtime.types_by_index[e[1]], this.beh_index = -1, this.func = this.runtime.GetObjectReference(e[2]), this.return_string = e[3], cr.plugins_.Function && this.func === cr.plugins_.Function.prototype.exps.Call && this.owner.setVaries(), e[4] ? this.instance_expr = new cr.expNode(t, e[4]) : this.instance_expr = null, this.results = [], this.parameters = [], 6 === e.length ? (n = e[5], this.results.length = n.length + 1) : this.results.length = 1;
                    break;
                case 21:
                    this.object_type = this.runtime.types_by_index[e[1]], this.return_string = e[2], e[3] ? this.instance_expr = new cr.expNode(t, e[3]) : this.instance_expr = null, this.varindex = e[4];
                    break;
                case 22:
                    this.object_type = this.runtime.types_by_index[e[1]], this.behavior_type = this.object_type.getBehaviorByName(e[2]), this.beh_index = this.object_type.getBehaviorIndexByName(e[2]), this.func = this.runtime.GetObjectReference(e[3]), this.return_string = e[4], e[5] ? this.instance_expr = new cr.expNode(t, e[5]) : this.instance_expr = null, this.results = [], this.parameters = [], 7 === e.length ? (n = e[6], this.results.length = n.length + 1) : this.results.length = 1;
                    break;
                case 23:
                    this.varname = e[1], this.eventvar = null
            }
            if (this.owner.maybeVaryForType(this.object_type), 4 <= this.type && this.type <= 17 && (this.first = new cr.expNode(t, e[1]), this.second = new cr.expNode(t, e[2])), n)
                for (i = 0, s = n.length; i < s; i++) this.parameters.push(new cr.expNode(t, n[i]));
            cr.seal(this)
        }
        t.prototype.postInit = function() {
            var t, e;
            if (23 === this.type && (this.eventvar = this.owner.runtime.getEventVariableByName(this.varname, this.owner.block.parent)), this.first && this.first.postInit(), this.second && this.second.postInit(), this.third && this.third.postInit(), this.instance_expr && this.instance_expr.postInit(), this.parameters)
                for (t = 0, e = this.parameters.length; t < e; t++) this.parameters[t].postInit()
        };
        var e = [],
            i = -1;

        function f() {
            return ++i, e.length === i && e.push(new cr.expvalue), e[i]
        }

        function g() {
            --i
        }

        function m(t, e, i) {
            var s, n;
            for (s = 0, n = t.length; s < n; ++s) t[s].get(i), e[s + 1] = i.data
        }

        function s(t, e) {
            this.type = t || cr.exptype.Integer, this.data = e || 0, this.object_class = null, this.type == cr.exptype.Integer && (this.data = Math.floor(this.data)), cr.seal(this)
        }
        t.prototype.eval_system_exp = function(t) {
            var e = this.parameters,
                i = this.results;
            i[0] = t, m(e, i, f()), g(), this.func.apply(this.runtime.system, i)
        }, t.prototype.eval_object_exp = function(t) {
            var e = this.object_type,
                i = this.results,
                s = this.parameters,
                n = this.instance_expr,
                r = this.func,
                a = this.owner.solindex,
                o = e.getCurrentSol(),
                h = o.getObjects();
            if (!h.length) {
                if (!o.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                h = o.else_instances
            }(i[0] = t).object_class = e;
            var c = f();
            m(s, i, c), n && (n.get(c), c.is_number() && (a = c.data, h = e.instances)), g();
            var l = h.length;
            (l <= a || a <= -l) && (a %= l), a < 0 && (a += l);
            r.apply(h[a], i)
        }, t.prototype.eval_behavior_exp = function(t) {
            var e = this.object_type,
                i = this.results,
                s = this.parameters,
                n = this.instance_expr,
                r = this.beh_index,
                a = this.func,
                o = this.owner.solindex,
                h = e.getCurrentSol(),
                c = h.getObjects();
            if (!c.length) {
                if (!h.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                c = h.else_instances
            }(i[0] = t).object_class = e;
            var l = f();
            m(s, i, l), n && (n.get(l), l.is_number() && (o = l.data, c = e.instances)), g();
            var u = c.length;
            (u <= o || o <= -u) && (o %= u), o < 0 && (o += u);
            var p = c[o],
                d = 0;
            e.is_family && (d = p.type.family_beh_map[e.family_index]);
            a.apply(p.behavior_insts[r + d], i)
        }, t.prototype.eval_instvar_exp = function(t) {
            var e, i = this.instance_expr,
                s = this.object_type,
                n = this.varindex,
                r = this.owner.solindex,
                a = s.getCurrentSol(),
                o = a.getObjects();
            if (!o.length) {
                if (!a.else_instances.length) return void(this.return_string ? t.set_string("") : t.set_int(0));
                o = a.else_instances
            }
            if (i) {
                var h = f();
                if (i.get(h), h.is_number()) {
                    r = h.data;
                    var c = s.instances;
                    0 !== c.length && (r %= c.length) < 0 && (r += c.length);
                    var l = (e = s.getInstanceByIID(r)).instance_vars[n];
                    return cr.is_string(l) ? t.set_string(l) : t.set_float(l), void g()
                }
                g()
            }
            var u = o.length;
            (u <= r || r <= -u) && (r %= u), r < 0 && (r += u), e = o[r];
            var p = 0;
            s.is_family && (p = e.type.family_var_map[s.family_index]);
            l = e.instance_vars[n + p];
            cr.is_string(l) ? t.set_string(l) : t.set_float(l)
        }, t.prototype.eval_int = function(t) {
            t.type = cr.exptype.Integer, t.data = this.value
        }, t.prototype.eval_float = function(t) {
            t.type = cr.exptype.Float, t.data = this.value
        }, t.prototype.eval_string = function(t) {
            t.type = cr.exptype.String, t.data = this.value
        }, t.prototype.eval_unaryminus = function(t) {
            this.first.get(t), t.is_number() && (t.data = -t.data)
        }, t.prototype.eval_add = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.is_number() && e.is_number() && (t.data += e.data, e.is_float() && t.make_float()), g()
        }, t.prototype.eval_subtract = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.is_number() && e.is_number() && (t.data -= e.data, e.is_float() && t.make_float()), g()
        }, t.prototype.eval_multiply = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.is_number() && e.is_number() && (t.data *= e.data, e.is_float() && t.make_float()), g()
        }, t.prototype.eval_divide = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.is_number() && e.is_number() && (t.data /= e.data, t.make_float()), g()
        }, t.prototype.eval_mod = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.is_number() && e.is_number() && (t.data %= e.data, e.is_float() && t.make_float()), g()
        }, t.prototype.eval_power = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.is_number() && e.is_number() && (t.data = Math.pow(t.data, e.data), e.is_float() && t.make_float()), g()
        }, t.prototype.eval_and = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), e.is_string() || t.is_string() ? this.eval_and_stringconcat(t, e) : this.eval_and_logical(t, e), g()
        }, t.prototype.eval_and_stringconcat = function(t, e) {
            t.is_string() && e.is_string() ? this.eval_and_stringconcat_str_str(t, e) : this.eval_and_stringconcat_num(t, e)
        }, t.prototype.eval_and_stringconcat_str_str = function(t, e) {
            t.data += e.data
        }, t.prototype.eval_and_stringconcat_num = function(t, e) {
            t.is_string() ? t.data += (Math.round(1e10 * e.data) / 1e10).toString() : t.set_string(t.data.toString() + e.data)
        }, t.prototype.eval_and_logical = function(t, e) {
            t.set_int(t.data && e.data ? 1 : 0)
        }, t.prototype.eval_or = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.is_number() && e.is_number() && (t.data || e.data ? t.set_int(1) : t.set_int(0)), g()
        }, t.prototype.eval_conditional = function(t) {
            this.first.get(t), t.data ? this.second.get(t) : this.third.get(t)
        }, t.prototype.eval_equal = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.set_int(t.data === e.data ? 1 : 0), g()
        }, t.prototype.eval_notequal = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.set_int(t.data !== e.data ? 1 : 0), g()
        }, t.prototype.eval_less = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.set_int(t.data < e.data ? 1 : 0), g()
        }, t.prototype.eval_lessequal = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.set_int(t.data <= e.data ? 1 : 0), g()
        }, t.prototype.eval_greater = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.set_int(t.data > e.data ? 1 : 0), g()
        }, t.prototype.eval_greaterequal = function(t) {
            this.first.get(t);
            var e = f();
            this.second.get(e), t.set_int(t.data >= e.data ? 1 : 0), g()
        }, t.prototype.eval_eventvar_exp = function(t) {
            var e = this.eventvar.getValue();
            cr.is_number(e) ? t.set_float(e) : t.set_string(e)
        }, cr.expNode = t, s.prototype.is_int = function() {
            return this.type === cr.exptype.Integer
        }, s.prototype.is_float = function() {
            return this.type === cr.exptype.Float
        }, s.prototype.is_number = function() {
            return this.type === cr.exptype.Integer || this.type === cr.exptype.Float
        }, s.prototype.is_string = function() {
            return this.type === cr.exptype.String
        }, s.prototype.make_int = function() {
            this.is_int() || (this.is_float() ? this.data = Math.floor(this.data) : this.is_string() && (this.data = parseInt(this.data, 10)), this.type = cr.exptype.Integer)
        }, s.prototype.make_float = function() {
            this.is_float() || (this.is_string() && (this.data = parseFloat(this.data)), this.type = cr.exptype.Float)
        }, s.prototype.make_string = function() {
            this.is_string() || (this.data = this.data.toString(), this.type = cr.exptype.String)
        }, s.prototype.set_int = function(t) {
            this.type = cr.exptype.Integer, this.data = Math.floor(t)
        }, s.prototype.set_float = function(t) {
            this.type = cr.exptype.Float, this.data = t
        }, s.prototype.set_string = function(t) {
            this.type = cr.exptype.String, this.data = t
        }, s.prototype.set_any = function(t) {
            cr.is_number(t) ? (this.type = cr.exptype.Float, this.data = t) : cr.is_string(t) ? (this.type = cr.exptype.String, this.data = t.toString()) : (this.type = cr.exptype.Integer, this.data = 0)
        }, cr.expvalue = s, cr.exptype = {
            Integer: 0,
            Float: 1,
            String: 2
        }
    }(), cr.system_object = function(t) {
        this.runtime = t, this.waits = []
    }, cr.system_object.prototype.saveToJSON = function() {
        var t, e, i, s, n, r, a, o, h = {};
        h.waits = [];
        var c, l = h.waits;
        for (t = 0, e = this.waits.length; t < e; t++) {
            for (c = {
                    t: (r = this.waits[t]).time,
                    st: r.signaltag,
                    s: r.signalled,
                    ev: r.ev.sid,
                    sm: [],
                    sols: {}
                }, r.ev.actions[r.actindex] && (c.act = r.ev.actions[r.actindex].sid), i = 0, s = r.solModifiers.length; i < s; i++) c.sm.push(r.solModifiers[i].sid);
            for (n in r.sols)
                if (r.sols.hasOwnProperty(n)) {
                    for (a = this.runtime.types_by_index[parseInt(n, 10)], o = {
                            sa: r.sols[n].sa,
                            insts: []
                        }, i = 0, s = r.sols[n].insts.length; i < s; i++) o.insts.push(r.sols[n].insts[i].uid);
                    c.sols[a.sid.toString()] = o
                }
            l.push(c)
        }
        return h
    }, cr.system_object.prototype.loadFromJSON = function(t) {
        var e, i, s, n, r, a, o, h, c, l, u, p, d, f = t.waits;
        for (cr.clearArray(this.waits), e = 0, i = f.length; e < i; e++)
            if (a = f[e], h = this.runtime.blocksBySid[a.ev.toString()]) {
                for (c = -1, s = 0, n = h.actions.length; s < n; s++)
                    if (h.actions[s].sid === a.act) {
                        c = s;
                        break
                    }
                if (-1 !== c) {
                    for ((o = {
                            sols: {},
                            solModifiers: [],
                            deleteme: !1
                        }).time = a.t, o.signaltag = a.st || "", o.signalled = !!a.s, o.ev = h, o.actindex = c, s = 0, n = a.sm.length; s < n; s++)(l = this.runtime.getObjectTypeBySid(a.sm[s])) && o.solModifiers.push(l);
                    for (r in a.sols)
                        if (a.sols.hasOwnProperty(r)) {
                            if (!(l = this.runtime.getObjectTypeBySid(parseInt(r, 10)))) continue;
                            for (p = {
                                    sa: (u = a.sols[r]).sa,
                                    insts: []
                                }, s = 0, n = u.insts.length; s < n; s++)(d = this.runtime.getObjectByUID(u.insts[s])) && p.insts.push(d);
                            o.sols[l.index.toString()] = p
                        }
                    this.waits.push(o)
                }
            }
    },
    function() {
        var t = cr.system_object.prototype;

        function e() {}
        e.prototype.EveryTick = function() {
            return !0
        }, e.prototype.OnLayoutStart = function() {
            return !0
        }, e.prototype.OnLayoutEnd = function() {
            return !0
        }, e.prototype.Compare = function(t, e, i) {
            return cr.do_cmp(t, e, i)
        }, e.prototype.CompareTime = function(t, e) {
            var i = this.runtime.kahanTime.sum;
            if (0 !== t) return cr.do_cmp(i, t, e);
            var s = this.runtime.getCurrentCondition();
            return !s.extra.CompareTime_executed && e <= i && (s.extra.CompareTime_executed = !0)
        }, e.prototype.LayerVisible = function(t) {
            return !!t && t.visible
        }, e.prototype.LayerEmpty = function(t) {
            return !!t && !t.instances.length
        }, e.prototype.LayerCmpOpacity = function(t, e, i) {
            return !!t && cr.do_cmp(100 * t.opacity, e, i)
        }, e.prototype.Repeat = function(t) {
            var e, i = this.runtime.getCurrentEventStack(),
                s = i.current_event,
                n = i.isModifierAfterCnds(),
                r = this.runtime.pushLoopStack();
            if (n)
                for (e = 0; e < t && !r.stopped; e++) this.runtime.pushCopySol(s.solModifiers), r.index = e, s.retrigger(), this.runtime.popSol(s.solModifiers);
            else
                for (e = 0; e < t && !r.stopped; e++) r.index = e, s.retrigger();
            return this.runtime.popLoopStack(), !1
        }, e.prototype.While = function(t) {
            var e, i = this.runtime.getCurrentEventStack(),
                s = i.current_event,
                n = i.isModifierAfterCnds(),
                r = this.runtime.pushLoopStack();
            if (n)
                for (e = 0; !r.stopped; e++) this.runtime.pushCopySol(s.solModifiers), r.index = e, s.retrigger() || (r.stopped = !0), this.runtime.popSol(s.solModifiers);
            else
                for (e = 0; !r.stopped; e++) r.index = e, s.retrigger() || (r.stopped = !0);
            return this.runtime.popLoopStack(), !1
        }, e.prototype.For = function(t, e, i) {
            var s, n = this.runtime.getCurrentEventStack(),
                r = n.current_event,
                a = n.isModifierAfterCnds(),
                o = this.runtime.pushLoopStack(t);
            if (i < e)
                if (a)
                    for (s = e; i <= s && !o.stopped; --s) this.runtime.pushCopySol(r.solModifiers), o.index = s, r.retrigger(), this.runtime.popSol(r.solModifiers);
                else
                    for (s = e; i <= s && !o.stopped; --s) o.index = s, r.retrigger();
            else if (a)
                for (s = e; s <= i && !o.stopped; ++s) this.runtime.pushCopySol(r.solModifiers), o.index = s, r.retrigger(), this.runtime.popSol(r.solModifiers);
            else
                for (s = e; s <= i && !o.stopped; ++s) o.index = s, r.retrigger();
            return this.runtime.popLoopStack(), !1
        };
        var _ = [],
            v = -1;

        function b(t, e) {
            var i = t.extra.c2_feo_val,
                s = e.extra.c2_feo_val;
            return cr.is_number(i) && cr.is_number(s) ? i - s : (i = "" + i) < (s = "" + s) ? -1 : s < i ? 1 : 0
        }
        e.prototype.ForEach = function(t) {
            var e = t.getCurrentSol();
            v++, _.length === v && _.push([]);
            var i = _[v];
            cr.shallowAssignArray(i, e.getObjects());
            var s, n, r, a, o, h, c, l = this.runtime.getCurrentEventStack(),
                u = l.current_event,
                p = l.isModifierAfterCnds(),
                d = this.runtime.pushLoopStack(),
                f = t.is_contained;
            if (p)
                for (s = 0, n = i.length; s < n && !d.stopped; s++) {
                    if (this.runtime.pushCopySol(u.solModifiers), o = i[s], (e = t.getCurrentSol()).select_all = !1, cr.clearArray(e.instances), e.instances[0] = o, f)
                        for (r = 0, a = o.siblings.length; r < a; r++)(c = (h = o.siblings[r]).type.getCurrentSol()).select_all = !1, cr.clearArray(c.instances), c.instances[0] = h;
                    d.index = s, u.retrigger(), this.runtime.popSol(u.solModifiers)
                } else
                    for (e.select_all = !1, cr.clearArray(e.instances), s = 0, n = i.length; s < n && !d.stopped; s++) {
                        if (o = i[s], e.instances[0] = o, f)
                            for (r = 0, a = o.siblings.length; r < a; r++)(c = (h = o.siblings[r]).type.getCurrentSol()).select_all = !1, cr.clearArray(c.instances), c.instances[0] = h;
                        d.index = s, u.retrigger()
                    }
            return cr.clearArray(i), this.runtime.popLoopStack(), v--, !1
        }, e.prototype.ForEachOrdered = function(t, e, i) {
            var s = t.getCurrentSol();
            v++, _.length === v && _.push([]);
            var n = _[v];
            cr.shallowAssignArray(n, s.getObjects());
            var r, a, o, h, c, l, u, p = this.runtime.getCurrentEventStack(),
                d = p.current_event,
                f = this.runtime.getCurrentCondition(),
                g = p.isModifierAfterCnds(),
                m = this.runtime.pushLoopStack();
            for (r = 0, a = n.length; r < a; r++) n[r].extra.c2_feo_val = f.parameters[1].get(r);
            n.sort(b), 1 === i && n.reverse();
            var y = t.is_contained;
            if (g)
                for (r = 0, a = n.length; r < a && !m.stopped; r++) {
                    if (this.runtime.pushCopySol(d.solModifiers), c = n[r], (s = t.getCurrentSol()).select_all = !1, cr.clearArray(s.instances), s.instances[0] = c, y)
                        for (o = 0, h = c.siblings.length; o < h; o++)(u = (l = c.siblings[o]).type.getCurrentSol()).select_all = !1, cr.clearArray(u.instances), u.instances[0] = l;
                    m.index = r, d.retrigger(), this.runtime.popSol(d.solModifiers)
                } else
                    for (s.select_all = !1, cr.clearArray(s.instances), r = 0, a = n.length; r < a && !m.stopped; r++) {
                        if (c = n[r], s.instances[0] = c, y)
                            for (o = 0, h = c.siblings.length; o < h; o++)(u = (l = c.siblings[o]).type.getCurrentSol()).select_all = !1, cr.clearArray(u.instances), u.instances[0] = l;
                        m.index = r, d.retrigger()
                    }
            return cr.clearArray(n), this.runtime.popLoopStack(), v--, !1
        }, e.prototype.PickByComparison = function(t, e, i, s) {
            var n, r, a, o;
            if (t) {
                v++, _.length === v && _.push([]);
                var h = _[v],
                    c = t.getCurrentSol();
                cr.shallowAssignArray(h, c.getObjects()), c.select_all && cr.clearArray(c.else_instances);
                var l = this.runtime.getCurrentCondition();
                for (a = n = 0, r = h.length; n < r; n++) o = h[n], h[a] = o, e = l.parameters[1].get(n), s = l.parameters[3].get(n), cr.do_cmp(e, i, s) ? a++ : c.else_instances.push(o);
                return cr.truncateArray(h, a), c.select_all = !1, cr.shallowAssignArray(c.instances, h), cr.clearArray(h), v--, t.applySolToContainer(), !!c.instances.length
            }
        }, e.prototype.PickByEvaluate = function(t, e) {
            var i, s, n, r;
            if (t) {
                v++, _.length === v && _.push([]);
                var a = _[v],
                    o = t.getCurrentSol();
                cr.shallowAssignArray(a, o.getObjects()), o.select_all && cr.clearArray(o.else_instances);
                var h = this.runtime.getCurrentCondition();
                for (n = i = 0, s = a.length; i < s; i++) r = a[i], a[n] = r, h.parameters[1].get(i) ? n++ : o.else_instances.push(r);
                return cr.truncateArray(a, n), o.select_all = !1, cr.shallowAssignArray(o.instances, a), cr.clearArray(a), v--, t.applySolToContainer(), !!o.instances.length
            }
        }, e.prototype.TriggerOnce = function() {
            var t = this.runtime.getCurrentCondition().extra;
            void 0 === t.TriggerOnce_lastTick && (t.TriggerOnce_lastTick = -1);
            var e = t.TriggerOnce_lastTick,
                i = this.runtime.tickcount;
            return t.TriggerOnce_lastTick = i, this.runtime.layout_first_tick || e !== i - 1
        }, e.prototype.Every = function(t) {
            var e = this.runtime.getCurrentCondition(),
                i = e.extra.Every_lastTime || 0,
                s = this.runtime.kahanTime.sum;
            void 0 === e.extra.Every_seconds && (e.extra.Every_seconds = t);
            var n = e.extra.Every_seconds;
            return i + n <= s ? (e.extra.Every_lastTime = i + n, s >= e.extra.Every_lastTime + .04 && (e.extra.Every_lastTime = s), e.extra.Every_seconds = t, !0) : (s < i - .1 && (e.extra.Every_lastTime = s), !1)
        }, e.prototype.PickNth = function(t, e) {
            if (!t) return !1;
            var i = t.getCurrentSol(),
                s = i.getObjects();
            if ((e = cr.floor(e)) < 0 || e >= s.length) return !1;
            var n = s[e];
            return i.pick_one(n), t.applySolToContainer(), !0
        }, e.prototype.PickRandom = function(t) {
            if (!t) return !1;
            var e = t.getCurrentSol(),
                i = e.getObjects(),
                s = cr.floor(Math.random() * i.length);
            if (s >= i.length) return !1;
            var n = i[s];
            return e.pick_one(n), t.applySolToContainer(), !0
        }, e.prototype.CompareVar = function(t, e, i) {
            return cr.do_cmp(t.getValue(), e, i)
        }, e.prototype.IsGroupActive = function(t) {
            var e = this.runtime.groups_by_name[t.toLowerCase()];
            return e && e.group_active
        }, e.prototype.IsPreview = function() {
            return "undefined" != typeof cr_is_preview
        }, e.prototype.PickAll = function(t) {
            return !!t && (!!t.instances.length && (t.getCurrentSol().select_all = !0, t.applySolToContainer(), !0))
        }, e.prototype.IsMobile = function() {
            return this.runtime.isMobile
        }, e.prototype.CompareBetween = function(t, e, i) {
            return e <= t && t <= i
        }, e.prototype.Else = function() {
            var t = this.runtime.getCurrentEventStack();
            return !t.else_branch_ran && !t.last_event_true
        }, e.prototype.OnLoadFinished = function() {
            return !0
        }, e.prototype.OnCanvasSnapshot = function() {
            return !0
        }, e.prototype.EffectsSupported = function() {
            return !!this.runtime.glwrap
        }, e.prototype.OnSaveComplete = function() {
            return !0
        }, e.prototype.OnSaveFailed = function() {
            return !0
        }, e.prototype.OnLoadComplete = function() {
            return !0
        }, e.prototype.OnLoadFailed = function() {
            return !0
        }, e.prototype.ObjectUIDExists = function(t) {
            return !!this.runtime.getObjectByUID(t)
        }, e.prototype.IsOnPlatform = function(t) {
            var e = this.runtime;
            switch (t) {
                case 0:
                    return !(e.isDomFree || e.isNodeWebkit || e.isCordova || e.isWinJS || e.isWindowsPhone8 || e.isBlackberry10 || e.isAmazonWebApp);
                case 1:
                    return e.isiOS;
                case 2:
                    return e.isAndroid;
                case 3:
                    return e.isWindows8App;
                case 4:
                    return e.isWindowsPhone8;
                case 5:
                    return e.isBlackberry10;
                case 6:
                    return e.isTizen;
                case 7:
                    return e.isCocoonJs;
                case 8:
                    return e.isCordova;
                case 9:
                    return e.isArcade;
                case 10:
                    return e.isNodeWebkit;
                case 11:
                    return e.isCrosswalk;
                case 12:
                    return e.isAmazonWebApp;
                case 13:
                    return e.isWindows10;
                default:
                    return !1
            }
        };
        var i = null,
            s = "",
            n = "";

        function a(t, e) {
            return i && t === s && e === n || (i = new RegExp(t, e), s = t, n = e), i.lastIndex = 0, i
        }
        e.prototype.RegexTest = function(t, e, i) {
            return a(e, i).test(t)
        };
        var l = [];

        function r() {}
        e.prototype.PickOverlappingPoint = function(t, e, i) {
            if (!t) return !1;
            var s, n, r, a = t.getCurrentSol(),
                o = a.getObjects(),
                h = this.runtime.getCurrentEventStack().current_event.orblock,
                c = this.runtime.getCurrentCondition();
            for (a.select_all ? (cr.shallowAssignArray(l, o), cr.clearArray(a.else_instances), a.select_all = !1, cr.clearArray(a.instances)) : h ? (cr.shallowAssignArray(l, a.else_instances), cr.clearArray(a.else_instances)) : (cr.shallowAssignArray(l, o), cr.clearArray(a.instances)), s = 0, n = l.length; s < n; ++s)(r = l[s]).update_bbox(), cr.xor(r.contains_pt(e, i), c.inverted) ? a.instances.push(r) : a.else_instances.push(r);
            return t.applySolToContainer(), cr.xor(!!a.instances.length, c.inverted)
        }, e.prototype.IsNaN = function(t) {
            return !!isNaN(t)
        }, e.prototype.AngleWithin = function(t, e, i) {
            return cr.angleDiff(cr.to_radians(t), cr.to_radians(i)) <= cr.to_radians(e)
        }, e.prototype.IsClockwiseFrom = function(t, e) {
            return cr.angleClockwise(cr.to_radians(t), cr.to_radians(e))
        }, e.prototype.IsBetweenAngles = function(t, e, i) {
            var s = cr.to_clamped_radians(t),
                n = cr.to_clamped_radians(e),
                r = cr.to_clamped_radians(i);
            return !cr.angleClockwise(r, n) ? !(!cr.angleClockwise(s, n) && cr.angleClockwise(s, r)) : cr.angleClockwise(s, n) && !cr.angleClockwise(s, r)
        }, e.prototype.IsValueType = function(t, e) {
            return "number" == typeof t ? 0 === e : 1 === e
        }, t.cnds = new e, r.prototype.GoToLayout = function(t) {
            this.runtime.isloading || this.runtime.changelayout || (this.runtime.changelayout = t)
        }, r.prototype.NextPrevLayout = function(t) {
            if (!this.runtime.isloading && !this.runtime.changelayout) {
                var e = this.runtime.layouts_by_index.indexOf(this.runtime.running_layout);
                if ((!t || 0 !== e) && (t || e !== this.runtime.layouts_by_index.length - 1)) {
                    var i = this.runtime.layouts_by_index[e + (t ? -1 : 1)];
                    this.runtime.changelayout = i
                }
            }
        }, r.prototype.CreateObject = function(t, e, i, s) {
            if (e && t) {
                var n = this.runtime.createInstance(t, e, i, s);
                if (n) {
                    var r, a, o;
                    if (this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, n), n.is_contained)
                        for (r = 0, a = n.siblings.length; r < a; r++) o = n.siblings[r], this.runtime.trigger(Object.getPrototypeOf(o.type.plugin).cnds.OnCreated, o);
                    this.runtime.isInOnDestroy--;
                    var h = t.getCurrentSol();
                    if (h.select_all = !1, cr.clearArray(h.instances), (h.instances[0] = n).is_contained)
                        for (r = 0, a = n.siblings.length; r < a; r++)(h = (o = n.siblings[r]).type.getCurrentSol()).select_all = !1, cr.clearArray(h.instances), h.instances[0] = o
                }
            }
        }, r.prototype.SetLayerVisible = function(t, e) {
            t && t.visible !== e && (t.visible = e, this.runtime.redraw = !0)
        }, r.prototype.SetLayerOpacity = function(t, e) {
            t && (e = cr.clamp(e / 100, 0, 1), t.opacity !== e && (t.opacity = e, this.runtime.redraw = !0))
        }, r.prototype.SetLayerScaleRate = function(t, e) {
            t && t.zoomRate !== e && (t.zoomRate = e, this.runtime.redraw = !0)
        }, r.prototype.SetLayerForceOwnTexture = function(t, e) {
            t && (e = !!e, t.forceOwnTexture !== e && (t.forceOwnTexture = e, this.runtime.redraw = !0))
        }, r.prototype.SetLayoutScale = function(t) {
            this.runtime.running_layout && this.runtime.running_layout.scale !== t && (this.runtime.running_layout.scale = t, this.runtime.running_layout.boundScrolling(), this.runtime.redraw = !0)
        }, r.prototype.ScrollX = function(t) {
            this.runtime.running_layout.scrollToX(t)
        }, r.prototype.ScrollY = function(t) {
            this.runtime.running_layout.scrollToY(t)
        }, r.prototype.Scroll = function(t, e) {
            this.runtime.running_layout.scrollToX(t), this.runtime.running_layout.scrollToY(e)
        }, r.prototype.ScrollToObject = function(t) {
            var e = t.getFirstPicked();
            e && (this.runtime.running_layout.scrollToX(e.x), this.runtime.running_layout.scrollToY(e.y))
        }, r.prototype.SetVar = function(t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(e) : t.setValue(parseFloat(e)) : 1 === t.vartype && t.setValue(e.toString())
        }, r.prototype.AddVar = function(t, e) {
            0 === t.vartype ? cr.is_number(e) ? t.setValue(t.getValue() + e) : t.setValue(t.getValue() + parseFloat(e)) : 1 === t.vartype && t.setValue(t.getValue() + e.toString())
        }, r.prototype.SubVar = function(t, e) {
            0 === t.vartype && (cr.is_number(e) ? t.setValue(t.getValue() - e) : t.setValue(t.getValue() - parseFloat(e)))
        }, r.prototype.SetGroupActive = function(t, e) {
            var i = this.runtime.groups_by_name[t.toLowerCase()];
            if (i) switch (e) {
                case 0:
                    i.setGroupActive(!1);
                    break;
                case 1:
                    i.setGroupActive(!0);
                    break;
                case 2:
                    i.setGroupActive(!i.group_active)
            }
        }, r.prototype.SetTimescale = function(t) {
            var e = t;
            e < 0 && (e = 0), this.runtime.timescale = e
        }, r.prototype.SetObjectTimescale = function(t, e) {
            var i = e;
            if (i < 0 && (i = 0), t) {
                var s, n, r = t.getCurrentSol().getObjects();
                for (s = 0, n = r.length; s < n; s++) r[s].my_timescale = i
            }
        }, r.prototype.RestoreObjectTimescale = function(t) {
            if (!t) return !1;
            var e, i, s = t.getCurrentSol().getObjects();
            for (e = 0, i = s.length; e < i; e++) s[e].my_timescale = -1
        };
        var u = [];

        function h() {
            var t;
            return (t = u.length ? u.pop() : {
                sols: {},
                solModifiers: []
            }).deleteme = !1, t
        }
        var p = [];

        function c() {
            var t;
            return (t = p.length ? p.pop() : {
                insts: []
            }).sa = !1, t
        }

        function f(t, e) {
            var i = t[0] - e[0];
            return 0 != i ? i : t[1] - e[1]
        }

        function g(t, e) {
            return t[1] - e[1]
        }

        function o() {}
        r.prototype.Wait = function(t) {
            if (!(t < 0)) {
                var e, i, s, n, r, a = this.runtime.getCurrentEventStack(),
                    o = h();
                for (o.time = this.runtime.kahanTime.sum + t, o.signaltag = "", o.signalled = !1, o.ev = a.current_event, o.actindex = a.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++)(s = (n = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === a.current_event.solModifiers.indexOf(n) || (o.solModifiers.push(n), (r = c()).sa = s.select_all, cr.shallowAssignArray(r.insts, s.instances), o.sols[e.toString()] = r);
                return this.waits.push(o), !0
            }
        }, r.prototype.WaitForSignal = function(t) {
            var e, i, s, n, r, a = this.runtime.getCurrentEventStack(),
                o = h();
            for (o.time = -1, o.signaltag = t.toLowerCase(), o.signalled = !1, o.ev = a.current_event, o.actindex = a.actindex + 1, e = 0, i = this.runtime.types_by_index.length; e < i; e++)(s = (n = this.runtime.types_by_index[e]).getCurrentSol()).select_all && -1 === a.current_event.solModifiers.indexOf(n) || (o.solModifiers.push(n), (r = c()).sa = s.select_all, cr.shallowAssignArray(r.insts, s.instances), o.sols[e.toString()] = r);
            return this.waits.push(o), !0
        }, r.prototype.Signal = function(t) {
            var e, i, s, n = t.toLowerCase();
            for (e = 0, i = this.waits.length; e < i; ++e) - 1 === (s = this.waits[e]).time && s.signaltag === n && (s.signalled = !0)
        }, r.prototype.SetLayerScale = function(t, e) {
            t && t.scale !== e && (t.scale = e, this.runtime.redraw = !0)
        }, r.prototype.ResetGlobals = function() {
            var t, e, i;
            for (t = 0, e = this.runtime.all_global_vars.length; t < e; t++)(i = this.runtime.all_global_vars[t]).data = i.initial
        }, r.prototype.SetLayoutAngle = function(t) {
            t = cr.to_radians(t), t = cr.clamp_angle(t), this.runtime.running_layout && this.runtime.running_layout.angle !== t && (this.runtime.running_layout.angle = t, this.runtime.redraw = !0)
        }, r.prototype.SetLayerAngle = function(t, e) {
            t && (e = cr.to_radians(e), e = cr.clamp_angle(e), t.angle !== e && (t.angle = e, this.runtime.redraw = !0))
        }, r.prototype.SetLayerParallax = function(t, e, i) {
            if (t && (t.parallaxX !== e / 100 || t.parallaxY !== i / 100)) {
                if (t.parallaxX = e / 100, t.parallaxY = i / 100, 1 !== t.parallaxX || 1 !== t.parallaxY) {
                    var s, n, r = t.instances;
                    for (s = 0, n = r.length; s < n; ++s) r[s].type.any_instance_parallaxed = !0
                }
                this.runtime.redraw = !0
            }
        }, r.prototype.SetLayerBackground = function(t, e) {
            if (t) {
                var i = cr.GetRValue(e),
                    s = cr.GetGValue(e),
                    n = cr.GetBValue(e);
                t.background_color[0] === i && t.background_color[1] === s && t.background_color[2] === n || (t.background_color[0] = i, t.background_color[1] = s, t.background_color[2] = n, this.runtime.redraw = !0)
            }
        }, r.prototype.SetLayerTransparent = function(t, e) {
            t && !!e != !!t.transparent && (t.transparent = !!e, this.runtime.redraw = !0)
        }, r.prototype.SetLayerBlendMode = function(t, e) {
            t && t.blend_mode !== e && (t.blend_mode = e, t.compositeOp = cr.effectToCompositeOp(t.blend_mode), this.runtime.gl && cr.setGLBlend(t, t.blend_mode, this.runtime.gl), this.runtime.redraw = !0)
        }, r.prototype.StopLoop = function() {
            this.runtime.loop_stack_index < 0 || (this.runtime.getCurrentLoop().stopped = !0)
        }, r.prototype.GoToLayoutByName = function(t) {
            var e;
            if (!this.runtime.isloading && !this.runtime.changelayout)
                for (e in this.runtime.layouts)
                    if (this.runtime.layouts.hasOwnProperty(e) && cr.equals_nocase(e, t)) return void(this.runtime.changelayout = this.runtime.layouts[e])
        }, r.prototype.RestartLayout = function(t) {
            var e, i, s;
            if (!this.runtime.isloading && (!this.runtime.changelayout && this.runtime.running_layout))
                for (this.runtime.changelayout = this.runtime.running_layout, e = 0, i = this.runtime.allGroups.length; e < i; e++)(s = this.runtime.allGroups[e]).setGroupActive(s.initially_activated)
        }, r.prototype.SnapshotCanvas = function(t, e) {
            this.runtime.doCanvasSnapshot(0 === t ? "image/png" : "image/jpeg", e / 100)
        }, r.prototype.SetCanvasSize = function(t, e) {
            if (!(t <= 0 || e <= 0)) {
                var i = this.runtime.fullscreen_mode;
                (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.runtime.isNodeFullscreen) && 0 < this.runtime.fullscreen_scaling && (i = this.runtime.fullscreen_scaling), 0 === i ? this.runtime.setSize(t, e, !0) : (this.runtime.original_width = t, this.runtime.original_height = e, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
            }
        }, r.prototype.SetLayoutEffectEnabled = function(t, e) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var i = this.runtime.running_layout.getEffectByName(e);
                if (i) {
                    var s = 1 === t;
                    i.active != s && (i.active = s, this.runtime.running_layout.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, r.prototype.SetLayerEffectEnabled = function(t, e, i) {
            if (t && this.runtime.glwrap) {
                var s = t.getEffectByName(i);
                if (s) {
                    var n = 1 === e;
                    s.active != n && (s.active = n, t.updateActiveEffects(), this.runtime.redraw = !0)
                }
            }
        }, r.prototype.SetLayoutEffectParam = function(t, e, i) {
            if (this.runtime.running_layout && this.runtime.glwrap) {
                var s = this.runtime.running_layout.getEffectByName(t);
                if (s) {
                    var n = this.runtime.running_layout.effect_params[s.index];
                    (e = Math.floor(e)) < 0 || e >= n.length || (1 === this.runtime.glwrap.getProgramParameterType(s.shaderindex, e) && (i /= 100), n[e] !== i && (n[e] = i, s.active && (this.runtime.redraw = !0)))
                }
            }
        }, r.prototype.SetLayerEffectParam = function(t, e, i, s) {
            if (t && this.runtime.glwrap) {
                var n = t.getEffectByName(e);
                if (n) {
                    var r = t.effect_params[n.index];
                    (i = Math.floor(i)) < 0 || i >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, i) && (s /= 100), r[i] !== s && (r[i] = s, n.active && (this.runtime.redraw = !0)))
                }
            }
        }, r.prototype.SaveState = function(t) {
            this.runtime.saveToSlot = t
        }, r.prototype.LoadState = function(t) {
            this.runtime.loadFromSlot = t
        }, r.prototype.LoadStateJSON = function(t) {
            this.runtime.loadFromJson = t
        }, r.prototype.SetHalfFramerateMode = function(t) {
            this.runtime.halfFramerateMode = 0 !== t
        }, r.prototype.SetFullscreenQuality = function(t) {
            (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.isNodeFullscreen || 0 !== this.runtime.fullscreen_mode) && (this.runtime.wantFullscreenScalingQuality = 0 !== t, this.runtime.setSize(this.runtime.lastWindowWidth, this.runtime.lastWindowHeight, !0))
        }, r.prototype.ResetPersisted = function() {
            var t, e;
            for (t = 0, e = this.runtime.layouts_by_index.length; t < e; ++t) this.runtime.layouts_by_index[t].persist_data = {}, this.runtime.layouts_by_index[t].first_visit = !0
        }, r.prototype.RecreateInitialObjects = function(t, e, i, s, n) {
            t && this.runtime.running_layout.recreateInitialObjects(t, e, i, s, n)
        }, r.prototype.SetPixelRounding = function(t) {
            this.runtime.pixel_rounding = 0 !== t, this.runtime.redraw = !0
        }, r.prototype.SetMinimumFramerate = function(t) {
            t < 1 && (t = 1), 120 < t && (t = 120), this.runtime.minimumFramerate = t
        }, r.prototype.SortZOrderByInstVar = function(t, e) {
            if (t) {
                var i, s, n, r, a, o, h = t.getCurrentSol().getObjects(),
                    c = [],
                    l = [],
                    u = this.runtime.running_layout,
                    p = t.is_family,
                    d = t.family_index;
                for (i = 0, s = h.length; i < s; ++i)(n = h[i]).layer && (r = p ? n.instance_vars[e + n.type.family_var_map[d]] : n.instance_vars[e], c.push([n.layer.index, n.get_zindex()]), l.push([n, r]));
                if (c.length)
                    for (c.sort(f), l.sort(g), i = 0, s = c.length; i < s; ++i) n = l[i][0], a = u.layers[c[i][0]], o = c[i][1], a.instances[o] !== n && ((a.instances[o] = n).layer = a).setZIndicesStaleFrom(o)
            }
        }, t.acts = new r, o.prototype.int = function(t, e) {
            cr.is_string(e) ? (t.set_int(parseInt(e, 10)), isNaN(t.data) && (t.data = 0)) : t.set_int(e)
        }, o.prototype.float = function(t, e) {
            cr.is_string(e) ? (t.set_float(parseFloat(e)), isNaN(t.data) && (t.data = 0)) : t.set_float(e)
        }, o.prototype.str = function(t, e) {
            cr.is_string(e) ? t.set_string(e) : t.set_string(e.toString())
        }, o.prototype.len = function(t, e) {
            t.set_int(e.length || 0)
        }, o.prototype.random = function(t, e, i) {
            void 0 === i ? t.set_float(Math.random() * e) : t.set_float(Math.random() * (i - e) + e)
        }, o.prototype.sqrt = function(t, e) {
            t.set_float(Math.sqrt(e))
        }, o.prototype.abs = function(t, e) {
            t.set_float(Math.abs(e))
        }, o.prototype.round = function(t, e) {
            t.set_int(Math.round(e))
        }, o.prototype.floor = function(t, e) {
            t.set_int(Math.floor(e))
        }, o.prototype.ceil = function(t, e) {
            t.set_int(Math.ceil(e))
        }, o.prototype.sin = function(t, e) {
            t.set_float(Math.sin(cr.to_radians(e)))
        }, o.prototype.cos = function(t, e) {
            t.set_float(Math.cos(cr.to_radians(e)))
        }, o.prototype.tan = function(t, e) {
            t.set_float(Math.tan(cr.to_radians(e)))
        }, o.prototype.asin = function(t, e) {
            t.set_float(cr.to_degrees(Math.asin(e)))
        }, o.prototype.acos = function(t, e) {
            t.set_float(cr.to_degrees(Math.acos(e)))
        }, o.prototype.atan = function(t, e) {
            t.set_float(cr.to_degrees(Math.atan(e)))
        }, o.prototype.exp = function(t, e) {
            t.set_float(Math.exp(e))
        }, o.prototype.ln = function(t, e) {
            t.set_float(Math.log(e))
        }, o.prototype.log10 = function(t, e) {
            t.set_float(Math.log(e) / Math.LN10)
        }, o.prototype.max = function(t) {
            var e, i, s, n = arguments[1];
            for ("number" != typeof n && (n = 0), e = 2, i = arguments.length; e < i; e++) "number" == typeof(s = arguments[e]) && n < s && (n = s);
            t.set_float(n)
        }, o.prototype.min = function(t) {
            var e, i, s, n = arguments[1];
            for ("number" != typeof n && (n = 0), e = 2, i = arguments.length; e < i; e++) "number" == typeof(s = arguments[e]) && s < n && (n = s);
            t.set_float(n)
        }, o.prototype.dt = function(t) {
            t.set_float(this.runtime.dt)
        }, o.prototype.timescale = function(t) {
            t.set_float(this.runtime.timescale)
        }, o.prototype.wallclocktime = function(t) {
            t.set_float((Date.now() - this.runtime.start_time) / 1e3)
        }, o.prototype.time = function(t) {
            t.set_float(this.runtime.kahanTime.sum)
        }, o.prototype.tickcount = function(t) {
            t.set_int(this.runtime.tickcount)
        }, o.prototype.objectcount = function(t) {
            t.set_int(this.runtime.objectcount)
        }, o.prototype.fps = function(t) {
            t.set_int(this.runtime.fps)
        }, o.prototype.loopindex = function(t, e) {
            var i, s;
            if (this.runtime.loop_stack.length)
                if (e) {
                    for (s = this.runtime.loop_stack_index; 0 <= s; --s)
                        if ((i = this.runtime.loop_stack[s]).name === e) return void t.set_int(i.index);
                    t.set_int(0)
                } else i = this.runtime.getCurrentLoop(), t.set_int(i ? i.index : -1);
            else t.set_int(0)
        }, o.prototype.distance = function(t, e, i, s, n) {
            t.set_float(cr.distanceTo(e, i, s, n))
        }, o.prototype.angle = function(t, e, i, s, n) {
            t.set_float(cr.to_degrees(cr.angleTo(e, i, s, n)))
        }, o.prototype.scrollx = function(t) {
            t.set_float(this.runtime.running_layout.scrollX)
        }, o.prototype.scrolly = function(t) {
            t.set_float(this.runtime.running_layout.scrollY)
        }, o.prototype.newline = function(t) {
            t.set_string("\n")
        }, o.prototype.lerp = function(t, e, i, s) {
            t.set_float(cr.lerp(e, i, s))
        }, o.prototype.qarp = function(t, e, i, s, n) {
            t.set_float(cr.qarp(e, i, s, n))
        }, o.prototype.cubic = function(t, e, i, s, n, r) {
            t.set_float(cr.cubic(e, i, s, n, r))
        }, o.prototype.cosp = function(t, e, i, s) {
            t.set_float(cr.cosp(e, i, s))
        }, o.prototype.windowwidth = function(t) {
            t.set_int(this.runtime.width)
        }, o.prototype.windowheight = function(t) {
            t.set_int(this.runtime.height)
        }, o.prototype.uppercase = function(t, e) {
            t.set_string(cr.is_string(e) ? e.toUpperCase() : "")
        }, o.prototype.lowercase = function(t, e) {
            t.set_string(cr.is_string(e) ? e.toLowerCase() : "")
        }, o.prototype.clamp = function(t, e, i, s) {
            e < i ? t.set_float(i) : s < e ? t.set_float(s) : t.set_float(e)
        }, o.prototype.layerscale = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.scale) : t.set_float(0)
        }, o.prototype.layeropacity = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.opacity) : t.set_float(0)
        }, o.prototype.layerscalerate = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(i.zoomRate) : t.set_float(0)
        }, o.prototype.layerparallaxx = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxX) : t.set_float(0)
        }, o.prototype.layerparallaxy = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(100 * i.parallaxY) : t.set_float(0)
        }, o.prototype.layerindex = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_int(i.index) : t.set_int(-1)
        }, o.prototype.layoutscale = function(t) {
            this.runtime.running_layout ? t.set_float(this.runtime.running_layout.scale) : t.set_float(0)
        }, o.prototype.layoutangle = function(t) {
            t.set_float(cr.to_degrees(this.runtime.running_layout.angle))
        }, o.prototype.layerangle = function(t, e) {
            var i = this.runtime.getLayer(e);
            i ? t.set_float(cr.to_degrees(i.angle)) : t.set_float(0)
        }, o.prototype.layoutwidth = function(t) {
            t.set_int(this.runtime.running_layout.width)
        }, o.prototype.layoutheight = function(t) {
            t.set_int(this.runtime.running_layout.height)
        }, o.prototype.find = function(t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), "i"))) : t.set_int(-1)
        }, o.prototype.findcase = function(t, e, i) {
            cr.is_string(e) && cr.is_string(i) ? t.set_int(e.search(new RegExp(cr.regexp_escape(i), ""))) : t.set_int(-1)
        }, o.prototype.left = function(t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(0, i) : "")
        }, o.prototype.right = function(t, e, i) {
            t.set_string(cr.is_string(e) ? e.substr(e.length - i) : "")
        }, o.prototype.mid = function(t, e, i, s) {
            t.set_string(cr.is_string(e) ? e.substr(i, s) : "")
        }, o.prototype.tokenat = function(t, e, i, s) {
            if (cr.is_string(e) && cr.is_string(s)) {
                var n = e.split(s),
                    r = cr.floor(i);
                r < 0 || r >= n.length ? t.set_string("") : t.set_string(n[r])
            } else t.set_string("")
        }, o.prototype.tokencount = function(t, e, i) {
            cr.is_string(e) && e.length ? t.set_int(e.split(i).length) : t.set_int(0)
        }, o.prototype.replace = function(t, e, i, s) {
            cr.is_string(e) && cr.is_string(i) && cr.is_string(s) ? t.set_string(e.replace(new RegExp(cr.regexp_escape(i), "gi"), s)) : t.set_string(cr.is_string(e) ? e : "")
        }, o.prototype.trim = function(t, e) {
            t.set_string(cr.is_string(e) ? e.trim() : "")
        }, o.prototype.pi = function(t) {
            t.set_float(cr.PI)
        }, o.prototype.layoutname = function(t) {
            this.runtime.running_layout ? t.set_string(this.runtime.running_layout.name) : t.set_string("")
        }, o.prototype.renderer = function(t) {
            t.set_string(this.runtime.gl ? "webgl" : "canvas2d")
        }, o.prototype.rendererdetail = function(t) {
            t.set_string(this.runtime.glUnmaskedRenderer)
        }, o.prototype.anglediff = function(t, e, i) {
            t.set_float(cr.to_degrees(cr.angleDiff(cr.to_radians(e), cr.to_radians(i))))
        }, o.prototype.choose = function(t) {
            var e = cr.floor(Math.random() * (arguments.length - 1));
            t.set_any(arguments[e + 1])
        }, o.prototype.rgb = function(t, e, i, s) {
            t.set_int(cr.RGB(e, i, s))
        }, o.prototype.projectversion = function(t) {
            t.set_string(this.runtime.versionstr)
        }, o.prototype.projectname = function(t) {
            t.set_string(this.runtime.projectName)
        }, o.prototype.anglelerp = function(t, e, i, s) {
            e = cr.to_radians(e), i = cr.to_radians(i);
            var n = cr.angleDiff(e, i);
            cr.angleClockwise(i, e) ? t.set_float(cr.to_clamped_degrees(e + n * s)) : t.set_float(cr.to_clamped_degrees(e - n * s))
        }, o.prototype.anglerotate = function(t, e, i, s) {
            e = cr.to_radians(e), i = cr.to_radians(i), s = cr.to_radians(s), t.set_float(cr.to_clamped_degrees(cr.angleRotate(e, i, s)))
        }, o.prototype.zeropad = function(t, e, i) {
            var s = e < 0 ? "-" : "";
            e < 0 && (e = -e);
            for (var n = i - e.toString().length, r = 0; r < n; r++) s += "0";
            t.set_string(s + e.toString())
        }, o.prototype.cpuutilisation = function(t) {
            t.set_float(this.runtime.cpuutilisation / 1e3)
        }, o.prototype.viewportleft = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewLeft : 0)
        }, o.prototype.viewporttop = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewTop : 0)
        }, o.prototype.viewportright = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewRight : 0)
        }, o.prototype.viewportbottom = function(t, e) {
            var i = this.runtime.getLayer(e);
            t.set_float(i ? i.viewBottom : 0)
        }, o.prototype.loadingprogress = function(t) {
            t.set_float(this.runtime.loadingprogress)
        }, o.prototype.unlerp = function(t, e, i, s) {
            t.set_float(cr.unlerp(e, i, s))
        }, o.prototype.canvassnapshot = function(t) {
            t.set_string(this.runtime.snapshotData)
        }, o.prototype.urlencode = function(t, e) {
            t.set_string(encodeURIComponent(e))
        }, o.prototype.urldecode = function(t, e) {
            t.set_string(decodeURIComponent(e))
        }, o.prototype.canvastolayerx = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.canvasToLayer(i, s, !0) : 0)
        }, o.prototype.canvastolayery = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.canvasToLayer(i, s, !1) : 0)
        }, o.prototype.layertocanvasx = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.layerToCanvas(i, s, !0) : 0)
        }, o.prototype.layertocanvasy = function(t, e, i, s) {
            var n = this.runtime.getLayer(e);
            t.set_float(n ? n.layerToCanvas(i, s, !1) : 0)
        }, o.prototype.savestatejson = function(t) {
            t.set_string(this.runtime.lastSaveJson)
        }, o.prototype.imagememoryusage = function(t) {
            this.runtime.glwrap ? t.set_float(Math.round(100 * this.runtime.glwrap.estimateVRAM() / 1048576) / 100) : t.set_float(0)
        }, o.prototype.regexsearch = function(t, e, i, s) {
            var n = a(i, s);
            t.set_int(e ? e.search(n) : -1)
        }, o.prototype.regexreplace = function(t, e, i, s, n) {
            var r = a(i, s);
            t.set_string(e ? e.replace(r, n) : "")
        };
        var d = [],
            m = "",
            y = "",
            w = "";

        function x(t, e, i) {
            if (t !== m || e !== y || i !== w) {
                var s = a(e, i);
                d = t.match(s), m = t, y = e, w = i
            }
        }
        o.prototype.regexmatchcount = function(t, e, i, s) {
            a(i, s);
            x(e.toString(), i, s), t.set_int(d ? d.length : 0)
        }, o.prototype.regexmatchat = function(t, e, i, s, n) {
            n = Math.floor(n);
            a(i, s);
            x(e.toString(), i, s), !d || n < 0 || n >= d.length ? t.set_string("") : t.set_string(d[n])
        }, o.prototype.infinity = function(t) {
            t.set_float(1 / 0)
        }, o.prototype.setbit = function(t, e, i, s) {
            e |= 0, i |= 0, s = 0 !== s ? 1 : 0, t.set_int(e & ~(1 << i) | s << i)
        }, o.prototype.togglebit = function(t, e, i) {
            e |= 0, i |= 0, t.set_int(e ^ 1 << i)
        }, o.prototype.getbit = function(t, e, i) {
            e |= 0, i |= 0, t.set_int(e & 1 << i ? 1 : 0)
        }, o.prototype.originalwindowwidth = function(t) {
            t.set_int(this.runtime.original_width)
        }, o.prototype.originalwindowheight = function(t) {
            t.set_int(this.runtime.original_height)
        }, t.exps = new o, t.runWaits = function() {
            var t, e, i, s, n, r, a, o, h, c = this.runtime.getCurrentEventStack();
            for (t = 0, i = this.waits.length; t < i; t++) {
                if (-1 === (s = this.waits[t]).time) {
                    if (!s.signalled) continue
                } else if (s.time > this.runtime.kahanTime.sum) continue;
                for (n in c.current_event = s.ev, c.actindex = s.actindex, c.cndindex = 0, s.sols) s.sols.hasOwnProperty(n) && (r = this.runtime.types_by_index[parseInt(n, 10)].getCurrentSol(), a = s.sols[n], r.select_all = a.sa, cr.shallowAssignArray(r.instances, a.insts), o = a, cr.clearArray(o.insts), p.push(o));
                s.ev.resume_actions_and_subevents(), this.runtime.clearSol(s.solModifiers), s.deleteme = !0
            }
            for (e = t = 0, i = this.waits.length; t < i; t++) s = this.waits[t], (this.waits[e] = s).deleteme ? (h = s, cr.wipe(h.sols), cr.clearArray(h.solModifiers), u.push(h)) : e++;
            cr.truncateArray(this.waits, e)
        }
    }(),
    function() {
        cr.add_common_aces = function(t, e) {
            var i = t[1],
                s = t[3],
                n = t[4],
                r = t[5],
                a = t[6],
                o = t[7],
                h = t[8];
            e.cnds || (e.cnds = {}), e.acts || (e.acts = {}), e.exps || (e.exps = {});
            var c = e.cnds,
                l = e.acts,
                u = e.exps;
            s && (c.CompareX = function(t, e) {
                return cr.do_cmp(this.x, t, e)
            }, c.CompareY = function(t, e) {
                return cr.do_cmp(this.y, t, e)
            }, c.IsOnScreen = function() {
                var t = this.layer;
                this.update_bbox();
                var e = this.bbox;
                return !(e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom)
            }, c.IsOutsideLayout = function() {
                this.update_bbox();
                var t = this.bbox,
                    e = this.runtime.running_layout;
                return t.right < 0 || t.bottom < 0 || t.left > e.width || t.top > e.height
            }, c.PickDistance = function(t, e, i) {
                var s = this.getCurrentSol(),
                    n = s.getObjects();
                if (!n.length) return !1;
                var r, a, o, h = n[0],
                    c = h,
                    l = cr.distanceTo(h.x, h.y, e, i);
                for (r = 1, a = n.length; r < a; r++) h = n[r], o = cr.distanceTo(h.x, h.y, e, i), (0 === t && o < l || 1 === t && l < o) && (l = o, c = h);
                return s.pick_one(c), !0
            }, l.SetX = function(t) {
                this.x !== t && (this.x = t, this.set_bbox_changed())
            }, l.SetY = function(t) {
                this.y !== t && (this.y = t, this.set_bbox_changed())
            }, l.SetPos = function(t, e) {
                this.x === t && this.y === e || (this.x = t, this.y = e, this.set_bbox_changed())
            }, l.SetPosToObject = function(t, e) {
                var i, s, n = t.getPairedInstance(this);
                n && (s = n.getImagePoint ? (i = n.getImagePoint(e, !0), n.getImagePoint(e, !1)) : (i = n.x, n.y), this.x === i && this.y === s || (this.x = i, this.y = s, this.set_bbox_changed()))
            }, l.MoveForward = function(t) {
                0 !== t && (this.x += Math.cos(this.angle) * t, this.y += Math.sin(this.angle) * t, this.set_bbox_changed())
            }, l.MoveAtAngle = function(t, e) {
                0 !== e && (this.x += Math.cos(cr.to_radians(t)) * e, this.y += Math.sin(cr.to_radians(t)) * e, this.set_bbox_changed())
            }, u.X = function(t) {
                t.set_float(this.x)
            }, u.Y = function(t) {
                t.set_float(this.y)
            }, u.dt = function(t) {
                t.set_float(this.runtime.getDt(this))
            }), n && (c.CompareWidth = function(t, e) {
                return cr.do_cmp(this.width, t, e)
            }, c.CompareHeight = function(t, e) {
                return cr.do_cmp(this.height, t, e)
            }, l.SetWidth = function(t) {
                this.width !== t && (this.width = t, this.set_bbox_changed())
            }, l.SetHeight = function(t) {
                this.height !== t && (this.height = t, this.set_bbox_changed())
            }, l.SetSize = function(t, e) {
                this.width === t && this.height === e || (this.width = t, this.height = e, this.set_bbox_changed())
            }, u.Width = function(t) {
                t.set_float(this.width)
            }, u.Height = function(t) {
                t.set_float(this.height)
            }, u.BBoxLeft = function(t) {
                this.update_bbox(), t.set_float(this.bbox.left)
            }, u.BBoxTop = function(t) {
                this.update_bbox(), t.set_float(this.bbox.top)
            }, u.BBoxRight = function(t) {
                this.update_bbox(), t.set_float(this.bbox.right)
            }, u.BBoxBottom = function(t) {
                this.update_bbox(), t.set_float(this.bbox.bottom)
            }), r && (c.AngleWithin = function(t, e) {
                return cr.angleDiff(this.angle, cr.to_radians(e)) <= cr.to_radians(t)
            }, c.IsClockwiseFrom = function(t) {
                return cr.angleClockwise(this.angle, cr.to_radians(t))
            }, c.IsBetweenAngles = function(t, e) {
                var i = cr.to_clamped_radians(t),
                    s = cr.to_clamped_radians(e),
                    n = cr.clamp_angle(this.angle);
                return !cr.angleClockwise(s, i) ? !(!cr.angleClockwise(n, i) && cr.angleClockwise(n, s)) : cr.angleClockwise(n, i) && !cr.angleClockwise(n, s)
            }, l.SetAngle = function(t) {
                var e = cr.to_radians(cr.clamp_angle_degrees(t));
                isNaN(e) || this.angle !== e && (this.angle = e, this.set_bbox_changed())
            }, l.RotateClockwise = function(t) {
                0 === t || isNaN(t) || (this.angle += cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateCounterclockwise = function(t) {
                0 === t || isNaN(t) || (this.angle -= cr.to_radians(t), this.angle = cr.clamp_angle(this.angle), this.set_bbox_changed())
            }, l.RotateTowardAngle = function(t, e) {
                var i = cr.angleRotate(this.angle, cr.to_radians(e), cr.to_radians(t));
                isNaN(i) || this.angle !== i && (this.angle = i, this.set_bbox_changed())
            }, l.RotateTowardPosition = function(t, e, i) {
                var s = e - this.x,
                    n = i - this.y,
                    r = Math.atan2(n, s),
                    a = cr.angleRotate(this.angle, r, cr.to_radians(t));
                isNaN(a) || this.angle !== a && (this.angle = a, this.set_bbox_changed())
            }, l.SetTowardPosition = function(t, e) {
                var i = t - this.x,
                    s = e - this.y,
                    n = Math.atan2(s, i);
                isNaN(n) || this.angle !== n && (this.angle = n, this.set_bbox_changed())
            }, u.Angle = function(t) {
                t.set_float(cr.to_clamped_degrees(this.angle))
            }), i || (c.CompareInstanceVar = function(t, e, i) {
                return cr.do_cmp(this.instance_vars[t], e, i)
            }, c.IsBoolInstanceVarSet = function(t) {
                return this.instance_vars[t]
            }, c.PickInstVarHiLow = function(t, e) {
                var i = this.getCurrentSol(),
                    s = i.getObjects();
                if (!s.length) return !1;
                var n, r, a, o = s[0],
                    h = o,
                    c = o.instance_vars[e];
                for (n = 1, r = s.length; n < r; n++) a = (o = s[n]).instance_vars[e], (0 === t && a < c || 1 === t && c < a) && (c = a, h = o);
                return i.pick_one(h), !0
            }, c.PickByUID = function(t) {
                var e, i, s, n, r, a, o;
                if (this.runtime.getCurrentCondition().inverted) {
                    if ((o = this.getCurrentSol()).select_all) {
                        for (o.select_all = !1, cr.clearArray(o.instances), cr.clearArray(o.else_instances), e = 0, i = (a = this.instances).length; e < i; e++)(n = a[e]).uid === t ? o.else_instances.push(n) : o.instances.push(n);
                        return this.applySolToContainer(), !!o.instances.length
                    }
                    for (s = e = 0, i = o.instances.length; e < i; e++) n = o.instances[e], (o.instances[s] = n).uid === t ? o.else_instances.push(n) : s++;
                    return cr.truncateArray(o.instances, s), this.applySolToContainer(), !!o.instances.length
                }
                if (!(n = this.runtime.getObjectByUID(t))) return !1;
                if (!(o = this.getCurrentSol()).select_all && -1 === o.instances.indexOf(n)) return !1;
                if (this.is_family) {
                    for (e = 0, i = (r = n.type.families).length; e < i; e++)
                        if (r[e] === this) return o.pick_one(n), this.applySolToContainer(), !0
                } else if (n.type === this) return o.pick_one(n), this.applySolToContainer(), !0;
                return !1
            }, c.OnCreated = function() {
                return !0
            }, c.OnDestroyed = function() {
                return !0
            }, l.SetInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] = e : i[t] = parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] = e : i[t] = e.toString())
            }, l.AddInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) ? cr.is_number(e) ? i[t] += e : i[t] += parseFloat(e) : cr.is_string(i[t]) && (cr.is_string(e) ? i[t] += e : i[t] += e.toString())
            }, l.SubInstanceVar = function(t, e) {
                var i = this.instance_vars;
                cr.is_number(i[t]) && (cr.is_number(e) ? i[t] -= e : i[t] -= parseFloat(e))
            }, l.SetBoolInstanceVar = function(t, e) {
                this.instance_vars[t] = e ? 1 : 0
            }, l.ToggleBoolInstanceVar = function(t) {
                this.instance_vars[t] = 1 - this.instance_vars[t]
            }, l.Destroy = function() {
                this.runtime.DestroyInstance(this)
            }, l.LoadFromJsonString || (l.LoadFromJsonString = function(t) {
                var e, i, s, n;
                try {
                    e = JSON.parse(t)
                } catch (t) {
                    return
                }
                if (this.runtime.loadInstanceFromJSON(this, e, !0), this.afterLoad && this.afterLoad(), this.behavior_insts)
                    for (i = 0, s = this.behavior_insts.length; i < s; ++i)(n = this.behavior_insts[i]).afterLoad && n.afterLoad()
            }), u.Count = function(t) {
                var e, i, s, n = t.object_class.instances.length;
                for (e = 0, i = this.runtime.createRow.length; e < i; e++) s = this.runtime.createRow[e], t.object_class.is_family ? 0 <= s.type.families.indexOf(t.object_class) && n++ : s.type === t.object_class && n++;
                t.set_int(n)
            }, u.PickedCount = function(t) {
                t.set_int(t.object_class.getCurrentSol().getObjects().length)
            }, u.UID = function(t) {
                t.set_int(this.uid)
            }, u.IID = function(t) {
                t.set_int(this.get_iid())
            }, u.AsJSON || (u.AsJSON = function(t) {
                t.set_string(JSON.stringify(this.runtime.saveInstanceToJSON(this, !0)))
            })), a && (c.IsVisible = function() {
                return this.visible
            }, l.SetVisible = function(t) {
                !t != !this.visible && (this.visible = !!t, this.runtime.redraw = !0)
            }, c.CompareOpacity = function(t, e) {
                return cr.do_cmp(cr.round6dp(100 * this.opacity), t, e)
            }, l.SetOpacity = function(t) {
                var e = t / 100;
                e < 0 ? e = 0 : 1 < e && (e = 1), e !== this.opacity && (this.opacity = e, this.runtime.redraw = !0)
            }, u.Opacity = function(t) {
                t.set_float(cr.round6dp(100 * this.opacity))
            }), o && (c.IsOnLayer = function(t) {
                return !!t && this.layer === t
            }, c.PickTopBottom = function(t) {
                var e = this.getCurrentSol(),
                    i = e.getObjects();
                if (!i.length) return !1;
                var s, n, r = i[0],
                    a = r;
                for (s = 1, n = i.length; s < n; s++) r = i[s], 0 === t ? (r.layer.index > a.layer.index || r.layer.index === a.layer.index && r.get_zindex() > a.get_zindex()) && (a = r) : (r.layer.index < a.layer.index || r.layer.index === a.layer.index && r.get_zindex() < a.get_zindex()) && (a = r);
                return e.pick_one(a), !0
            }, l.MoveToTop = function() {
                var t = this.layer,
                    e = t.instances;
                e.length && e[e.length - 1] === this || (t.removeFromInstanceList(this, !1), t.appendToInstanceList(this, !1), this.runtime.redraw = !0)
            }, l.MoveToBottom = function() {
                var t = this.layer,
                    e = t.instances;
                e.length && e[0] === this || (t.removeFromInstanceList(this, !1), t.prependToInstanceList(this, !1), this.runtime.redraw = !0)
            }, l.MoveToLayer = function(t) {
                t && t != this.layer && (this.layer.removeFromInstanceList(this, !0), (this.layer = t).appendToInstanceList(this, !0), this.runtime.redraw = !0)
            }, l.ZMoveToObject = function(t, e) {
                var i = 0 === t;
                if (e) {
                    var s = e.getFirstPicked(this);
                    s && s.uid !== this.uid && (this.layer.index !== s.layer.index && (this.layer.removeFromInstanceList(this, !0), this.layer = s.layer, s.layer.appendToInstanceList(this, !0)), this.layer.moveInstanceAdjacent(this, s, i), this.runtime.redraw = !0)
                }
            }, u.LayerNumber = function(t) {
                t.set_int(this.layer.number)
            }, u.LayerName = function(t) {
                t.set_string(this.layer.name)
            }, u.ZIndex = function(t) {
                t.set_int(this.get_zindex())
            }), h && (l.SetEffectEnabled = function(t, e) {
                if (this.runtime.glwrap) {
                    var i = this.type.getEffectIndexByName(e);
                    if (!(i < 0)) {
                        var s = 1 === t;
                        this.active_effect_flags[i] !== s && (this.active_effect_flags[i] = s, this.updateActiveEffects(), this.runtime.redraw = !0)
                    }
                }
            }, l.SetEffectParam = function(t, e, i) {
                if (this.runtime.glwrap) {
                    var s = this.type.getEffectIndexByName(t);
                    if (!(s < 0)) {
                        var n = this.type.effect_types[s],
                            r = this.effect_params[s];
                        (e = Math.floor(e)) < 0 || e >= r.length || (1 === this.runtime.glwrap.getProgramParameterType(n.shaderindex, e) && (i /= 100), r[e] !== i && (r[e] = i, n.active && (this.runtime.redraw = !0)))
                    }
                }
            })
        }, cr.set_bbox_changed = function() {
            this.bbox_changed = !0, this.cell_changed = !0, this.type.any_cell_changed = !0, this.runtime.redraw = !0;
            var t, e, i = this.bbox_changed_callbacks;
            for (t = 0, e = i.length; t < e; ++t) i[t](this);
            this.layer.useRenderCells && this.update_bbox()
        }, cr.add_bbox_changed_callback = function(t) {
            t && this.bbox_changed_callbacks.push(t)
        }, cr.update_bbox = function() {
            if (this.bbox_changed) {
                var t = this.bbox,
                    e = this.bquad;
                t.set(this.x, this.y, this.x + this.width, this.y + this.height), t.offset(-this.hotspotX * this.width, -this.hotspotY * this.height), this.angle ? (t.offset(-this.x, -this.y), e.set_from_rotated_rect(t, this.angle), e.offset(this.x, this.y), e.bounding_box(t)) : e.set_from_rect(t), t.normalize(), this.bbox_changed = !1, this.update_render_cell()
            }
        };
        var i = new cr.rect(0, 0, 0, 0);
        cr.update_render_cell = function() {
            if (this.layer.useRenderCells) {
                var t = this.layer.render_grid,
                    e = this.bbox;
                i.set(t.XToCell(e.left), t.YToCell(e.top), t.XToCell(e.right), t.YToCell(e.bottom)), this.rendercells.equals(i) || (this.rendercells.right < this.rendercells.left ? t.update(this, null, i) : t.update(this, this.rendercells, i), this.rendercells.copy(i), this.layer.render_list_stale = !0)
            }
        }, cr.update_collision_cell = function() {
            if (this.cell_changed && this.collisionsEnabled) {
                this.update_bbox();
                var t = this.type.collision_grid,
                    e = this.bbox;
                i.set(t.XToCell(e.left), t.YToCell(e.top), t.XToCell(e.right), t.YToCell(e.bottom)), this.collcells.equals(i) || (this.collcells.right < this.collcells.left ? t.update(this, null, i) : t.update(this, this.collcells, i), this.collcells.copy(i), this.cell_changed = !1)
            }
        }, cr.inst_contains_pt = function(t, e) {
            return !!this.bbox.contains_pt(t, e) && (!!this.bquad.contains_pt(t, e) && (this.tilemap_exists ? this.testPointOverlapTile(t, e) : !(this.collision_poly && !this.collision_poly.is_empty()) || (this.collision_poly.cache_poly(this.width, this.height, this.angle), this.collision_poly.contains_pt(t - this.x, e - this.y))))
        }, cr.inst_get_iid = function() {
            return this.type.updateIIDs(), this.iid
        }, cr.inst_get_zindex = function() {
            return this.layer.updateZIndices(), this.zindex
        }, cr.inst_updateActiveEffects = function() {
            var t, e, i;
            cr.clearArray(this.active_effect_types);
            var s = !0;
            for (t = 0, e = this.active_effect_flags.length; t < e; t++) this.active_effect_flags[t] && (i = this.type.effect_types[t], this.active_effect_types.push(i), i.preservesOpaqueness || (s = !1));
            this.uses_shaders = !!this.active_effect_types.length, this.shaders_preserve_opaqueness = s
        }, cr.inst_toString = function() {
            return "Inst" + this.puid
        }, cr.type_getFirstPicked = function(t) {
            var e, i, s;
            if (t && t.is_contained && t.type != this)
                for (e = 0, i = t.siblings.length; e < i; e++)
                    if ((s = t.siblings[e]).type == this) return s;
            var n = this.getCurrentSol().getObjects();
            return n.length ? n[0] : null
        }, cr.type_getPairedInstance = function(t) {
            var e = this.getCurrentSol().getObjects();
            return e.length ? e[t.get_iid() % e.length] : null
        }, cr.type_updateIIDs = function() {
            if (this.stale_iids && !this.is_family) {
                var t, e;
                for (t = 0, e = this.instances.length; t < e; t++) this.instances[t].iid = t;
                var i = t,
                    s = this.runtime.createRow;
                for (t = 0, e = s.length; t < e; ++t) s[t].type === this && (s[t].iid = i++);
                this.stale_iids = !1
            }
        }, cr.type_getInstanceByIID = function(t) {
            if (t < this.instances.length) return this.instances[t];
            t -= this.instances.length;
            var e, i, s = this.runtime.createRow;
            for (e = 0, i = s.length; e < i; ++e)
                if (s[e].type === this) {
                    if (0 === t) return s[e];
                    --t
                }
            return null
        }, cr.type_getCurrentSol = function() {
            return this.solstack[this.cur_sol]
        }, cr.type_pushCleanSol = function() {
            this.cur_sol++, this.cur_sol === this.solstack.length ? this.solstack.push(new cr.selection(this)) : (this.solstack[this.cur_sol].select_all = !0, cr.clearArray(this.solstack[this.cur_sol].else_instances))
        }, cr.type_pushCopySol = function() {
            this.cur_sol++, this.cur_sol === this.solstack.length && this.solstack.push(new cr.selection(this));
            var t = this.solstack[this.cur_sol],
                e = this.solstack[this.cur_sol - 1];
            e.select_all ? (t.select_all = !0, cr.clearArray(t.else_instances)) : (t.select_all = !1, cr.shallowAssignArray(t.instances, e.instances), cr.shallowAssignArray(t.else_instances, e.else_instances))
        }, cr.type_popSol = function() {
            this.cur_sol--
        }, cr.type_getBehaviorByName = function(t) {
            var e, i, s, n, r, a = 0;
            if (!this.is_family)
                for (e = 0, i = this.families.length; e < i; e++)
                    for (s = 0, n = (r = this.families[e]).behaviors.length; s < n; s++) {
                        if (t === r.behaviors[s].name) return this.extra.lastBehIndex = a, r.behaviors[s];
                        a++
                    }
            for (e = 0, i = this.behaviors.length; e < i; e++) {
                if (t === this.behaviors[e].name) return this.extra.lastBehIndex = a, this.behaviors[e];
                a++
            }
            return null
        }, cr.type_getBehaviorIndexByName = function(t) {
            return this.getBehaviorByName(t) ? this.extra.lastBehIndex : -1
        }, cr.type_getEffectIndexByName = function(t) {
            var e, i;
            for (e = 0, i = this.effect_types.length; e < i; e++)
                if (this.effect_types[e].name === t) return e;
            return -1
        }, cr.type_applySolToContainer = function() {
            if (this.is_contained && !this.is_family) {
                var t, e, i, s, n, r, a;
                this.updateIIDs();
                var o = (r = this.getCurrentSol()).select_all,
                    h = this.runtime.getCurrentEventStack(),
                    c = h && h.current_event && h.current_event.orblock;
                for (t = 0, e = this.container.length; t < e; t++)
                    if ((n = this.container[t]) !== this && (n.updateIIDs(), !((a = n.getCurrentSol()).select_all = o))) {
                        for (cr.clearArray(a.instances), i = 0, s = r.instances.length; i < s; ++i) a.instances[i] = n.getInstanceByIID(r.instances[i].iid);
                        if (c)
                            for (cr.clearArray(a.else_instances), i = 0, s = r.else_instances.length; i < s; ++i) a.else_instances[i] = n.getInstanceByIID(r.else_instances[i].iid)
                    }
            }
        }, cr.type_toString = function() {
            return "Type" + this.sid
        }, cr.do_cmp = function(t, e, i) {
            if (void 0 === t || void 0 === i) return !1;
            switch (e) {
                case 0:
                    return t === i;
                case 1:
                    return t !== i;
                case 2:
                    return t < i;
                case 3:
                    return t <= i;
                case 4:
                    return i < t;
                case 5:
                    return i <= t;
                default:
                    return !1
            }
        }
    }(), cr.shaders = {}, cr.plugins_.Audio = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Audio.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {};
        var c = null,
            n = null,
            r = "",
            a = "",
            o = 0,
            h = 1,
            l = 2,
            u = 3,
            p = o,
            d = null,
            f = [],
            x = [],
            g = null,
            m = !1,
            y = 0,
            S = !1,
            T = 1,
            _ = 0,
            v = 0,
            s = !1,
            b = 1,
            w = 1,
            C = 10,
            A = 1e4,
            P = 1,
            O = null,
            k = "",
            E = !1,
            R = [],
            L = !1;

        function I(t) {
            var e = M(t);
            return isFinite(e) || (e = 0), e < 0 && (e = 0), 1 < e && (e = 1), e
        }

        function B(t) {
            return t < 0 && (t = 0), 1 < t && (t = 1),
                function(t) {
                    return Math.log(t) / Math.log(10) * 20
                }(t)
        }

        function M(t) {
            return Math.pow(10, t / 20)
        }
        var F = {};

        function N(t) {
            return t = t.toLowerCase(), F.hasOwnProperty(t) && F[t].length ? F[t][0].getInputNode() : d.destination
        }

        function D() {
            return d.createGain ? d.createGain() : d.createGainNode()
        }

        function j(t) {
            return d.createDelay ? d.createDelay(t) : d.createDelayNode(t)
        }

        function W(t, e) {
            t.start ? t.start(e || 0) : t.noteOn(e || 0)
        }

        function z(t, e, i, s) {
            t.start ? t.start(s || 0, e) : t.noteGrainOn(s || 0, e, i - e)
        }

        function e(t) {
            try {
                t.stop ? t.stop(0) : t.noteOff(0)
            } catch (t) {}
        }

        function V(t, e, i, s) {
            if (t)
                if (t.cancelScheduledValues(0), 0 !== s) {
                    var n = d.currentTime;
                    switch (s += n, i) {
                        case 0:
                            t.setValueAtTime(e, s);
                            break;
                        case 1:
                            t.setValueAtTime(t.value, n), t.linearRampToValueAtTime(e, s);
                            break;
                        case 2:
                            t.setValueAtTime(t.value, n), t.exponentialRampToValueAtTime(e, s)
                    }
                } else t.value = e
        }
        var G = ["lowpass", "highpass", "bandpass", "lowshelf", "highshelf", "peaking", "notch", "allpass"];

        function U(t, e, i, s, n, r) {
            this.type = "filter", this.params = [t, e, i, s, n, r], this.inputNode = D(), this.wetNode = D(), this.wetNode.gain.value = r, this.dryNode = D(), this.dryNode.gain.value = 1 - r, this.filterNode = d.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = t : this.filterNode.type = G[t], this.filterNode.frequency.value = e, this.filterNode.detune && (this.filterNode.detune.value = i), this.filterNode.Q.value = s, this.filterNode.gain.value = n, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode)
        }

        function X(t, e, i) {
            this.type = "delay", this.params = [t, e, i], this.inputNode = D(), this.wetNode = D(), this.wetNode.gain.value = i, this.dryNode = D(), this.dryNode.gain.value = 1 - i, this.mainNode = D(), this.delayNode = j(t), this.delayNode.delayTime.value = t, this.delayGainNode = D(), this.delayGainNode.gain.value = e, this.inputNode.connect(this.mainNode), this.inputNode.connect(this.dryNode), this.mainNode.connect(this.wetNode), this.mainNode.connect(this.delayNode), this.delayNode.connect(this.delayGainNode), this.delayGainNode.connect(this.mainNode)
        }

        function q(t, e, i, s) {
            this.type = "convolve", this.params = [e, i, s], this.inputNode = D(), this.wetNode = D(), this.wetNode.gain.value = i, this.dryNode = D(), this.dryNode.gain.value = 1 - i, this.convolveNode = d.createConvolver(), t && (this.convolveNode.normalize = e, this.convolveNode.buffer = t), this.inputNode.connect(this.convolveNode), this.inputNode.connect(this.dryNode), this.convolveNode.connect(this.wetNode)
        }

        function H(t, e, i, s, n) {
            this.type = "flanger", this.params = [t, e, i, s, n], this.inputNode = D(), this.dryNode = D(), this.dryNode.gain.value = 1 - n / 2, this.wetNode = D(), this.wetNode.gain.value = n / 2, this.feedbackNode = D(), this.feedbackNode.gain.value = s, this.delayNode = j(t + e), this.delayNode.delayTime.value = t, this.oscNode = d.createOscillator(), this.oscNode.frequency.value = i, this.oscGainNode = D(), this.oscGainNode.gain.value = e, this.inputNode.connect(this.delayNode), this.inputNode.connect(this.dryNode), this.delayNode.connect(this.wetNode), this.delayNode.connect(this.feedbackNode), this.feedbackNode.connect(this.delayNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.delayNode.delayTime), W(this.oscNode)
        }

        function Y(t, e, i, s, n, r) {
            this.type = "phaser", this.params = [t, e, i, s, n, r], this.inputNode = D(), this.dryNode = D(), this.dryNode.gain.value = 1 - r / 2, this.wetNode = D(), this.wetNode.gain.value = r / 2, this.filterNode = d.createBiquadFilter(), "number" == typeof this.filterNode.type ? this.filterNode.type = 7 : this.filterNode.type = "allpass", this.filterNode.frequency.value = t, this.filterNode.detune && (this.filterNode.detune.value = e), this.filterNode.Q.value = i, this.oscNode = d.createOscillator(), this.oscNode.frequency.value = n, this.oscGainNode = D(), this.oscGainNode.gain.value = s, this.inputNode.connect(this.filterNode), this.inputNode.connect(this.dryNode), this.filterNode.connect(this.wetNode), this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.filterNode.frequency), W(this.oscNode)
        }

        function J(t) {
            this.type = "gain", this.params = [t], this.node = D(), this.node.gain.value = t
        }

        function Q(t, e) {
            this.type = "tremolo", this.params = [t, e], this.node = D(), this.node.gain.value = 1 - e / 2, this.oscNode = d.createOscillator(), this.oscNode.frequency.value = t, this.oscGainNode = D(), this.oscGainNode.gain.value = e / 2, this.oscNode.connect(this.oscGainNode), this.oscGainNode.connect(this.node.gain), W(this.oscNode)
        }

        function Z(t, e) {
            this.type = "ringmod", this.params = [t, e], this.inputNode = D(), this.wetNode = D(), this.wetNode.gain.value = e, this.dryNode = D(), this.dryNode.gain.value = 1 - e, this.ringNode = D(), this.ringNode.gain.value = 0, this.oscNode = d.createOscillator(), this.oscNode.frequency.value = t, this.oscNode.connect(this.ringNode.gain), W(this.oscNode), this.inputNode.connect(this.ringNode), this.inputNode.connect(this.dryNode), this.ringNode.connect(this.wetNode)
        }

        function K(t, e, i, s, n) {
            this.type = "distortion", this.params = [t, e, i, s, n], this.inputNode = D(), this.preGain = D(), this.postGain = D(), this.setDrive(i, M(s)), this.wetNode = D(), this.wetNode.gain.value = n, this.dryNode = D(), this.dryNode.gain.value = 1 - n, this.waveShaper = d.createWaveShaper(), this.curve = new Float32Array(65536), this.generateColortouchCurve(t, e), this.waveShaper.curve = this.curve, this.inputNode.connect(this.preGain), this.inputNode.connect(this.dryNode), this.preGain.connect(this.waveShaper), this.waveShaper.connect(this.postGain), this.postGain.connect(this.wetNode)
        }

        function $(t, e, i, s, n) {
            this.type = "compressor", this.params = [t, e, i, s, n], this.node = d.createDynamicsCompressor();
            try {
                this.node.threshold.value = t, this.node.knee.value = e, this.node.ratio.value = i, this.node.attack.value = s, this.node.release.value = n
            } catch (t) {}
        }

        function tt(t, e) {
            this.type = "analyser", this.params = [t, e], this.node = d.createAnalyser(), this.node.fftSize = t, this.node.smoothingTimeConstant = e, this.freqBins = new Float32Array(this.node.frequencyBinCount), this.signal = new Uint8Array(t), this.peak = 0, this.rms = 0
        }

        function et() {
            this.obj = null, this.loadUid = 0
        }
        U.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, U.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, U.prototype.getInputNode = function() {
            return this.inputNode
        }, U.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), 1 < e && (e = 1), this.params[5] = e, V(this.wetNode.gain, e, i, s), V(this.dryNode.gain, 1 - e, i, s);
                    break;
                case 1:
                    this.params[1] = e, V(this.filterNode.frequency, e, i, s);
                    break;
                case 2:
                    this.params[2] = e, V(this.filterNode.detune, e, i, s);
                    break;
                case 3:
                    this.params[3] = e, V(this.filterNode.Q, e, i, s);
                    break;
                case 4:
                    this.params[4] = e, V(this.filterNode.gain, e, i, s)
            }
        }, X.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, X.prototype.remove = function() {
            this.inputNode.disconnect(), this.mainNode.disconnect(), this.delayNode.disconnect(), this.delayGainNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, X.prototype.getInputNode = function() {
            return this.inputNode
        }, X.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), 1 < e && (e = 1), this.params[2] = e, V(this.wetNode.gain, e, i, s), V(this.dryNode.gain, 1 - e, i, s);
                    break;
                case 4:
                    this.params[1] = I(e), V(this.delayGainNode.gain, I(e), i, s);
                    break;
                case 5:
                    this.params[0] = e, V(this.delayNode.delayTime, e, i, s)
            }
        }, q.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, q.prototype.remove = function() {
            this.inputNode.disconnect(), this.convolveNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, q.prototype.getInputNode = function() {
            return this.inputNode
        }, q.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), 1 < e && (e = 1), this.params[1] = e, V(this.wetNode.gain, e, i, s), V(this.dryNode.gain, 1 - e, i, s)
            }
        }, H.prototype.connectTo = function(t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, H.prototype.remove = function() {
            this.inputNode.disconnect(), this.delayNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect(), this.feedbackNode.disconnect()
        }, H.prototype.getInputNode = function() {
            return this.inputNode
        }, H.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), 1 < e && (e = 1), this.params[4] = e, V(this.wetNode.gain, e / 2, i, s), V(this.dryNode.gain, 1 - e / 2, i, s);
                    break;
                case 6:
                    this.params[1] = e / 1e3, V(this.oscGainNode.gain, e / 1e3, i, s);
                    break;
                case 7:
                    this.params[2] = e, V(this.oscNode.frequency, e, i, s);
                    break;
                case 8:
                    this.params[3] = e / 100, V(this.feedbackNode.gain, e / 100, i, s)
            }
        }, Y.prototype.connectTo = function(t) {
            this.dryNode.disconnect(), this.dryNode.connect(t), this.wetNode.disconnect(), this.wetNode.connect(t)
        }, Y.prototype.remove = function() {
            this.inputNode.disconnect(), this.filterNode.disconnect(), this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.dryNode.disconnect(), this.wetNode.disconnect()
        }, Y.prototype.getInputNode = function() {
            return this.inputNode
        }, Y.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), 1 < e && (e = 1), this.params[5] = e, V(this.wetNode.gain, e / 2, i, s), V(this.dryNode.gain, 1 - e / 2, i, s);
                    break;
                case 1:
                    this.params[0] = e, V(this.filterNode.frequency, e, i, s);
                    break;
                case 2:
                    this.params[1] = e, V(this.filterNode.detune, e, i, s);
                    break;
                case 3:
                    this.params[2] = e, V(this.filterNode.Q, e, i, s);
                    break;
                case 6:
                    this.params[3] = e, V(this.oscGainNode.gain, e, i, s);
                    break;
                case 7:
                    this.params[4] = e, V(this.oscNode.frequency, e, i, s)
            }
        }, J.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, J.prototype.remove = function() {
            this.node.disconnect()
        }, J.prototype.getInputNode = function() {
            return this.node
        }, J.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 4:
                    this.params[0] = I(e), V(this.node.gain, I(e), i, s)
            }
        }, Q.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, Q.prototype.remove = function() {
            this.oscNode.disconnect(), this.oscGainNode.disconnect(), this.node.disconnect()
        }, Q.prototype.getInputNode = function() {
            return this.node
        }, Q.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), 1 < e && (e = 1), this.params[1] = e, V(this.node.gain.value, 1 - e / 2, i, s), V(this.oscGainNode.gain.value, e / 2, i, s);
                    break;
                case 7:
                    this.params[0] = e, V(this.oscNode.frequency, e, i, s)
            }
        }, Z.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, Z.prototype.remove = function() {
            this.oscNode.disconnect(), this.ringNode.disconnect(), this.inputNode.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, Z.prototype.getInputNode = function() {
            return this.inputNode
        }, Z.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), 1 < e && (e = 1), this.params[1] = e, V(this.wetNode.gain, e, i, s), V(this.dryNode.gain, 1 - e, i, s);
                    break;
                case 7:
                    this.params[0] = e, V(this.oscNode.frequency, e, i, s)
            }
        }, K.prototype.setDrive = function(t, e) {
            t < .01 && (t = .01), this.preGain.gain.value = t, this.postGain.gain.value = Math.pow(1 / t, .6) * e
        }, K.prototype.shape = function(t, e, i) {
            var s = 1.05 * i * e - e,
                n = t < 0 ? -1 : 1,
                r = t < 0 ? -t : t,
                a = r < e ? r : e + s * function(t, e) {
                    return 1 - Math.exp(-e * t)
                }(r - e, 1 / s);
            return a *= n
        }, K.prototype.generateColortouchCurve = function(t, e) {
            for (var i = M(t), s = M(e), n = 0, r = 0; r < 32768; ++r) n = r / 32768, n = this.shape(n, i, s), this.curve[32768 + r] = n, this.curve[32768 - r - 1] = -n
        }, K.prototype.connectTo = function(t) {
            this.wetNode.disconnect(), this.wetNode.connect(t), this.dryNode.disconnect(), this.dryNode.connect(t)
        }, K.prototype.remove = function() {
            this.inputNode.disconnect(), this.preGain.disconnect(), this.waveShaper.disconnect(), this.postGain.disconnect(), this.wetNode.disconnect(), this.dryNode.disconnect()
        }, K.prototype.getInputNode = function() {
            return this.inputNode
        }, K.prototype.setParam = function(t, e, i, s) {
            switch (t) {
                case 0:
                    (e /= 100) < 0 && (e = 0), 1 < e && (e = 1), this.params[4] = e, V(this.wetNode.gain, e, i, s), V(this.dryNode.gain, 1 - e, i, s)
            }
        }, $.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, $.prototype.remove = function() {
            this.node.disconnect()
        }, $.prototype.getInputNode = function() {
            return this.node
        }, $.prototype.setParam = function(t, e, i, s) {}, tt.prototype.tick = function() {
            this.node.getFloatFrequencyData(this.freqBins), this.node.getByteTimeDomainData(this.signal);
            for (var t = this.node.fftSize, e = 0, i = this.peak = 0, s = 0; e < t; e++)(s = (this.signal[e] - 128) / 128) < 0 && (s = -s), this.peak < s && (this.peak = s), i += s * s;
            this.peak = B(this.peak), this.rms = B(Math.sqrt(i / t))
        }, tt.prototype.connectTo = function(t) {
            this.node.disconnect(), this.node.connect(t)
        }, tt.prototype.remove = function() {
            this.node.disconnect()
        }, tt.prototype.getInputNode = function() {
            return this.node
        }, tt.prototype.setParam = function(t, e, i, s) {}, et.prototype.setObject = function(t) {
            this.obj = t
        }, et.prototype.hasObject = function() {
            return !!this.obj
        };
        et.prototype.tick = function(t) {};
        var it = !1;

        function st(t, e) {
            this.src = t, this.myapi = p, this.is_music = e, this.added_end_listener = !1;
            var i, s = this;
            switch (this.outNode = null, this.mediaSourceNode = null, this.panWhenReady = [], this.seekWhenReady = 0, this.pauseWhenReady = !1, this.supportWebAudioAPI = !1, this.failedToLoad = !1, this.wasEverReady = !1, p === h && e && !L && (this.myapi = o, this.outNode = D()), this.bufferObject = null, this.audioData = null, this.myapi) {
                case o:
                    this.bufferObject = new Audio, this.bufferObject.crossOrigin = "anonymous", this.bufferObject.addEventListener("canplaythrough", function() {
                        s.wasEverReady = !0
                    }), p === h && d.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.supportWebAudioAPI = !0, this.bufferObject.addEventListener("canplay", function() {
                        !s.mediaSourceNode && s.bufferObject && (s.mediaSourceNode = d.createMediaElementSource(s.bufferObject), s.mediaSourceNode.connect(s.outNode))
                    })), this.bufferObject.autoplay = !1, this.bufferObject.preload = "auto", this.bufferObject.src = t;
                    break;
                case h:
                    c.isWKWebView ? c.fetchLocalFileViaCordovaAsArrayBuffer(t, function(t) {
                        s.audioData = t, s.decodeAudioBuffer()
                    }, function(t) {
                        s.failedToLoad = !0
                    }) : ((i = new XMLHttpRequest).open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
                        s.audioData = i.response, s.decodeAudioBuffer()
                    }, i.onerror = function() {
                        s.failedToLoad = !0
                    }, i.send());
                    break;
                case l:
                case u:
                    this.bufferObject = !0
            }
        }

        function nt(t, e) {
            var i = this;
            this.tag = e, this.fresh = !0, this.stopped = !0, this.src = t.src, this.buffer = t, this.myapi = p, this.is_music = t.is_music, this.playbackRate = 1, this.hasPlaybackEnded = !0, this.resume_me = !1, this.is_paused = !1, this.resume_position = 0, this.looping = !1, this.is_muted = !1, this.is_silent = !1, this.volume = 1, this.onended_handler = function(t) {
                if (!i.is_paused && !i.resume_me) {
                    var e = this;
                    e || (e = t.target), e === i.active_buffer && (i.hasPlaybackEnded = !0, i.stopped = !0, r = i.tag, c.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, n))
                }
            }, this.active_buffer = null, this.isTimescaled = 1 === y && !this.is_music || 2 === y, this.mutevol = 1, this.startTime = this.isTimescaled ? c.kahanTime.sum : c.wallTime.sum, this.gainNode = null, this.pannerNode = null, this.pannerEnabled = !1, this.objectTracker = null, this.panX = 0, this.panY = 0, this.panAngle = 0, this.panConeInner = 0, this.panConeOuter = 0, this.panConeOuterGain = 0, this.instanceObject = null;
            var s = !1;
            switch (this.myapi !== h || this.buffer.myapi !== o || this.buffer.supportWebAudioAPI || (this.myapi = o), this.myapi) {
                case o:
                    this.is_music ? (this.instanceObject = t.bufferObject, s = !t.added_end_listener, t.added_end_listener = !0) : (this.instanceObject = new Audio, this.instanceObject.crossOrigin = "anonymous", this.instanceObject.autoplay = !1, this.instanceObject.src = t.bufferObject.src, s = !0), s && this.instanceObject.addEventListener("ended", function() {
                        r = i.tag, i.stopped = !0, c.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, n)
                    });
                    break;
                case h:
                    this.gainNode = D(), this.gainNode.connect(N(e)), this.buffer.myapi === h ? t.bufferObject && (this.instanceObject = d.createBufferSource(), this.instanceObject.buffer = t.bufferObject, this.instanceObject.connect(this.gainNode)) : (this.instanceObject = this.buffer.bufferObject, this.buffer.outNode.connect(this.gainNode), this.buffer.added_end_listener || (this.buffer.added_end_listener = !0, this.buffer.bufferObject.addEventListener("ended", function() {
                        r = i.tag, i.stopped = !0, c.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, n)
                    })));
                    break;
                case l:
                    this.instanceObject = new window.Media(a + this.src, null, null, function(t) {
                        t === window.Media.MEDIA_STOPPED && (i.hasPlaybackEnded = !0, i.stopped = !0, r = i.tag, c.trigger(cr.plugins_.Audio.prototype.cnds.OnEnded, n))
                    });
                    break;
                case u:
                    this.instanceObject = !0
            }
        }
        st.prototype.release = function() {
            var t, e, i, s;
            for (i = t = 0, e = x.length; t < e; ++t) s = x[t], (x[i] = s).buffer === this ? s.stop() : ++i;
            x.length = i, this.mediaSourceNode && (this.mediaSourceNode.disconnect(), this.mediaSourceNode = null), this.outNode && (this.outNode.disconnect(), this.outNode = null), this.bufferObject = null, this.audioData = null
        }, st.prototype.decodeAudioBuffer = function() {
            if (!this.bufferObject && this.audioData) {
                var h = this;
                if (d.decodeAudioData) d.decodeAudioData(this.audioData, function(t) {
                    var e, i, s, n;
                    if (h.bufferObject = t, h.audioData = null, cr.is_undefined(h.playTagWhenReady) || S) {
                        if (!cr.is_undefined(h.convolveWhenReady)) {
                            var r = h.convolveWhenReady.convolveNode;
                            r.normalize = h.normalizeWhenReady, r.buffer = t
                        }
                    } else if (h.panWhenReady.length) {
                        for (i = 0, s = h.panWhenReady.length; i < s; i++)
                            if (e = h.panWhenReady[i], (n = new nt(h, e.thistag)).setPannerEnabled(!0), void 0 === e.objUid || (e.obj = c.getObjectByUID(e.objUid), e.obj)) {
                                if (e.obj) {
                                    var a = cr.rotatePtAround(e.obj.x, e.obj.y, -e.obj.layer.getAngle(), _, v, !0),
                                        o = cr.rotatePtAround(e.obj.x, e.obj.y, -e.obj.layer.getAngle(), _, v, !1);
                                    n.setPan(a, o, cr.to_degrees(e.obj.angle - e.obj.layer.getAngle()), e.ia, e.oa, e.og), n.setObject(e.obj)
                                } else n.setPan(e.x, e.y, e.a, e.ia, e.oa, e.og);
                                n.play(h.loopWhenReady, h.volumeWhenReady, h.seekWhenReady), h.pauseWhenReady && n.pause(), x.push(n)
                            }
                        cr.clearArray(h.panWhenReady)
                    } else(n = new nt(h, h.playTagWhenReady || "")).play(h.loopWhenReady, h.volumeWhenReady, h.seekWhenReady), h.pauseWhenReady && n.pause(), x.push(n)
                }, function(t) {
                    h.failedToLoad = !0
                });
                else if (this.bufferObject = d.createBuffer(this.audioData, !1), this.audioData = null, cr.is_undefined(this.playTagWhenReady) || S) {
                    if (!cr.is_undefined(this.convolveWhenReady)) {
                        var t = this.convolveWhenReady.convolveNode;
                        t.normalize = this.normalizeWhenReady, t.buffer = this.bufferObject
                    }
                } else {
                    var e = new nt(this, this.playTagWhenReady);
                    e.play(this.loopWhenReady, this.volumeWhenReady, this.seekWhenReady), this.pauseWhenReady && e.pause(), x.push(e)
                }
            }
        }, st.prototype.isLoaded = function() {
            switch (this.myapi) {
                case o:
                    var t = 4 <= this.bufferObject.readyState;
                    return t && (this.wasEverReady = !0), t || this.wasEverReady;
                case h:
                    return !!this.audioData || !!this.bufferObject;
                case l:
                case u:
                    return !0
            }
            return !1
        }, st.prototype.isLoadedAndDecoded = function() {
            switch (this.myapi) {
                case o:
                    return this.isLoaded();
                case h:
                    return !!this.bufferObject;
                case l:
                case u:
                    return !0
            }
            return !1
        }, st.prototype.hasFailedToLoad = function() {
            switch (this.myapi) {
                case o:
                    return !!this.bufferObject.error;
                case h:
                    return this.failedToLoad
            }
            return !1
        }, nt.prototype.hasEnded = function() {
            switch (this.myapi) {
                case o:
                    return this.instanceObject.ended;
                case h:
                    return this.buffer.myapi === h ? !(!this.fresh && !this.stopped && this.instanceObject.loop) && (!this.is_paused && this.hasPlaybackEnded) : this.instanceObject.ended;
                case l:
                    return this.hasPlaybackEnded
            }
            return !0
        }, nt.prototype.canBeRecycled = function() {
            return !(!this.fresh && !this.stopped) || this.hasEnded()
        }, nt.prototype.setPannerEnabled = function(t) {
            if (p === h)
                if (!this.pannerEnabled && t) {
                    if (!this.gainNode) return;
                    this.pannerNode || (this.pannerNode = d.createPanner(), "number" == typeof this.pannerNode.panningModel ? this.pannerNode.panningModel = b : this.pannerNode.panningModel = ["equalpower", "HRTF", "soundfield"][b], "number" == typeof this.pannerNode.distanceModel ? this.pannerNode.distanceModel = w : this.pannerNode.distanceModel = ["linear", "inverse", "exponential"][w], this.pannerNode.refDistance = C, this.pannerNode.maxDistance = A, this.pannerNode.rolloffFactor = P), this.gainNode.disconnect(), this.gainNode.connect(this.pannerNode), this.pannerNode.connect(N(this.tag)), this.pannerEnabled = !0
                } else if (this.pannerEnabled && !t) {
                if (!this.gainNode) return;
                this.pannerNode.disconnect(), this.gainNode.disconnect(), this.gainNode.connect(N(this.tag)), this.pannerEnabled = !1
            }
        }, nt.prototype.setPan = function(t, e, i, s, n, r) {
            this.pannerEnabled && p === h && (this.pannerNode.setPosition(t, e, 0), this.pannerNode.setOrientation(Math.cos(cr.to_radians(i)), Math.sin(cr.to_radians(i)), 0), this.pannerNode.coneInnerAngle = s, this.pannerNode.coneOuterAngle = n, this.pannerNode.coneOuterGain = r, this.panX = t, this.panY = e, this.panAngle = i, this.panConeInner = s, this.panConeOuter = n, this.panConeOuterGain = r)
        }, nt.prototype.setObject = function(t) {
            this.pannerEnabled && p === h && (this.objectTracker || (this.objectTracker = new et), this.objectTracker.setObject(t))
        }, nt.prototype.tick = function(t) {
            if (this.pannerEnabled && p === h && this.objectTracker && this.objectTracker.hasObject() && this.isPlaying()) {
                this.objectTracker.tick(t);
                var e = this.objectTracker.obj,
                    i = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), _, v, !0),
                    s = cr.rotatePtAround(e.x, e.y, -e.layer.getAngle(), _, v, !1);
                this.pannerNode.setPosition(i, s, 0);
                var n = 0;
                void 0 !== this.objectTracker.obj.angle && (n = e.angle - e.layer.getAngle(), this.pannerNode.setOrientation(Math.cos(n), Math.sin(n), 0))
            }
        }, nt.prototype.play = function(t, e, i, s) {
            var n = this.instanceObject;
            this.looping = t, this.volume = e;
            var r = i || 0;
            switch (s = s || 0, this.myapi) {
                case o:
                    if (1 !== n.playbackRate && (n.playbackRate = 1), n.volume !== e * T && (n.volume = e * T), n.loop !== t && (n.loop = t), n.muted && (n.muted = !1), n.currentTime !== r) try {
                        n.currentTime = r
                    } catch (t) {}
                    if (this.is_music && E && !c.isInUserInputEvent) R.push(this);
                    else try {
                        this.instanceObject.play()
                    } catch (t) {
                        console && console.log && console.log("[C2] WARNING: exception trying to play audio '" + this.buffer.src + "': ", t)
                    }
                    break;
                case h:
                    if (this.muted = !1, this.mutevol = 1, this.buffer.myapi === h) this.gainNode.gain.value = e * T, this.fresh || (this.instanceObject = d.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode)), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = t, this.hasPlaybackEnded = !1, 0 === r ? W(this.instanceObject, s) : z(this.instanceObject, r, this.getDuration(), s);
                    else {
                        if (1 !== n.playbackRate && (n.playbackRate = 1), n.loop !== t && (n.loop = t), n.volume = e * T, n.currentTime !== r) try {
                            n.currentTime = r
                        } catch (t) {}
                        this.is_music && E && !c.isInUserInputEvent ? R.push(this) : n.play()
                    }
                    break;
                case l:
                    (!this.fresh && this.stopped || 0 !== r) && n.seekTo(r), n.play(), this.hasPlaybackEnded = !1;
                    break;
                case u:
                    c.isDirectCanvas ? AppMobi.context.playSound(this.src, t) : AppMobi.player.playSound(this.src, t)
            }
            this.playbackRate = 1, this.startTime = (this.isTimescaled ? c.kahanTime.sum : c.wallTime.sum) - r, this.fresh = !1, this.stopped = !1, this.is_paused = !1
        }, nt.prototype.stop = function() {
            switch (this.myapi) {
                case o:
                    this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case h:
                    this.buffer.myapi === h ? e(this.instanceObject) : this.instanceObject.paused || this.instanceObject.pause();
                    break;
                case l:
                    this.instanceObject.stop();
                    break;
                case u:
                    c.isDirectCanvas && AppMobi.context.stopSound(this.src)
            }
            this.stopped = !0, this.is_paused = !1
        }, nt.prototype.pause = function() {
            if (!(this.fresh || this.stopped || this.hasEnded() || this.is_paused)) {
                switch (this.myapi) {
                    case o:
                        this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case h:
                        this.buffer.myapi === h ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), this.is_paused = !0, e(this.instanceObject)) : this.instanceObject.paused || this.instanceObject.pause();
                        break;
                    case l:
                        this.instanceObject.pause();
                        break;
                    case u:
                        c.isDirectCanvas && AppMobi.context.stopSound(this.src)
                }
                this.is_paused = !0
            }
        }, nt.prototype.resume = function() {
            if (!(this.fresh || this.stopped || this.hasEnded()) && this.is_paused) {
                switch (this.myapi) {
                    case o:
                        this.instanceObject.play();
                        break;
                    case h:
                        this.buffer.myapi === h ? (this.instanceObject = d.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = T * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? c.kahanTime.sum : c.wallTime.sum) - this.resume_position / (this.playbackRate || .001), z(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play();
                        break;
                    case l:
                        this.instanceObject.play();
                        break;
                    case u:
                        c.isDirectCanvas && AppMobi.context.resumeSound(this.src)
                }
                this.is_paused = !1
            }
        }, nt.prototype.seek = function(t) {
            if (!(this.fresh || this.stopped || this.hasEnded())) switch (this.myapi) {
                case o:
                    try {
                        this.instanceObject.currentTime = t
                    } catch (t) {}
                    break;
                case h:
                    if (this.buffer.myapi === h) this.is_paused ? this.resume_position = t : (this.pause(), this.resume_position = t, this.resume());
                    else try {
                        this.instanceObject.currentTime = t
                    } catch (t) {}
                    break;
                case l:
                    break;
                case u:
                    c.isDirectCanvas && AppMobi.context.seekSound(this.src, t)
            }
        }, nt.prototype.reconnect = function(t) {
            this.myapi === h && (this.pannerEnabled ? (this.pannerNode.disconnect(), this.pannerNode.connect(t)) : (this.gainNode.disconnect(), this.gainNode.connect(t)))
        }, nt.prototype.getDuration = function(t) {
            var e = 0;
            switch (this.myapi) {
                case o:
                    void 0 !== this.instanceObject.duration && (e = this.instanceObject.duration);
                    break;
                case h:
                    e = this.buffer.bufferObject.duration;
                    break;
                case l:
                    e = this.instanceObject.getDuration();
                    break;
                case u:
                    c.isDirectCanvas && (e = AppMobi.context.getDurationSound(this.src))
            }
            return t && (e /= this.playbackRate || .001), e
        }, nt.prototype.getPlaybackTime = function(t) {
            var e = this.getDuration(),
                i = 0;
            switch (this.myapi) {
                case o:
                    void 0 !== this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
                    break;
                case h:
                    if (this.buffer.myapi === h) {
                        if (this.is_paused) return this.resume_position;
                        i = (this.isTimescaled ? c.kahanTime.sum : c.wallTime.sum) - this.startTime
                    } else void 0 !== this.instanceObject.currentTime && (i = this.instanceObject.currentTime);
                    break;
                case l:
                    break;
                case u:
                    c.isDirectCanvas && (i = AppMobi.context.getPlaybackTimeSound(this.src))
            }
            return t && (i *= this.playbackRate), !this.looping && e < i && (i = e), i
        }, nt.prototype.isPlaying = function() {
            return !(this.is_paused || this.fresh || this.stopped || this.hasEnded())
        }, nt.prototype.shouldSave = function() {
            return !this.fresh && !this.stopped && !this.hasEnded()
        }, nt.prototype.setVolume = function(t) {
            this.volume = t, this.updateVolume()
        }, nt.prototype.updateVolume = function() {
            var t = this.volume * T;
            switch (isFinite(t) || (t = 0), this.myapi) {
                case o:
                    void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t);
                    break;
                case h:
                    this.buffer.myapi === h ? this.gainNode.gain.value = t * this.mutevol : void 0 !== this.instanceObject.volume && this.instanceObject.volume !== t && (this.instanceObject.volume = t)
            }
        }, nt.prototype.getVolume = function() {
            return this.volume
        }, nt.prototype.doSetMuted = function(t) {
            switch (this.myapi) {
                case o:
                    this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t);
                    break;
                case h:
                    this.buffer.myapi === h ? (this.mutevol = t ? 0 : 1, this.gainNode.gain.value = T * this.volume * this.mutevol) : this.instanceObject.muted !== !!t && (this.instanceObject.muted = !!t)
            }
        }, nt.prototype.setMuted = function(t) {
            this.is_muted = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, nt.prototype.setSilent = function(t) {
            this.is_silent = !!t, this.doSetMuted(this.is_muted || this.is_silent)
        }, nt.prototype.setLooping = function(t) {
            switch (this.looping = t, this.myapi) {
                case o:
                case h:
                    this.instanceObject.loop !== !!t && (this.instanceObject.loop = !!t);
                    break;
                case l:
                    break;
                case u:
                    c.isDirectCanvas && AppMobi.context.setLoopingSound(this.src, t)
            }
        }, nt.prototype.setPlaybackRate = function(t) {
            this.playbackRate = t, this.updatePlaybackRate()
        }, nt.prototype.updatePlaybackRate = function() {
            var t = this.playbackRate;
            switch (this.isTimescaled && (t *= c.timescale), this.myapi) {
                case o:
                    this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t);
                    break;
                case h:
                    this.buffer.myapi === h ? this.instanceObject.playbackRate.value !== t && (this.instanceObject.playbackRate.value = t) : this.instanceObject.playbackRate !== t && (this.instanceObject.playbackRate = t)
            }
        }, nt.prototype.setSuspended = function(t) {
            switch (this.myapi) {
                case o:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.instanceObject.play(), this.resume_me = !1);
                    break;
                case h:
                    t ? this.isPlaying() ? (this.resume_me = !0, this.buffer.myapi === h ? (this.resume_position = this.getPlaybackTime(!0), this.looping && (this.resume_position = this.resume_position % this.getDuration()), e(this.instanceObject)) : this.instanceObject.pause()) : this.resume_me = !1 : this.resume_me && (this.buffer.myapi === h ? (this.instanceObject = d.createBufferSource(), this.instanceObject.buffer = this.buffer.bufferObject, this.instanceObject.connect(this.gainNode), this.instanceObject.onended = this.onended_handler, this.active_buffer = this.instanceObject, this.instanceObject.loop = this.looping, this.gainNode.gain.value = T * this.volume * this.mutevol, this.updatePlaybackRate(), this.startTime = (this.isTimescaled ? c.kahanTime.sum : c.wallTime.sum) - this.resume_position / (this.playbackRate || .001), z(this.instanceObject, this.resume_position, this.getDuration())) : this.instanceObject.play(), this.resume_me = !1);
                    break;
                case l:
                    t ? this.isPlaying() ? (this.instanceObject.pause(), this.resume_me = !0) : this.resume_me = !1 : this.resume_me && (this.resume_me = !1, this.instanceObject.play())
            }
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, c = this.runtime, (n = this).listenerTracker = null, this.listenerZ = -600, this.runtime.isWKWebView && (L = !0), !(this.runtime.isiOS || this.runtime.isAndroid && (this.runtime.isChrome || this.runtime.isAndroidStockBrowser)) || this.runtime.isCrosswalk || this.runtime.isDomFree || this.runtime.isAmazonWebApp || L || (E = !0), d = null, "undefined" != typeof AudioContext ? (p = h, d = new AudioContext) : "undefined" != typeof webkitAudioContext && (p = h, d = new webkitAudioContext), this.runtime.isiOS && d && (d.close && d.close(), "undefined" != typeof AudioContext ? d = new AudioContext : "undefined" != typeof webkitAudioContext && (d = new webkitAudioContext));

            function e() {
                if ("suspended" === d.state && d.resume && d.resume(), !s && d.createBuffer) {
                    var t = d.createBuffer(1, 220, 22050),
                        e = d.createBufferSource();
                    e.buffer = t, e.connect(d.destination), W(e)
                }
            }
            this.runtime.isAndroid;
            if (E) {
                document.addEventListener("touchend", function() {
                    !it && d && (e(), it = !0),
                        function() {
                            var t, e, i;
                            if (E) {
                                if (!S)
                                    for (t = 0, e = R.length; t < e; ++t)(i = R[t]).stopped || i.is_paused || i.instanceObject.play();
                                cr.clearArray(R)
                            }
                        }()
                }, !0)
            } else L && document.addEventListener("touchend", function() {
                !it && d && (e(), it = !0)
            }, !0);
            if (p !== h && (this.runtime.isCordova && void 0 !== window.Media ? p = l : this.runtime.isAppMobi && (p = u)), p === l) {
                var i = (a = location.href).lastIndexOf("/"); - 1 < i && (a = a.substr(0, i + 1)), a = a.replace("file://", "")
            }
            if (this.runtime.isSafari && this.runtime.isWindows && "undefined" == typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.runtime.DestroyInstance(this);
            else {
                if (this.runtime.isDirectCanvas) m = this.runtime.isAndroid;
                else try {
                    m = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
                } catch (t) {
                    m = !1
                }
                p, this.runtime.tickMe(this)
            }
        };
        var i = t.Instance.prototype;
        i.onCreate = function() {
            this.runtime.audioInstance = this, y = this.properties[0], this.saveload = this.properties[1], this.playinbackground = 0 !== this.properties[2], this.nextPlayTime = 0, b = this.properties[3], w = this.properties[4], this.listenerZ = -this.properties[5], C = this.properties[6], A = this.properties[7], P = this.properties[8], this.listenerTracker = new et;
            var t = this.runtime.draw_width || this.runtime.width,
                e = this.runtime.draw_height || this.runtime.height;
            p === h && (d.listener.setPosition(t / 2, e / 2, this.listenerZ), d.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(t, e) {
                O && O.disconnect(), k = e.toLowerCase(), (O = d.createMediaStreamSource(t)).connect(N(k))
            }), this.runtime.addSuspendCallback(function(t) {
                n.onSuspend(t)
            });
            var i = this;
            this.runtime.addDestroyCallback(function(t) {
                i.onInstanceDestroyed(t)
            })
        }, i.onInstanceDestroyed = function(t) {
            var e, i, s;
            for (e = 0, i = x.length; e < i; e++)(s = x[e]).objectTracker && s.objectTracker.obj === t && (s.objectTracker.obj = null, s.pannerEnabled && s.isPlaying() && s.looping && s.stop());
            this.listenerTracker.obj === t && (this.listenerTracker.obj = null)
        }, i.saveToJSON = function() {
            var t, e, i, s, n, r, a, o = {
                    silent: S,
                    masterVolume: T,
                    listenerZ: this.listenerZ,
                    listenerUid: this.listenerTracker.hasObject() ? this.listenerTracker.obj.uid : -1,
                    playing: [],
                    effects: {}
                },
                h = o.playing;
            for (t = 0, e = x.length; t < e; t++)(i = x[t]).shouldSave() && 3 !== this.saveload && (i.is_music && 1 === this.saveload || !i.is_music && 2 === this.saveload || (a = i.getPlaybackTime(), i.looping && (a %= i.getDuration()), s = {
                tag: i.tag,
                buffersrc: i.buffer.src,
                is_music: i.is_music,
                playbackTime: a,
                volume: i.volume,
                looping: i.looping,
                muted: i.is_muted,
                playbackRate: i.playbackRate,
                paused: i.is_paused,
                resume_position: i.resume_position
            }, i.pannerEnabled && (s.pan = {}, r = s.pan, i.objectTracker && i.objectTracker.hasObject() ? r.objUid = i.objectTracker.obj.uid : (r.x = i.panX, r.y = i.panY, r.a = i.panAngle), r.ia = i.panConeInner, r.oa = i.panConeOuter, r.og = i.panConeOuterGain), h.push(s)));
            var c, l = o.effects;
            for (n in F)
                if (F.hasOwnProperty(n)) {
                    for (c = [], t = 0, e = F[n].length; t < e; t++) c.push({
                        type: F[n][t].type,
                        params: F[n][t].params
                    });
                    l[n] = c
                }
            return o
        };
        var rt = [];
        i.loadFromJSON = function(t) {
            var e = t.silent;
            T = t.masterVolume, this.listenerZ = t.listenerZ, this.listenerTracker.setObject(null);
            var i = t.listenerUid; - 1 !== i && (this.listenerTracker.loadUid = i, rt.push(this.listenerTracker));
            var s, n, r, a, o, h, c, l, u, p, d, f, g, m, y, _, v, b, w = t.playing;
            if (3 !== this.saveload)
                for (s = 0, n = x.length; s < n; s++)(d = x[s]).is_music && 1 === this.saveload || !d.is_music && 2 === this.saveload || d.stop();
            for (f in F)
                if (F.hasOwnProperty(f))
                    for (s = 0, n = F[f].length; s < n; s++) F[f][s].remove();
            for (f in cr.wipe(F), t.effects)
                if (t.effects.hasOwnProperty(f))
                    for (s = 0, n = (y = t.effects[f]).length; s < n; s++) switch (_ = y[s].type, v = y[s].params, _) {
                        case "filter":
                            ut(f, new U(v[0], v[1], v[2], v[3], v[4], v[5]));
                            break;
                        case "delay":
                            ut(f, new X(v[0], v[1], v[2]));
                            break;
                        case "convolve":
                            a = v[2], (p = this.getAudioBuffer(a, !1)).bufferObject ? b = new q(p.bufferObject, v[0], v[1], a) : (b = new q(null, v[0], v[1], a), p.normalizeWhenReady = v[0], p.convolveWhenReady = b), ut(f, b);
                            break;
                        case "flanger":
                            ut(f, new H(v[0], v[1], v[2], v[3], v[4]));
                            break;
                        case "phaser":
                            ut(f, new Y(v[0], v[1], v[2], v[3], v[4], v[5]));
                            break;
                        case "gain":
                            ut(f, new J(v[0]));
                            break;
                        case "tremolo":
                            ut(f, new Q(v[0], v[1]));
                            break;
                        case "ringmod":
                            ut(f, new Z(v[0], v[1]));
                            break;
                        case "distortion":
                            ut(f, new K(v[0], v[1], v[2], v[3], v[4]));
                            break;
                        case "compressor":
                            ut(f, new $(v[0], v[1], v[2], v[3], v[4]));
                            break;
                        case "analyser":
                            ut(f, new tt(v[0], v[1]))
                    }
            for (s = 0, n = w.length; s < n; s++) 3 !== this.saveload && (a = (r = w[s]).buffersrc, o = r.is_music, h = r.tag, c = r.playbackTime, l = r.looping, u = r.volume, m = (g = r.pan) && g.hasOwnProperty("objUid") ? g.objUid : -1, o && 1 === this.saveload || !o && 2 === this.saveload || ((d = this.getAudioInstance(a, h, o, l, u)) ? (d.resume_position = r.resume_position, d.setPannerEnabled(!!g), d.play(l, u, c), d.updatePlaybackRate(), d.updateVolume(), d.doSetMuted(d.is_muted || d.is_silent), r.paused && d.pause(), r.muted && d.setMuted(!0), d.doSetMuted(d.is_muted || d.is_silent), g && (-1 !== m ? (d.objectTracker = d.objectTracker || new et, d.objectTracker.loadUid = m, rt.push(d.objectTracker)) : d.setPan(g.x, g.y, g.a, g.ia, g.oa, g.og))) : ((p = this.getAudioBuffer(a, o)).seekWhenReady = c, p.pauseWhenReady = r.paused, g && (-1 !== m ? p.panWhenReady.push({
                objUid: m,
                ia: g.ia,
                oa: g.oa,
                og: g.og,
                thistag: h
            }) : p.panWhenReady.push({
                x: g.x,
                y: g.y,
                a: g.a,
                ia: g.ia,
                oa: g.oa,
                og: g.og,
                thistag: h
            })))));
            if (e && !S) {
                for (s = 0, n = x.length; s < n; s++) x[s].setSilent(!0);
                S = !0
            } else if (!e && S) {
                for (s = 0, n = x.length; s < n; s++) x[s].setSilent(!1);
                S = !1
            }
        }, i.afterLoad = function() {
            var t, e, i, s;
            for (t = 0, e = rt.length; t < e; t++) i = rt[t], s = this.runtime.getObjectByUID(i.loadUid), i.setObject(s), i.loadUid = -1, s && (_ = s.x, v = s.y);
            cr.clearArray(rt)
        }, i.onSuspend = function(t) {
            if (!this.playinbackground) {
                var e, i;
                for (!t && d && d.resume && (d.resume(), s = !1), e = 0, i = x.length; e < i; e++) x[e].setSuspended(t);
                t && d && d.suspend && (d.suspend(), s = !0)
            }
        }, i.tick = function() {
            var t, e, i, s, n, r, a = this.runtime.dt;
            for (t = 0, e = x.length; t < e; t++)(i = x[t]).tick(a), 0 !== y && i.updatePlaybackRate();
            for (s in F)
                if (F.hasOwnProperty(s))
                    for (t = 0, e = (n = F[s]).length; t < e; t++)(r = n[t]).tick && r.tick();
            p === h && this.listenerTracker.hasObject() && (this.listenerTracker.tick(a), _ = this.listenerTracker.obj.x, v = this.listenerTracker.obj.y, d.listener.setPosition(this.listenerTracker.obj.x, this.listenerTracker.obj.y, this.listenerZ))
        };
        var at = [];
        i.setPreloadList = function(t) {
            var e, i, s, n, r, a, o = 0;
            for (e = 0, i = t.length; e < i; ++e) n = (s = t[e])[0], r = 2 * s[1], ((a = 4 < n.length && ".ogg" === n.substr(n.length - 4)) && m || !a && !m) && (at.push({
                filename: n,
                size: r,
                obj: null
            }), o += r);
            return o
        }, i.startPreloads = function() {
            var t, e, i, s;
            for (t = 0, e = at.length; t < e; ++t) i = at[t], s = this.runtime.files_subfolder + i.filename, i.obj = this.getAudioBuffer(s, !1)
        }, i.getPreloadedSize = function() {
            var t, e, i, s = 0;
            for (t = 0, e = at.length; t < e; ++t)(i = at[t]).obj.isLoadedAndDecoded() || i.obj.hasFailedToLoad() || this.runtime.isDomFree || this.runtime.isAndroidStockBrowser ? s += i.size : i.obj.isLoaded() && (s += Math.floor(i.size / 2));
            return s
        }, i.releaseAllMusicBuffers = function() {
            var t, e, i, s;
            for (i = t = 0, e = f.length; t < e; ++t) s = f[t], (f[i] = s).is_music ? s.release() : ++i;
            f.length = i
        }, i.getAudioBuffer = function(t, e, i) {
            var s, n, r, a = null;
            for (s = 0, n = f.length; s < n; s++)
                if ((r = f[s]).src === t) {
                    a = r;
                    break
                }
            return a || i || (L && e && this.releaseAllMusicBuffers(), a = new st(t, e), f.push(a)), a
        }, i.getAudioInstance = function(t, e, i, s, n) {
            var r, a, o;
            for (r = 0, a = x.length; r < a; r++)
                if ((o = x[r]).src === t && (o.canBeRecycled() || i)) return o.tag = e, o;
            var h = this.getAudioBuffer(t, i);
            return h.bufferObject ? (o = new nt(h, e), x.push(o), o) : ("<preload>" !== e && (h.playTagWhenReady = e, h.loopWhenReady = s, h.volumeWhenReady = n), null)
        };
        var ot = [];

        function ht(t, e) {
            var i = t.isPlaying() ? 1 : 0,
                s = e.isPlaying() ? 1 : 0;
            return i == s ? 0 : i < s ? 1 : -1
        }

        function ct(t, e) {
            if (cr.clearArray(ot), !t.length) return !g || g.hasEnded() ? void 0 : (cr.clearArray(ot), void(ot[0] = g));
            var i, s, n;
            for (i = 0, s = x.length; i < s; i++) n = x[i], cr.equals_nocase(t, n.tag) && ot.push(n);
            e && ot.sort(ht)
        }

        function lt(t) {
            var e, i, s, n, r = d.destination;
            if (F.hasOwnProperty(t) && (s = F[t]).length)
                for (r = s[0].getInputNode(), e = 0, i = s.length; e < i; e++) n = s[e], e + 1 === i ? n.connectTo(d.destination) : n.connectTo(s[e + 1].getInputNode());
            for (ct(t), e = 0, i = ot.length; e < i; e++) ot[e].reconnect(r);
            O && k === t && (O.disconnect(), O.connect(r))
        }

        function ut(t, e) {
            F.hasOwnProperty(t) ? F[t].push(e) : F[t] = [e], lt(t)
        }

        function pt() {}

        function dt() {}

        function ft() {}

        function gt(t, e) {
            var i = null;
            return F.hasOwnProperty(t) && (i = F[t]), i && 0 <= e && e < i.length && i[e].freqBins ? i[e] : null
        }
        pt.prototype.OnEnded = function(t) {
            return cr.equals_nocase(r, t)
        }, pt.prototype.PreloadsComplete = function() {
            var t, e;
            for (t = 0, e = f.length; t < e; t++)
                if (!f[t].isLoadedAndDecoded() && !f[t].hasFailedToLoad()) return !1;
            return !0
        }, pt.prototype.AdvancedAudioSupported = function() {
            return p === h
        }, pt.prototype.IsSilent = function() {
            return S
        }, pt.prototype.IsAnyPlaying = function() {
            var t, e;
            for (t = 0, e = x.length; t < e; t++)
                if (x[t].isPlaying()) return !0;
            return !1
        }, pt.prototype.IsTagPlaying = function(t) {
            var e, i;
            for (ct(t), e = 0, i = ot.length; e < i; e++)
                if (ot[e].isPlaying()) return !0;
            return !1
        }, t.cnds = new pt, dt.prototype.Play = function(t, e, i, s) {
            if (!S) {
                var n = I(i),
                    r = t[1],
                    a = this.runtime.files_subfolder + t[0] + (m ? ".ogg" : ".m4a");
                (g = this.getAudioInstance(a, s, r, 0 !== e, n)) && (g.setPannerEnabled(!1), g.play(0 !== e, n, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, dt.prototype.PlayAtPosition = function(t, e, i, s, n, r, a, o, h, c) {
            if (!S) {
                var l = I(i),
                    u = t[1],
                    p = this.runtime.files_subfolder + t[0] + (m ? ".ogg" : ".m4a");
                if (g = this.getAudioInstance(p, c, u, 0 !== e, l)) g.setPannerEnabled(!0), g.setPan(s, n, r, a, o, I(h)), g.play(0 !== e, l, 0, this.nextPlayTime), this.nextPlayTime = 0;
                else this.getAudioBuffer(p, u).panWhenReady.push({
                    x: s,
                    y: n,
                    a: r,
                    ia: a,
                    oa: o,
                    og: I(h),
                    thistag: c
                })
            }
        }, dt.prototype.PlayAtObject = function(t, e, i, s, n, r, a, o) {
            if (!S && s) {
                var h = s.getFirstPicked();
                if (h) {
                    var c = I(i),
                        l = t[1],
                        u = this.runtime.files_subfolder + t[0] + (m ? ".ogg" : ".m4a");
                    if (g = this.getAudioInstance(u, o, l, 0 !== e, c)) {
                        g.setPannerEnabled(!0);
                        var p = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), _, v, !0),
                            d = cr.rotatePtAround(h.x, h.y, -h.layer.getAngle(), _, v, !1);
                        g.setPan(p, d, cr.to_degrees(h.angle - h.layer.getAngle()), n, r, I(a)), g.setObject(h), g.play(0 !== e, c, 0, this.nextPlayTime), this.nextPlayTime = 0
                    } else {
                        this.getAudioBuffer(u, l).panWhenReady.push({
                            obj: h,
                            ia: n,
                            oa: r,
                            og: I(a),
                            thistag: o
                        })
                    }
                }
            }
        }, dt.prototype.PlayByName = function(t, e, i, s, n) {
            if (!S) {
                var r = I(s),
                    a = 1 === t,
                    o = this.runtime.files_subfolder + e.toLowerCase() + (m ? ".ogg" : ".m4a");
                (g = this.getAudioInstance(o, n, a, 0 !== i, r)) && (g.setPannerEnabled(!1), g.play(0 !== i, r, 0, this.nextPlayTime), this.nextPlayTime = 0)
            }
        }, dt.prototype.PlayAtPositionByName = function(t, e, i, s, n, r, a, o, h, c, l) {
            if (!S) {
                var u = I(s),
                    p = 1 === t,
                    d = this.runtime.files_subfolder + e.toLowerCase() + (m ? ".ogg" : ".m4a");
                if (g = this.getAudioInstance(d, l, p, 0 !== i, u)) g.setPannerEnabled(!0), g.setPan(n, r, a, o, h, I(c)), g.play(0 !== i, u, 0, this.nextPlayTime), this.nextPlayTime = 0;
                else this.getAudioBuffer(d, p).panWhenReady.push({
                    x: n,
                    y: r,
                    a: a,
                    ia: o,
                    oa: h,
                    og: I(c),
                    thistag: l
                })
            }
        }, dt.prototype.PlayAtObjectByName = function(t, e, i, s, n, r, a, o, h) {
            if (!S && n) {
                var c = n.getFirstPicked();
                if (c) {
                    var l = I(s),
                        u = 1 === t,
                        p = this.runtime.files_subfolder + e.toLowerCase() + (m ? ".ogg" : ".m4a");
                    if (g = this.getAudioInstance(p, h, u, 0 !== i, l)) {
                        g.setPannerEnabled(!0);
                        var d = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), _, v, !0),
                            f = cr.rotatePtAround(c.x, c.y, -c.layer.getAngle(), _, v, !1);
                        g.setPan(d, f, cr.to_degrees(c.angle - c.layer.getAngle()), r, a, I(o)), g.setObject(c), g.play(0 !== i, l, 0, this.nextPlayTime), this.nextPlayTime = 0
                    } else {
                        this.getAudioBuffer(p, u).panWhenReady.push({
                            obj: c,
                            ia: r,
                            oa: a,
                            og: I(o),
                            thistag: h
                        })
                    }
                }
            }
        }, dt.prototype.SetLooping = function(t, e) {
            var i, s;
            for (ct(t), i = 0, s = ot.length; i < s; i++) ot[i].setLooping(0 === e)
        }, dt.prototype.SetMuted = function(t, e) {
            var i, s;
            for (ct(t), i = 0, s = ot.length; i < s; i++) ot[i].setMuted(0 === e)
        }, dt.prototype.SetVolume = function(t, e) {
            ct(t);
            var i, s, n = I(e);
            for (i = 0, s = ot.length; i < s; i++) ot[i].setVolume(n)
        }, dt.prototype.Preload = function(t) {
            if (!S) {
                var e = t[1],
                    i = this.runtime.files_subfolder + t[0] + (m ? ".ogg" : ".m4a");
                p !== u ? p !== l && this.getAudioInstance(i, "<preload>", e, !1) : this.runtime.isDirectCanvas ? AppMobi.context.loadSound(i) : AppMobi.player.loadSound(i)
            }
        }, dt.prototype.PreloadByName = function(t, e) {
            if (!S) {
                var i = 1 === t,
                    s = this.runtime.files_subfolder + e.toLowerCase() + (m ? ".ogg" : ".m4a");
                p !== u ? p !== l && this.getAudioInstance(s, "<preload>", i, !1) : this.runtime.isDirectCanvas ? AppMobi.context.loadSound(s) : AppMobi.player.loadSound(s)
            }
        }, dt.prototype.SetPlaybackRate = function(t, e) {
            var i, s;
            for (ct(t), e < 0 && (e = 0), i = 0, s = ot.length; i < s; i++) ot[i].setPlaybackRate(e)
        }, dt.prototype.Stop = function(t) {
            var e, i;
            for (ct(t), e = 0, i = ot.length; e < i; e++) ot[e].stop()
        }, dt.prototype.StopAll = function() {
            var t, e;
            for (t = 0, e = x.length; t < e; t++) x[t].stop()
        }, dt.prototype.SetPaused = function(t, e) {
            var i, s;
            for (ct(t), i = 0, s = ot.length; i < s; i++) 0 === e ? ot[i].pause() : ot[i].resume()
        }, dt.prototype.Seek = function(t, e) {
            var i, s;
            for (ct(t), i = 0, s = ot.length; i < s; i++) ot[i].seek(e)
        }, dt.prototype.SetSilent = function(t) {
            var e, i;
            if (2 === t && (t = S ? 1 : 0), 0 !== t || S) {
                if (1 === t && S) {
                    for (e = 0, i = x.length; e < i; e++) x[e].setSilent(!1);
                    S = !1
                }
            } else {
                for (e = 0, i = x.length; e < i; e++) x[e].setSilent(!0);
                S = !0
            }
        }, dt.prototype.SetMasterVolume = function(t) {
            var e, i;
            for (T = I(t), e = 0, i = x.length; e < i; e++) x[e].updateVolume()
        }, dt.prototype.AddFilterEffect = function(t, e, i, s, n, r, a) {
            p !== h || e < 0 || G.length <= e || !d.createBiquadFilter || ((a /= 100) < 0 && (a = 0), 1 < a && (a = 1), ut(t = t.toLowerCase(), new U(e, i, s, n, r, a)))
        }, dt.prototype.AddDelayEffect = function(t, e, i, s) {
            p === h && ((s /= 100) < 0 && (s = 0), 1 < s && (s = 1), ut(t = t.toLowerCase(), new X(e, I(i), s)))
        }, dt.prototype.AddFlangerEffect = function(t, e, i, s, n, r) {
            p === h && d.createOscillator && ((r /= 100) < 0 && (r = 0), 1 < r && (r = 1), ut(t = t.toLowerCase(), new H(e / 1e3, i / 1e3, s, n / 100, r)))
        }, dt.prototype.AddPhaserEffect = function(t, e, i, s, n, r, a) {
            p === h && d.createOscillator && ((a /= 100) < 0 && (a = 0), 1 < a && (a = 1), ut(t = t.toLowerCase(), new Y(e, i, s, n, r, a)))
        }, dt.prototype.AddConvolutionEffect = function(t, e, i, s) {
            if (p === h && d.createConvolver) {
                var n, r = 0 === i,
                    a = this.runtime.files_subfolder + e[0] + (m ? ".ogg" : ".m4a"),
                    o = this.getAudioBuffer(a, !1);
                t = t.toLowerCase(), (s /= 100) < 0 && (s = 0), 1 < s && (s = 1), o.bufferObject ? n = new q(o.bufferObject, r, s, a) : (n = new q(null, r, s, a), o.normalizeWhenReady = r, o.convolveWhenReady = n), ut(t, n)
            }
        }, dt.prototype.AddGainEffect = function(t, e) {
            p === h && ut(t = t.toLowerCase(), new J(I(e)))
        }, dt.prototype.AddMuteEffect = function(t) {
            p === h && ut(t = t.toLowerCase(), new J(0))
        }, dt.prototype.AddTremoloEffect = function(t, e, i) {
            p === h && d.createOscillator && ((i /= 100) < 0 && (i = 0), 1 < i && (i = 1), ut(t = t.toLowerCase(), new Q(e, i)))
        }, dt.prototype.AddRingModEffect = function(t, e, i) {
            p === h && d.createOscillator && ((i /= 100) < 0 && (i = 0), 1 < i && (i = 1), ut(t = t.toLowerCase(), new Z(e, i)))
        }, dt.prototype.AddDistortionEffect = function(t, e, i, s, n, r) {
            p === h && d.createWaveShaper && ((r /= 100) < 0 && (r = 0), 1 < r && (r = 1), ut(t = t.toLowerCase(), new K(e, i, s, n, r)))
        }, dt.prototype.AddCompressorEffect = function(t, e, i, s, n, r) {
            p === h && d.createDynamicsCompressor && ut(t = t.toLowerCase(), new $(e, i, s, n / 1e3, r / 1e3))
        }, dt.prototype.AddAnalyserEffect = function(t, e, i) {
            p === h && ut(t = t.toLowerCase(), new tt(e, i))
        }, dt.prototype.RemoveEffects = function(t) {
            var e, i, s;
            if (p === h && (t = t.toLowerCase(), F.hasOwnProperty(t) && (s = F[t]).length)) {
                for (e = 0, i = s.length; e < i; e++) s[e].remove();
                cr.clearArray(s), lt(t)
            }
        }, dt.prototype.SetEffectParameter = function(t, e, i, s, n, r) {
            var a;
            p === h && (t = t.toLowerCase(), e = Math.floor(e), F.hasOwnProperty(t) && (a = F[t], e < 0 || e >= a.length || a[e].setParam(i, s, n, r)))
        }, dt.prototype.SetListenerObject = function(t) {
            if (t && p === h) {
                var e = t.getFirstPicked();
                e && (this.listenerTracker.setObject(e), _ = e.x, v = e.y)
            }
        }, dt.prototype.SetListenerZ = function(t) {
            this.listenerZ = t
        }, dt.prototype.ScheduleNextPlay = function(t) {
            d && (this.nextPlayTime = t)
        }, dt.prototype.UnloadAudio = function(t) {
            var e = t[1],
                i = this.runtime.files_subfolder + t[0] + (m ? ".ogg" : ".m4a"),
                s = this.getAudioBuffer(i, e, !0);
            s && (s.release(), cr.arrayFindRemove(f, s))
        }, dt.prototype.UnloadAudioByName = function(t, e) {
            var i = 1 === t,
                s = this.runtime.files_subfolder + e.toLowerCase() + (m ? ".ogg" : ".m4a"),
                n = this.getAudioBuffer(s, i, !0);
            n && (n.release(), cr.arrayFindRemove(f, n))
        }, dt.prototype.UnloadAll = function() {
            var t, e;
            for (t = 0, e = f.length; t < e; ++t) f[t].release();
            cr.clearArray(f)
        }, t.acts = new dt, ft.prototype.Duration = function(t, e) {
            ct(e, !0), ot.length ? t.set_float(ot[0].getDuration()) : t.set_float(0)
        }, ft.prototype.PlaybackTime = function(t, e) {
            ct(e, !0), ot.length ? t.set_float(ot[0].getPlaybackTime(!0)) : t.set_float(0)
        }, ft.prototype.Volume = function(t, e) {
            if (ct(e, !0), ot.length) {
                var i = ot[0].getVolume();
                t.set_float(B(i))
            } else t.set_float(0)
        }, ft.prototype.MasterVolume = function(t) {
            t.set_float(B(T))
        }, ft.prototype.EffectCount = function(t, e) {
            e = e.toLowerCase();
            var i = null;
            F.hasOwnProperty(e) && (i = F[e]), t.set_int(i ? i.length : 0)
        }, ft.prototype.AnalyserFreqBinCount = function(t, e, i) {
            var s = gt(e = e.toLowerCase(), i = Math.floor(i));
            t.set_int(s ? s.node.frequencyBinCount : 0)
        }, ft.prototype.AnalyserFreqBinAt = function(t, e, i, s) {
            e = e.toLowerCase(), i = Math.floor(i), s = Math.floor(s);
            var n = gt(e, i);
            n ? s < 0 || s >= n.node.frequencyBinCount ? t.set_float(0) : t.set_float(n.freqBins[s]) : t.set_float(0)
        }, ft.prototype.AnalyserPeakLevel = function(t, e, i) {
            var s = gt(e = e.toLowerCase(), i = Math.floor(i));
            s ? t.set_float(s.peak) : t.set_float(0)
        }, ft.prototype.AnalyserRMSLevel = function(t, e, i) {
            var s = gt(e = e.toLowerCase(), i = Math.floor(i));
            s ? t.set_float(s.rms) : t.set_float(0)
        }, ft.prototype.SampleRate = function(t) {
            t.set_int(d ? d.sampleRate : 0)
        }, ft.prototype.CurrentTime = function(t) {
            t.set_float(d ? d.currentTime : cr.performance_now())
        }, t.exps = new ft
    }(), cr.plugins_.Browser = function(t) {
        this.runtime = t
    },
    function() {
        var pluginProto = cr.plugins_.Browser.prototype;
        pluginProto.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var typeProto = pluginProto.Type.prototype;
        typeProto.onCreate = function() {};
        var offlineScriptReady = !1,
            browserPluginReady = !1;
        document.addEventListener("DOMContentLoaded", function() {
            if (window.C2_RegisterSW && navigator.serviceWorker) {
                var t = document.createElement("script");
                t.onload = function() {
                    offlineScriptReady = !0, checkReady()
                }, t.src = "offlineClient.js", document.head.appendChild(t)
            }
        });
        var browserInstance = null;

        function checkReady() {
            offlineScriptReady && browserPluginReady && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(t) {
                browserInstance.onSWMessage(t)
            })
        }
        typeProto.onAppBegin = function() {
            browserPluginReady = !0, checkReady()
        }, pluginProto.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var instanceProto = pluginProto.Instance.prototype;
        instanceProto.onCreate = function() {
            var e = this;
            window.addEventListener("resize", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnResize, e)
            }), browserInstance = this, void 0 !== navigator.onLine && (window.addEventListener("online", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOnline, e)
            }), window.addEventListener("offline", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOffline, e)
            })), void 0 !== window.applicationCache && (window.applicationCache.addEventListener("updateready", function() {
                e.runtime.loadingprogress = 1, e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, e)
            }), window.applicationCache.addEventListener("progress", function(t) {
                e.runtime.loadingprogress = t.loaded / t.total || 0
            })), this.runtime.isDirectCanvas || (document.addEventListener("appMobi.device.update.available", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, e)
            }), document.addEventListener("backbutton", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e)
            }), document.addEventListener("menubutton", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, e)
            }), document.addEventListener("searchbutton", function() {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnSearchButton, e)
            }), document.addEventListener("tizenhwkey", function(t) {
                switch (t.keyName) {
                    case "back":
                        e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e) || window.tizen && window.tizen.application.getCurrentApplication().exit();
                        break;
                    case "menu":
                        e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnMenuButton, e) || t.preventDefault()
                }
            })), this.runtime.isWindows10 && "undefined" != typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(t) {
                e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e) && (t.handled = !0)
            }) : this.runtime.isWinJS && WinJS.Application && (WinJS.Application.onbackclick = function(t) {
                return !!e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnBackButton, e)
            }), this.runtime.addSuspendCallback(function(t) {
                t ? e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageHidden, e) : e.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnPageVisible, e)
            }), this.is_arcade = void 0 !== window.is_scirra_arcade
        }, instanceProto.onSWMessage = function(t) {
            var e = t.data.type;
            "downloading-update" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateFound, this) : "update-ready" === e || "update-pending" === e ? this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnUpdateReady, this) : "offline-ready" === e && this.runtime.trigger(cr.plugins_.Browser.prototype.cnds.OnOfflineReady, this)
        };
        var batteryManager = null,
            loadedBatteryManager = !1;

        function maybeLoadBatteryManager() {
            if (!loadedBatteryManager && navigator.getBattery) {
                var t = navigator.getBattery();
                loadedBatteryManager = !0, t && t.then(function(t) {
                    batteryManager = t
                })
            }
        }

        function Cnds() {}

        function Acts() {}
        Cnds.prototype.CookiesEnabled = function() {
            return !!navigator && navigator.cookieEnabled
        }, Cnds.prototype.IsOnline = function() {
            return !!navigator && navigator.onLine
        }, Cnds.prototype.HasJava = function() {
            return !!navigator && navigator.javaEnabled()
        }, Cnds.prototype.OnOnline = function() {
            return !0
        }, Cnds.prototype.OnOffline = function() {
            return !0
        }, Cnds.prototype.IsDownloadingUpdate = function() {
            return void 0 !== window.applicationCache && window.applicationCache.status === window.applicationCache.DOWNLOADING
        }, Cnds.prototype.OnUpdateReady = function() {
            return !0
        }, Cnds.prototype.PageVisible = function() {
            return !this.runtime.isSuspended
        }, Cnds.prototype.OnPageVisible = function() {
            return !0
        }, Cnds.prototype.OnPageHidden = function() {
            return !0
        }, Cnds.prototype.OnResize = function() {
            return !0
        }, Cnds.prototype.IsFullscreen = function() {
            return !!(document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || this.runtime.isNodeFullscreen)
        }, Cnds.prototype.OnBackButton = function() {
            return !0
        }, Cnds.prototype.OnMenuButton = function() {
            return !0
        }, Cnds.prototype.OnSearchButton = function() {
            return !0
        }, Cnds.prototype.IsMetered = function() {
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            return !!t && !!t.metered
        }, Cnds.prototype.IsCharging = function() {
            var t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            return t ? !!t.charging : (maybeLoadBatteryManager(), !batteryManager || !!batteryManager.charging)
        }, Cnds.prototype.IsPortraitLandscape = function(t) {
            return (window.innerWidth <= window.innerHeight ? 0 : 1) === t
        }, Cnds.prototype.SupportsFullscreen = function() {
            if (this.runtime.isNodeWebkit) return !0;
            var t = this.runtime.canvasdiv || this.runtime.canvas;
            return !!(t.requestFullscreen || t.mozRequestFullScreen || t.msRequestFullscreen || t.webkitRequestFullScreen)
        }, Cnds.prototype.OnUpdateFound = function() {
            return !0
        }, Cnds.prototype.OnUpdateReady = function() {
            return !0
        }, Cnds.prototype.OnOfflineReady = function() {
            return !0
        }, pluginProto.cnds = new Cnds, Acts.prototype.CallJio = function() {
            window.JioShowAds()
        }, Acts.prototype.Alert = function(t) {
            this.runtime.isDomFree || alert(t.toString())
        }, Acts.prototype.Close = function() {
            this.runtime.isCocoonJs ? CocoonJS.App.forceToFinish() : window.tizen ? window.tizen.application.getCurrentApplication().exit() : navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : this.is_arcade || this.runtime.isDomFree || window.close()
        }, Acts.prototype.Focus = function() {
            this.runtime.isNodeWebkit ? window.nwgui.Window.get().focus() : this.is_arcade || this.runtime.isDomFree || window.focus()
        }, Acts.prototype.Blur = function() {
            this.runtime.isNodeWebkit ? window.nwgui.Window.get().blur() : this.is_arcade || this.runtime.isDomFree || window.blur()
        }, Acts.prototype.GoBack = function() {
            navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : this.is_arcade || this.runtime.isDomFree || !window.back || window.back()
        }, Acts.prototype.GoForward = function() {
            this.is_arcade || this.runtime.isDomFree || !window.forward || window.forward()
        }, Acts.prototype.GoHome = function() {
            this.is_arcade || this.runtime.isDomFree || !window.home || window.home()
        }, Acts.prototype.GoToURL = function(t, e) {
            this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
                openExternal: !0
            }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || (2 !== e || this.is_arcade ? 1 !== e || this.is_arcade ? window.location = t : window.parent.location = t : window.top.location = t)
        }, Acts.prototype.GoToURLWindow = function(t, e) {
            this.runtime.isCocoonJs ? CocoonJS.App.openURL(t) : this.runtime.isEjecta ? ejecta.openURL(t) : this.runtime.isWinJS ? Windows.System.Launcher.launchUriAsync(new Windows.Foundation.Uri(t)) : navigator.app && navigator.app.loadUrl ? navigator.app.loadUrl(t, {
                openExternal: !0
            }) : this.runtime.isCordova ? window.open(t, "_system") : this.is_arcade || this.runtime.isDomFree || window.open(t, e)
        }, Acts.prototype.Reload = function() {
            this.is_arcade || this.runtime.isDomFree || window.location.reload()
        };
        var firstRequestFullscreen = !0,
            crruntime = null;

        function onFullscreenError(t) {
            console && console.warn && console.warn("Fullscreen request failed: ", t), crruntime.setSize(window.innerWidth, window.innerHeight)
        }
        Acts.prototype.RequestFullScreen = function(t) {
            if (this.runtime.isDomFree) cr.logexport("[Construct 2] Requesting fullscreen is not supported on this platform - the request has been ignored");
            else if (2 <= t && (t += 1), 6 === t && (t = 2), this.runtime.isNodeWebkit) this.runtime.isDebug ? debuggerFullscreen(!0) : !this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().enterFullscreen(), this.runtime.isNodeFullscreen = !0, this.runtime.fullscreen_scaling = 2 <= t ? t : 0);
            else {
                if (document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement || document.fullScreen || document.fullScreenElement) return;
                this.runtime.fullscreen_scaling = 2 <= t ? t : 0;
                var e = document.documentElement;
                firstRequestFullscreen && (firstRequestFullscreen = !1, crruntime = this.runtime, e.addEventListener("mozfullscreenerror", onFullscreenError), e.addEventListener("webkitfullscreenerror", onFullscreenError), e.addEventListener("MSFullscreenError", onFullscreenError), e.addEventListener("fullscreenerror", onFullscreenError)), e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.webkitRequestFullScreen && ("undefined" != typeof Element && void 0 !== Element.ALLOW_KEYBOARD_INPUT ? e.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : e.webkitRequestFullScreen())
            }
        }, Acts.prototype.CancelFullScreen = function() {
            this.runtime.isDomFree ? cr.logexport("[Construct 2] Exiting fullscreen is not supported on this platform - the request has been ignored") : this.runtime.isNodeWebkit ? this.runtime.isDebug ? debuggerFullscreen(!1) : this.runtime.isNodeFullscreen && window.nwgui && (window.nwgui.Window.get().leaveFullscreen(), this.runtime.isNodeFullscreen = !1) : document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
        }, Acts.prototype.Vibrate = function(t) {
            try {
                var e, i, s = t.split(",");
                for (e = 0, i = s.length; e < i; e++) s[e] = parseInt(s[e], 10);
                navigator.vibrate ? navigator.vibrate(s) : navigator.mozVibrate ? navigator.mozVibrate(s) : navigator.webkitVibrate ? navigator.webkitVibrate(s) : navigator.msVibrate && navigator.msVibrate(s)
            } catch (t) {}
        }, Acts.prototype.InvokeDownload = function(t, e) {
            var i = document.createElement("a");
            if (void 0 === i.download) window.open(t);
            else {
                var s = document.getElementsByTagName("body")[0];
                i.textContent = e, i.href = t, i.download = e, s.appendChild(i);
                var n = new MouseEvent("click");
                i.dispatchEvent(n), s.removeChild(i)
            }
        }, Acts.prototype.InvokeDownloadString = function(t, e, i) {
            var s = "data:" + e + "," + encodeURIComponent(t),
                n = document.createElement("a");
            if (void 0 === n.download) window.open(s);
            else {
                var r = document.getElementsByTagName("body")[0];
                n.textContent = i, n.href = s, n.download = i, r.appendChild(n);
                var a = new MouseEvent("click");
                n.dispatchEvent(a), r.removeChild(n)
            }
        }, Acts.prototype.ConsoleLog = function(t, e) {
            "undefined" != typeof console && (0 === t && console.log && console.log(e.toString()), 1 === t && console.warn && console.warn(e.toString()), 2 === t && console.error && console.error(e.toString()))
        }, Acts.prototype.ConsoleGroup = function(t) {
            console && console.group && console.group(t)
        }, Acts.prototype.ConsoleGroupEnd = function() {
            console && console.groupEnd && console.groupEnd()
        }, Acts.prototype.ExecJs = function(js_) {
            try {
                eval && eval(js_)
            } catch (t) {
                console && console.error && console.error("Error executing Javascript: ", t)
            }
        };
        var orientations = ["portrait", "landscape", "portrait-primary", "portrait-secondary", "landscape-primary", "landscape-secondary"];

        function Exps() {}
        Acts.prototype.LockOrientation = function(t) {
            if (!((t = Math.floor(t)) < 0 || t >= orientations.length)) {
                this.runtime.autoLockOrientation = !1;
                var e = orientations[t];
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(e) : screen.lockOrientation ? screen.lockOrientation(e) : screen.webkitLockOrientation ? screen.webkitLockOrientation(e) : screen.mozLockOrientation ? screen.mozLockOrientation(e) : screen.msLockOrientation && screen.msLockOrientation(e)
            }
        }, Acts.prototype.UnlockOrientation = function() {
            this.runtime.autoLockOrientation = !1, screen.orientation && screen.orientation.unlock ? screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
        }, pluginProto.acts = new Acts, Exps.prototype.URL = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.toString())
        }, Exps.prototype.Protocol = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.protocol)
        }, Exps.prototype.Domain = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hostname)
        }, Exps.prototype.PathName = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.pathname)
        }, Exps.prototype.Hash = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.hash)
        }, Exps.prototype.Referrer = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : document.referrer)
        }, Exps.prototype.Title = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : document.title)
        }, Exps.prototype.Name = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appName)
        }, Exps.prototype.Version = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.appVersion)
        }, Exps.prototype.Language = function(t) {
            navigator && navigator.language ? t.set_string(navigator.language) : t.set_string("")
        }, Exps.prototype.Platform = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.platform)
        }, Exps.prototype.Product = function(t) {
            navigator && navigator.product ? t.set_string(navigator.product) : t.set_string("")
        }, Exps.prototype.Vendor = function(t) {
            navigator && navigator.vendor ? t.set_string(navigator.vendor) : t.set_string("")
        }, Exps.prototype.UserAgent = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : navigator.userAgent)
        }, Exps.prototype.QueryString = function(t) {
            t.set_string(this.runtime.isDomFree ? "" : window.location.search)
        }, Exps.prototype.QueryParam = function(t, e) {
            if (this.runtime.isDomFree) t.set_string("");
            else {
                var i = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
                i ? t.set_string(decodeURIComponent(i[1].replace(/\+/g, " "))) : t.set_string("")
            }
        }, Exps.prototype.Bandwidth = function(t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? void 0 !== e.bandwidth ? t.set_float(e.bandwidth) : void 0 !== e.downlinkMax ? t.set_float(e.downlinkMax) : t.set_float(Number.POSITIVE_INFINITY) : t.set_float(Number.POSITIVE_INFINITY)
        }, Exps.prototype.ConnectionType = function(t) {
            var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            e ? t.set_string(e.type || "unknown") : t.set_string("unknown")
        }, Exps.prototype.BatteryLevel = function(t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.level) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.level) : t.set_float(1))
        }, Exps.prototype.BatteryTimeLeft = function(t) {
            var e = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
            e ? t.set_float(e.dischargingTime) : (maybeLoadBatteryManager(), batteryManager ? t.set_float(batteryManager.dischargingTime) : t.set_float(Number.POSITIVE_INFINITY))
        }, Exps.prototype.ExecJS = function(ret, js_) {
            if (eval) {
                var result = 0;
                try {
                    result = eval(js_)
                } catch (t) {
                    console && console.error && console.error("Error executing Javascript: ", t)
                }
                "number" == typeof result ? ret.set_any(result) : "string" == typeof result ? ret.set_any(result) : "boolean" == typeof result ? ret.set_any(result ? 1 : 0) : ret.set_any(0)
            } else ret.set_any(0)
        }, Exps.prototype.ScreenWidth = function(t) {
            t.set_int(screen.width)
        }, Exps.prototype.ScreenHeight = function(t) {
            t.set_int(screen.height)
        }, Exps.prototype.DevicePixelRatio = function(t) {
            t.set_float(this.runtime.devicePixelRatio)
        }, Exps.prototype.WindowInnerWidth = function(t) {
            t.set_int(window.innerWidth)
        }, Exps.prototype.WindowInnerHeight = function(t) {
            t.set_int(window.innerHeight)
        }, Exps.prototype.WindowOuterWidth = function(t) {
            t.set_int(window.outerWidth)
        }, Exps.prototype.WindowOuterHeight = function(t) {
            t.set_int(window.outerHeight)
        }, pluginProto.exps = new Exps
    }(), cr.plugins_.Function = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Function.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var e = t.Instance.prototype,
            i = [],
            s = -1;

        function n() {
            this.name = "", this.retVal = 0, this.params = []
        }

        function o() {
            return ++s === i.length && i.push(new n), i[s]
        }

        function r() {
            return s < 0 ? null : i[s]
        }

        function h() {
            s--
        }

        function a() {}

        function c() {}

        function l() {}
        e.onCreate = function() {
            "undefined" != typeof cr_is_preview;
            var a = this;
            window.c2_callFunction = function(t, e) {
                var i, s, n, r = o();
                if (r.name = t.toLowerCase(), r.retVal = 0, e)
                    for (r.params.length = e.length, i = 0, s = e.length; i < s; ++i) n = e[i], r.params[i] = "number" == typeof n || "string" == typeof n ? n : "boolean" == typeof n && n ? 1 : 0;
                else cr.clearArray(r.params);
                return a.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, a, r.name), h(), r.retVal
            }
        }, a.prototype.OnFunction = function(t) {
            var e = r();
            return !!e && cr.equals_nocase(t, e.name)
        }, a.prototype.CompareParam = function(t, e, i) {
            var s = r();
            return !!s && (!((t = cr.floor(t)) < 0 || t >= s.params.length) && cr.do_cmp(s.params[t], e, i))
        }, t.cnds = new a, c.prototype.CallFunction = function(t, e) {
            var i = o();
            i.name = t.toLowerCase(), i.retVal = 0, cr.shallowAssignArray(i.params, e);
            this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, i.name);
            h()
        }, c.prototype.SetReturnValue = function(t) {
            var e = r();
            e && (e.retVal = t)
        }, c.prototype.CallExpression = function(t) {}, t.acts = new c, l.prototype.ReturnValue = function(t) {
            var e = function() {
                if (!i.length) return null;
                var t = s + 1;
                return t >= i.length && (t = i.length - 1), i[t]
            }();
            e ? t.set_any(e.retVal) : t.set_int(0)
        }, l.prototype.ParamCount = function(t) {
            var e = r();
            e ? t.set_int(e.params.length) : t.set_int(0)
        }, l.prototype.Param = function(t, e) {
            e = cr.floor(e);
            var i = r();
            i && 0 <= e && e < i.params.length ? t.set_any(i.params[e]) : t.set_int(0)
        }, l.prototype.Call = function(t, e) {
            var i, s, n = o();
            for (n.name = e.toLowerCase(), n.retVal = 0, cr.clearArray(n.params), i = 2, s = arguments.length; i < s; i++) n.params.push(arguments[i]);
            this.runtime.trigger(cr.plugins_.Function.prototype.cnds.OnFunction, this, n.name);
            h(), t.set_any(n.retVal)
        }, t.exps = new l
    }(), cr.plugins_.Mouse = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Mouse.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, this.buttonMap = new Array(4), this.mouseXcanvas = 0, this.mouseYcanvas = 0, this.triggerButton = 0, this.triggerType = 0, this.triggerDir = 0, this.handled = !1
        };
        var e = t.Instance.prototype;
        e.onCreate = function() {
            var e = this;
            if (!this.runtime.isDomFree) {
                jQuery(document).mousemove(function(t) {
                    e.onMouseMove(t)
                }), jQuery(document).mousedown(function(t) {
                    e.onMouseDown(t)
                }), jQuery(document).mouseup(function(t) {
                    e.onMouseUp(t)
                }), jQuery(document).dblclick(function(t) {
                    e.onDoubleClick(t)
                });

                function t(t) {
                    e.onWheel(t)
                }
                document.addEventListener("mousewheel", t, !1), document.addEventListener("DOMMouseScroll", t, !1)
            }
        };
        var i = {
            left: 0,
            top: 0
        };

        function s() {}

        function n() {}
        e.onMouseMove = function(t) {
            var e = this.runtime.isDomFree ? i : jQuery(this.runtime.canvas).offset();
            this.mouseXcanvas = t.pageX - e.left, this.mouseYcanvas = t.pageY - e.top
        }, e.mouseInGame = function() {
            return 0 < this.runtime.fullscreen_mode || 0 <= this.mouseXcanvas && 0 <= this.mouseYcanvas && this.mouseXcanvas < this.runtime.width && this.mouseYcanvas < this.runtime.height
        }, e.onMouseDown = function(t) {
            this.mouseInGame() && (this.buttonMap[t.which] = !0, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnAnyClick, this), this.triggerButton = t.which - 1, this.triggerType = 0, this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnClick, this), this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnObjectClicked, this), this.runtime.isInUserInputEvent = !1)
        }, e.onMouseUp = function(t) {
            this.buttonMap[t.which] && (this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(), this.runtime.had_a_click = !0, this.buttonMap[t.which] = !1, this.runtime.isInUserInputEvent = !0, this.triggerButton = t.which - 1, this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnRelease, this), this.runtime.isInUserInputEvent = !1)
        }, e.onDoubleClick = function(t) {
            this.mouseInGame() && (t.preventDefault(), this.runtime.isInUserInputEvent = !0, this.triggerButton = t.which - 1, this.triggerType = 1, this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnClick, this), this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnObjectClicked, this), this.runtime.isInUserInputEvent = !1)
        }, e.onWheel = function(t) {
            var e = t.wheelDelta ? t.wheelDelta : t.detail ? -t.detail : 0;
            this.triggerDir = e < 0 ? 0 : 1, this.handled = !1, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnWheel, this), this.runtime.isInUserInputEvent = !1, this.handled && cr.isCanvasInputEvent(t) && t.preventDefault()
        }, e.onWindowBlur = function() {
            var t, e;
            for (t = 0, e = this.buttonMap.length; t < e; ++t) this.buttonMap[t] && (this.buttonMap[t] = !1, this.triggerButton = t - 1, this.runtime.trigger(cr.plugins_.Mouse.prototype.cnds.OnRelease, this))
        }, s.prototype.OnClick = function(t, e) {
            return t === this.triggerButton && e === this.triggerType
        }, s.prototype.OnAnyClick = function() {
            return !0
        }, s.prototype.IsButtonDown = function(t) {
            return this.buttonMap[t + 1]
        }, s.prototype.OnRelease = function(t) {
            return t === this.triggerButton
        }, s.prototype.IsOverObject = function(t) {
            var e = this.runtime.getCurrentCondition(),
                i = this.mouseXcanvas,
                s = this.mouseYcanvas;
            return cr.xor(this.runtime.testAndSelectCanvasPointOverlap(t, i, s, e.inverted), e.inverted)
        }, s.prototype.OnObjectClicked = function(t, e, i) {
            return t === this.triggerButton && e === this.triggerType && this.runtime.testAndSelectCanvasPointOverlap(i, this.mouseXcanvas, this.mouseYcanvas, !1)
        }, s.prototype.OnWheel = function(t) {
            return this.handled = !0, t === this.triggerDir
        }, t.cnds = new s;
        var r = null;

        function a() {}
        n.prototype.SetCursor = function(t) {
            if (!this.runtime.isDomFree) {
                var e = ["auto", "pointer", "text", "crosshair", "move", "help", "wait", "none"][t];
                r !== e && (r = e, document.body.style.cursor = e)
            }
        }, n.prototype.SetCursorSprite = function(t) {
            if (!this.runtime.isDomFree && !this.runtime.isMobile && t) {
                var e = t.getFirstPicked();
                if (e && e.curFrame) {
                    var i = e.curFrame;
                    if (r !== i) {
                        var s = "url(" + (r = i).getDataUri() + ") " + Math.round(i.hotspotX * i.width) + " " + Math.round(i.hotspotY * i.height) + ", auto";
                        document.body.style.cursor = "", document.body.style.cursor = s
                    }
                }
            }
        }, t.acts = new n, a.prototype.X = function(t, e) {
            var i, s, n, r, a;
            cr.is_undefined(e) ? (s = (i = this.runtime.getLayerByNumber(0)).scale, n = i.zoomRate, r = i.parallaxX, a = i.angle, i.scale = 1, i.zoomRate = 1, i.parallaxX = 1, i.angle = 0, t.set_float(i.canvasToLayer(this.mouseXcanvas, this.mouseYcanvas, !0)), i.scale = s, i.zoomRate = n, i.parallaxX = r, i.angle = a) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.mouseXcanvas, this.mouseYcanvas, !0)) : t.set_float(0)
        }, a.prototype.Y = function(t, e) {
            var i, s, n, r, a;
            cr.is_undefined(e) ? (s = (i = this.runtime.getLayerByNumber(0)).scale, n = i.zoomRate, r = i.parallaxY, a = i.angle, i.scale = 1, i.zoomRate = 1, i.parallaxY = 1, i.angle = 0, t.set_float(i.canvasToLayer(this.mouseXcanvas, this.mouseYcanvas, !1)), i.scale = s, i.zoomRate = n, i.parallaxY = r, i.angle = a) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.mouseXcanvas, this.mouseYcanvas, !1)) : t.set_float(0)
        }, a.prototype.AbsoluteX = function(t) {
            t.set_float(this.mouseXcanvas)
        }, a.prototype.AbsoluteY = function(t) {
            t.set_float(this.mouseYcanvas)
        }, t.exps = new a
    }(), cr.plugins_.Particles = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Particles.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;

        function i(t) {
            this.owner = t, this.active = !1, this.x = 0, this.y = 0, this.speed = 0, this.angle = 0, this.opacity = 1, this.grow = 0, this.size = 0, this.gs = 0, this.age = 0, cr.seal(this)
        }
        e.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.webGL_texture = null, this.runtime.waitForImageLoad(this.texture_img, this.texture_file))
        }, e.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, e.onRestoreWebGLContext = function() {
            !this.is_family && this.instances.length && (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)))
        }, e.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, e.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, e.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, i.prototype.init = function() {
            var t = this.owner;
            this.x = t.x - t.xrandom / 2 + Math.random() * t.xrandom, this.y = t.y - t.yrandom / 2 + Math.random() * t.yrandom, this.speed = t.initspeed - t.speedrandom / 2 + Math.random() * t.speedrandom, this.angle = t.angle - t.spraycone / 2 + Math.random() * t.spraycone, this.opacity = t.initopacity, this.size = t.initsize - t.sizerandom / 2 + Math.random() * t.sizerandom, this.grow = t.growrate - t.growrandom / 2 + Math.random() * t.growrandom, this.gs = 0, this.age = 0
        }, i.prototype.tick = function(t) {
            var e = this.owner;
            this.x += Math.cos(this.angle) * this.speed * t, this.y += Math.sin(this.angle) * this.speed * t, this.y += this.gs * t, this.speed += e.acc * t, this.size += this.grow * t, this.gs += e.g * t, this.age += t, this.size < 1 ? this.active = !1 : (0 !== e.lifeanglerandom && (this.angle += Math.random() * e.lifeanglerandom * t - e.lifeanglerandom * t / 2), 0 !== e.lifespeedrandom && (this.speed += Math.random() * e.lifespeedrandom * t - e.lifespeedrandom * t / 2), 0 !== e.lifeopacityrandom && (this.opacity += Math.random() * e.lifeopacityrandom * t - e.lifeopacityrandom * t / 2, this.opacity < 0 ? this.opacity = 0 : 1 < this.opacity && (this.opacity = 1)), e.destroymode <= 1 && this.age >= e.timeout && (this.active = !1), 2 === e.destroymode && this.speed <= 0 && (this.active = !1))
        }, i.prototype.draw = function(t) {
            var e = this.owner.opacity * this.opacity;
            if (0 !== e) {
                0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout), t.globalAlpha = e;
                var i = this.x - this.size / 2,
                    s = this.y - this.size / 2;
                this.owner.runtime.pixel_rounding && (i = i + .5 | 0, s = s + .5 | 0), t.drawImage(this.owner.type.texture_img, i, s, this.size, this.size)
            }
        }, i.prototype.drawGL = function(t) {
            var e = this.owner.opacity * this.opacity;
            0 === this.owner.destroymode && (e *= 1 - this.age / this.owner.timeout);
            var i = this.size,
                s = i * this.owner.particlescale,
                n = this.x - i / 2,
                r = this.y - i / 2;
            this.owner.runtime.pixel_rounding && (n = n + .5 | 0, r = r + .5 | 0), s < 1 || 0 === e || (s < t.minPointSize || s > t.maxPointSize ? (t.setOpacity(e), t.quad(n, r, n + i, r, n + i, r + i, n, r + i)) : t.point(this.x, this.y, s, e))
        }, i.prototype.left = function() {
            return this.x - this.size / 2
        }, i.prototype.right = function() {
            return this.x + this.size / 2
        }, i.prototype.top = function() {
            return this.y - this.size / 2
        }, i.prototype.bottom = function() {
            return this.y + this.size / 2
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var s = t.Instance.prototype,
            a = [];

        function n() {}

        function r() {}

        function o() {}
        s.onCreate = function() {
            var t = this.properties;
            if (this.rate = t[0], this.spraycone = cr.to_radians(t[1]), this.spraytype = t[2], this.spraying = !0, this.initspeed = t[3], this.initsize = t[4], this.initopacity = t[5] / 100, this.growrate = t[6], this.xrandom = t[7], this.yrandom = t[8], this.speedrandom = t[9], this.sizerandom = t[10], this.growrandom = t[11], this.acc = t[12], this.g = t[13], this.lifeanglerandom = t[14], this.lifespeedrandom = t[15], this.lifeopacityrandom = t[16], this.destroymode = t[17], this.timeout = t[18], this.particleCreateCounter = 0, this.particlescale = 1, this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, this.add_bbox_changed_callback(function(t) {
                    t.bbox.set(t.particleBoxLeft, t.particleBoxTop, t.particleBoxRight, t.particleBoxBottom), t.bquad.set_from_rect(t.bbox), t.bbox_changed = !1, t.update_collision_cell(), t.update_render_cell()
                }), this.recycled || (this.particles = []), this.runtime.tickMe(this), this.type.loadTextures(), 1 === this.spraytype)
                for (var e = 0; e < this.rate; e++) this.allocateParticle().opacity = 0;
            this.first_tick = !0
        }, s.saveToJSON = function() {
            var t, e, i, s = {
                    r: this.rate,
                    sc: this.spraycone,
                    st: this.spraytype,
                    s: this.spraying,
                    isp: this.initspeed,
                    isz: this.initsize,
                    io: this.initopacity,
                    gr: this.growrate,
                    xr: this.xrandom,
                    yr: this.yrandom,
                    spr: this.speedrandom,
                    szr: this.sizerandom,
                    grnd: this.growrandom,
                    acc: this.acc,
                    g: this.g,
                    lar: this.lifeanglerandom,
                    lsr: this.lifespeedrandom,
                    lor: this.lifeopacityrandom,
                    dm: this.destroymode,
                    to: this.timeout,
                    pcc: this.particleCreateCounter,
                    ft: this.first_tick,
                    p: []
                },
                n = s.p;
            for (t = 0, e = this.particles.length; t < e; t++) i = this.particles[t], n.push([i.x, i.y, i.speed, i.angle, i.opacity, i.grow, i.size, i.gs, i.age]);
            return s
        }, s.loadFromJSON = function(t) {
            var e, i, s, n;
            this.rate = t.r, this.spraycone = t.sc, this.spraytype = t.st, this.spraying = t.s, this.initspeed = t.isp, this.initsize = t.isz, this.initopacity = t.io, this.growrate = t.gr, this.xrandom = t.xr, this.yrandom = t.yr, this.speedrandom = t.spr, this.sizerandom = t.szr, this.growrandom = t.grnd, this.acc = t.acc, this.g = t.g, this.lifeanglerandom = t.lar, this.lifespeedrandom = t.lsr, this.lifeopacityrandom = t.lor, this.destroymode = t.dm, this.timeout = t.to, this.particleCreateCounter = t.pcc, this.first_tick = t.ft, a.push.apply(a, this.particles), cr.clearArray(this.particles);
            var r = t.p;
            for (e = 0, i = r.length; e < i; e++) s = this.allocateParticle(), n = r[e], s.x = n[0], s.y = n[1], s.speed = n[2], s.angle = n[3], s.opacity = n[4], s.grow = n[5], s.size = n[6], s.gs = n[7], s.age = n[8]
        }, s.onDestroy = function() {
            a.push.apply(a, this.particles), cr.clearArray(this.particles)
        }, s.allocateParticle = function() {
            var t;
            return a.length ? (t = a.pop()).owner = this : t = new i(this), this.particles.push(t), t.active = !0, t
        }, s.tick = function() {
            var t, e, i, s, n, r = this.runtime.getDt(this);
            if (0 === this.spraytype && this.spraying)
                for (this.particleCreateCounter += r * this.rate, s = cr.floor(this.particleCreateCounter), this.particleCreateCounter -= s, t = 0; t < s; t++)(i = this.allocateParticle()).init();
            for (this.particleBoxLeft = this.x, this.particleBoxTop = this.y, this.particleBoxRight = this.x, this.particleBoxBottom = this.y, n = t = 0, e = this.particles.length; t < e; t++) i = this.particles[t], this.particles[n] = i, this.runtime.redraw = !0, 1 === this.spraytype && this.first_tick && i.init(), i.tick(r), i.active ? (i.left() < this.particleBoxLeft && (this.particleBoxLeft = i.left()), i.right() > this.particleBoxRight && (this.particleBoxRight = i.right()), i.top() < this.particleBoxTop && (this.particleBoxTop = i.top()), i.bottom() > this.particleBoxBottom && (this.particleBoxBottom = i.bottom()), n++) : a.push(i);
            cr.truncateArray(this.particles, n), this.set_bbox_changed(), this.first_tick = !1, 1 === this.spraytype && 0 === this.particles.length && this.runtime.DestroyInstance(this)
        }, s.draw = function(t) {
            var e, i, s, n = this.layer;
            for (e = 0, i = this.particles.length; e < i; e++)(s = this.particles[e]).right() >= n.viewLeft && s.bottom() >= n.viewTop && s.left() <= n.viewRight && s.top() <= n.viewBottom && s.draw(t)
        }, s.drawGL = function(t) {
            this.particlescale = this.layer.getScale(), t.setTexture(this.type.webGL_texture);
            var e, i, s, n = this.layer;
            for (e = 0, i = this.particles.length; e < i; e++)(s = this.particles[e]).right() >= n.viewLeft && s.bottom() >= n.viewTop && s.left() <= n.viewRight && s.top() <= n.viewBottom && s.drawGL(t)
        }, n.prototype.IsSpraying = function() {
            return this.spraying
        }, t.cnds = new n, r.prototype.SetSpraying = function(t) {
            this.spraying = 0 !== t
        }, r.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, r.prototype.SetRate = function(t) {
            var e, i;
            if (this.rate = t, 1 === this.spraytype && this.first_tick)
                if (t < this.particles.length)
                    for (e = this.particles.length - t, i = 0; i < e; i++) a.push(this.particles.pop());
                else if (t > this.particles.length)
                for (e = t - this.particles.length, i = 0; i < e; i++) this.allocateParticle().opacity = 0
        }, r.prototype.SetSprayCone = function(t) {
            this.spraycone = cr.to_radians(t)
        }, r.prototype.SetInitSpeed = function(t) {
            this.initspeed = t
        }, r.prototype.SetInitSize = function(t) {
            this.initsize = t
        }, r.prototype.SetInitOpacity = function(t) {
            this.initopacity = t / 100
        }, r.prototype.SetGrowRate = function(t) {
            this.growrate = t
        }, r.prototype.SetXRandomiser = function(t) {
            this.xrandom = t
        }, r.prototype.SetYRandomiser = function(t) {
            this.yrandom = t
        }, r.prototype.SetSpeedRandomiser = function(t) {
            this.speedrandom = t
        }, r.prototype.SetSizeRandomiser = function(t) {
            this.sizerandom = t
        }, r.prototype.SetGrowRateRandomiser = function(t) {
            this.growrandom = t
        }, r.prototype.SetParticleAcc = function(t) {
            this.acc = t
        }, r.prototype.SetGravity = function(t) {
            this.g = t
        }, r.prototype.SetAngleRandomiser = function(t) {
            this.lifeanglerandom = t
        }, r.prototype.SetLifeSpeedRandomiser = function(t) {
            this.lifespeedrandom = t
        }, r.prototype.SetOpacityRandomiser = function(t) {
            this.lifeopacityrandom = t
        }, r.prototype.SetTimeout = function(t) {
            this.timeout = t
        }, t.acts = new r, o.prototype.ParticleCount = function(t) {
            t.set_int(this.particles.length)
        }, o.prototype.Rate = function(t) {
            t.set_float(this.rate)
        }, o.prototype.SprayCone = function(t) {
            t.set_float(cr.to_degrees(this.spraycone))
        }, o.prototype.InitSpeed = function(t) {
            t.set_float(this.initspeed)
        }, o.prototype.InitSize = function(t) {
            t.set_float(this.initsize)
        }, o.prototype.InitOpacity = function(t) {
            t.set_float(100 * this.initopacity)
        }, o.prototype.InitGrowRate = function(t) {
            t.set_float(this.growrate)
        }, o.prototype.XRandom = function(t) {
            t.set_float(this.xrandom)
        }, o.prototype.YRandom = function(t) {
            t.set_float(this.yrandom)
        }, o.prototype.InitSpeedRandom = function(t) {
            t.set_float(this.speedrandom)
        }, o.prototype.InitSizeRandom = function(t) {
            t.set_float(this.sizerandom)
        }, o.prototype.InitGrowRandom = function(t) {
            t.set_float(this.growrandom)
        }, o.prototype.ParticleAcceleration = function(t) {
            t.set_float(this.acc)
        }, o.prototype.Gravity = function(t) {
            t.set_float(this.g)
        }, o.prototype.ParticleAngleRandom = function(t) {
            t.set_float(this.lifeanglerandom)
        }, o.prototype.ParticleSpeedRandom = function(t) {
            t.set_float(this.lifespeedrandom)
        }, o.prototype.ParticleOpacityRandom = function(t) {
            t.set_float(this.lifeopacityrandom)
        }, o.prototype.Timeout = function(t) {
            t.set_float(this.timeout)
        }, t.exps = new o
    }(), cr.plugins_.Sprite = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Sprite.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;

        function l() {
            if (0 === this.datauri.length) {
                var t = document.createElement("canvas");
                t.width = this.width, t.height = this.height;
                var e = t.getContext("2d");
                this.spritesheeted ? e.drawImage(this.texture_img, this.offx, this.offy, this.width, this.height, 0, 0, this.width, this.height) : e.drawImage(this.texture_img, 0, 0, this.width, this.height), this.datauri = t.toDataURL("image/png")
            }
            return this.datauri
        }
        e.onCreate = function() {
            var t, e, i, s, n, r, a, o, h, c;
            if (!this.is_family)
                for (this.all_frames = [], this.has_loaded_textures = !1, t = 0, e = this.animations.length; t < e; t++) {
                    for (n = this.animations[t], (a = {}).name = n[0], a.speed = n[1], a.loop = n[2], a.repeatcount = n[3], a.repeatto = n[4], a.pingpong = n[5], a.sid = n[6], a.frames = [], i = 0, s = n[7].length; i < s; i++) r = n[7][i], (o = {}).texture_file = r[0], o.texture_filesize = r[1], o.offx = r[2], o.offy = r[3], o.width = r[4], o.height = r[5], o.duration = r[6], o.hotspotX = r[7], o.hotspotY = r[8], o.image_points = r[9], o.poly_pts = r[10], o.pixelformat = r[11], o.spritesheeted = 0 !== o.width, o.datauri = "", o.getDataUri = l, c = {
                        left: 0,
                        top: 0,
                        right: 1,
                        bottom: 1
                    }, o.sheetTex = c, o.webGL_texture = null, (h = this.runtime.findWaitingTexture(r[0])) ? o.texture_img = h : (o.texture_img = new Image, o.texture_img.cr_src = r[0], o.texture_img.cr_filesize = r[1], o.texture_img.c2webGL_texture = null, this.runtime.waitForImageLoad(o.texture_img, r[0])), cr.seal(o), a.frames.push(o), this.all_frames.push(o);
                    cr.seal(a), this.animations[t] = a
                }
        }, e.updateAllCurrentTexture = function() {
            var t, e, i;
            for (t = 0, e = this.instances.length; t < e; t++)(i = this.instances[t]).curWebGLTexture = i.curFrame.webGL_texture
        }, e.onLostWebGLContext = function() {
            if (!this.is_family) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).texture_img.c2webGL_texture = null, i.webGL_texture = null;
                this.has_loaded_textures = !1, this.updateAllCurrentTexture()
            }
        }, e.onRestoreWebGLContext = function() {
            if (!this.is_family && this.instances.length) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.updateAllCurrentTexture()
            }
        }, e.loadTextures = function() {
            if (!this.is_family && !this.has_loaded_textures && this.runtime.glwrap) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t)(i = this.all_frames[t]).webGL_texture = this.runtime.glwrap.loadTexture(i.texture_img, !1, this.runtime.linearSampling, i.pixelformat);
                this.has_loaded_textures = !0
            }
        }, e.unloadTextures = function() {
            if (!this.is_family && !this.instances.length && this.has_loaded_textures) {
                var t, e, i;
                for (t = 0, e = this.all_frames.length; t < e; ++t) i = this.all_frames[t], this.runtime.glwrap.deleteTexture(i.webGL_texture), i.webGL_texture = null;
                this.has_loaded_textures = !1
            }
        };
        var n = [];
        e.preloadCanvas2D = function(t) {
            var e, i, s;
            for (cr.clearArray(n), e = 0, i = this.all_frames.length; e < i; ++e) s = this.all_frames[e].texture_img, -1 === n.indexOf(s) && (t.drawImage(s, 0, 0), n.push(s))
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime;
            var e = this.type.animations[0].frames[0].poly_pts;
            this.recycled ? this.collision_poly.set_pts(e) : this.collision_poly = new cr.CollisionPoly(e)
        };
        var i = t.Instance.prototype;

        function s() {}
        i.onCreate = function() {
            this.visible = 0 === this.properties[0], this.isTicking = !1, this.inAnimTrigger = !1, this.collisionsEnabled = 0 !== this.properties[3], this.cur_animation = this.getAnimationByName(this.properties[1]) || this.type.animations[0], this.cur_frame = this.properties[2], this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1);
            var t, e, i, s, n, r, a, o, h = this.cur_animation.frames[this.cur_frame];
            for (this.collision_poly.set_pts(h.poly_pts), this.hotspotX = h.hotspotX, this.hotspotY = h.hotspotY, this.cur_anim_speed = this.cur_animation.speed, this.cur_anim_repeatto = this.cur_animation.repeatto, 1 === this.type.animations.length && 1 === this.type.animations[0].frames.length || 0 === this.cur_anim_speed || (this.runtime.tickMe(this), this.isTicking = !0), this.recycled ? this.animTimer.reset() : this.animTimer = new cr.KahanAdder, this.frameStart = this.getNowTime(), this.animPlaying = !0, this.animRepeats = 0, this.animForwards = !0, this.animTriggerName = "", this.changeAnimName = "", this.changeAnimFrom = 0, this.changeAnimFrame = -1, this.type.loadTextures(), t = 0, e = this.type.animations.length; t < e; t++)
                for (i = 0, s = (n = this.type.animations[t]).frames.length; i < s; i++) 0 === (r = n.frames[i]).width && (r.width = r.texture_img.width, r.height = r.texture_img.height), r.spritesheeted && (o = r.texture_img, (a = r.sheetTex).left = r.offx / o.width, a.top = r.offy / o.height, a.right = (r.offx + r.width) / o.width, a.bottom = (r.offy + r.height) / o.height, 0 === r.offx && 0 === r.offy && r.width === o.width && r.height === o.height && (r.spritesheeted = !1));
            this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture
        }, i.saveToJSON = function() {
            var t = {
                a: this.cur_animation.sid,
                f: this.cur_frame,
                cas: this.cur_anim_speed,
                fs: this.frameStart,
                ar: this.animRepeats,
                at: this.animTimer.sum,
                rt: this.cur_anim_repeatto
            };
            return this.animPlaying || (t.ap = this.animPlaying), this.animForwards || (t.af = this.animForwards), t
        }, i.loadFromJSON = function(t) {
            var e = this.getAnimationBySid(t.a);
            e && (this.cur_animation = e), this.cur_frame = t.f, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), this.cur_anim_speed = t.cas, this.frameStart = t.fs, this.animRepeats = t.ar, this.animTimer.reset(), this.animTimer.sum = t.at, this.animPlaying = !t.hasOwnProperty("ap") || t.ap, this.animForwards = !t.hasOwnProperty("af") || t.af, t.hasOwnProperty("rt") ? this.cur_anim_repeatto = t.rt : this.cur_anim_repeatto = this.cur_animation.repeatto, this.curFrame = this.cur_animation.frames[this.cur_frame], this.curWebGLTexture = this.curFrame.webGL_texture, this.collision_poly.set_pts(this.curFrame.poly_pts), this.hotspotX = this.curFrame.hotspotX, this.hotspotY = this.curFrame.hotspotY
        }, i.animationFinish = function(t) {
            this.cur_frame = t ? 0 : this.cur_animation.frames.length - 1, this.animPlaying = !1, this.animTriggerName = this.cur_animation.name, this.inAnimTrigger = !0, this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, this), this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnAnimFinished, this), this.inAnimTrigger = !1, this.animRepeats = 0
        }, i.getNowTime = function() {
            return this.animTimer.sum
        }, i.tick = function() {
            this.animTimer.add(this.runtime.getDt(this)), this.changeAnimName.length && this.doChangeAnim(), 0 <= this.changeAnimFrame && this.doChangeAnimFrame();
            var t, e = this.getNowTime(),
                i = this.cur_animation,
                s = i.frames[this.cur_frame],
                n = s.duration / this.cur_anim_speed;
            this.animPlaying && e >= this.frameStart + n && (this.animForwards ? this.cur_frame++ : this.cur_frame--, this.frameStart += n, this.cur_frame >= i.frames.length && (i.pingpong ? (this.animForwards = !1, this.cur_frame = i.frames.length - 2) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!1) : this.cur_frame = this.cur_anim_repeatto)), this.cur_frame < 0 && (i.pingpong ? (this.cur_frame = 1, this.animForwards = !0, i.loop || (this.animRepeats++, this.animRepeats >= i.repeatcount && this.animationFinish(!0))) : i.loop ? this.cur_frame = this.cur_anim_repeatto : (this.animRepeats++, this.animRepeats >= i.repeatcount ? this.animationFinish(!0) : this.cur_frame = this.cur_anim_repeatto)), this.cur_frame < 0 ? this.cur_frame = 0 : this.cur_frame >= i.frames.length && (this.cur_frame = i.frames.length - 1), e > this.frameStart + i.frames[this.cur_frame].duration / this.cur_anim_speed && (this.frameStart = e), t = i.frames[this.cur_frame], this.OnFrameChanged(s, t), this.runtime.redraw = !0)
        }, i.getAnimationByName = function(t) {
            var e, i, s;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                if (s = this.type.animations[e], cr.equals_nocase(s.name, t)) return s;
            return null
        }, i.getAnimationBySid = function(t) {
            var e, i, s;
            for (e = 0, i = this.type.animations.length; e < i; e++)
                if ((s = this.type.animations[e]).sid === t) return s;
            return null
        }, i.doChangeAnim = function() {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.getAnimationByName(this.changeAnimName);
            this.changeAnimName = "", e && (cr.equals_nocase(e.name, this.cur_animation.name) && this.animPlaying || (this.cur_animation = e, this.cur_anim_speed = e.speed, this.cur_anim_repeatto = e.repeatto, this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), 1 === this.changeAnimFrom && (this.cur_frame = 0), this.animPlaying = !0, this.frameStart = this.getNowTime(), this.animForwards = !0, this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.runtime.redraw = !0))
        }, i.doChangeAnimFrame = function() {
            var t = this.cur_animation.frames[this.cur_frame],
                e = this.cur_frame;
            this.cur_frame = cr.floor(this.changeAnimFrame), this.cur_frame < 0 && (this.cur_frame = 0), this.cur_frame >= this.cur_animation.frames.length && (this.cur_frame = this.cur_animation.frames.length - 1), e !== this.cur_frame && (this.OnFrameChanged(t, this.cur_animation.frames[this.cur_frame]), this.frameStart = this.getNowTime(), this.runtime.redraw = !0), this.changeAnimFrame = -1
        }, i.OnFrameChanged = function(t, e) {
            var i, s, n, r = t.width,
                a = t.height,
                o = e.width,
                h = e.height;
            for (r != o && (this.width *= o / r), a != h && (this.height *= h / a), this.hotspotX = e.hotspotX, this.hotspotY = e.hotspotY, this.collision_poly.set_pts(e.poly_pts), this.set_bbox_changed(), this.curFrame = e, this.curWebGLTexture = e.webGL_texture, i = 0, s = this.behavior_insts.length; i < s; i++)(n = this.behavior_insts[i]).onSpriteFrameChanged && n.onSpriteFrameChanged(t, e);
            this.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnFrameChanged, this)
        }, i.draw = function(t) {
            t.globalAlpha = this.opacity;
            var e = this.curFrame,
                i = e.spritesheeted,
                s = e.texture_img,
                n = this.x,
                r = this.y,
                a = this.width,
                o = this.height;
            if (0 === this.angle && 0 <= a && 0 <= o) n -= this.hotspotX * a, r -= this.hotspotY * o, this.runtime.pixel_rounding && (n = Math.round(n), r = Math.round(r)), i ? t.drawImage(s, e.offx, e.offy, e.width, e.height, n, r, a, o) : t.drawImage(s, n, r, a, o);
            else {
                this.runtime.pixel_rounding && (n = Math.round(n), r = Math.round(r)), t.save();
                var h = 0 < a ? 1 : -1,
                    c = 0 < o ? 1 : -1;
                t.translate(n, r), 1 == h && 1 == c || t.scale(h, c), t.rotate(this.angle * h * c);
                var l = 0 - this.hotspotX * cr.abs(a),
                    u = 0 - this.hotspotY * cr.abs(o);
                i ? t.drawImage(s, e.offx, e.offy, e.width, e.height, l, u, cr.abs(a), cr.abs(o)) : t.drawImage(s, l, u, cr.abs(a), cr.abs(o)), t.restore()
            }
        }, i.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, i.drawGL = function(t) {
            t.setTexture(this.curWebGLTexture), t.setOpacity(this.opacity);
            var e = this.curFrame,
                i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var s = Math.round(this.x) - this.x,
                    n = Math.round(this.y) - this.y;
                e.spritesheeted ? t.quadTex(i.tlx + s, i.tly + n, i.trx + s, i.try_ + n, i.brx + s, i.bry + n, i.blx + s, i.bly + n, e.sheetTex) : t.quad(i.tlx + s, i.tly + n, i.trx + s, i.try_ + n, i.brx + s, i.bry + n, i.blx + s, i.bly + n)
            } else e.spritesheeted ? t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e.sheetTex) : t.quad(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly)
        }, i.getImagePointIndexByName = function(t) {
            var e, i, s = this.curFrame;
            for (e = 0, i = s.image_points.length; e < i; e++)
                if (cr.equals_nocase(t, s.image_points[e][0])) return e;
            return -1
        }, i.getImagePoint = function(t, e) {
            var i, s = this.curFrame,
                n = s.image_points;
            if (i = cr.is_string(t) ? this.getImagePointIndexByName(t) : t - 1, (i = cr.floor(i)) < 0 || i >= n.length) return e ? this.x : this.y;
            var r = (n[i][1] - s.hotspotX) * this.width,
                a = n[i][2];
            a = (a - s.hotspotY) * this.height;
            var o = Math.cos(this.angle),
                h = Math.sin(this.angle),
                c = r * o - a * h;
            return a = a * o + r * h, r = c, r += this.x, a += this.y, e ? r : a
        };
        var h = [];

        function C(t) {
            t[0] = 0, t[1] = 0, t[2] = 0, h.push(t)
        }

        function A(t, e) {
            return t < e ? t + "," + e : e + "," + t
        }

        function P(t, e, i, s) {
            var n = e.uid,
                r = i.uid,
                a = A(n, r);
            if (t.hasOwnProperty(a)) t[a][2] = s;
            else {
                var o = h.length ? h.pop() : [0, 0, 0];
                o[0] = n, o[1] = r, o[2] = s, t[a] = o
            }
        }
        var O = -2;
        var k = [];
        s.prototype.OnCollision = function(t) {
            if (!t) return !1;
            var e = this.runtime,
                i = e.getCurrentCondition(),
                s = i.type,
                n = null;
            i.extra.collmemory ? n = i.extra.collmemory : (n = {}, i.extra.collmemory = n), i.extra.spriteCreatedDestroyCallback || (i.extra.spriteCreatedDestroyCallback = !0, e.addDestroyCallback(function(t) {
                ! function(t, e) {
                    var i, s, n = e.uid;
                    for (i in t) t.hasOwnProperty(i) && ((s = t[i])[0] !== n && s[1] !== n || (C(t[i]), delete t[i]))
                }(i.extra.collmemory, t)
            }));
            var r, a, o, h, c, l, u, p, d, f, g, m, y, _, v = s.getCurrentSol(),
                b = t.getCurrentSol(),
                w = v.getObjects(),
                x = this.runtime.tickcount,
                S = x - 1,
                T = e.getCurrentEventStack().current_event;
            T.orblock;
            for (a = 0; a < w.length; a++) {
                for (o = w[a], r = b.select_all ? (o.update_bbox(), this.runtime.getCollisionCandidates(o.layer, t, o.bbox, k), k) : b.getObjects(), h = 0; h < r.length; h++) c = r[h], e.testOverlap(o, c) || e.checkRegisteredCollision(o, c) ? (m = n, y = c, void 0, _ = A(o.uid, y.uid), p = !(m.hasOwnProperty(_) ? (O = m[_][2], !0) : !(O = -2)) || O < S, P(n, o, c, x), p && (e.pushCopySol(T.solModifiers), l = s.getCurrentSol(), u = t.getCurrentSol(), l.select_all = !1, u.select_all = !1, s === t ? (l.instances.length = 2, l.instances[0] = o, l.instances[1] = c, s.applySolToContainer()) : (l.instances.length = 1, u.instances.length = 1, l.instances[0] = o, u.instances[0] = c, s.applySolToContainer(), t.applySolToContainer()), T.retrigger(), e.popSol(T.solModifiers))) : (d = n, f = c, void 0, g = A(o.uid, f.uid), d.hasOwnProperty(g) && (C(d[g]), delete d[g]));
                cr.clearArray(k)
            }
            return !1
        };
        var m = null,
            y = new cr.ObjectSet,
            _ = !1,
            v = [],
            b = new cr.rect(0, 0, 0, 0);

        function r(t, e, i) {
            if (!t) return !1;
            var s, n, r, a, o, h, c = 0 !== e || 0 !== i,
                l = !1,
                u = this.runtime.getCurrentCondition(),
                p = u.type,
                d = u.inverted,
                f = t.getCurrentSol(),
                g = this.runtime.getCurrentEventStack().current_event.orblock;
            for (h = f.select_all ? (this.update_bbox(), b.copy(this.bbox), b.offset(e, i), this.runtime.getCollisionCandidates(this.layer, t, b, v), v) : g ? this.runtime.isCurrentConditionFirst() && !f.else_instances.length && f.instances.length ? f.instances : f.else_instances : f.instances, _ = p !== (m = t) && !d, c && (s = this.x, n = this.y, this.x += e, this.y += i, this.set_bbox_changed()), r = 0, a = h.length; r < a; r++)
                if (o = h[r], this.runtime.testOverlap(this, o)) {
                    if (l = !0, d) break;
                    p !== t && y.add(o)
                }
            return c && (this.x = s, this.y = n, this.set_bbox_changed()), cr.clearArray(v), l
        }

        function a() {}

        function o() {}
        e.finish = function(t) {
            if (_) {
                if (t) {
                    var e, i, s, n = this.runtime.getCurrentEventStack().current_event.orblock,
                        r = m.getCurrentSol(),
                        a = y.valuesRef();
                    if (r.select_all) {
                        for (r.select_all = !1, cr.clearArray(r.instances), e = 0, i = a.length; e < i; ++e) r.instances[e] = a[e];
                        if (n)
                            for (cr.clearArray(r.else_instances), e = 0, i = m.instances.length; e < i; ++e) s = m.instances[e], y.contains(s) || r.else_instances.push(s)
                    } else if (n) {
                        var o = r.instances.length;
                        for (e = 0, i = a.length; e < i; ++e) r.instances[o + e] = a[e], cr.arrayFindRemove(r.else_instances, a[e])
                    } else cr.shallowAssignArray(r.instances, a);
                    m.applySolToContainer()
                }
                y.clear(), _ = !1
            }
        }, s.prototype.IsOverlapping = function(t) {
            return r.call(this, t, 0, 0)
        }, s.prototype.IsOverlappingOffset = function(t, e, i) {
            return r.call(this, t, e, i)
        }, s.prototype.IsAnimPlaying = function(t) {
            return this.changeAnimName.length ? cr.equals_nocase(this.changeAnimName, t) : cr.equals_nocase(this.cur_animation.name, t)
        }, s.prototype.CompareFrame = function(t, e) {
            return cr.do_cmp(this.cur_frame, t, e)
        }, s.prototype.CompareAnimSpeed = function(t, e) {
            var i = this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed;
            return cr.do_cmp(i, t, e)
        }, s.prototype.OnAnimFinished = function(t) {
            return cr.equals_nocase(this.animTriggerName, t)
        }, s.prototype.OnAnyAnimFinished = function() {
            return !0
        }, s.prototype.OnFrameChanged = function() {
            return !0
        }, s.prototype.IsMirrored = function() {
            return this.width < 0
        }, s.prototype.IsFlipped = function() {
            return this.height < 0
        }, s.prototype.OnURLLoaded = function() {
            return !0
        }, s.prototype.IsCollisionEnabled = function() {
            return this.collisionsEnabled
        }, t.cnds = new s, a.prototype.Spawn = function(t, e, i) {
            if (t && e) {
                var s = this.runtime.createInstance(t, e, this.getImagePoint(i, !0), this.getImagePoint(i, !1));
                if (s) {
                    var n, r, a;
                    if (void 0 !== s.angle && (s.angle = this.angle, s.set_bbox_changed()), this.runtime.isInOnDestroy++, this.runtime.trigger(Object.getPrototypeOf(t.plugin).cnds.OnCreated, s), s.is_contained)
                        for (n = 0, r = s.siblings.length; n < r; n++) a = s.siblings[n], this.runtime.trigger(Object.getPrototypeOf(a.type.plugin).cnds.OnCreated, a);
                    this.runtime.isInOnDestroy--;
                    var o, h = this.runtime.getCurrentAction(),
                        c = !1;
                    if ((cr.is_undefined(h.extra.Spawn_LastExec) || h.extra.Spawn_LastExec < this.runtime.execcount) && (c = !0, h.extra.Spawn_LastExec = this.runtime.execcount), t != this.type && ((o = t.getCurrentSol()).select_all = !1, c ? (cr.clearArray(o.instances), o.instances[0] = s) : o.instances.push(s), s.is_contained))
                        for (n = 0, r = s.siblings.length; n < r; n++)(o = (a = s.siblings[n]).type.getCurrentSol()).select_all = !1, c ? (cr.clearArray(o.instances), o.instances[0] = a) : o.instances.push(a)
                }
            }
        }, a.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, a.prototype.StopAnim = function() {
            this.animPlaying = !1
        }, a.prototype.StartAnim = function(t) {
            this.animPlaying = !0, this.frameStart = this.getNowTime(), 1 === t && 0 !== this.cur_frame && (this.changeAnimFrame = 0, this.inAnimTrigger || this.doChangeAnimFrame()), this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, a.prototype.SetAnim = function(t, e) {
            this.changeAnimName = t, this.changeAnimFrom = e, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnim()
        }, a.prototype.SetAnimFrame = function(t) {
            this.changeAnimFrame = t, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0), this.inAnimTrigger || this.doChangeAnimFrame()
        }, a.prototype.SetAnimSpeed = function(t) {
            this.cur_anim_speed = cr.abs(t), this.animForwards = 0 <= t, this.isTicking || (this.runtime.tickMe(this), this.isTicking = !0)
        }, a.prototype.SetAnimRepeatToFrame = function(t) {
            (t = Math.floor(t)) < 0 && (t = 0), t >= this.cur_animation.frames.length && (t = this.cur_animation.frames.length - 1), this.cur_anim_repeatto = t
        }, a.prototype.SetMirrored = function(t) {
            var e = cr.abs(this.width) * (0 === t ? -1 : 1);
            this.width !== e && (this.width = e, this.set_bbox_changed())
        }, a.prototype.SetFlipped = function(t) {
            var e = cr.abs(this.height) * (0 === t ? -1 : 1);
            this.height !== e && (this.height = e, this.set_bbox_changed())
        }, a.prototype.SetScale = function(t) {
            var e = this.curFrame,
                i = this.width < 0 ? -1 : 1,
                s = this.height < 0 ? -1 : 1,
                n = e.width * t * i,
                r = e.height * t * s;
            this.width === n && this.height === r || (this.width = n, this.height = r, this.set_bbox_changed())
        }, a.prototype.LoadURL = function(t, e, i) {
            var s = new Image,
                n = this,
                r = this.curFrame;
            s.onload = function() {
                if (r.texture_img.src === s.src) return n.runtime.glwrap && n.curFrame === r && (n.curWebGLTexture = r.webGL_texture), 0 === e && (n.width = s.width, n.height = s.height, n.set_bbox_changed()), n.runtime.redraw = !0, void n.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, n);
                r.texture_img = s, r.offx = 0, r.offy = 0, r.width = s.width, r.height = s.height, r.spritesheeted = !1, r.datauri = "", r.pixelformat = 0, n.runtime.glwrap && (r.webGL_texture && n.runtime.glwrap.deleteTexture(r.webGL_texture), r.webGL_texture = n.runtime.glwrap.loadTexture(s, !1, n.runtime.linearSampling), n.curFrame === r && (n.curWebGLTexture = r.webGL_texture), n.type.updateAllCurrentTexture()), 0 === e && (n.width = s.width, n.height = s.height, n.set_bbox_changed()), n.runtime.redraw = !0, n.runtime.trigger(cr.plugins_.Sprite.prototype.cnds.OnURLLoaded, n)
            }, "data:" !== t.substr(0, 5) && 0 === i && (s.crossOrigin = "anonymous"), this.runtime.setImageSrc(s, t)
        }, a.prototype.SetCollisions = function(t) {
            this.collisionsEnabled !== (0 !== t) && (this.collisionsEnabled = 0 !== t, this.collisionsEnabled ? this.set_bbox_changed() : (this.collcells.right >= this.collcells.left && this.type.collision_grid.update(this, this.collcells, null), this.collcells.set(0, 0, -1, -1)))
        }, t.acts = new a, o.prototype.AnimationFrame = function(t) {
            t.set_int(this.cur_frame)
        }, o.prototype.AnimationFrameCount = function(t) {
            t.set_int(this.cur_animation.frames.length)
        }, o.prototype.AnimationName = function(t) {
            t.set_string(this.cur_animation.name)
        }, o.prototype.AnimationSpeed = function(t) {
            t.set_float(this.animForwards ? this.cur_anim_speed : -this.cur_anim_speed)
        }, o.prototype.ImagePointX = function(t, e) {
            t.set_float(this.getImagePoint(e, !0))
        }, o.prototype.ImagePointY = function(t, e) {
            t.set_float(this.getImagePoint(e, !1))
        }, o.prototype.ImagePointCount = function(t) {
            t.set_int(this.curFrame.image_points.length)
        }, o.prototype.ImageWidth = function(t) {
            t.set_float(this.curFrame.width)
        }, o.prototype.ImageHeight = function(t) {
            t.set_float(this.curFrame.height)
        }, t.exps = new o
    }(), cr.plugins_.Spritefont2 = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Spritefont2.prototype;
        t.onCreate = function() {}, t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;
        e.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.webGL_texture = null)
        }, e.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, e.onRestoreWebGLContext = function() {
            var t, e;
            if (!this.is_family && this.instances.length)
                for (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !1, this.runtime.linearSampling, this.texture_pixelformat)), t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
        }, e.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, e.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var i = t.Instance.prototype;

        function p(t) {
            return t.replace(/\s\s*$/, "")
        }
        i.onDestroy = function() {
            c(this.lines),
                function(t) {
                    n(P, t, !1)
                }(this.clipList),
                function(t) {
                    n(O, t, !1)
                }(this.clipUV), cr.wipe(this.characterWidthList)
        }, i.onCreate = function() {
            this.texture_img = this.type.texture_img, this.characterWidth = this.properties[0], this.characterHeight = this.properties[1], this.characterSet = this.properties[2], this.text = this.properties[3], this.characterScale = this.properties[4], this.visible = 0 === this.properties[5], this.halign = this.properties[6] / 2, this.valign = this.properties[7] / 2, this.wrapbyword = 0 === this.properties[9], this.characterSpacing = this.properties[10], this.lineHeight = this.properties[11], this.textWidth = 0, this.textHeight = 0, this.recycled ? (cr.clearArray(this.lines), cr.wipe(this.clipList), cr.wipe(this.clipUV), cr.wipe(this.characterWidthList)) : (this.lines = [], this.clipList = {}, this.clipUV = {}, this.characterWidthList = {}), this.text_changed = !0, this.lastwrapwidth = this.width, this.runtime.glwrap && (this.type.webGL_texture || (this.type.webGL_texture = this.runtime.glwrap.loadTexture(this.type.texture_img, !1, this.runtime.linearSampling, this.type.texture_pixelformat)), this.webGL_texture = this.type.webGL_texture), this.SplitSheet()
        }, i.saveToJSON = function() {
            var t = {
                t: this.text,
                csc: this.characterScale,
                csp: this.characterSpacing,
                lh: this.lineHeight,
                tw: this.textWidth,
                th: this.textHeight,
                lrt: this.last_render_tick,
                ha: this.halign,
                va: this.valign,
                cw: {}
            };
            for (var e in this.characterWidthList) t.cw[e] = this.characterWidthList[e];
            return t
        }, i.loadFromJSON = function(t) {
            for (var e in this.text = t.t, this.characterScale = t.csc, this.characterSpacing = t.csp, this.lineHeight = t.lh, this.textWidth = t.tw, this.textHeight = t.th, this.last_render_tick = t.lrt, t.hasOwnProperty("ha") && (this.halign = t.ha), t.hasOwnProperty("va") && (this.valign = t.va), t.cw) this.characterWidthList[e] = t.cw[e];
            this.text_changed = !0, this.lastwrapwidth = this.width
        };
        var s = 1e3;

        function A(t, e) {
            return t.length ? t.pop() : new e
        }

        function d(t, e) {
            t.length < s && t.push(e)
        }

        function n(t, e, i) {
            if (i) {
                var s, n;
                for (s = 0, n = e.length; s < n; s++) d(t, e[s]);
                cr.clearArray(e)
            } else {
                var r;
                for (r in e) Object.prototype.hasOwnProperty.call(e, r) && (d(t, e[r]), delete e[r])
            }
        }

        function f(t, e, i) {
            var s, n = t.lines;
            i = p(i), e >= n.length && n.push(h()), (s = n[e]).text = i, s.width = t.measureWidth(i), t.textWidth = cr.max(t.textWidth, s.width)
        }
        var g = [];

        function h() {
            return A(g, Object)
        }

        function c(t) {
            n(g, t, !0)
        }
        var P = [];
        var O = [];
        i.SplitSheet = function() {
            for (var t, e, i, s, n, r, a, o, h, c, l, u, p = this.texture_img, d = p.width, f = p.height, g = this.characterWidth, m = this.characterHeight, y = g / d, _ = m / f, v = this.characterSet, b = Math.floor(d / g), w = Math.floor(f / m), x = 0; x < v.length && !(b * w <= x); x++) {
                var S = x % b,
                    T = Math.floor(x / b),
                    C = v.charAt(x);
                this.runtime.glwrap ? (a = this.clipUV, h = S * y, c = T * _, l = (1 + S) * y, u = (T + 1) * _, void 0 === a[o = C] && (a[o] = A(O, cr.rect)), a[o].left = h, a[o].top = c, a[o].right = l, a[o].bottom = u) : (t = this.clipList, i = S * g, s = T * m, n = g, r = m, void 0 === t[e = C] && (t[e] = A(P, Object)), t[e].x = i, t[e].y = s, t[e].w = n, t[e].h = r)
            }
        };
        var m = [];
        t.TokeniseWords = function(t) {
            cr.clearArray(m);
            for (var e, i = "", s = 0; s < t.length;)
                if ("\n" === (e = t.charAt(s))) i.length && (m.push(i), i = ""), m.push("\n"), ++s;
                else if (" " === e || "\t" === e || "-" === e) {
                for (; i += t.charAt(s), ++s < t.length && (" " === t.charAt(s) || "\t" === t.charAt(s)););
                m.push(i), i = ""
            } else s < t.length && (i += e, s++);
            i.length && m.push(i)
        }, t.WordWrap = function(t) {
            var e = t.text,
                i = t.lines;
            if (e && e.length) {
                var s = t.width;
                if (s <= 2) c(i);
                else {
                    var n = t.characterWidth,
                        r = t.characterScale,
                        a = t.characterSpacing;
                    if (e.length * (n * r + a) - a <= s && -1 === e.indexOf("\n")) {
                        var o = t.measureWidth(e);
                        if (o <= s) return c(i), i.push(h()), i[0].text = e, i[0].width = o, t.textWidth = o, void(t.textHeight = t.characterHeight * r + t.lineHeight)
                    }
                    t.wrapbyword;
                    this.WrapText(t), t.textHeight = i.length * (t.characterHeight * r + t.lineHeight)
                }
            } else c(i)
        }, t.WrapText = function(t) {
            var e, i = t.wrapbyword,
                s = t.text,
                n = t.lines,
                r = t.width;
            e = i ? (this.TokeniseWords(s), m) : s;
            var a, o, h, c = "",
                l = 0,
                u = !1;
            for (o = 0; o < e.length; o++) "\n" !== e[o] ? (u = !1, a = c, c += e[o], r < t.measureWidth(p(c)) && ("" === a ? (f(t, l, c), u = !(c = "")) : (f(t, l, a), c = e[o]), l++, i || " " !== c || (c = ""))) : (!0 === u ? u = !1 : (f(t, l, c), l++), c = "");
            for (p(c).length && (f(t, l, c), l++), o = l; o < n.length; o++) h = n[o], d(g, h);
            n.length = l
        }, i.measureWidth = function(t) {
            for (var e = this.characterSpacing, i = t.length, s = 0, n = 0; n < i; n++) s += this.getCharacterWidth(t.charAt(n)) * this.characterScale + e;
            return s -= 0 < s ? e : 0
        }, i.getCharacterWidth = function(t) {
            var e = this.characterWidthList;
            return void 0 !== e[t] ? e[t] : this.characterWidth
        }, i.rebuildText = function() {
            !this.text_changed && this.width === this.lastwrapwidth || (this.textWidth = 0, this.textHeight = 0, this.type.plugin.WordWrap(this), this.text_changed = !1, this.lastwrapwidth = this.width)
        };
        i.draw = function(t, e) {
            var i = this.texture_img;
            if ("" !== this.text && null != i) {
                if (this.rebuildText(), this.height < this.characterHeight * this.characterScale + this.lineHeight) return;
                t.globalAlpha = this.opacity;
                var s = this.x,
                    n = this.y;
                this.runtime.pixel_rounding && (s = Math.round(s), n = Math.round(n));
                var r = this.layer.viewLeft,
                    a = this.layer.viewTop,
                    o = this.layer.viewRight,
                    h = this.layer.viewBottom;
                t.save(), t.translate(s, n), t.rotate(this.angle);
                for (var c, l, u, p, d = this.angle, f = this.halign, g = this.valign, m = this.characterScale, y = this.characterHeight * m, _ = this.lineHeight, v = this.characterSpacing, b = this.lines, w = this.textHeight, x = g * cr.max(0, this.height - w), S = -this.hotspotX * this.width, T = -this.hotspotY * this.height, C = T += x, A = 0; A < b.length; A++) {
                    var P = b[A].text,
                        O = b[A].width;
                    if (l = S + f * cr.max(0, this.width - O), C += _, 0 === d && n + C + y < a) C += y;
                    else {
                        for (var k = 0; k < P.length; k++) {
                            var E = P.charAt(k);
                            c = this.getCharacterWidth(E);
                            var R = this.clipList[E];
                            if (0 === d && s + l + c * m + v < r) l += c * m + v;
                            else {
                                if (l + c * m > this.width + 1e-5) break;
                                if (void 0 !== R && (u = l, p = C, 0 === d && 1 === m && (u = Math.round(u), p = Math.round(p)), t.drawImage(this.texture_img, R.x, R.y, R.w, R.h, u, p, R.w * m, R.h * m)), l += c * m + v, 0 === d && o < s + l) break
                            }
                        }
                        if (C += y, 0 === d && (C + y + _ > this.height || h < n + C)) break
                    }
                }
                t.restore()
            }
        };
        var j = new cr.quad;

        function r() {}

        function a() {}

        function o() {}
        i.drawGL = function(t) {
            if (t.setTexture(this.webGL_texture), t.setOpacity(this.opacity), this.text && (this.rebuildText(), !(this.height < this.characterHeight * this.characterScale + this.lineHeight))) {
                this.update_bbox();
                var e = this.bquad,
                    i = 0,
                    s = 0;
                this.runtime.pixel_rounding && (i = Math.round(this.x) - this.x, s = Math.round(this.y) - this.y);
                var n, r, a, o = this.layer.viewLeft,
                    h = this.layer.viewTop,
                    c = this.layer.viewRight,
                    l = this.layer.viewBottom,
                    u = this.angle,
                    p = this.halign,
                    d = this.valign,
                    f = this.characterScale,
                    g = this.characterHeight * f,
                    m = this.lineHeight,
                    y = this.characterSpacing,
                    _ = this.lines,
                    v = this.textHeight;
                0 !== u && (r = Math.cos(u), a = Math.sin(u));
                for (var b, w, x, S, T, C, A, P = d * cr.max(0, this.height - v), O = e.tlx + i, k = e.tly + s, E = P, R = 0; R < _.length; R++) {
                    var L = _[R].text,
                        I = _[R].width;
                    if (b = p * cr.max(0, this.width - I), E += m, 0 === u && k + E + g < h) E += g;
                    else {
                        for (var B = 0; B < L.length; B++) {
                            var M = L.charAt(B);
                            n = this.getCharacterWidth(M);
                            var F = this.clipUV[M];
                            if (0 === u && O + b + n * f + y < o) b += n * f + y;
                            else {
                                if (b + n * f > this.width + 1e-5) break;
                                if (void 0 !== F) {
                                    var N = this.characterWidth * f,
                                        D = this.characterHeight * f;
                                    w = b, x = E, 0 === u && 1 === f && (w = Math.round(w), x = Math.round(x)), j.tlx = w, j.tly = x, j.trx = w + N, j.try_ = x, j.blx = w, j.bly = x + D, j.brx = w + N, j.bry = x + D, 0 !== u && (T = r, C = a, A = void 0, A = (S = j).tlx * T - S.tly * C, S.tly = S.tly * T + S.tlx * C, S.tlx = A, A = S.trx * T - S.try_ * C, S.try_ = S.try_ * T + S.trx * C, S.trx = A, A = S.blx * T - S.bly * C, S.bly = S.bly * T + S.blx * C, S.blx = A, A = S.brx * T - S.bry * C, S.bry = S.bry * T + S.brx * C, S.brx = A), j.offset(O, k), t.quadTex(j.tlx, j.tly, j.trx, j.try_, j.brx, j.bry, j.blx, j.bly, F)
                                }
                                if (b += n * f + y, 0 === u && c < O + b) break
                            }
                        }
                        if (E += g, 0 === u && (E + g + m > this.height || l < k + E)) break
                    }
                }
            }
        }, r.prototype.CompareText = function(t, e) {
            return e ? this.text == t : cr.equals_nocase(this.text, t)
        }, t.cnds = new r, a.prototype.SetText = function(t) {
            cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            this.text !== e && (this.text = e, this.text_changed = !0, this.runtime.redraw = !0)
        }, a.prototype.AppendText = function(t) {
            cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            e && (this.text += e, this.text_changed = !0, this.runtime.redraw = !0)
        }, a.prototype.SetScale = function(t) {
            t !== this.characterScale && (this.characterScale = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, a.prototype.SetCharacterSpacing = function(t) {
            t !== this.CharacterSpacing && (this.characterSpacing = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, a.prototype.SetLineHeight = function(t) {
            t !== this.lineHeight && (this.lineHeight = t, this.text_changed = !0, this.runtime.redraw = !0)
        }, i.SetCharWidth = function(t, e) {
            var i = parseInt(e, 10);
            this.characterWidthList[t] !== i && (this.characterWidthList[t] = i, this.text_changed = !0, this.runtime.redraw = !0)
        }, a.prototype.SetCharacterWidth = function(t, e) {
            if ("" !== t)
                for (var i = 0; i < t.length; i++) this.SetCharWidth(t.charAt(i), e)
        }, a.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, a.prototype.SetHAlign = function(t) {
            this.halign = t / 2, this.text_changed = !0, this.runtime.redraw = !0
        }, a.prototype.SetVAlign = function(t) {
            this.valign = t / 2, this.text_changed = !0, this.runtime.redraw = !0
        }, t.acts = new a, o.prototype.CharacterWidth = function(t, e) {
            t.set_int(this.getCharacterWidth(e))
        }, o.prototype.CharacterHeight = function(t) {
            t.set_int(this.characterHeight)
        }, o.prototype.CharacterScale = function(t) {
            t.set_float(this.characterScale)
        }, o.prototype.CharacterSpacing = function(t) {
            t.set_int(this.characterSpacing)
        }, o.prototype.LineHeight = function(t) {
            t.set_int(this.lineHeight)
        }, o.prototype.Text = function(t) {
            t.set_string(this.text)
        }, o.prototype.TextWidth = function(t) {
            this.rebuildText(), t.set_float(this.textWidth)
        }, o.prototype.TextHeight = function(t) {
            this.rebuildText(), t.set_float(this.textHeight)
        }, t.exps = new o
    }(), cr.plugins_.Text = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Text.prototype;
        t.onCreate = function() {
            t.acts.SetWidth = function(t) {
                this.width !== t && (this.width = t, this.text_changed = !0, this.set_bbox_changed())
            }
        }, t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;
        e.onCreate = function() {}, e.onLostWebGLContext = function() {
            var t, e, i;
            if (!this.is_family)
                for (t = 0, e = this.instances.length; t < e; t++)(i = this.instances[t]).mycanvas = null, i.myctx = null, i.mytex = null
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, this.recycled ? cr.clearArray(this.lines) : this.lines = [], this.text_changed = !0
        };
        var i = t.Instance.prototype,
            o = {};
        i.onCreate = function() {
            this.text = this.properties[0], this.visible = 0 === this.properties[1], this.font = this.properties[2], this.color = this.properties[3], this.halign = this.properties[4], this.valign = this.properties[5], this.wrapbyword = 0 === this.properties[7], this.lastwidth = this.width, this.lastwrapwidth = this.width, this.lastheight = this.height, this.line_height_offset = this.properties[8], this.facename = "", this.fontstyle = "", this.ptSize = 0, this.textWidth = 0, this.textHeight = 0, this.parseFont(), this.mycanvas = null, this.myctx = null, this.mytex = null, this.need_text_redraw = !1, this.last_render_tick = this.runtime.tickcount, this.recycled ? this.rcTex.set(0, 0, 1, 1) : this.rcTex = new cr.rect(0, 0, 1, 1), this.runtime.glwrap && this.runtime.tickMe(this)
        }, i.parseFont = function() {
            var t, e = this.font.split(" ");
            for (t = 0; t < e.length; t++)
                if ("pt" === e[t].substr(e[t].length - 2, 2)) {
                    for (this.ptSize = parseInt(e[t].substr(0, e[t].length - 2)), this.pxHeight = Math.ceil(this.ptSize / 72 * 96) + 4, 0 < t && (this.fontstyle = e[t - 1]), this.facename = e[t + 1], t += 2; t < e.length; t++) this.facename += " " + e[t];
                    break
                }
        }, i.saveToJSON = function() {
            return {
                t: this.text,
                f: this.font,
                c: this.color,
                ha: this.halign,
                va: this.valign,
                wr: this.wrapbyword,
                lho: this.line_height_offset,
                fn: this.facename,
                fs: this.fontstyle,
                ps: this.ptSize,
                pxh: this.pxHeight,
                tw: this.textWidth,
                th: this.textHeight,
                lrt: this.last_render_tick
            }
        }, i.loadFromJSON = function(t) {
            this.text = t.t, this.font = t.f, this.color = t.c, this.halign = t.ha, this.valign = t.va, this.wrapbyword = t.wr, this.line_height_offset = t.lho, this.facename = t.fn, this.fontstyle = t.fs, this.ptSize = t.ps, this.pxHeight = t.pxh, this.textWidth = t.tw, this.textHeight = t.th, this.last_render_tick = t.lrt, this.text_changed = !0, this.lastwidth = this.width, this.lastwrapwidth = this.width, this.lastheight = this.height
        }, i.tick = function() {
            if (this.runtime.glwrap && this.mytex && 300 <= this.runtime.tickcount - this.last_render_tick) {
                var t = this.layer;
                this.update_bbox();
                var e = this.bbox;
                (e.right < t.viewLeft || e.bottom < t.viewTop || e.left > t.viewRight || e.top > t.viewBottom) && (this.runtime.glwrap.deleteTexture(this.mytex), this.mytex = null, this.myctx = null, this.mycanvas = null)
            }
        }, i.onDestroy = function() {
            this.myctx = null, this.mycanvas = null, this.runtime.glwrap && this.mytex && this.runtime.glwrap.deleteTexture(this.mytex), this.mytex = null
        }, i.updateFont = function() {
            this.font = this.fontstyle + " " + this.ptSize.toString() + "pt " + this.facename, this.text_changed = !0, this.runtime.redraw = !0
        }, i.draw = function(t, e) {
            t.font = this.font, t.textBaseline = "top", t.fillStyle = this.color, t.globalAlpha = e ? 1 : this.opacity;
            var i = 1;
            e && (i = Math.abs(this.layer.getScale()), t.save(), t.scale(i, i)), !this.text_changed && this.width === this.lastwrapwidth || (this.type.plugin.WordWrap(this.text, this.lines, t, this.width, this.wrapbyword), this.text_changed = !1, this.lastwrapwidth = this.width), this.update_bbox();
            var s = e ? 0 : this.bquad.tlx,
                n = e ? 0 : this.bquad.tly;
            this.runtime.pixel_rounding && (s = s + .5 | 0, n = n + .5 | 0), 0 === this.angle || e || (t.save(), t.translate(s, n), t.rotate(this.angle), n = s = 0);
            var r, a, o = n + this.height,
                h = this.pxHeight;
            for (h += this.line_height_offset, 1 === this.valign ? n += Math.max(this.height / 2 - this.lines.length * h / 2, 0) : 2 === this.valign && (n += Math.max(this.height - this.lines.length * h - 2, 0)), a = 0; a < this.lines.length && (r = s, 1 === this.halign ? r = s + (this.width - this.lines[a].width) / 2 : 2 === this.halign && (r = s + (this.width - this.lines[a].width)), t.fillText(this.lines[a].text, r, n), !(o - h <= (n += h))); a++);
            0 === this.angle && !e || t.restore(), this.last_render_tick = this.runtime.tickcount
        }, i.drawGL = function(t) {
            if (!(this.width < 1 || this.height < 1)) {
                var e = this.text_changed || this.need_text_redraw;
                this.need_text_redraw = !1;
                var i = this.layer.getScale(),
                    s = this.layer.getAngle(),
                    n = this.rcTex,
                    r = i * this.width,
                    a = i * this.height,
                    o = Math.ceil(r),
                    h = Math.ceil(a),
                    c = Math.abs(o),
                    l = Math.abs(h),
                    u = this.runtime.draw_width / 2,
                    p = this.runtime.draw_height / 2;
                this.myctx || (this.mycanvas = document.createElement("canvas"), this.mycanvas.width = c, this.mycanvas.height = l, this.lastwidth = c, this.lastheight = l, e = !0, this.myctx = this.mycanvas.getContext("2d")), c === this.lastwidth && l === this.lastheight || (this.mycanvas.width = c, this.mycanvas.height = l, this.mytex && (t.deleteTexture(this.mytex), this.mytex = null), e = !0), e && (this.myctx.clearRect(0, 0, c, l), this.draw(this.myctx, !0), this.mytex || (this.mytex = t.createEmptyTexture(c, l, this.runtime.linearSampling, this.runtime.isMobile)), t.videoToTexture(this.mycanvas, this.mytex, this.runtime.isMobile)), this.lastwidth = c, this.lastheight = l, t.setTexture(this.mytex), t.setOpacity(this.opacity), t.resetModelView(), t.translate(-u, -p), t.updateModelView();
                var d = this.bquad,
                    f = this.layer.layerToCanvas(d.tlx, d.tly, !0, !0),
                    g = this.layer.layerToCanvas(d.tlx, d.tly, !1, !0),
                    m = this.layer.layerToCanvas(d.trx, d.try_, !0, !0),
                    y = this.layer.layerToCanvas(d.trx, d.try_, !1, !0),
                    _ = this.layer.layerToCanvas(d.brx, d.bry, !0, !0),
                    v = this.layer.layerToCanvas(d.brx, d.bry, !1, !0),
                    b = this.layer.layerToCanvas(d.blx, d.bly, !0, !0),
                    w = this.layer.layerToCanvas(d.blx, d.bly, !1, !0);
                if (this.runtime.pixel_rounding || 0 === this.angle && 0 === s) {
                    var x = (f + .5 | 0) - f,
                        S = (g + .5 | 0) - g;
                    f += x, g += S, m += x, y += S, _ += x, v += S, b += x, w += S
                }
                0 === this.angle && 0 === s ? (_ = m = f + o, b = f, w = v = (y = g) + h, n.right = 1, n.bottom = 1) : (n.right = r / o, n.bottom = a / h), t.quadTex(f, g, m, y, _, v, b, w, n), t.resetModelView(), t.scale(i, i), t.rotateZ(-this.layer.getAngle()), t.translate((this.layer.viewLeft + this.layer.viewRight) / -2, (this.layer.viewTop + this.layer.viewBottom) / -2), t.updateModelView(), this.last_render_tick = this.runtime.tickcount
            }
        };
        var u = [];
        t.TokeniseWords = function(t) {
            cr.clearArray(u);
            for (var e, i = "", s = 0; s < t.length;)
                if ("\n" === (e = t.charAt(s))) i.length && (u.push(i), i = ""), u.push("\n"), ++s;
                else if (" " === e || "\t" === e || "-" === e) {
                for (; i += t.charAt(s), ++s < t.length && (" " === t.charAt(s) || "\t" === t.charAt(s)););
                u.push(i), i = ""
            } else s < t.length && (i += e, s++);
            i.length && u.push(i)
        };
        var s = [];

        function p() {
            return s.length ? s.pop() : {}
        }

        function d(t) {
            s.push(t)
        }

        function a(t) {
            var e, i;
            for (e = 0, i = t.length; e < i; e++) d(t[e]);
            cr.clearArray(t)
        }

        function f(t) {
            return t.length && " " === t.charAt(t.length - 1) ? t.substring(0, t.length - 1) : t
        }

        function n() {}

        function r() {}

        function h() {}
        t.WordWrap = function(t, e, i, s, n) {
            if (t && t.length)
                if (s <= 2) a(e);
                else {
                    if (t.length <= 100 && -1 === t.indexOf("\n")) {
                        var r = i.measureText(t).width;
                        if (r <= s) return a(e), e.push(p()), e[0].text = t, void(e[0].width = r)
                    }
                    this.WrapText(t, e, i, s, n)
                }
            else a(e)
        }, t.WrapText = function(t, e, i, s, n) {
            var r;
            r = n ? (this.TokeniseWords(t), u) : t;
            var a, o, h, c = "",
                l = 0;
            for (o = 0; o < r.length; o++) "\n" !== r[o] ? (a = c, c += r[o], s <= i.measureText(c).width && (l >= e.length && e.push(p()), a = f(a), (h = e[l]).text = a, h.width = i.measureText(a).width, l++, c = r[o], n || " " !== c || (c = ""))) : (l >= e.length && e.push(p()), c = f(c), (h = e[l]).text = c, h.width = i.measureText(c).width, l++, c = "");
            for (c.length && (l >= e.length && e.push(p()), c = f(c), (h = e[l]).text = c, h.width = i.measureText(c).width, l++), o = l; o < e.length; o++) d(e[o]);
            e.length = l
        }, n.prototype.CompareText = function(t, e) {
            return e ? this.text == t : cr.equals_nocase(this.text, t)
        }, t.cnds = new n, r.prototype.SetText = function(t) {
            cr.is_number(t) && t < 1e9 && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            this.text !== e && (this.text = e, this.text_changed = !0, this.runtime.redraw = !0)
        }, r.prototype.AppendText = function(t) {
            cr.is_number(t) && (t = Math.round(1e10 * t) / 1e10);
            var e = t.toString();
            e && (this.text += e, this.text_changed = !0, this.runtime.redraw = !0)
        }, r.prototype.SetFontFace = function(t, e) {
            var i = "";
            switch (e) {
                case 1:
                    i = "bold";
                    break;
                case 2:
                    i = "italic";
                    break;
                case 3:
                    i = "bold italic"
            }
            t === this.facename && i === this.fontstyle || (this.facename = t, this.fontstyle = i, this.updateFont())
        }, r.prototype.SetFontSize = function(t) {
            this.ptSize !== t && (this.ptSize = t, this.pxHeight = Math.ceil(this.ptSize / 72 * 96) + 4, this.updateFont())
        }, r.prototype.SetFontColor = function(t) {
            var e = "rgb(" + cr.GetRValue(t).toString() + "," + cr.GetGValue(t).toString() + "," + cr.GetBValue(t).toString() + ")";
            e !== this.color && (this.color = e, this.need_text_redraw = !0, this.runtime.redraw = !0)
        }, r.prototype.SetWebFont = function(t, e) {
            if (this.runtime.isDomFree) cr.logexport("[Construct 2] Text plugin: 'Set web font' not supported on this platform - the action has been ignored");
            else {
                function i() {
                    s.runtime.redraw = !0, s.text_changed = !0
                }
                var s = this;
                if (o.hasOwnProperty(e)) {
                    var n = "'" + t + "'";
                    if (this.facename === n) return;
                    this.facename = n, this.updateFont();
                    for (var r = 1; r < 10; r++) setTimeout(i, 100 * r), setTimeout(i, 1e3 * r)
                } else {
                    var a = document.createElement("link");
                    a.href = e, a.rel = "stylesheet", a.type = "text/css", a.onload = i, document.getElementsByTagName("head")[0].appendChild(a), o[e] = !0, this.facename = "'" + t + "'", this.updateFont();
                    for (r = 1; r < 10; r++) setTimeout(i, 100 * r), setTimeout(i, 1e3 * r)
                }
            }
        }, r.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, t.acts = new r, h.prototype.Text = function(t) {
            t.set_string(this.text)
        }, h.prototype.FaceName = function(t) {
            t.set_string(this.facename)
        }, h.prototype.FaceSize = function(t) {
            t.set_int(this.ptSize)
        }, h.prototype.TextWidth = function(t) {
            var e, i, s, n = 0;
            for (e = 0, i = this.lines.length; e < i; e++) n < (s = this.lines[e].width) && (n = s);
            t.set_int(n)
        }, h.prototype.TextHeight = function(t) {
            t.set_int(this.lines.length * (this.pxHeight + this.line_height_offset) - this.line_height_offset)
        }, t.exps = new h
    }(), cr.plugins_.TextBox = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.TextBox.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var e = t.Instance.prototype,
            n = ["text", "password", "email", "number", "tel", "url"];

        function i() {}

        function s() {}

        function r() {} - 1 < navigator.userAgent.indexOf("MSIE 9") && (n[2] = "text", n[3] = "text", n[4] = "text", n[5] = "text"), e.onCreate = function() {
            if (this.runtime.isDomFree) cr.logexport("[Construct 2] Textbox plugin not supported on this platform - the object will not be created");
            else {
                6 === this.properties[7] ? (this.elem = document.createElement("textarea"), jQuery(this.elem).css("resize", "none")) : (this.elem = document.createElement("input"), this.elem.type = n[this.properties[7]]), this.elem.id = this.properties[9], jQuery(this.elem).appendTo(this.runtime.canvasdiv ? this.runtime.canvasdiv : "body"), this.elem.autocomplete = "off", this.elem.value = this.properties[0], this.elem.placeholder = this.properties[1], this.elem.title = this.properties[2], this.elem.disabled = 0 === this.properties[4], this.elem.readOnly = 1 === this.properties[5], this.elem.spellcheck = 1 === this.properties[6], this.autoFontSize = 0 !== this.properties[8], this.element_hidden = !1, 0 === this.properties[3] && (jQuery(this.elem).hide(), this.visible = !1, this.element_hidden = !0);
                var t, e, i, s = (t = this, function() {
                    t.runtime.trigger(cr.plugins_.TextBox.prototype.cnds.OnTextChanged, t)
                });
                this.elem.oninput = s, -1 !== navigator.userAgent.indexOf("MSIE") && (this.elem.oncut = s), this.elem.onclick = (e = this, function(t) {
                    t.stopPropagation(), e.runtime.isInUserInputEvent = !0, e.runtime.trigger(cr.plugins_.TextBox.prototype.cnds.OnClicked, e), e.runtime.isInUserInputEvent = !1
                }), this.elem.ondblclick = (i = this, function(t) {
                    t.stopPropagation(), i.runtime.isInUserInputEvent = !0, i.runtime.trigger(cr.plugins_.TextBox.prototype.cnds.OnDoubleClicked, i), i.runtime.isInUserInputEvent = !1
                }), this.elem.addEventListener("touchstart", function(t) {
                    t.stopPropagation()
                }, !1), this.elem.addEventListener("touchmove", function(t) {
                    t.stopPropagation()
                }, !1), this.elem.addEventListener("touchend", function(t) {
                    t.stopPropagation()
                }, !1), jQuery(this.elem).mousedown(function(t) {
                    t.stopPropagation()
                }), jQuery(this.elem).mouseup(function(t) {
                    t.stopPropagation()
                }), jQuery(this.elem).keydown(function(t) {
                    13 !== t.which && 27 != t.which && t.stopPropagation()
                }), jQuery(this.elem).keyup(function(t) {
                    13 !== t.which && 27 != t.which && t.stopPropagation()
                }), this.lastLeft = 0, this.lastTop = 0, this.lastRight = 0, this.lastBottom = 0, this.lastWinWidth = 0, this.lastWinHeight = 0, this.updatePosition(!0), this.runtime.tickMe(this)
            }
        }, e.saveToJSON = function() {
            return {
                text: this.elem.value,
                placeholder: this.elem.placeholder,
                tooltip: this.elem.title,
                disabled: !!this.elem.disabled,
                readonly: !!this.elem.readOnly,
                spellcheck: !!this.elem.spellcheck
            }
        }, e.loadFromJSON = function(t) {
            this.elem.value = t.text, this.elem.placeholder = t.placeholder, this.elem.title = t.tooltip, this.elem.disabled = t.disabled, this.elem.readOnly = t.readonly, this.elem.spellcheck = t.spellcheck
        }, e.onDestroy = function() {
            this.runtime.isDomFree || (jQuery(this.elem).remove(), this.elem = null)
        }, e.tick = function() {
            this.updatePosition()
        }, e.updatePosition = function(t) {
            if (!this.runtime.isDomFree) {
                var e = this.layer.layerToCanvas(this.x, this.y, !0),
                    i = this.layer.layerToCanvas(this.x, this.y, !1),
                    s = this.layer.layerToCanvas(this.x + this.width, this.y + this.height, !0),
                    n = this.layer.layerToCanvas(this.x + this.width, this.y + this.height, !1),
                    r = this.runtime.width / this.runtime.devicePixelRatio,
                    a = this.runtime.height / this.runtime.devicePixelRatio;
                if (!this.visible || !this.layer.visible || s <= 0 || n <= 0 || r <= e || a <= i) return this.element_hidden || jQuery(this.elem).hide(), void(this.element_hidden = !0);
                e < 1 && (e = 1), i < 1 && (i = 1), r <= s && (s = r - 1), a <= n && (n = a - 1);
                var o = window.innerWidth,
                    h = window.innerHeight;
                if (t || this.lastLeft !== e || this.lastTop !== i || this.lastRight !== s || this.lastBottom !== n || this.lastWinWidth !== o || this.lastWinHeight !== h) {
                    this.lastLeft = e, this.lastTop = i, this.lastRight = s, this.lastBottom = n, this.lastWinWidth = o, this.lastWinHeight = h, this.element_hidden && (jQuery(this.elem).show(), this.element_hidden = !1);
                    var c = Math.round(e) + jQuery(this.runtime.canvas).offset().left,
                        l = Math.round(i) + jQuery(this.runtime.canvas).offset().top;
                    jQuery(this.elem).css("position", "absolute"), jQuery(this.elem).offset({
                        left: c,
                        top: l
                    }), jQuery(this.elem).width(Math.round(s - e)), jQuery(this.elem).height(Math.round(n - i)), this.autoFontSize && jQuery(this.elem).css("font-size", this.layer.getScale(!0) / this.runtime.devicePixelRatio - .2 + "em")
                } else this.element_hidden && (jQuery(this.elem).show(), this.element_hidden = !1)
            }
        }, e.draw = function(t) {}, e.drawGL = function(t) {}, i.prototype.CompareText = function(t, e) {
            return !this.runtime.isDomFree && (0 === e ? cr.equals_nocase(this.elem.value, t) : this.elem.value === t)
        }, i.prototype.OnTextChanged = function() {
            return !0
        }, i.prototype.OnClicked = function() {
            return !0
        }, i.prototype.OnDoubleClicked = function() {
            return !0
        }, t.cnds = new i, s.prototype.SetText = function(t) {
            this.runtime.isDomFree || (this.elem.value = t)
        }, s.prototype.SetPlaceholder = function(t) {
            this.runtime.isDomFree || (this.elem.placeholder = t)
        }, s.prototype.SetTooltip = function(t) {
            this.runtime.isDomFree || (this.elem.title = t)
        }, s.prototype.SetVisible = function(t) {
            this.runtime.isDomFree || (this.visible = 0 !== t)
        }, s.prototype.SetEnabled = function(t) {
            this.runtime.isDomFree || (this.elem.disabled = 0 === t)
        }, s.prototype.SetReadOnly = function(t) {
            this.runtime.isDomFree || (this.elem.readOnly = 0 === t)
        }, s.prototype.SetFocus = function() {
            this.runtime.isDomFree || this.elem.focus()
        }, s.prototype.SetBlur = function() {
            this.runtime.isDomFree || this.elem.blur()
        }, s.prototype.SetCSSStyle = function(t, e) {
            this.runtime.isDomFree || jQuery(this.elem).css(t, e)
        }, s.prototype.ScrollToBottom = function() {
            this.runtime.isDomFree || (this.elem.scrollTop = this.elem.scrollHeight)
        }, t.acts = new s, r.prototype.Text = function(t) {
            this.runtime.isDomFree ? t.set_string("") : t.set_string(this.elem.value)
        }, t.exps = new r
    }(), cr.plugins_.TiledBg = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.TiledBg.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        };
        var e = t.Type.prototype;
        e.onCreate = function() {
            this.is_family || (this.texture_img = new Image, this.texture_img.cr_filesize = this.texture_filesize, this.runtime.waitForImageLoad(this.texture_img, this.texture_file), this.pattern = null, this.webGL_texture = null)
        }, e.onLostWebGLContext = function() {
            this.is_family || (this.webGL_texture = null)
        }, e.onRestoreWebGLContext = function() {
            var t, e;
            if (!this.is_family && this.instances.length)
                for (this.webGL_texture || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat)), t = 0, e = this.instances.length; t < e; t++) this.instances[t].webGL_texture = this.webGL_texture
        }, e.loadTextures = function() {
            this.is_family || this.webGL_texture || !this.runtime.glwrap || (this.webGL_texture = this.runtime.glwrap.loadTexture(this.texture_img, !0, this.runtime.linearSampling, this.texture_pixelformat))
        }, e.unloadTextures = function() {
            this.is_family || this.instances.length || !this.webGL_texture || (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, e.preloadCanvas2D = function(t) {
            t.drawImage(this.texture_img, 0, 0)
        }, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime
        };
        var i = t.Instance.prototype;

        function s() {}

        function n() {}

        function r() {}
        i.onCreate = function() {
            this.visible = 0 === this.properties[0], this.rcTex = new cr.rect(0, 0, 0, 0), this.has_own_texture = !1, this.texture_img = this.type.texture_img, this.runtime.glwrap ? (this.type.loadTextures(), this.webGL_texture = this.type.webGL_texture) : (this.type.pattern || (this.type.pattern = this.runtime.ctx.createPattern(this.type.texture_img, "repeat")), this.pattern = this.type.pattern)
        }, i.afterLoad = function() {
            this.has_own_texture = !1, this.texture_img = this.type.texture_img
        }, i.onDestroy = function() {
            this.runtime.glwrap && this.has_own_texture && this.webGL_texture && (this.runtime.glwrap.deleteTexture(this.webGL_texture), this.webGL_texture = null)
        }, i.draw = function(t) {
            t.globalAlpha = this.opacity, t.save(), t.fillStyle = this.pattern;
            var e = this.x,
                i = this.y;
            this.runtime.pixel_rounding && (e = Math.round(e), i = Math.round(i));
            var s = -this.hotspotX * this.width,
                n = -this.hotspotY * this.height,
                r = s % this.texture_img.width,
                a = n % this.texture_img.height;
            r < 0 && (r += this.texture_img.width), a < 0 && (a += this.texture_img.height), t.translate(e, i), t.rotate(this.angle), t.translate(r, a), t.fillRect(s - r, n - a, this.width, this.height), t.restore()
        }, i.drawGL_earlyZPass = function(t) {
            this.drawGL(t)
        }, i.drawGL = function(t) {
            t.setTexture(this.webGL_texture), t.setOpacity(this.opacity);
            var e = this.rcTex;
            e.right = this.width / this.texture_img.width, e.bottom = this.height / this.texture_img.height;
            var i = this.bquad;
            if (this.runtime.pixel_rounding) {
                var s = Math.round(this.x) - this.x,
                    n = Math.round(this.y) - this.y;
                t.quadTex(i.tlx + s, i.tly + n, i.trx + s, i.try_ + n, i.brx + s, i.bry + n, i.blx + s, i.bly + n, e)
            } else t.quadTex(i.tlx, i.tly, i.trx, i.try_, i.brx, i.bry, i.blx, i.bly, e)
        }, s.prototype.OnURLLoaded = function() {
            return !0
        }, t.cnds = new s, n.prototype.SetEffect = function(t) {
            this.blend_mode = t, this.compositeOp = cr.effectToCompositeOp(t), cr.setGLBlend(this, t, this.runtime.gl), this.runtime.redraw = !0
        }, n.prototype.LoadURL = function(t, e) {
            var i = new Image,
                s = this;
            i.onload = function() {
                s.texture_img = i, s.runtime.glwrap ? (s.has_own_texture && s.webGL_texture && s.runtime.glwrap.deleteTexture(s.webGL_texture), s.webGL_texture = s.runtime.glwrap.loadTexture(i, !0, s.runtime.linearSampling)) : s.pattern = s.runtime.ctx.createPattern(i, "repeat"), s.has_own_texture = !0, s.runtime.redraw = !0, s.runtime.trigger(cr.plugins_.TiledBg.prototype.cnds.OnURLLoaded, s)
            }, "data:" !== t.substr(0, 5) && 0 === e && (i.crossOrigin = "anonymous"), this.runtime.setImageSrc(i, t)
        }, t.acts = new n, r.prototype.ImageWidth = function(t) {
            t.set_float(this.texture_img.width)
        }, r.prototype.ImageHeight = function(t) {
            t.set_float(this.texture_img.height)
        }, t.exps = new r
    }(), cr.plugins_.Touch = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.plugins_.Touch.prototype;
        t.Type = function(t) {
            this.plugin = t, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t) {
            this.type = t, this.runtime = t.runtime, this.touches = [], this.mouseDown = !1
        };
        var e = t.Instance.prototype,
            u = {
                left: 0,
                top: 0
            };
        e.findTouch = function(t) {
            var e, i;
            for (e = 0, i = this.touches.length; e < i; e++)
                if (this.touches[e].id === t) return e;
            return -1
        };
        var i = 0,
            s = 0,
            n = 0;

        function o(t) {
            i = t.x, s = t.y, n = t.z
        }
        var r = [];

        function h(t, e, i, s) {
            var n;
            return (n = r.length ? r.pop() : new c).init(t, e, i, s), n
        }

        function a(t) {
            r.length < 100 && r.push(t)
        }

        function c() {
            this.starttime = 0, this.time = 0, this.lasttime = 0, this.startx = 0, this.starty = 0, this.x = 0, this.y = 0, this.lastx = 0, this.lasty = 0, this.id = 0, this.startindex = 0, this.triggeredHold = !1, this.tooFarForHold = !1
        }
        c.prototype.init = function(t, e, i, s) {
            var n = cr.performance_now();
            this.time = n, this.lasttime = n, this.starttime = n, this.startx = t, this.starty = e, this.x = t, this.y = e, this.lastx = t, this.lasty = e, this.width = 0, this.height = 0, this.pressure = 0, this.id = i, this.startindex = s, this.triggeredHold = !1, this.tooFarForHold = !1
        }, c.prototype.update = function(t, e, i, s, n, r) {
            this.lasttime = this.time, this.time = t, this.lastx = this.x, this.lasty = this.y, this.x = e, this.y = i, this.width = s, this.height = n, this.pressure = r, !this.tooFarForHold && 15 <= cr.distanceTo(this.startx, this.starty, this.x, this.y) && (this.tooFarForHold = !0)
        }, c.prototype.maybeTriggerHold = function(t, e) {
            this.triggeredHold || 500 <= cr.performance_now() - this.starttime && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (this.triggeredHold = !0, t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnHoldGestureObject, t), t.getTouchIndex = 0)
        };
        var l = -1e3,
            p = -1e3,
            d = -1e4;
        c.prototype.maybeTriggerTap = function(t, e) {
            if (!this.triggeredHold) {
                var i = cr.performance_now();
                i - this.starttime <= 333 && !this.tooFarForHold && cr.distanceTo(this.startx, this.starty, this.x, this.y) < 15 && (t.trigger_index = this.startindex, t.trigger_id = this.id, t.getTouchIndex = e, d = i - d <= 666 && cr.distanceTo(l, p, this.x, this.y) < 25 ? (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnDoubleTapGestureObject, t), p = l = -1e3, -1e4) : (t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGesture, t), t.curTouchX = this.x, t.curTouchY = this.y, t.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTapGestureObject, t), l = this.x, p = this.y, i), t.getTouchIndex = 0)
            }
        }, e.onCreate = function() {
            this.isWindows8 = !(void 0 === window.c2isWindows8 || !window.c2isWindows8), this.orient_alpha = 0, this.orient_beta = 0, this.orient_gamma = 0, this.acc_g_x = 0, this.acc_g_y = 0, this.acc_g_z = 0, this.acc_x = 0, this.acc_y = 0, this.acc_z = 0, this.curTouchX = 0, this.curTouchY = 0, this.trigger_index = 0, this.trigger_id = 0, this.getTouchIndex = 0, this.useMouseInput = 0 !== this.properties[0];
            var t = 0 < this.runtime.fullscreen_mode ? document : this.runtime.canvas,
                e = document;
            this.runtime.isDirectCanvas ? e = t = window.Canvas : this.runtime.isCocoonJs && (e = t = window);
            var i = this;
            if ("undefined" != typeof PointerEvent ? (t.addEventListener("pointerdown", function(t) {
                    i.onPointerStart(t)
                }, !1), t.addEventListener("pointermove", function(t) {
                    i.onPointerMove(t)
                }, !1), e.addEventListener("pointerup", function(t) {
                    i.onPointerEnd(t, !1)
                }, !1), e.addEventListener("pointercancel", function(t) {
                    i.onPointerEnd(t, !0)
                }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
                    t.preventDefault()
                }, !1), document.addEventListener("MSGestureHold", function(t) {
                    t.preventDefault()
                }, !1), this.runtime.canvas.addEventListener("gesturehold", function(t) {
                    t.preventDefault()
                }, !1), document.addEventListener("gesturehold", function(t) {
                    t.preventDefault()
                }, !1))) : window.navigator.msPointerEnabled ? (t.addEventListener("MSPointerDown", function(t) {
                    i.onPointerStart(t)
                }, !1), t.addEventListener("MSPointerMove", function(t) {
                    i.onPointerMove(t)
                }, !1), e.addEventListener("MSPointerUp", function(t) {
                    i.onPointerEnd(t, !1)
                }, !1), e.addEventListener("MSPointerCancel", function(t) {
                    i.onPointerEnd(t, !0)
                }, !1), this.runtime.canvas && (this.runtime.canvas.addEventListener("MSGestureHold", function(t) {
                    t.preventDefault()
                }, !1), document.addEventListener("MSGestureHold", function(t) {
                    t.preventDefault()
                }, !1))) : (t.addEventListener("touchstart", function(t) {
                    i.onTouchStart(t)
                }, !1), t.addEventListener("touchmove", function(t) {
                    i.onTouchMove(t)
                }, !1), e.addEventListener("touchend", function(t) {
                    i.onTouchEnd(t, !1)
                }, !1), e.addEventListener("touchcancel", function(t) {
                    i.onTouchEnd(t, !0)
                }, !1)), this.isWindows8) {
                function s(t) {
                    var e = t.reading;
                    i.acc_x = e.accelerationX, i.acc_y = e.accelerationY, i.acc_z = e.accelerationZ
                }

                function n(t) {
                    var e = t.reading;
                    i.orient_alpha = e.yawDegrees, i.orient_beta = e.pitchDegrees, i.orient_gamma = e.rollDegrees
                }
                var r = Windows.Devices.Sensors.Accelerometer.getDefault();
                r && (r.reportInterval = Math.max(r.minimumReportInterval, 16), r.addEventListener("readingchanged", s));
                var a = Windows.Devices.Sensors.Inclinometer.getDefault();
                a && (a.reportInterval = Math.max(a.minimumReportInterval, 16), a.addEventListener("readingchanged", n)), document.addEventListener("visibilitychange", function(t) {
                    document.hidden || document.msHidden ? (r && r.removeEventListener("readingchanged", s), a && a.removeEventListener("readingchanged", n)) : (r && r.addEventListener("readingchanged", s), a && a.addEventListener("readingchanged", n))
                }, !1)
            } else window.addEventListener("deviceorientation", function(t) {
                i.orient_alpha = t.alpha || 0, i.orient_beta = t.beta || 0, i.orient_gamma = t.gamma || 0
            }, !1), window.addEventListener("devicemotion", function(t) {
                t.accelerationIncludingGravity && (i.acc_g_x = t.accelerationIncludingGravity.x || 0, i.acc_g_y = t.accelerationIncludingGravity.y || 0, i.acc_g_z = t.accelerationIncludingGravity.z || 0), t.acceleration && (i.acc_x = t.acceleration.x || 0, i.acc_y = t.acceleration.y || 0, i.acc_z = t.acceleration.z || 0)
            }, !1);
            this.useMouseInput && !this.runtime.isDomFree && (jQuery(document).mousemove(function(t) {
                i.onMouseMove(t)
            }), jQuery(document).mousedown(function(t) {
                i.onMouseDown(t)
            }), jQuery(document).mouseup(function(t) {
                i.onMouseUp(t)
            })), !this.runtime.isiOS && this.runtime.isCordova && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(o, null, {
                frequency: 40
            }), this.runtime.tick2Me(this)
        }, e.onPointerMove = function(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && t.preventDefault();
                var e = this.findTouch(t.pointerId),
                    i = cr.performance_now();
                if (0 <= e) {
                    var s = this.runtime.isDomFree ? u : jQuery(this.runtime.canvas).offset(),
                        n = this.touches[e];
                    if (i - n.time < 2) return;
                    n.update(i, t.pageX - s.left, t.pageY - s.top, t.width || 0, t.height || 0, t.pressure || 0)
                }
            }
        }, e.onPointerStart = function(t) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var e = this.runtime.isDomFree ? u : jQuery(this.runtime.canvas).offset(),
                    i = t.pageX - e.left,
                    s = t.pageY - e.top;
                cr.performance_now();
                this.trigger_index = this.touches.length, this.trigger_id = t.pointerId, this.touches.push(h(i, s, t.pointerId, this.trigger_index)), this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = i, this.curTouchY = s, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this), this.runtime.isInUserInputEvent = !1
            }
        }, e.onPointerEnd = function(t, e) {
            if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType) {
                t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
                var i = this.findTouch(t.pointerId);
                this.trigger_index = 0 <= i ? this.touches[i].startindex : -1, this.trigger_id = 0 <= i ? this.touches[i].id : -1, this.runtime.isInUserInputEvent = !0, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), 0 <= i && (e || this.touches[i].maybeTriggerTap(this, i), a(this.touches[i]), this.touches.splice(i, 1)), this.runtime.isInUserInputEvent = !1
            }
        }, e.onTouchMove = function(t) {
            t.preventDefault && t.preventDefault();
            var e, i, s, n, r = cr.performance_now();
            for (e = 0, i = t.changedTouches.length; e < i; e++) {
                s = t.changedTouches[e];
                var a = this.findTouch(s.identifier);
                if (0 <= a) {
                    var o = this.runtime.isDomFree ? u : jQuery(this.runtime.canvas).offset();
                    if (r - (n = this.touches[a]).time < 2) continue;
                    var h = 2 * (s.radiusX || s.webkitRadiusX || s.mozRadiusX || s.msRadiusX || 0),
                        c = 2 * (s.radiusY || s.webkitRadiusY || s.mozRadiusY || s.msRadiusY || 0),
                        l = s.force || s.webkitForce || s.mozForce || s.msForce || 0;
                    n.update(r, s.pageX - o.left, s.pageY - o.top, h, c, l)
                }
            }
        }, e.onTouchStart = function(t) {
            t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault();
            var e, i, s, n = this.runtime.isDomFree ? u : jQuery(this.runtime.canvas).offset();
            cr.performance_now();
            for (this.runtime.isInUserInputEvent = !0, e = 0, i = t.changedTouches.length; e < i; e++)
                if (s = t.changedTouches[e], -1 === this.findTouch(s.identifier)) {
                    var r = s.pageX - n.left,
                        a = s.pageY - n.top;
                    this.trigger_index = this.touches.length, this.trigger_id = s.identifier, this.touches.push(h(r, a, s.identifier, this.trigger_index)), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchStart, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchStart, this), this.curTouchX = r, this.curTouchY = a, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchObject, this)
                }
            this.runtime.isInUserInputEvent = !1
        }, e.onTouchEnd = function(t, e) {
            var i, s, n, r;
            for (t.preventDefault && cr.isCanvasInputEvent(t) && t.preventDefault(), this.runtime.isInUserInputEvent = !0, i = 0, s = t.changedTouches.length; i < s; i++) n = t.changedTouches[i], 0 <= (r = this.findTouch(n.identifier)) && (this.trigger_index = this.touches[r].startindex, this.trigger_id = this.touches[r].id, this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnNthTouchEnd, this), this.runtime.trigger(cr.plugins_.Touch.prototype.cnds.OnTouchEnd, this), e || this.touches[r].maybeTriggerTap(this, r), a(this.touches[r]), this.touches.splice(r, 1));
            this.runtime.isInUserInputEvent = !1
        }, e.getAlpha = function() {
            return this.runtime.isCordova && 0 === this.orient_alpha && 0 !== n ? 90 * n : this.orient_alpha
        }, e.getBeta = function() {
            return this.runtime.isCordova && 0 === this.orient_beta && 0 !== s ? 90 * s : this.orient_beta
        }, e.getGamma = function() {
            return this.runtime.isCordova && 0 === this.orient_gamma && 0 !== i ? 90 * i : this.orient_gamma
        };

        function f() {}
        e.onMouseDown = function(t) {
            var e = {
                changedTouches: [{
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                }]
            };
            this.onTouchStart(e), this.mouseDown = !0
        }, e.onMouseMove = function(t) {
            if (this.mouseDown) {
                var e = {
                    changedTouches: [{
                        pageX: t.pageX,
                        pageY: t.pageY,
                        identifier: 0
                    }]
                };
                this.onTouchMove(e)
            }
        }, e.onMouseUp = function(t) {
            t.preventDefault && this.runtime.had_a_click && !this.runtime.isMobile && t.preventDefault(), this.runtime.had_a_click = !0;
            var e = {
                changedTouches: [{
                    pageX: t.pageX,
                    pageY: t.pageY,
                    identifier: 0
                }]
            };
            this.onTouchEnd(e), this.mouseDown = !1
        }, e.tick2 = function() {
            var t, e, i, s = cr.performance_now();
            for (t = 0, e = this.touches.length; t < e; ++t)(i = this.touches[t]).time <= s - 50 && (i.lasttime = s), i.maybeTriggerHold(this, t)
        }, f.prototype.OnTouchStart = function() {
            return !0
        }, f.prototype.OnTouchEnd = function() {
            return !0
        }, f.prototype.IsInTouch = function() {
            return this.touches.length
        }, f.prototype.OnTouchObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        };
        var g = [];

        function m() {}
        f.prototype.IsTouchingObject = function(t) {
            if (!t) return !1;
            var e, i, s, n, r, a, o = t.getCurrentSol(),
                h = o.getObjects();
            for (s = 0, n = h.length; s < n; s++) {
                var c = h[s];
                for (c.update_bbox(), r = 0, a = this.touches.length; r < a; r++) {
                    var l = this.touches[r];
                    if (e = c.layer.canvasToLayer(l.x, l.y, !0), i = c.layer.canvasToLayer(l.x, l.y, !1), c.contains_pt(e, i)) {
                        g.push(c);
                        break
                    }
                }
            }
            return !!g.length && (o.select_all = !1, cr.shallowAssignArray(o.instances, g), t.applySolToContainer(), cr.clearArray(g), !0)
        }, f.prototype.CompareTouchSpeed = function(t, e, i) {
            if ((t = Math.floor(t)) < 0 || t >= this.touches.length) return !1;
            var s = this.touches[t],
                n = cr.distanceTo(s.x, s.y, s.lastx, s.lasty),
                r = (s.time - s.lasttime) / 1e3,
                a = 0;
            return 0 < r && (a = n / r), cr.do_cmp(a, e, i)
        }, f.prototype.OrientationSupported = function() {
            return void 0 !== window.DeviceOrientationEvent
        }, f.prototype.MotionSupported = function() {
            return void 0 !== window.DeviceMotionEvent
        }, f.prototype.CompareOrientation = function(t, e, i) {
            var s = 0;
            return s = 0 === t ? this.getAlpha() : 1 === t ? this.getBeta() : this.getGamma(), cr.do_cmp(s, e, i)
        }, f.prototype.CompareAcceleration = function(t, e, i) {
            var s = 0;
            return 0 === t ? s = this.acc_g_x : 1 === t ? s = this.acc_g_y : 2 === t ? s = this.acc_g_z : 3 === t ? s = this.acc_x : 4 === t ? s = this.acc_y : 5 === t && (s = this.acc_z), cr.do_cmp(s, e, i)
        }, f.prototype.OnNthTouchStart = function(t) {
            return (t = Math.floor(t)) === this.trigger_index
        }, f.prototype.OnNthTouchEnd = function(t) {
            return (t = Math.floor(t)) === this.trigger_index
        }, f.prototype.HasNthTouch = function(t) {
            return t = Math.floor(t), this.touches.length >= t + 1
        }, f.prototype.OnHoldGesture = function() {
            return !0
        }, f.prototype.OnTapGesture = function() {
            return !0
        }, f.prototype.OnDoubleTapGesture = function() {
            return !0
        }, f.prototype.OnHoldGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, f.prototype.OnTapGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, f.prototype.OnDoubleTapGestureObject = function(t) {
            return !!t && this.runtime.testAndSelectCanvasPointOverlap(t, this.curTouchX, this.curTouchY, !1)
        }, t.cnds = new f, m.prototype.TouchCount = function(t) {
            t.set_int(this.touches.length)
        }, m.prototype.X = function(t, e) {
            var i, s, n, r, a, o = this.getTouchIndex;
            o < 0 || o >= this.touches.length ? t.set_float(0) : cr.is_undefined(e) ? (s = (i = this.runtime.getLayerByNumber(0)).scale, n = i.zoomRate, r = i.parallaxX, a = i.angle, i.scale = 1, i.zoomRate = 1, i.parallaxX = 1, i.angle = 0, t.set_float(i.canvasToLayer(this.touches[o].x, this.touches[o].y, !0)), i.scale = s, i.zoomRate = n, i.parallaxX = r, i.angle = a) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.touches[o].x, this.touches[o].y, !0)) : t.set_float(0)
        }, m.prototype.XAt = function(t, e, i) {
            var s, n, r, a, o;
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : cr.is_undefined(i) ? (n = (s = this.runtime.getLayerByNumber(0)).scale, r = s.zoomRate, a = s.parallaxX, o = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxX = 1, s.angle = 0, t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)), s.scale = n, s.zoomRate = r, s.parallaxX = a, s.angle = o) : (s = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !0)) : t.set_float(0)
        }, m.prototype.XForID = function(t, e, i) {
            var s = this.findTouch(e);
            if (s < 0) t.set_float(0);
            else {
                var n, r, a, o, h, c = this.touches[s];
                cr.is_undefined(i) ? (r = (n = this.runtime.getLayerByNumber(0)).scale, a = n.zoomRate, o = n.parallaxX, h = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxX = 1, n.angle = 0, t.set_float(n.canvasToLayer(c.x, c.y, !0)), n.scale = r, n.zoomRate = a, n.parallaxX = o, n.angle = h) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(c.x, c.y, !0)) : t.set_float(0)
            }
        }, m.prototype.Y = function(t, e) {
            var i, s, n, r, a, o = this.getTouchIndex;
            o < 0 || o >= this.touches.length ? t.set_float(0) : cr.is_undefined(e) ? (s = (i = this.runtime.getLayerByNumber(0)).scale, n = i.zoomRate, r = i.parallaxY, a = i.angle, i.scale = 1, i.zoomRate = 1, i.parallaxY = 1, i.angle = 0, t.set_float(i.canvasToLayer(this.touches[o].x, this.touches[o].y, !1)), i.scale = s, i.zoomRate = n, i.parallaxY = r, i.angle = a) : (i = cr.is_number(e) ? this.runtime.getLayerByNumber(e) : this.runtime.getLayerByName(e)) ? t.set_float(i.canvasToLayer(this.touches[o].x, this.touches[o].y, !1)) : t.set_float(0)
        }, m.prototype.YAt = function(t, e, i) {
            var s, n, r, a, o;
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : cr.is_undefined(i) ? (n = (s = this.runtime.getLayerByNumber(0)).scale, r = s.zoomRate, a = s.parallaxY, o = s.angle, s.scale = 1, s.zoomRate = 1, s.parallaxY = 1, s.angle = 0, t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)), s.scale = n, s.zoomRate = r, s.parallaxY = a, s.angle = o) : (s = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(s.canvasToLayer(this.touches[e].x, this.touches[e].y, !1)) : t.set_float(0)
        }, m.prototype.YForID = function(t, e, i) {
            var s = this.findTouch(e);
            if (s < 0) t.set_float(0);
            else {
                var n, r, a, o, h, c = this.touches[s];
                cr.is_undefined(i) ? (r = (n = this.runtime.getLayerByNumber(0)).scale, a = n.zoomRate, o = n.parallaxY, h = n.angle, n.scale = 1, n.zoomRate = 1, n.parallaxY = 1, n.angle = 0, t.set_float(n.canvasToLayer(c.x, c.y, !1)), n.scale = r, n.zoomRate = a, n.parallaxY = o, n.angle = h) : (n = cr.is_number(i) ? this.runtime.getLayerByNumber(i) : this.runtime.getLayerByName(i)) ? t.set_float(n.canvasToLayer(c.x, c.y, !1)) : t.set_float(0)
            }
        }, m.prototype.AbsoluteX = function(t) {
            this.touches.length ? t.set_float(this.touches[0].x) : t.set_float(0)
        }, m.prototype.AbsoluteXAt = function(t, e) {
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].x)
        }, m.prototype.AbsoluteXForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(s.x)
            }
        }, m.prototype.AbsoluteY = function(t) {
            this.touches.length ? t.set_float(this.touches[0].y) : t.set_float(0)
        }, m.prototype.AbsoluteYAt = function(t, e) {
            (e = Math.floor(e)) < 0 || e >= this.touches.length ? t.set_float(0) : t.set_float(this.touches[e].y)
        }, m.prototype.AbsoluteYForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(s.y)
            }
        }, m.prototype.SpeedAt = function(t, e) {
            if ((e = Math.floor(e)) < 0 || e >= this.touches.length) t.set_float(0);
            else {
                var i = this.touches[e],
                    s = cr.distanceTo(i.x, i.y, i.lastx, i.lasty),
                    n = (i.time - i.lasttime) / 1e3;
                n <= 0 ? t.set_float(0) : t.set_float(s / n)
            }
        }, m.prototype.SpeedForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i],
                    n = cr.distanceTo(s.x, s.y, s.lastx, s.lasty),
                    r = (s.time - s.lasttime) / 1e3;
                r <= 0 ? t.set_float(0) : t.set_float(n / r)
            }
        }, m.prototype.AngleAt = function(t, e) {
            if ((e = Math.floor(e)) < 0 || e >= this.touches.length) t.set_float(0);
            else {
                var i = this.touches[e];
                t.set_float(cr.to_degrees(cr.angleTo(i.lastx, i.lasty, i.x, i.y)))
            }
        }, m.prototype.AngleForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(cr.to_degrees(cr.angleTo(s.lastx, s.lasty, s.x, s.y)))
            }
        }, m.prototype.Alpha = function(t) {
            t.set_float(this.getAlpha())
        }, m.prototype.Beta = function(t) {
            t.set_float(this.getBeta())
        }, m.prototype.Gamma = function(t) {
            t.set_float(this.getGamma())
        }, m.prototype.AccelerationXWithG = function(t) {
            t.set_float(this.acc_g_x)
        }, m.prototype.AccelerationYWithG = function(t) {
            t.set_float(this.acc_g_y)
        }, m.prototype.AccelerationZWithG = function(t) {
            t.set_float(this.acc_g_z)
        }, m.prototype.AccelerationX = function(t) {
            t.set_float(this.acc_x)
        }, m.prototype.AccelerationY = function(t) {
            t.set_float(this.acc_y)
        }, m.prototype.AccelerationZ = function(t) {
            t.set_float(this.acc_z)
        }, m.prototype.TouchIndex = function(t) {
            t.set_int(this.trigger_index)
        }, m.prototype.TouchID = function(t) {
            t.set_float(this.trigger_id)
        }, m.prototype.WidthForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(s.width)
            }
        }, m.prototype.HeightForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(s.height)
            }
        }, m.prototype.PressureForID = function(t, e) {
            var i = this.findTouch(e);
            if (i < 0) t.set_float(0);
            else {
                var s = this.touches[i];
                t.set_float(s.pressure)
            }
        }, t.exps = new m
    }(), cr.behaviors.Pathfinding = function(t) {
        this.runtime = t
    },
    function() {
        var i = {},
            t = cr.behaviors.Pathfinding.prototype;
        t.onBeforeLayoutChange = function() {
            var t, e;
            for (t in i) i.hasOwnProperty(t) && ((e = i[t]).pathfinder.unsetReady(), e.regenerate = !0)
        }, t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {
            this.obstacleTypes = [], this.costTypes = []
        }, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;
        e.onCreate = function() {
            this.cellSize = this.properties[0], this.cellSize < 3 && (this.cellSize = 3), this.cellBorder = this.properties[1], this.obstacles = this.properties[2], this.maxSpeed = this.properties[3], this.acc = this.properties[4], this.dec = this.properties[5], this.av = cr.to_radians(this.properties[6]), this.rotateEnabled = 0 !== this.properties[7], this.diagonalsEnabled = 0 !== this.properties[8], this.enabled = 0 !== this.properties[9], this.isMoving = !1, this.movingFromStopped = !1, this.firstTickMovingWhileMoving = !1, this.hasPath = !1, this.moveNode = 0, this.a = this.inst.angle, this.lastKnownAngle = this.inst.angle, this.s = 0, this.rabbitX = 0, this.rabbitY = 0, this.rabbitA = 0, this.myHcells = Math.ceil(this.runtime.running_layout.width / this.cellSize), this.myVcells = Math.ceil(this.runtime.running_layout.height / this.cellSize), this.myPath = [], this.delayFindPath = !1, this.delayPathX = 0, this.delayPathY = 0, this.is_destroyed = !1, this.isCalculating = !1, this.calcPathX = 0, this.calcPathY = 0, this.firstRun = !0;
            var t = this;
            this.recycled || (this.pathSuccessFn = function() {
                t.is_destroyed || (t.isCalculating = !1, t.copyResultPath(), t.hasPath = 0 < t.myPath.length, t.moveNode = 0, t.runtime.trigger(cr.behaviors.Pathfinding.prototype.cnds.OnPathFound, t.inst), t.doDelayFindPath())
            }, this.pathFailFn = function() {
                t.is_destroyed || (t.isCalculating = !1, t.clearResultPath(), t.hasPath = !1, t.isMoving = !1, t.moveNode = 0, t.runtime.trigger(cr.behaviors.Pathfinding.prototype.cnds.OnFailedToFindPath, t.inst), t.doDelayFindPath())
            })
        }, e.onDestroy = function() {
            this.is_destroyed = !0, this.delayFindPath = !1
        }, e.saveToJSON = function() {
            var t, e, i = {
                cs: this.cellSize,
                cb: this.cellBorder,
                ms: this.maxSpeed,
                acc: this.acc,
                dec: this.dec,
                av: this.av,
                re: this.rotateEnabled,
                de: this.diagonalsEnabled,
                im: this.isMoving,
                mfs: this.movingFromStopped,
                ftmwm: this.firstTickMovingWhileMoving,
                hp: this.hasPath,
                mn: this.moveNode,
                a: this.a,
                lka: this.lastKnownAngle,
                s: this.s,
                rx: this.rabbitX,
                ry: this.rabbitY,
                ra: this.rabbitA,
                myhc: this.myHcells,
                myvc: this.myVcells,
                path: this.myPath,
                en: this.enabled,
                fr: this.firstRun,
                obs: [],
                costs: []
            };
            for (this.isCalculating ? (i.dfp = !0, i.dpx = this.calcPathX, i.dpy = this.calcPathY) : (i.dfp = this.delayFindPath, i.dpx = this.delayPathX, i.dpy = this.delayPathY), t = 0, e = this.type.obstacleTypes.length; t < e; t++) i.obs.push(this.type.obstacleTypes[t].sid);
            for (t = 0, e = this.type.costTypes.length; t < e; t++) i.costs.push({
                sid: this.type.costTypes[t].obj.sid,
                cost: this.type.costTypes[t].cost
            });
            return i
        }, e.loadFromJSON = function(t) {
            this.cellSize = t.cs, this.cellBorder = t.cb, this.maxSpeed = t.ms, this.acc = t.acc, this.dec = t.dec, this.av = t.av, this.rotateEnabled = t.re, this.diagonalsEnabled = t.de, this.isMoving = t.im, this.movingFromStopped = t.mfs, this.firstTickMovingWhileMoving = t.ftmwm, this.hasPath = t.hp, this.moveNode = t.mn, this.a = t.a, this.lastKnownAngle = t.lka, this.s = t.s, this.rabbitX = t.rx, this.rabbitY = t.ry, this.rabbitA = t.ra, this.myHcells = t.myhc, this.myVcells = t.myvc, this.myPath = t.path, this.enabled = t.en, this.firstRun = t.fr, this.delayFindPath = t.dfp, this.delayPathX = t.dpx, this.delayPathY = t.dpy, cr.clearArray(this.type.obstacleTypes);
            var e, i, s, n = t.obs;
            for (e = 0, i = n.length; e < i; e++)(s = this.runtime.getObjectTypeBySid(n[e])) && this.type.obstacleTypes.push(s);
            cr.clearArray(this.type.costTypes);
            var r = t.costs;
            for (e = 0, i = r.length; e < i; e++)(s = this.runtime.getObjectTypeBySid(r[e].sid)) && this.type.costTypes.push({
                obj: s,
                cost: r[e].cost
            });
            this.getMyInfo().pathfinder.setDiagonals(this.diagonalsEnabled)
        }, e.afterLoad = function() {
            this.getMyInfo().regenerate = !0
        }, e.tick = function() {
            if (this.enabled && this.isMoving) {
                this.rotateEnabled && this.inst.angle !== this.lastKnownAngle && (this.a = this.inst.angle);
                var t, e, i, s, n, r, a = this.runtime.getDt(this.inst),
                    o = this.inst,
                    h = Math.min(.4 * this.maxSpeed, 2 * Math.abs(this.inst.width)),
                    c = Math.max(1.5 * this.s, 30);
                this.moveNode < this.myPath.length ? (i = this.myPath[this.moveNode].x, s = this.myPath[this.moveNode].y, cr.distanceTo(this.rabbitX, this.rabbitY, i, s) < 3 * c * a && (this.moveNode++, this.rabbitX = i, this.rabbitY = s, this.moveNode < this.myPath.length && (i = this.myPath[this.moveNode].x, s = this.myPath[this.moveNode].y))) : (i = this.myPath[this.myPath.length - 1].x, s = this.myPath[this.myPath.length - 1].y), this.rabbitA = cr.angleTo(this.rabbitX, this.rabbitY, i, s);
                var l, u = cr.distanceTo(o.x, o.y, this.rabbitX, this.rabbitY);
                if (u < h && this.moveNode < this.myPath.length) this.firstTickMovingWhileMoving ? (l = h, this.firstTickMovingWhileMoving = !1) : l = c * a, this.rabbitX += Math.cos(this.rabbitA) * l, this.rabbitY += Math.sin(this.rabbitA) * l;
                t = cr.angleTo(o.x, o.y, this.rabbitX, this.rabbitY), e = cr.angleDiff(this.a, t);
                var p = cr.distanceTo(o.x, o.y, this.myPath[this.myPath.length - 1].x, this.myPath[this.myPath.length - 1].y),
                    d = this.maxSpeed * this.maxSpeed / (2 * this.dec);
                return 1 < u && (this.a = cr.angleRotate(this.a, t, this.av * a), cr.to_degrees(e) <= .5 ? r = this.maxSpeed : 120 <= cr.to_degrees(e) || this.movingFromStopped && 0 === this.moveNode ? (r = 0, this.movingFromStopped = !0) : (n = e / this.av, (r = cr.distanceTo(o.x, o.y, this.rabbitX, this.rabbitY) / (2 * Math.sin(e)) * e / n) < 0 && (r = 0), r > this.maxSpeed && (r = this.maxSpeed)), p < d && (r = Math.min(r, p / d * this.maxSpeed + this.maxSpeed / 40)), this.s += this.acc * a, this.s > r && (this.s = r)), o.x += Math.cos(this.a) * this.s * a, o.y += Math.sin(this.a) * this.s * a, this.rotateEnabled && (o.angle = this.a, this.lastKnownAngle = this.a), o.set_bbox_changed(), this.moveNode === this.myPath.length && cr.distanceTo(o.x, o.y, i, s) < Math.max(3 * this.s * a, 10) ? (this.isMoving = !1, this.hasPath = !1, this.moveNode = 0, this.s = 0, void this.runtime.trigger(cr.behaviors.Pathfinding.prototype.cnds.OnArrived, o)) : void 0
            }
        }, e.tick2 = function() {
            this.enabled && (this.generateMap(), this.doDelayFindPath())
        }, e.doDelayFindPath = function() {
            this.delayFindPath && !this.is_destroyed && (this.delayFindPath = !1, this.doFindPath(this.inst.x, this.inst.y, this.delayPathX, this.delayPathY))
        }, e.getMyInfo = function() {
            var t = this.cellSize + "," + this.cellBorder;
            return i.hasOwnProperty(t) || (i[t] = {
                pathfinder: new window.Pathfinder,
                cells: null,
                regenerate: !1,
                regenerateRegions: []
            }), i[t]
        }, e.generateMap = function() {
            var t, e, i, s, n, r, a, o, h, c, l, u = this.getMyInfo();
            if (!u.pathfinder.isReady() || u.regenerate || u.regenerateRegions.length)
                if (!u.pathfinder.isReady() || u.regenerate) {
                    for (this.myHcells = Math.ceil(this.runtime.running_layout.width / this.cellSize), this.myVcells = Math.ceil(this.runtime.running_layout.height / this.cellSize), (t = []).length = this.myHcells, s = this.myHcells, n = this.myVcells, e = 0; e < s; ++e)
                        for (t[e] = [], t[e].length = n, i = 0; i < n; ++i) t[e][i] = this.queryCellCollision(e, i);
                    u.cells = t, u.pathfinder.init(this.myHcells, this.myVcells, t, this.diagonalsEnabled), u.regenerate = !1, cr.clearArray(u.regenerateRegions)
                } else if (u.regenerateRegions.length) {
                for (r = 0, a = u.regenerateRegions.length; r < a; ++r) {
                    for (h = (o = u.regenerateRegions[r])[0], c = o[1], s = o[2] - h, n = o[3] - c, (t = []).length = s, e = 0; e < s; ++e)
                        for (t[e] = [], t[e].length = n, i = 0; i < n; ++i) l = this.queryCellCollision(h + e, c + i), t[e][i] = l, u.cells[h + e][c + i] = l;
                    u.pathfinder.updateRegion(h, c, s, n, t)
                }
                cr.clearArray(u.regenerateRegions)
            }
        }, e.clearResultPath = function() {
            var t, e;
            for (t = 0, e = this.myPath.length; t < e; t++) window.freeResultNode(this.myPath[t]);
            cr.clearArray(this.myPath)
        }, e.copyResultPath = function() {
            var t, e, i, s, n = this.getMyInfo().pathfinder.pathList;
            for (this.clearResultPath(), t = 0, e = n.length; t < e; t++) i = n[t], (s = window.allocResultNode()).x = (i.x + .5) * this.cellSize, s.y = (i.y + .5) * this.cellSize, this.myPath.push(s)
        };
        var c = [],
            l = new cr.rect;

        function s() {}

        function n() {}

        function r() {}
        e.queryCellCollision = function(t, e) {
            var i, s, n, r, a, o, h = 0;
            if (l.left = t * this.cellSize - this.cellBorder, l.top = e * this.cellSize - this.cellBorder, l.right = (t + 1) * this.cellSize + this.cellBorder, l.bottom = (e + 1) * this.cellSize + this.cellBorder, 0 === this.obstacles) {
                if (this.runtime.testRectOverlapSolid(l)) return window.PF_OBSTACLE
            } else {
                for (this.runtime.getTypesCollisionCandidates(this.inst.layer, this.type.obstacleTypes, l, c), i = 0, s = c.length; i < s; ++i)
                    if (this.runtime.testRectOverlap(l, c[i])) return cr.clearArray(c), window.PF_OBSTACLE;
                c.length = 0
            }
            for (i = 0, s = this.type.costTypes.length; i < s; i++) {
                for (n = this.type.costTypes[i].obj, o = this.type.costTypes[i].cost, this.runtime.getCollisionCandidates(this.inst.layer, n, l, c), r = 0, a = c.length; r < a; ++r) this.runtime.testRectOverlap(l, c[r]) && (h += o);
                cr.clearArray(c)
            }
            return h
        }, e.doFindPath = function(t, e, i, s) {
            var n = this.getMyInfo().pathfinder;
            if (!n.isReady()) return !1;
            this.isCalculating = !0, this.calcPathX = i, this.calcPathY = s;
            var r, a, o, h, c, l, u, p, d = Math.floor(t / this.cellSize),
                f = Math.floor(e / this.cellSize),
                g = Math.floor(i / this.cellSize),
                m = Math.floor(s / this.cellSize);
            if (n.at(g, m) === window.PF_OBSTACLE) {
                for (r = 1e6, h = o = a = 0; h < this.myHcells; h++)
                    for (c = 0; c < this.myVcells; c++) n.at(h, c) !== window.PF_OBSTACLE && (p = (l = g - h) * l + (u = m - c) * u) < r && (r = p, a = h, o = c);
                g = a, m = o
            }
            n.findPath(d, f, g, m, this.pathSuccessFn, this.pathFailFn)
        }, s.prototype.OnPathFound = function() {
            return !0
        }, s.prototype.OnFailedToFindPath = function() {
            return !0
        }, s.prototype.IsCellObstacle = function(t, e) {
            return this.getMyInfo().pathfinder.at(t, e) === window.PF_OBSTACLE
        }, s.prototype.IsCalculatingPath = function() {
            return this.isCalculating
        }, s.prototype.IsMoving = function() {
            return this.isMoving
        }, s.prototype.OnArrived = function() {
            return !0
        }, s.prototype.CompareSpeed = function(t, e) {
            return cr.do_cmp(this.isMoving ? this.s : 0, t, e)
        }, s.prototype.DiagonalsEnabled = function(t, e) {
            return this.diagonalsEnabled
        }, t.cnds = new s, n.prototype.FindPath = function(t, e) {
            this.enabled && (this.isCalculating || !this.getMyInfo().pathfinder.isReady() ? (this.delayFindPath = !0, this.delayPathX = t, this.delayPathY = e) : this.doFindPath(this.inst.x, this.inst.y, t, e))
        }, n.prototype.StartMoving = function() {
            this.hasPath && (this.isMoving && (this.firstTickMovingWhileMoving = !0), this.movingFromStopped = !this.isMoving, this.isMoving = !0, this.rabbitX = this.inst.x, this.rabbitY = this.inst.y, this.rabbitA = this.inst.angle)
        }, n.prototype.Stop = function() {
            this.isMoving = !1
        }, n.prototype.SetEnabled = function(t) {
            this.enabled = 0 !== t
        }, n.prototype.RegenerateMap = function() {
            this.getMyInfo().regenerate = !0
        }, n.prototype.AddObstacle = function(t) {
            var e = this.type.obstacleTypes;
            if (-1 === e.indexOf(t)) {
                var i, s, n;
                for (i = 0, s = e.length; i < s; i++)
                    if ((n = e[i]).is_family && -1 !== n.members.indexOf(t)) return;
                e.push(t)
            }
        }, n.prototype.ClearObstacles = function() {
            cr.clearArray(this.type.obstacleTypes)
        }, n.prototype.AddCost = function(t, e) {
            var i, s, n, r = this.type.costTypes;
            for (i = 0, s = r.length; i < s; i++) {
                if ((n = r[i].obj) === t) return;
                if (n.is_family && -1 !== n.members.indexOf(t)) return
            }
            r.push({
                obj: t,
                cost: e
            })
        }, n.prototype.ClearCost = function() {
            cr.clearArray(this.type.costTypes)
        }, n.prototype.SetMaxSpeed = function(t) {
            this.maxSpeed = t
        }, n.prototype.SetSpeed = function(t) {
            t < 0 && (t = 0), t > this.maxSpeed && (t = this.maxSpeed), this.s = t
        }, n.prototype.SetAcc = function(t) {
            this.acc = t
        }, n.prototype.SetDec = function(t) {
            this.dec = t
        }, n.prototype.SetRotateSpeed = function(t) {
            this.av = cr.to_radians(t)
        }, n.prototype.SetDiagonalsEnabled = function(t) {
            this.diagonalsEnabled = 0 !== t, this.getMyInfo().pathfinder.setDiagonals(this.diagonalsEnabled)
        }, n.prototype.RegenerateRegion = function(t, e, i, s) {
            this.doRegenerateRegion(t, e, i, s)
        }, n.prototype.RegenerateObjectRegion = function(t) {
            if (t) {
                var e, i, s, n = t.getCurrentSol().getObjects();
                for (e = 0, i = n.length; e < i; ++e)(s = n[e]).update_bbox && (s.update_bbox(), this.doRegenerateRegion(s.bbox.left, s.bbox.top, s.bbox.right, s.bbox.bottom))
            }
        }, e.doRegenerateRegion = function(t, e, i, s) {
            var n = Math.min(t, i) - this.cellBorder,
                r = Math.min(e, s) - this.cellBorder,
                a = Math.max(t, i) + this.cellBorder,
                o = Math.max(e, s) + this.cellBorder,
                h = Math.max(Math.floor(n / this.cellSize), 0),
                c = Math.max(Math.floor(r / this.cellSize), 0),
                l = Math.min(Math.ceil(a / this.cellSize), this.myHcells),
                u = Math.min(Math.ceil(o / this.cellSize), this.myVcells);
            l <= h || u <= c || this.getMyInfo().regenerateRegions.push([h, c, l, u])
        }, t.acts = new n, r.prototype.NodeCount = function(t) {
            t.set_int(this.myPath.length)
        }, r.prototype.NodeXAt = function(t, e) {
            (e = Math.floor(e)) < 0 || e >= this.myPath.length ? t.set_float(0) : t.set_float(this.myPath[e].x)
        }, r.prototype.NodeYAt = function(t, e) {
            (e = Math.floor(e)) < 0 || e >= this.myPath.length ? t.set_float(0) : t.set_float(this.myPath[e].y)
        }, r.prototype.CellSize = function(t) {
            t.set_int(this.cellSize)
        }, r.prototype.RabbitX = function(t) {
            t.set_float(this.rabbitX)
        }, r.prototype.RabbitY = function(t) {
            t.set_float(this.rabbitY)
        }, r.prototype.MaxSpeed = function(t) {
            t.set_float(this.maxSpeed)
        }, r.prototype.Acceleration = function(t) {
            t.set_float(this.acc)
        }, r.prototype.Deceleration = function(t) {
            t.set_float(this.dec)
        }, r.prototype.RotateSpeed = function(t) {
            t.set_float(cr.to_degrees(this.av))
        }, r.prototype.MovingAngle = function(t) {
            t.set_float(cr.to_degrees(this.a))
        }, r.prototype.CurrentNode = function(t) {
            t.set_int(this.moveNode)
        }, r.prototype.Speed = function(t) {
            t.set_float(this.isMoving ? this.s : 0)
        }, t.exps = new r
    }(), cr.behaviors.Rex_MoveTo = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.Rex_MoveTo.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime
        };
        var e = t.Instance.prototype;
        e.onCreate = function() {
            this.enabled = 1 == this.properties[0], this.recycled || (this.move_params = {
                max: 0,
                acc: 0,
                dec: 0
            }), this.move_params.max = this.properties[1], this.move_params.acc = this.properties[2], this.move_params.dec = this.properties[3], this.is_continue_mode = 1 == this.properties[4], this.recycled || (this.target = {
                x: 0,
                y: 0,
                a: 0
            }), this.is_moving = !1, this.current_speed = 0, this.remain_distance = 0, this.remain_dt = 0, this.recycled || (this._pre_pos = {
                x: 0,
                y: 0
            }), this._pre_pos.x = 0, this._pre_pos.y = 0, this._moving_angle_info = i(this._moving_angle_info), this._moving_angle_start_info = i(this._moving_angle_start_info), this._last_tick = null, this.is_my_call = !1
        };
        var i = function(t) {
            return null == t && (t = {}), t.x = 0, t.y = 0, t.a = -1, t
        };

        function s() {}

        function n() {}

        function r() {}
        e.tick = function() {
            if (this.remain_dt = 0, this.enabled && this.is_moving) {
                var t = this.runtime.getDt(this.inst);
                this.move(t)
            }
        }, e.move = function(t) {
            if (0 != t) {
                this._pre_pos.x == this.inst.x && this._pre_pos.y == this.inst.y || this._reset_current_pos();
                var e = !1;
                if (0 != this.move_params.dec) {
                    var i = this.current_speed;
                    e = i * i / (2 * this.move_params.dec) >= this.remain_distance
                }
                var s = e ? -this.move_params.dec : this.move_params.acc;
                0 != s && this.SetCurrentSpeed(this.current_speed + s * t);
                var n = this.current_speed * t;
                this.remain_distance -= n;
                var r = !1;
                if (this.remain_distance <= 0 || this.current_speed <= 0) r = !0, this.inst.x = this.target.x, this.inst.y = this.target.y, 0 < this.current_speed && (this.remain_dt = -this.remain_distance / this.current_speed), this.moving_angle_get(), this.SetCurrentSpeed(0);
                else {
                    var a = this.target.a;
                    this.inst.x += n * Math.cos(a), this.inst.y += n * Math.sin(a)
                }
                this.inst.set_bbox_changed(), this._pre_pos.x = this.inst.x, this._pre_pos.y = this.inst.y, r && (this.is_moving = !1, this.is_my_call = !0, this.runtime.trigger(cr.behaviors.Rex_MoveTo.prototype.cnds.OnHitTarget, this.inst), this.is_my_call = !1)
            }
        }, e.tick2 = function() {
            this._moving_angle_info.x = this.inst.x, this._moving_angle_info.y = this.inst.y
        }, e.SetCurrentSpeed = function(t) {
            null != t ? this.current_speed = t > this.move_params.max ? this.move_params.max : t : 0 == this.move_params.acc && (this.current_speed = this.move_params.max)
        }, e._reset_current_pos = function() {
            var t = this.target.x - this.inst.x,
                e = this.target.y - this.inst.y;
            this.target.a = Math.atan2(e, t), this.remain_distance = Math.sqrt(t * t + e * e), this._pre_pos.x = this.inst.x, this._pre_pos.y = this.inst.y
        }, e.SetTargetPos = function(t, e) {
            this.target.x = t, this.target.y = e, this.SetCurrentSpeed(null), this._reset_current_pos(), this._moving_angle_info.x = this.inst.x, this._moving_angle_info.y = this.inst.y, this.is_moving = !0, this._moving_angle_start_info.x = this.inst.x, this._moving_angle_start_info.y = this.inst.y, this._moving_angle_start_info.a = cr.to_clamped_degrees(cr.angleTo(this.inst.x, this.inst.y, t, e)), this.is_continue_mode && this.move(this.remain_dt)
        }, e.is_tick_changed = function() {
            var t = this.runtime.tickcount,
                e = this._last_tick != t;
            return this._last_tick = t, e
        }, e.moving_angle_get = function(t) {
            if (this.is_tick_changed()) {
                var e = this.inst.x - this._moving_angle_info.x,
                    i = this.inst.y - this._moving_angle_info.y;
                0 == e && 0 == i || (this._moving_angle_info.a = cr.to_clamped_degrees(Math.atan2(i, e)))
            }
            return this._moving_angle_info.a
        }, e.saveToJSON = function() {
            return {
                en: this.enabled,
                v: this.move_params,
                t: this.target,
                is_m: this.is_moving,
                c_spd: this.current_speed,
                rd: this.remain_distance,
                pp: this._pre_pos,
                ma: this._moving_angle_info,
                ms: this._moving_angle_start_info,
                lt: this._last_tick
            }
        }, e.loadFromJSON = function(t) {
            this.enabled = t.en, this.move_params = t.v, this.target = t.t, this.is_moving = t.is_m, this.current_speed = t.c_spd, this.remain_distance = t.rd, this._pre_pos = t.pp, this._moving_angle_info = t.ma, this._moving_angle_start_info = t.ms, this._last_tick = t.lt
        }, t.cnds = new s, s.prototype.OnHitTarget = function() {
            return this.is_my_call
        }, s.prototype.CompareSpeed = function(t, e) {
            return cr.do_cmp(this.current_speed, t, e)
        }, s.prototype.OnMoving = function() {
            return !1
        }, s.prototype.IsMoving = function() {
            return this.enabled && this.is_moving
        }, s.prototype.CompareMovingAngle = function(t, e) {
            return -1 != this.moving_angle_get() && cr.do_cmp(this.moving_angle_get(), t, e)
        }, t.acts = new n, n.prototype.SetEnabled = function(t) {
            this.enabled = 1 === t
        }, n.prototype.SetMaxSpeed = function(t) {
            this.move_params.max = t, this.SetCurrentSpeed(null)
        }, n.prototype.SetAcceleration = function(t) {
            this.move_params.acc = t, this.SetCurrentSpeed(null)
        }, n.prototype.SetDeceleration = function(t) {
            this.move_params.dec = t
        }, n.prototype.SetTargetPos = function(t, e) {
            this.SetTargetPos(t, e)
        }, n.prototype.SetCurrentSpeed = function(t) {
            this.SetCurrentSpeed(t)
        }, n.prototype.SetTargetPosOnObject = function(t) {
            if (t) {
                var e = t.getFirstPicked();
                null != e && this.SetTargetPos(e.x, e.y)
            }
        }, n.prototype.SetTargetPosByDeltaXY = function(t, e) {
            this.SetTargetPos(this.inst.x + t, this.inst.y + e)
        }, n.prototype.SetTargetPosByDistanceAngle = function(t, e) {
            var i = cr.to_clamped_radians(e),
                s = t * Math.cos(i),
                n = t * Math.sin(i);
            this.SetTargetPos(this.inst.x + s, this.inst.y + n)
        }, n.prototype.Stop = function() {
            this.is_moving = !1
        }, t.exps = new r, r.prototype.Activated = function(t) {
            t.set_int(this.enabled ? 1 : 0)
        }, r.prototype.Speed = function(t) {
            t.set_float(this.current_speed)
        }, r.prototype.MaxSpeed = function(t) {
            t.set_float(this.move_params.max)
        }, r.prototype.Acc = function(t) {
            t.set_float(this.move_params.acc)
        }, r.prototype.Dec = function(t) {
            t.set_float(this.move_params.dec)
        }, r.prototype.TargetX = function(t) {
            t.set_float(this.target.x)
        }, r.prototype.TargetY = function(t) {
            t.set_float(this.target.y)
        }, r.prototype.MovingAngle = function(t) {
            t.set_float(this.moving_angle_get())
        }, r.prototype.MovingAngleStart = function(t) {
            t.set_float(this._moving_angle_start_info.a)
        }
    }(), cr.behaviors.lunarray_LiteTween = function(t) {
        this.runtime = t
    },
    function() {
        var t = cr.behaviors.lunarray_LiteTween.prototype;
        t.Type = function(t, e) {
            this.behavior = t, this.objtype = e, this.runtime = t.runtime
        }, t.Type.prototype.onCreate = function() {}, t.Instance = function(t, e) {
            this.type = t, this.behavior = t.behavior, this.inst = e, this.runtime = t.runtime, this.i = 0
        };
        var e = t.Instance.prototype;
        e.onCreate = function() {
            this.playmode = this.properties[0], this.active = 1 == this.playmode || 2 == this.playmode || 3 == this.playmode || 4 == this.playmode, this.tweened = this.properties[1], this.easing = this.properties[2], this.target = this.properties[3], this.targetmode = this.properties[4], this.useCurrent = !1, 1 === this.targetmode && (this.target = "relative(" + this.target + ")"), this.duration = this.properties[5], this.enforce = 1 === this.properties[6], this.value = 0, this.tween_list = {}, this.addToTweenList("default", this.tweened, this.easing, "current", this.target, this.duration, this.enforce), 1 === this.properties[0] && this.startTween(0), 2 === this.properties[0] && this.startTween(2), 3 === this.properties[0] && this.startTween(3), 4 === this.properties[0] && this.startTween(4)
        }, e.parseCurrent = function(t, e) {
            void 0 === e && (e = "current");
            var i = trim(e);
            e = trim(e);
            var s = this.value;
            if ("current" === e) switch (t) {
                case 0:
                    i = this.inst.x + "," + this.inst.y;
                    break;
                case 1:
                case 2:
                case 3:
                    i = this.inst.width + "," + this.inst.height;
                    break;
                case 4:
                    i = cr.to_degrees(this.inst.angle) + "," + cr.to_degrees(this.inst.angle);
                    break;
                case 5:
                    i = 100 * this.inst.opacity + "," + 100 * this.inst.opacity;
                    break;
                case 6:
                    i = s + "," + s;
                    break;
                case 7:
                case 8:
                    i = this.inst.x + "," + this.inst.y;
                    break;
                case 9:
                    i = void 0 !== this.inst.curFrame ? this.inst.width / this.inst.curFrame.width + "," + this.inst.height / this.inst.curFrame.height : "1,1"
            }
            if ("relative" === e.substring(0, 8)) {
                var n = e.match(/\((.*?)\)/);
                if (n) var r = parseFloat(n[1].split(",")[0]),
                    a = parseFloat(n[1].split(",")[1]);
                switch (isNaN(r) && (r = 0), isNaN(a) && (a = 0), t) {
                    case 0:
                        i = this.inst.x + r + "," + (this.inst.y + a);
                        break;
                    case 1:
                    case 2:
                    case 3:
                        i = this.inst.width + r + "," + (this.inst.height + a);
                        break;
                    case 4:
                        i = cr.to_degrees(this.inst.angle) + r + "," + (cr.to_degrees(this.inst.angle) + a);
                        break;
                    case 5:
                        i = 100 * this.inst.opacity + r + "," + (100 * this.inst.opacity + a);
                        break;
                    case 6:
                        i = s + r + "," + s + r;
                        break;
                    case 7:
                        i = this.inst.x + r + "," + this.inst.y;
                        break;
                    case 8:
                        i = this.inst.x + "," + (this.inst.y + r);
                        break;
                    case 9:
                        i = r + "," + a
                }
            }
            return i
        }, e.addToTweenList = function(t, e, i, s, n, r, a) {
            s = this.parseCurrent(e, s), n = this.parseCurrent(e, n), void 0 !== this.tween_list[t] && delete this.tween_list[t], this.tween_list[t] = new TweenObject(t, e, i, s, n, r, a), this.tween_list[t].dt = 0
        }, e.saveToJSON = function() {
            JSON.stringify(this.tween_list.default);
            return {
                playmode: this.playmode,
                active: this.active,
                tweened: this.tweened,
                easing: this.easing,
                target: this.target,
                targetmode: this.targetmode,
                useCurrent: this.useCurrent,
                duration: this.duration,
                enforce: this.enforce,
                value: this.value,
                tweenlist: JSON.stringify(this.tween_list.default)
            }
        }, TweenObject.Load = function(t, e, i, s, n, r, a, o) {
            var h = new TweenObject(e, i, s, n, r, a, o);
            for (var c in t) h[c] = t[c];
            return h
        }, e.loadFromJSON = function(t) {
            var e = JSON.parse(t.tweenlist),
                i = TweenObject.Load(e, e.name, e.tweened, e.easefunc, e.initialparam1 + "," + e.initialparam2, e.targetparam1 + "," + e.targetparam2, e.duration, e.enforce);
            console.log(i), this.tween_list.default = i, this.playmode = t.playmode, this.active = t.active, this.movement = t.tweened, this.easing = t.easing, this.target = t.target, this.targetmode = t.targetmode, this.useCurrent = t.useCurrent, this.duration = t.duration, this.enforce = t.enforce, this.value = t.value
        }, e.setProgressTo = function(t) {
            for (var e in 1 < t && (t = 1), t < 0 && (t = 0), this.tween_list) {
                var i = this.tween_list[e];
                i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.state = 3, i.progress = t * i.duration;
                var s = i.OnTick(0);
                this.updateTween(i, s)
            }
        }, e.startTween = function(t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                if (this.useCurrent) {
                    var s = this.parseCurrent(i.tweened, "current"),
                        n = this.parseCurrent(i.tweened, this.target);
                    i.setInitial(s), i.setTarget(n)
                }
                0 === t && (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, i.state = 1), 1 === t && (i.state = 1), 2 !== t && 4 !== t || (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, 2 == t && (i.state = 4), 4 == t && (i.state = 6)), 3 === t && (i.progress = 1e-6, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onStart = !0, i.state = 5)
            }
        }, e.stopTween = function(t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                1 === t && (i.progress = 0), 2 === t && (i.progress = i.duration), i.state = 3;
                var s = i.OnTick(0);
                this.updateTween(i, s)
            }
        }, e.reverseTween = function(t) {
            for (var e in this.tween_list) {
                var i = this.tween_list[e];
                1 === t && (i.progress = i.duration, i.lastKnownValue = 0, i.lastKnownValue2 = 0, i.onReverseStart = !0), i.state = 2
            }
        }, e.updateTween = function(t, e) {
            var i = 1,
                s = 1;
            if (this.inst.width < 0 && (i = -1), this.inst.height < 0 && (s = -1), 0 === t.tweened) t.enforce ? (this.inst.x = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e, this.inst.y = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e) : (this.inst.x += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, this.inst.y += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (1 === t.tweened) t.enforce ? (this.inst.width = i * t.initialparam1 + (t.targetparam1 - t.initialparam1) * (e * i), this.inst.height = s * t.initialparam2 + (t.targetparam2 - t.initialparam2) * (e * s)) : (this.inst.width += i * (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, this.inst.height += s * (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue = i * (t.targetparam1 - t.initialparam1) * e, t.lastKnownValue2 = s * (t.targetparam2 - t.initialparam2) * e);
            else if (2 === t.tweened) t.enforce ? this.inst.width = i * t.initialparam1 + (t.targetparam1 - t.initialparam1) * (e * i) : (this.inst.width += i * (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = i * (t.targetparam1 - t.initialparam1) * e);
            else if (3 === t.tweened) t.enforce ? this.inst.height = s * t.initialparam2 + (t.targetparam2 - t.initialparam2) * (e * s) : (this.inst.height += s * (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue2 = s * (t.targetparam2 - t.initialparam2) * e);
            else if (4 === t.tweened)
                if (t.enforce) {
                    var n = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e;
                    this.inst.angle = cr.clamp_angle(cr.to_radians(n))
                } else {
                    n = (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue;
                    this.inst.angle = cr.clamp_angle(this.inst.angle + cr.to_radians(n)), t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e
                }
            else if (5 === t.tweened) t.enforce ? this.inst.opacity = (t.initialparam1 + (t.targetparam1 - t.initialparam1) * e) / 100 : (this.inst.opacity += ((t.targetparam1 - t.initialparam1) * e - t.lastKnownValue) / 100, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (6 === t.tweened) t.enforce ? this.value = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.value += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (7 === t.tweened) t.enforce ? this.inst.x = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e : (this.inst.x += (t.targetparam1 - t.initialparam1) * e - t.lastKnownValue, t.lastKnownValue = (t.targetparam1 - t.initialparam1) * e);
            else if (8 === t.tweened) t.enforce ? this.inst.y = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e : (this.inst.y += (t.targetparam2 - t.initialparam2) * e - t.lastKnownValue2, t.lastKnownValue2 = (t.targetparam2 - t.initialparam2) * e);
            else if (9 === t.tweened) {
                var r = t.initialparam1 + (t.targetparam1 - t.initialparam1) * e,
                    a = t.initialparam2 + (t.targetparam2 - t.initialparam2) * e;
                this.inst.width < 0 && (r = t.initialparam1 + (t.targetparam1 + t.initialparam1) * -e), this.inst.height < 0 && (a = t.initialparam2 + (t.targetparam2 + t.initialparam2) * -e), t.enforce ? (this.inst.width = this.inst.curFrame.width * r, this.inst.height = this.inst.curFrame.height * a) : (this.inst.width < 0 ? (this.inst.width = r * (this.inst.width / (-1 + t.lastKnownValue)), t.lastKnownValue = r + 1) : (this.inst.width = r * (this.inst.width / (1 + t.lastKnownValue)), t.lastKnownValue = r - 1), this.inst.height < 0 ? (this.inst.height = a * (this.inst.height / (-1 + t.lastKnownValue2)), t.lastKnownValue2 = a + 1) : (this.inst.height = a * (this.inst.height / (1 + t.lastKnownValue2)), t.lastKnownValue2 = a - 1))
            }
            this.inst.set_bbox_changed()
        }, e.tick = function() {
            var t = this.runtime.getDt(this.inst),
                e = this.tween_list.default;
            if (0 !== e.state) {
                e.onStart && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnStart, this.inst), e.onStart = !1), e.onReverseStart && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseStart, this.inst), e.onReverseStart = !1), this.active = 1 == e.state || 2 == e.state || 4 == e.state || 5 == e.state || 6 == e.state;
                var i = e.OnTick(t);
                this.updateTween(e, i), e.onEnd && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnEnd, this.inst), e.onEnd = !1), e.onReverseEnd && (this.runtime.trigger(cr.behaviors.lunarray_LiteTween.prototype.cnds.OnReverseEnd, this.inst), e.onReverseEnd = !1)
            }
        }, t.cnds = {};
        var i = t.cnds;
        i.IsActive = function() {
            return 0 !== this.tween_list.default.state
        }, i.IsReversing = function() {
            return 2 == this.tween_list.default.state
        }, i.CompareProgress = function(t, e) {
            var i = this.tween_list.default;
            return cr.do_cmp(i.progress / i.duration, t, e)
        }, i.OnStart = function() {
            return void 0 !== this.tween_list.default && this.tween_list.default.onStart
        }, i.OnReverseStart = function() {
            return void 0 !== this.tween_list.default && this.tween_list.default.onReverseStart
        }, i.OnEnd = function() {
            return void 0 !== this.tween_list.default && this.tween_list.default.onEnd
        }, i.OnReverseEnd = function() {
            return void 0 !== this.tween_list.default && this.tween_list.default.onReverseEnd
        }, t.acts = {};
        var s = t.acts;
        s.Start = function(t, e) {
            this.useCurrent = 1 == e, this.startTween(t)
        }, s.Stop = function(t) {
            this.stopTween(t)
        }, s.Reverse = function(t) {
            this.reverseTween(t)
        }, s.ProgressTo = function(t) {
            this.setProgressTo(t)
        }, s.SetDuration = function(t) {
            isNaN(t) || t < 0 || void 0 !== this.tween_list.default && (this.tween_list.default.duration = t)
        }, s.SetEnforce = function(t) {
            void 0 !== this.tween_list.default && (this.tween_list.default.enforce = 1 === t)
        }, s.SetInitial = function(t) {
            if (void 0 !== this.tween_list.default) {
                var e = this.parseCurrent(this.tween_list.default.tweened, t);
                this.tween_list.default.setInitial(e)
            }
        }, s.SetTarget = function(t, e, i) {
            if (void 0 !== this.tween_list.default && !isNaN(i)) {
                var s = this.tween_list.default,
                    n = i + "",
                    r = "",
                    a = "";
                if (1 === (this.targetmode = e)) {
                    switch (this.target = "relative(" + n + ")", t) {
                        case 0:
                            r = this.inst.x + i, a = s.targetparam2;
                            break;
                        case 1:
                            r = s.targetparam1, a = this.inst.y + i;
                            break;
                        case 2:
                            a = r = "" + cr.to_degrees(this.inst.angle + cr.to_radians(i));
                            break;
                        case 3:
                            a = r = "" + 100 * this.inst.opacity + i;
                            break;
                        case 4:
                            r = this.inst.width + i, a = s.targetparam2;
                            break;
                        case 5:
                            r = s.targetparam1, a = this.inst.height + i;
                            break;
                        case 6:
                            a = r = i
                    }
                    n = r + "," + a
                } else {
                    switch (t) {
                        case 0:
                            r = i, a = s.targetparam2;
                            break;
                        case 1:
                            r = s.targetparam1, a = i;
                            break;
                        case 2:
                        case 3:
                            a = r = i;
                            break;
                        case 4:
                            r = i, a = s.targetparam2;
                            break;
                        case 5:
                            r = s.targetparam1, a = i;
                            break;
                        case 6:
                            a = r = i
                    }
                    n = r + "," + a, this.target = n
                }
                var o = this.parseCurrent(this.tween_list.default.tweened, "current"),
                    h = this.parseCurrent(this.tween_list.default.tweened, n);
                s.setInitial(o), s.setTarget(h)
            }
        }, s.SetTweenedProperty = function(t) {
            void 0 !== this.tween_list.default && (this.tween_list.default.tweened = t)
        }, s.SetEasing = function(t) {
            void 0 !== this.tween_list.default && (this.tween_list.default.easefunc = t)
        }, s.SetEasingParam = function(t, e, i, s, n) {
            void 0 !== this.tween_list.default && (this.tween_list.default.easingparam[t].optimized = !1, this.tween_list.default.easingparam[t].a = e, this.tween_list.default.easingparam[t].p = i, this.tween_list.default.easingparam[t].t = s, this.tween_list.default.easingparam[t].s = n)
        }, s.ResetEasingParam = function() {
            void 0 !== this.tween_list.default && (this.tween_list.default.optimized = !0)
        }, s.SetValue = function(t) {
            var e = this.tween_list.default;
            this.value = t, 6 === e.tweened && e.setInitial(this.parseCurrent(e.tweened, "current"))
        }, s.SetParameter = function(t, e, i, s, n) {
            if (void 0 === this.tween_list.default) this.addToTweenList("default", t, e, initial, i, s, n, 0);
            else {
                var r = this.tween_list.default;
                r.tweened = t, r.easefunc = e, r.setInitial(this.parseCurrent(t, "current")), r.setTarget(this.parseCurrent(t, i)), r.duration = s, r.enforce = 1 === n
            }
        }, t.exps = {};
        var n = t.exps;
        n.State = function(t) {
            var e = "N/A";
            switch (this.tween_list.default.state) {
                case 0:
                    e = "paused";
                    break;
                case 1:
                    e = "playing";
                    break;
                case 2:
                    e = "reversing";
                    break;
                case 3:
                    e = "seeking"
            }
            t.set_string(e)
        }, n.Progress = function(t) {
            var e = this.tween_list.default.progress / this.tween_list.default.duration;
            t.set_float(e)
        }, n.Duration = function(t) {
            t.set_float(this.tween_list.default.duration)
        }, n.Target = function(t) {
            var e = this.tween_list.default,
                i = "N/A";
            switch (e.tweened) {
                case 0:
                    i = e.targetparam1;
                    break;
                case 1:
                    i = e.targetparam2;
                    break;
                case 2:
                case 3:
                case 4:
                    i = e.targetparam1;
                    break;
                case 5:
                    i = e.targetparam2;
                    break;
                case 6:
                    i = e.targetparam1
            }
            t.set_float(i)
        }, n.Value = function(t) {
            var e = this.value;
            t.set_float(e)
        }, n.Tween = function(t, e, i, s, n) {
            var r = 1 < s ? 1 : s,
                a = easeFunc(n, r < 0 ? 0 : r, 0, 1, 1, !1);
            t.set_float(e + a * (i - e))
        }
    }(), cr.getObjectRefTable = function() {
        return [cr.plugins_.Function, cr.plugins_.Audio, cr.plugins_.Browser, cr.plugins_.Mouse, cr.plugins_.Particles, cr.plugins_.Sprite, cr.plugins_.Spritefont2, cr.plugins_.Text, cr.plugins_.TextBox, cr.plugins_.TiledBg, cr.plugins_.Touch, cr.behaviors.Rex_MoveTo, cr.behaviors.Pathfinding, cr.behaviors.lunarray_LiteTween, cr.system_object.prototype.cnds.OnLayoutStart, cr.plugins_.Sprite.prototype.acts.SetCollisions, cr.system_object.prototype.acts.SetVar, cr.plugins_.Spritefont2.prototype.acts.SetVisible, cr.system_object.prototype.acts.SetGroupActive, cr.plugins_.Sprite.prototype.acts.SetVisible, cr.plugins_.Browser.prototype.acts.ExecJs, cr.system_object.prototype.cnds.CompareVar, cr.system_object.prototype.cnds.TriggerOnce, cr.plugins_.Sprite.prototype.cnds.IsOnScreen, cr.plugins_.Sprite.prototype.acts.SetAnimFrame, cr.plugins_.Spritefont2.prototype.acts.SetText, cr.plugins_.Text.prototype.acts.SetText, cr.system_object.prototype.cnds.IsGroupActive, cr.plugins_.Sprite.prototype.cnds.CompareInstanceVar, cr.plugins_.Touch.prototype.cnds.OnTouchObject, cr.plugins_.Sprite.prototype.acts.SetInstanceVar, cr.behaviors.Rex_MoveTo.prototype.acts.SetTargetPosOnObject, cr.system_object.prototype.acts.AddVar, cr.plugins_.Sprite.prototype.acts.AddInstanceVar, cr.system_object.prototype.acts.Wait, cr.plugins_.Sprite.prototype.cnds.OnCollision, cr.plugins_.Sprite.prototype.acts.Destroy, cr.behaviors.Rex_MoveTo.prototype.acts.SetTargetPos, cr.plugins_.Sprite.prototype.acts.Spawn, cr.plugins_.Sprite.prototype.cnds.OnDestroyed, cr.behaviors.Rex_MoveTo.prototype.cnds.IsMoving, cr.plugins_.Sprite.prototype.cnds.IsOverlapping, cr.system_object.prototype.acts.SubVar, cr.system_object.prototype.exps.choose, cr.plugins_.Sprite.prototype.acts.SetOpacity, cr.plugins_.Sprite.prototype.acts.StartAnim, cr.behaviors.lunarray_LiteTween.prototype.acts.Start, cr.system_object.prototype.cnds.Else, cr.plugins_.Sprite.prototype.acts.SetPos, cr.plugins_.Spritefont2.prototype.acts.SetPos, cr.system_object.prototype.acts.GoToLayout, cr.plugins_.Sprite.prototype.cnds.IsVisible, cr.plugins_.Audio.prototype.acts.Play, cr.plugins_.Audio.prototype.acts.SetSilent, cr.plugins_.TextBox.prototype.acts.SetPos, cr.plugins_.TextBox.prototype.acts.SetText, cr.behaviors.lunarray_LiteTween.prototype.acts.Reverse, cr.plugins_.Sprite.prototype.cnds.OnAnyAnimFinished, cr.system_object.prototype.cnds.EveryTick, cr.plugins_.TextBox.prototype.acts.SetCSSStyle, cr.plugins_.TextBox.prototype.exps.Text, cr.plugins_.TextBox.prototype.cnds.OnClicked, cr.plugins_.TextBox.prototype.cnds.OnTextChanged, cr.system_object.prototype.acts.RestartLayout, cr.plugins_.Audio.prototype.cnds.IsTagPlaying, cr.plugins_.Browser.prototype.exps.ExecJS, cr.plugins_.Audio.prototype.acts.Stop, cr.plugins_.Function.prototype.acts.CallFunction, cr.plugins_.Function.prototype.cnds.OnFunction, cr.system_object.prototype.acts.SetTimescale]
    };