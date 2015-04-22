define("echarts/chart/bar", ["require", "./base", "zrender/shape/Rectangle", "../component/axis", "../component/grid", "../component/dataZoom", "../config", "../util/ecData", "zrender/tool/util", "zrender/tool/color", "../chart"], function(e) {
	function t(e, t, n, a, o) {
		i.call(this, e, t, n, a, o), this.refresh(a)
	}
	var i = e("./base"),
		n = e("zrender/shape/Rectangle");
	e("../component/axis"), e("../component/grid"), e("../component/dataZoom");
	var a = e("../config");
	a.bar = {
		zlevel: 0,
		z: 2,
		clickable: !0,
		legendHoverLink: !0,
		xAxisIndex: 0,
		yAxisIndex: 0,
		barMinHeight: 0,
		barGap: "50%",
		barCategoryGap: "20%",
		itemStyle: {
			normal: {
				barBorderColor: "#fff",
				barBorderRadius: 0,
				barBorderWidth: 0,
				label: {
					show: !1
				}
			},
			emphasis: {
				barBorderColor: "#fff",
				barBorderRadius: 0,
				barBorderWidth: 0,
				label: {
					show: !1
				}
			}
		}
	};
	var o = e("../util/ecData"),
		r = e("zrender/tool/util"),
		s = e("zrender/tool/color");
	return t.prototype = {
		type: a.CHART_TYPE_BAR,
		_buildShape: function() {
			this._buildPosition()
		},
		_buildNormal: function(e, t, i, o, r) {
			for (var s, l, h, d, m, c, p, u, V, U, g, y, f = this.series, b = i[0][0], _ = f[b], x = "horizontal" == r, k = this.component.xAxis, L = this.component.yAxis, v = x ? k.getAxis(_.xAxisIndex) : L.getAxis(_.yAxisIndex), W = this._mapSize(v, i), w = W.gap, X = W.barGap, I = W.barWidthMap, K = W.barMaxWidthMap, S = W.barWidth, C = W.barMinHeightMap, T = W.interval, E = this.deepQuery([this.ecTheme, a], "island.r"), z = 0, A = t; A > z && null != v.getNameByIndex(z); z++) {
				x ? d = v.getCoordByIndex(z) - w / 2 : m = v.getCoordByIndex(z) + w / 2;
				for (var M = 0, J = i.length; J > M; M++) {
					var F = f[i[M][0]].yAxisIndex || 0,
						O = f[i[M][0]].xAxisIndex || 0;
					s = x ? L.getAxis(F) : k.getAxis(O), p = c = V = u = s.getCoord(0);
					for (var P = 0, D = i[M].length; D > P; P++) b = i[M][P], _ = f[b], g = _.data[z], y = this.getDataFromOption(g, "-"), o[b] = o[b] || {
						min: Number.POSITIVE_INFINITY,
						max: Number.NEGATIVE_INFINITY,
						sum: 0,
						counter: 0,
						average: 0
					}, h = Math.min(K[b] || Number.MAX_VALUE, I[b] || S), "-" !== y && (y > 0 ? (l = P > 0 ? s.getCoordSize(y) : x ? p - s.getCoord(y) : s.getCoord(y) - p, 1 === D && C[b] > l && (l = C[b]), x ? (c -= l, m = c) : (d = c, c += l)) : 0 > y ? (l = P > 0 ? s.getCoordSize(y) : x ? s.getCoord(y) - V : V - s.getCoord(y), 1 === D && C[b] > l && (l = C[b]), x ? (m = u, u += l) : (u -= l, d = u)) : (l = 0, x ? (c -= l, m = c) : (d = c, c += l)), o[b][z] = x ? d + h / 2 : m - h / 2, o[b].min > y && (o[b].min = y, x ? (o[b].minY = m, o[b].minX = o[b][z]) : (o[b].minX = d + l, o[b].minY = o[b][z])), o[b].max < y && (o[b].max = y, x ? (o[b].maxY = m, o[b].maxX = o[b][z]) : (o[b].maxX = d + l, o[b].maxY = o[b][z])), o[b].sum += y, o[b].counter++, z % T === 0 && (U = this._getBarItem(b, z, v.getNameByIndex(z), d, m - (x ? 0 : h), x ? h : l, x ? l : h, x ? "vertical" : "horizontal"), this.shapeList.push(new n(U))));
					for (var P = 0, D = i[M].length; D > P; P++) b = i[M][P], _ = f[b], g = _.data[z], y = this.getDataFromOption(g, "-"), h = Math.min(K[b] || Number.MAX_VALUE, I[b] || S), "-" == y && this.deepQuery([g, _, this.option], "calculable") && (x ? (c -= E, m = c) : (d = c, c += E), U = this._getBarItem(b, z, v.getNameByIndex(z), d, m - (x ? 0 : h), x ? h : E, x ? E : h, x ? "vertical" : "horizontal"), U.hoverable = !1, U.draggable = !1, U.style.lineWidth = 1, U.style.brushType = "stroke", U.style.strokeColor = _.calculableHolderColor || this.ecTheme.calculableHolderColor || a.calculableHolderColor, this.shapeList.push(new n(U)));
					x ? d += h + X : m -= h + X
				}
			}
			this._calculMarkMapXY(o, i, x ? "y" : "x")
		},
		_buildHorizontal: function(e, t, i, n) {
			return this._buildNormal(e, t, i, n, "horizontal")
		},
		_buildVertical: function(e, t, i, n) {
			return this._buildNormal(e, t, i, n, "vertical")
		},
		_buildOther: function(e, t, i, a) {
			for (var o = this.series, r = 0, s = i.length; s > r; r++)
				for (var l = 0, h = i[r].length; h > l; l++) {
					var d = i[r][l],
						m = o[d],
						c = m.xAxisIndex || 0,
						p = this.component.xAxis.getAxis(c),
						u = p.getCoord(0),
						V = m.yAxisIndex || 0,
						U = this.component.yAxis.getAxis(V),
						g = U.getCoord(0);
					a[d] = a[d] || {
						min0: Number.POSITIVE_INFINITY,
						min1: Number.POSITIVE_INFINITY,
						max0: Number.NEGATIVE_INFINITY,
						max1: Number.NEGATIVE_INFINITY,
						sum0: 0,
						sum1: 0,
						counter0: 0,
						counter1: 0,
						average0: 0,
						average1: 0
					};
					for (var y = 0, f = m.data.length; f > y; y++) {
						var b = m.data[y],
							_ = this.getDataFromOption(b, "-");
						if (_ instanceof Array) {
							var x, k, L = p.getCoord(_[0]),
								v = U.getCoord(_[1]),
								W = [b, m],
								w = this.deepQuery(W, "barWidth") || 10,
								X = this.deepQuery(W, "barHeight");
							null != X ? (x = "horizontal", _[0] > 0 ? (w = L - u, L -= w) : w = _[0] < 0 ? u - L : 0, k = this._getBarItem(d, y, _[0], L, v - X / 2, w, X, x)) : (x = "vertical", _[1] > 0 ? X = g - v : _[1] < 0 ? (X = v - g, v -= X) : X = 0, k = this._getBarItem(d, y, _[0], L - w / 2, v, w, X, x)), this.shapeList.push(new n(k)), L = p.getCoord(_[0]), v = U.getCoord(_[1]), a[d].min0 > _[0] && (a[d].min0 = _[0], a[d].minY0 = v, a[d].minX0 = L), a[d].max0 < _[0] && (a[d].max0 = _[0], a[d].maxY0 = v, a[d].maxX0 = L), a[d].sum0 += _[0], a[d].counter0++, a[d].min1 > _[1] && (a[d].min1 = _[1], a[d].minY1 = v, a[d].minX1 = L), a[d].max1 < _[1] && (a[d].max1 = _[1], a[d].maxY1 = v, a[d].maxX1 = L), a[d].sum1 += _[1], a[d].counter1++
						}
					}
				}
			this._calculMarkMapXY(a, i, "xy")
		},
		_mapSize: function(e, t, i) {
			var n, a, o = this._findSpecialBarSzie(t, i),
				r = o.barWidthMap,
				s = o.barMaxWidthMap,
				l = o.barMinHeightMap,
				h = o.sBarWidthCounter,
				d = o.sBarWidthTotal,
				m = o.barGap,
				c = o.barCategoryGap,
				p = 1;
			if (t.length != h) {
				if (i) n = e.getGap(), m = 0, a = +(n / t.length).toFixed(2), 0 >= a && (p = Math.floor(t.length / n), a = 1);
				else if (n = "string" == typeof c && c.match(/%$/) ? (e.getGap() * (100 - parseFloat(c)) / 100).toFixed(2) - 0 : e.getGap() - c, "string" == typeof m && m.match(/%$/) ? (m = parseFloat(m) / 100, a = +((n - d) / ((t.length - 1) * m + t.length - h)).toFixed(2), m = a * m) : (m = parseFloat(m), a = +((n - d - m * (t.length - 1)) / (t.length - h)).toFixed(2)), 0 >= a) return this._mapSize(e, t, !0)
			} else if (n = h > 1 ? "string" == typeof c && c.match(/%$/) ? +(e.getGap() * (100 - parseFloat(c)) / 100).toFixed(2) : e.getGap() - c : d, a = 0, m = h > 1 ? +((n - d) / (h - 1)).toFixed(2) : 0, 0 > m) return this._mapSize(e, t, !0);
			return this._recheckBarMaxWidth(t, r, s, l, n, a, m, p)
		},
		_findSpecialBarSzie: function(e, t) {
			for (var i, n, a, o, r = this.series, s = {}, l = {}, h = {}, d = 0, m = 0, c = 0, p = e.length; p > c; c++)
				for (var u = {
						barWidth: !1,
						barMaxWidth: !1
					}, V = 0, U = e[c].length; U > V; V++) {
					var g = e[c][V],
						y = r[g];
					if (!t) {
						if (u.barWidth) s[g] = i;
						else if (i = this.query(y, "barWidth"), null != i) {
							s[g] = i, m += i, d++, u.barWidth = !0;
							for (var f = 0, b = V; b > f; f++) {
								var _ = e[c][f];
								s[_] = i
							}
						}
						if (u.barMaxWidth) l[g] = n;
						else if (n = this.query(y, "barMaxWidth"), null != n) {
							l[g] = n, u.barMaxWidth = !0;
							for (var f = 0, b = V; b > f; f++) {
								var _ = e[c][f];
								l[_] = n
							}
						}
					}
					h[g] = this.query(y, "barMinHeight"), a = null != a ? a : this.query(y, "barGap"), o = null != o ? o : this.query(y, "barCategoryGap")
				}
			return {
				barWidthMap: s,
				barMaxWidthMap: l,
				barMinHeightMap: h,
				sBarWidth: i,
				sBarMaxWidth: n,
				sBarWidthCounter: d,
				sBarWidthTotal: m,
				barGap: a,
				barCategoryGap: o
			}
		},
		_recheckBarMaxWidth: function(e, t, i, n, a, o, r, s) {
			for (var l = 0, h = e.length; h > l; l++) {
				var d = e[l][0];
				i[d] && i[d] < o && (a -= o - i[d])
			}
			return {
				barWidthMap: t,
				barMaxWidthMap: i,
				barMinHeightMap: n,
				gap: a,
				barWidth: o,
				barGap: r,
				interval: s
			}
		},
		_getBarItem: function(e, t, i, n, a, r, l, h) {
			var d, m = this.series,
				c = m[e],
				p = c.data[t],
				u = this._sIndex2ColorMap[e],
				V = [p, c],
				U = this.deepMerge(V, "itemStyle.normal"),
				g = this.deepMerge(V, "itemStyle.emphasis"),
				y = U.barBorderWidth;
			d = {
				zlevel: this.getZlevelBase(),
				z: this.getZBase(),
				clickable: this.deepQuery(V, "clickable"),
				style: {
					x: n,
					y: a,
					width: r,
					height: l,
					brushType: "both",
					color: this.getItemStyleColor(this.deepQuery(V, "itemStyle.normal.color") || u, e, t, p),
					radius: U.barBorderRadius,
					lineWidth: y,
					strokeColor: U.barBorderColor
				},
				highlightStyle: {
					color: this.getItemStyleColor(this.deepQuery(V, "itemStyle.emphasis.color"), e, t, p),
					radius: g.barBorderRadius,
					lineWidth: g.barBorderWidth,
					strokeColor: g.barBorderColor
				},
				_orient: h
			};
			var f = d.style;
			d.highlightStyle.color = d.highlightStyle.color || ("string" == typeof f.color ? s.lift(f.color, -.3) : f.color), f.x = Math.floor(f.x), f.y = Math.floor(f.y), f.height = Math.ceil(f.height), f.width = Math.ceil(f.width), y > 0 && f.height > y && f.width > y ? (f.y += y / 2, f.height -= y, f.x += y / 2, f.width -= y) : f.brushType = "fill", d.highlightStyle.textColor = d.highlightStyle.color, d = this.addLabel(d, c, p, i, h);
			for (var b = [f, d.highlightStyle], _ = 0, x = b.length; x > _; _++) {
				var k = b[_].textPosition;
				if ("insideLeft" === k || "insideRight" === k || "insideTop" === k || "insideBottom" === k) {
					var L = 5;
					switch (k) {
						case "insideLeft":
							b[_].textX = f.x + L, b[_].textY = f.y + f.height / 2, b[_].textAlign = "left", b[_].textBaseline = "middle";
							break;
						case "insideRight":
							b[_].textX = f.x + f.width - L, b[_].textY = f.y + f.height / 2, b[_].textAlign = "right", b[_].textBaseline = "middle";
							break;
						case "insideTop":
							b[_].textX = f.x + f.width / 2, b[_].textY = f.y + L / 2, b[_].textAlign = "center", b[_].textBaseline = "top";
							break;
						case "insideBottom":
							b[_].textX = f.x + f.width / 2, b[_].textY = f.y + f.height - L / 2, b[_].textAlign = "center", b[_].textBaseline = "bottom"
					}
					b[_].textPosition = "specific", b[_].textColor = b[_].textColor || "#fff"
				}
			}
			return this.deepQuery([p, c, this.option], "calculable") && (this.setCalculable(d), d.draggable = !0), o.pack(d, m[e], e, m[e].data[t], t, i), d
		},
		getMarkCoord: function(e, t) {
			var i, n, a = this.series[e],
				o = this.xMarkMap[e],
				r = this.component.xAxis.getAxis(a.xAxisIndex),
				s = this.component.yAxis.getAxis(a.yAxisIndex);
			if (!t.type || "max" !== t.type && "min" !== t.type && "average" !== t.type)
				if (o.isHorizontal) {
					i = "string" == typeof t.xAxis && r.getIndexByName ? r.getIndexByName(t.xAxis) : t.xAxis || 0;
					var l = o[i];
					l = null != l ? l : "string" != typeof t.xAxis && r.getCoordByIndex ? r.getCoordByIndex(t.xAxis || 0) : r.getCoord(t.xAxis || 0), n = [l, s.getCoord(t.yAxis || 0)]
				} else {
					i = "string" == typeof t.yAxis && s.getIndexByName ? s.getIndexByName(t.yAxis) : t.yAxis || 0;
					var h = o[i];
					h = null != h ? h : "string" != typeof t.yAxis && s.getCoordByIndex ? s.getCoordByIndex(t.yAxis || 0) : s.getCoord(t.yAxis || 0), n = [r.getCoord(t.xAxis || 0), h]
				} else {
				var d = null != t.valueIndex ? t.valueIndex : null != o.maxX0 ? "1" : "";
				n = [o[t.type + "X" + d], o[t.type + "Y" + d], o[t.type + "Line" + d], o[t.type + d]]
			}
			return n
		},
		refresh: function(e) {
			e && (this.option = e, this.series = e.series), this.backupShapeList(), this._buildShape()
		},
		addDataAnimation: function(e, t) {
			function i() {
				V--, 0 === V && t && t()
			}
			for (var n = this.series, a = {}, r = 0, s = e.length; s > r; r++) a[e[r][0]] = e[r];
			for (var l, h, d, m, c, p, u, V = 0, r = this.shapeList.length - 1; r >= 0; r--)
				if (p = o.get(this.shapeList[r], "seriesIndex"), a[p] && !a[p][3] && "rectangle" === this.shapeList[r].type) {
					if (u = o.get(this.shapeList[r], "dataIndex"), c = n[p], a[p][2] && u === c.data.length - 1) {
						this.zr.delShape(this.shapeList[r].id);
						continue
					}
					if (!a[p][2] && 0 === u) {
						this.zr.delShape(this.shapeList[r].id);
						continue
					}
					"horizontal" === this.shapeList[r]._orient ? (m = this.component.yAxis.getAxis(c.yAxisIndex || 0).getGap(), d = a[p][2] ? -m : m, l = 0) : (h = this.component.xAxis.getAxis(c.xAxisIndex || 0).getGap(), l = a[p][2] ? h : -h, d = 0), this.shapeList[r].position = [0, 0], V++, this.zr.animate(this.shapeList[r].id, "").when(this.query(this.option, "animationDurationUpdate"), {
						position: [l, d]
					}).done(i).start()
				}
			V || i()
		}
	}, r.inherits(t, i), e("../chart").define("bar", t), t
});