// deobfuscated by leon406
var md5 = require("md5");

function jsvmp(str, funArray) {
    function f(p1, p2, p3) {
        var f = [null];
        f.push(p2);
        var c = new (Function.bind.apply(p1, f));
        return p3 && function (e, b) {
            (Object.setPrototypeOf || function (e, b) {
                return e.__proto__ = b, e
            })(e, b)
        }(c, p3.prototype), c
    }

    function copyArray(e) {
        if (Array.isArray(e)) {
            for (var b = 0, a = new Array(e.length); b < e.length; b++) a[b] = e[b];
            return a
        } else if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
            return Array.from(e)
        } else {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }

    for (var r = [], t = 0, d = [], i = 0, n = function (e, b) {
        var a = e[b++],
            f = e[b],
            c = parseInt("" + a + f, 16);
        if (c >> 7 === 0) return [1, c];
        if (c >> 6 === 2) {
            var r = parseInt("" + e[++b] + e[++b], 16);
            return c &= 63, [2, r = (c <<= 8) + r]
        }
        if (c >> 6 === 3) {
            var t = parseInt("" + e[++b] + e[++b], 16),
                d = parseInt("" + e[++b] + e[++b], 16);
            return c &= 63, [3, d = (c <<= 16) + (t <<= 8) + d]
        }
    }, s = function (e, b) {
        var a = parseInt("" + e[b] + e[b + 1], 16);
        return a > 127 ? -256 + a : a
    }, o = function (e, b) {
        var a = parseInt("" + e[b] + e[b + 1] + e[b + 2] + e[b + 3], 16);
        return a > 32767 ? -65536 + a : a
    }, l = function (e, b) {
        var a = parseInt("" + e[b] + e[b + 1] + e[b + 2] + e[b + 3] + e[b + 4] + e[b + 5] + e[b + 6] + e[b + 7], 16);
        return a > 2147483647 ? 0 + a : a
    }, _ = function (e, b) {
        return parseInt("" + e[b] + e[b + 1], 16)
    }, x = function (e, b) {
        return parseInt("" + e[b] + e[b + 1] + e[b + 2] + e[b + 3], 16)
    }, u = u || this, h = (str.length, 0), p = "", y = h; y < h + 16; y++) {
        var v = "" + str[y++] + str[y];
        v = parseInt(v, 16), p += String.fromCharCode(v)
    }
    if ("HNOJ@?RC" !== p) throw new Error("error magic number " + p);
    parseInt("" + str[h += 16] + str[h + 1], 16), h += 8, t = 0;
    for (var g = 0; g < 4; g++) {
        var w = h + 2 * g,
            A = parseInt("" + str[w++] + str[w], 16);
        t += (3 & A) << 2 * g
    }
    h += 16;
    var C = parseInt("" + str[h += 8] + str[h + 1] + str[h + 2] + str[h + 3] + str[h + 4] + str[h + 5] + str[h + 6] + str[h + 7], 16),
        m = C,
        S = h += 8,
        z = x(str, h += C);
    z[1], h += 4, r = {
        p: [],
        q: []
    };
    for (var B = 0; B < z; B++) {
        for (var R = n(str, h), q = h += 2 * R[0], I = r.p.length, k = 0; k < R[1]; k++) {
            var j = n(str, q);
            r.p.push(j[1]), q += 2 * j[0]
        }
        h = q, r.q.push([I, r.p.length])
    }
    var O = {
            5: 1,
            6: 1,
            70: 1,
            22: 1,
            23: 1,
            37: 1,
            73: 1
        },
        U = {
            72: 1
        },
        D = {
            74: 1
        },
        N = {
            11: 1,
            12: 1,
            24: 1,
            26: 1,
            27: 1,
            31: 1
        },
        J = {
            10: 1
        },
        L = {
            2: 1,
            29: 1,
            30: 1,
            20: 1
        },
        T = [],
        E = [];

    function M(e, b, a) {
        for (var f = b; f < b + a;) {
            var c = _(e, f);
            T[f] = c, f += 2, U[c] ? (E[f] = s(e, f), f += 2) : O[c] ? (E[f] = o(e, f), f += 4) : D[c] ? (E[f] = l(e, f), f += 8) : N[c] ? (E[f] = _(e, f), f += 2) : J[c] ? (E[f] = x(e, f), f += 4) : L[c] && (E[f] = x(e, f), f += 4)
        }
    }

    function P(e, b, a, n, h, p, y, v) {
        null == p && (p = this);
        var g, w, A, C, m = [],
            S = 0;
        y && (w = y);
        var z, B, R = b,
            q = R + 2 * a;
        if (!v)
            for (; R < q;) {
                var I = parseInt("" + e[R] + e[R + 1], 16);
                R += 2;
                var j = 3 & (z = 13 * I % 241);
                if (z >>= 2, j < 1)
                    if (j = 3 & z, z >>= 2, j < 1) {
                        if ((j = z) < 1) return [1, m[S--]];
                        j < 5 ? (w = m[S--], m[S] = m[S] * w) : j < 7 ? (w = m[S--], m[S] = m[S] != w) : j < 14 ? (A = m[S--], C = m[S--], (j = m[S--]).x === P ? j.y >= 1 ? m[++S] = F(e, j.c, j.l, A, j.z, C, null, 1) : (m[++S] = F(e, j.c, j.l, A, j.z, C, null, 0), j.y++) : m[++S] = j.apply(C, A)) : j < 16 && (B = o(e, R), (g = function b() {
                            var a = arguments;
                            return b.y > 0 || b.y++, F(e, b.c, b.l, a, b.z, this, null, 0)
                        }).c = R + 4, g.l = B - 2, g.x = P, g.y = 0, g.z = h, m[S] = g, R += 2 * B - 2)
                    } else if (j < 2) (j = z) > 8 ? (w = m[S--], m[S] = typeof w) : j > 4 ? m[S -= 1] = m[S][m[S + 1]] : j > 2 && (A = m[S--], (j = m[S]).x === P ? j.y >= 1 ? m[S] = F(e, j.c, j.l, [A], j.z, C, null, 1) : (m[S] = F(e, j.c, j.l, [A], j.z, C, null, 0), j.y++) : m[S] = j(A));
                    else if (j < 3) {
                        if ((j = z) < 9) {
                            for (w = m[S--], B = x(e, R), j = "", k = r.q[B][0]; k < r.q[B][1]; k++) j += String.fromCharCode(t ^ r.p[k]);
                            R += 4, m[S--][j] = w
                        } else if (j < 13) throw m[S--]
                    } else (j = z) < 1 ? m[++S] = null : j < 3 ? (w = m[S--], m[S] = m[S] >= w) : j < 12 && (m[++S] = undefined);
                else if (j < 2)
                    if (j = 3 & z, z >>= 2, j < 1)
                        if ((j = z) < 5) {
                            B = o(e, R);
                            try {
                                if (d[i][2] = 1, 1 === (w = P(e, R + 4, B - 3, [], h, p, null, 0))[0]) return w
                            } catch (b) {
                                if (d[i] && d[i][1] && 1 === (w = P(e, d[i][1][0], d[i][1][1], [], h, p, b, 0))[0]) return w
                            } finally {
                                if (d[i] && d[i][0] && 1 === (w = P(e, d[i][0][0], d[i][0][1], [], h, p, null, 0))[0]) return w;
                                d[i] = 0, i--
                            }
                            R += 2 * B - 2
                        } else j < 7 ? (B = _(e, R), R += 2, m[S -= B] = 0 === B ? new m[S] : f(m[S], copyArray(m.slice(S + 1, S + B + 1)))) : j < 9 && (w = m[S--], m[S] = m[S] & w);
                    else if (j < 2)
                        if ((j = z) > 12) m[++S] = s(e, R), R += 2;
                        else if (j > 10) w = m[S--], m[S] = m[S] << w;
                        else if (j > 8) {
                            for (B = x(e, R), j = "", k = r.q[B][0]; k < r.q[B][1]; k++) j += String.fromCharCode(t ^ r.p[k]);
                            R += 4, m[S] = m[S][j]
                        } else j > 6 && (A = m[S--], w = delete m[S--][A]);
                    else if (j < 3) (j = z) < 2 ? m[++S] = w : j < 11 ? (w = m[S -= 2][m[S + 1]] = m[S + 2], S--) : j < 13 && (w = m[S], m[++S] = w);
                    else if ((j = z) > 12) m[++S] = p;
                    else if (j > 5) w = m[S--], m[S] = m[S] !== w;
                    else if (j > 3) w = m[S--], m[S] = m[S] / w;
                    else if (j > 1) {
                        if ((B = o(e, R)) < 0) {
                            v = 1, M(e, b, 2 * a), R += 2 * B - 2;
                            break
                        }
                        R += 2 * B - 2
                    } else j > -1 && (m[S] = !m[S]);
                else if (j < 3)
                    if (j = 3 & z, z >>= 2, j < 1) (j = z) > 13 ? (m[++S] = o(e, R), R += 4) : j > 11 ? (w = m[S--], m[S] = m[S] >> w) : j > 9 ? (B = _(e, R), R += 2, w = m[S--], h[B] = w) : j > 7 ? (B = x(e, R), R += 4, A = S + 1, m[S -= B - 1] = B ? m.slice(S, A) : []) : j > 0 && (w = m[S--], m[S] = m[S] > w);
                    else if (j < 2) (j = z) > 12 ? (w = m[S - 1], A = m[S], m[++S] = w, m[++S] = A) : j > 3 ? (w = m[S--], m[S] = m[S] === w) : j > 1 ? (w = m[S--], m[S] = m[S] + w) : j > -1 && (m[++S] = u);
                    else if (j < 3) {
                        if ((j = z) > 13) m[++S] = false;
                        else if (j > 6) w = m[S--], m[S] = m[S] instanceof w;
                        else if (j > 4) w = m[S--], m[S] = m[S] % w;
                        else if (j > 2)
                            if (m[S--]) R += 4;
                            else {
                                if ((B = o(e, R)) < 0) {
                                    v = 1, M(e, b, 2 * a), R += 2 * B - 2;
                                    break
                                }
                                R += 2 * B - 2
                            }
                        else if (j > 0) {
                            for (B = x(e, R), w = "", k = r.q[B][0]; k < r.q[B][1]; k++) w += String.fromCharCode(t ^ r.p[k]);
                            m[++S] = w, R += 4
                        }
                    } else (j = z) > 7 ? (w = m[S--], m[S] = m[S] | w) : j > 5 ? (B = _(e, R), R += 2, m[++S] = h["$" + B]) : j > 3 && (B = o(e, R), d[i][0] && !d[i][2] ? d[i][1] = [R + 4, B - 3] : d[i++] = [0, [R + 4, B - 3], 0], R += 2 * B - 2);
                else if (j = 3 & z, z >>= 2, j > 2) (j = z) > 13 ? (m[++S] = l(e, R), R += 8) : j > 11 ? (w = m[S--], m[S] = m[S] >>> w) : j > 9 ? m[++S] = true : j > 7 ? (B = _(e, R), R += 2, m[S] = m[S][B]) : j > 0 && (w = m[S--], m[S] = m[S] < w);
                else if (j > 1) (j = z) > 10 ? (B = o(e, R), d[++i] = [
                    [R + 4, B - 3], 0, 0
                ], R += 2 * B - 2) : j > 8 ? (w = m[S--], m[S] = m[S] ^ w) : j > 6 && (w = m[S--]);
                else if (j > 0) {
                    if ((j = z) > 7) w = m[S--], m[S] = m[S] in w;
                    else if (j > 5) m[S] = ++m[S];
                    else if (j > 3) B = _(e, R), R += 2, w = h[B], m[++S] = w;
                    else if (j > 1) {
                        var O = 0,
                            U = m[S].length,
                            D = m[S];
                        m[++S] = function () {
                            var e = O < U;
                            if (e) {
                                var b = D[O++];
                                m[++S] = b
                            }
                            m[++S] = e
                        }
                    }
                } else if ((j = z) > 13) w = m[S], m[S] = m[S - 1], m[S - 1] = w;
                else if (j > 4) w = m[S--], m[S] = m[S] === w;
                else if (j > 2) w = m[S--], m[S] = m[S] - w;
                else if (j > 0) {
                    for (B = x(e, R), j = "", k = r.q[B][0]; k < r.q[B][1]; k++) j += String.fromCharCode(t ^ r.p[k]);
                    j = +j, R += 4, m[++S] = j
                }
            }
        if (v)
            for (; R < q;)
                if (I = T[R], R += 2, j = 3 & (z = 13 * I % 241), z >>= 2, j > 2)
                    if (j = 3 & z, z >>= 2, j > 2) (j = z) < 2 ? (w = m[S--], m[S] = m[S] < w) : j < 9 ? (B = E[R], R += 2, m[S] = m[S][B]) : j < 11 ? m[++S] = true : j < 13 ? (w = m[S--], m[S] = m[S] >>> w) : j < 15 && (m[++S] = E[R], R += 8);
                    else if (j > 1) (j = z) < 6 || (j < 8 ? w = m[S--] : j < 10 ? (w = m[S--], m[S] = m[S] ^ w) : j < 12 && (B = E[R], d[++i] = [
                        [R + 4, B - 3], 0, 0
                    ], R += 2 * B - 2));
                    else if (j > 0) (j = z) > 7 ? (w = m[S--], m[S] = m[S] in w) : j > 5 ? m[S] = ++m[S] : j > 3 ? (B = E[R], R += 2, w = h[B], m[++S] = w) : j > 1 && (O = 0, U = m[S].length, D = m[S], m[++S] = function () {
                        var e = O < U;
                        if (e) {
                            var b = D[O++];
                            m[++S] = b
                        }
                        m[++S] = e
                    });
                    else if ((j = z) < 2) {
                        for (B = E[R], j = "", k = r.q[B][0]; k < r.q[B][1]; k++) j += String.fromCharCode(t ^ r.p[k]);
                        j = +j, R += 4, m[++S] = j
                    } else j < 4 ? (w = m[S--], m[S] = m[S] - w) : j < 6 ? (w = m[S--], m[S] = m[S] === w) : j < 15 && (w = m[S], m[S] = m[S - 1], m[S - 1] = w);
                else if (j > 1)
                    if (j = 3 & z, z >>= 2, j < 1) (j = z) > 13 ? (m[++S] = E[R], R += 4) : j > 11 ? (w = m[S--], m[S] = m[S] >> w) : j > 9 ? (B = E[R], R += 2, w = m[S--], h[B] = w) : j > 7 ? (B = E[R], R += 4, A = S + 1, m[S -= B - 1] = B ? m.slice(S, A) : []) : j > 0 && (w = m[S--], m[S] = m[S] > w);
                    else if (j < 2) (j = z) < 1 ? m[++S] = u : j < 3 ? (w = m[S--], m[S] = m[S] + w) : j < 5 ? (w = m[S--], m[S] = m[S] == w) : j < 14 && (w = m[S - 1], A = m[S], m[++S] = w, m[++S] = A);
                    else if (j < 3) {
                        if ((j = z) > 13) m[++S] = false;
                        else if (j > 6) w = m[S--], m[S] = m[S] instanceof w;
                        else if (j > 4) w = m[S--], m[S] = m[S] % w;
                        else if (j > 2) m[S--] ? R += 4 : R += 2 * (B = E[R]) - 2;
                        else if (j > 0) {
                            for (B = E[R], w = "", k = r.q[B][0]; k < r.q[B][1]; k++) w += String.fromCharCode(t ^ r.p[k]);
                            m[++S] = w, R += 4
                        }
                    } else (j = z) > 7 ? (w = m[S--], m[S] = m[S] | w) : j > 5 ? (B = E[R], R += 2, m[++S] = h["$" + B]) : j > 3 && (B = E[R], d[i][0] && !d[i][2] ? d[i][1] = [R + 4, B - 3] : d[i++] = [0, [R + 4, B - 3], 0], R += 2 * B - 2);
                else if (j > 0)
                    if (j = 3 & z, z >>= 2, j < 1) {
                        if ((j = z) > 9) ;
                        else if (j > 7) w = m[S--], m[S] = m[S] & w;
                        else if (j > 5) B = E[R], R += 2, m[S -= B] = 0 === B ? new m[S] : f(m[S], copyArray(m.slice(S + 1, S + B + 1)));
                        else if (j > 3) {
                            B = E[R];
                            try {
                                if (d[i][2] = 1, 1 == (w = P(e, R + 4, B - 3, [], h, p, null, 0))[0]) return w
                            } catch (b) {
                                if (d[i] && d[i][1] && 1 == (w = P(e, d[i][1][0], d[i][1][1], [], h, p, b, 0))[0]) return w
                            } finally {
                                if (d[i] && d[i][0] && 1 == (w = P(e, d[i][0][0], d[i][0][1], [], h, p, null, 0))[0]) return w;
                                d[i] = 0, i--
                            }
                            R += 2 * B - 2
                        }
                    } else if (j < 2)
                        if ((j = z) < 8) A = m[S--], w = delete m[S--][A];
                        else if (j < 10) {
                            for (B = E[R], j = "", k = r.q[B][0]; k < r.q[B][1]; k++) j += String.fromCharCode(t ^ r.p[k]);
                            R += 4, m[S] = m[S][j]
                        } else j < 12 ? (w = m[S--], m[S] = m[S] << w) : j < 14 && (m[++S] = E[R], R += 2);
                    else j < 3 ? (j = z) < 2 ? m[++S] = w : j < 11 ? (w = m[S -= 2][m[S + 1]] = m[S + 2], S--) : j < 13 && (w = m[S], m[++S] = w) : (j = z) > 12 ? m[++S] = p : j > 5 ? (w = m[S--], m[S] = m[S] !== w) : j > 3 ? (w = m[S--], m[S] = m[S] / w) : j > 1 ? R += 2 * (B = E[R]) - 2 : j > -1 && (m[S] = !m[S]);
                else if (j = 3 & z, z >>= 2, j < 1) {
                    if ((j = z) < 1) return [1, m[S--]];
                    j < 5 ? (w = m[S--], m[S] = m[S] * w) : j < 7 ? (w = m[S--], m[S] = m[S] != w) : j < 14 ? (A = m[S--], C = m[S--], (j = m[S--]).x === P ? j.y >= 1 ? m[++S] = F(e, j.c, j.l, A, j.z, C, null, 1) : (m[++S] = F(e, j.c, j.l, A, j.z, C, null, 0), j.y++) : m[++S] = j.apply(C, A)) : j < 16 && (B = E[R], (g = function b() {
                        var a = arguments;
                        return b.y > 0 || b.y++, F(e, b.c, b.l, a, b.z, this, null, 0)
                    }).c = R + 4, g.l = B - 2, g.x = P, g.y = 0, g.z = h, m[S] = g, R += 2 * B - 2)
                } else if (j < 2) (j = z) > 8 ? (w = m[S--], m[S] = typeof w) : j > 4 ? m[S -= 1] = m[S][m[S + 1]] : j > 2 && (A = m[S--], (j = m[S]).x === P ? j.y >= 1 ? m[S] = F(e, j.c, j.l, [A], j.z, C, null, 1) : (m[S] = F(e, j.c, j.l, [A], j.z, C, null, 0), j.y++) : m[S] = j(A));
                else if (j < 3) {
                    if ((j = z) < 9) {
                        for (w = m[S--], B = E[R], j = "", k = r.q[B][0]; k < r.q[B][1]; k++) j += String.fromCharCode(t ^ r.p[k]);
                        R += 4, m[S--][j] = w
                    } else if (j < 13) throw m[S--]
                } else (j = z) < 1 ? m[++S] = null : j < 3 ? (w = m[S--], m[S] = m[S] >= w) : j < 12 && (m[++S] = undefined);
        return [0, null]
    }

    function F(e, b, a, f, c, r, t, d) {
        null == r && (r = this), c && !c.d && (c.d = 0, c.$0 = c, c[1] = {});
        var i, n, s = {},
            o = s.d = c ? c.d + 1 : 0;
        for (s["$" + o] = s, n = 0; n < o; n++) s[i = "$" + n] = c[i];
        for (n = 0, o = s.length = f.length; n < o; n++) s[n] = f[n];
        return d && !T[b] && M(e, b, 2 * a), T[b] ? P(e, b, a, 0, s, r, null, 1)[1] : P(e, b, a, 0, s, r, null, 0)[1]
    }

    return F(str, S, m / 2, [], funArray);
};

function commonVmp(p1) {
    return jsvmp("484e4f4a403f52430038001eab0015840e8ee21a00000000000000621b000200001d000146000306000e271f001b000200021d00010500121b001b000b021b000b04041d0001071b000b0500000003000126207575757575757575757575757575757575757575757575757575757575757575", [, , md5, , p1])
}

for (var hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"],
         hex256Array = [], lower8BitsArray = [], i = 0; i < 256; i++) {
    hex256Array[i] = hexArray[i >> 4 & 15] + hexArray[15 & i],
    i < 16 && (i < 10 ? lower8BitsArray[48 + i] = i : lower8BitsArray[87 + i] = i);
}
var encode = function (e) {
        for (var b = e.length, a = "", f = 0; f < b;) a += hex256Array[e[f++]];
        return a
    },
    decode = function (e) {
        for (var b = e.length >> 1, a = b << 1, f = new Uint8Array(b), c = 0, r = 0; r < a;) f[c++] = lower8BitsArray[e.charCodeAt(r++)] << 4 | lower8BitsArray[e.charCodeAt(r++)];
        return f
    },
    encodingMethods = {
        encode,
        decode
    };

function sign(e, b) {
    return jsvmp("484e4f4a403f5243001f240fbf2031ccf317480300000000000007181b0002012e1d00921b000b171b000b02402217000a1c1b000b1726402217000c1c1b000b170200004017002646000306000e271f001b000200021d00920500121b001b000b031b000b17041d0092071b000b041e012f17000d1b000b05260a0000101c1b000b06260a0000101c1b001b000b071e01301d00931b001b000b081e00081d00941b0048021d00951b001b000b1b1d00961b0048401d009e1b001b000b031b000b16041d009f1b001b000b09221e0131241b000b031b000b09221e0131241b000b1e0a000110040a0001101d00d51b001b000b09221e0131241b000b031b000b09221e0131241b000b180a000110040a0001101d00d71b001b000b0a1e00101d00d91b001b000b0b261b000b1a1b000b190a0002101d00db1b001b000b0c261b000b221b000b210a0002101d00dc1b001b000b0d261b000b230200200a0002101d00dd1b001b000b09221e0131241b000b031b000b24040a0001101d00df1b001b000b0e1a00221e00de240a0000104903e82b1d00e31b001b000b0f260a0000101d00e41b001b000b1d1d00e71b001b000b1a4901002b1d00e81b001b000b1a4901002c1d00ea1b001b000b191d00f21b001b000b1f480e191d00f81b001b000b1f480f191d00f91b001b000b20480e191d00fb1b001b000b20480f191d00fe1b001b000b25480e191d01001b001b000b25480f191d01011b001b000b264818344900ff2f1d01031b001b000b264810344900ff2f1d01321b001b000b264808344900ff2f1d01331b001b000b264800344900ff2f1d01341b001b000b274818344900ff2f1d01351b001b000b274810344900ff2f1d01361b001b000b274808344900ff2f1d01371b001b000b274800344900ff2f1d01381b001b000b281b000b29311b000b2a311b000b2b311b000b2c311b000b2d311b000b2e311b000b2f311b000b30311b000b31311b000b32311b000b33311b000b34311b000b35311b000b36311b000b37311b000b38311b000b39311d01391b004900ff1d013a1b001b000b10261b000b281b000b2a1b000b2c1b000b2e1b000b301b000b321b000b341b000b361b000b381b000b3a1b000b291b000b2b1b000b2d1b000b2f1b000b311b000b331b000b351b000b371b000b390a0013101d013b1b001b000b0c261b000b111b000b3b041b000b3c0a0002101d013c1b001b000b12261b000b1c1b000b3b1b000b3d0a0003101d013d1b001b000b13261b000b3e0200240a0002101d013e1b000b3f0000013f000126207575757575757575757575757575757575757575757575757575757575757575012b0e7776757a7d7643617c637661676a027a77065c717976706708777671667474766107767d65707c77760374766707707c7d607c7f7607757a61767166740a7c66677661447a77677b0a7a7d7d7661447a77677b0b7c666776615b767a747b670b7a7d7d76615b767a747b6709666076615274767d670b677c5f7c64766150726076077a7d77766b5c7508767f767067617c7d09667d7776757a7d76770963617c677c676a637608677c4067617a7d740470727f7f0763617c7076606010487c71797670673363617c707660604e067c717976706705677a677f76047d7c7776012e0125012402602341525150575655545b5a59585f5e5d5c43424140474645444b4a49727170777675747b7a79787f7e7d7c63626160676665646b6a6923222120272625242b2a383c2e0260224157787763747b2749586042512b233c5e75656420254b5a22412126384446527f567a245d5f717c624a475c4366697e5579597d616a6b2a5b45547072406750762e0260214157787763747b2749586042512b233c5e75656420254b5a224121263e4446527f567a245d5f717c624a475c4366697e5579597d616a6b2a5b45547072406750762e02602041525150575655545b5a59585f5e5d5c43424140474645444b4a49727170777675747b7a79787f7e7d7c63626160676665646b6a6923222120272625242b2a3e4c2e012a022222067f767d74677b0a707b7261507c7776526702222306707b726152670f487c717976706733447a7d777c644e08577c70667e767d6712487c7179767067335d72657a7472677c614e057960777c7e10487c7179767067335b7a60677c616a4e07637f66747a7d60084c637b727d677c7e0b70727f7f437b727d677c7e0b4c4c7d7a747b677e726176055266777a7c1850727d65726041767d7776617a7d74507c7d67766b6721570964767177617a657661137476675c647d43617c637661676a5d727e7660097f727d74667274766006707b617c7e760761667d677a7e7607707c7d7d767067144c4c64767177617a6576614c7665727f66726776134c4c60767f767d7a667e4c7665727f667267761b4c4c64767177617a6576614c6070617a63674c75667d70677a7c7d174c4c64767177617a6576614c6070617a63674c75667d70154c4c64767177617a6576614c6070617a63674c757d134c4c756b77617a6576614c7665727f66726776124c4c77617a6576614c667d64617263637677154c4c64767177617a6576614c667d64617263637677114c4c77617a6576614c7665727f66726776144c4c60767f767d7a667e4c667d64617263637677144c4c756b77617a6576614c667d64617263637677094c60767f767d7a667e0c70727f7f40767f767d7a667e164c40767f767d7a667e4c5a57564c4176707c6177766108777c70667e767d670478766a60057e7267707b06417674566b630a4f3748723e694e77704c067072707b764c04607c7e7608707675407b72616308507675407b72616305767c72637a16767c44767151617c64607661577a60637267707b76610f717a7d775c717976706752606a7d700e7a60565c44767151617c646076610120047c63767d0467766067097a7d707c747d7a677c077c7d7661617c6104707c77761242465c47524c564b5056565756574c5641410e607660607a7c7d40677c61727476076076675a67767e10607c7e7658766a5b766176516a6776770a61767e7c65765a67767e097a7d77766b767757510c437c7a7d6776615665767d670e5e40437c7a7d6776615665767d670d706176726776567f767e767d670670727d65726009677c5772677246415f076176637f727076034f603901740a7d72677a6576707c777614487c717976706733437f66747a7d526161726a4e4a4d7b676763602c294f3c4f3c3b48233e2a4e68223f206e3b4f3d48233e2a4e68223f206e3a68206e6f48723e75233e2a4e68223f276e3b2948723e75233e2a4e68223f276e3a68246e3a0127087f7c7072677a7c7d047b61767504757a7f76107b676763293c3c7f7c70727f7b7c606708637f7267757c617e02222102222007647a7d777c646002222703647a7d02222607727d77617c7a77022225057f7a7d666b022224067a637b7c7d7602222b047a63727702222a047a637c77022123037e7270022122097e72707a7d677c607b0c7e72704c637c64766163703a0470617c60036b22220570617a7c6005756b7a7c6004637a787602212102212002212702212602212502212402212b08757a6176757c6b3c067c637661723c05337c63613c05337c63673c07707b617c7e763c0867617a77767d673c047e607a7602212a0220230665767d777c6106547c7c747f760e4c637261727e40647a67707b5c7d0a777a61767067407a747d0a707c7d607a6067767d670660647a67707b03777c7e07637b727d677c7e047b7c7c7840525150575655545b5a59585f5e5d5c43424140474645444b4a49727170777675747b7a79787f7e7d7c63626160676665646b6a6923222120272625242b2a3e3d03727a77017d01750161096067726167477a7e7601670972717a7f7a677a76600a677a7e766067727e6322137b72617764726176507c7d70666161767d706a0c7776657a70765e767e7c616a087f727d74667274760a6176607c7f66677a7c7d0f7265727a7f4176607c7f66677a7c7d0960706176767d477c630a60706176767d5f767567107776657a7076437a6b767f4172677a7c0a63617c77667067406671077172676776616a016309677c66707b5a7d757c08677a7e76697c7d760a677a7e766067727e6321077463665a7d757c0b7960557c7d67605f7a60670b637f66747a7d605f7a60670a677a7e766067727e63200a76657661507c7c787a760767674c60707a77017e0b606a7d67726b5661617c610c7d72677a65765f767d74677b056167705a43097563457661607a7c7d0b4c4c657661607a7c7d4c4c08707f7a767d675a770a677a7e766067727e63270b766b67767d77557a767f77046366607b03727f7f04677b767d097172607625274c707b0c75617c7e507b7261507c7776067125274c2023022022087172607625274c23022021087172607625274c22022020087172607625274c2102202702202602202507747667477a7e760220240b777c7e5d7c6745727f7a77096066716067617a7d740863617c677c707c7f02202b02202a01230e222323232323232322222323232302272302272207757c616176727f02272104717c776a096067617a7d747a756a02686e0b717c776a45727f216067610a717c776a4c7b72607b2e01350366617f02272005626676616a0a72607c7f774c607a747d096372677b7d727e762e0967674c6476717a772e063566667a772e0227270227260e4c716a6776774c6076704c777a770227250a27212a272a2524212a25097576457661607a7c7d0227240e4c232151274925647c232323232202272b02272a05607f7a7076022623074056505a5d555c037d7c6409677a7e766067727e6305757f7c7c610661727d777c7e0f7476674747447671507c7c787a7660056767647a770867674c6476717a770767674476715a770b67674c6476717a774c65210967674476717a7745210761667d7d7a7d7405757f66607b087e7c65765f7a60670660637f7a70760671765e7c657609707f7a70785f7a6067077176507f7a70780c78766a717c7261775f7a60670a717658766a717c7261770b7270677a657640677267760b647a7d777c6440677267760360477e05676172707808667d7a67477a7e76037270700a667d7a67527e7c667d670871767b72657a7c61077e6074476a637603645a5707727a775f7a60670b63617a6572706a5e7c777606706660677c7e067260607a747d0f4456514c5756455a50564c5a5d555c0479607c7d0a6176747a7c7d507c7d75096176637c616746617f04766b7a67094b3e5e403e404746510c4b3e5e403e43524a5f5c525720232323232323232323232323232323232323232323232323232323232323232320772722772b70772a2b75232371212327762a2b23232a2a2b7670752b272124760165066671707c7776067776707c777602262202262102262002262702262602262502262402262b02262a022523022522022521022520", [, , , commonVmp, {}, function () {
        return 0;
    }, function () {
        return "03v";
    }, {
        ubcode: 0
    }, {}, encodingMethods, {
        userAgent: b
    }, function (e, b) {
        var a = new Uint8Array(3);
        return a[0] = e / 256, a[1] = e % 256, a[2] = b % 256, String.fromCharCode.apply(null, a);
    }, function (e, b) {
        var a = void 0,
            f = [],
            c = 0,
            r = "";
        for (var _e = 0; _e < 256; _e++) {
            f[_e] = _e;
        }
        for (var _b = 0; _b < 256; _b++) {
            c = (c + f[_b] + e.charCodeAt(_b % e.length)) % 256, a = f[_b], f[_b] = f[c], f[c] = a;
        }
        var t = 0;
        c = 0;
        for (var _e2 = 0; _e2 < b.length; _e2++) {
            c = (c + f[t = (t + 1) % 256]) % 256, a = f[t], f[t] = f[c], f[c] = a, r += String.fromCharCode(b.charCodeAt(_e2) ^ f[(f[t] + f[c]) % 256]);
        }
        return r;
    }, function (e, b) {
        return jsvmp("484e4f4a403f524300281018f7b851f02d296e5b00000000000004a21b0002001d1d001e1b00131e00061a001d001f1b000b070200200200210d1b000b070200220200230d1b000b070200240200250d1b000b070200260200270d1b001b000b071b000b05191d00031b000200001d00281b0048001d00291b000b041e002a1b000b0b4803283b1700f11b001b000b04221e002b241b001e0029222d1b00241d00290a0001104900ff2f4810331b000b04221e002b241b001e0029222d1b00241d00290a0001104900ff2f480833301b000b04221e002b241b001e0029222d1b00241d00290a0001104900ff2f301d002c1b00220b091b000b08221e002d241b000b0a4a00fc00002f4812340a000110281d00281b00220b091b000b08221e002d241b000b0a4a0003f0002f480c340a000110281d00281b00220b091b000b08221e002d241b000b0a490fc02f4806340a000110281d00281b00220b091b000b08221e002d241b000b0a483f2f0a000110281d002816ff031b000b041e002a1b000b0b294800391700e01b001b000b04221e002b241b001e0029222d1b00241d00290a0001104900ff2f4810331b000b041e002a1b000b0b3917001e1b000b04221e002b241b000b0b0a0001104900ff2f4808331600054800301d002c1b00220b091b000b08221e002d241b000b0a4a00fc00002f4812340a000110281d00281b00220b091b000b08221e002d241b000b0a4a0003f0002f480c340a000110281d00281b00220b091b000b041e002a1b000b0b3917001e1b000b08221e002d241b000b0a490fc02f4806340a0001101600071b000b06281d00281b00220b091b000b06281d00281b000b090000002e000126207575757575757575757575757575757575757575757575757575757575757575012b0e7776757a7d7643617c637661676a027a77065c717976706708777671667474766107767d65707c77760374766707707c7d607c7f7607757a61767166740a7c66677661447a77677b0a7a7d7d7661447a77677b0b7c666776615b767a747b670b7a7d7d76615b767a747b6709666076615274767d670b677c5f7c64766150726076077a7d77766b5c7508767f767067617c7d09667d7776757a7d76770963617c677c676a637608677c4067617a7d740470727f7f0763617c7076606010487c71797670673363617c707660604e067c717976706705677a677f76047d7c7776012e0125012402602341525150575655545b5a59585f5e5d5c43424140474645444b4a49727170777675747b7a79787f7e7d7c63626160676665646b6a6923222120272625242b2a383c2e0260224157787763747b2749586042512b233c5e75656420254b5a22412126384446527f567a245d5f717c624a475c4366697e5579597d616a6b2a5b45547072406750762e0260214157787763747b2749586042512b233c5e75656420254b5a224121263e4446527f567a245d5f717c624a475c4366697e5579597d616a6b2a5b45547072406750762e02602041525150575655545b5a59585f5e5d5c43424140474645444b4a49727170777675747b7a79787f7e7d7c63626160676665646b6a6923222120272625242b2a3e4c2e012a022222067f767d74677b0a707b7261507c7776526702222306707b72615267", [, , , , e, b]);
    }, Date, function () {
        return 0;
    }, function (e, b, a, f, c, r, t, d, i, n, s, o, l, _, x, u, h, p, y) {
        var v = new Uint8Array(19);
        return v[0] = e, v[1] = s, v[2] = b, v[3] = o, v[4] = a, v[5] = l, v[6] = f, v[7] = _, v[8] = c, v[9] = x, v[10] = r, v[11] = u, v[12] = t, v[13] = h, v[14] = d, v[15] = p, v[16] = i, v[17] = y, v[18] = n, String.fromCharCode.apply(null, v);
    }, function (e) {
        return String.fromCharCode(e);
    }, function (e, b, a) {
        return String.fromCharCode(e) + String.fromCharCode(b) + a;
    }, function (e, b) {
        return jsvmp("484e4f4a403f524300281018f7b851f02d296e5b00000000000004a21b0002001d1d001e1b00131e00061a001d001f1b000b070200200200210d1b000b070200220200230d1b000b070200240200250d1b000b070200260200270d1b001b000b071b000b05191d00031b000200001d00281b0048001d00291b000b041e002a1b000b0b4803283b1700f11b001b000b04221e002b241b001e0029222d1b00241d00290a0001104900ff2f4810331b000b04221e002b241b001e0029222d1b00241d00290a0001104900ff2f480833301b000b04221e002b241b001e0029222d1b00241d00290a0001104900ff2f301d002c1b00220b091b000b08221e002d241b000b0a4a00fc00002f4812340a000110281d00281b00220b091b000b08221e002d241b000b0a4a0003f0002f480c340a000110281d00281b00220b091b000b08221e002d241b000b0a490fc02f4806340a000110281d00281b00220b091b000b08221e002d241b000b0a483f2f0a000110281d002816ff031b000b041e002a1b000b0b294800391700e01b001b000b04221e002b241b001e0029222d1b00241d00290a0001104900ff2f4810331b000b041e002a1b000b0b3917001e1b000b04221e002b241b000b0b0a0001104900ff2f4808331600054800301d002c1b00220b091b000b08221e002d241b000b0a4a00fc00002f4812340a000110281d00281b00220b091b000b08221e002d241b000b0a4a0003f0002f480c340a000110281d00281b00220b091b000b041e002a1b000b0b3917001e1b000b08221e002d241b000b0a490fc02f4806340a0001101600071b000b06281d00281b00220b091b000b06281d00281b000b090000002e000126207575757575757575757575757575757575757575757575757575757575757575012b0e7776757a7d7643617c637661676a027a77065c717976706708777671667474766107767d65707c77760374766707707c7d607c7f7607757a61767166740a7c66677661447a77677b0a7a7d7d7661447a77677b0b7c666776615b767a747b670b7a7d7d76615b767a747b6709666076615274767d670b677c5f7c64766150726076077a7d77766b5c7508767f767067617c7d09667d7776757a7d76770963617c677c676a637608677c4067617a7d740470727f7f0763617c7076606010487c71797670673363617c707660604e067c717976706705677a677f76047d7c7776012e0125012402602341525150575655545b5a59585f5e5d5c43424140474645444b4a49727170777675747b7a79787f7e7d7c63626160676665646b6a6923222120272625242b2a383c2e0260224157787763747b2749586042512b233c5e75656420254b5a22412126384446527f567a245d5f717c624a475c4366697e5579597d616a6b2a5b45547072406750762e0260214157787763747b2749586042512b233c5e75656420254b5a224121263e4446527f567a245d5f717c624a475c4366697e5579597d616a6b2a5b45547072406750762e02602041525150575655545b5a59585f5e5d5c43424140474645444b4a49727170777675747b7a79787f7e7d7c63626160676665646b6a6923222120272625242b2a3e4c2e012a022222067f767d74677b0a707b7261507c7776526702222306707b72615267", [, , , , e, b]);
    }, , sign, e, ]);
}

module.exports = {
    sign: sign
}



// ss=sign("device_platform=webapp&aid=6383&channel=channel_pc_web&item_id=7271959768397385015&comment_id=7271973390918648637&cursor=0&count=3&item_type=0&pc_client_type=1&version_code=170400&version_name=17.4.0&cookie_enabled=true&screen_width=2560&screen_height=1440&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Chrome&browser_version=115.0.0.0&browser_online=true&engine_name=Blink&engine_version=115.0.0.0&os_name=Mac+OS&os_version=10.15.7&cpu_core_num=8&device_memory=8&platform=PC&downlink=10&effective_type=4g&round_trip_time=50&webid=7272565602575926844&msToken=zae-KhhJGuCaSh1xoypI_B7K30kHDzMOmBTq1nxlENrSuv56M1VVK7W3pY5I0xlDeg3VHPr566Oi27aZX7OGThK-_K8pDVEAMVAYc1TW0qyNXIIYewbfPusuINo=","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36")
