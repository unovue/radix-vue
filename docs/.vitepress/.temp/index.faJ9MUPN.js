import { computed, unref, ref, shallowRef, watch, getCurrentScope, onScopeDispose, shallowReadonly, defineComponent, mergeProps, cloneVNode, h, openBlock, createBlock, withCtx, renderSlot, toRefs, getCurrentInstance, nextTick, onMounted, createVNode, createCommentVNode, withKeys, normalizeProps, guardReactiveProps, reactive, withModifiers, createElementBlock, normalizeStyle, Fragment, watchEffect, markRaw, withDirectives, vShow, createTextVNode, toDisplayString, isRef, Teleport, createElementVNode, onUnmounted, resolveDynamicComponent, renderList, onBeforeUnmount, useSlots, onBeforeMount, customRef, effectScope, readonly, toHandlerKey, camelize, vModelSelect, toRaw, inject, provide, onBeforeUpdate, onUpdated, toRef, mergeDefaults } from "vue";
const sides = ["top", "right", "bottom", "left"];
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v) => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
const oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr2 = ["left", "right"];
  const rl2 = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl2 : lr2;
      return isStart ? lr2 : rl2;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
      continue;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x,
    y
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
const arrow$2 = (options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform: platform2,
      elements,
      middlewareData
    } = state;
    const {
      element,
      padding = 0
    } = evaluate(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = getPaddingObject(padding);
    const coords = {
      x,
      y
    };
    const axis = getAlignmentAxis(placement);
    const length = getAxisLength(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = min(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
    const min$1 = minPadding;
    const max2 = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = clamp(min$1, center, max2);
    const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2 - alignmentOffset,
        ...shouldAddOffset && {
          alignmentOffset
        }
      },
      reset: shouldAddOffset
    };
  }
});
const flip$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return sides.some((side) => overflow[side] >= 0);
}
const hide$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "hide",
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = "referenceHidden",
        ...detectOverflowOptions
      } = evaluate(options, state);
      switch (strategy) {
        case "referenceHidden": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            elementContext: "reference"
          });
          const offsets = getSideOffsets(overflow, rects.reference);
          return {
            data: {
              referenceHiddenOffsets: offsets,
              referenceHidden: isAnySideFullyClipped(offsets)
            }
          };
        }
        case "escaped": {
          const overflow = await detectOverflow(state, {
            ...detectOverflowOptions,
            altBoundary: true
          });
          const offsets = getSideOffsets(overflow, rects.floating);
          return {
            data: {
              escapedOffsets: offsets,
              escaped: isAnySideFullyClipped(offsets)
            }
          };
        }
        default: {
          return {};
        }
      }
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
const offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
const shift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x2,
              y: y2
            } = _ref;
            return {
              x: x2,
              y: y2
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }
  };
};
const limitShift$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset: offset2 = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = getSideAxis(placement);
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = evaluate(offset2, state);
      const computedOffset = typeof rawOffset === "number" ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === "y" ? "height" : "width";
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === "y" ? "width" : "height";
        const isOriginSide = ["top", "left"].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};
const size$1 = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isYAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isContainingBlock(element) {
  const webkit = isWebKit();
  const css = getComputedStyle$1(element);
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports)
    return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement$1(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement$1(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $2
  } = getCssDimensions(domElement);
  let x = ($2 ? round(rect.width) : rect.width) / width;
  let y = ($2 ? round(rect.height) : rect.height) / height;
  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}
const noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement$1(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el2) => isElement(el2) && getNodeName(el2) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
const getElementRects = async function(_ref) {
  let {
    reference,
    floating,
    strategy
  } = _ref;
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  return {
    reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
    floating: {
      x: 0,
      y: 0,
      ...await getDimensionsFn(floating)
    }
  };
};
function isRTL(element) {
  return getComputedStyle$1(element).direction === "rtl";
}
const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    clearTimeout(timeoutId);
    io && io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 100);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement$1(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          resizeObserver && resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo && cleanupIo();
    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
const shift = shift$1;
const flip = flip$1;
const size = size$1;
const hide = hide$1;
const arrow$1 = arrow$2;
const limitShift = limitShift$1;
const computePosition = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};
function isComponentPublicInstance(target) {
  return target != null && typeof target === "object" && "$el" in target;
}
function unwrapElement(target) {
  if (isComponentPublicInstance(target)) {
    const element = target.$el;
    return isNode(element) && getNodeName(element) === "#comment" ? null : element;
  }
  return target;
}
function arrow(options) {
  return {
    name: "arrow",
    options,
    fn(args) {
      const element = unwrapElement(unref(options.element));
      if (element == null) {
        return {};
      }
      return arrow$1({
        element,
        padding: options.padding
      }).fn(args);
    }
  };
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useFloating(reference, floating, options) {
  if (options === void 0) {
    options = {};
  }
  const whileElementsMountedOption = options.whileElementsMounted;
  const openOption = computed(() => {
    var _unref;
    return (_unref = unref(options.open)) != null ? _unref : true;
  });
  const middlewareOption = computed(() => unref(options.middleware));
  const placementOption = computed(() => {
    var _unref2;
    return (_unref2 = unref(options.placement)) != null ? _unref2 : "bottom";
  });
  const strategyOption = computed(() => {
    var _unref3;
    return (_unref3 = unref(options.strategy)) != null ? _unref3 : "absolute";
  });
  const transformOption = computed(() => {
    var _unref4;
    return (_unref4 = unref(options.transform)) != null ? _unref4 : true;
  });
  const referenceElement = computed(() => unwrapElement(reference.value));
  const floatingElement = computed(() => unwrapElement(floating.value));
  const x = ref(0);
  const y = ref(0);
  const strategy = ref(strategyOption.value);
  const placement = ref(placementOption.value);
  const middlewareData = shallowRef({});
  const isPositioned = ref(false);
  const floatingStyles = computed(() => {
    const initialStyles = {
      position: strategy.value,
      left: "0",
      top: "0"
    };
    if (!floatingElement.value) {
      return initialStyles;
    }
    const xVal = roundByDPR(floatingElement.value, x.value);
    const yVal = roundByDPR(floatingElement.value, y.value);
    if (transformOption.value) {
      return {
        ...initialStyles,
        transform: "translate(" + xVal + "px, " + yVal + "px)",
        ...getDPR(floatingElement.value) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy.value,
      left: xVal + "px",
      top: yVal + "px"
    };
  });
  let whileElementsMountedCleanup;
  function update() {
    if (referenceElement.value == null || floatingElement.value == null) {
      return;
    }
    computePosition(referenceElement.value, floatingElement.value, {
      middleware: middlewareOption.value,
      placement: placementOption.value,
      strategy: strategyOption.value
    }).then((position) => {
      x.value = position.x;
      y.value = position.y;
      strategy.value = position.strategy;
      placement.value = position.placement;
      middlewareData.value = position.middlewareData;
      isPositioned.value = true;
    });
  }
  function cleanup() {
    if (typeof whileElementsMountedCleanup === "function") {
      whileElementsMountedCleanup();
      whileElementsMountedCleanup = void 0;
    }
  }
  function attach() {
    cleanup();
    if (whileElementsMountedOption === void 0) {
      update();
      return;
    }
    if (referenceElement.value != null && floatingElement.value != null) {
      whileElementsMountedCleanup = whileElementsMountedOption(referenceElement.value, floatingElement.value, update);
      return;
    }
  }
  function reset() {
    if (!openOption.value) {
      isPositioned.value = false;
    }
  }
  watch([middlewareOption, placementOption, strategyOption], update, {
    flush: "sync"
  });
  watch([referenceElement, floatingElement], attach, {
    flush: "sync"
  });
  watch(openOption, reset, {
    flush: "sync"
  });
  if (getCurrentScope()) {
    onScopeDispose(cleanup);
  }
  return {
    x: shallowReadonly(x),
    y: shallowReadonly(y),
    strategy: shallowReadonly(strategy),
    placement: shallowReadonly(placement),
    middlewareData: shallowReadonly(middlewareData),
    isPositioned: shallowReadonly(isPositioned),
    floatingStyles,
    update
  };
}
function H(o2, t) {
  const e = typeof o2 == "string" && !t ? `${o2}Context` : t, a = Symbol(e);
  return [(l) => {
    const i = inject(a, l);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(o2) ? `one of the following components: ${o2.join(
        ", "
      )}` : `\`${o2}\``}`
    );
  }, (l) => (provide(a, l), l)];
}
function po(o2, t, e) {
  const a = e.originalEvent.target, s = new CustomEvent(o2, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && a.addEventListener(o2, t, { once: true }), a.dispatchEvent(s);
}
function Ga(o2, t) {
  var e;
  const a = shallowRef();
  return watchEffect(() => {
    a.value = o2();
  }, {
    ...t,
    flush: (e = t == null ? void 0 : t.flush) != null ? e : "sync"
  }), readonly(a);
}
function xn(o2, t) {
  let e, a, s;
  const r = ref(true), l = () => {
    r.value = true, s();
  };
  watch(o2, l, { flush: "sync" });
  const i = typeof t == "function" ? t : t.get, u = typeof t == "function" ? void 0 : t.set, d = customRef((p, c) => (a = p, s = c, {
    get() {
      return r.value && (e = i(), r.value = false), a(), e;
    },
    set(f) {
      u == null || u(f);
    }
  }));
  return Object.isExtensible(d) && (d.trigger = l), d;
}
function Ge(o2) {
  return getCurrentScope() ? (onScopeDispose(o2), true) : false;
}
function En(o2) {
  let t = false, e;
  const a = effectScope(true);
  return (...s) => (t || (e = a.run(() => o2(...s)), t = true), e);
}
function Ya(o2) {
  let t = 0, e, a;
  const s = () => {
    t -= 1, a && t <= 0 && (a.stop(), e = void 0, a = void 0);
  };
  return (...r) => (t += 1, e || (a = effectScope(true), e = a.run(() => o2(...r))), Ge(s), e);
}
function ye(o2) {
  return typeof o2 == "function" ? o2() : unref(o2);
}
const _e = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Xa = (o2) => typeof o2 < "u", Ja = Object.prototype.toString, Za = (o2) => Ja.call(o2) === "[object Object]", tn = (o2, t, e) => Math.min(e, Math.max(t, o2)), at = () => {
}, on = /* @__PURE__ */ Qa();
function Qa() {
  var o2, t;
  return _e && ((o2 = window == null ? void 0 : window.navigator) == null ? void 0 : o2.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function es(o2, t) {
  function e(...a) {
    return new Promise((s, r) => {
      Promise.resolve(o2(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(s).catch(r);
    });
  }
  return e;
}
function ts(o2, t = {}) {
  let e, a, s = at;
  const r = (i) => {
    clearTimeout(i), s(), s = at;
  };
  return (i) => {
    const u = ye(o2), d = ye(t.maxWait);
    return e && r(e), u <= 0 || d !== void 0 && d <= 0 ? (a && (r(a), a = null), Promise.resolve(i())) : new Promise((p, c) => {
      s = t.rejectOnCancel ? c : p, d && !a && (a = setTimeout(() => {
        e && r(e), a = null, p(i());
      }, d)), e = setTimeout(() => {
        a && r(a), a = null, p(i());
      }, u);
    });
  };
}
function os(o2) {
  return o2 || getCurrentInstance();
}
function ns(...o2) {
  if (o2.length !== 1)
    return toRef(...o2);
  const t = o2[0];
  return typeof t == "function" ? readonly(customRef(() => ({ get: t, set: at }))) : ref(t);
}
function St(o2, t = 1e4) {
  return customRef((e, a) => {
    let s = ye(o2), r;
    const l = () => setTimeout(() => {
      s = ye(o2), a();
    }, ye(t));
    return Ge(() => {
      clearTimeout(r);
    }), {
      get() {
        return e(), s;
      },
      set(i) {
        s = i, a(), clearTimeout(r), r = l();
      }
    };
  });
}
function fo(o2, t = 200, e = {}) {
  return es(
    ts(t, e),
    o2
  );
}
function as(o2, t) {
  os(t) && onBeforeUnmount(o2, t);
}
function vo(o2, t, e = {}) {
  const {
    immediate: a = true
  } = e, s = ref(false);
  let r = null;
  function l() {
    r && (clearTimeout(r), r = null);
  }
  function i() {
    s.value = false, l();
  }
  function u(...d) {
    l(), s.value = true, r = setTimeout(() => {
      s.value = false, r = null, o2(...d);
    }, ye(t));
  }
  return a && (s.value = true, _e && u()), Ge(i), {
    isPending: readonly(s),
    start: u,
    stop: i
  };
}
function ss(o2 = 1e3, t = {}) {
  const {
    controls: e = false,
    callback: a
  } = t, s = vo(
    a ?? at,
    o2,
    t
  ), r = computed(() => !s.isPending.value);
  return e ? {
    ready: r,
    ...s
  } : r;
}
function rs(o2, t, e) {
  const a = watch(o2, (...s) => (nextTick(() => a()), t(...s)), e);
  return a;
}
function ve(o2) {
  var t;
  const e = ye(o2);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const dt = _e ? window : void 0;
function Be(...o2) {
  let t, e, a, s;
  if (typeof o2[0] == "string" || Array.isArray(o2[0]) ? ([e, a, s] = o2, t = dt) : [t, e, a, s] = o2, !t)
    return at;
  Array.isArray(e) || (e = [e]), Array.isArray(a) || (a = [a]);
  const r = [], l = () => {
    r.forEach((p) => p()), r.length = 0;
  }, i = (p, c, f, v) => (p.addEventListener(c, f, v), () => p.removeEventListener(c, f, v)), u = watch(
    () => [ve(t), ye(s)],
    ([p, c]) => {
      if (l(), !p)
        return;
      const f = Za(c) ? { ...c } : c;
      r.push(
        ...e.flatMap((v) => a.map((y) => i(p, v, y, f)))
      );
    },
    { immediate: true, flush: "post" }
  ), d = () => {
    u(), l();
  };
  return Ge(d), d;
}
function ls(o2) {
  return typeof o2 == "function" ? o2 : typeof o2 == "string" ? (t) => t.key === o2 : Array.isArray(o2) ? (t) => o2.includes(t.key) : () => true;
}
function mo(...o2) {
  let t, e, a = {};
  o2.length === 3 ? (t = o2[0], e = o2[1], a = o2[2]) : o2.length === 2 ? typeof o2[1] == "object" ? (t = true, e = o2[0], a = o2[1]) : (t = o2[0], e = o2[1]) : (t = true, e = o2[0]);
  const {
    target: s = dt,
    eventName: r = "keydown",
    passive: l = false,
    dedupe: i = false
  } = a, u = ls(t);
  return Be(s, r, (p) => {
    p.repeat && ye(i) || u(p) && e(p);
  }, l);
}
function is(o2 = {}) {
  var t;
  const {
    window: e = dt,
    deep: a = true
  } = o2, s = (t = o2.document) != null ? t : e == null ? void 0 : e.document, r = () => {
    var i;
    let u = s == null ? void 0 : s.activeElement;
    if (a)
      for (; u != null && u.shadowRoot; )
        u = (i = u == null ? void 0 : u.shadowRoot) == null ? void 0 : i.activeElement;
    return u;
  }, l = xn(
    () => null,
    () => r()
  );
  return e && (Be(e, "blur", (i) => {
    i.relatedTarget === null && l.trigger();
  }, true), Be(e, "focus", l.trigger, true)), l;
}
function Tt() {
  const o2 = ref(false);
  return getCurrentInstance() && onMounted(() => {
    o2.value = true;
  }), o2;
}
function us(o2) {
  const t = Tt();
  return computed(() => (t.value, !!o2()));
}
function ds(o2, t = {}) {
  const {
    immediate: e = true,
    fpsLimit: a = void 0,
    window: s = dt
  } = t, r = ref(false), l = a ? 1e3 / a : null;
  let i = 0, u = null;
  function d(f) {
    if (!r.value || !s)
      return;
    const v = f - (i || f);
    if (l && v < l) {
      u = s.requestAnimationFrame(d);
      return;
    }
    o2({ delta: v, timestamp: f }), i = f, u = s.requestAnimationFrame(d);
  }
  function p() {
    !r.value && s && (r.value = true, u = s.requestAnimationFrame(d));
  }
  function c() {
    r.value = false, u != null && s && (s.cancelAnimationFrame(u), u = null);
  }
  return e && p(), Ge(c), {
    isActive: readonly(r),
    pause: c,
    resume: p
  };
}
function cs(o2) {
  return JSON.parse(JSON.stringify(o2));
}
function be(o2, t, e = {}) {
  const { window: a = dt, ...s } = e;
  let r;
  const l = us(() => a && "ResizeObserver" in a), i = () => {
    r && (r.disconnect(), r = void 0);
  }, u = computed(() => Array.isArray(o2) ? o2.map((c) => ve(c)) : [ve(o2)]), d = watch(
    u,
    (c) => {
      if (i(), l.value && a) {
        r = new ResizeObserver(t);
        for (const f of c)
          f && r.observe(f, s);
      }
    },
    { immediate: true, flush: "post", deep: true }
  ), p = () => {
    i(), d();
  };
  return Ge(p), {
    isSupported: l,
    stop: p
  };
}
function ps(o2, t = {}) {
  const e = is(t), a = computed(() => ve(o2));
  return { focused: computed(() => a.value && e.value ? a.value.contains(e.value) : false) };
}
function fs(o2, t) {
  const e = shallowRef(t);
  return watch(
    ns(o2),
    (a, s) => {
      e.value = s;
    },
    { flush: "sync" }
  ), readonly(e);
}
function X(o2, t, e, a = {}) {
  var s, r, l;
  const {
    clone: i = false,
    passive: u = false,
    eventName: d,
    deep: p = false,
    defaultValue: c,
    shouldEmit: f
  } = a, v = getCurrentInstance(), y = e || (v == null ? void 0 : v.emit) || ((s = v == null ? void 0 : v.$emit) == null ? void 0 : s.bind(v)) || ((l = (r = v == null ? void 0 : v.proxy) == null ? void 0 : r.$emit) == null ? void 0 : l.bind(v == null ? void 0 : v.proxy));
  let C = d;
  t || (t = "modelValue"), C = C || `update:${t.toString()}`;
  const E = (B) => i ? typeof i == "function" ? i(B) : cs(B) : B, _ = () => Xa(o2[t]) ? E(o2[t]) : c, x = (B) => {
    f ? f(B) && y(C, B) : y(C, B);
  };
  if (u) {
    const B = _(), O = ref(B);
    let A = false;
    return watch(
      () => o2[t],
      (M) => {
        A || (A = true, O.value = E(M), nextTick(() => A = false));
      }
    ), watch(
      O,
      (M) => {
        !A && (M !== o2[t] || p) && x(M);
      },
      { deep: p }
    ), O;
  } else
    return computed({
      get() {
        return _();
      },
      set(B) {
        x(B);
      }
    });
}
function Dt(o2) {
  return o2 ? o2.flatMap((t) => t.type === Fragment ? Dt(t.children) : [t]) : [];
}
const vs = ["INPUT", "TEXTAREA"];
function Ye(o2, t, e, a = {}) {
  if (!t || a.enableIgnoredElement && vs.includes(t.nodeName))
    return null;
  const {
    arrowKeyOptions: s = "both",
    attributeName: r = "[data-radix-vue-collection-item]",
    itemsArray: l = [],
    loop: i = true,
    dir: u = "ltr",
    preventScroll: d = true,
    focus: p = false
  } = a, [c, f, v, y, C, E] = [
    o2.key === "ArrowRight",
    o2.key === "ArrowLeft",
    o2.key === "ArrowUp",
    o2.key === "ArrowDown",
    o2.key === "Home",
    o2.key === "End"
  ], _ = v || y, x = c || f;
  if (!C && !E && (!_ && !x || s === "vertical" && x || s === "horizontal" && _))
    return null;
  const B = e ? Array.from(e.querySelectorAll(r)) : l;
  if (!B.length)
    return null;
  d && o2.preventDefault();
  let O = null;
  return x || _ ? O = Pn(B, t, {
    goForward: _ ? y : u === "ltr" ? c : f,
    loop: i
  }) : C ? O = B.at(0) || null : E && (O = B.at(-1) || null), p && (O == null || O.focus()), O;
}
function Pn(o2, t, { goForward: e, loop: a }, s = o2.length) {
  if (--s === 0)
    return null;
  const r = o2.indexOf(t), l = e ? r + 1 : r - 1;
  if (!a && (l < 0 || l >= o2.length))
    return null;
  const i = (l + o2.length) % o2.length, u = o2[i];
  return u ? u.hasAttribute("disabled") && u.getAttribute("disabled") !== "false" ? Pn(
    o2,
    u,
    { goForward: e, loop: a },
    s
  ) : u : null;
}
function Yt(o2) {
  if (o2 === null || typeof o2 != "object")
    return false;
  const t = Object.getPrototypeOf(o2);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in o2 ? false : Symbol.toStringTag in o2 ? Object.prototype.toString.call(o2) === "[object Module]" : true;
}
function eo(o2, t, e = ".", a) {
  if (!Yt(t))
    return eo(o2, {}, e, a);
  const s = Object.assign({}, t);
  for (const r in o2) {
    if (r === "__proto__" || r === "constructor")
      continue;
    const l = o2[r];
    l != null && (a && a(s, r, l, e) || (Array.isArray(l) && Array.isArray(s[r]) ? s[r] = [...l, ...s[r]] : Yt(l) && Yt(s[r]) ? s[r] = eo(
      l,
      s[r],
      (e ? `${e}.` : "") + r.toString(),
      a
    ) : s[r] = l));
  }
  return s;
}
function ms(o2) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((e, a) => eo(e, a, "", o2), {})
  );
}
const hs = ms(), [Bn, gs] = H("ConfigProvider"), ys = En(() => ({ count: ref(0) }));
function ee(o2) {
  const { count: t } = ys();
  return o2 || t.value++, o2 || `radix-${t.value}`;
}
const bs = Ya(() => {
  const o2 = ref(/* @__PURE__ */ new Map()), t = ref(), e = computed(() => {
    for (const l of o2.value.values())
      if (l)
        return true;
    return false;
  }), a = Bn({
    scrollBody: ref(true)
  });
  let s = null;
  const r = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", on && (s == null || s()), t.value = void 0;
  };
  return watch(e, (l, i) => {
    var c;
    if (!_e)
      return;
    if (!l) {
      i && r();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const u = window.innerWidth - document.documentElement.clientWidth, d = { padding: u, margin: 0 }, p = (c = a.scrollBody) != null && c.value ? typeof a.scrollBody.value == "object" ? hs({
      padding: a.scrollBody.value.padding === true ? u : a.scrollBody.value.padding,
      margin: a.scrollBody.value.margin === true ? u : a.scrollBody.value.margin
    }, d) : d : { padding: 0, margin: 0 };
    u > 0 && (document.body.style.paddingRight = `${p.padding}px`, document.body.style.marginRight = `${p.margin}px`, document.body.style.setProperty("--scrollbar-width", `${u}px`), document.body.style.overflow = "hidden"), on && (s = Be(
      document,
      "touchmove",
      (f) => {
        var v;
        f.target === document.documentElement && (f.touches.length > 1 || (v = f.preventDefault) == null || v.call(f));
      },
      { passive: false }
    )), nextTick(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: true, flush: "sync" }), o2;
});
function ct(o2) {
  const t = ee(), e = bs();
  e.value.set(t, o2 ?? false);
  const a = computed({
    get: () => e.value.get(t) ?? false,
    set: (s) => e.value.set(t, s)
  });
  return as(() => {
    e.value.delete(t);
  }), a;
}
const Cs = "data-radix-vue-collection-item";
function fe(o2, t = Cs) {
  const e = o2 ?? Symbol();
  return { createCollection: (r) => {
    const l = ref([]);
    function i() {
      const u = ve(r);
      return u ? l.value = Array.from(
        u.querySelectorAll(`[${t}]:not([data-disabled])`)
      ) : l.value = [];
    }
    return onBeforeUpdate(() => {
      l.value = [];
    }), onMounted(i), onUpdated(i), watch(() => r == null ? void 0 : r.value, i, { immediate: true }), provide(e, l), l;
  }, injectCollection: () => inject(e, ref([])) };
}
function ue(o2) {
  const t = Bn({
    dir: ref("ltr")
  });
  return computed(() => {
    var e;
    return (o2 == null ? void 0 : o2.value) || ((e = t.dir) == null ? void 0 : e.value) || "ltr";
  });
}
function de(o2) {
  const t = getCurrentInstance(), e = t == null ? void 0 : t.type.emits, a = {};
  return e != null && e.length || console.warn(
    `No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`
  ), e == null || e.forEach((s) => {
    a[toHandlerKey(camelize(s))] = (...r) => o2(s, ...r);
  }), a;
}
let Xt = 0;
function ho() {
  watchEffect((o2) => {
    if (!_e)
      return;
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    document.body.insertAdjacentElement(
      "afterbegin",
      t[0] ?? nn()
    ), document.body.insertAdjacentElement(
      "beforeend",
      t[1] ?? nn()
    ), Xt++, o2(() => {
      Xt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), Xt--;
    });
  });
}
function nn() {
  const o2 = document.createElement("span");
  return o2.setAttribute("data-radix-focus-guard", ""), o2.tabIndex = 0, o2.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", o2;
}
function Ke(o2) {
  return computed(() => {
    var t;
    return ye(o2) ? !!((t = ve(o2)) != null && t.closest("form")) : true;
  });
}
function Ne(o2) {
  const t = getCurrentInstance(), e = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((s, r) => {
    const l = (t == null ? void 0 : t.type.props[r]).default;
    return l !== void 0 && (s[r] = l), s;
  }, {}), a = toRef(o2);
  return computed(() => {
    const s = {}, r = (t == null ? void 0 : t.vnode.props) ?? {};
    return Object.keys(r).forEach((l) => {
      s[camelize(l)] = r[l];
    }), Object.keys({ ...e, ...s }).reduce((l, i) => (a.value[i] !== void 0 && (l[i] = a.value[i]), l), {});
  });
}
function ne(o2, t) {
  const e = Ne(o2), a = t ? de(t) : {};
  return computed(() => ({
    ...e.value,
    ...a
  }));
}
function $() {
  const o2 = getCurrentInstance(), t = ref(), e = computed(() => {
    var l, i;
    return ["#text", "#comment"].includes((l = t.value) == null ? void 0 : l.$el.nodeName) ? (i = t.value) == null ? void 0 : i.$el.nextElementSibling : ve(t);
  }), a = Object.assign({}, o2.exposed), s = {};
  for (const l in o2.props)
    Object.defineProperty(s, l, {
      enumerable: true,
      configurable: true,
      get: () => o2.props[l]
    });
  if (Object.keys(a).length > 0)
    for (const l in a)
      Object.defineProperty(s, l, {
        enumerable: true,
        configurable: true,
        get: () => a[l]
      });
  Object.defineProperty(s, "$el", {
    enumerable: true,
    configurable: true,
    get: () => o2.vnode.el
  }), o2.exposed = s;
  function r(l) {
    t.value = l, !(l instanceof Element || !l) && (Object.defineProperty(s, "$el", {
      enumerable: true,
      configurable: true,
      get: () => l.$el
    }), o2.exposed = s);
  }
  return { forwardRef: r, currentRef: t, currentElement: e };
}
var ws = function(o2) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(o2) ? o2[0] : o2;
  return t.ownerDocument.body;
}, Ue = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), bt = {}, Jt = 0, Sn = function(o2) {
  return o2 && (o2.host || Sn(o2.parentNode));
}, _s = function(o2, t) {
  return t.map(function(e) {
    if (o2.contains(e))
      return e;
    var a = Sn(e);
    return a && o2.contains(a) ? a : (console.error("aria-hidden", e, "in not contained inside", o2, ". Doing nothing"), null);
  }).filter(function(e) {
    return !!e;
  });
}, $s = function(o2, t, e, a) {
  var s = _s(t, Array.isArray(o2) ? o2 : [o2]);
  bt[e] || (bt[e] = /* @__PURE__ */ new WeakMap());
  var r = bt[e], l = [], i = /* @__PURE__ */ new Set(), u = new Set(s), d = function(c) {
    !c || i.has(c) || (i.add(c), d(c.parentNode));
  };
  s.forEach(d);
  var p = function(c) {
    !c || u.has(c) || Array.prototype.forEach.call(c.children, function(f) {
      if (i.has(f))
        p(f);
      else {
        var v = f.getAttribute(a), y = v !== null && v !== "false", C = (Ue.get(f) || 0) + 1, E = (r.get(f) || 0) + 1;
        Ue.set(f, C), r.set(f, E), l.push(f), C === 1 && y && yt.set(f, true), E === 1 && f.setAttribute(e, "true"), y || f.setAttribute(a, "true");
      }
    });
  };
  return p(t), i.clear(), Jt++, function() {
    l.forEach(function(c) {
      var f = Ue.get(c) - 1, v = r.get(c) - 1;
      Ue.set(c, f), r.set(c, v), f || (yt.has(c) || c.removeAttribute(a), yt.delete(c)), v || c.removeAttribute(e);
    }), Jt--, Jt || (Ue = /* @__PURE__ */ new WeakMap(), Ue = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), bt = {});
  };
}, xs = function(o2, t, e) {
  e === void 0 && (e = "data-aria-hidden");
  var a = Array.from(Array.isArray(o2) ? o2 : [o2]), s = t || ws(o2);
  return s ? (a.push.apply(a, Array.from(s.querySelectorAll("[aria-live]"))), $s(a, s, e, "aria-hidden")) : function() {
    return null;
  };
};
function pt(o2) {
  let t;
  watch(() => ve(o2), (e) => {
    e ? t = xs(e) : t && t();
  }), onUnmounted(() => {
    t && t();
  });
}
function Tn(o2) {
  const t = ref(), e = computed(() => {
    var s;
    return ((s = t.value) == null ? void 0 : s.width) ?? 0;
  }), a = computed(() => {
    var s;
    return ((s = t.value) == null ? void 0 : s.height) ?? 0;
  });
  return onMounted(() => {
    const s = ve(o2);
    if (s) {
      t.value = { width: s.offsetWidth, height: s.offsetHeight };
      const r = new ResizeObserver((l) => {
        if (!Array.isArray(l) || !l.length)
          return;
        const i = l[0];
        let u, d;
        if ("borderBoxSize" in i) {
          const p = i.borderBoxSize, c = Array.isArray(p) ? p[0] : p;
          u = c.inlineSize, d = c.blockSize;
        } else
          u = s.offsetWidth, d = s.offsetHeight;
        t.value = { width: u, height: d };
      });
      return r.observe(s, { box: "border-box" }), () => r.unobserve(s);
    } else
      t.value = void 0;
  }), {
    width: e,
    height: a
  };
}
function Dn(o2, t) {
  const e = ref(o2);
  function a(r) {
    return t[e.value][r] ?? e.value;
  }
  return {
    state: e,
    dispatch: (r) => {
      e.value = a(r);
    }
  };
}
function go(o2) {
  const t = St("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (s) => {
      var c, f;
      t.value = t.value + s;
      const r = o2.value, l = document.activeElement, i = ((f = (c = r.find((v) => v === l)) == null ? void 0 : c.textContent) == null ? void 0 : f.trim()) ?? "", u = r.map((v) => {
        var y;
        return ((y = v.textContent) == null ? void 0 : y.trim()) ?? "";
      }), d = Es(u, t.value, i), p = r.find(
        (v) => {
          var y;
          return ((y = v.textContent) == null ? void 0 : y.trim()) === d;
        }
      );
      p && p.focus();
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function yo(o2, t) {
  return o2.map((e, a) => o2[(t + a) % o2.length]);
}
function Es(o2, t, e) {
  const s = t.length > 1 && Array.from(t).every((d) => d === t[0]) ? t[0] : t, r = e ? o2.indexOf(e) : -1;
  let l = yo(o2, Math.max(r, 0));
  s.length === 1 && (l = l.filter((d) => d !== e));
  const u = l.find(
    (d) => d.toLowerCase().startsWith(s.toLowerCase())
  );
  return u !== e ? u : void 0;
}
const bo = defineComponent({
  name: "PrimitiveSlot",
  inheritAttrs: false,
  setup(o2, { attrs: t, slots: e }) {
    return () => {
      var l, i;
      if (!e.default)
        return null;
      const a = Dt(e.default()), [s, ...r] = a;
      if (Object.keys(t).length > 0) {
        (l = s.props) == null || delete l.ref;
        const u = mergeProps(t, s.props ?? {});
        t.class && ((i = s.props) != null && i.class) && delete s.props.class;
        const d = cloneVNode(s, u);
        for (const p in u)
          p.startsWith("on") && (d.props || (d.props = {}), d.props[p] = u[p]);
        return a.length === 1 ? d : [d, ...r];
      }
      return a;
    };
  }
}), D = defineComponent({
  name: "Primitive",
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(o2, { attrs: t, slots: e }) {
    return (o2.asChild ? "template" : o2.as) !== "template" ? () => h(o2.as, t, { default: e.default }) : () => h(bo, t, { default: e.default });
  }
});
function On() {
  const o2 = ref(), t = computed(() => {
    var e, a;
    return ["#text", "#comment"].includes((e = o2.value) == null ? void 0 : e.$el.nodeName) ? (a = o2.value) == null ? void 0 : a.$el.nextElementSibling : ve(o2);
  });
  return {
    primitiveElement: o2,
    currentElement: t
  };
}
const [In, Ps] = H("CollapsibleRoot"), Bs = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(o2, { expose: t, emit: e }) {
    const a = o2, r = X(a, "open", e, {
      defaultValue: a.defaultOpen,
      passive: a.open === void 0
    }), l = X(a, "disabled");
    return Ps({
      contentId: ee(),
      disabled: l,
      open: r,
      onOpenToggle: () => {
        r.value = !r.value;
      }
    }), t({ open: r }), $(), (i, u) => (openBlock(), createBlock(unref(D), {
      as: i.as,
      "as-child": a.asChild,
      "data-state": a.open ? "open" : "closed",
      "data-disabled": a.disabled ? "" : void 0
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default", { open: unref(r) })
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state", "data-disabled"]));
  }
}), Ss = /* @__PURE__ */ defineComponent({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = In();
    return (a, s) => {
      var r, l;
      return openBlock(), createBlock(unref(D), {
        type: a.as === "button" ? "button" : void 0,
        as: a.as,
        "as-child": t.asChild,
        "aria-controls": unref(e).contentId,
        "aria-expanded": unref(e).open.value,
        "data-state": unref(e).open.value ? "open" : "closed",
        "data-disabled": (r = unref(e).disabled) != null && r.value ? "" : void 0,
        disabled: (l = unref(e).disabled) == null ? void 0 : l.value,
        onClick: unref(e).onOpenToggle
      }, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 8, ["type", "as", "as-child", "aria-controls", "aria-expanded", "data-state", "data-disabled", "disabled", "onClick"]);
    };
  }
});
function Ts(o2, t) {
  const e = ref({}), a = ref("none"), s = o2.value ? "mounted" : "unmounted", { state: r, dispatch: l } = Dn(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  watch(
    o2,
    async (f, v) => {
      var C;
      const y = v !== f;
      if (await nextTick(), y) {
        const E = a.value, _ = Ct(t.value);
        f ? l("MOUNT") : _ === "none" || ((C = e.value) == null ? void 0 : C.display) === "none" ? l("UNMOUNT") : l(v && E !== _ ? "ANIMATION_OUT" : "UNMOUNT");
      }
    },
    { immediate: true }
  );
  const i = (f) => {
    const v = Ct(t.value), y = v.includes(
      f.animationName
    );
    f.target === t.value && y && l("ANIMATION_END"), f.target === t.value && v === "none" && l("ANIMATION_END");
  }, u = (f) => {
    f.target === t.value && (a.value = Ct(t.value));
  }, d = watch(
    t,
    (f, v) => {
      f ? (e.value = getComputedStyle(f), f.addEventListener("animationstart", u), f.addEventListener("animationcancel", i), f.addEventListener("animationend", i)) : (l("ANIMATION_END"), v == null || v.removeEventListener("animationstart", u), v == null || v.removeEventListener("animationcancel", i), v == null || v.removeEventListener("animationend", i));
    },
    { immediate: true }
  ), p = watch(r, () => {
    const f = Ct(t.value);
    a.value = r.value === "mounted" ? f : "none";
  });
  return onUnmounted(() => {
    d(), p();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(r.value)
    )
  };
}
function Ct(o2) {
  return o2 && getComputedStyle(o2).animationName || "none";
}
const ae = defineComponent({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: true
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(o2, { slots: t, expose: e }) {
    var d;
    const { present: a, forceMount: s } = toRefs(o2), r = ref(), { isPresent: l } = Ts(a, r);
    e({ present: l });
    let i = t.default({ present: l });
    i = Dt(i || []);
    const u = getCurrentInstance();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const p = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${p}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((c) => `  - ${c}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => s.value || a.value || l.value ? h(t.default({ present: l })[0], {
      ref: (p) => {
        const c = ve(p);
        return typeof (c == null ? void 0 : c.hasAttribute) > "u" || (c != null && c.hasAttribute("data-radix-popper-content-wrapper") ? r.value = c.firstElementChild : r.value = c), c;
      }
    }) : null;
  }
}), Ds = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = In(), a = ref(), { forwardRef: s, currentElement: r } = $(), l = ref(0), i = ref(0), u = computed(() => e.open.value), d = ref(u.value), p = ref();
    return watch(
      () => {
        var c;
        return [u.value, (c = a.value) == null ? void 0 : c.present];
      },
      async () => {
        await nextTick();
        const c = r.value;
        if (!c)
          return;
        p.value = p.value || {
          transitionDuration: c.style.transitionDuration,
          animationName: c.style.animationName
        }, c.style.transitionDuration = "0s", c.style.animationName = "none";
        const f = c.getBoundingClientRect();
        i.value = f.height, l.value = f.width, d.value || (c.style.transitionDuration = p.value.transitionDuration, c.style.animationName = p.value.animationName);
      },
      {
        immediate: true
      }
    ), onMounted(() => {
      requestAnimationFrame(() => {
        d.value = false;
      });
    }), (c, f) => (openBlock(), createBlock(unref(ae), {
      ref_key: "presentRef",
      ref: a,
      present: c.forceMount || unref(e).open.value,
      "force-mount": true
    }, {
      default: withCtx(() => {
        var v, y;
        return [
          createVNode(unref(D), mergeProps(c.$attrs, {
            id: unref(e).contentId,
            ref: unref(s),
            "as-child": t.asChild,
            as: c.as,
            "data-state": unref(e).open.value ? "open" : "closed",
            "data-disabled": (v = unref(e).disabled) != null && v.value ? "" : void 0,
            hidden: !((y = a.value) != null && y.present),
            style: {
              "--radix-collapsible-content-height": `${i.value}px`,
              "--radix-collapsible-content-width": `${l.value}px`
            }
          }), {
            default: withCtx(() => {
              var C;
              return [
                (C = a.value) != null && C.present ? renderSlot(c.$slots, "default", { key: 0 }) : createCommentVNode("", true)
              ];
            }),
            _: 3
          }, 16, ["id", "as-child", "as", "data-state", "data-disabled", "hidden", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
});
function Os(o2, t) {
  if (o2 === "single") {
    if (Array.isArray(t)) {
      console.error(`Invalid prop \`value\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`value\` prop must be:
  - a string
  - \`undefined\`

If you want to use multiple values, use the \`AccordionRoot\` with type \`multiple\`.

Defaulting to \`undefined\`.`);
      return;
    }
  } else if (o2 === "multiple" && (typeof t == "string" || typeof t > "u"))
    return console.error(`Invalid prop \`value\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`value\` prop must be:
- an array of strings
- empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`), [];
  return t;
}
function Is({ type: o2, defaultValue: t }) {
  if (o2 === "multiple")
    return Array.isArray(t) ? t : t === void 0 ? [] : (console.error(
      `Invalid prop \`defaultValue\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`multiple\`. The \`defaultValue\` prop must be:
  - an array of strings
  - empty array (\`[]\`)

If you want to use just one value, use the \`AccordionRoot\` with type \`single\`.

Defaulting to empty array (\`[]\`).`
    ), []);
  if (o2 === "single") {
    if (typeof t == "string")
      return t;
    if (t === void 0)
      return;
    console.error(
      `Invalid prop \`defaultValue\` of value \`${t}\` supplied to \`AccordionRoot\`, which type is \`single\`. The \`defaultValue\` prop must be:
  - a string
  - \`undefined\`

Defaulting to \`undefined\`.`
    );
    return;
  }
}
function An(o2, t) {
  const e = X(o2, "modelValue", t, {
    defaultValue: Is(o2),
    passive: o2.modelValue === void 0
  });
  watch(
    () => [o2.type, o2.modelValue],
    () => {
      const s = Os(o2.type, e.value);
      e.value !== s && (e.value = s);
    },
    { immediate: true }
  );
  function a(s) {
    if (o2.type === "single")
      e.value = s === e.value ? void 0 : s;
    else {
      const r = e.value || [];
      if (r.includes(s)) {
        const l = r.findIndex((i) => i === s);
        r.splice(l, 1);
      } else
        r.push(s);
      e.value = r, t("update:modelValue", e.value);
    }
  }
  return {
    modelValue: e,
    changeModelValue: a
  };
}
const [Ot, As] = H("AccordionRoot"), eu = /* @__PURE__ */ defineComponent({
  __name: "AccordionRoot",
  props: {
    type: {},
    modelValue: {},
    defaultValue: {},
    collapsible: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    dir: {},
    orientation: { default: "vertical" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { dir: s, disabled: r } = toRefs(e), l = ue(s), { modelValue: i, changeModelValue: u } = An(e, a), { forwardRef: d, currentElement: p } = $();
    return As({
      disabled: r,
      direction: l,
      orientation: e.orientation,
      parentElement: p,
      isSingle: computed(() => e.type === "single"),
      collapsible: e.collapsible,
      modelValue: i,
      changeModelValue: u
    }), (c, f) => (openBlock(), createBlock(unref(D), {
      ref: unref(d),
      "as-child": c.asChild,
      as: c.as
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default", { modelValue: unref(i) })
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), [Co, Rs] = H("AccordionItem"), tu = /* @__PURE__ */ defineComponent({
  __name: "AccordionItem",
  props: {
    disabled: { type: Boolean },
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2, { expose: t }) {
    const e = o2, a = Ot(), s = computed(
      () => a.isSingle.value ? e.value === a.modelValue.value : Array.isArray(a.modelValue.value) && a.modelValue.value.includes(e.value)
    ), r = computed(() => a.disabled.value || e.disabled || a.isSingle.value && s.value && !a.collapsible), l = computed(() => r.value ? "" : void 0), i = computed(
      () => s.value ? "open" : "closed"
      /* Closed */
    );
    t({ open: s, dataDisabled: l });
    const { currentRef: u, currentElement: d } = $();
    Rs({
      open: s,
      dataState: i,
      disabled: r,
      dataDisabled: l,
      triggerId: ee(),
      currentRef: u,
      currentElement: d,
      value: computed(() => e.value)
    });
    function p(c) {
      Ye(
        c,
        d.value,
        a.parentElement.value,
        {
          arrowKeyOptions: a.orientation,
          dir: a.direction.value,
          focus: true
        }
      );
    }
    return (c, f) => (openBlock(), createBlock(unref(Bs), {
      "data-orientation": unref(a).orientation,
      "data-disabled": l.value,
      "data-state": i.value,
      disabled: r.value,
      open: s.value,
      "as-child": e.asChild,
      onKeydown: withKeys(p, ["up", "down", "left", "right", "home", "end"])
    }, {
      default: withCtx(() => [
        renderSlot(c.$slots, "default", { open: s.value })
      ]),
      _: 3
    }, 8, ["data-orientation", "data-disabled", "data-state", "disabled", "open", "as-child"]));
  }
}), ou = /* @__PURE__ */ defineComponent({
  __name: "AccordionContent",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = Ot(), a = Co();
    return $(), (s, r) => (openBlock(), createBlock(unref(Ds), {
      role: "region",
      open: unref(a).open.value,
      hidden: !unref(a).open.value,
      "as-child": t.asChild,
      "aria-labelledby": unref(a).triggerId,
      "data-state": unref(a).dataState.value,
      "data-disabled": unref(a).dataDisabled.value,
      "data-orientation": unref(e).orientation,
      style: { "--radix-accordion-content-width": "var(--radix-collapsible-content-width)", "--radix-accordion-content-height": "var(--radix-collapsible-content-height)" }
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "hidden", "as-child", "aria-labelledby", "data-state", "data-disabled", "data-orientation"]));
  }
}), nu = /* @__PURE__ */ defineComponent({
  __name: "AccordionHeader",
  props: {
    asChild: { type: Boolean },
    as: { default: "h3" }
  },
  setup(o2) {
    const t = o2, e = Ot(), a = Co();
    return $(), (s, r) => (openBlock(), createBlock(unref(D), {
      as: t.as,
      "as-child": t.asChild,
      "data-orientation": unref(e).orientation,
      "data-state": unref(a).dataState.value,
      "data-disabled": unref(a).dataDisabled.value
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
  }
}), au = /* @__PURE__ */ defineComponent({
  __name: "AccordionTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = Ot(), a = Co();
    function s() {
      a.disabled.value || e.changeModelValue(a.value.value);
    }
    return (r, l) => (openBlock(), createBlock(unref(Ss), {
      id: unref(a).triggerId,
      ref: unref(a).currentRef,
      "data-radix-vue-collection-item": "",
      as: t.as,
      "as-child": t.asChild,
      "aria-disabled": unref(a).disabled.value || void 0,
      "aria-expanded": unref(a).open.value || false,
      "data-disabled": unref(a).dataDisabled.value,
      "data-orientation": unref(e).orientation,
      "data-state": unref(a).dataState.value,
      disabled: unref(a).disabled.value,
      onClick: s
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "as", "as-child", "aria-disabled", "aria-expanded", "data-disabled", "data-orientation", "data-state", "disabled"]));
  }
}), [ge, Ms] = H("DialogRoot"), ks = /* @__PURE__ */ defineComponent({
  __name: "DialogRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean, default: false },
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, s = X(e, "open", t, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = ref(), l = ref(), { modal: i } = toRefs(e);
    return Ms({
      open: s,
      modal: i,
      openModal: () => {
        s.value = true;
      },
      onOpenChange: (u) => {
        s.value = u;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      contentId: ee(),
      titleId: ee(),
      descriptionId: ee(),
      triggerElement: r,
      contentElement: l
    }), (u, d) => renderSlot(u.$slots, "default");
  }
}), Vs = /* @__PURE__ */ defineComponent({
  __name: "DialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, e = ge(), { forwardRef: a, currentElement: s } = $();
    return onMounted(() => {
      e.triggerElement = s;
    }), (r, l) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      ref: unref(a),
      type: r.as === "button" ? "button" : void 0,
      "aria-haspopup": "dialog",
      "aria-expanded": unref(e).open.value || false,
      "aria-controls": unref(e).contentId,
      "data-state": unref(e).open.value ? "open" : "closed",
      onClick: unref(e).onOpenToggle
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "onClick"]));
  }
}), Te = /* @__PURE__ */ defineComponent({
  __name: "Teleport",
  props: {
    to: { default: "body" },
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = Tt();
    return (e, a) => unref(t) || e.forceMount ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: e.to,
      disabled: e.disabled
    }, [
      renderSlot(e.$slots, "default")
    ], 8, ["to", "disabled"])) : createCommentVNode("", true);
  }
}), su = /* @__PURE__ */ defineComponent({
  __name: "DialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Te), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fs = "dismissableLayer.pointerDownOutside", Ls = "dismissableLayer.focusOutside";
function Rn(o2, t) {
  const e = t.closest(
    "[data-dismissable-layer]"
  ), a = o2.querySelector(
    "[data-dismissable-layer]"
  ), s = Array.from(
    o2.ownerDocument.querySelectorAll("[data-dismissable-layer]")
  );
  return !!(e && a === e || s.indexOf(a) < s.indexOf(e));
}
function Ks(o2, t) {
  var r;
  const e = ((r = t == null ? void 0 : t.value) == null ? void 0 : r.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = ref(false), s = ref(() => {
  });
  return watchEffect((l) => {
    if (!_e)
      return;
    const i = async (d) => {
      if (t != null && t.value) {
        if (Rn(t.value, d.target)) {
          a.value = false;
          return;
        }
        if (d.target && !a.value) {
          let p = function() {
            po(
              Fs,
              o2,
              c
            );
          };
          const c = { originalEvent: d };
          d.pointerType === "touch" ? (e.removeEventListener("click", s.value), s.value = p, e.addEventListener("click", s.value, {
            once: true
          })) : p();
        } else
          e.removeEventListener("click", s.value);
        a.value = false;
      }
    }, u = window.setTimeout(() => {
      e.addEventListener("pointerdown", i);
    }, 0);
    l(() => {
      window.clearTimeout(u), e.removeEventListener("pointerdown", i), e.removeEventListener("click", s.value);
    });
  }), {
    onPointerDownCapture: () => a.value = true
  };
}
function Ns(o2, t) {
  var s;
  const e = ((s = t == null ? void 0 : t.value) == null ? void 0 : s.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), a = ref(false);
  return watchEffect((r) => {
    if (!_e)
      return;
    const l = async (i) => {
      t != null && t.value && (await nextTick(), !Rn(t.value, i.target) && i.target && !a.value && po(
        Ls,
        o2,
        { originalEvent: i }
      ));
    };
    e.addEventListener("focusin", l), r(() => e.removeEventListener("focusin", l));
  }), {
    onFocusCapture: () => a.value = true,
    onBlurCapture: () => a.value = false
  };
}
const he = reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), De = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "dismiss"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { forwardRef: s, currentElement: r } = $(), l = computed(
      () => {
        var y;
        return ((y = r.value) == null ? void 0 : y.ownerDocument) ?? globalThis.document;
      }
    ), i = computed(() => he.layersRoot), u = computed(() => r.value ? Array.from(i.value).indexOf(r.value) : -1), d = computed(() => he.layersWithOutsidePointerEventsDisabled.size > 0), p = computed(() => {
      const y = Array.from(i.value), [C] = [...he.layersWithOutsidePointerEventsDisabled].slice(-1), E = y.indexOf(C);
      return u.value >= E;
    }), c = Ks(async (y) => {
      const C = [...he.branches].some(
        (E) => E.contains(y.target)
      );
      !p.value || C || (a("pointerDownOutside", y), a("interactOutside", y), await nextTick(), y.defaultPrevented || a("dismiss"));
    }, r), f = Ns((y) => {
      [...he.branches].some(
        (E) => E.contains(y.target)
      ) || (a("focusOutside", y), a("interactOutside", y), y.defaultPrevented || a("dismiss"));
    }, r);
    mo("Escape", (y) => {
      u.value === i.value.size - 1 && (a("escapeKeyDown", y), y.defaultPrevented || a("dismiss"));
    });
    let v;
    return watchEffect((y) => {
      r.value && (e.disableOutsidePointerEvents && (he.layersWithOutsidePointerEventsDisabled.size === 0 && (v = l.value.body.style.pointerEvents, l.value.body.style.pointerEvents = "none"), he.layersWithOutsidePointerEventsDisabled.add(r.value)), i.value.add(r.value), y(() => {
        e.disableOutsidePointerEvents && he.layersWithOutsidePointerEventsDisabled.size === 1 && (l.value.body.style.pointerEvents = v);
      }));
    }), watchEffect((y) => {
      y(() => {
        r.value && (i.value.delete(r.value), he.layersWithOutsidePointerEventsDisabled.delete(r.value));
      });
    }), (y, C) => (openBlock(), createBlock(unref(D), {
      ref: unref(s),
      "as-child": y.asChild,
      as: y.as,
      "data-dismissable-layer": "",
      style: normalizeStyle({
        pointerEvents: d.value ? p.value ? "auto" : "none" : void 0
      }),
      onFocusCapture: unref(f).onFocusCapture,
      onBlurCapture: unref(f).onBlurCapture,
      onPointerdownCapture: unref(c).onPointerDownCapture
    }, {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "style", "onFocusCapture", "onBlurCapture", "onPointerdownCapture"]));
  }
}), Hs = /* @__PURE__ */ defineComponent({
  __name: "DismissableLayerBranch",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { forwardRef: e, currentElement: a } = $();
    return onMounted(() => {
      he.branches.add(a.value);
    }), onUnmounted(() => {
      he.branches.delete(a.value);
    }), (s, r) => (openBlock(), createBlock(unref(D), mergeProps({ ref: unref(e) }, t), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zt = "focusScope.autoFocusOnMount", Qt = "focusScope.autoFocusOnUnmount", an = { bubbles: false, cancelable: true };
function xt(o2, { select: t = false } = {}) {
  const e = document.activeElement;
  for (const a of o2)
    if (Pe(a, { select: t }), document.activeElement !== e)
      return true;
}
function js(o2) {
  const t = wo(o2), e = sn(t, o2), a = sn(t.reverse(), o2);
  return [e, a];
}
function wo(o2) {
  const t = [], e = document.createTreeWalker(o2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const s = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || s ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function sn(o2, t) {
  for (const e of o2)
    if (!Ws(e, { upTo: t }))
      return e;
}
function Ws(o2, { upTo: t }) {
  if (getComputedStyle(o2).visibility === "hidden")
    return true;
  for (; o2; ) {
    if (t !== void 0 && o2 === t)
      return false;
    if (getComputedStyle(o2).display === "none")
      return true;
    o2 = o2.parentElement;
  }
  return false;
}
function zs(o2) {
  return o2 instanceof HTMLInputElement && "select" in o2;
}
function Pe(o2, { select: t = false } = {}) {
  if (o2 && o2.focus) {
    const e = document.activeElement;
    o2.focus({ preventScroll: true }), o2 !== e && zs(o2) && t && o2.select();
  }
}
const Us = En(() => ref([]));
function qs() {
  const o2 = Us();
  return {
    add(t) {
      const e = o2.value[0];
      t !== e && (e == null || e.pause()), o2.value = rn(o2.value, t), o2.value.unshift(t);
    },
    remove(t) {
      var e;
      o2.value = rn(o2.value, t), (e = o2.value[0]) == null || e.resume();
    }
  };
}
function rn(o2, t) {
  const e = [...o2], a = e.indexOf(t);
  return a !== -1 && e.splice(a, 1), e;
}
function Gs(o2) {
  return o2.filter((t) => t.tagName !== "A");
}
const It = /* @__PURE__ */ defineComponent({
  __name: "FocusScope",
  props: {
    loop: { type: Boolean, default: false },
    trapped: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { currentRef: s, currentElement: r } = $(), l = ref(null), i = qs(), u = reactive({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    });
    watchEffect((p) => {
      if (!_e)
        return;
      const c = r.value;
      if (!e.trapped)
        return;
      function f(E) {
        if (u.paused || !c)
          return;
        const _ = E.target;
        c.contains(_) ? l.value = _ : Pe(l.value, { select: true });
      }
      function v(E) {
        if (u.paused || !c)
          return;
        const _ = E.relatedTarget;
        _ !== null && (c.contains(_) || Pe(l.value, { select: true }));
      }
      function y(E) {
        c.contains(l.value) || Pe(c);
      }
      document.addEventListener("focusin", f), document.addEventListener("focusout", v);
      const C = new MutationObserver(y);
      c && C.observe(c, { childList: true, subtree: true }), p(() => {
        document.removeEventListener("focusin", f), document.removeEventListener("focusout", v), C.disconnect();
      });
    }), watchEffect(async (p) => {
      const c = r.value;
      if (await nextTick(), !c)
        return;
      i.add(u);
      const f = document.activeElement;
      if (!c.contains(f)) {
        const y = new CustomEvent(Zt, an);
        c.addEventListener(
          Zt,
          (C) => a("mountAutoFocus", C)
        ), c.dispatchEvent(y), y.defaultPrevented || (xt(Gs(wo(c)), {
          select: true
        }), document.activeElement === f && Pe(c));
      }
      p(() => {
        c.removeEventListener(
          Zt,
          (E) => a("mountAutoFocus", E)
        );
        const y = new CustomEvent(Qt, an), C = (E) => {
          a("unmountAutoFocus", E);
        };
        c.addEventListener(Qt, C), c.dispatchEvent(y), setTimeout(() => {
          y.defaultPrevented || Pe(f ?? document.body, { select: true }), c.removeEventListener(Qt, C), i.remove(u);
        }, 0);
      });
    });
    function d(p) {
      if (!e.loop && !e.trapped || u.paused)
        return;
      const c = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, f = document.activeElement;
      if (c && f) {
        const v = p.currentTarget, [y, C] = js(v);
        y && C ? !p.shiftKey && f === C ? (p.preventDefault(), e.loop && Pe(y, { select: true })) : p.shiftKey && f === y && (p.preventDefault(), e.loop && Pe(C, { select: true })) : f === v && p.preventDefault();
      }
    }
    return (p, c) => (openBlock(), createBlock(unref(D), {
      ref_key: "currentRef",
      ref: s,
      tabindex: "-1",
      "as-child": p.asChild,
      as: p.as,
      onKeydown: d
    }, {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Ys = "menu.itemSelect", to = ["Enter", " "], Xs = ["ArrowDown", "PageUp", "Home"], Mn = ["ArrowUp", "PageDown", "End"], Js = [...Xs, ...Mn], Zs = {
  ltr: [...to, "ArrowRight"],
  rtl: [...to, "ArrowLeft"]
}, Qs = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
};
function _o(o2) {
  return o2 ? "open" : "closed";
}
function Pt(o2) {
  return o2 === "indeterminate";
}
function $o(o2) {
  return Pt(o2) ? "indeterminate" : o2 ? "checked" : "unchecked";
}
function oo(o2) {
  const t = document.activeElement;
  for (const e of o2)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function er(o2, t) {
  const { x: e, y: a } = o2;
  let s = false;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, p = t[l].y;
    u > a != p > a && e < (d - i) * (a - u) / (p - u) + i && (s = !s);
  }
  return s;
}
function tr(o2, t) {
  if (!t)
    return false;
  const e = { x: o2.clientX, y: o2.clientY };
  return er(e, t);
}
function st(o2) {
  return o2.pointerType === "mouse";
}
function or() {
  const o2 = "DialogContent", t = "DialogTitle", e = ge(), a = `Warning: \`${o2}\` requires a \`${t}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/dialog.html#title;`, s = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${o2}.`;
  onMounted(() => {
    var i;
    document.getElementById(e.titleId) || console.warn(a);
    const l = (i = e.contentElement.value) == null ? void 0 : i.getAttribute("aria-describedby");
    e.descriptionId && l && (document.getElementById(e.descriptionId) || console.warn(s));
  });
}
const kn = /* @__PURE__ */ defineComponent({
  __name: "DialogContentImpl",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = ge(), { forwardRef: r, currentElement: l } = $();
    return onMounted(() => {
      s.contentElement = l;
    }), process.env.NODE_ENV !== "production" && or(), (i, u) => (openBlock(), createBlock(unref(It), {
      "as-child": "",
      loop: "",
      trapped: e.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: withCtx(() => [
        createVNode(unref(De), mergeProps({
          id: unref(s).contentId,
          ref: unref(r),
          as: i.as,
          "as-child": i.asChild,
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          role: "dialog",
          "aria-describedby": unref(s).descriptionId,
          "aria-labelledby": unref(s).titleId,
          "data-state": unref(_o)(unref(s).open.value)
        }, i.$attrs, {
          onDismiss: u[0] || (u[0] = (d) => unref(s).onOpenChange(false)),
          onEscapeKeyDown: u[1] || (u[1] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[2] || (u[2] = (d) => a("focusOutside", d)),
          onInteractOutside: u[3] || (u[3] = (d) => a("interactOutside", d)),
          onPointerDownOutside: u[4] || (u[4] = (d) => a("pointerDownOutside", d))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "as", "as-child", "disable-outside-pointer-events", "aria-describedby", "aria-labelledby", "data-state"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), nr = /* @__PURE__ */ defineComponent({
  __name: "DialogContentModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = ge(), r = de(a), { forwardRef: l, currentElement: i } = $();
    return pt(i), (u, d) => (openBlock(), createBlock(kn, mergeProps({ ...e, ...unref(r) }, {
      ref: unref(l),
      "trap-focus": unref(s).open.value,
      "disable-outside-pointer-events": true,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        a("closeAutoFocus", p), p.defaultPrevented || (p.preventDefault(), (c = unref(s).triggerElement.value) == null || c.focus());
      }),
      onPointerDownOutside: d[1] || (d[1] = (p) => {
        const c = p.detail.originalEvent, f = c.button === 0 && c.ctrlKey === true;
        (c.button === 2 || f) && p.preventDefault();
      }),
      onFocusOutside: d[2] || (d[2] = (p) => {
        p.preventDefault();
      }),
      onOpenAutoFocus: d[3] || (d[3] = (p) => a("openAutoFocus", p))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), ar = /* @__PURE__ */ defineComponent({
  __name: "DialogContentNonModal",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = de(a);
    $();
    const r = ge(), l = ref(false), i = ref(false);
    return (u, d) => (openBlock(), createBlock(kn, mergeProps({ ...e, ...unref(s) }, {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        a("closeAutoFocus", p), p.defaultPrevented || (l.value || (c = unref(r).triggerElement.value) == null || c.focus(), p.preventDefault()), l.value = false, i.value = false;
      }),
      onInteractOutside: d[1] || (d[1] = (p) => {
        var v;
        p.defaultPrevented || (l.value = true, p.detail.originalEvent.type === "pointerdown" && (i.value = true));
        const c = p.target;
        ((v = unref(r).triggerElement.value) == null ? void 0 : v.contains(c)) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && i.value && p.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sr = /* @__PURE__ */ defineComponent({
  __name: "DialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = ge(), r = de(a), { forwardRef: l } = $();
    return (i, u) => (openBlock(), createBlock(unref(ae), {
      present: i.forceMount || unref(s).open.value
    }, {
      default: withCtx(() => [
        unref(s).modal.value ? (openBlock(), createBlock(nr, mergeProps({
          key: 0,
          ref: unref(l)
        }, { ...e, ...unref(r), ...i.$attrs }, {
          onOpenAutoFocus: u[0] || (u[0] = (d) => a("openAutoFocus", d))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(ar, mergeProps({
          key: 1,
          ref: unref(l)
        }, { ...e, ...unref(r), ...i.$attrs }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), rr = /* @__PURE__ */ defineComponent({
  __name: "DialogOverlayImpl",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = ge();
    return ct(true), $(), (e, a) => (openBlock(), createBlock(unref(D), {
      as: e.as,
      "as-child": e.asChild,
      "data-state": unref(t).open.value ? "open" : "closed",
      style: { "pointer-events": "auto" }
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-state"]));
  }
}), lr = /* @__PURE__ */ defineComponent({
  __name: "DialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = ge(), { forwardRef: e } = $();
    return (a, s) => {
      var r;
      return (r = unref(t)) != null && r.modal.value ? (openBlock(), createBlock(unref(ae), {
        key: 0,
        present: a.forceMount || unref(t).open.value
      }, {
        default: withCtx(() => [
          createVNode(rr, mergeProps(a.$attrs, {
            ref: unref(e),
            as: a.as,
            "as-child": a.asChild
          }), {
            default: withCtx(() => [
              renderSlot(a.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child"])
        ]),
        _: 3
      }, 8, ["present"])) : createCommentVNode("", true);
    };
  }
}), Vn = /* @__PURE__ */ defineComponent({
  __name: "DialogClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = ge();
    return (a, s) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      type: a.as === "button" ? "button" : void 0,
      onClick: s[0] || (s[0] = (r) => unref(e).onOpenChange(false))
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["type"]));
  }
}), ir = /* @__PURE__ */ defineComponent({
  __name: "DialogTitle",
  props: {
    asChild: { type: Boolean },
    as: { default: "h2" }
  },
  setup(o2) {
    const t = o2, e = ge();
    return $(), (a, s) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      id: unref(e).titleId
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ur = /* @__PURE__ */ defineComponent({
  __name: "DialogDescription",
  props: {
    asChild: { type: Boolean },
    as: { default: "p" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = ge();
    return (a, s) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      id: unref(e).descriptionId
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), ru = /* @__PURE__ */ defineComponent({
  __name: "AlertDialogRoot",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t);
    return $(), (r, l) => (openBlock(), createBlock(unref(ks), mergeProps(unref(s), { modal: true }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lu = /* @__PURE__ */ defineComponent({
  __name: "AlertDialogTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Vs), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), iu = /* @__PURE__ */ defineComponent({
  __name: "AlertDialogPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Te), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [dr, cr] = H("AlertDialogContent"), uu = /* @__PURE__ */ defineComponent({
  __name: "AlertDialogContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    $();
    const r = ref();
    return cr({
      onCancelElementChange: (l) => {
        r.value = l;
      }
    }), (l, i) => (openBlock(), createBlock(unref(sr), mergeProps({ ...e, ...unref(s) }, {
      role: "alertdialog",
      onPointerDownOutside: i[0] || (i[0] = withModifiers(() => {
      }, ["prevent"])),
      onInteractOutside: i[1] || (i[1] = withModifiers(() => {
      }, ["prevent"])),
      onOpenAutoFocus: i[2] || (i[2] = () => {
        nextTick(() => {
          var u;
          (u = r.value) == null || u.focus({
            preventScroll: true
          });
        });
      })
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), du = /* @__PURE__ */ defineComponent({
  __name: "AlertDialogOverlay",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(lr), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cu = /* @__PURE__ */ defineComponent({
  __name: "AlertDialogCancel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = dr(), { forwardRef: a, currentElement: s } = $();
    return onMounted(() => {
      e.onCancelElementChange(s.value);
    }), (r, l) => (openBlock(), createBlock(unref(Vn), mergeProps(t, { ref: unref(a) }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), pu = /* @__PURE__ */ defineComponent({
  __name: "AlertDialogTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(ir), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fu = /* @__PURE__ */ defineComponent({
  __name: "AlertDialogDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(ur), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vu = /* @__PURE__ */ defineComponent({
  __name: "AlertDialogAction",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Vn), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mu = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "AspectRatio",
  props: {
    ratio: { default: 1 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { forwardRef: e } = $(), a = computed(() => 1 / t.ratio * 100);
    return (s, r) => (openBlock(), createElementBlock("div", {
      style: normalizeStyle(`position: relative; width: 100%; padding-bottom: ${a.value}%`),
      "data-radix-aspect-ratio-wrapper": ""
    }, [
      createVNode(unref(D), mergeProps({
        ref: unref(e),
        "as-child": s.asChild,
        as: s.as,
        style: { position: "absolute", inset: "0px" }
      }, s.$attrs), {
        default: withCtx(() => [
          renderSlot(s.$slots, "default", { aspect: a.value })
        ]),
        _: 3
      }, 16, ["as-child", "as"])
    ], 4));
  }
}), [Fn, pr] = H("AvatarRoot"), hu = /* @__PURE__ */ defineComponent({
  __name: "AvatarRoot",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    return $(), pr({
      imageLoadingStatus: ref("loading")
    }), (t, e) => (openBlock(), createBlock(unref(D), {
      "as-child": t.asChild,
      as: t.as
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
});
function fr(o2) {
  const t = ref("idle"), e = ref(false), a = (s) => () => {
    e.value && (t.value = s);
  };
  return onMounted(() => {
    e.value = true, watch(o2, (s) => {
      if (!s)
        t.value = "error";
      else {
        const r = new window.Image();
        t.value = "loading", r.onload = a("loaded"), r.onerror = a("error"), r.src = s;
      }
    }, { immediate: true });
  }), onUnmounted(() => {
    e.value = false;
  }), t;
}
const gu = /* @__PURE__ */ defineComponent({
  __name: "AvatarImage",
  props: {
    src: {},
    asChild: { type: Boolean },
    as: { default: "img" }
  },
  emits: ["loadingStatusChange"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { src: s } = toRefs(e);
    $();
    const r = Fn(), l = fr(s);
    return watch(
      l,
      (i) => {
        a("loadingStatusChange", i), i !== "idle" && (r.imageLoadingStatus.value = i);
      },
      { immediate: true }
    ), (i, u) => unref(l) === "loaded" ? (openBlock(), createBlock(unref(D), {
      key: 0,
      role: "img",
      "as-child": i.asChild,
      as: i.as,
      src: unref(s)
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "src"])) : createCommentVNode("", true);
  }
}), yu = /* @__PURE__ */ defineComponent({
  __name: "AvatarFallback",
  props: {
    delayMs: { default: 0 },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = o2, e = Fn();
    $();
    const a = ref(false);
    let s;
    return watch(e.imageLoadingStatus, (r) => {
      r === "loading" && (a.value = false, t.delayMs ? s = setTimeout(() => {
        a.value = true, clearTimeout(s);
      }, t.delayMs) : a.value = true);
    }, { immediate: true }), (r, l) => a.value && unref(e).imageLoadingStatus.value !== "loaded" ? (openBlock(), createBlock(unref(D), {
      key: 0,
      "as-child": r.asChild,
      as: r.as
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"])) : createCommentVNode("", true);
  }
});
function xo(o2) {
  return o2 === "indeterminate";
}
function Ln(o2) {
  return xo(o2) ? "indeterminate" : o2 ? "checked" : "unchecked";
}
const vr = ["value", "checked", "name", "disabled", "required"], [mr, hr] = H("CheckboxRoot"), bu = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "CheckboxRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: [Boolean, String], default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    value: { default: "on" },
    id: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { disabled: s } = toRefs(e), r = X(e, "checked", a, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    }), { forwardRef: l, currentElement: i } = $(), u = Ke(i), d = computed(() => {
      var p;
      return e.id && i.value ? (p = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : p.innerText : void 0;
    });
    return hr({
      disabled: s,
      state: r
    }), (p, c) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(D), mergeProps(p.$attrs, {
        id: p.id,
        ref: unref(l),
        role: "checkbox",
        "as-child": e.asChild,
        as: p.as,
        type: p.as === "button" ? "button" : void 0,
        "aria-checked": unref(xo)(unref(r)) ? "mixed" : unref(r),
        "aria-required": false,
        "aria-label": p.$attrs["aria-label"] || d.value,
        "data-state": unref(Ln)(unref(r)),
        "data-disabled": unref(s) ? "" : void 0,
        disabled: unref(s),
        onKeydown: withKeys(withModifiers(() => {
        }, ["prevent"]), ["enter"]),
        onClick: c[0] || (c[0] = (f) => r.value = !unref(r))
      }), {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "as-child", "as", "type", "aria-checked", "aria-label", "data-state", "data-disabled", "disabled", "onKeydown"]),
      unref(u) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "checkbox",
        tabindex: "-1",
        "aria-hidden": "",
        value: p.value,
        checked: !!unref(r),
        name: e.name,
        disabled: e.disabled,
        required: e.required,
        style: normalizeStyle({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, vr)) : createCommentVNode("", true)
    ], 64));
  }
}), Cu = /* @__PURE__ */ defineComponent({
  __name: "CheckboxIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const { forwardRef: t } = $(), e = mr();
    return (a, s) => (openBlock(), createBlock(unref(ae), {
      present: a.forceMount || unref(xo)(unref(e).state.value) || unref(e).state.value === true
    }, {
      default: withCtx(() => [
        createVNode(unref(D), mergeProps({
          ref: unref(t),
          "data-state": unref(Ln)(unref(e).state.value),
          "data-disabled": unref(e).disabled.value ? "" : void 0,
          style: { pointerEvents: "none" },
          "as-child": a.asChild,
          as: a.as
        }, a.$attrs), {
          default: withCtx(() => [
            renderSlot(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Kn, gr] = H("PopperRoot"), He = /* @__PURE__ */ defineComponent({
  __name: "PopperRoot",
  setup(o2) {
    const t = ref();
    return gr({
      anchor: t,
      onAnchorChange: (e) => t.value = e
    }), (e, a) => renderSlot(e.$slots, "default");
  }
}), je = /* @__PURE__ */ defineComponent({
  __name: "PopperAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { forwardRef: e, currentElement: a } = $(), s = Kn();
    return watch(a, () => {
      s.onAnchorChange(t.element ?? a.value);
    }), (r, l) => (openBlock(), createBlock(unref(D), {
      ref: unref(e),
      as: r.as,
      "as-child": r.asChild
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
});
function yr(o2) {
  return o2 !== null;
}
function br(o2) {
  return {
    name: "transformOrigin",
    options: o2,
    fn(t) {
      var E, _, x;
      const { placement: e, rects: a, middlewareData: s } = t, l = ((E = s.arrow) == null ? void 0 : E.centerOffset) !== 0, i = l ? 0 : o2.arrowWidth, u = l ? 0 : o2.arrowHeight, [d, p] = no(e), c = { start: "0%", center: "50%", end: "100%" }[p], f = (((_ = s.arrow) == null ? void 0 : _.x) ?? 0) + i / 2, v = (((x = s.arrow) == null ? void 0 : x.y) ?? 0) + u / 2;
      let y = "", C = "";
      return d === "bottom" ? (y = l ? c : `${f}px`, C = `${-u}px`) : d === "top" ? (y = l ? c : `${f}px`, C = `${a.floating.height + u}px`) : d === "right" ? (y = `${-u}px`, C = l ? c : `${v}px`) : d === "left" && (y = `${a.floating.width + u}px`, C = l ? c : `${v}px`), { data: { x: y, y: C } };
    }
  };
}
function no(o2) {
  const [t, e = "center"] = o2.split("-");
  return [t, e];
}
const Nn = {
  side: "bottom",
  sideOffset: 0,
  align: "center",
  alignOffset: 0,
  arrowPadding: 0,
  avoidCollisions: true,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: false,
  updatePositionStrategy: "optimized",
  prioritizePosition: false
}, [Cr, wr] = H("PopperContent"), Fe = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperContent",
  props: /* @__PURE__ */ mergeDefaults({
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Nn
  }),
  emits: ["placed"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = Kn(), { forwardRef: r, currentElement: l } = $(), i = ref(), u = ref(), { width: d, height: p } = Tn(u), c = computed(
      () => e.side + (e.align !== "center" ? `-${e.align}` : "")
    ), f = computed(() => typeof e.collisionPadding == "number" ? e.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...e.collisionPadding }), v = computed(() => Array.isArray(e.collisionBoundary) ? e.collisionBoundary : [e.collisionBoundary]), y = computed(() => ({
      padding: f.value,
      boundary: v.value.filter(yr),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: v.value.length > 0
    })), C = Ga(() => [
      offset({
        mainAxis: e.sideOffset + p.value,
        alignmentAxis: e.alignOffset
      }),
      e.prioritizePosition && e.avoidCollisions && flip({
        ...y.value
      }),
      e.avoidCollisions && shift({
        mainAxis: true,
        crossAxis: !!e.prioritizePosition,
        limiter: e.sticky === "partial" ? limitShift() : void 0,
        ...y.value
      }),
      !e.prioritizePosition && e.avoidCollisions && flip({
        ...y.value
      }),
      size({
        ...y.value,
        apply: ({ elements: I, rects: L, availableWidth: W, availableHeight: F }) => {
          const { width: q, height: oe } = L.reference, ce = I.floating.style;
          Object.assign(I.floating.style, {
            maxWidth: `${W}px`,
            maxHeight: `${F}px`
          }), ce.setProperty(
            "--radix-popper-available-width",
            `${W}px`
          ), ce.setProperty(
            "--radix-popper-available-height",
            `${F}px`
          ), ce.setProperty(
            "--radix-popper-anchor-width",
            `${q}px`
          ), ce.setProperty(
            "--radix-popper-anchor-height",
            `${oe}px`
          );
        }
      }),
      u.value && arrow({ element: u.value, padding: e.arrowPadding }),
      br({
        arrowWidth: d.value,
        arrowHeight: p.value
      }),
      e.hideWhenDetached && hide({ strategy: "referenceHidden", ...y.value })
    ]), { floatingStyles: E, placement: _, isPositioned: x, middlewareData: B } = useFloating(
      s.anchor,
      i,
      {
        strategy: "fixed",
        placement: c,
        whileElementsMounted: (...I) => autoUpdate(...I, {
          animationFrame: e.updatePositionStrategy === "always"
        }),
        middleware: C
      }
    ), O = computed(
      () => no(_.value)[0]
    ), A = computed(
      () => no(_.value)[1]
    );
    watchEffect(() => {
      x.value && a("placed");
    });
    const M = computed(
      () => {
        var I;
        return ((I = B.value.arrow) == null ? void 0 : I.centerOffset) !== 0;
      }
    ), R = ref("");
    watchEffect(() => {
      l.value && (R.value = window.getComputedStyle(l.value).zIndex);
    });
    const V = computed(() => {
      var I;
      return ((I = B.value.arrow) == null ? void 0 : I.x) ?? 0;
    }), j = computed(() => {
      var I;
      return ((I = B.value.arrow) == null ? void 0 : I.y) ?? 0;
    });
    return wr({
      placedSide: O,
      onArrowChange: (I) => u.value = I,
      arrowX: V,
      arrowY: j,
      shouldHideArrow: M
    }), (I, L) => {
      var W, F, q;
      return openBlock(), createElementBlock("div", {
        ref_key: "floatingRef",
        ref: i,
        "data-radix-popper-content-wrapper": "",
        style: normalizeStyle({
          ...unref(E),
          transform: unref(x) ? unref(E).transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: R.value,
          "--radix-popper-transform-origin": [
            (W = unref(B).transformOrigin) == null ? void 0 : W.x,
            (F = unref(B).transformOrigin) == null ? void 0 : F.y
          ].join(" ")
        })
      }, [
        createVNode(unref(D), mergeProps({ ref: unref(r) }, I.$attrs, {
          "as-child": e.asChild,
          as: I.as,
          "data-side": O.value,
          "data-align": A.value,
          style: {
            // if the PopperContent hasn't been placed yet (not all measurements done)
            // we prevent animations so that users's animation don't kick in too early referring wrong sides
            animation: unref(x) ? void 0 : "none",
            // hide the content if using the hide middleware and should be hidden
            opacity: (q = unref(B).hide) != null && q.referenceHidden ? 0 : void 0
          }
        }), {
          default: withCtx(() => [
            renderSlot(I.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-side", "data-align", "style"])
      ], 4);
    };
  }
}), _r = /* @__PURE__ */ createElementVNode("polygon", { points: "0,0 30,0 15,10" }, null, -1), $r = /* @__PURE__ */ defineComponent({
  __name: "Arrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      width: e.width,
      height: e.height,
      viewBox: e.asChild ? void 0 : "0 0 30 10",
      preserveAspectRatio: e.asChild ? void 0 : "none"
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default", {}, () => [
          _r
        ])
      ]),
      _: 3
    }, 16, ["width", "height", "viewBox", "preserveAspectRatio"]));
  }
}), xr = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Xe = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PopperArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(o2) {
    const { forwardRef: t } = $(), e = Cr(), a = computed(() => xr[e.placedSide.value]);
    return (s, r) => {
      var l, i, u, d;
      return openBlock(), createElementBlock("span", {
        ref: (p) => {
          unref(e).onArrowChange(p);
        },
        style: normalizeStyle({
          position: "absolute",
          left: (l = unref(e).arrowX) != null && l.value ? `${(i = unref(e).arrowX) == null ? void 0 : i.value}px` : void 0,
          top: (u = unref(e).arrowY) != null && u.value ? `${(d = unref(e).arrowY) == null ? void 0 : d.value}px` : void 0,
          [a.value]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[unref(e).placedSide.value],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[unref(e).placedSide.value],
          visibility: unref(e).shouldHideArrow.value ? "hidden" : void 0
        })
      }, [
        createVNode($r, mergeProps(s.$attrs, {
          ref: unref(t),
          style: {
            display: "block"
          },
          as: s.as,
          "as-child": s.asChild,
          width: s.width,
          height: s.height
        }), {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "width", "height"])
      ], 4);
    };
  }
}), Je = /* @__PURE__ */ defineComponent({
  __name: "VisuallyHidden",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    return $(), (t, e) => (openBlock(), createBlock(unref(D), {
      as: t.as,
      "as-child": t.asChild,
      style: normalizeStyle({
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: "1px",
        display: "inline-block",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal"
      })
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "style"]));
  }
}), Hn = /* @__PURE__ */ defineComponent({
  __name: "VisuallyHiddenInput",
  props: {
    name: {},
    value: {},
    required: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(o2) {
    const t = o2, e = computed(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" ? [{ name: t.name, value: t.value }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, s) => typeof a == "object" ? Object.entries(a).map(([r, l]) => ({ name: `[${s}][${t.name}][${r}]`, value: l })) : { name: `[${t.name}][${s}]`, value: a }) : typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, s]) => ({ name: `[${t.name}][${a}]`, value: s })) : []);
    return (a, s) => (openBlock(true), createElementBlock(Fragment, null, renderList(e.value, (r) => (openBlock(), createBlock(Je, {
      key: r.name,
      as: "input",
      type: "hidden",
      hidden: "",
      readonly: "",
      name: r.name,
      value: r.value,
      required: a.required,
      disabled: a.disabled
    }, null, 8, ["name", "value", "required", "disabled"]))), 128));
  }
});
function Er(o2) {
  return o2 && o2.__esModule && Object.prototype.hasOwnProperty.call(o2, "default") ? o2.default : o2;
}
var Pr = function o(t, e) {
  if (t === e)
    return true;
  if (t && e && typeof t == "object" && typeof e == "object") {
    if (t.constructor !== e.constructor)
      return false;
    var a, s, r;
    if (Array.isArray(t)) {
      if (a = t.length, a != e.length)
        return false;
      for (s = a; s-- !== 0; )
        if (!o(t[s], e[s]))
          return false;
      return true;
    }
    if (t.constructor === RegExp)
      return t.source === e.source && t.flags === e.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === e.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === e.toString();
    if (r = Object.keys(t), a = r.length, a !== Object.keys(e).length)
      return false;
    for (s = a; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, r[s]))
        return false;
    for (s = a; s-- !== 0; ) {
      var l = r[s];
      if (!o(t[l], e[l]))
        return false;
    }
    return true;
  }
  return t !== t && e !== e;
};
const nt = /* @__PURE__ */ Er(Pr), Br = "data-radix-vue-collection-item", [Eo, Sr] = H("CollectionProvider");
function Po(o2 = Br) {
  const t = ref(/* @__PURE__ */ new Map()), e = ref(), a = Sr({
    collectionRef: e,
    itemMap: t,
    attrName: o2
  }), { getItems: s } = jn(a), r = computed(() => Array.from(a.itemMap.value.values())), l = computed(() => a.itemMap.value.size);
  return { getItems: s, reactiveItems: r, itemMapSize: l };
}
const Bo = defineComponent({
  name: "CollectionSlot",
  setup(o2, { slots: t }) {
    const e = Eo(), { primitiveElement: a, currentElement: s } = On();
    return watch(s, () => {
      e.collectionRef.value = s.value;
    }), () => h(bo, { ref: a }, t);
  }
}), So = defineComponent({
  name: "CollectionItem",
  setup(o2, { slots: t, attrs: e }) {
    const a = Eo(), { primitiveElement: s, currentElement: r } = On(), l = getCurrentInstance();
    return watchEffect((i) => {
      var u;
      if (r.value) {
        const d = markRaw(r.value);
        a.itemMap.value.set(d, { ref: r.value, ...markRaw(((u = l == null ? void 0 : l.parent) == null ? void 0 : u.props) ?? {}) }), i(() => a.itemMap.value.delete(d));
      }
    }), () => h(bo, { ...e, [a.attrName]: "", ref: s }, t);
  }
});
function jn(o2) {
  const t = o2 ?? Eo();
  return { getItems: () => {
    const a = t.collectionRef.value;
    if (!a)
      return [];
    const s = Array.from(a.querySelectorAll(`[${t.attrName}]`));
    return Array.from(t.itemMap.value.values()).sort(
      (i, u) => s.indexOf(i.ref) - s.indexOf(u.ref)
    );
  } };
}
const [$e, Tr] = H("ComboboxRoot"), wu = /* @__PURE__ */ defineComponent({
  __name: "ComboboxRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    searchTerm: {},
    multiple: { type: Boolean },
    disabled: { type: Boolean },
    name: {},
    dir: {},
    filterFunction: {},
    displayValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:open", "update:searchTerm"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { multiple: s, disabled: r, dir: l } = toRefs(e), i = ue(l), u = X(e, "searchTerm", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: "",
      passive: e.searchTerm === void 0
    }), d = X(e, "modelValue", a, {
      // @ts-expect-error ignore the type error here
      defaultValue: e.defaultValue ?? s.value ? [] : void 0,
      passive: e.modelValue === void 0,
      deep: true
    }), p = X(e, "open", a, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), c = ref();
    async function f(F) {
      var q, oe;
      p.value = F, await nextTick(), F ? (d.value && (Array.isArray(d.value) && s.value ? c.value = (q = B().find((ce) => {
        var mt, ot;
        return ((ot = (mt = ce.ref) == null ? void 0 : mt.dataset) == null ? void 0 : ot.state) === "checked";
      })) == null ? void 0 : q.value : c.value = d.value), (oe = C.value) == null || oe.focus(), W()) : (y.value = false, V());
    }
    function v(F) {
      if (Array.isArray(d.value) && s.value) {
        const q = d.value.findIndex((oe) => nt(oe, F));
        q === -1 ? d.value.push(F) : d.value.splice(q, 1);
      } else
        d.value = F, f(false);
    }
    const y = ref(false), C = ref(), E = ref(), { forwardRef: _, currentElement: x } = $(), { getItems: B, reactiveItems: O, itemMapSize: A } = Po("data-radix-vue-combobox-item"), M = xn(() => A.value, () => B().map((F) => F.value)), R = computed(() => {
      if (y.value) {
        if (e.filterFunction)
          return e.filterFunction(M.value, u.value);
        if (typeof M.value[0] == "string")
          return M.value.filter((F) => {
            var q;
            return F.toLowerCase().includes((q = u.value) == null ? void 0 : q.toLowerCase());
          });
      }
      return M.value;
    });
    function V() {
      !s.value && d.value ? e.displayValue ? u.value = e.displayValue(d.value) : typeof d.value != "object" ? u.value = d.value.toString() : u.value = "" : u.value = "";
    }
    const j = computed(() => R.value.findIndex((F) => nt(F, c.value))), I = computed(() => {
      var F;
      return (F = O.value.find((q) => q.value === c.value)) == null ? void 0 : F.ref;
    });
    watch(d, async () => {
      await nextTick(), V();
    }, { immediate: true }), watch(() => R.value.length, async (F) => {
      await nextTick(), await nextTick(), F && j.value === -1 && (c.value = R.value[0]);
    });
    const L = Ke(x);
    function W() {
      I.value instanceof Element && I.value.scrollIntoView({ block: "nearest" });
    }
    return Tr({
      searchTerm: u,
      modelValue: d,
      // @ts-expect-error igoring
      onValueChange: v,
      isUserInputted: y,
      multiple: s,
      disabled: r,
      open: p,
      onOpenChange: f,
      filteredOptions: R,
      contentId: ee(),
      inputElement: C,
      onInputElementChange: (F) => C.value = F,
      onInputNavigation: async (F) => {
        const q = j.value;
        q === 0 && F === "up" || q === R.value.length - 1 && F === "down" || (q === -1 && R.value.length || F === "home" ? c.value = R.value[0] : F === "end" ? c.value = R.value[R.value.length - 1] : c.value = R.value[F === "up" ? q - 1 : q + 1], W());
      },
      onInputEnter: async () => {
        var F;
        R.value.length && c.value && I.value instanceof Element && ((F = I.value) == null || F.click());
      },
      selectedValue: c,
      onSelectedValueChange: (F) => c.value = F,
      parentElement: x,
      contentElement: E,
      onContentElementChange: (F) => E.value = F
    }), (F, q) => (openBlock(), createBlock(unref(He), null, {
      default: withCtx(() => [
        createVNode(unref(D), mergeProps({
          ref: unref(_),
          style: {
            pointerEvents: unref(p) ? "auto" : void 0
          },
          as: F.as,
          "as-child": F.asChild,
          dir: unref(i)
        }, F.$attrs), {
          default: withCtx(() => [
            renderSlot(F.$slots, "default", {
              open: unref(p),
              modelValue: unref(d)
            }),
            unref(L) && e.name ? (openBlock(), createBlock(unref(Hn), {
              key: 0,
              name: e.name,
              value: unref(d)
            }, null, 8, ["name", "value"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 16, ["style", "as", "as-child", "dir"])
      ]),
      _: 3
    }));
  }
}), _u = /* @__PURE__ */ defineComponent({
  __name: "ComboboxInput",
  props: {
    type: { default: "text" },
    disabled: { type: Boolean },
    autoFocus: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(o2) {
    const t = o2, e = $e(), { forwardRef: a, currentElement: s } = $();
    onMounted(() => {
      const d = s.value.nodeName === "INPUT" ? s.value : s.value.querySelector("input");
      d && (e.onInputElementChange(d), setTimeout(() => {
        t.autoFocus && (d == null || d.focus());
      }, 1));
    });
    const r = computed(() => t.disabled || e.disabled.value || false);
    function l(d) {
      e.open.value ? e.onInputNavigation(d.key === "ArrowUp" ? "up" : "down") : e.onOpenChange(true);
    }
    function i(d) {
      e.open.value && e.onInputNavigation(d.key === "Home" ? "home" : "end");
    }
    function u(d) {
      var p;
      e.searchTerm.value = (p = d.target) == null ? void 0 : p.value, e.open.value || e.onOpenChange(true), e.isUserInputted.value = true;
    }
    return (d, p) => (openBlock(), createBlock(unref(D), {
      ref: unref(a),
      as: d.as,
      "as-child": d.asChild,
      type: d.type,
      disabled: r.value,
      value: unref(e).searchTerm.value,
      "aria-expanded": unref(e).open.value,
      "aria-controls": unref(e).contentId,
      "aria-disabled": r.value ?? void 0,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "false",
      onInput: u,
      onKeydown: [
        withKeys(withModifiers(l, ["prevent"]), ["down", "up"]),
        withKeys(unref(e).onInputEnter, ["enter"]),
        withKeys(withModifiers(i, ["prevent"]), ["home", "end"])
      ]
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "type", "disabled", "value", "aria-expanded", "aria-controls", "aria-disabled", "onKeydown"]));
  }
}), $u = /* @__PURE__ */ defineComponent({
  __name: "ComboboxAnchor",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const { forwardRef: t } = $();
    return (e, a) => (openBlock(), createBlock(unref(je), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(D), mergeProps({
          ref: unref(t),
          "as-child": e.asChild,
          as: e.as
        }, e.$attrs), {
          default: withCtx(() => [
            renderSlot(e.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as"])
      ]),
      _: 3
    }));
  }
}), xu = /* @__PURE__ */ defineComponent({
  __name: "ComboboxTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = $e(), a = computed(() => t.disabled || e.disabled.value || false);
    return (s, r) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      type: s.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": unref(e).open.value,
      "aria-controls": unref(e).contentId,
      "data-state": unref(e).open.value ? "open" : "closed",
      disabled: a.value,
      "data-disabled": a.value ? "" : void 0,
      "aria-disabled": a.value ?? void 0,
      onClick: r[0] || (r[0] = (l) => unref(e).onOpenChange(!unref(e).open.value))
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }, 16, ["type", "aria-expanded", "aria-controls", "data-state", "disabled", "data-disabled", "aria-disabled"]));
  }
}), [Wn, Dr] = H("ComboboxGroup"), Pu = /* @__PURE__ */ defineComponent({
  __name: "ComboboxGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    $();
    const e = ee(), a = ref([]), s = $e(), r = computed(() => !s.isUserInputted.value || a.value.length === 0 || s.filteredOptions.value.map((l) => JSON.stringify(l)).some((l) => a.value.map((i) => JSON.stringify(i)).includes(l)));
    return Dr({
      id: e,
      options: a
    }), (l, i) => withDirectives((openBlock(), createBlock(unref(D), mergeProps(t, {
      role: "group",
      "aria-labelledby": unref(e)
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"])), [
      [vShow, r.value]
    ]);
  }
}), Bu = /* @__PURE__ */ defineComponent({
  __name: "ComboboxLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = Wn({ id: "" });
    return (a, s) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), [Or, Ir] = H("ComboboxContent"), Ar = /* @__PURE__ */ defineComponent({
  __name: "ComboboxContentImpl",
  props: {
    position: { default: "inline" },
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean, default: true },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { position: s } = toRefs(e), r = $e();
    ct(e.bodyLock);
    const { forwardRef: l, currentElement: i } = $();
    pt(i);
    const u = computed(() => e.position === "popper" ? e : {}), d = Ne(u.value);
    function p(f) {
      r.onSelectedValueChange("");
    }
    onMounted(() => {
      r.onContentElementChange(i.value);
    });
    const c = {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-combobox-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-combobox-content-available-width": "var(--radix-popper-available-width)",
      "--radix-combobox-content-available-height": "var(--radix-popper-available-height)",
      "--radix-combobox-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-combobox-trigger-height": "var(--radix-popper-anchor-height)"
    };
    return Ir({ position: s }), (f, v) => (openBlock(), createBlock(unref(Bo), null, {
      default: withCtx(() => [
        f.dismissable ? (openBlock(), createBlock(unref(De), {
          key: 0,
          "as-child": "",
          "disable-outside-pointer-events": f.disableOutsidePointerEvents,
          onDismiss: v[0] || (v[0] = (y) => unref(r).onOpenChange(false)),
          onFocusOutside: v[1] || (v[1] = (y) => {
            var C;
            (C = unref(r).parentElement.value) != null && C.contains(y.target) && y.preventDefault(), a("focusOutside", y);
          }),
          onInteractOutside: v[2] || (v[2] = (y) => a("interactOutside", y)),
          onEscapeKeyDown: v[3] || (v[3] = (y) => a("escapeKeyDown", y)),
          onPointerDownOutside: v[4] || (v[4] = (y) => {
            var C;
            (C = unref(r).parentElement.value) != null && C.contains(y.target) && y.preventDefault(), a("pointerDownOutside", y);
          })
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(unref(s) === "popper" ? unref(Fe) : unref(D)), mergeProps({ ...f.$attrs, ...unref(d) }, {
              id: unref(r).contentId,
              ref: unref(l),
              role: "listbox",
              "data-state": unref(r).open.value ? "open" : "closed",
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none",
                ...unref(s) === "popper" ? c : {}
              },
              onPointerleave: p
            }), {
              default: withCtx(() => [
                renderSlot(f.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"]))
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])) : (openBlock(), createBlock(resolveDynamicComponent(unref(s) === "popper" ? unref(Fe) : unref(D)), mergeProps({ key: 1 }, { ...f.$attrs, ...u.value }, {
          id: unref(r).contentId,
          ref: unref(l),
          role: "listbox",
          "data-state": unref(r).open.value ? "open" : "closed",
          style: {
            // flex layout so we can place the scroll buttons properly
            display: "flex",
            flexDirection: "column",
            // reset the outline by default as the content MAY get focused
            outline: "none",
            ...unref(s) === "popper" ? c : {}
          },
          onPointerleave: p
        }), {
          default: withCtx(() => [
            renderSlot(f.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "data-state", "style"]))
      ]),
      _: 3
    }));
  }
}), Su = /* @__PURE__ */ defineComponent({
  __name: "ComboboxContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    bodyLock: { type: Boolean },
    dismissable: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t), { forwardRef: r } = $(), l = $e();
    return (i, u) => (openBlock(), createBlock(unref(ae), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        createVNode(Ar, mergeProps({ ...unref(s), ...i.$attrs }, { ref: unref(r) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Tu = /* @__PURE__ */ defineComponent({
  __name: "ComboboxEmpty",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    $();
    const e = $e(), a = computed(() => e.searchTerm.value && e.filteredOptions.value.length === 0);
    return (s, r) => a.value ? (openBlock(), createBlock(unref(D), normalizeProps(mergeProps({ key: 0 }, t)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", {}, () => [
          createTextVNode("No options")
        ])
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
}), Du = /* @__PURE__ */ defineComponent({
  __name: "ComboboxViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { forwardRef: e } = $();
    return (a, s) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(D), mergeProps({ ...a.$attrs, ...t }, {
        ref: unref(e),
        "data-radix-combobox-viewport": "",
        role: "presentation",
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        }
      }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      createVNode(unref(D), { as: "style" }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-combobox-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      })
    ], 64));
  }
}), [Rr, Mr] = H("ComboboxItem"), kr = "combobox.select", Ou = /* @__PURE__ */ defineComponent({
  __name: "ComboboxItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { disabled: s } = toRefs(e), r = $e(), l = Wn({ id: "", options: ref([]) }), { forwardRef: i } = $(), u = computed(
      () => {
        var C, E;
        return r.multiple.value && Array.isArray(r.modelValue.value) ? (C = r.modelValue.value) == null ? void 0 : C.includes(e.value) : nt((E = r.modelValue) == null ? void 0 : E.value, e.value);
      }
    ), d = computed(() => nt(r.selectedValue.value, e.value)), p = ee(), c = computed(() => r.isUserInputted.value ? r.searchTerm.value === "" || !!r.filteredOptions.value.find((C) => nt(C, e.value)) : true);
    async function f(C) {
      a("select", C), !(C != null && C.defaultPrevented) && !s.value && C && r.onValueChange(e.value);
    }
    function v(C) {
      if (!C)
        return;
      const E = { originalEvent: C, value: e.value };
      po(kr, f, E);
    }
    async function y(C) {
      await nextTick(), !C.defaultPrevented && r.onSelectedValueChange(e.value);
    }
    if (e.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return onMounted(() => {
      var C, E, _;
      (E = (C = l.options) == null ? void 0 : C.value) != null && E.includes(e.value) || (_ = l.options) == null || _.value.push(e.value);
    }), Mr({
      isSelected: u
    }), (C, E) => (openBlock(), createBlock(unref(So), null, {
      default: withCtx(() => [
        withDirectives(createVNode(unref(D), {
          ref: unref(i),
          role: "option",
          tabindex: "-1",
          "aria-labelledby": unref(p),
          "data-highlighted": d.value ? "" : void 0,
          "aria-selected": u.value,
          "data-state": u.value ? "checked" : "unchecked",
          "aria-disabled": unref(s) || void 0,
          "data-disabled": unref(s) ? "" : void 0,
          as: C.as,
          "as-child": C.asChild,
          onClick: v,
          onPointermove: y
        }, {
          default: withCtx(() => [
            renderSlot(C.$slots, "default", {}, () => [
              createTextVNode(toDisplayString(C.value), 1)
            ])
          ]),
          _: 3
        }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "as", "as-child"]), [
          [vShow, c.value]
        ])
      ]),
      _: 3
    }));
  }
}), Iu = /* @__PURE__ */ defineComponent({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = Rr();
    return (a, s) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(D), mergeProps({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
}), Au = /* @__PURE__ */ defineComponent({
  __name: "ComboboxSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(D), mergeProps(t, { "aria-hidden": "" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), At = /* @__PURE__ */ defineComponent({
  __name: "MenuAnchor",
  props: {
    element: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(je), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), To = /* @__PURE__ */ defineComponent({
  __name: "MenuArrow",
  props: {
    width: {},
    height: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Xe), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [We, zn] = H(["MenuRoot", "MenuSub"], "MenuContext"), [ft, Vr] = H("MenuRoot"), Do = /* @__PURE__ */ defineComponent({
  __name: "MenuRoot",
  props: {
    open: { type: Boolean, default: false },
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { modal: s, dir: r } = toRefs(e), l = ue(r), i = X(e, "open", a), u = ref(), d = ref(false);
    return watchEffect((p) => {
      if (!_e)
        return;
      const c = () => {
        d.value = true, document.addEventListener("pointerdown", f, {
          capture: true,
          once: true
        }), document.addEventListener("pointermove", f, {
          capture: true,
          once: true
        });
      }, f = () => d.value = false;
      document.addEventListener("keydown", c, { capture: true }), p(() => {
        document.removeEventListener("keydown", c, { capture: true }), document.removeEventListener("pointerdown", f, {
          capture: true
        }), document.removeEventListener("pointermove", f, {
          capture: true
        });
      });
    }), zn({
      open: i,
      onOpenChange: (p) => {
        i.value = p;
      },
      content: u,
      onContentChange: (p) => {
        u.value = p;
      }
    }), Vr({
      onClose: () => {
        i.value = false;
      },
      isUsingKeyboardRef: d,
      dir: l,
      modal: s
    }), (p, c) => (openBlock(), createBlock(unref(He), null, {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Fr = "rovingFocusGroup.onEntryFocus", Lr = { bubbles: false, cancelable: true }, Kr = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Nr(o2, t) {
  return t !== "rtl" ? o2 : o2 === "ArrowLeft" ? "ArrowRight" : o2 === "ArrowRight" ? "ArrowLeft" : o2;
}
function Hr(o2, t, e) {
  const a = Nr(o2.key, e);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(a)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(a)))
    return Kr[a];
}
function Un(o2) {
  const t = document.activeElement;
  for (const e of o2)
    if (e === t || (e.focus(), document.activeElement !== t))
      return;
}
function jr(o2, t) {
  return o2.map((e, a) => o2[(t + a) % o2.length]);
}
const [Wr, zr] = H("RovingFocusGroup"), Ze = /* @__PURE__ */ defineComponent({
  __name: "RovingFocusGroup",
  props: {
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: false },
    currentTabStopId: {},
    defaultCurrentTabStopId: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["entryFocus", "update:currentTabStopId"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { loop: s, orientation: r, dir: l } = toRefs(e), i = ue(l), u = X(e, "currentTabStopId", a, {
      defaultValue: e.defaultCurrentTabStopId,
      passive: e.currentTabStopId === void 0
    }), d = ref(false), p = ref(false), c = ref(0), { forwardRef: f, currentElement: v } = $(), { createCollection: y } = fe("rovingFocus"), C = y(v);
    function E(_) {
      const x = !p.value;
      if (_.currentTarget && _.target === _.currentTarget && x && !d.value) {
        const B = new CustomEvent(Fr, Lr);
        if (_.currentTarget.dispatchEvent(B), a("entryFocus", B), !B.defaultPrevented) {
          const O = C.value, A = O.find((V) => V.getAttribute("data-active") === "true"), M = O.find(
            (V) => V.id === u.value
          ), R = [A, M, ...O].filter(
            Boolean
          );
          Un(R);
        }
      }
      p.value = false;
    }
    return zr({
      loop: s,
      dir: i,
      orientation: r,
      currentTabStopId: u,
      onItemFocus: (_) => {
        u.value = _;
      },
      onItemShiftTab: () => {
        d.value = true;
      },
      onFocusableItemAdd: () => {
        c.value++;
      },
      onFocusableItemRemove: () => {
        c.value--;
      }
    }), (_, x) => (openBlock(), createBlock(unref(D), {
      ref: unref(f),
      tabindex: d.value || c.value === 0 ? -1 : 0,
      "data-orientation": unref(r),
      as: _.as,
      "as-child": _.asChild,
      dir: unref(i),
      style: { outline: "none" },
      onMousedown: x[0] || (x[0] = (B) => p.value = true),
      onFocus: E,
      onBlur: x[1] || (x[1] = (B) => d.value = false)
    }, {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "as", "as-child", "dir"]));
  }
}), Qe = /* @__PURE__ */ defineComponent({
  __name: "RovingFocusItem",
  props: {
    tabStopId: {},
    focusable: { type: Boolean, default: true },
    active: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = o2, e = Wr(), a = ee(), s = computed(() => t.tabStopId || a), r = computed(
      () => e.currentTabStopId.value === s.value
    ), { injectCollection: l } = fe("rovingFocus"), i = l();
    onMounted(() => {
      t.focusable && e.onFocusableItemAdd();
    }), onUnmounted(() => {
      t.focusable && e.onFocusableItemRemove();
    });
    function u(d) {
      if (d.key === "Tab" && d.shiftKey) {
        e.onItemShiftTab();
        return;
      }
      if (d.target !== d.currentTarget)
        return;
      const p = Hr(
        d,
        e.orientation.value,
        e.dir.value
      );
      if (p !== void 0) {
        d.preventDefault();
        let c = [...i.value];
        if (p === "last")
          c.reverse();
        else if (p === "prev" || p === "next") {
          p === "prev" && c.reverse();
          const f = c.indexOf(
            d.currentTarget
          );
          c = e.loop.value ? jr(c, f + 1) : c.slice(f + 1);
        }
        nextTick(() => Un(c));
      }
    }
    return (d, p) => (openBlock(), createBlock(unref(D), {
      "data-radix-vue-collection-item": "",
      tabindex: r.value ? 0 : -1,
      "data-orientation": unref(e).orientation.value,
      "data-active": d.active,
      "data-disabled": !d.focusable || void 0,
      as: d.as,
      "as-child": d.asChild,
      onMousedown: p[0] || (p[0] = (c) => {
        d.focusable ? unref(e).onItemFocus(s.value) : c.preventDefault();
      }),
      onFocus: p[1] || (p[1] = (c) => unref(e).onItemFocus(s.value)),
      onKeydown: u
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"]));
  }
}), [Oo, Ur] = H("MenuContent"), Io = /* @__PURE__ */ defineComponent({
  __name: "MenuContentImpl",
  props: /* @__PURE__ */ mergeDefaults({
    loop: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    disableOutsideScroll: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  }, {
    ...Nn
  }),
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus", "dismiss"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = We(), r = ft(), { trapFocus: l, disableOutsidePointerEvents: i, loop: u } = toRefs(e);
    ho(), ct(i.value);
    const d = ref(""), p = ref(0), c = ref(0), f = ref(null), v = ref("right"), y = ref(0), C = ref(null), { createCollection: E } = fe(), { forwardRef: _, currentElement: x } = $(), B = E(x);
    watch(x, (I) => {
      s.onContentChange(I);
    });
    const { handleTypeaheadSearch: O } = go(B);
    onUnmounted(() => {
      window.clearTimeout(p.value);
    });
    function A(I) {
      var W, F;
      return v.value === ((W = f.value) == null ? void 0 : W.side) && tr(I, (F = f.value) == null ? void 0 : F.area);
    }
    async function M(I) {
      var L;
      a("openAutoFocus", I), !I.defaultPrevented && (I.preventDefault(), (L = x.value) == null || L.focus());
    }
    function R(I) {
      if (I.defaultPrevented)
        return;
      const W = I.target.closest("[data-radix-menu-content]") === I.currentTarget, F = I.ctrlKey || I.altKey || I.metaKey, q = I.key.length === 1, oe = Ye(
        I,
        document.activeElement,
        x.value,
        {
          loop: u.value,
          arrowKeyOptions: "vertical",
          dir: r == null ? void 0 : r.dir.value,
          focus: true,
          attributeName: "[data-radix-vue-collection-item]:not([data-disabled])"
        }
      );
      if (oe)
        return oe == null ? void 0 : oe.focus();
      if (I.code === "Space" || (W && (I.key === "Tab" && I.preventDefault(), !F && q && O(I.key)), I.target !== x.value) || !Js.includes(I.key))
        return;
      I.preventDefault();
      const ce = B.value;
      Mn.includes(I.key) && ce.reverse(), oo(ce);
    }
    function V(I) {
      var L, W;
      (W = (L = I == null ? void 0 : I.currentTarget) == null ? void 0 : L.contains) != null && W.call(L, I.target) || (window.clearTimeout(p.value), d.value = "");
    }
    function j(I) {
      var F;
      if (!st(I))
        return;
      const L = I.target, W = y.value !== I.clientX;
      if ((F = I == null ? void 0 : I.currentTarget) != null && F.contains(L) && W) {
        const q = I.clientX > y.value ? "right" : "left";
        v.value = q, y.value = I.clientX;
      }
    }
    return Ur({
      onItemEnter: (I) => !!A(I),
      onItemLeave: (I) => {
        var L;
        A(I) || ((L = x.value) == null || L.focus(), C.value = null);
      },
      onTriggerLeave: (I) => !!A(I),
      searchRef: d,
      pointerGraceTimerRef: c,
      onPointerGraceIntentChange: (I) => {
        f.value = I;
      }
    }), (I, L) => (openBlock(), createBlock(unref(It), {
      "as-child": "",
      trapped: unref(l),
      onMountAutoFocus: M,
      onUnmountAutoFocus: L[7] || (L[7] = (W) => a("closeAutoFocus", W))
    }, {
      default: withCtx(() => [
        createVNode(unref(De), {
          "as-child": "",
          "disable-outside-pointer-events": unref(i),
          onEscapeKeyDown: L[2] || (L[2] = (W) => a("escapeKeyDown", W)),
          onPointerDownOutside: L[3] || (L[3] = (W) => a("pointerDownOutside", W)),
          onFocusOutside: L[4] || (L[4] = (W) => a("focusOutside", W)),
          onInteractOutside: L[5] || (L[5] = (W) => a("interactOutside", W)),
          onDismiss: L[6] || (L[6] = (W) => a("dismiss"))
        }, {
          default: withCtx(() => [
            createVNode(unref(Ze), {
              "current-tab-stop-id": C.value,
              "onUpdate:currentTabStopId": L[0] || (L[0] = (W) => C.value = W),
              "as-child": "",
              orientation: "vertical",
              dir: unref(r).dir.value,
              loop: unref(u),
              onEntryFocus: L[1] || (L[1] = (W) => {
                a("entryFocus", W), unref(r).isUsingKeyboardRef.value || W.preventDefault();
              })
            }, {
              default: withCtx(() => [
                createVNode(unref(Fe), {
                  ref: unref(_),
                  role: "menu",
                  as: I.as,
                  "as-child": I.asChild,
                  "aria-orientation": "vertical",
                  "data-radix-menu-content": "",
                  "data-state": unref(_o)(unref(s).open.value),
                  dir: unref(r).dir.value,
                  side: I.side,
                  "side-offset": I.sideOffset,
                  align: I.align,
                  "align-offset": I.alignOffset,
                  "avoid-collisions": I.avoidCollisions,
                  "collision-boundary": I.collisionBoundary,
                  "collision-padding": I.collisionPadding,
                  "arrow-padding": I.arrowPadding,
                  "prioritize-position": I.prioritizePosition,
                  sticky: I.sticky,
                  "hide-when-detached": I.hideWhenDetached,
                  onKeydown: R,
                  onBlur: V,
                  onPointermove: j
                }, {
                  default: withCtx(() => [
                    renderSlot(I.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["as", "as-child", "data-state", "dir", "side", "side-offset", "align", "align-offset", "avoid-collisions", "collision-boundary", "collision-padding", "arrow-padding", "prioritize-position", "sticky", "hide-when-detached"])
              ]),
              _: 3
            }, 8, ["current-tab-stop-id", "dir", "loop"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), qn = /* @__PURE__ */ defineComponent({
  __name: "MenuItemImpl",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = Oo(), a = ref(false);
    async function s(l) {
      if (!l.defaultPrevented && st(l)) {
        if (t.disabled)
          e.onItemLeave(l);
        else if (!e.onItemEnter(l)) {
          const u = l.currentTarget;
          u == null || u.focus();
        }
      }
    }
    async function r(l) {
      await nextTick(), !l.defaultPrevented && st(l) && e.onItemLeave(l);
    }
    return (l, i) => (openBlock(), createBlock(unref(D), {
      role: "menuitem",
      tabindex: "-1",
      as: l.as,
      "as-child": l.asChild,
      "data-radix-vue-collection-item": "",
      "aria-disabled": l.disabled || void 0,
      "data-disabled": l.disabled ? "" : void 0,
      "data-highlighted": a.value ? "" : void 0,
      onPointermove: s,
      onPointerleave: r,
      onFocus: i[0] || (i[0] = async (u) => {
        await nextTick(), !(u.defaultPrevented || l.disabled) && (a.value = true);
      }),
      onBlur: i[1] || (i[1] = async (u) => {
        await nextTick(), !u.defaultPrevented && (a.value = false);
      })
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "aria-disabled", "data-disabled", "data-highlighted"]));
  }
}), vt = /* @__PURE__ */ defineComponent({
  __name: "MenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { forwardRef: s, currentElement: r } = $(), l = ft(), i = Oo(), u = ref(false);
    async function d() {
      const p = r.value;
      if (!e.disabled && p) {
        const c = new CustomEvent(Ys, {
          bubbles: true,
          cancelable: true
        });
        a("select", c), await nextTick(), c.defaultPrevented ? u.value = false : l.onClose();
      }
    }
    return (p, c) => (openBlock(), createBlock(qn, mergeProps(e, {
      ref: unref(s),
      onClick: d,
      onPointerdown: c[0] || (c[0] = () => {
        u.value = true;
      }),
      onPointerup: c[1] || (c[1] = async (f) => {
        var v;
        await nextTick(), !f.defaultPrevented && (u.value || (v = f.currentTarget) == null || v.click());
      }),
      onKeydown: c[2] || (c[2] = async (f) => {
        const v = unref(i).searchRef.value !== "";
        p.disabled || v && f.key === " " || unref(to).includes(f.key) && (f.currentTarget.click(), f.preventDefault());
      })
    }), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [qr, Gn] = H(
  ["MenuCheckboxItem", "MenuRadioItem"],
  "MenuItemIndicatorContext"
), Ao = /* @__PURE__ */ defineComponent({
  __name: "MenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = qr({
      checked: ref(false)
    });
    return (e, a) => (openBlock(), createBlock(unref(ae), {
      present: e.forceMount || unref(Pt)(unref(t).checked.value) || unref(t).checked.value === true
    }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          as: e.as,
          "as-child": e.asChild,
          "data-state": unref($o)(unref(t).checked.value)
        }, {
          default: withCtx(() => [
            renderSlot(e.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Ro = /* @__PURE__ */ defineComponent({
  __name: "MenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String], default: false },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = X(e, "checked", a);
    return Gn({ checked: s }), (r, l) => (openBlock(), createBlock(vt, mergeProps({ role: "menuitemcheckbox" }, e, {
      "aria-checked": unref(Pt)(unref(s)) ? "mixed" : unref(s),
      "data-state": unref($o)(unref(s)),
      onSelect: l[0] || (l[0] = async (i) => {
        a("select", i), unref(Pt)(unref(s)) ? s.value = true : s.value = !unref(s);
      })
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Gr = /* @__PURE__ */ defineComponent({
  __name: "MenuRootContentModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = ne(e, a), r = We(), { forwardRef: l, currentElement: i } = $();
    return pt(i), (u, d) => (openBlock(), createBlock(Io, mergeProps(unref(s), {
      ref: unref(l),
      "trap-focus": unref(r).open.value,
      "disable-outside-pointer-events": unref(r).open.value,
      "disable-outside-scroll": true,
      onDismiss: d[0] || (d[0] = (p) => unref(r).onOpenChange(false)),
      onFocusOutside: d[1] || (d[1] = withModifiers((p) => a("focusOutside", p), ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus", "disable-outside-pointer-events"]));
  }
}), Yr = /* @__PURE__ */ defineComponent({
  __name: "MenuRootContentNonModal",
  props: {
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t), r = We();
    return (l, i) => (openBlock(), createBlock(Io, mergeProps(unref(s), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      "disable-outside-scroll": false,
      onDismiss: i[0] || (i[0] = (u) => unref(r).onOpenChange(false))
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mo = /* @__PURE__ */ defineComponent({
  __name: "MenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t), r = We(), l = ft();
    return (i, u) => (openBlock(), createBlock(unref(ae), {
      present: i.forceMount || unref(r).open.value
    }, {
      default: withCtx(() => [
        unref(l).modal.value ? (openBlock(), createBlock(Gr, normalizeProps(mergeProps({ key: 0 }, { ...i.$attrs, ...unref(s) })), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(Yr, normalizeProps(mergeProps({ key: 1 }, { ...i.$attrs, ...unref(s) })), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Rt = /* @__PURE__ */ defineComponent({
  __name: "MenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(D), mergeProps({ role: "group" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ko = /* @__PURE__ */ defineComponent({
  __name: "MenuLabel",
  props: {
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(D), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vo = /* @__PURE__ */ defineComponent({
  __name: "MenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Te), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Xr, Jr] = H("MenuRadioGroup"), Fo = /* @__PURE__ */ defineComponent({
  __name: "MenuRadioGroup",
  props: {
    modelValue: { default: "" },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, s = X(e, "modelValue", t);
    return Jr({
      modelValue: s,
      onValueChange: (r) => {
        s.value = r;
      }
    }), (r, l) => (openBlock(), createBlock(Rt, normalizeProps(guardReactiveProps(e)), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lo = /* @__PURE__ */ defineComponent({
  __name: "MenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { value: s } = toRefs(e), r = Xr(), l = computed(
      () => r.modelValue.value === (s == null ? void 0 : s.value)
    );
    return Gn({ checked: l }), (i, u) => (openBlock(), createBlock(vt, mergeProps({ role: "menuitemradio" }, e, {
      "aria-checked": l.value,
      "data-state": unref($o)(l.value),
      onSelect: u[0] || (u[0] = async (d) => {
        a("select", d), unref(r).onValueChange(unref(s));
      })
    }), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-checked", "data-state"]));
  }
}), Ko = /* @__PURE__ */ defineComponent({
  __name: "MenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      role: "separator",
      "aria-orientation": "horizontal"
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Yn, Zr] = H("MenuSub"), No = /* @__PURE__ */ defineComponent({
  __name: "MenuSub",
  props: {
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, s = X(e, "open", t, {
      defaultValue: false,
      passive: e.open === void 0
    }), r = We(), l = ref(), i = ref();
    return watchEffect((u) => {
      (r == null ? void 0 : r.open.value) === false && (s.value = false), u(() => s.value = false);
    }), zn({
      open: s,
      onOpenChange: (u) => {
        s.value = u;
      },
      content: i,
      onContentChange: (u) => {
        i.value = u;
      }
    }), Zr({
      triggerId: ee(),
      contentId: ee(),
      trigger: l,
      onTriggerChange: (u) => {
        l.value = u;
      }
    }), (u, d) => (openBlock(), createBlock(unref(He), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ho = /* @__PURE__ */ defineComponent({
  __name: "MenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t), r = We(), l = ft(), i = Yn(), { forwardRef: u, currentElement: d } = $();
    return (p, c) => (openBlock(), createBlock(unref(ae), {
      present: p.forceMount || unref(r).open.value
    }, {
      default: withCtx(() => [
        createVNode(Io, mergeProps(unref(s), {
          id: unref(i).contentId,
          ref: unref(u),
          "aria-labelledby": unref(i).triggerId,
          align: "start",
          side: unref(l).dir.value === "rtl" ? "left" : "right",
          "disable-outside-pointer-events": false,
          "disable-outside-scroll": false,
          "trap-focus": false,
          onOpenAutoFocus: c[0] || (c[0] = withModifiers((f) => {
            var v;
            unref(l).isUsingKeyboardRef.value && ((v = unref(d)) == null || v.focus());
          }, ["prevent"])),
          onCloseAutoFocus: c[1] || (c[1] = withModifiers(() => {
          }, ["prevent"])),
          onFocusOutside: c[2] || (c[2] = (f) => {
            f.defaultPrevented || f.target !== unref(i).trigger.value && unref(r).onOpenChange(false);
          }),
          onEscapeKeyDown: c[3] || (c[3] = (f) => {
            unref(l).onClose(), f.preventDefault();
          }),
          onKeydown: c[4] || (c[4] = (f) => {
            var C, E;
            const v = (C = f.currentTarget) == null ? void 0 : C.contains(f.target), y = unref(Qs)[unref(l).dir.value].includes(f.key);
            v && y && (unref(r).onOpenChange(false), (E = unref(i).trigger.value) == null || E.focus(), f.preventDefault());
          })
        }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-labelledby", "side"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), jo = /* @__PURE__ */ defineComponent({
  __name: "MenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = We(), a = ft(), s = Yn(), r = Oo(), l = ref(null);
    function i() {
      l.value && window.clearTimeout(l.value), l.value = null;
    }
    onUnmounted(() => {
      i();
    });
    function u(c) {
      !st(c) || r.onItemEnter(c) || !t.disabled && !e.open.value && !l.value && (r.onPointerGraceIntentChange(null), l.value = window.setTimeout(() => {
        e.onOpenChange(true), i();
      }, 100));
    }
    async function d(c) {
      var v, y;
      if (!st(c))
        return;
      i();
      const f = (v = e.content.value) == null ? void 0 : v.getBoundingClientRect();
      if (f != null && f.width) {
        const C = (y = e.content.value) == null ? void 0 : y.dataset.side, E = C === "right", _ = E ? -5 : 5, x = f[E ? "left" : "right"], B = f[E ? "right" : "left"];
        r.onPointerGraceIntentChange({
          area: [
            // Apply a bleed on clientX to ensure that our exit point is
            // consistently within polygon bounds
            { x: c.clientX + _, y: c.clientY },
            { x, y: f.top },
            { x: B, y: f.top },
            { x: B, y: f.bottom },
            { x, y: f.bottom }
          ],
          side: C
        }), window.clearTimeout(r.pointerGraceTimerRef.value), r.pointerGraceTimerRef.value = window.setTimeout(
          () => r.onPointerGraceIntentChange(null),
          300
        );
      } else {
        if (r.onTriggerLeave(c))
          return;
        r.onPointerGraceIntentChange(null);
      }
    }
    async function p(c) {
      var v;
      const f = r.searchRef.value !== "";
      t.disabled || f && c.key === " " || Zs[a.dir.value].includes(c.key) && (e.onOpenChange(true), await nextTick(), (v = e.content.value) == null || v.focus(), c.preventDefault());
    }
    return (c, f) => (openBlock(), createBlock(At, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(qn, mergeProps(t, {
          id: unref(s).triggerId,
          ref: (v) => {
            var y;
            (y = unref(s)) == null || y.onTriggerChange(v == null ? void 0 : v.$el);
          },
          "aria-haspopup": "menu",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(s).contentId,
          "data-state": unref(_o)(unref(e).open.value),
          onClick: f[0] || (f[0] = async (v) => {
            t.disabled || v.defaultPrevented || (v.currentTarget.focus(), unref(e).open.value || unref(e).onOpenChange(true));
          }),
          onPointermove: u,
          onPointerleave: d,
          onKeydown: p
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["id", "aria-expanded", "aria-controls", "data-state"])
      ]),
      _: 3
    }));
  }
}), [Xn, Qr] = H("ContextMenuRoot"), ku = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuRoot",
  props: {
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { dir: s, modal: r } = toRefs(e);
    $();
    const l = ue(s), i = ref(false);
    return Qr({
      open: i,
      onOpenChange: (u) => {
        i.value = u, a("update:open", u);
      },
      dir: l,
      modal: r
    }), (u, d) => (openBlock(), createBlock(unref(Do), {
      open: i.value,
      "onUpdate:open": d[0] || (d[0] = (p) => i.value = p),
      dir: unref(l),
      modal: unref(r)
    }, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
});
function ln(o2) {
  return o2.pointerType !== "mouse";
}
const Vu = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ContextMenuTrigger",
  props: {
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = o2, { disabled: e } = toRefs(t), { forwardRef: a } = $(), s = Xn(), r = ref({ x: 0, y: 0 }), l = computed(() => ({
      getBoundingClientRect: () => ({
        width: 0,
        height: 0,
        left: r.value.x,
        right: r.value.x,
        top: r.value.y,
        bottom: r.value.y,
        ...r.value
      })
    })), i = ref(0);
    function u() {
      window.clearTimeout(i.value);
    }
    function d(v) {
      r.value = { x: v.clientX, y: v.clientY }, s.onOpenChange(true);
    }
    async function p(v) {
      e.value || (await nextTick(), v.defaultPrevented || (u(), d(v), v.preventDefault()));
    }
    async function c(v) {
      e.value || (await nextTick(), ln(v) && !v.defaultPrevented && (u(), i.value = window.setTimeout(() => d(v), 700)));
    }
    async function f(v) {
      e.value || (await nextTick(), ln(v) && !v.defaultPrevented && u());
    }
    return (v, y) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(At), {
        as: "template",
        element: l.value
      }, null, 8, ["element"]),
      createVNode(unref(D), mergeProps({
        ref: unref(a),
        as: v.as,
        "as-child": v.asChild,
        "data-state": unref(s).open.value ? "open" : "closed",
        "data-disabled": unref(e) ? "" : void 0,
        style: {
          WebkitTouchCallout: "none"
        }
      }, v.$attrs, {
        onContextmenu: p,
        onPointerdown: c,
        onPointermove: f,
        onPointercancel: f,
        onPointerup: f
      }), {
        default: withCtx(() => [
          renderSlot(v.$slots, "default")
        ]),
        _: 3
      }, 16, ["as", "as-child", "data-state", "data-disabled"])
    ], 64));
  }
}), Fu = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Vo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lu = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    alignOffset: { default: 0 },
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false },
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t);
    $();
    const r = Xn(), l = ref(false);
    return (i, u) => (openBlock(), createBlock(unref(Mo), mergeProps(unref(s), {
      side: "right",
      "side-offset": 2,
      align: "start",
      style: {
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: u[0] || (u[0] = (d) => {
        !d.defaultPrevented && l.value && d.preventDefault(), l.value = false;
      }),
      onInteractOutside: u[1] || (u[1] = (d) => {
        !d.defaultPrevented && !unref(r).modal.value && (l.value = true);
      })
    }), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), Nu = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    return $(), (r, l) => (openBlock(), createBlock(unref(vt), normalizeProps(guardReactiveProps({ ...e, ...unref(s) })), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ju = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Ko), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wu = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Ro), normalizeProps(guardReactiveProps({ ...e, ...unref(s) })), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zu = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Ao), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uu = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(ko), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qu = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Fo), normalizeProps(guardReactiveProps({ ...e, ...unref(s) })), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gu = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Lo), normalizeProps(guardReactiveProps({ ...e, ...unref(s) })), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yu = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, a = t;
    $();
    const s = X(e, "open", a, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (r, l) => (openBlock(), createBlock(unref(No), {
      open: unref(s),
      "onUpdate:open": l[0] || (l[0] = (i) => isRef(s) ? s.value = i : null)
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Xu = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Ho), mergeProps(unref(s), { style: {
      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), Ju = /* @__PURE__ */ defineComponent({
  __name: "ContextMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Jn, el] = H("DropdownMenuRoot"), Zu = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRoot",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 },
    dir: {},
    modal: { type: Boolean, default: true }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, a = t;
    $();
    const s = X(e, "open", a, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), r = ref(), { modal: l, dir: i } = toRefs(e), u = ue(i);
    return el({
      open: s,
      onOpenChange: (d) => {
        s.value = d;
      },
      onOpenToggle: () => {
        s.value = !s.value;
      },
      triggerId: ee(),
      triggerElement: r,
      contentId: ee(),
      modal: l,
      dir: u
    }), (d, p) => (openBlock(), createBlock(unref(Do), {
      open: unref(s),
      "onUpdate:open": p[0] || (p[0] = (c) => isRef(s) ? s.value = c : null),
      dir: unref(u),
      modal: unref(l)
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir", "modal"]));
  }
}), Qu = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, e = Jn(), { forwardRef: a, currentElement: s } = $();
    return onMounted(() => {
      e.triggerElement = s;
    }), (r, l) => (openBlock(), createBlock(unref(At), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          id: unref(e).triggerId,
          ref: unref(a),
          type: r.as === "button" ? "button" : void 0,
          "as-child": t.asChild,
          as: r.as,
          "aria-haspopup": "menu",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(e).open.value ? unref(e).contentId : void 0,
          "data-disabled": r.disabled ? "" : void 0,
          disabled: r.disabled,
          "data-state": unref(e).open.value ? "open" : "closed",
          onClick: l[0] || (l[0] = async (i) => {
            var u;
            !r.disabled && i.button === 0 && i.ctrlKey === false && ((u = unref(e)) == null || u.onOpenToggle(), await nextTick(), unref(e).open.value && i.preventDefault());
          }),
          onKeydown: l[1] || (l[1] = withKeys(
            (i) => {
              r.disabled || (["Enter", " "].includes(i.key) && unref(e).onOpenToggle(), i.key === "ArrowDown" && unref(e).onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
            },
            ["enter", "space", "arrow-down"]
          ))
        }, {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as-child", "as", "aria-expanded", "aria-controls", "data-disabled", "disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), ed = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Vo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), td = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t);
    $();
    const r = Jn(), l = ref(false);
    function i(u) {
      u.defaultPrevented || (l.value || setTimeout(() => {
        var d;
        (d = r.triggerElement.value) == null || d.focus();
      }, 0), l.value = false, u.preventDefault());
    }
    return (u, d) => {
      var p;
      return openBlock(), createBlock(unref(Mo), mergeProps(unref(s), {
        id: unref(r).contentId,
        "aria-labelledby": (p = unref(r)) == null ? void 0 : p.triggerId,
        style: {
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        },
        onCloseAutoFocus: i,
        onInteractOutside: d[0] || (d[0] = (c) => {
          var C;
          if (c.defaultPrevented)
            return;
          const f = c.detail.originalEvent, v = f.button === 0 && f.ctrlKey === true, y = f.button === 2 || v;
          (!unref(r).modal.value || y) && (l.value = true), (C = unref(r).triggerElement.value) != null && C.contains(c.target) && c.preventDefault();
        })
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "aria-labelledby", "style"]);
    };
  }
}), od = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(To), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nd = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    return $(), (r, l) => (openBlock(), createBlock(unref(vt), normalizeProps(guardReactiveProps({ ...e, ...unref(s) })), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sd = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Ko), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rd = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Ro), normalizeProps(guardReactiveProps({ ...e, ...unref(s) })), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ld = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Ao), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), id = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(ko), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ud = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Fo), normalizeProps(guardReactiveProps({ ...e, ...unref(s) })), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dd = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Lo), normalizeProps(guardReactiveProps(unref(s))), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cd = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, s = X(e, "open", t, {
      passive: e.open === void 0,
      defaultValue: e.defaultOpen ?? false
    });
    return $(), (r, l) => (openBlock(), createBlock(unref(No), {
      open: unref(s),
      "onUpdate:open": l[0] || (l[0] = (i) => isRef(s) ? s.value = i : null)
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), pd = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Ho), mergeProps(unref(s), { style: {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), fd = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(jo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Wo, tl] = H("HoverCardRoot"), vd = /* @__PURE__ */ defineComponent({
  __name: "HoverCardRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    openDelay: { default: 700 },
    closeDelay: { default: 300 }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { openDelay: s, closeDelay: r } = toRefs(e);
    $();
    const l = X(e, "open", a, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), i = ref(0), u = ref(0), d = ref(false), p = ref(false);
    function c() {
      clearTimeout(u.value), i.value = window.setTimeout(() => l.value = true, s.value);
    }
    function f() {
      clearTimeout(i.value), !d.value && !p.value && (u.value = window.setTimeout(() => l.value = false, r.value));
    }
    function v() {
      l.value = false;
    }
    return tl({
      open: l,
      onOpenChange(y) {
        l.value = y;
      },
      onOpen: c,
      onClose: f,
      onDismiss: v,
      hasSelectionRef: d,
      isPointerDownOnContentRef: p
    }), (y, C) => (openBlock(), createBlock(unref(He), null, {
      default: withCtx(() => [
        renderSlot(y.$slots, "default")
      ]),
      _: 3
    }));
  }
});
function Bt(o2) {
  return (t) => t.pointerType === "touch" ? void 0 : o2();
}
function ol(o2) {
  const t = [], e = document.createTreeWalker(o2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
const md = /* @__PURE__ */ defineComponent({
  __name: "HoverCardTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(o2) {
    const { forwardRef: t } = $(), e = Wo();
    return (a, s) => (openBlock(), createBlock(unref(je), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          ref: unref(t),
          "as-child": a.asChild,
          as: a.as,
          "data-state": unref(e).open.value ? "open" : "closed",
          onPointerenter: s[0] || (s[0] = (r) => unref(Bt)(unref(e).onOpen)(r)),
          onPointerleave: s[1] || (s[1] = (r) => unref(Bt)(unref(e).onClose)(r)),
          onFocus: s[2] || (s[2] = (r) => unref(e).onOpen()),
          onBlur: unref(e).onClose,
          onTouchstart: withModifiers(() => {
          }, ["prevent"])
        }, {
          default: withCtx(() => [
            renderSlot(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "data-state", "onBlur"])
      ]),
      _: 3
    }));
  }
}), hd = /* @__PURE__ */ defineComponent({
  __name: "HoverCardPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Te), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nl = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContentImpl",
  props: {
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = Ne(e), { forwardRef: r, currentElement: l } = $(), i = Wo(), u = ref(false);
    let d;
    watchEffect((c) => {
      if (u.value) {
        const f = document.body;
        d = f.style.userSelect || f.style.webkitUserSelect, f.style.userSelect = "none", f.style.webkitUserSelect = "none", c(() => {
          f.style.userSelect = d, f.style.webkitUserSelect = d;
        });
      }
    });
    function p() {
      u.value = false, i.isPointerDownOnContentRef.value = false, nextTick(() => {
        var f;
        ((f = document.getSelection()) == null ? void 0 : f.toString()) !== "" && (i.hasSelectionRef.value = true);
      });
    }
    return onMounted(() => {
      l.value && (document.addEventListener("pointerup", p), ol(l.value).forEach((f) => f.setAttribute("tabindex", "-1")));
    }), onUnmounted(() => {
      document.removeEventListener("pointerup", p), i.hasSelectionRef.value = false, i.isPointerDownOnContentRef.value = false;
    }), (c, f) => (openBlock(), createBlock(unref(De), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: f[1] || (f[1] = (v) => a("escapeKeyDown", v)),
      onPointerDownOutside: f[2] || (f[2] = (v) => a("pointerDownOutside", v)),
      onFocusOutside: f[3] || (f[3] = withModifiers((v) => a("focusOutside", v), ["prevent"])),
      onDismiss: unref(i).onDismiss
    }, {
      default: withCtx(() => [
        createVNode(unref(Fe), mergeProps({ ...unref(s), ...c.$attrs }, {
          ref: unref(r),
          "data-state": unref(i).open.value ? "open" : "closed",
          style: {
            userSelect: u.value ? "text" : void 0,
            // Safari requires prefix
            WebkitUserSelect: u.value ? "text" : void 0,
            // re-namespace exposed content custom properties
            "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
            "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
            "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
          },
          onPointerdown: f[0] || (f[0] = (v) => {
            v.currentTarget.contains(v.target) && (u.value = true), unref(i).hasSelectionRef.value = false, unref(i).isPointerDownOnContentRef.value = true;
          })
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }, 8, ["onDismiss"]));
  }
}), gd = /* @__PURE__ */ defineComponent({
  __name: "HoverCardContent",
  props: {
    forceMount: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t), { forwardRef: r } = $(), l = Wo();
    return (i, u) => (openBlock(), createBlock(unref(ae), {
      present: i.forceMount || unref(l).open.value
    }, {
      default: withCtx(() => [
        createVNode(nl, mergeProps(unref(s), {
          ref: unref(r),
          onPointerenter: u[0] || (u[0] = (d) => unref(Bt)(unref(l).onOpen)(d)),
          onPointerleave: u[1] || (u[1] = (d) => unref(Bt)(unref(l).onClose)(d))
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), yd = /* @__PURE__ */ defineComponent({
  __name: "HoverCardArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Xe), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bd = /* @__PURE__ */ defineComponent({
  __name: "Label",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "label" }
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      onMousedown: a[0] || (a[0] = (s) => {
        !s.defaultPrevented && s.detail > 1 && s.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Mt, al] = H("MenubarRoot"), Cd = /* @__PURE__ */ defineComponent({
  __name: "MenubarRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean, default: false }
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { forwardRef: s, currentElement: r } = $(), { createCollection: l } = fe("menubar");
    l(r);
    const i = X(e, "modelValue", a, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), u = ref(null), { dir: d, loop: p } = toRefs(e), c = ue(d);
    return al({
      modelValue: i,
      dir: c,
      loop: p,
      onMenuOpen: (f) => {
        i.value = f, u.value = f;
      },
      onMenuClose: () => {
        i.value = "";
      },
      onMenuToggle: (f) => {
        i.value = i.value ? "" : f, u.value = f;
      }
    }), (f, v) => (openBlock(), createBlock(unref(Ze), {
      "current-tab-stop-id": u.value,
      "onUpdate:currentTabStopId": v[0] || (v[0] = (y) => u.value = y),
      orientation: "horizontal",
      loop: unref(p),
      dir: unref(c),
      "as-child": ""
    }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          ref: unref(s),
          role: "menubar"
        }, {
          default: withCtx(() => [
            renderSlot(f.$slots, "default")
          ]),
          _: 3
        }, 512)
      ]),
      _: 3
    }, 8, ["current-tab-stop-id", "loop", "dir"]));
  }
}), [zo, sl] = H("MenubarMenu"), wd = /* @__PURE__ */ defineComponent({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(o2) {
    const e = o2.value ?? ee(), a = Mt();
    $();
    const s = ref(), r = ref(false), l = computed(() => a.modelValue.value === e);
    return watch(l, () => {
      l.value || (r.value = false);
    }), sl({
      value: e,
      triggerElement: s,
      triggerId: e,
      contentId: ee(),
      wasKeyboardTriggerOpenRef: r
    }), (i, u) => (openBlock(), createBlock(unref(Do), {
      open: l.value,
      modal: false,
      dir: unref(a).dir.value,
      "onUpdate:open": u[0] || (u[0] = (d) => {
        d || unref(a).onMenuClose();
      })
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["open", "dir"]));
  }
}), _d = /* @__PURE__ */ defineComponent({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = Mt(), e = zo(), { forwardRef: a, currentElement: s } = $(), r = ref(false), l = computed(() => t.modelValue.value === e.value);
    return onMounted(() => {
      e.triggerElement = s;
    }), (i, u) => (openBlock(), createBlock(unref(Qe), {
      "as-child": "",
      focusable: !i.disabled,
      "tab-stop-id": unref(e).value
    }, {
      default: withCtx(() => [
        createVNode(unref(At), { "as-child": "" }, {
          default: withCtx(() => [
            createVNode(unref(D), {
              id: unref(e).triggerId,
              ref: unref(a),
              as: i.as,
              type: i.as === "button" ? "button" : void 0,
              role: "menuitem",
              "aria-haspopup": "menu",
              "aria-expanded": l.value,
              "aria-controls": l.value ? unref(e).contentId : void 0,
              "data-highlighted": r.value ? "" : void 0,
              "data-state": l.value ? "open" : "closed",
              "data-disabled": i.disabled ? "" : void 0,
              disabled: i.disabled,
              "data-value": unref(e).value,
              "data-radix-vue-collection-item": "",
              onPointerdown: u[0] || (u[0] = (d) => {
                !i.disabled && d.button === 0 && d.ctrlKey === false && (unref(t).onMenuOpen(unref(e).value), l.value || d.preventDefault());
              }),
              onPointerenter: u[1] || (u[1] = () => {
                var p;
                !!unref(t).modelValue.value && !l.value && (unref(t).onMenuOpen(unref(e).value), (p = unref(s)) == null || p.focus());
              }),
              onKeydown: u[2] || (u[2] = withKeys((d) => {
                i.disabled || (["Enter", " "].includes(d.key) && unref(t).onMenuToggle(unref(e).value), d.key === "ArrowDown" && unref(t).onMenuOpen(unref(e).value), ["Enter", " ", "ArrowDown"].includes(d.key) && (unref(e).wasKeyboardTriggerOpenRef.value = true, d.preventDefault()));
              }, ["enter", "space", "arrow-down"])),
              onFocus: u[3] || (u[3] = (d) => r.value = true),
              onBlur: u[4] || (u[4] = (d) => r.value = false)
            }, {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 8, ["id", "as", "type", "aria-expanded", "aria-controls", "data-highlighted", "data-state", "data-disabled", "disabled", "data-value"])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["focusable", "tab-stop-id"]));
  }
}), $d = /* @__PURE__ */ defineComponent({
  __name: "MenubarPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Vo), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xd = /* @__PURE__ */ defineComponent({
  __name: "MenubarContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t);
    $();
    const r = Mt(), l = zo(), { injectCollection: i } = fe("menubar"), u = i(), d = ref(false);
    function p(c) {
      const v = c.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ), C = (r.dir.value === "rtl" ? "ArrowRight" : "ArrowLeft") === c.key;
      if (!C && v)
        return;
      let _ = u.value.map((O) => O.dataset.value);
      C && _.reverse();
      const x = _.indexOf(l.value);
      _ = r.loop.value ? yo(_, x + 1) : _.slice(x + 1);
      const [B] = _;
      B && r.onMenuOpen(B);
    }
    return (c, f) => (openBlock(), createBlock(unref(Mo), mergeProps({
      id: unref(l).contentId
    }, unref(s), {
      "aria-labelledby": unref(l).triggerId,
      "data-radix-menubar-content": "",
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onCloseAutoFocus: f[0] || (f[0] = (v) => {
        var C;
        !!!unref(r).modelValue.value && !d.value && ((C = unref(l).triggerElement.value) == null || C.focus()), d.value = false, v.preventDefault();
      }),
      onFocusOutside: f[1] || (f[1] = (v) => {
        const y = v.target;
        unref(u).some((E) => E.contains(y)) && v.preventDefault();
      }),
      onInteractOutside: f[2] || (f[2] = (v) => {
        d.value = true;
      }),
      onEntryFocus: f[3] || (f[3] = (v) => {
        unref(l).wasKeyboardTriggerOpenRef.value || v.preventDefault();
      }),
      onKeydown: withKeys(p, ["arrow-right", "arrow-left"])
    }), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "style"]));
  }
}), Pd = /* @__PURE__ */ defineComponent({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    return $(), (r, l) => (openBlock(), createBlock(unref(vt), normalizeProps(guardReactiveProps({ ...e, ...unref(s) })), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sd = /* @__PURE__ */ defineComponent({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Ko), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Td = /* @__PURE__ */ defineComponent({
  __name: "MenubarCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select", "update:checked"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Ro), normalizeProps(guardReactiveProps({ ...e, ...unref(s) })), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dd = /* @__PURE__ */ defineComponent({
  __name: "MenubarItemIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Ao), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Id = /* @__PURE__ */ defineComponent({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, s = de(t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Fo), normalizeProps(guardReactiveProps({ ...e, ...unref(s) })), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ad = /* @__PURE__ */ defineComponent({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t);
    return $(), (r, l) => (openBlock(), createBlock(unref(Lo), normalizeProps(guardReactiveProps(unref(s))), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Rd = /* @__PURE__ */ defineComponent({
  __name: "MenubarSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, a = t;
    $();
    const s = X(e, "open", a, {
      defaultValue: e.defaultOpen ?? false,
      passive: e.open === void 0
    });
    return (r, l) => (openBlock(), createBlock(unref(No), {
      open: unref(s),
      "onUpdate:open": l[0] || (l[0] = (i) => isRef(s) ? s.value = i : null)
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["open"]));
  }
}), Md = /* @__PURE__ */ defineComponent({
  __name: "MenubarSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t);
    $();
    const { injectCollection: r } = fe("menubar"), l = Mt(), i = zo(), u = r();
    function d(p) {
      if (p.target.hasAttribute(
        "data-radix-menubar-subtrigger"
      ))
        return;
      let v = u.value.map((E) => E.dataset.value);
      const y = v.indexOf(i.value);
      v = l.loop.value ? yo(v, y + 1) : v.slice(y + 1);
      const [C] = v;
      C && l.onMenuOpen(C);
    }
    return (p, c) => (openBlock(), createBlock(unref(Ho), mergeProps(unref(s), {
      "data-radix-menubar-content": "",
      style: {
        "--radix-menubar-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-menubar-content-available-width": "var(--radix-popper-available-width)",
        "--radix-menubar-content-available-height": "var(--radix-popper-available-height)",
        "--radix-menubar-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-menubar-trigger-height": "var(--radix-popper-anchor-height)"
      },
      onKeydown: withKeys(d, ["arrow-right"])
    }), {
      default: withCtx(() => [
        renderSlot(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), kd = /* @__PURE__ */ defineComponent({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(jo), mergeProps(t, { "data-radix-menubar-subtrigger": "" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Oe, Zn] = H(["NavigationMenuRoot", "NavigationMenuSub"], "NavigationMenuContext"), Vd = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuRoot",
  props: {
    modelValue: { default: void 0 },
    defaultValue: {},
    dir: {},
    orientation: { default: "horizontal" },
    delayDuration: { default: 200 },
    skipDelayDuration: { default: 300 },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, s = X(e, "modelValue", t, {
      defaultValue: e.defaultValue ?? "",
      passive: e.modelValue === void 0
    }), r = ref(""), { forwardRef: l, currentElement: i } = $(), u = ref(), d = ref(), { createCollection: p } = fe("nav");
    p(u);
    const { delayDuration: c, skipDelayDuration: f, dir: v } = toRefs(e), y = ue(v), C = St(false, f), E = computed(() => s.value !== "" || C.value ? 150 : c.value), _ = fo((x) => {
      r.value = s.value, s.value = x;
    }, E);
    return Zn({
      isRootMenu: true,
      modelValue: s,
      previousValue: r,
      baseId: ee(),
      dir: y,
      orientation: e.orientation,
      rootNavigationMenu: i,
      indicatorTrack: u,
      onIndicatorTrackChange: (x) => {
        u.value = x;
      },
      viewport: d,
      onViewportChange: (x) => {
        d.value = x;
      },
      onTriggerEnter: (x) => {
        _(x);
      },
      onTriggerLeave: () => {
        C.value = true, _("");
      },
      onContentEnter: (x) => {
        _(x);
      },
      onContentLeave: () => {
        _("");
      },
      onItemSelect: (x) => {
        r.value = s.value, s.value = x;
      },
      onItemDismiss: () => {
        r.value = s.value, s.value = "";
      }
    }), (x, B) => (openBlock(), createBlock(unref(D), {
      ref: unref(l),
      "aria-label": "Main",
      as: x.as,
      "as-child": x.asChild,
      "data-orientation": x.orientation,
      dir: unref(y)
    }, {
      default: withCtx(() => [
        renderSlot(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-orientation", "dir"]));
  }
});
function kt(o2) {
  return o2 ? "open" : "closed";
}
function Qn(o2, t) {
  return `${o2}-trigger-${t}`;
}
function Uo(o2, t) {
  return `${o2}-content-${t}`;
}
const Et = "navigationMenu.rootContentDismiss";
function ao(o2) {
  const t = [], e = document.createTreeWalker(o2, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const s = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || s ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; e.nextNode(); )
    t.push(e.currentNode);
  return t;
}
function ea(o2) {
  const t = document.activeElement;
  return o2.some((e) => e === t ? true : (e.focus(), document.activeElement !== t));
}
function rl(o2) {
  return o2.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    o2.forEach((t) => {
      const e = t.dataset.tabindex;
      t.setAttribute("tabindex", e);
    });
  };
}
const [qo, ll] = H("NavigationMenuItem"), Fd = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  setup(o2) {
    const t = o2;
    $();
    const { injectCollection: e } = fe("nav"), a = e(), s = Oe(), r = t.value || ee(), l = ref(), i = ref(), u = Uo(s.baseId, r);
    let d = () => ({});
    const p = ref(false);
    async function c(C = "start") {
      const E = document.getElementById(u);
      if (E) {
        d();
        const _ = ao(E);
        _.length && ea(C === "start" ? _ : _.reverse());
      }
    }
    function f() {
      const C = document.getElementById(u);
      if (C) {
        const E = ao(C);
        E.length && (d = rl(E));
      }
    }
    ll({
      value: r,
      contentId: u,
      triggerRef: l,
      focusProxyRef: i,
      wasEscapeCloseRef: p,
      onEntryKeyDown: c,
      onFocusProxyEnter: c,
      onContentFocusOutside: f,
      onRootContentClose: f
    });
    function v() {
      var C;
      s.onItemDismiss(), (C = l.value) == null || C.focus();
    }
    function y(C) {
      const E = document.activeElement;
      if (C.keyCode === 32 || C.key === "Enter")
        if (s.modelValue.value === r) {
          v(), C.preventDefault();
          return;
        } else {
          C.target.click(), C.preventDefault();
          return;
        }
      const _ = a.value.filter(
        (B) => {
          var O;
          return (O = B.parentElement) == null ? void 0 : O.hasAttribute("data-menu-item");
        }
      ), x = Ye(C, E, void 0, {
        itemsArray: _,
        loop: false
      });
      x && (x == null || x.focus()), C.preventDefault(), C.stopPropagation();
    }
    return (C, E) => (openBlock(), createBlock(unref(D), {
      "as-child": C.asChild,
      as: C.as,
      "data-menu-item": "",
      onKeydown: withKeys(y, ["up", "down", "left", "right", "home", "end", "space"])
    }, {
      default: withCtx(() => [
        renderSlot(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), il = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuContentImpl",
  props: {
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { injectCollection: s } = fe("nav"), r = s(), { forwardRef: l, currentElement: i } = $(), u = Oe(), d = qo(), p = Qn(u.baseId, d.value), c = Uo(u.baseId, d.value), f = ref(null), v = computed(() => {
      const O = r.value.map((I) => I.id.split("trigger-")[1]);
      u.dir.value === "rtl" && O.reverse();
      const A = O.indexOf(u.modelValue.value), M = O.indexOf(u.previousValue.value), R = d.value === u.modelValue.value, V = M === O.indexOf(d.value);
      if (!R && !V)
        return f.value;
      const j = (() => {
        if (A !== M) {
          if (R && M !== -1)
            return A > M ? "from-end" : "from-start";
          if (V && A !== -1)
            return A > M ? "to-start" : "to-end";
        }
        return null;
      })();
      return f.value = j, j;
    });
    function y(B) {
      var O, A;
      if (a("focusOutside", B), a("interactOutside", B), !B.defaultPrevented) {
        d.onContentFocusOutside();
        const M = B.target;
        (A = (O = u.rootNavigationMenu) == null ? void 0 : O.value) != null && A.contains(M) && B.preventDefault();
      }
    }
    function C(B) {
      var O;
      if (a("pointerDownOutside", B), !B.defaultPrevented) {
        const A = B.target, M = r.value.some(
          (V) => V.contains(A)
        ), R = u.isRootMenu && ((O = u.viewport.value) == null ? void 0 : O.contains(A));
        (M || R || !u.isRootMenu) && B.preventDefault();
      }
    }
    watchEffect((B) => {
      const O = i.value;
      if (u.isRootMenu && O) {
        const A = () => {
          var M;
          d.onRootContentClose(), O.contains(document.activeElement) && ((M = d.triggerRef.value) == null || M.focus());
        };
        O.addEventListener(Et, A), B(
          () => O.removeEventListener(Et, A)
        );
      }
    });
    function E(B) {
      var O, A;
      a("escapeKeyDown", B), B.defaultPrevented || (u.onItemDismiss(), (A = (O = d.triggerRef) == null ? void 0 : O.value) == null || A.focus(), d.wasEscapeCloseRef.value = true);
    }
    function _(B) {
      var V;
      const O = B.altKey || B.ctrlKey || B.metaKey, A = B.key === "Tab" && !O, M = ao(B.currentTarget);
      if (A) {
        const j = document.activeElement, I = M.findIndex(
          (F) => F === j
        ), W = B.shiftKey ? M.slice(0, I).reverse() : M.slice(I + 1, M.length);
        if (ea(W))
          B.preventDefault();
        else {
          (V = d.focusProxyRef.value) == null || V.focus();
          return;
        }
      }
      const R = Ye(
        B,
        document.activeElement,
        void 0,
        { itemsArray: M, loop: false, enableIgnoredElement: true }
      );
      R == null || R.focus();
    }
    function x() {
      var O;
      const B = new Event(Et, {
        bubbles: true,
        cancelable: true
      });
      (O = i.value) == null || O.dispatchEvent(B);
    }
    return (B, O) => (openBlock(), createBlock(unref(De), mergeProps({
      id: unref(c),
      ref: unref(l),
      "aria-labelledby": unref(p),
      "data-motion": v.value,
      "data-state": unref(kt)(unref(u).modelValue.value === unref(d).value),
      "data-orientation": unref(u).orientation
    }, e, {
      onKeydown: _,
      onEscapeKeyDown: E,
      onPointerDownOutside: C,
      onFocusOutside: y,
      onDismiss: x
    }), {
      default: withCtx(() => [
        renderSlot(B.$slots, "default")
      ]),
      _: 3
    }, 16, ["id", "aria-labelledby", "data-motion", "data-state", "data-orientation"]));
  }
}), Ld = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = de(a), { forwardRef: r } = $(), l = Tt(), i = Oe(), u = qo(), d = computed(() => u.value === i.modelValue.value), p = computed(() => !i.modelValue.value && i.previousValue.value ? i.previousValue.value === u.value : false);
    function c(f) {
      a("pointerDownOutside", f), f.preventDefault || i.onContentLeave();
    }
    return (f, v) => unref(l) ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(i).viewport.value,
      disabled: !unref(i).viewport.value
    }, [
      createVNode(unref(ae), {
        present: f.forceMount || d.value || p.value
      }, {
        default: withCtx(() => [
          createVNode(il, mergeProps({
            ref: unref(r),
            "data-state": unref(kt)(d.value),
            style: {
              pointerEvents: !d.value && unref(i).isRootMenu ? "none" : void 0
            }
          }, { ...f.$attrs, ...e, ...unref(s) }, {
            onPointerenter: v[0] || (v[0] = (y) => unref(i).onContentEnter(unref(u).value)),
            onPointerleave: v[1] || (v[1] = (y) => unref(i).onContentLeave()),
            onPointerdown: c,
            onFocusOutside: v[2] || (v[2] = (y) => a("focusOutside", y)),
            onInteractOutside: v[3] || (v[3] = (y) => a("interactOutside", y))
          }), {
            default: withCtx(() => [
              renderSlot(f.$slots, "default")
            ]),
            _: 3
          }, 16, ["data-state", "style"])
        ]),
        _: 3
      }, 8, ["present"])
    ], 8, ["to", "disabled"])) : createCommentVNode("", true);
  }
}), Kd = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { forwardRef: e } = $(), { injectCollection: a } = fe("nav"), s = a(), r = Oe(), l = ref(), i = computed(() => r.orientation === "horizontal"), u = computed(() => !!r.modelValue.value), d = ref();
    function p() {
      d.value && (l.value = {
        size: i.value ? d.value.offsetWidth : d.value.offsetHeight,
        offset: i.value ? d.value.offsetLeft : d.value.offsetTop
      });
    }
    return watchEffect(() => {
      if (!r.modelValue.value) {
        l.value = void 0;
        return;
      }
      const c = s.value;
      d.value = c.find(
        (f) => f.id.includes(r.modelValue.value)
      ), p();
    }), be(d, p), be(r.indicatorTrack, p), (c, f) => unref(r).indicatorTrack.value ? (openBlock(), createBlock(Teleport, {
      key: 0,
      to: unref(r).indicatorTrack.value
    }, [
      createVNode(unref(ae), {
        present: c.forceMount || u.value
      }, {
        default: withCtx(() => {
          var v, y, C, E;
          return [
            createVNode(unref(D), mergeProps({
              ref: unref(e),
              "aria-hidden": "",
              "data-state": u.value ? "visible" : "hidden",
              "data-orientation": unref(r).orientation,
              "as-child": t.asChild,
              as: c.as,
              style: {
                position: "absolute",
                ...i.value ? {
                  left: 0,
                  width: `${(v = l.value) == null ? void 0 : v.size}px`,
                  transform: `translateX(${(y = l.value) == null ? void 0 : y.offset}px)`
                } : {
                  top: 0,
                  height: `${(C = l.value) == null ? void 0 : C.size}px`,
                  transform: `translateY(${(E = l.value) == null ? void 0 : E.offset}px)`
                }
              }
            }, c.$attrs), {
              default: withCtx(() => [
                renderSlot(c.$slots, "default")
              ]),
              _: 3
            }, 16, ["data-state", "data-orientation", "as-child", "as", "style"])
          ];
        }),
        _: 3
      }, 8, ["present"])
    ], 8, ["to"])) : createCommentVNode("", true);
  }
}), Nd = /* @__PURE__ */ defineComponent({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  emits: ["select"],
  setup(o2, { emit: t }) {
    const e = o2, a = t;
    $();
    async function s(r) {
      var l;
      if (a("select", r), await nextTick(), !r.defaultPrevented && !r.metaKey) {
        const i = new CustomEvent(
          Et,
          {
            bubbles: true,
            cancelable: true
          }
        );
        (l = r.target) == null || l.dispatchEvent(i);
      }
    }
    return (r, l) => (openBlock(), createBlock(unref(D), {
      as: r.as,
      "data-active": r.active ? "" : void 0,
      "aria-current": r.active ? "page" : void 0,
      "as-child": e.asChild,
      "data-radix-vue-collection-item": "",
      onClick: s
    }, {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "data-active", "aria-current", "as-child"]));
  }
}), Hd = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: { default: "ul" }
  },
  setup(o2) {
    const t = o2, e = Oe(), { forwardRef: a, currentElement: s } = $();
    return onMounted(() => {
      e.onIndicatorTrackChange(s.value);
    }), (r, l) => (openBlock(), createBlock(unref(D), {
      ref: unref(a),
      style: { position: "relative" }
    }, {
      default: withCtx(() => [
        createVNode(unref(D), mergeProps(r.$attrs, {
          "as-child": t.asChild,
          as: r.as,
          "data-orientation": unref(e).orientation
        }), {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 16, ["as-child", "as", "data-orientation"])
      ]),
      _: 3
    }, 512));
  }
}), ul = ["aria-owns"], Wd = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, e = Oe(), a = qo(), { forwardRef: s, currentElement: r } = $(), l = ref(""), i = ref(""), u = St(false, 300), d = ref(false), p = computed(() => a.value === e.modelValue.value);
    onMounted(() => {
      a.triggerRef = r, l.value = Qn(e.baseId, a.value), i.value = Uo(e.baseId, a.value);
    });
    function c() {
      d.value = false, a.wasEscapeCloseRef.value = false;
    }
    function f(x) {
      if (x.pointerType === "mouse") {
        if (t.disabled || d.value || a.wasEscapeCloseRef.value || u.value)
          return;
        e.onTriggerEnter(a.value), u.value = true;
      }
    }
    function v(x) {
      if (x.pointerType === "mouse") {
        if (t.disabled)
          return;
        e.onTriggerLeave(), u.value = false;
      }
    }
    function y() {
      u.value || (p.value ? e.onItemSelect("") : e.onItemSelect(a.value), d.value = p.value);
    }
    function C(x) {
      const O = { horizontal: "ArrowDown", vertical: e.dir.value === "rtl" ? "ArrowLeft" : "ArrowRight" }[e.orientation];
      p.value && x.key === O && (a.onEntryKeyDown(), x.preventDefault(), x.stopPropagation());
    }
    function E(x) {
      a.focusProxyRef.value = ve(x);
    }
    function _(x) {
      const B = document.getElementById(a.contentId), O = x.relatedTarget, A = O === r.value, M = B == null ? void 0 : B.contains(O);
      (A || !M) && a.onFocusProxyEnter(A ? "start" : "end");
    }
    return (x, B) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(D), mergeProps({
        id: l.value,
        ref: unref(s),
        disabled: x.disabled,
        "data-disabled": x.disabled ? "" : void 0,
        "data-state": unref(kt)(p.value),
        "aria-expanded": p.value,
        "aria-controls": i.value,
        "as-child": t.asChild,
        as: x.as
      }, x.$attrs, {
        "data-radix-vue-collection-item": "",
        onPointerenter: c,
        onPointermove: f,
        onPointerleave: v,
        onClick: y,
        onKeydown: C
      }), {
        default: withCtx(() => [
          renderSlot(x.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "disabled", "data-disabled", "data-state", "aria-expanded", "aria-controls", "as-child", "as"]),
      p.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createVNode(unref(Je), {
          ref: E,
          "aria-hidden": "",
          tabindex: 0,
          onFocus: _
        }),
        unref(e).viewport ? (openBlock(), createElementBlock("span", {
          key: 0,
          "aria-owns": i.value
        }, null, 8, ul)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true)
    ], 64));
  }
}), zd = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const { forwardRef: t, currentElement: e } = $(), a = Oe(), s = ref(), r = computed(() => !!a.modelValue.value), l = computed(() => a.modelValue.value);
    watch(e, () => {
      e.value && a.onViewportChange(e.value);
    });
    const i = ref();
    return watch([l, r], async () => {
      var d, p;
      if (await nextTick(), !e.value)
        return;
      const u = (p = (d = e.value.querySelector("[data-state=open]")) == null ? void 0 : d.children) == null ? void 0 : p[0];
      i.value = u;
    }, { immediate: true }), be(i, () => {
      i.value && (s.value = {
        width: i.value.offsetWidth,
        height: i.value.offsetHeight
      });
    }), (u, d) => (openBlock(), createBlock(unref(ae), {
      present: u.forceMount || r.value
    }, {
      default: withCtx(() => {
        var p, c;
        return [
          createVNode(unref(D), mergeProps(u.$attrs, {
            ref: unref(t),
            as: u.as,
            "as-child": u.asChild,
            "data-state": unref(kt)(r.value),
            "data-orientation": unref(a).orientation,
            style: {
              // Prevent interaction when animating out
              pointerEvents: !r.value && unref(a).isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": s.value ? `${(p = s.value) == null ? void 0 : p.width}px` : void 0,
              "--radix-navigation-menu-viewport-height": s.value ? `${(c = s.value) == null ? void 0 : c.height}px` : void 0
            },
            onPointerenter: d[0] || (d[0] = (f) => unref(a).onContentEnter(unref(a).modelValue.value)),
            onPointerleave: d[1] || (d[1] = (f) => unref(a).onContentLeave())
          }), {
            default: withCtx(() => [
              renderSlot(u.$slots, "default")
            ]),
            _: 3
          }, 16, ["as", "as-child", "data-state", "data-orientation", "style"])
        ];
      }),
      _: 3
    }, 8, ["present"]));
  }
}), [et, dl] = H("PaginationRoot"), Ud = /* @__PURE__ */ defineComponent({
  __name: "PaginationRoot",
  props: {
    page: {},
    defaultPage: { default: 1 },
    itemsPerPage: { default: 10 },
    total: { default: 0 },
    siblingCount: { default: 2 },
    disabled: { type: Boolean },
    showEdges: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "nav" }
  },
  emits: ["update:page"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { siblingCount: s, disabled: r, showEdges: l } = toRefs(e);
    $();
    const i = X(e, "page", a, {
      defaultValue: e.defaultPage,
      passive: e.page === void 0
    }), u = computed(() => Math.ceil(e.total / e.itemsPerPage));
    return dl({
      page: i,
      onPageChange(d) {
        i.value = d;
      },
      pageCount: u,
      siblingCount: s,
      disabled: r,
      showEdges: l
    }), (d, p) => (openBlock(), createBlock(unref(D), {
      as: d.as,
      "as-child": d.asChild
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default", {
          page: unref(i),
          pageCount: u.value
        })
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), qd = /* @__PURE__ */ defineComponent({
  __name: "PaginationEllipsis",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(D), mergeProps(t, { "data-type": "ellipsis" }), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default", {}, () => [
          createTextVNode("…")
        ])
      ]),
      _: 3
    }, 16));
  }
}), Gd = /* @__PURE__ */ defineComponent({
  __name: "PaginationFirst",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, e = et();
    return $(), (a, s) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      "aria-label": "First Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: unref(e).page.value === 1 || unref(e).disabled.value,
      onClick: s[0] || (s[0] = (r) => unref(e).onPageChange(1))
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default", {}, () => [
          createTextVNode("First page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Yd = /* @__PURE__ */ defineComponent({
  __name: "PaginationLast",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, e = et();
    return $(), (a, s) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      "aria-label": "Last Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: unref(e).page.value === unref(e).pageCount.value || unref(e).disabled.value,
      onClick: s[0] || (s[0] = (r) => unref(e).onPageChange(unref(e).pageCount.value))
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default", {}, () => [
          createTextVNode("Last page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
});
function Ee(o2, t) {
  const e = t - o2 + 1;
  return Array.from({ length: e }, (a, s) => s + o2);
}
function cl(o2) {
  return o2.map((t) => typeof t == "number" ? { type: "page", value: t } : { type: "ellipsis" });
}
const wt = "ellipsis";
function pl(o2, t, e, a) {
  const r = t, l = Math.max(o2 - e, 1), i = Math.min(o2 + e, r), u = l > 1 + 2, d = i < r - 2;
  if (a) {
    const c = Math.min(2 * e + 5, t) - 2;
    if (!u && d)
      return [...Ee(1, c), wt, r];
    if (u && !d) {
      const v = Ee(r - c + 1, r);
      return [1, wt, ...v];
    }
    if (u && d) {
      const v = Ee(l, i);
      return [1, wt, ...v, wt, r];
    }
    return Ee(1, r);
  } else {
    const p = e * 2 + 1;
    return t < p ? Ee(1, r) : o2 <= e + 1 ? Ee(1, p) : t - o2 <= e ? Ee(t - p + 1, r) : Ee(l, i);
  }
}
const Xd = /* @__PURE__ */ defineComponent({
  __name: "PaginationList",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    $();
    const e = et(), a = computed(() => cl(
      pl(
        e.page.value,
        e.pageCount.value,
        e.siblingCount.value,
        e.showEdges.value
      )
    ));
    return (s, r) => (openBlock(), createBlock(unref(D), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", { items: a.value })
      ]),
      _: 3
    }, 16));
  }
}), Jd = /* @__PURE__ */ defineComponent({
  __name: "PaginationListItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = et(), a = computed(() => e.page.value === t.value);
    return (s, r) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      "data-type": "page",
      "aria-label": `Page ${s.value}`,
      "aria-current": a.value ? "page" : void 0,
      "data-selected": a.value ? "true" : void 0,
      disabled: unref(e).disabled.value,
      type: s.as === "button" ? "button" : void 0,
      onClick: r[0] || (r[0] = (l) => unref(e).onPageChange(s.value))
    }), {
      default: withCtx(() => [
        renderSlot(s.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(s.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
  }
}), Zd = /* @__PURE__ */ defineComponent({
  __name: "PaginationNext",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = et();
    return (a, s) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      "aria-label": "Next Page",
      type: a.as === "button" ? "button" : void 0,
      disabled: unref(e).page.value === unref(e).pageCount.value || unref(e).disabled.value,
      onClick: s[0] || (s[0] = (r) => unref(e).onPageChange(unref(e).page.value + 1))
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default", {}, () => [
          createTextVNode("Next page")
        ])
      ]),
      _: 3
    }, 16, ["type", "disabled"]));
  }
}), Qd = /* @__PURE__ */ defineComponent({
  __name: "PaginationPrev",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = et();
    return (a, s) => {
      var r;
      return openBlock(), createBlock(unref(D), mergeProps(t, {
        "aria-label": "Previous Page",
        type: a.as === "button" ? "button" : void 0,
        disabled: unref(e).page.value === 1 || ((r = unref(e).disabled) == null ? void 0 : r.value),
        onClick: s[0] || (s[0] = (l) => unref(e).onPageChange(unref(e).page.value - 1))
      }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default", {}, () => [
            createTextVNode("Prev page")
          ])
        ]),
        _: 3
      }, 16, ["type", "disabled"]);
    };
  }
}), fl = ["id", "value", "name", "disabled", "required"], [vl, ml] = H("PinInputRoot"), ec = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "PinInputRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    placeholder: { default: "" },
    mask: { type: Boolean },
    otp: { type: Boolean },
    type: { default: "text" },
    dir: {},
    name: {},
    disabled: { type: Boolean },
    required: { type: Boolean },
    id: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "complete"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { mask: s, otp: r, placeholder: l, type: i, disabled: u, dir: d } = toRefs(e), { forwardRef: p } = $(), c = ue(d), f = X(e, "modelValue", a, {
      defaultValue: e.defaultValue ?? [],
      passive: e.modelValue === void 0
    }), v = ref(/* @__PURE__ */ new Set());
    function y(E) {
      v.value.add(E);
    }
    const C = computed(() => f.value.filter((_) => !!_).length === v.value.size);
    return watch(f, () => {
      C.value && a("complete", f.value);
    }, { deep: true }), ml({
      modelValue: f,
      mask: s,
      otp: r,
      placeholder: l,
      type: i,
      dir: c,
      disabled: u,
      isCompleted: C,
      inputElements: v,
      onInputElementChange: y
    }), (E, _) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(D), mergeProps(E.$attrs, {
        ref: unref(p),
        dir: unref(c),
        "data-complete": C.value ? "" : void 0,
        "data-disabled": unref(u) ? "" : void 0
      }), {
        default: withCtx(() => [
          renderSlot(E.$slots, "default", { modelValue: unref(f) })
        ]),
        _: 3
      }, 16, ["dir", "data-complete", "data-disabled"]),
      createElementVNode("input", {
        id: E.id,
        type: "text",
        tabindex: "-1",
        "aria-hidden": "",
        value: unref(f).join(""),
        name: E.name,
        disabled: unref(u),
        required: E.required,
        style: normalizeStyle({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }),
        onFocus: _[0] || (_[0] = (x) => {
          var B, O;
          return (O = (B = Array.from(v.value)) == null ? void 0 : B[0]) == null ? void 0 : O.focus();
        })
      }, null, 44, fl)
    ], 64));
  }
}), hl = ["autocomplete", "type", "inputmode", "pattern", "placeholder", "value", "disabled", "data-disabled", "data-complete", "aria-label"], tc = /* @__PURE__ */ defineComponent({
  __name: "PinInputInput",
  props: {
    index: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(o2) {
    const t = o2, e = vl(), a = computed(() => Array.from(e.inputElements.value)), s = computed(() => t.disabled || e.disabled.value), r = computed(() => e.otp.value), l = computed(() => e.type.value === "number"), i = computed(() => e.mask.value), u = ref();
    function d(_) {
      const x = _.target;
      if (l.value && !/^[0-9]*$/.test(x.value)) {
        x.value = x.value.replace(/\D/g, "");
        return;
      }
      x.value = x.value.slice(-1), E(t.index, x.value);
      const B = a.value[t.index + 1];
      B && B.focus();
    }
    function p(_) {
      Ye(_, document.activeElement, void 0, {
        itemsArray: a.value,
        focus: true,
        loop: false,
        arrowKeyOptions: "horizontal",
        dir: e.dir.value
      });
    }
    function c(_) {
      if (_.preventDefault(), _.target.value)
        E(t.index, "");
      else {
        const O = a.value[t.index - 1];
        O && (O.focus(), E(t.index - 1, ""));
      }
    }
    function f(_) {
      _.key === "Delete" && (_.preventDefault(), E(t.index, ""));
    }
    function v(_) {
      const x = _.target;
      x.setSelectionRange(1, 1), x.value || (x.placeholder = "");
    }
    function y(_) {
      const x = _.target;
      nextTick(() => {
        x.value || (x.placeholder = e.placeholder.value);
      });
    }
    function C(_) {
      var R;
      _.preventDefault();
      const x = _.clipboardData;
      if (!x)
        return;
      const B = [...e.modelValue.value], O = x.getData("text"), A = O.length >= a.value.length ? 0 : t.index, M = Math.min(A + O.length, a.value.length);
      for (let V = A; V < M; V++) {
        const j = a.value[V], I = O[V - A];
        l.value && !/^[0-9]*$/.test(I) || (B[V] = I, j.focus());
      }
      e.modelValue.value = B, (R = a.value[M]) == null || R.focus();
    }
    function E(_, x) {
      const B = [...e.modelValue.value];
      B[_] = x, e.modelValue.value = B;
    }
    return onMounted(() => {
      e.onInputElementChange(u.value);
    }), onUnmounted(() => {
      var _;
      (_ = e.inputElements) == null || _.value.delete(u.value);
    }), (_, x) => (openBlock(), createElementBlock("input", {
      ref_key: "inputRef",
      ref: u,
      autocapitalize: "none",
      autocomplete: r.value ? "one-time-code" : "false",
      type: i.value ? "password" : "text",
      inputmode: l.value ? "numeric" : "text",
      pattern: l.value ? "[0-9]*" : void 0,
      placeholder: unref(e).placeholder.value,
      value: unref(e).modelValue.value.at(_.index),
      disabled: s.value,
      "data-disabled": s.value ? "" : void 0,
      "data-complete": unref(e).isCompleted.value ? "" : void 0,
      "aria-label": `pin input ${_.index + 1} of ${a.value.length}`,
      onInput: d,
      onKeydown: [
        withKeys(p, ["left", "right", "up", "down", "home", "end"]),
        withKeys(c, ["backspace"]),
        withKeys(f, ["delete"])
      ],
      onFocus: v,
      onBlur: y,
      onPaste: C
    }, null, 40, hl));
  }
}), [ze, gl] = H("PopoverRoot"), oc = /* @__PURE__ */ defineComponent({
  __name: "PopoverRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    modal: { type: Boolean, default: false }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { modal: s } = toRefs(e), r = X(e, "open", a, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), l = ref(), i = ref(false);
    return gl({
      contentId: ee(),
      modal: s,
      open: r,
      onOpenChange: (u) => {
        r.value = u;
      },
      onOpenToggle: () => {
        r.value = !r.value;
      },
      triggerElement: l,
      hasCustomAnchor: i
    }), (u, d) => (openBlock(), createBlock(unref(He), null, {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }));
  }
}), nc = /* @__PURE__ */ defineComponent({
  __name: "PopoverTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, e = ze(), { forwardRef: a, currentElement: s } = $();
    return onMounted(() => {
      e.triggerElement.value = s.value;
    }), (r, l) => (openBlock(), createBlock(resolveDynamicComponent(unref(e).hasCustomAnchor.value ? unref(D) : unref(je)), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          ref: unref(a),
          type: r.as === "button" ? "button" : void 0,
          "aria-haspopup": "dialog",
          "aria-expanded": unref(e).open.value,
          "aria-controls": unref(e).contentId,
          "data-state": unref(e).open.value ? "open" : "closed",
          as: r.as,
          "as-child": t.asChild,
          onClick: unref(e).onOpenToggle
        }, {
          default: withCtx(() => [
            renderSlot(r.$slots, "default")
          ]),
          _: 3
        }, 8, ["type", "aria-expanded", "aria-controls", "data-state", "as", "as-child", "onClick"])
      ]),
      _: 3
    }));
  }
}), ac = /* @__PURE__ */ defineComponent({
  __name: "PopoverPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Te), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ta = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentImpl",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = Ne(e), { forwardRef: r } = $(), l = ze();
    return ho(), (i, u) => (openBlock(), createBlock(unref(It), {
      "as-child": "",
      loop: "",
      trapped: i.trapFocus,
      onMountAutoFocus: u[5] || (u[5] = (d) => a("openAutoFocus", d)),
      onUnmountAutoFocus: u[6] || (u[6] = (d) => a("closeAutoFocus", d))
    }, {
      default: withCtx(() => [
        createVNode(unref(De), {
          "as-child": "",
          "disable-outside-pointer-events": i.disableOutsidePointerEvents,
          onPointerDownOutside: u[0] || (u[0] = (d) => a("pointerDownOutside", d)),
          onInteractOutside: u[1] || (u[1] = (d) => a("interactOutside", d)),
          onEscapeKeyDown: u[2] || (u[2] = (d) => a("escapeKeyDown", d)),
          onFocusOutside: u[3] || (u[3] = (d) => a("focusOutside", d)),
          onDismiss: u[4] || (u[4] = (d) => unref(l).onOpenChange(false))
        }, {
          default: withCtx(() => [
            createVNode(unref(Fe), mergeProps(unref(s), {
              id: unref(l).contentId,
              ref: unref(r),
              "data-state": unref(l).open.value ? "open" : "closed",
              role: "dialog",
              style: {
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
              }
            }), {
              default: withCtx(() => [
                renderSlot(i.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "style"])
          ]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])
      ]),
      _: 3
    }, 8, ["trapped"]));
  }
}), yl = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = ze(), r = ref(false);
    ct(true);
    const l = ne(e, a), { forwardRef: i, currentElement: u } = $();
    return pt(u), (d, p) => (openBlock(), createBlock(ta, mergeProps(unref(l), {
      ref: unref(i),
      "trap-focus": unref(s).open.value,
      "disable-outside-pointer-events": "",
      onCloseAutoFocus: p[0] || (p[0] = withModifiers(
        (c) => {
          var f;
          a("closeAutoFocus", c), r.value || (f = unref(s).triggerElement.value) == null || f.focus();
        },
        ["prevent"]
      )),
      onPointerDownOutside: p[1] || (p[1] = (c) => {
        a("pointerDownOutside", c);
        const f = c.detail.originalEvent, v = f.button === 0 && f.ctrlKey === true, y = f.button === 2 || v;
        r.value = y;
      }),
      onFocusOutside: p[2] || (p[2] = withModifiers(() => {
      }, ["prevent"]))
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["trap-focus"]));
  }
}), bl = /* @__PURE__ */ defineComponent({
  __name: "PopoverContentNonModal",
  props: {
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = ze(), r = ref(false), l = ref(false), i = ne(e, a);
    return (u, d) => (openBlock(), createBlock(ta, mergeProps(unref(i), {
      "trap-focus": false,
      "disable-outside-pointer-events": false,
      onCloseAutoFocus: d[0] || (d[0] = (p) => {
        var c;
        a("closeAutoFocus", p), p.defaultPrevented || (r.value || (c = unref(s).triggerElement.value) == null || c.focus(), p.preventDefault()), r.value = false, l.value = false;
      }),
      onInteractOutside: d[1] || (d[1] = async (p) => {
        var v;
        a("interactOutside", p), p.defaultPrevented || (r.value = true, p.detail.originalEvent.type === "pointerdown" && (l.value = true));
        const c = p.target;
        ((v = unref(s).triggerElement.value) == null ? void 0 : v.contains(c)) && p.preventDefault(), p.detail.originalEvent.type === "focusin" && l.value && p.preventDefault();
      })
    }), {
      default: withCtx(() => [
        renderSlot(u.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sc = /* @__PURE__ */ defineComponent({
  __name: "PopoverContent",
  props: {
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    disableOutsidePointerEvents: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = ze(), r = ne(e, a), { forwardRef: l } = $();
    return (i, u) => (openBlock(), createBlock(unref(ae), {
      present: i.forceMount || unref(s).open.value
    }, {
      default: withCtx(() => [
        unref(s).modal.value ? (openBlock(), createBlock(yl, mergeProps({ key: 0 }, unref(r), { ref: unref(l) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)) : (openBlock(), createBlock(bl, mergeProps({ key: 1 }, unref(r), { ref: unref(l) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16))
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), rc = /* @__PURE__ */ defineComponent({
  __name: "PopoverArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Xe), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lc = /* @__PURE__ */ defineComponent({
  __name: "PopoverClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = ze();
    return (a, s) => (openBlock(), createBlock(unref(D), {
      type: a.as === "button" ? "button" : void 0,
      as: a.as,
      "as-child": t.asChild,
      onClick: s[0] || (s[0] = (r) => unref(e).onOpenChange(false))
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as", "as-child"]));
  }
}), rt = 100, [Cl, wl] = H("ProgressRoot"), Go = (o2) => typeof o2 == "number";
function _l(o2, t) {
  return o2 === null || Go(o2) && !Number.isNaN(o2) && o2 <= t && o2 >= 0 ? o2 : (console.error(`Invalid prop \`value\` of value \`${o2}\` supplied to \`ProgressRoot\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${rt} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`), null);
}
function $l(o2) {
  return Go(o2) && !Number.isNaN(o2) && o2 > 0 ? o2 : (console.error(
    `Invalid prop \`max\` of value \`${o2}\` supplied to \`ProgressRoot\`. Only numbers greater than 0 are valid max values. Defaulting to \`${rt}\`.`
  ), rt);
}
const uc = /* @__PURE__ */ defineComponent({
  __name: "ProgressRoot",
  props: {
    modelValue: {},
    max: { default: rt },
    getValueLabel: { type: Function, default: (o2, t) => `${Math.round(o2 / t * rt)}%` },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "update:max"],
  setup(o2, { emit: t }) {
    const e = o2, a = t;
    $();
    const s = X(e, "modelValue", a, {
      passive: e.modelValue === void 0
    }), r = X(e, "max", a, {
      passive: e.max === void 0
    });
    watch(
      () => s.value,
      async (i) => {
        const u = _l(i, e.max);
        u !== i && (await nextTick(), s.value = u);
      },
      { immediate: true }
    ), watch(
      () => e.max,
      (i) => {
        const u = $l(e.max);
        u !== i && (r.value = u);
      },
      { immediate: true }
    );
    const l = computed(() => s.value ? s.value === r.value ? "complete" : "loading" : "indeterminate");
    return wl({
      modelValue: s,
      max: r,
      progressState: l
    }), (i, u) => (openBlock(), createBlock(unref(D), {
      "as-child": i.asChild,
      as: i.as,
      "aria-valuemax": unref(r),
      "aria-valuemin": 0,
      "aria-valuenow": Go(unref(s)) ? unref(s) : void 0,
      "aria-valuetext": i.getValueLabel(unref(s), unref(r)),
      "aria-label": i.getValueLabel(unref(s), unref(r)),
      role: "progressbar",
      "data-state": l.value,
      "data-value": unref(s) ?? void 0,
      "data-max": unref(r)
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-label", "data-state", "data-value", "data-max"]));
  }
}), dc = /* @__PURE__ */ defineComponent({
  __name: "ProgressIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = Cl();
    return $(), (a, s) => {
      var r;
      return openBlock(), createBlock(unref(D), mergeProps(t, {
        "data-state": unref(e).progressState.value,
        "data-value": ((r = unref(e).modelValue) == null ? void 0 : r.value) ?? void 0,
        "data-max": unref(e).max.value
      }), {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      }, 16, ["data-state", "data-value", "data-max"]);
    };
  }
}), [xl, El] = H("RadioGroupRoot"), cc = /* @__PURE__ */ defineComponent({
  __name: "RadioGroupRoot",
  props: {
    modelValue: {},
    defaultValue: {},
    disabled: { type: Boolean, default: false },
    name: {},
    required: { type: Boolean, default: false },
    orientation: { default: void 0 },
    dir: {},
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { forwardRef: s } = $(), r = X(e, "modelValue", a, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), { disabled: l, loop: i, orientation: u, name: d, required: p, dir: c } = toRefs(e), f = ue(c);
    return El({
      modelValue: r,
      changeModelValue: (v) => {
        r.value = v;
      },
      disabled: l,
      loop: i,
      orientation: u,
      name: d == null ? void 0 : d.value,
      required: p
    }), (v, y) => (openBlock(), createBlock(unref(Ze), {
      "as-child": "",
      orientation: unref(u),
      dir: unref(f),
      loop: unref(i)
    }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          ref: unref(s),
          role: "radiogroup",
          "data-disabled": unref(l) ? "" : void 0,
          "as-child": v.asChild,
          as: v.as,
          required: unref(p),
          "aria-orientation": unref(u),
          "aria-required": unref(p),
          dir: unref(f),
          name: unref(d)
        }, {
          default: withCtx(() => [
            renderSlot(v.$slots, "default")
          ]),
          _: 3
        }, 8, ["data-disabled", "as-child", "as", "required", "aria-orientation", "aria-required", "dir", "name"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), Pl = ["value", "checked", "name", "disabled", "required"], Bl = /* @__PURE__ */ defineComponent({
  __name: "Radio",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(o2, { emit: t }) {
    const e = o2, s = X(e, "checked", t, {
      passive: e.checked === void 0
    }), { value: r } = toRefs(e), { forwardRef: l, currentElement: i } = $(), u = Ke(i), d = computed(() => {
      var c;
      return e.id && i.value ? ((c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText) ?? e.value : void 0;
    });
    function p(c) {
      s.value = true, u.value && c.stopPropagation();
    }
    return (c, f) => (openBlock(), createBlock(unref(D), mergeProps(c.$attrs, {
      id: c.id,
      ref: unref(l),
      role: "radio",
      type: c.as === "button" ? "button" : void 0,
      as: c.as,
      "aria-checked": unref(s),
      "aria-label": d.value,
      "as-child": c.asChild,
      disabled: c.disabled ? true : void 0,
      "data-state": unref(s) ? "checked" : "unchecked",
      "data-disabled": c.disabled ? "" : void 0,
      value: unref(r),
      required: c.required,
      name: c.name,
      onClick: withModifiers(p, ["stop"])
    }), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default"),
        unref(u) ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "radio",
          tabindex: "-1",
          "aria-hidden": "",
          value: unref(r),
          checked: !!unref(s),
          name: c.name,
          disabled: c.disabled,
          required: c.required,
          style: normalizeStyle({
            transform: "translateX(-100%)",
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
          })
        }, null, 12, Pl)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 16, ["id", "type", "as", "aria-checked", "aria-label", "as-child", "disabled", "data-state", "data-disabled", "value", "required", "name"]));
  }
}), [Sl, Tl] = H("RadioGroupItem"), pc = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "RadioGroupItem",
  props: {
    id: {},
    value: {},
    disabled: { type: Boolean, default: false },
    required: { type: Boolean },
    name: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, { forwardRef: e, currentElement: a } = $(), s = xl(), r = computed(() => s.disabled.value || t.disabled), l = computed(() => s.required.value || t.required), i = computed(() => {
      var c;
      return ((c = s.modelValue) == null ? void 0 : c.value) === t.value;
    });
    Tl({ disabled: r, checked: i });
    const u = ref(false), d = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    Be("keydown", (c) => {
      d.includes(c.key) && (u.value = true);
    }), Be("keyup", () => {
      u.value = false;
    });
    function p() {
      setTimeout(() => {
        var c;
        u.value && ((c = a.value) == null || c.click());
      }, 0);
    }
    return (c, f) => (openBlock(), createBlock(unref(Qe), {
      checked: i.value,
      disabled: r.value,
      "as-child": "",
      focusable: !r.value,
      active: i.value
    }, {
      default: withCtx(() => [
        createVNode(Bl, mergeProps({ ...c.$attrs, ...t }, {
          ref: unref(e),
          checked: i.value,
          required: l.value,
          "onUpdate:checked": f[0] || (f[0] = (v) => unref(s).changeModelValue(c.value)),
          onKeydown: f[1] || (f[1] = withKeys(withModifiers(() => {
          }, ["prevent"]), ["enter"])),
          onFocus: p
        }), {
          default: withCtx(() => [
            renderSlot(c.$slots, "default")
          ]),
          _: 3
        }, 16, ["checked", "required"])
      ]),
      _: 3
    }, 8, ["checked", "disabled", "focusable", "active"]));
  }
}), fc = /* @__PURE__ */ defineComponent({
  __name: "RadioGroupIndicator",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const { forwardRef: t } = $(), e = Sl();
    return (a, s) => (openBlock(), createBlock(unref(ae), {
      present: a.forceMount || unref(e).checked.value
    }, {
      default: withCtx(() => [
        createVNode(unref(D), mergeProps({
          ref: unref(t),
          "data-state": unref(e).checked.value ? "checked" : "unchecked",
          "data-disabled": unref(e).disabled.value ? "" : void 0,
          "as-child": a.asChild,
          as: a.as
        }, a.$attrs), {
          default: withCtx(() => [
            renderSlot(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state", "data-disabled", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [me, Dl] = H("ScrollAreaRoot"), vc = /* @__PURE__ */ defineComponent({
  __name: "ScrollAreaRoot",
  props: {
    type: { default: "hover" },
    dir: {},
    scrollHideDelay: { default: 600 },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { forwardRef: e, currentElement: a } = $(), s = ref(0), r = ref(0), l = ref(), i = ref(), u = ref(), d = ref(), p = ref(false), c = ref(false), { type: f, dir: v, scrollHideDelay: y } = toRefs(t), C = ue(v);
    return Dl({
      type: f,
      dir: C,
      scrollHideDelay: y,
      scrollArea: a,
      viewport: l,
      onViewportChange: (E) => {
        l.value = E || void 0;
      },
      content: i,
      onContentChange: (E) => {
        i.value = E;
      },
      scrollbarX: u,
      scrollbarXEnabled: p,
      scrollbarY: d,
      scrollbarYEnabled: c,
      onScrollbarXChange: (E) => {
        u.value = E || void 0;
      },
      onScrollbarYChange: (E) => {
        d.value = E || void 0;
      },
      onScrollbarXEnabledChange: (E) => {
        p.value = E;
      },
      onScrollbarYEnabledChange: (E) => {
        c.value = E;
      },
      onCornerWidthChange: (E) => {
        s.value = E;
      },
      onCornerHeightChange: (E) => {
        r.value = E;
      }
    }), (E, _) => (openBlock(), createBlock(unref(D), {
      ref: unref(e),
      "as-child": t.asChild,
      as: E.as,
      dir: unref(C),
      style: normalizeStyle({
        position: "relative",
        // Pass corner sizes as CSS vars to reduce re-renders of context consumers
        "--radix-scroll-area-corner-width": `${s.value}px`,
        "--radix-scroll-area-corner-height": `${r.value}px`
      })
    }, {
      default: withCtx(() => [
        renderSlot(E.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "dir", "style"]));
  }
}), mc = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2, { expose: t }) {
    const e = o2, a = me(), s = ref();
    onMounted(() => {
      a.onViewportChange(s.value), a.onContentChange(l.value);
    }), t({
      viewportElement: s
    });
    const { forwardRef: r, currentElement: l } = $();
    return (i, u) => (openBlock(), createElementBlock(Fragment, null, [
      createElementVNode("div", mergeProps({
        ref_key: "viewportElement",
        ref: s,
        "data-radix-scroll-area-viewport": "",
        style: {
          /**
           * We don't support `visible` because the intention is to have at least one scrollbar
           * if this component is used and `visible` will behave like `auto` in that case
           * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
           *
           * We don't handle `auto` because the intention is for the native implementation
           * to be hidden if using this component. We just want to ensure the node is scrollable
           * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
           * the browser from having to work out whether to render native scrollbars or not,
           * we tell it to with the intention of hiding them in CSS.
           */
          overflowX: unref(a).scrollbarXEnabled.value ? "scroll" : "hidden",
          overflowY: unref(a).scrollbarYEnabled.value ? "scroll" : "hidden"
        }
      }, i.$attrs, { tabindex: 0 }), [
        createVNode(unref(D), {
          ref: unref(r),
          style: { minWidth: "100%", display: "table" },
          "as-child": e.asChild,
          as: i.as
        }, {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ], 16),
      createVNode(unref(D), { as: "style" }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-radix-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")
        ]),
        _: 1
      })
    ], 64));
  }
});
function Ol(o2, [t, e]) {
  return Math.min(e, Math.max(t, o2));
}
function oa(o2, t) {
  return (e) => {
    if (o2[0] === o2[1] || t[0] === t[1])
      return t[0];
    const a = (t[1] - t[0]) / (o2[1] - o2[0]);
    return t[0] + a * (e - o2[0]);
  };
}
function Vt(o2) {
  const t = na(o2.viewport, o2.content), e = o2.scrollbar.paddingStart + o2.scrollbar.paddingEnd, a = (o2.scrollbar.size - e) * t;
  return Math.max(a, 18);
}
function na(o2, t) {
  const e = o2 / t;
  return Number.isNaN(e) ? 0 : e;
}
function Il(o2, t = () => {
}) {
  let e = { left: o2.scrollLeft, top: o2.scrollTop }, a = 0;
  return function s() {
    const r = { left: o2.scrollLeft, top: o2.scrollTop }, l = e.left !== r.left, i = e.top !== r.top;
    (l || i) && t(), e = r, a = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(a);
}
function un(o2, t, e = "ltr") {
  const a = Vt(t), s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, r = t.scrollbar.size - s, l = t.content - t.viewport, i = r - a, u = e === "ltr" ? [0, l] : [l * -1, 0], d = Ol(
    o2,
    u
  );
  return oa([0, l], [0, i])(d);
}
function _t(o2) {
  return o2 ? Number.parseInt(o2, 10) : 0;
}
function Al(o2, t, e, a = "ltr") {
  const s = Vt(e), r = s / 2, l = t || r, i = s - l, u = e.scrollbar.paddingStart + l, d = e.scrollbar.size - e.scrollbar.paddingEnd - i, p = e.content - e.viewport, c = a === "ltr" ? [0, p] : [p * -1, 0];
  return oa(
    [u, d],
    c
  )(o2);
}
function dn(o2, t) {
  return o2 > 0 && o2 < t;
}
const aa = /* @__PURE__ */ defineComponent({
  __name: "ScrollAreaScrollbarImpl",
  props: {
    isHorizontal: { type: Boolean }
  },
  emits: ["onDragScroll", "onWheelScroll", "onThumbPointerDown"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = me(), r = Ft(), l = Lt(), { forwardRef: i, currentElement: u } = $(), d = ref(""), p = ref();
    function c(_) {
      var x, B;
      if (p.value) {
        const O = _.clientX - ((x = p.value) == null ? void 0 : x.left), A = _.clientY - ((B = p.value) == null ? void 0 : B.top);
        a("onDragScroll", { x: O, y: A });
      }
    }
    function f(_) {
      _.button === 0 && (_.target.setPointerCapture(_.pointerId), p.value = u.value.getBoundingClientRect(), d.value = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", s.viewport && (s.viewport.value.style.scrollBehavior = "auto"), c(_));
    }
    function v(_) {
      c(_);
    }
    function y(_) {
      const x = _.target;
      x.hasPointerCapture(_.pointerId) && x.releasePointerCapture(_.pointerId), document.body.style.webkitUserSelect = d.value, s.viewport && (s.viewport.value.style.scrollBehavior = ""), p.value = void 0;
    }
    function C(_) {
      var A;
      const x = _.target, B = (A = u.value) == null ? void 0 : A.contains(x), O = r.sizes.value.content - r.sizes.value.viewport;
      B && r.handleWheelScroll(_, O);
    }
    onMounted(() => {
      document.addEventListener("wheel", C, { passive: false });
    }), onUnmounted(() => {
      document.removeEventListener("wheel", C);
    });
    function E() {
      var _, x, B, O, A;
      u.value && (e.isHorizontal ? r.handleSizeChange({
        content: ((_ = s.viewport.value) == null ? void 0 : _.scrollWidth) ?? 0,
        viewport: ((x = s.viewport.value) == null ? void 0 : x.offsetWidth) ?? 0,
        scrollbar: {
          size: u.value.clientWidth ?? 0,
          paddingStart: _t(getComputedStyle(u.value).paddingLeft),
          paddingEnd: _t(getComputedStyle(u.value).paddingRight)
        }
      }) : r.handleSizeChange({
        content: ((B = s.viewport.value) == null ? void 0 : B.scrollHeight) ?? 0,
        viewport: ((O = s.viewport.value) == null ? void 0 : O.offsetHeight) ?? 0,
        scrollbar: {
          size: ((A = u.value) == null ? void 0 : A.clientHeight) ?? 0,
          paddingStart: _t(getComputedStyle(u.value).paddingLeft),
          paddingEnd: _t(getComputedStyle(u.value).paddingRight)
        }
      }));
    }
    return be(u, E), be(s.content, E), (_, x) => (openBlock(), createBlock(unref(D), {
      ref: unref(i),
      style: { position: "absolute" },
      "data-scrollbarimpl": "",
      as: unref(l).as.value,
      "as-child": unref(l).asChild.value,
      onPointerdown: f,
      onPointermove: v,
      onPointerup: y
    }, {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Rl = /* @__PURE__ */ defineComponent({
  __name: "ScrollAreaScrollbarX",
  setup(o2) {
    const t = me(), e = Ft(), { forwardRef: a, currentElement: s } = $();
    onMounted(() => {
      s.value && t.onScrollbarXChange(s.value);
    });
    const r = computed(() => e.sizes.value);
    return (l, i) => (openBlock(), createBlock(aa, {
      ref: unref(a),
      "is-horizontal": true,
      "data-orientation": "horizontal",
      style: normalizeStyle({
        bottom: 0,
        left: unref(t).dir.value === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: unref(t).dir.value === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": r.value ? `${unref(Vt)(r.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => unref(e).onDragScroll(u.x))
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), Ml = /* @__PURE__ */ defineComponent({
  __name: "ScrollAreaScrollbarY",
  setup(o2) {
    const t = me(), e = Ft(), { forwardRef: a, currentElement: s } = $();
    onMounted(() => {
      s.value && t.onScrollbarYChange(s.value);
    });
    const r = computed(() => e.sizes.value);
    return (l, i) => (openBlock(), createBlock(aa, {
      ref: unref(a),
      "is-horizontal": false,
      "data-orientation": "vertical",
      style: normalizeStyle({
        top: 0,
        right: unref(t).dir.value === "ltr" ? 0 : void 0,
        left: unref(t).dir.value === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": r.value ? `${unref(Vt)(r.value)}px` : void 0
      }),
      onOnDragScroll: i[0] || (i[0] = (u) => unref(e).onDragScroll(u.y))
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), [Ft, kl] = H("ScrollAreaScrollbarVisible"), Yo = /* @__PURE__ */ defineComponent({
  __name: "ScrollAreaScrollbarVisible",
  setup(o2) {
    const t = me(), e = Lt(), { forwardRef: a } = $(), s = ref({
      content: 0,
      viewport: 0,
      scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
    }), r = computed(() => {
      const _ = na(s.value.viewport, s.value.content);
      return _ > 0 && _ < 1;
    }), l = ref(), i = ref(0);
    function u(_, x) {
      if (v.value) {
        const B = t.viewport.value.scrollLeft + _.deltaY;
        t.viewport.value.scrollLeft = B, dn(B, x) && _.preventDefault();
      } else {
        const B = t.viewport.value.scrollTop + _.deltaY;
        t.viewport.value.scrollTop = B, dn(B, x) && _.preventDefault();
      }
    }
    function d(_, x) {
      v.value ? i.value = x.x : i.value = x.y;
    }
    function p(_) {
      i.value = 0;
    }
    function c(_) {
      s.value = _;
    }
    function f(_, x) {
      return Al(
        _,
        i.value,
        s.value,
        x
      );
    }
    const v = computed(
      () => e.isHorizontal.value
    );
    function y(_) {
      v.value ? t.viewport.value.scrollLeft = f(
        _,
        t.dir.value
      ) : t.viewport.value.scrollTop = f(_);
    }
    function C() {
      if (v.value) {
        if (t.viewport.value && l.value) {
          const _ = t.viewport.value.scrollLeft, x = un(
            _,
            s.value,
            t.dir.value
          );
          l.value.style.transform = `translate3d(${x}px, 0, 0)`;
        }
      } else if (t.viewport.value && l.value) {
        const _ = t.viewport.value.scrollTop, x = un(_, s.value);
        l.value.style.transform = `translate3d(0, ${x}px, 0)`;
      }
    }
    function E(_) {
      l.value = _;
    }
    return kl({
      sizes: s,
      hasThumb: r,
      handleWheelScroll: u,
      handleThumbDown: d,
      handleThumbUp: p,
      handleSizeChange: c,
      onThumbPositionChange: C,
      onThumbChange: E,
      onDragScroll: y
    }), (_, x) => v.value ? (openBlock(), createBlock(Rl, mergeProps({ key: 0 }, _.$attrs, { ref: unref(a) }), {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }, 16)) : (openBlock(), createBlock(Ml, mergeProps({ key: 1 }, _.$attrs, { ref: unref(a) }), {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sa = /* @__PURE__ */ defineComponent({
  __name: "ScrollAreaScrollbarAuto",
  props: {
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = me(), e = Lt(), { forwardRef: a } = $(), s = ref(false), r = fo(() => {
      if (t.viewport.value) {
        const l = t.viewport.value.offsetWidth < t.viewport.value.scrollWidth, i = t.viewport.value.offsetHeight < t.viewport.value.scrollHeight;
        s.value = e.isHorizontal.value ? l : i;
      }
    }, 10);
    return onMounted(() => r()), be(t.viewport, r), be(t.content, r), (l, i) => (openBlock(), createBlock(unref(ae), {
      present: l.forceMount || s.value
    }, {
      default: withCtx(() => [
        createVNode(Yo, mergeProps(l.$attrs, {
          ref: unref(a),
          "data-state": s.value ? "visible" : "hidden"
        }), {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Vl = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaScrollbarHover",
  props: {
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = me(), { forwardRef: e } = $();
    let a;
    const s = ref(false);
    function r() {
      window.clearTimeout(a), s.value = true;
    }
    function l() {
      a = window.setTimeout(() => {
        s.value = false;
      }, t.scrollHideDelay.value);
    }
    return onMounted(() => {
      const i = t.scrollArea.value;
      i && (i.addEventListener("pointerenter", r), i.addEventListener("pointerleave", l));
    }), onUnmounted(() => {
      const i = t.scrollArea.value;
      i && (window.clearTimeout(a), i.removeEventListener("pointerenter", r), i.removeEventListener("pointerleave", l));
    }), (i, u) => (openBlock(), createBlock(unref(ae), {
      present: i.forceMount || s.value
    }, {
      default: withCtx(() => [
        createVNode(sa, mergeProps(i.$attrs, {
          ref: unref(e),
          "data-state": s.value ? "visible" : "hidden"
        }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16, ["data-state"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), Fl = /* @__PURE__ */ defineComponent({
  __name: "ScrollAreaScrollbarScroll",
  props: {
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = me(), e = Lt(), { forwardRef: a } = $(), { state: s, dispatch: r } = Dn("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    watchEffect(() => {
      s.value === "idle" && window.setTimeout(
        () => r("HIDE"),
        t.scrollHideDelay.value
      );
    });
    const l = fo(() => r("SCROLL_END"), 100);
    return watchEffect(() => {
      const i = t.viewport.value, u = e.isHorizontal.value ? "scrollLeft" : "scrollTop";
      if (i) {
        let d = i[u];
        const p = () => {
          const c = i[u];
          d !== c && (r("SCROLL"), l()), d = c;
        };
        i.addEventListener("scroll", p);
      }
    }), (i, u) => (openBlock(), createBlock(unref(ae), {
      present: i.forceMount || unref(s) !== "hidden"
    }, {
      default: withCtx(() => [
        createVNode(Yo, mergeProps(i.$attrs, { ref: unref(a) }), {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), [Lt, Ll] = H("ScrollAreaScrollbar"), hc = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ScrollAreaScrollbar",
  props: {
    orientation: { default: "vertical" },
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(o2) {
    const t = o2, { forwardRef: e } = $(), a = me(), s = computed(() => t.orientation === "horizontal");
    watch(
      s,
      () => {
        s.value ? a.onScrollbarXEnabledChange(true) : a.onScrollbarYEnabledChange(true);
      },
      { immediate: true }
    ), onUnmounted(() => {
      a.onScrollbarXEnabledChange(false), a.onScrollbarYEnabledChange(false);
    });
    const { orientation: r, forceMount: l, asChild: i, as: u } = toRefs(t);
    return Ll({
      orientation: r,
      forceMount: l,
      isHorizontal: s,
      as: u,
      asChild: i
    }), (d, p) => unref(a).type.value === "hover" ? (openBlock(), createBlock(Vl, mergeProps({ key: 0 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(l)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(a).type.value === "scroll" ? (openBlock(), createBlock(Fl, mergeProps({ key: 1 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(l)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(a).type.value === "auto" ? (openBlock(), createBlock(sa, mergeProps({ key: 2 }, d.$attrs, {
      ref: unref(e),
      "force-mount": unref(l)
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16, ["force-mount"])) : unref(a).type.value === "always" ? (openBlock(), createBlock(Yo, mergeProps({ key: 3 }, d.$attrs, {
      ref: unref(e),
      "data-state": "visible"
    }), {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
}), gc = /* @__PURE__ */ defineComponent({
  __name: "ScrollAreaThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = me(), a = Ft();
    function s(f) {
      const y = f.target.getBoundingClientRect(), C = f.clientX - y.left, E = f.clientY - y.top;
      a.handleThumbDown(f, { x: C, y: E });
    }
    function r(f) {
      a.handleThumbUp(f);
    }
    const { forwardRef: l, currentElement: i } = $(), u = ref(), d = computed(() => e.viewport.value);
    function p() {
      if (!u.value) {
        const f = Il(
          d.value,
          a.onThumbPositionChange
        );
        u.value = f, a.onThumbPositionChange();
      }
    }
    const c = computed(() => a.sizes.value);
    return rs(c, () => {
      a.onThumbChange(i.value), d.value && (a.onThumbPositionChange(), d.value.addEventListener("scroll", p));
    }), onUnmounted(() => {
      var f;
      d.value.removeEventListener("scroll", p), (f = e.viewport.value) == null || f.removeEventListener("scroll", p);
    }), (f, v) => (openBlock(), createBlock(unref(D), {
      ref: unref(l),
      "data-state": unref(a).hasThumb ? "visible" : "hidden",
      style: normalizeStyle({
        width: "var(--radix-scroll-area-thumb-width)",
        height: "var(--radix-scroll-area-thumb-height)"
      }),
      "as-child": t.asChild,
      as: f.as,
      onPointerdown: s,
      onPointerup: r
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-state", "style", "as-child", "as"]));
  }
}), Nl = ["default-value"], Hl = /* @__PURE__ */ defineComponent({
  __name: "BubbleSelect",
  props: {
    autocomplete: {},
    autofocus: { type: Boolean },
    disabled: { type: Boolean },
    form: {},
    multiple: { type: Boolean },
    name: {},
    required: { type: Boolean },
    size: {},
    value: {}
  },
  setup(o2) {
    const t = o2, { value: e } = toRefs(t);
    fs(e);
    const a = ref();
    return (s, r) => (openBlock(), createBlock(unref(Je), { "as-child": "" }, {
      default: withCtx(() => [
        withDirectives(createElementVNode("select", mergeProps({
          ref_key: "selectElement",
          ref: a
        }, t, {
          "onUpdate:modelValue": r[0] || (r[0] = (l) => isRef(e) ? e.value = l : null),
          "default-value": unref(e)
        }), [
          renderSlot(s.$slots, "default")
        ], 16, Nl), [
          [vModelSelect, unref(e)]
        ])
      ]),
      _: 3
    }));
  }
}), jl = {
  key: 0,
  value: ""
}, [Ie, ra] = H("SelectRoot"), [Wl, zl] = H("SelectRoot"), bc = /* @__PURE__ */ defineComponent({
  __name: "SelectRoot",
  props: {
    open: { type: Boolean, default: void 0 },
    defaultOpen: { type: Boolean },
    defaultValue: { default: "" },
    modelValue: { default: void 0 },
    dir: {},
    name: {},
    autocomplete: {},
    disabled: { type: Boolean },
    required: { type: Boolean }
  },
  emits: ["update:modelValue", "update:open"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = X(e, "modelValue", a, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), r = X(e, "open", a, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    }), l = ref(), i = ref(), u = ref({
      x: 0,
      y: 0
    }), d = ref(false), { required: p, disabled: c, dir: f } = toRefs(e), v = ue(f);
    ra({
      triggerElement: l,
      onTriggerChange: (_) => {
        l.value = _;
      },
      valueElement: i,
      onValueElementChange: (_) => {
        i.value = _;
      },
      valueElementHasChildren: d,
      onValueElementHasChildrenChange: (_) => {
        d.value = _;
      },
      contentId: ee(),
      modelValue: s,
      onValueChange: (_) => {
        s.value = _;
      },
      open: r,
      required: p,
      onOpenChange: (_) => {
        r.value = _;
      },
      dir: v,
      triggerPointerDownPosRef: u,
      disabled: c
    });
    const y = Ke(l), C = ref(/* @__PURE__ */ new Set()), E = computed(() => Array.from(C.value).map((_) => {
      var x;
      return (x = _.props) == null ? void 0 : x.value;
    }).join(";"));
    return zl({
      onNativeOptionAdd: (_) => {
        C.value.add(_);
      },
      onNativeOptionRemove: (_) => {
        C.value.delete(_);
      }
    }), (_, x) => (openBlock(), createBlock(unref(He), null, {
      default: withCtx(() => [
        renderSlot(_.$slots, "default"),
        unref(y) ? (openBlock(), createBlock(Hl, mergeProps({ key: E.value }, _.$attrs, {
          "aria-hidden": "",
          tabindex: "-1",
          required: unref(p),
          name: _.name,
          autocomplete: _.autocomplete,
          disabled: unref(c),
          value: unref(s),
          onChange: x[0] || (x[0] = (B) => s.value = B.target.value)
        }), {
          default: withCtx(() => [
            unref(s) === void 0 ? (openBlock(), createElementBlock("option", jl)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from(C.value), (B) => (openBlock(), createBlock(resolveDynamicComponent(B), mergeProps(B.props, {
              key: B.key ?? ""
            }), null, 16))), 128))
          ]),
          _: 1
        }, 16, ["required", "name", "autocomplete", "disabled", "value"])) : createCommentVNode("", true)
      ]),
      _: 3
    }));
  }
}), Ul = [" ", "Enter", "ArrowUp", "ArrowDown"], ql = [" ", "Enter"], Ce = 10;
function la(o2) {
  return o2 === "" || o2 === void 0;
}
const Cc = /* @__PURE__ */ defineComponent({
  __name: "SelectTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, e = Ie(), a = computed(() => {
      var f;
      return ((f = e.disabled) == null ? void 0 : f.value) || t.disabled;
    }), { forwardRef: s, currentElement: r } = $();
    onMounted(() => {
      e.triggerElement = r;
    });
    const { injectCollection: l } = fe(), i = l(), { search: u, handleTypeaheadSearch: d, resetTypeahead: p } = go(i);
    function c() {
      a.value || (e.onOpenChange(true), p());
    }
    return (f, v) => (openBlock(), createBlock(unref(je), { "as-child": "" }, {
      default: withCtx(() => {
        var y, C, E, _;
        return [
          createVNode(unref(D), {
            ref: unref(s),
            role: "combobox",
            type: f.as === "button" ? "button" : void 0,
            "aria-controls": unref(e).contentId,
            "aria-expanded": unref(e).open.value || false,
            "aria-required": (y = unref(e).required) == null ? void 0 : y.value,
            "aria-autocomplete": "none",
            disabled: f.disabled,
            dir: (C = unref(e)) == null ? void 0 : C.dir.value,
            "data-state": (E = unref(e)) != null && E.open.value ? "open" : "closed",
            "data-disabled": a.value ? "" : void 0,
            "data-placeholder": unref(la)((_ = unref(e).modelValue) == null ? void 0 : _.value) ? "" : void 0,
            "as-child": f.asChild,
            as: f.as,
            onClick: v[0] || (v[0] = (x) => {
              var B;
              (B = x == null ? void 0 : x.currentTarget) == null || B.focus();
            }),
            onPointerdown: v[1] || (v[1] = (x) => {
              const B = x.target;
              B.hasPointerCapture(x.pointerId) && B.releasePointerCapture(x.pointerId), x.button === 0 && x.ctrlKey === false && (c(), unref(e).triggerPointerDownPosRef.value = {
                x: Math.round(x.pageX),
                y: Math.round(x.pageY)
              }, x.preventDefault());
            }),
            onPointerup: v[2] || (v[2] = withModifiers(() => {
            }, ["prevent"])),
            onKeydown: v[3] || (v[3] = (x) => {
              const B = unref(u) !== "";
              !(x.ctrlKey || x.altKey || x.metaKey) && x.key.length === 1 && B && x.key === " " || (unref(d)(x.key), unref(Ul).includes(x.key) && (c(), x.preventDefault()));
            })
          }, {
            default: withCtx(() => [
              renderSlot(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["type", "aria-controls", "aria-expanded", "aria-required", "disabled", "dir", "data-state", "data-disabled", "data-placeholder", "as-child", "as"])
        ];
      }),
      _: 3
    }));
  }
}), wc = /* @__PURE__ */ defineComponent({
  __name: "SelectPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Te), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [Xo, Gl] = H("SelectItemAlignedPosition"), Yl = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectItemAlignedPosition",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["placed"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { injectCollection: s } = fe(), r = Ie(), l = Ae(), i = s(), u = ref(false), d = ref(true), p = ref(), { forwardRef: c, currentElement: f } = $(), { viewport: v, selectedItem: y, selectedItemText: C, focusSelectedItem: E } = l;
    function _() {
      if (r.triggerElement.value && r.valueElement.value && p.value && f.value && (v != null && v.value) && (y != null && y.value) && (C != null && C.value)) {
        const O = r.triggerElement.value.getBoundingClientRect(), A = f.value.getBoundingClientRect(), M = r.valueElement.value.getBoundingClientRect(), R = C.value.getBoundingClientRect();
        if (r.dir.value !== "rtl") {
          const Re = R.left - A.left, xe = M.left - Re, Me = O.left - xe, ke = O.width + Me, Ut = Math.max(ke, A.width), qt = window.innerWidth - Ce, Gt = tn(xe, Ce, qt - Ut);
          p.value.style.minWidth = `${ke}px`, p.value.style.left = `${Gt}px`;
        } else {
          const Re = A.right - R.right, xe = window.innerWidth - M.right - Re, Me = window.innerWidth - O.right - xe, ke = O.width + Me, Ut = Math.max(ke, A.width), qt = window.innerWidth - Ce, Gt = tn(
            xe,
            Ce,
            qt - Ut
          );
          p.value.style.minWidth = `${ke}px`, p.value.style.right = `${Gt}px`;
        }
        const V = i.value, j = window.innerHeight - Ce * 2, I = v.value.scrollHeight, L = window.getComputedStyle(f.value), W = Number.parseInt(
          L.borderTopWidth,
          10
        ), F = Number.parseInt(L.paddingTop, 10), q = Number.parseInt(
          L.borderBottomWidth,
          10
        ), oe = Number.parseInt(
          L.paddingBottom,
          10
        ), ce = W + F + I + oe + q, mt = Math.min(
          y.value.offsetHeight * 5,
          ce
        ), ot = window.getComputedStyle(v.value), Ba = Number.parseInt(ot.paddingTop, 10), Sa = Number.parseInt(
          ot.paddingBottom,
          10
        ), ht = O.top + O.height / 2 - Ce, Ta = j - ht, zt = y.value.offsetHeight / 2, Da = y.value.offsetTop + zt, gt = W + F + Da, Oa = ce - gt;
        if (gt <= ht) {
          const Re = y.value === V[V.length - 1];
          p.value.style.bottom = "0px";
          const xe = f.value.clientHeight - v.value.offsetTop - v.value.offsetHeight, Me = Math.max(
            Ta,
            zt + (Re ? Sa : 0) + xe + q
          ), ke = gt + Me;
          p.value.style.height = `${ke}px`;
        } else {
          const Re = y.value === V[0];
          p.value.style.top = "0px";
          const Me = Math.max(
            ht,
            W + v.value.offsetTop + (Re ? Ba : 0) + zt
          ) + Oa;
          p.value.style.height = `${Me}px`, v.value.scrollTop = gt - ht + v.value.offsetTop;
        }
        p.value.style.margin = `${Ce}px 0`, p.value.style.minHeight = `${mt}px`, p.value.style.maxHeight = `${j}px`, a("placed"), requestAnimationFrame(() => u.value = true);
      }
    }
    const x = ref("");
    onMounted(async () => {
      await nextTick(), _(), f.value && (x.value = window.getComputedStyle(f.value).zIndex);
    });
    function B(O) {
      O && d.value === true && (_(), E == null || E(), d.value = false);
    }
    return Gl({
      contentWrapper: p,
      shouldExpandOnScrollRef: u,
      onScrollButtonChange: B
    }), (O, A) => (openBlock(), createElementBlock("div", {
      ref_key: "contentWrapperElement",
      ref: p,
      style: normalizeStyle({
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: x.value
      })
    }, [
      createVNode(unref(D), mergeProps({
        ref: unref(c),
        style: {
          // When we get the height of the content, it includes borders. If we were to set
          // the height without having `boxSizing: 'border-box'` it would be too big.
          boxSizing: "border-box",
          // We need to ensure the content doesn't get taller than the wrapper
          maxHeight: "100%"
        }
      }, { ...O.$attrs, ...e }), {
        default: withCtx(() => [
          renderSlot(O.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"])
    ], 4));
  }
}), Xl = /* @__PURE__ */ defineComponent({
  __name: "SelectPopperPosition",
  props: {
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: { default: Ce },
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const e = Ne(o2);
    return (a, s) => (openBlock(), createBlock(unref(Fe), mergeProps(unref(e), { style: {
      // Ensure border-box for floating-ui calculations
      boxSizing: "border-box",
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    } }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"]));
  }
}), tt = {
  onViewportChange: () => {
  },
  itemTextRefCallback: () => {
  },
  itemRefCallback: () => {
  }
}, [Ae, Jl] = H("SelectContent"), Zl = /* @__PURE__ */ defineComponent({
  __name: "SelectContentImpl",
  props: {
    position: { default: "item-aligned" },
    side: {},
    sideOffset: {},
    align: { default: "start" },
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = Ie();
    ho(), ct(true);
    const { createCollection: r } = fe(), l = ref();
    pt(l);
    const i = r(l), { search: u, handleTypeaheadSearch: d } = go(i), p = ref(), c = ref(), f = ref(), v = ref(false), y = ref(false);
    function C() {
      c.value && l.value && oo([c.value, l.value]);
    }
    watch(v, () => {
      C();
    });
    const { onOpenChange: E, triggerPointerDownPosRef: _ } = s;
    watchEffect((A) => {
      if (!l.value)
        return;
      let M = { x: 0, y: 0 };
      const R = (j) => {
        var I, L;
        M = {
          x: Math.abs(
            Math.round(j.pageX) - (((I = _.value) == null ? void 0 : I.x) ?? 0)
          ),
          y: Math.abs(
            Math.round(j.pageY) - (((L = _.value) == null ? void 0 : L.y) ?? 0)
          )
        };
      }, V = (j) => {
        var I;
        M.x <= 10 && M.y <= 10 ? j.preventDefault() : (I = l.value) != null && I.contains(j.target) || E(false), document.removeEventListener("pointermove", R), _.value = null;
      };
      _.value !== null && (document.addEventListener("pointermove", R), document.addEventListener("pointerup", V, {
        capture: true,
        once: true
      })), A(() => {
        document.removeEventListener("pointermove", R), document.removeEventListener("pointerup", V, {
          capture: true
        });
      });
    });
    function x(A) {
      const M = A.ctrlKey || A.altKey || A.metaKey;
      if (A.key === "Tab" && A.preventDefault(), !M && A.key.length === 1 && d(A.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(A.key)) {
        let R = i.value;
        if (["ArrowUp", "End"].includes(A.key) && (R = R.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(A.key)) {
          const V = A.target, j = R.indexOf(V);
          R = R.slice(j + 1);
        }
        setTimeout(() => oo(R)), A.preventDefault();
      }
    }
    const B = computed(() => e.position === "popper" ? e : {}), O = Ne(B.value);
    return Jl({
      content: l,
      viewport: p,
      onViewportChange: (A) => {
        p.value = A;
      },
      itemRefCallback: (A, M, R) => {
        var I, L;
        const V = !y.value && !R;
        (((I = s.modelValue) == null ? void 0 : I.value) !== void 0 && ((L = s.modelValue) == null ? void 0 : L.value) === M || V) && (c.value = A, V && (y.value = true));
      },
      selectedItem: c,
      selectedItemText: f,
      onItemLeave: () => {
        var A;
        (A = l.value) == null || A.focus();
      },
      itemTextRefCallback: (A, M, R) => {
        var I, L;
        const V = !y.value && !R;
        (((I = s.modelValue) == null ? void 0 : I.value) !== void 0 && ((L = s.modelValue) == null ? void 0 : L.value) === M || V) && (f.value = A);
      },
      focusSelectedItem: C,
      position: e.position,
      isPositioned: v,
      searchRef: u
    }), (A, M) => (openBlock(), createBlock(unref(It), {
      "as-child": "",
      onMountAutoFocus: M[6] || (M[6] = withModifiers(() => {
      }, ["prevent"])),
      onUnmountAutoFocus: M[7] || (M[7] = (R) => {
        var V;
        a("closeAutoFocus", R), !R.defaultPrevented && ((V = unref(s).triggerElement.value) == null || V.focus({ preventScroll: true }), R.preventDefault());
      })
    }, {
      default: withCtx(() => [
        createVNode(unref(De), {
          "as-child": "",
          "disable-outside-pointer-events": "",
          onFocusOutside: M[2] || (M[2] = withModifiers(() => {
          }, ["prevent"])),
          onDismiss: M[3] || (M[3] = (R) => unref(s).onOpenChange(false)),
          onEscapeKeyDown: M[4] || (M[4] = (R) => a("escapeKeyDown", R)),
          onPointerDownOutside: M[5] || (M[5] = (R) => a("pointerDownOutside", R))
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(
              A.position === "popper" ? Xl : Yl
            ), mergeProps({ ...A.$attrs, ...unref(O) }, {
              id: unref(s).contentId,
              ref: (R) => {
                l.value = unref(ve)(R);
              },
              role: "listbox",
              "data-state": unref(s).open.value ? "open" : "closed",
              dir: unref(s).dir.value,
              style: {
                // flex layout so we can place the scroll buttons properly
                display: "flex",
                flexDirection: "column",
                // reset the outline by default as the content MAY get focused
                outline: "none"
              },
              onContextmenu: M[0] || (M[0] = withModifiers(() => {
              }, ["prevent"])),
              onPlaced: M[1] || (M[1] = (R) => v.value = true),
              onKeydown: x
            }), {
              default: withCtx(() => [
                renderSlot(A.$slots, "default")
              ]),
              _: 3
            }, 16, ["id", "data-state", "dir", "onKeydown"]))
          ]),
          _: 3
        })
      ]),
      _: 3
    }));
  }
}), Ql = /* @__PURE__ */ defineComponent({
  __name: "SelectProvider",
  props: {
    context: {}
  },
  setup(o2) {
    return ra(o2.context), (e, a) => renderSlot(e.$slots, "default");
  }
}), _c = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectContent",
  props: {
    forceMount: { type: Boolean },
    position: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["closeAutoFocus", "escapeKeyDown", "pointerDownOutside"],
  setup(o2, { emit: t }) {
    const s = ne(o2, t), r = Ie(), l = ref();
    onMounted(() => {
      l.value = new DocumentFragment();
    });
    const i = ref();
    return (u, d) => {
      var p;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(ae), {
          ref_key: "presenceRef",
          ref: i,
          present: u.forceMount || unref(r).open.value
        }, {
          default: withCtx(() => [
            createVNode(Zl, normalizeProps(guardReactiveProps({ ...unref(s), ...u.$attrs })), {
              default: withCtx(() => [
                renderSlot(u.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }, 8, ["present"]),
        !((p = i.value) != null && p.present) && l.value ? (openBlock(), createBlock(Teleport, {
          key: 0,
          to: l.value
        }, [
          createVNode(Ql, { context: unref(r) }, {
            default: withCtx(() => [
              createElementVNode("div", null, [
                renderSlot(u.$slots, "default")
              ])
            ]),
            _: 3
          }, 8, ["context"])
        ], 8, ["to"])) : createCommentVNode("", true)
      ], 64);
    };
  }
}), xc = /* @__PURE__ */ defineComponent({
  __name: "SelectSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(D), mergeProps({ "aria-hidden": "" }, t), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), [ia, ei] = H("SelectItem"), Ec = /* @__PURE__ */ defineComponent({
  __name: "SelectItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { disabled: e } = toRefs(t), a = Ie(), s = Ae(tt), { forwardRef: r, currentElement: l } = $(), i = computed(() => {
      var C;
      return ((C = a.modelValue) == null ? void 0 : C.value) === t.value;
    }), u = ref(false), d = ref(t.textValue ?? ""), p = ee();
    async function c(C) {
      await nextTick(), !(C != null && C.defaultPrevented) && (e.value || (a.onValueChange(t.value), a.onOpenChange(false)));
    }
    async function f(C) {
      var E;
      await nextTick(), !C.defaultPrevented && (e.value ? (E = s.onItemLeave) == null || E.call(s) : C.currentTarget.focus({ preventScroll: true }));
    }
    async function v(C) {
      var E;
      await nextTick(), !C.defaultPrevented && C.currentTarget === document.activeElement && ((E = s.onItemLeave) == null || E.call(s));
    }
    async function y(C) {
      var _;
      await nextTick(), !(C.defaultPrevented || ((_ = s.searchRef) == null ? void 0 : _.value) !== "" && C.key === " ") && (ql.includes(C.key) && c(), C.key === " " && C.preventDefault());
    }
    if (t.value === "")
      throw new Error(
        "A <SelectItem /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return onMounted(() => {
      l.value && s.itemRefCallback(
        l.value,
        t.value,
        t.disabled
      );
    }), ei({
      value: t.value,
      disabled: e,
      textId: p,
      isSelected: i,
      onItemTextChange: (C) => {
        d.value = ((d.value || (C == null ? void 0 : C.textContent)) ?? "").trim();
      }
    }), (C, E) => (openBlock(), createBlock(unref(D), {
      ref: unref(r),
      role: "option",
      "data-radix-vue-collection-item": "",
      "aria-labelledby": unref(p),
      "data-highlighted": u.value ? "" : void 0,
      "aria-selected": i.value && u.value,
      "data-state": i.value ? "checked" : "unchecked",
      "aria-disabled": unref(e) || void 0,
      "data-disabled": unref(e) ? "" : void 0,
      tabindex: unref(e) ? void 0 : -1,
      as: C.as,
      "as-child": C.asChild,
      onFocus: E[0] || (E[0] = (_) => u.value = true),
      onBlur: E[1] || (E[1] = (_) => u.value = false),
      onPointerup: c,
      onTouchend: E[2] || (E[2] = withModifiers(() => {
      }, ["prevent", "stop"])),
      onPointermove: f,
      onPointerleave: v,
      onKeydown: y
    }, {
      default: withCtx(() => [
        renderSlot(C.$slots, "default")
      ]),
      _: 3
    }, 8, ["aria-labelledby", "data-highlighted", "aria-selected", "data-state", "aria-disabled", "data-disabled", "tabindex", "as", "as-child"]));
  }
}), Pc = /* @__PURE__ */ defineComponent({
  __name: "SelectItemIndicator",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = o2, e = ia();
    return (a, s) => unref(e).isSelected.value ? (openBlock(), createBlock(unref(D), mergeProps({
      key: 0,
      "aria-hidden": ""
    }, t), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
}), [ti, oi] = H("SelectGroup"), Bc = /* @__PURE__ */ defineComponent({
  __name: "SelectGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = ee();
    return oi({ id: e }), (a, s) => (openBlock(), createBlock(unref(D), mergeProps({ role: "group" }, t, { "aria-labelledby": unref(e) }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby"]));
  }
}), Sc = /* @__PURE__ */ defineComponent({
  __name: "SelectLabel",
  props: {
    for: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(o2) {
    const t = o2, e = ti({ id: "" });
    return (a, s) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      id: unref(e).id
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Tc = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SelectItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = o2, e = Ie(), a = Ae(tt), s = Wl(), r = ia(), { forwardRef: l, currentElement: i } = $(), u = computed(() => {
      var d;
      return h("option", {
        key: r.value,
        value: r.value,
        disabled: r.disabled.value,
        innerHTML: (d = i.value) == null ? void 0 : d.textContent
      });
    });
    return onMounted(() => {
      i.value && (r.onItemTextChange(i.value), a.itemTextRefCallback(
        i.value,
        r.value,
        r.disabled.value
      ), s.onNativeOptionAdd(u.value));
    }), onBeforeUnmount(() => {
      s.onNativeOptionRemove(u.value);
    }), (d, p) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(D), mergeProps({
        id: unref(r).textId,
        ref: unref(l)
      }, { ...t, ...d.$attrs }), {
        default: withCtx(() => [
          renderSlot(d.$slots, "default")
        ]),
        _: 3
      }, 16, ["id"]),
      unref(r).isSelected.value && unref(e).valueElement.value && !unref(e).valueElementHasChildren.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: unref(e).valueElement.value
      }, [
        renderSlot(d.$slots, "default")
      ], 8, ["to"])) : createCommentVNode("", true)
    ], 64));
  }
}), Dc = /* @__PURE__ */ defineComponent({
  __name: "SelectViewport",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = Ae(tt), a = e.position === "item-aligned" ? Xo() : void 0, { forwardRef: s, currentElement: r } = $();
    onMounted(() => {
      e == null || e.onViewportChange(r.value);
    });
    const l = ref(0);
    function i(u) {
      const d = u.currentTarget, { shouldExpandOnScrollRef: p, contentWrapper: c } = a ?? {};
      if (p != null && p.value && (c != null && c.value)) {
        const f = Math.abs(l.value - d.scrollTop);
        if (f > 0) {
          const v = window.innerHeight - Ce * 2, y = Number.parseFloat(
            c.value.style.minHeight
          ), C = Number.parseFloat(c.value.style.height), E = Math.max(y, C);
          if (E < v) {
            const _ = E + f, x = Math.min(v, _), B = _ - x;
            c.value.style.height = `${x}px`, c.value.style.bottom === "0px" && (d.scrollTop = B > 0 ? B : 0, c.value.style.justifyContent = "flex-end");
          }
        }
      }
      l.value = d.scrollTop;
    }
    return (u, d) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(D), mergeProps({
        ref: unref(s),
        "data-radix-select-viewport": "",
        role: "presentation"
      }, { ...u.$attrs, ...t }, {
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          overflow: "auto"
        },
        onScroll: i
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["style"]),
      createVNode(unref(D), { as: "style" }, {
        default: withCtx(() => [
          createTextVNode(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-radix-select-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-radix-select-viewport]::-webkit-scrollbar { display: none; } ")
        ]),
        _: 1
      })
    ], 64));
  }
}), ua = /* @__PURE__ */ defineComponent({
  __name: "SelectScrollButtonImpl",
  emits: ["autoScroll"],
  setup(o2, { emit: t }) {
    const e = t, { injectCollection: a } = fe(), s = a(), r = Ae(tt), l = ref(null);
    function i() {
      l.value !== null && (window.clearInterval(l.value), l.value = null);
    }
    watchEffect(() => {
      const p = s.value.find(
        (c) => c === document.activeElement
      );
      p == null || p.scrollIntoView({ block: "nearest" });
    });
    function u() {
      l.value === null && (l.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    function d() {
      var p;
      (p = r.onItemLeave) == null || p.call(r), l.value === null && (l.value = window.setInterval(() => {
        e("autoScroll");
      }, 50));
    }
    return onBeforeUnmount(() => i()), (p, c) => {
      var f;
      return openBlock(), createBlock(unref(D), mergeProps({
        "aria-hidden": "",
        style: {
          flexShrink: 0
        }
      }, (f = p.$parent) == null ? void 0 : f.$props, {
        onPointerdown: u,
        onPointermove: d,
        onPointerleave: c[0] || (c[0] = () => {
          i();
        })
      }), {
        default: withCtx(() => [
          renderSlot(p.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
}), Oc = /* @__PURE__ */ defineComponent({
  __name: "SelectScrollUpButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = Ae(tt), e = t.position === "item-aligned" ? Xo() : void 0, { forwardRef: a, currentElement: s } = $(), r = ref(false);
    return watchEffect((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          r.value = p.scrollTop > 0;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), watch(s, () => {
      s.value && (e == null || e.onScrollButtonChange(s.value));
    }), (l, i) => r.value ? (openBlock(), createBlock(ua, {
      key: 0,
      ref: unref(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = unref(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop - d.value.offsetHeight);
      })
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : createCommentVNode("", true);
  }
}), Ic = /* @__PURE__ */ defineComponent({
  __name: "SelectScrollDownButton",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = Ae(tt), e = t.position === "item-aligned" ? Xo() : void 0, { forwardRef: a, currentElement: s } = $(), r = ref(false);
    return watchEffect((l) => {
      var i, u;
      if ((i = t.viewport) != null && i.value && ((u = t.isPositioned) != null && u.value)) {
        let d = function() {
          const c = p.scrollHeight - p.clientHeight;
          r.value = Math.ceil(p.scrollTop) < c;
        };
        const p = t.viewport.value;
        d(), p.addEventListener("scroll", d), l(() => p.removeEventListener("scroll", d));
      }
    }), watch(s, () => {
      s.value && (e == null || e.onScrollButtonChange(s.value));
    }), (l, i) => r.value ? (openBlock(), createBlock(ua, {
      key: 0,
      ref: unref(a),
      onAutoScroll: i[0] || (i[0] = () => {
        const { viewport: u, selectedItem: d } = unref(t);
        u != null && u.value && (d != null && d.value) && (u.value.scrollTop = u.value.scrollTop + d.value.offsetHeight);
      })
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 512)) : createCommentVNode("", true);
  }
}), Ac = /* @__PURE__ */ defineComponent({
  __name: "SelectValue",
  props: {
    placeholder: { default: "" },
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const { forwardRef: t, currentElement: e } = $(), a = Ie(), s = useSlots();
    return onBeforeMount(() => {
      var l;
      const r = !!Dt((l = s == null ? void 0 : s.default) == null ? void 0 : l.call(s)).length;
      a.onValueElementHasChildrenChange(r);
    }), onMounted(() => {
      a.valueElement = e;
    }), (r, l) => (openBlock(), createBlock(unref(D), {
      ref: unref(t),
      as: r.as,
      "as-child": r.asChild,
      style: { pointerEvents: "none" }
    }, {
      default: withCtx(() => {
        var i;
        return [
          unref(la)((i = unref(a).modelValue) == null ? void 0 : i.value) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(r.placeholder), 1)
          ], 64)) : renderSlot(r.$slots, "default", { key: 1 })
        ];
      }),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), da = /* @__PURE__ */ defineComponent({
  __name: "BaseSeparator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = ["horizontal", "vertical"];
    function a(i) {
      return e.includes(i);
    }
    const s = computed(
      () => a(t.orientation) ? t.orientation : "horizontal"
    ), r = computed(
      () => s.value === "vertical" ? t.orientation : void 0
    ), l = computed(
      () => t.decorative ? { role: "none" } : { "aria-orientation": r.value, role: "separator" }
    );
    return (i, u) => (openBlock(), createBlock(unref(D), mergeProps({
      as: i.as,
      "as-child": i.asChild,
      "data-orientation": s.value
    }, l.value), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["as", "as-child", "data-orientation"]));
  }
}), Mc = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(da, normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
function ca(o2, [t, e]) {
  return Math.min(e, Math.max(t, o2));
}
function ni(o2 = [], t, e) {
  const a = [...o2];
  return a[e] = t, a.sort((s, r) => s - r);
}
function pa(o2, t, e) {
  const r = 100 / (e - t) * (o2 - t);
  return ca(r, [0, 100]);
}
function ai(o2, t) {
  return t > 2 ? `Value ${o2 + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][o2] : void 0;
}
function si(o2, t) {
  if (o2.length === 1)
    return 0;
  const e = o2.map((s) => Math.abs(s - t)), a = Math.min(...e);
  return e.indexOf(a);
}
function ri(o2, t, e) {
  const a = o2 / 2, r = Jo([0, 50], [0, a]);
  return (a - r(t) * e) * e;
}
function li(o2) {
  return o2.slice(0, -1).map((t, e) => o2[e + 1] - t);
}
function ii(o2, t) {
  if (t > 0) {
    const e = li(o2);
    return Math.min(...e) >= t;
  }
  return true;
}
function Jo(o2, t) {
  return (e) => {
    if (o2[0] === o2[1] || t[0] === t[1])
      return t[0];
    const a = (t[1] - t[0]) / (o2[1] - o2[0]);
    return t[0] + a * (e - o2[0]);
  };
}
function ui(o2) {
  return (String(o2).split(".")[1] || "").length;
}
function di(o2, t) {
  const e = 10 ** t;
  return Math.round(o2 * e) / e;
}
const fa = ["PageUp", "PageDown"], va = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], ma = {
  "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
  "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
  "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
}, [ha, ga] = H(["SliderVertical", "SliderHorizontal"]), ya = /* @__PURE__ */ defineComponent({
  __name: "SliderImpl",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  emits: ["slideStart", "slideMove", "slideEnd", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = Kt();
    return (r, l) => (openBlock(), createBlock(unref(D), mergeProps({ "data-slider-impl": "" }, e, {
      onKeydown: l[0] || (l[0] = (i) => {
        i.key === "Home" ? (a("homeKeyDown", i), i.preventDefault()) : i.key === "End" ? (a("endKeyDown", i), i.preventDefault()) : unref(fa).concat(unref(va)).includes(i.key) && (a("stepKeyDown", i), i.preventDefault());
      }),
      onPointerdown: l[1] || (l[1] = (i) => {
        const u = i.target;
        u.setPointerCapture(i.pointerId), i.preventDefault(), unref(s).thumbElements.value.includes(u) ? u.focus() : a("slideStart", i);
      }),
      onPointermove: l[2] || (l[2] = (i) => {
        i.target.hasPointerCapture(i.pointerId) && a("slideMove", i);
      }),
      onPointerup: l[3] || (l[3] = (i) => {
        const u = i.target;
        u.hasPointerCapture(i.pointerId) && (u.releasePointerCapture(i.pointerId), a("slideEnd", i));
      })
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ci = /* @__PURE__ */ defineComponent({
  __name: "SliderHorizontal",
  props: {
    dir: {},
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { max: s, min: r, dir: l, inverted: i } = toRefs(e), { forwardRef: u, currentElement: d } = $(), p = ref(), c = computed(() => (l == null ? void 0 : l.value) === "ltr" && !i.value || (l == null ? void 0 : l.value) !== "ltr" && i.value);
    function f(v) {
      const y = p.value || d.value.getBoundingClientRect(), C = [0, y.width], E = c.value ? [r.value, s.value] : [s.value, r.value], _ = Jo(C, E);
      return p.value = y, _(v - y.left);
    }
    return ga({
      startEdge: c.value ? "left" : "right",
      endEdge: c.value ? "right" : "left",
      direction: c.value ? 1 : -1,
      size: "width"
    }), (v, y) => (openBlock(), createBlock(ya, {
      ref: unref(u),
      dir: unref(l),
      "data-orientation": "horizontal",
      style: normalizeStyle({
        "--radix-slider-thumb-transform": "translateX(-50%)"
      }),
      onSlideStart: y[0] || (y[0] = (C) => {
        const E = f(C.clientX);
        a("slideStart", E);
      }),
      onSlideMove: y[1] || (y[1] = (C) => {
        const E = f(C.clientX);
        a("slideMove", E);
      }),
      onSlideEnd: y[2] || (y[2] = () => {
        p.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: y[3] || (y[3] = (C) => {
        const E = c.value ? "from-left" : "from-right", _ = unref(ma)[E].includes(C.key);
        a("stepKeyDown", C, _ ? -1 : 1);
      }),
      onEndKeyDown: y[4] || (y[4] = (C) => a("endKeyDown", C)),
      onHomeKeyDown: y[5] || (y[5] = (C) => a("homeKeyDown", C))
    }, {
      default: withCtx(() => [
        renderSlot(v.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "style"]));
  }
}), pi = /* @__PURE__ */ defineComponent({
  __name: "SliderVertical",
  props: {
    min: {},
    max: {},
    inverted: { type: Boolean }
  },
  emits: ["slideEnd", "slideStart", "slideMove", "homeKeyDown", "endKeyDown", "stepKeyDown"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { max: s, min: r, inverted: l } = toRefs(e), { forwardRef: i, currentElement: u } = $(), d = ref(), p = computed(() => !l.value);
    function c(f) {
      const v = d.value || u.value.getBoundingClientRect(), y = [0, v.height], C = p.value ? [s.value, r.value] : [r.value, s.value], E = Jo(y, C);
      return d.value = v, E(f - v.top);
    }
    return ga({
      startEdge: p.value ? "bottom" : "top",
      endEdge: p.value ? "top" : "bottom",
      size: "height",
      direction: p.value ? 1 : -1
    }), (f, v) => (openBlock(), createBlock(ya, {
      ref: unref(i),
      "data-orientation": "vertical",
      style: normalizeStyle({
        "--radix-slider-thumb-transform": "translateY(50%)"
      }),
      onSlideStart: v[0] || (v[0] = (y) => {
        const C = c(y.clientY);
        a("slideStart", C);
      }),
      onSlideMove: v[1] || (v[1] = (y) => {
        const C = c(y.clientY);
        a("slideMove", C);
      }),
      onSlideEnd: v[2] || (v[2] = () => {
        d.value = void 0, a("slideEnd");
      }),
      onStepKeyDown: v[3] || (v[3] = (y) => {
        const C = p.value ? "from-bottom" : "from-top", E = unref(ma)[C].includes(y.key);
        a("stepKeyDown", y, E ? -1 : 1);
      }),
      onEndKeyDown: v[4] || (v[4] = (y) => a("endKeyDown", y)),
      onHomeKeyDown: v[5] || (v[5] = (y) => a("homeKeyDown", y))
    }, {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["style"]));
  }
}), fi = ["value", "name", "disabled"], [Kt, vi] = H("SliderRoot"), kc = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SliderRoot",
  props: {
    name: {},
    defaultValue: { default: () => [0] },
    modelValue: {},
    disabled: { type: Boolean, default: false },
    orientation: { default: "horizontal" },
    dir: {},
    inverted: { type: Boolean, default: false },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    minStepsBetweenThumbs: { default: 0 },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "valueCommit"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { min: s, max: r, step: l, minStepsBetweenThumbs: i, orientation: u, disabled: d, dir: p } = toRefs(e), c = ue(p), { forwardRef: f, currentElement: v } = $(), y = Ke(v);
    Po();
    const C = X(e, "modelValue", a, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), E = ref(0), _ = ref(C.value);
    function x(R) {
      const V = si(C.value, R);
      A(R, V);
    }
    function B(R) {
      A(R, E.value);
    }
    function O() {
      const R = _.value[E.value];
      C.value[E.value] !== R && a("valueCommit", toRaw(C.value));
    }
    function A(R, V, { commit: j } = { commit: false }) {
      var q;
      const I = ui(l.value), L = di(Math.round((R - s.value) / l.value) * l.value + s.value, I), W = ca(L, [s.value, r.value]), F = ni(C.value, W, V);
      if (ii(F, i.value * l.value)) {
        E.value = F.indexOf(W);
        const oe = String(F) !== String(C.value);
        oe && j && a("valueCommit", F), oe && ((q = M.value[E.value]) == null || q.focus(), C.value = F);
      }
    }
    const M = ref([]);
    return vi({
      modelValue: C,
      valueIndexToChangeRef: E,
      thumbElements: M,
      orientation: u,
      min: s,
      max: r,
      disabled: d
    }), (R, V) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(Bo), null, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(unref(u) === "horizontal" ? ci : pi), mergeProps(R.$attrs, {
            ref: unref(f),
            "as-child": R.asChild,
            as: R.as,
            min: unref(s),
            max: unref(r),
            dir: unref(c),
            inverted: R.inverted,
            "aria-disabled": unref(d),
            "data-disabled": unref(d) ? "" : void 0,
            onPointerdown: V[0] || (V[0] = () => {
              unref(d) || (_.value = unref(C));
            }),
            onSlideStart: V[1] || (V[1] = (j) => !unref(d) && x(j)),
            onSlideMove: V[2] || (V[2] = (j) => !unref(d) && B(j)),
            onSlideEnd: V[3] || (V[3] = (j) => !unref(d) && O()),
            onHomeKeyDown: V[4] || (V[4] = (j) => !unref(d) && A(unref(s), 0, { commit: true })),
            onEndKeyDown: V[5] || (V[5] = (j) => !unref(d) && A(unref(r), unref(C).length - 1, { commit: true })),
            onStepKeyDown: V[6] || (V[6] = (j, I) => {
              if (!unref(d)) {
                const F = unref(fa).includes(j.key) || j.shiftKey && unref(va).includes(j.key) ? 10 : 1, q = E.value, oe = unref(C)[q], ce = unref(l) * F * I;
                A(oe + ce, q, { commit: true });
              }
            })
          }), {
            default: withCtx(() => [
              renderSlot(R.$slots, "default", { modelValue: unref(C) })
            ]),
            _: 3
          }, 16, ["as-child", "as", "min", "max", "dir", "inverted", "aria-disabled", "data-disabled"]))
        ]),
        _: 3
      }),
      unref(y) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(C), (j, I) => (openBlock(), createElementBlock("input", {
        key: I,
        value: j,
        type: "number",
        style: { display: "none" },
        name: R.name ? R.name + (unref(C).length > 1 ? "[]" : "") : void 0,
        disabled: unref(d)
      }, null, 8, fi))), 128)) : createCommentVNode("", true)
    ], 64));
  }
}), mi = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "SliderThumbImpl",
  props: {
    index: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = Kt(), a = ha(), { forwardRef: s, currentElement: r } = $(), l = computed(() => {
      var v, y;
      return (y = (v = e.modelValue) == null ? void 0 : v.value) == null ? void 0 : y[t.index];
    }), i = computed(() => l.value === void 0 ? 0 : pa(l.value, e.min.value ?? 0, e.max.value ?? 100)), u = computed(() => {
      var v, y;
      return ai(t.index, ((y = (v = e.modelValue) == null ? void 0 : v.value) == null ? void 0 : y.length) ?? 0);
    }), d = Tn(r), p = computed(() => d[a.size].value), c = computed(() => p.value ? ri(p.value, i.value, a.direction) : 0), f = Tt();
    return onMounted(() => {
      e.thumbElements.value.push(r.value);
    }), onUnmounted(() => {
      const v = e.thumbElements.value.findIndex((y) => y === r.value) ?? -1;
      e.thumbElements.value.splice(v, 1);
    }), (v, y) => (openBlock(), createBlock(unref(So), null, {
      default: withCtx(() => [
        createVNode(unref(D), mergeProps(v.$attrs, {
          ref: unref(s),
          role: "slider",
          "data-radix-vue-collection-item": "",
          tabindex: unref(e).disabled.value ? void 0 : 0,
          "aria-label": v.$attrs["aria-label"] || u.value,
          "data-disabled": unref(e).disabled.value ? "" : void 0,
          "data-orientation": unref(e).orientation.value,
          "aria-valuenow": l.value,
          "aria-valuemin": unref(e).min.value,
          "aria-valuemax": unref(e).max.value,
          "aria-orientation": unref(e).orientation.value,
          "as-child": v.asChild,
          as: v.as,
          style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [unref(a).startEdge]: `calc(${i.value}% + ${c.value}px)`,
            /**
             * There will be no value on initial render while we work out the index so we hide thumbs
             * without a value, otherwise SSR will render them in the wrong position before they
             * snap into the correct position during hydration which would be visually jarring for
             * slower connections.
             */
            display: !unref(f) && l.value === void 0 ? "none" : void 0
          },
          onFocus: y[0] || (y[0] = () => {
            unref(e).valueIndexToChangeRef.value = v.index;
          })
        }), {
          default: withCtx(() => [
            renderSlot(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["tabindex", "aria-label", "data-disabled", "data-orientation", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-orientation", "as-child", "as", "style"])
      ]),
      _: 3
    }));
  }
}), Vc = /* @__PURE__ */ defineComponent({
  __name: "SliderThumb",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { getItems: e } = jn(), { forwardRef: a, currentElement: s } = $(), r = computed(() => s.value ? e().findIndex((l) => l.ref === s.value) : -1);
    return (l, i) => (openBlock(), createBlock(mi, mergeProps({ ref: unref(a) }, t, { index: r.value }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["index"]));
  }
}), Fc = /* @__PURE__ */ defineComponent({
  __name: "SliderTrack",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = Kt();
    return $(), (e, a) => (openBlock(), createBlock(unref(D), {
      "as-child": e.asChild,
      as: e.as,
      "data-disabled": unref(t).disabled.value ? "" : void 0,
      "data-orientation": unref(t).orientation.value
    }, {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as-child", "as", "data-disabled", "data-orientation"]));
  }
}), Lc = /* @__PURE__ */ defineComponent({
  __name: "SliderRange",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = Kt(), e = ha();
    $();
    const a = computed(() => {
      var l, i;
      return (i = (l = t.modelValue) == null ? void 0 : l.value) == null ? void 0 : i.map(
        (u) => pa(u, t.min.value, t.max.value)
      );
    }), s = computed(() => t.modelValue.value.length > 1 ? Math.min(...a.value) : 0), r = computed(() => 100 - Math.max(...a.value));
    return (l, i) => (openBlock(), createBlock(unref(D), {
      "data-disabled": unref(t).disabled.value ? "" : void 0,
      "data-orientation": unref(t).orientation.value,
      "as-child": l.asChild,
      as: l.as,
      style: normalizeStyle({
        [unref(e).startEdge]: `${s.value}%`,
        [unref(e).endEdge]: `${r.value}%`
      })
    }, {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["data-disabled", "data-orientation", "as-child", "as", "style"]));
  }
}), hi = ["name", "disabled", "required", "value", "checked", "data-state", "data-disabled"], [gi, yi] = H("SwitchRoot"), Kc = /* @__PURE__ */ defineComponent({
  __name: "SwitchRoot",
  props: {
    defaultChecked: { type: Boolean },
    checked: { type: Boolean, default: void 0 },
    disabled: { type: Boolean },
    required: { type: Boolean },
    name: {},
    id: {},
    value: { default: "on" },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:checked"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { disabled: s } = toRefs(e), r = X(e, "checked", a, {
      defaultValue: e.defaultChecked,
      passive: e.checked === void 0
    });
    function l() {
      s.value || (r.value = !r.value);
    }
    const { forwardRef: i, currentElement: u } = $(), d = Ke(u), p = computed(() => {
      var c;
      return e.id && u.value ? (c = document.querySelector(`[for="${e.id}"]`)) == null ? void 0 : c.innerText : void 0;
    });
    return yi({
      checked: r,
      toggleCheck: l,
      disabled: s
    }), (c, f) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(unref(D), mergeProps(c.$attrs, {
        id: c.id,
        ref: unref(i),
        role: "switch",
        type: c.as === "button" ? "button" : void 0,
        value: c.value,
        "aria-label": c.$attrs["aria-label"] || p.value,
        "aria-checked": unref(r),
        "aria-required": c.required,
        "data-state": unref(r) ? "checked" : "unchecked",
        "data-disabled": unref(s) ? "" : void 0,
        "as-child": c.asChild,
        as: c.as,
        disabled: unref(s),
        onClick: l,
        onKeydown: withKeys(withModifiers(l, ["prevent"]), ["enter"])
      }), {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "type", "value", "aria-label", "aria-checked", "aria-required", "data-state", "data-disabled", "as-child", "as", "disabled", "onKeydown"]),
      unref(d) ? (openBlock(), createElementBlock("input", {
        key: 0,
        type: "checkbox",
        name: c.name,
        tabindex: "-1",
        "aria-hidden": "",
        disabled: unref(s),
        required: c.required,
        value: c.value,
        checked: !!unref(r),
        "data-state": unref(r) ? "checked" : "unchecked",
        "data-disabled": unref(s) ? "" : void 0,
        style: normalizeStyle({
          transform: "translateX(-100%)",
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        })
      }, null, 12, hi)) : createCommentVNode("", true)
    ], 64));
  }
}), Nc = /* @__PURE__ */ defineComponent({
  __name: "SwitchThumb",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = gi();
    return $(), (e, a) => {
      var s;
      return openBlock(), createBlock(unref(D), {
        "data-state": (s = unref(t).checked) != null && s.value ? "checked" : "unchecked",
        "data-disabled": unref(t).disabled.value ? "" : void 0,
        "as-child": e.asChild,
        as: e.as
      }, {
        default: withCtx(() => [
          renderSlot(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["data-state", "data-disabled", "as-child", "as"]);
    };
  }
}), [Nt, bi] = H("TabsRoot"), Hc = /* @__PURE__ */ defineComponent({
  __name: "TabsRoot",
  props: {
    defaultValue: {},
    orientation: { default: "horizontal" },
    dir: {},
    activationMode: { default: "automatic" },
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { orientation: s, dir: r } = toRefs(e), l = ue(r);
    $();
    const i = X(e, "modelValue", a, {
      defaultValue: e.defaultValue,
      passive: e.modelValue === void 0
    }), u = ref();
    return bi({
      modelValue: i,
      changeModelValue: (d) => {
        i.value = d;
      },
      orientation: s,
      dir: l,
      activationMode: e.activationMode,
      baseId: ee(),
      tabsList: u
    }), (d, p) => (openBlock(), createBlock(unref(D), {
      dir: unref(l),
      "data-orientation": unref(s),
      "as-child": d.asChild,
      as: d.as
    }, {
      default: withCtx(() => [
        renderSlot(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["dir", "data-orientation", "as-child", "as"]));
  }
}), jc = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  props: {
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { loop: e } = toRefs(t), { forwardRef: a, currentElement: s } = $(), r = Nt();
    return r.tabsList = s, (l, i) => (openBlock(), createBlock(unref(Ze), {
      "as-child": "",
      orientation: unref(r).orientation.value,
      dir: unref(r).dir.value,
      loop: unref(e)
    }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          ref: unref(a),
          role: "tablist",
          "as-child": l.asChild,
          as: l.as,
          "aria-orientation": unref(r).orientation.value
        }, {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["as-child", "as", "aria-orientation"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
});
function ba(o2, t) {
  return `${o2}-trigger-${t}`;
}
function Ca(o2, t) {
  return `${o2}-content-${t}`;
}
const Wc = /* @__PURE__ */ defineComponent({
  __name: "TabsContent",
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { forwardRef: e } = $(), a = Nt(), s = computed(() => ba(a.baseId, t.value)), r = computed(() => Ca(a.baseId, t.value)), l = computed(() => t.value === a.modelValue.value), i = ref(l.value);
    return onMounted(() => {
      requestAnimationFrame(() => {
        i.value = false;
      });
    }), (u, d) => (openBlock(), createBlock(unref(ae), {
      present: l.value,
      "force-mount": ""
    }, {
      default: withCtx(({ present: p }) => [
        createVNode(unref(D), {
          id: r.value,
          ref: unref(e),
          "as-child": u.asChild,
          as: u.as,
          role: "tabpanel",
          "data-state": l.value ? "active" : "inactive",
          "data-orientation": unref(a).orientation.value,
          "aria-labelledby": s.value,
          hidden: !p.value,
          tabindex: "0",
          style: normalizeStyle({
            animationDuration: i.value ? "0s" : void 0
          })
        }, {
          default: withCtx(() => [
            u.forceMount || l.value ? renderSlot(u.$slots, "default", { key: 0 }) : createCommentVNode("", true)
          ]),
          _: 2
        }, 1032, ["id", "as-child", "as", "data-state", "data-orientation", "aria-labelledby", "hidden", "style"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), zc = /* @__PURE__ */ defineComponent({
  __name: "TabsTrigger",
  props: {
    value: {},
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, { forwardRef: e } = $(), a = Nt(), s = computed(() => ba(a.baseId, t.value)), r = computed(() => Ca(a.baseId, t.value)), l = computed(() => t.value === a.modelValue.value);
    return (i, u) => (openBlock(), createBlock(unref(Qe), {
      "as-child": "",
      focusable: !i.disabled,
      active: l.value
    }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          id: s.value,
          ref: unref(e),
          role: "tab",
          type: i.as === "button" ? "button" : void 0,
          as: i.as,
          "as-child": i.asChild,
          "aria-selected": l.value ? "true" : "false",
          "aria-controls": r.value,
          "data-state": l.value ? "active" : "inactive",
          disabled: i.disabled,
          "data-disabled": i.disabled ? "" : void 0,
          "data-orientation": unref(a).orientation.value,
          onMousedown: u[0] || (u[0] = withModifiers((d) => {
            !i.disabled && d.ctrlKey === false ? unref(a).changeModelValue(i.value) : d.preventDefault();
          }, ["left"])),
          onKeydown: u[1] || (u[1] = withKeys((d) => unref(a).changeModelValue(i.value), ["enter", "space"])),
          onFocus: u[2] || (u[2] = () => {
            const d = unref(a).activationMode !== "manual";
            !l.value && !i.disabled && d && unref(a).changeModelValue(i.value);
          })
        }, {
          default: withCtx(() => [
            renderSlot(i.$slots, "default")
          ]),
          _: 3
        }, 8, ["id", "type", "as", "as-child", "aria-selected", "aria-controls", "data-state", "disabled", "data-disabled", "data-orientation"])
      ]),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), Uc = /* @__PURE__ */ defineComponent({
  __name: "TabsIndicator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = Nt();
    $();
    const a = ref({
      size: null,
      position: null
    });
    watch(() => e.modelValue.value, async (r) => {
      await nextTick(), s();
    }, { immediate: true }), be(e.tabsList, s);
    function s() {
      var l;
      const r = (l = e.tabsList.value) == null ? void 0 : l.querySelector('[role="tab"][data-state="active"]');
      r && (e.orientation.value === "horizontal" ? a.value = {
        size: r.offsetWidth,
        position: r.offsetLeft
      } : a.value = {
        size: r.offsetHeight,
        position: r.offsetTop
      });
    }
    return (r, l) => typeof a.value.size == "number" ? (openBlock(), createBlock(unref(D), mergeProps({ key: 0 }, t, {
      style: {
        "--radix-tabs-indicator-size": `${a.value.size}px`,
        "--radix-tabs-indicator-position": `${a.value.position}px`
      }
    }), {
      default: withCtx(() => [
        renderSlot(r.$slots, "default")
      ]),
      _: 3
    }, 16, ["style"])) : createCommentVNode("", true);
  }
}), [Ht, Ci] = H("TagsInputRoot"), qc = /* @__PURE__ */ defineComponent({
  __name: "TagsInputRoot",
  props: {
    modelValue: {},
    defaultValue: { default: () => [] },
    addOnPaste: { type: Boolean },
    duplicate: { type: Boolean },
    disabled: { type: Boolean },
    delimiter: { default: "," },
    dir: {},
    max: { default: 0 },
    required: { type: Boolean },
    name: {},
    id: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue", "invalid"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { addOnPaste: s, disabled: r, delimiter: l, max: i, id: u, dir: d } = toRefs(e), p = ue(d), c = X(e, "modelValue", a, {
      defaultValue: e.defaultValue,
      passive: true,
      deep: true
    }), { forwardRef: f, currentElement: v } = $(), { focused: y } = ps(v), C = Ke(v), { getItems: E } = Po(), _ = ref(), x = ref(false);
    return Ci({
      modelValue: c,
      onAddValue: (B) => {
        if (c.value.length >= i.value && i.value)
          return a("invalid", B), false;
        if (e.duplicate)
          return c.value.push(B), true;
        if (c.value.includes(B))
          x.value = true;
        else
          return c.value.push(B), true;
        return a("invalid", B), false;
      },
      onRemoveValue: (B) => {
        B !== -1 && c.value.splice(B, 1);
      },
      onInputKeydown: (B) => {
        const O = B.target, A = E().map((R) => R.ref).filter((R) => R.dataset.disabled !== "");
        if (!A.length)
          return;
        const M = A.at(-1);
        switch (B.key) {
          case "Delete":
          case "Backspace": {
            if (O.selectionStart !== 0 || O.selectionEnd !== 0)
              break;
            if (_.value) {
              const R = A.findIndex((V) => V === _.value);
              c.value.splice(R, 1), _.value = _.value === M ? A.at(R - 1) : A.at(R + 1), B.preventDefault();
            } else
              B.key === "Backspace" && (_.value = M, B.preventDefault());
            break;
          }
          case "Home":
          case "End":
          case "ArrowRight":
          case "ArrowLeft": {
            const R = B.key === "ArrowRight" && p.value === "ltr" || B.key === "ArrowLeft" && p.value === "rtl", V = !R;
            if (O.selectionStart !== 0 || O.selectionEnd !== 0)
              break;
            if (V && !_.value)
              _.value = M, B.preventDefault();
            else if (R && M && _.value === M)
              _.value = void 0, B.preventDefault();
            else if (_.value) {
              const j = Ye(B, _.value, void 0, {
                itemsArray: A,
                loop: false,
                dir: p.value
              });
              j && (_.value = j), B.preventDefault();
            }
            break;
          }
          case "ArrowUp":
          case "ArrowDown": {
            _.value && B.preventDefault();
            break;
          }
          default:
            _.value = void 0;
        }
      },
      selectedElement: _,
      isInvalidInput: x,
      addOnPaste: s,
      dir: p,
      disabled: r,
      delimiter: l,
      max: i,
      id: u
    }), (B, O) => (openBlock(), createBlock(unref(Bo), null, {
      default: withCtx(() => [
        createVNode(unref(D), {
          ref: unref(f),
          dir: unref(p),
          as: B.as,
          "as-child": B.asChild,
          "data-invalid": x.value ? "" : void 0,
          "data-disabled": unref(r) ? "" : void 0,
          "data-focused": unref(y) ? "" : void 0
        }, {
          default: withCtx(() => [
            renderSlot(B.$slots, "default", { modelValue: unref(c) }),
            unref(C) && B.name ? (openBlock(), createBlock(unref(Hn), {
              key: 0,
              name: B.name,
              value: unref(c),
              required: B.required,
              disabled: unref(r)
            }, null, 8, ["name", "value", "required", "disabled"])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["dir", "as", "as-child", "data-invalid", "data-disabled", "data-focused"])
      ]),
      _: 3
    }));
  }
}), Gc = /* @__PURE__ */ defineComponent({
  __name: "TagsInputInput",
  props: {
    placeholder: {},
    autoFocus: { type: Boolean },
    maxLength: {},
    asChild: { type: Boolean },
    as: { default: "input" }
  },
  setup(o2) {
    const t = o2, e = Ht(), { forwardRef: a, currentElement: s } = $();
    async function r(u) {
      if (await nextTick(), u.defaultPrevented)
        return;
      const d = u.target;
      if (!d.value)
        return;
      e.onAddValue(d.value) && (d.value = ""), u.preventDefault();
    }
    function l(u) {
      e.isInvalidInput.value = false;
      const d = e.delimiter.value;
      if (d === u.data) {
        const p = u.target;
        p.value = p.value.replaceAll(d, ""), e.onAddValue(p.value) && (p.value = "");
      }
    }
    function i(u) {
      if (e.addOnPaste.value) {
        u.preventDefault();
        const d = u.clipboardData;
        if (!d)
          return;
        const p = d.getData("text");
        e.delimiter.value ? p.split(e.delimiter.value).forEach((f) => {
          e.onAddValue(f);
        }) : e.onAddValue(p);
      }
    }
    return onMounted(() => {
      const u = s.value.nodeName === "INPUT" ? s.value : s.value.querySelector("input");
      u && setTimeout(() => {
        t.autoFocus && (u == null || u.focus());
      }, 1);
    }), (u, d) => {
      var p;
      return openBlock(), createBlock(unref(D), mergeProps(t, {
        id: (p = unref(e).id) == null ? void 0 : p.value,
        ref: unref(a),
        type: "text",
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        maxlength: u.maxLength,
        disabled: unref(e).disabled.value,
        "data-invalid": unref(e).isInvalidInput.value ? "" : void 0,
        onInput: l,
        onKeydown: [
          withKeys(r, ["enter"]),
          unref(e).onInputKeydown
        ],
        onPaste: i
      }), {
        default: withCtx(() => [
          renderSlot(u.$slots, "default")
        ]),
        _: 3
      }, 16, ["id", "maxlength", "disabled", "data-invalid", "onKeydown"]);
    };
  }
}), [wa, wi] = H("TagsInputItem"), Yc = /* @__PURE__ */ defineComponent({
  __name: "TagsInputItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { value: e } = toRefs(t), a = Ht(), { forwardRef: s, currentElement: r } = $(), l = computed(() => a.selectedElement.value === r.value), i = ee(), u = computed(() => t.disabled || a.disabled.value);
    return wi({
      value: e,
      isSelected: l,
      disabled: u,
      textId: i
    }), (d, p) => (openBlock(), createBlock(unref(So), null, {
      default: withCtx(() => [
        createVNode(unref(D), {
          ref: unref(s),
          as: d.as,
          "as-child": d.asChild,
          "aria-labelledby": unref(i),
          "aria-current": l.value,
          "data-disabled": u.value ? "" : void 0,
          "data-state": l.value ? "active" : "inactive"
        }, {
          default: withCtx(() => [
            renderSlot(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child", "aria-labelledby", "aria-current", "data-disabled", "data-state"])
      ]),
      _: 3
    }));
  }
}), Xc = /* @__PURE__ */ defineComponent({
  __name: "TagsInputItemText",
  props: {
    asChild: { type: Boolean },
    as: { default: "span" }
  },
  setup(o2) {
    const t = o2, e = wa();
    return $(), (a, s) => (openBlock(), createBlock(unref(D), mergeProps(t, {
      id: unref(e).textId
    }), {
      default: withCtx(() => [
        renderSlot(a.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(unref(e).value.value), 1)
        ])
      ]),
      _: 3
    }, 16, ["id"]));
  }
}), Jc = /* @__PURE__ */ defineComponent({
  __name: "TagsInputItemDelete",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2;
    $();
    const e = Ht(), a = wa(), s = computed(() => {
      var l;
      return ((l = a.disabled) == null ? void 0 : l.value) || e.disabled.value;
    });
    function r() {
      if (s.value)
        return;
      const l = e.modelValue.value.findIndex((i) => i === a.value.value);
      e.onRemoveValue(l);
    }
    return (l, i) => (openBlock(), createBlock(unref(D), mergeProps({ tabindex: "-1" }, t, {
      "aria-labelledby": unref(a).textId,
      "aria-current": unref(a).isSelected.value,
      "data-state": unref(a).isSelected.value ? "active" : "inactive",
      "data-disabled": s.value ? "" : void 0,
      type: l.as === "button" ? "button" : void 0,
      onClick: r
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-labelledby", "aria-current", "data-state", "data-disabled", "type"]));
  }
}), [jt, _i] = H("ToastProvider"), Qc = /* @__PURE__ */ defineComponent({
  __name: "ToastProvider",
  props: {
    label: { default: "Notification" },
    duration: { default: 5e3 },
    swipeDirection: { default: "right" },
    swipeThreshold: { default: 50 }
  },
  setup(o2) {
    const t = o2, { label: e, duration: a, swipeDirection: s, swipeThreshold: r } = toRefs(t), l = ref(), i = ref(0), u = ref(false), d = ref(false);
    if (t.label && typeof t.label == "string" && !t.label.trim()) {
      const p = "Invalid prop `label` supplied to `ToastProvider`. Expected non-empty `string`.";
      throw new Error(p);
    }
    return _i({
      label: e,
      duration: a,
      swipeDirection: s,
      swipeThreshold: r,
      toastCount: i,
      viewport: l,
      onViewportChange(p) {
        l.value = p;
      },
      onToastAdd() {
        i.value++;
      },
      onToastRemove() {
        i.value--;
      },
      isFocusedToastEscapeKeyDownRef: u,
      isClosePausedRef: d
    }), (p, c) => renderSlot(p.$slots, "default");
  }
}), $i = "toast.swipeStart", xi = "toast.swipeMove", Ei = "toast.swipeCancel", Pi = "toast.swipeEnd", so = "toast.viewportPause", ro = "toast.viewportResume";
function $t(o2, t, e) {
  const a = e.originalEvent.currentTarget, s = new CustomEvent(o2, {
    bubbles: false,
    cancelable: true,
    detail: e
  });
  t && a.addEventListener(o2, t, { once: true }), a.dispatchEvent(s);
}
function cn(o2, t, e = 0) {
  const a = Math.abs(o2.x), s = Math.abs(o2.y), r = a > s;
  return t === "left" || t === "right" ? r && a > e : !r && s > e;
}
function Bi(o2) {
  return o2.nodeType === o2.ELEMENT_NODE;
}
function _a(o2) {
  const t = [];
  return Array.from(o2.childNodes).forEach((a) => {
    if (a.nodeType === a.TEXT_NODE && a.textContent && t.push(a.textContent), Bi(a)) {
      const s = a.ariaHidden || a.hidden || a.style.display === "none", r = a.dataset.radixToastAnnounceExclude === "";
      if (!s)
        if (r) {
          const l = a.dataset.radixToastAnnounceAlt;
          l && t.push(l);
        } else
          t.push(..._a(a));
    }
  }), t;
}
const Si = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounce",
  setup(o2) {
    const t = jt(), e = ss(1e3), a = ref(false);
    return ds(() => {
      a.value = true;
    }), (s, r) => unref(e) || a.value ? (openBlock(), createBlock(unref(Je), { key: 0 }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString(unref(t).label.value) + " ", 1),
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    })) : createCommentVNode("", true);
  }
}), [Ti, Di] = H("ToastRoot"), Oi = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastRootImpl",
  props: {
    type: {},
    open: { type: Boolean, default: false },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["close", "escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { forwardRef: s, currentElement: r } = $(), l = jt(), i = ref(null), u = ref(null), d = computed(() => e.duration || l.duration.value), p = ref(0), c = ref(d.value), f = ref(0);
    function v(E) {
      !E || E === Number.POSITIVE_INFINITY || (window.clearTimeout(f.value), p.value = (/* @__PURE__ */ new Date()).getTime(), f.value = window.setTimeout(y, E));
    }
    function y() {
      var _, x;
      ((_ = r.value) == null ? void 0 : _.contains(document.activeElement)) && ((x = l.viewport.value) == null || x.focus()), a("close");
    }
    const C = computed(() => r.value ? _a(r.value) : null);
    if (e.type && !["foreground", "background"].includes(e.type)) {
      const E = "Invalid prop `type` supplied to `Toast`. Expected `foreground | background`.";
      throw new Error(E);
    }
    return watchEffect((E) => {
      const _ = l.viewport.value;
      if (_) {
        const x = () => {
          v(c.value), a("resume");
        }, B = () => {
          const O = (/* @__PURE__ */ new Date()).getTime() - p.value;
          c.value = c.value - O, window.clearTimeout(f.value), a("pause");
        };
        return _.addEventListener(so, B), _.addEventListener(ro, x), () => {
          _.removeEventListener(so, B), _.removeEventListener(ro, x);
        };
      }
    }), watchEffect(() => {
      e.open && !l.isClosePausedRef.value && v(d.value);
    }), mo("Escape", (E) => {
      a("escapeKeyDown", E), E.defaultPrevented || (l.isFocusedToastEscapeKeyDownRef.value = true, y());
    }), onMounted(() => {
      l.onToastAdd();
    }), onUnmounted(() => {
      l.onToastRemove();
    }), Di({ onClose: y }), (E, _) => (openBlock(), createElementBlock(Fragment, null, [
      C.value ? (openBlock(), createBlock(Si, {
        key: 0,
        role: "status",
        "aria-live": E.type === "foreground" ? "assertive" : "polite",
        "aria-atomic": ""
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(C.value), 1)
        ]),
        _: 1
      }, 8, ["aria-live"])) : createCommentVNode("", true),
      (openBlock(), createBlock(Teleport, {
        to: unref(l).viewport.value
      }, [
        createVNode(unref(D), mergeProps({
          ref: unref(s),
          role: "status",
          "aria-live": "off",
          "aria-atomic": "",
          tabindex: "0",
          "data-radix-vue-collection-item": ""
        }, E.$attrs, {
          as: E.as,
          "as-child": E.asChild,
          "data-state": E.open ? "open" : "closed",
          "data-swipe-direction": unref(l).swipeDirection.value,
          style: { userSelect: "none", touchAction: "none" },
          onPointerdown: _[0] || (_[0] = withModifiers((x) => {
            i.value = { x: x.clientX, y: x.clientY };
          }, ["left"])),
          onPointermove: _[1] || (_[1] = (x) => {
            if (!i.value)
              return;
            const B = x.clientX - i.value.x, O = x.clientY - i.value.y, A = !!u.value, M = ["left", "right"].includes(unref(l).swipeDirection.value), R = ["left", "up"].includes(unref(l).swipeDirection.value) ? Math.min : Math.max, V = M ? R(0, B) : 0, j = M ? 0 : R(0, O), I = x.pointerType === "touch" ? 10 : 2, L = { x: V, y: j }, W = { originalEvent: x, delta: L };
            A ? (u.value = L, unref($t)(unref(xi), (F) => a("swipeMove", F), W)) : unref(cn)(L, unref(l).swipeDirection.value, I) ? (u.value = L, unref($t)(unref($i), (F) => a("swipeStart", F), W), x.target.setPointerCapture(x.pointerId)) : (Math.abs(B) > I || Math.abs(O) > I) && (i.value = null);
          }),
          onPointerup: _[2] || (_[2] = (x) => {
            const B = u.value, O = x.target;
            if (O.hasPointerCapture(x.pointerId) && O.releasePointerCapture(x.pointerId), u.value = null, i.value = null, B) {
              const A = x.currentTarget, M = { originalEvent: x, delta: B };
              unref(cn)(B, unref(l).swipeDirection.value, unref(l).swipeThreshold.value) ? unref($t)(unref(Pi), (R) => a("swipeEnd", R), M) : unref($t)(unref(Ei), (R) => a("swipeCancel", R), M), A == null || A.addEventListener("click", (R) => R.preventDefault(), {
                once: true
              });
            }
          })
        }), {
          default: withCtx(() => [
            renderSlot(E.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child", "data-state", "data-swipe-direction"])
      ], 8, ["to"]))
    ], 64));
  }
}), ep = /* @__PURE__ */ defineComponent({
  __name: "ToastRoot",
  props: {
    defaultOpen: { type: Boolean, default: true },
    forceMount: { type: Boolean },
    type: { default: "foreground" },
    open: { type: Boolean, default: void 0 },
    duration: {},
    asChild: { type: Boolean },
    as: { default: "li" }
  },
  emits: ["escapeKeyDown", "pause", "resume", "swipeStart", "swipeMove", "swipeCancel", "swipeEnd", "update:open"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { forwardRef: s } = $(), r = X(e, "open", a, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    return (l, i) => (openBlock(), createBlock(unref(ae), {
      present: l.forceMount || unref(r)
    }, {
      default: withCtx(() => [
        createVNode(Oi, mergeProps({
          ref: unref(s),
          open: unref(r),
          type: l.type,
          as: l.as,
          "as-child": l.asChild,
          duration: l.duration
        }, l.$attrs, {
          onClose: i[0] || (i[0] = (u) => r.value = false),
          onPause: i[1] || (i[1] = (u) => a("pause")),
          onResume: i[2] || (i[2] = (u) => a("resume")),
          onEscapeKeyDown: i[3] || (i[3] = (u) => a("escapeKeyDown", u)),
          onSwipeStart: i[4] || (i[4] = (u) => {
            a("swipeStart", u), u.currentTarget.setAttribute("data-swipe", "start");
          }),
          onSwipeMove: i[5] || (i[5] = (u) => {
            const { x: d, y: p } = u.detail.delta, c = u.currentTarget;
            c.setAttribute("data-swipe", "move"), c.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), c.style.setProperty("--radix-toast-swipe-move-y", `${p}px`);
          }),
          onSwipeCancel: i[6] || (i[6] = (u) => {
            const d = u.currentTarget;
            d.setAttribute("data-swipe", "cancel"), d.style.removeProperty("--radix-toast-swipe-move-x"), d.style.removeProperty("--radix-toast-swipe-move-y"), d.style.removeProperty("--radix-toast-swipe-end-x"), d.style.removeProperty("--radix-toast-swipe-end-y");
          }),
          onSwipeEnd: i[7] || (i[7] = (u) => {
            const { x: d, y: p } = u.detail.delta, c = u.currentTarget;
            c.setAttribute("data-swipe", "end"), c.style.removeProperty("--radix-toast-swipe-move-x"), c.style.removeProperty("--radix-toast-swipe-move-y"), c.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), c.style.setProperty("--radix-toast-swipe-end-y", `${p}px`), r.value = false;
          })
        }), {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
          ]),
          _: 3
        }, 16, ["open", "type", "as", "as-child", "duration"])
      ]),
      _: 3
    }, 8, ["present"]));
  }
}), $a = /* @__PURE__ */ defineComponent({
  __name: "ToastAnnounceExclude",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    return (t, e) => (openBlock(), createBlock(unref(D), {
      as: t.as,
      "as-child": t.asChild,
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": t.altText || void 0
    }, {
      default: withCtx(() => [
        renderSlot(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "data-radix-toast-announce-alt"]));
  }
}), Ii = /* @__PURE__ */ defineComponent({
  __name: "ToastClose",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, e = Ti(), { forwardRef: a } = $();
    return (s, r) => (openBlock(), createBlock($a, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(D), mergeProps(t, {
          ref: unref(a),
          type: s.as === "button" ? "button" : void 0,
          onClick: r[0] || (r[0] = (l) => unref(e).onClose())
        }), {
          default: withCtx(() => [
            renderSlot(s.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }));
  }
}), tp = /* @__PURE__ */ defineComponent({
  __name: "ToastAction",
  props: {
    altText: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    if (!o2.altText)
      throw new Error("Missing prop `altText` expected on `ToastAction`");
    const { forwardRef: e } = $();
    return (a, s) => a.altText ? (openBlock(), createBlock($a, {
      key: 0,
      "alt-text": a.altText,
      "as-child": ""
    }, {
      default: withCtx(() => [
        createVNode(Ii, {
          ref: unref(e),
          as: a.as,
          "as-child": a.asChild
        }, {
          default: withCtx(() => [
            renderSlot(a.$slots, "default")
          ]),
          _: 3
        }, 8, ["as", "as-child"])
      ]),
      _: 3
    }, 8, ["alt-text"])) : createCommentVNode("", true);
  }
}), pn = /* @__PURE__ */ defineComponent({
  __name: "FocusProxy",
  emits: ["focusFromOutsideViewport"],
  setup(o2, { emit: t }) {
    const e = t, a = jt();
    return (s, r) => (openBlock(), createBlock(unref(Je), {
      "aria-hidden": "",
      tabindex: "0",
      style: { position: "'fixed'" },
      onFocus: r[0] || (r[0] = (l) => {
        var d;
        const i = l.relatedTarget;
        !((d = unref(a).viewport.value) != null && d.contains(i)) && e("focusFromOutsideViewport");
      })
    }, {
      default: withCtx(() => [
        renderSlot(s.$slots, "default")
      ]),
      _: 3
    }));
  }
}), op = /* @__PURE__ */ defineComponent({
  inheritAttrs: false,
  __name: "ToastViewport",
  props: {
    hotkey: { default: () => ["F8"] },
    label: { default: "Notifications ({hotkey})" },
    asChild: { type: Boolean },
    as: { default: "ol" }
  },
  setup(o2) {
    const t = o2, { hotkey: e, label: a } = toRefs(t), { forwardRef: s, currentElement: r } = $(), { createCollection: l } = fe(), i = l(r), u = jt(), d = computed(() => u.toastCount.value > 0), p = ref(), c = ref();
    mo(e.value, () => {
      r.value.focus();
    }), onMounted(() => {
      u.onViewportChange(r.value);
    }), watchEffect((v) => {
      const y = r.value;
      if (d.value && y) {
        const C = () => {
          if (!u.isClosePausedRef.value) {
            const O = new CustomEvent(so);
            y.dispatchEvent(O), u.isClosePausedRef.value = true;
          }
        }, E = () => {
          if (u.isClosePausedRef.value) {
            const O = new CustomEvent(ro);
            y.dispatchEvent(O), u.isClosePausedRef.value = false;
          }
        }, _ = (O) => {
          !y.contains(O.relatedTarget) && E();
        }, x = () => {
          y.contains(document.activeElement) || E();
        }, B = (O) => {
          var R, V, j;
          const A = O.altKey || O.ctrlKey || O.metaKey;
          if (O.key === "Tab" && !A) {
            const I = document.activeElement, L = O.shiftKey;
            if (O.target === y && L) {
              (R = p.value) == null || R.focus();
              return;
            }
            const q = f({ tabbingDirection: L ? "backwards" : "forwards" }), oe = q.findIndex((ce) => ce === I);
            xt(q.slice(oe + 1)) ? O.preventDefault() : L ? (V = p.value) == null || V.focus() : (j = c.value) == null || j.focus();
          }
        };
        y.addEventListener("focusin", C), y.addEventListener("focusout", _), y.addEventListener("pointermove", C), y.addEventListener("pointerleave", x), y.addEventListener("keydown", B), window.addEventListener("blur", C), window.addEventListener("focus", E), v(() => {
          y.removeEventListener("focusin", C), y.removeEventListener("focusout", _), y.removeEventListener("pointermove", C), y.removeEventListener("pointerleave", x), y.removeEventListener("keydown", B), window.removeEventListener("blur", C), window.removeEventListener("focus", E);
        });
      }
    });
    function f({ tabbingDirection: v }) {
      const C = i.value.map((E) => {
        const _ = [E, ...wo(E)];
        return v === "forwards" ? _ : _.reverse();
      });
      return (v === "forwards" ? C.reverse() : C).flat();
    }
    return (v, y) => (openBlock(), createBlock(unref(Hs), {
      role: "region",
      "aria-label": unref(a).replace("{hotkey}", unref(e).join("+").replace(/Key/g, "").replace(/Digit/g, "")),
      tabindex: "-1",
      style: normalizeStyle({
        // incase list has size when empty (e.g. padding), we remove pointer events so
        // it doesn't prevent interactions with page elements that it overlays
        pointerEvents: d.value ? void 0 : "none"
      })
    }, {
      default: withCtx(() => [
        d.value ? (openBlock(), createBlock(pn, {
          key: 0,
          ref: (C) => {
            p.value = unref(ve)(C);
          },
          onFocusFromOutsideViewport: y[0] || (y[0] = () => {
            const C = f({
              tabbingDirection: "forwards"
            });
            unref(xt)(C);
          })
        }, null, 512)) : createCommentVNode("", true),
        createVNode(unref(D), mergeProps({
          ref: unref(s),
          tabindex: "-1",
          as: v.as,
          "as-child": v.asChild
        }, v.$attrs), {
          default: withCtx(() => [
            renderSlot(v.$slots, "default")
          ]),
          _: 3
        }, 16, ["as", "as-child"]),
        d.value ? (openBlock(), createBlock(pn, {
          key: 1,
          ref: (C) => {
            c.value = unref(ve)(C);
          },
          onFocusFromOutsideViewport: y[1] || (y[1] = () => {
            const C = f({
              tabbingDirection: "backwards"
            });
            unref(xt)(C);
          })
        }, null, 512)) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["aria-label", "style"]));
  }
}), np = /* @__PURE__ */ defineComponent({
  __name: "ToastTitle",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(D), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ap = /* @__PURE__ */ defineComponent({
  __name: "ToastDescription",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(D), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ai = /* @__PURE__ */ defineComponent({
  __name: "Toggle",
  props: {
    defaultValue: { type: Boolean },
    pressed: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: false },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  emits: ["update:pressed"],
  setup(o2, { emit: t }) {
    const e = o2, a = t;
    $();
    const s = X(e, "pressed", a, {
      defaultValue: e.defaultValue,
      passive: e.pressed === void 0
    });
    function r() {
      s.value = !s.value;
    }
    const l = computed(() => s.value ? "on" : "off");
    return (i, u) => (openBlock(), createBlock(unref(D), {
      type: i.as === "button" ? "button" : void 0,
      "as-child": e.asChild,
      as: i.as,
      "aria-pressed": unref(s),
      "data-state": l.value,
      "data-disabled": i.disabled ? "" : void 0,
      disabled: i.disabled,
      onClick: r
    }, {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["type", "as-child", "as", "aria-pressed", "data-state", "data-disabled", "disabled"]));
  }
}), [Ri, Mi] = H("ToggleGroupRoot"), ki = /* @__PURE__ */ defineComponent({
  __name: "ToggleGroupRoot",
  props: {
    type: { default: "single" },
    defaultValue: {},
    modelValue: {},
    rovingFocus: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    orientation: {},
    dir: {},
    loop: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, { loop: s, rovingFocus: r, disabled: l, dir: i } = toRefs(e), u = ue(i), { forwardRef: d } = $(), { modelValue: p, changeModelValue: c } = An(e, a);
    return Mi({
      type: e.type,
      modelValue: p,
      changeModelValue: c,
      dir: u,
      orientation: e.orientation,
      loop: s,
      rovingFocus: r,
      disabled: l
    }), (f, v) => (openBlock(), createBlock(resolveDynamicComponent(unref(r) ? unref(Ze) : unref(D)), {
      "as-child": "",
      orientation: unref(r) ? f.orientation : void 0,
      dir: unref(u),
      loop: unref(r) ? unref(s) : void 0
    }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          ref: unref(d),
          role: "group",
          "as-child": f.asChild,
          as: f.as
        }, {
          default: withCtx(() => [
            renderSlot(f.$slots, "default", { modelValue: unref(p) })
          ]),
          _: 3
        }, 8, ["as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), Vi = /* @__PURE__ */ defineComponent({
  __name: "ToggleGroupItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, e = Ri(), a = computed(() => {
      var l;
      return ((l = e.disabled) == null ? void 0 : l.value) || t.disabled;
    }), s = computed(() => {
      var l;
      return (l = e.modelValue.value) == null ? void 0 : l.includes(t.value);
    }), { forwardRef: r } = $();
    return (l, i) => (openBlock(), createBlock(resolveDynamicComponent(unref(e).rovingFocus.value ? unref(Qe) : unref(D)), {
      "as-child": "",
      focusable: !a.value,
      active: s.value
    }, {
      default: withCtx(() => {
        var u;
        return [
          createVNode(unref(Ai), mergeProps(t, {
            ref: unref(r),
            disabled: a.value,
            pressed: unref(e).type === "single" ? unref(e).modelValue.value === l.value : (u = unref(e).modelValue.value) == null ? void 0 : u.includes(l.value),
            "onUpdate:pressed": i[0] || (i[0] = (d) => unref(e).changeModelValue(l.value))
          }), {
            default: withCtx(() => [
              renderSlot(l.$slots, "default")
            ]),
            _: 3
          }, 16, ["disabled", "pressed"])
        ];
      }),
      _: 3
    }, 8, ["focusable", "active"]));
  }
}), [xa, Fi] = H("ToolbarRoot"), sp = /* @__PURE__ */ defineComponent({
  __name: "ToolbarRoot",
  props: {
    orientation: { default: "horizontal" },
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { orientation: e, dir: a } = toRefs(t), s = ue(a), { forwardRef: r } = $();
    return Fi({ orientation: e, dir: s }), (l, i) => (openBlock(), createBlock(unref(Ze), {
      "as-child": "",
      orientation: unref(e),
      dir: unref(s),
      loop: l.loop
    }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          ref: unref(r),
          role: "toolbar",
          "aria-orientation": unref(e),
          "as-child": l.asChild,
          as: l.as
        }, {
          default: withCtx(() => [
            renderSlot(l.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-orientation", "as-child", "as"])
      ]),
      _: 3
    }, 8, ["orientation", "dir", "loop"]));
  }
}), Li = /* @__PURE__ */ defineComponent({
  __name: "ToolbarButton",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, { forwardRef: e } = $();
    return (a, s) => (openBlock(), createBlock(unref(Qe), {
      "as-child": "",
      focusable: !a.disabled
    }, {
      default: withCtx(() => [
        createVNode(unref(D), mergeProps({
          ref: unref(e),
          type: a.as === "button" ? "button" : void 0
        }, t), {
          default: withCtx(() => [
            renderSlot(a.$slots, "default")
          ]),
          _: 3
        }, 16, ["type"])
      ]),
      _: 3
    }, 8, ["focusable"]));
  }
}), rp = /* @__PURE__ */ defineComponent({
  __name: "ToolbarLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(o2) {
    const t = o2, { forwardRef: e } = $();
    return (a, s) => (openBlock(), createBlock(unref(Qe), {
      "as-child": "",
      focusable: ""
    }, {
      default: withCtx(() => [
        createVNode(unref(D), mergeProps(t, {
          ref: unref(e),
          onKeydown: s[0] || (s[0] = (r) => {
            var l;
            r.key === " " && ((l = r.currentTarget) == null || l.click());
          })
        }), {
          default: withCtx(() => [
            renderSlot(a.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), lp = /* @__PURE__ */ defineComponent({
  __name: "ToolbarToggleGroup",
  props: {
    type: {},
    defaultValue: {},
    modelValue: {},
    rovingFocus: { type: Boolean },
    disabled: { type: Boolean },
    orientation: {},
    dir: {},
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = xa(), r = de(a);
    return $(), (l, i) => (openBlock(), createBlock(unref(ki), mergeProps({ ...e, ...unref(r) }, {
      "data-orientation": unref(s).orientation.value,
      dir: unref(s).dir.value,
      "roving-focus": false
    }), {
      default: withCtx(() => [
        renderSlot(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-orientation", "dir"]));
  }
}), ip = /* @__PURE__ */ defineComponent({
  __name: "ToolbarToggleItem",
  props: {
    value: {},
    defaultValue: { type: Boolean },
    pressed: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, { forwardRef: e } = $();
    return (a, s) => (openBlock(), createBlock(Li, { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(Vi), mergeProps(t, { ref: unref(e) }), {
          default: withCtx(() => [
            renderSlot(a.$slots, "default")
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }));
  }
}), up = /* @__PURE__ */ defineComponent({
  __name: "ToolbarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o2) {
    const t = o2, e = xa();
    return $(), (a, s) => (openBlock(), createBlock(da, {
      orientation: unref(e).orientation.value,
      "as-child": t.asChild,
      as: a.as
    }, {
      default: withCtx(() => [
        renderSlot(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["orientation", "as-child", "as"]));
  }
}), Ea = "tooltip.open";
function Ki(o2, t) {
  const e = Math.abs(t.top - o2.y), a = Math.abs(t.bottom - o2.y), s = Math.abs(t.right - o2.x), r = Math.abs(t.left - o2.x);
  switch (Math.min(e, a, s, r)) {
    case r:
      return "left";
    case s:
      return "right";
    case e:
      return "top";
    case a:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ni(o2, t, e = 5) {
  const a = [];
  switch (t) {
    case "top":
      a.push(
        { x: o2.x - e, y: o2.y + e },
        { x: o2.x + e, y: o2.y + e }
      );
      break;
    case "bottom":
      a.push(
        { x: o2.x - e, y: o2.y - e },
        { x: o2.x + e, y: o2.y - e }
      );
      break;
    case "left":
      a.push(
        { x: o2.x + e, y: o2.y - e },
        { x: o2.x + e, y: o2.y + e }
      );
      break;
    case "right":
      a.push(
        { x: o2.x - e, y: o2.y - e },
        { x: o2.x - e, y: o2.y + e }
      );
      break;
  }
  return a;
}
function Hi(o2) {
  const { top: t, right: e, bottom: a, left: s } = o2;
  return [
    { x: s, y: t },
    { x: e, y: t },
    { x: e, y: a },
    { x: s, y: a }
  ];
}
function ji(o2, t) {
  const { x: e, y: a } = o2;
  let s = false;
  for (let r = 0, l = t.length - 1; r < t.length; l = r++) {
    const i = t[r].x, u = t[r].y, d = t[l].x, p = t[l].y;
    u > a != p > a && e < (d - i) * (a - u) / (p - u) + i && (s = !s);
  }
  return s;
}
function Wi(o2) {
  const t = o2.slice();
  return t.sort((e, a) => e.x < a.x ? -1 : e.x > a.x ? 1 : e.y < a.y ? -1 : e.y > a.y ? 1 : 0), zi(t);
}
function zi(o2) {
  if (o2.length <= 1)
    return o2.slice();
  const t = [];
  for (let a = 0; a < o2.length; a++) {
    const s = o2[a];
    for (; t.length >= 2; ) {
      const r = t[t.length - 1], l = t[t.length - 2];
      if ((r.x - l.x) * (s.y - l.y) >= (r.y - l.y) * (s.x - l.x))
        t.pop();
      else
        break;
    }
    t.push(s);
  }
  t.pop();
  const e = [];
  for (let a = o2.length - 1; a >= 0; a--) {
    const s = o2[a];
    for (; e.length >= 2; ) {
      const r = e[e.length - 1], l = e[e.length - 2];
      if ((r.x - l.x) * (s.y - l.y) >= (r.y - l.y) * (s.x - l.x))
        e.pop();
      else
        break;
    }
    e.push(s);
  }
  return e.pop(), t.length === 1 && e.length === 1 && t[0].x === e[0].x && t[0].y === e[0].y ? t : t.concat(e);
}
const [Zo, Ui] = H("TooltipProvider"), dp = /* @__PURE__ */ defineComponent({
  __name: "TooltipProvider",
  props: {
    delayDuration: { default: 700 },
    skipDelayDuration: { default: 300 },
    disableHoverableContent: { type: Boolean, default: false },
    disableClosingTrigger: { type: Boolean }
  },
  setup(o2) {
    const t = o2, { delayDuration: e, skipDelayDuration: a, disableHoverableContent: s, disableClosingTrigger: r } = toRefs(t);
    $();
    const l = ref(true), i = St(false, 300), { start: u, stop: d } = vo(() => {
      l.value = true;
    }, a, { immediate: false });
    return Ui({
      isOpenDelayed: l,
      delayDuration: e,
      onOpen() {
        d(), l.value = false;
      },
      onClose() {
        u();
      },
      isPointerInTransitRef: i,
      onPointerInTransitChange(p) {
        i.value = p;
      },
      disableHoverableContent: s,
      disableClosingTrigger: r
    }), (p, c) => renderSlot(p.$slots, "default");
  }
}), [Wt, qi] = H("TooltipRoot"), cp = /* @__PURE__ */ defineComponent({
  __name: "TooltipRoot",
  props: {
    defaultOpen: { type: Boolean, default: false },
    open: { type: Boolean, default: void 0 },
    delayDuration: { default: void 0 },
    disableHoverableContent: { type: Boolean, default: void 0 },
    disableClosingTrigger: { type: Boolean, default: void 0 }
  },
  emits: ["update:open"],
  setup(o2, { emit: t }) {
    const e = o2, a = t;
    $();
    const s = Zo(), r = computed(() => e.disableHoverableContent ?? s.disableHoverableContent.value), l = computed(() => e.disableClosingTrigger ?? s.disableClosingTrigger.value), i = computed(() => e.delayDuration ?? s.delayDuration.value), u = X(e, "open", a, {
      defaultValue: e.defaultOpen,
      passive: e.open === void 0
    });
    watch(u, (_) => {
      s.onClose && (_ ? (s.onOpen(), document.dispatchEvent(new CustomEvent(Ea))) : s.onClose());
    });
    const d = ref(false), p = ref(), c = computed(() => u.value ? d.value ? "delayed-open" : "instant-open" : "closed"), { start: f, stop: v } = vo(() => {
      d.value = true, u.value = true;
    }, i, { immediate: false });
    function y() {
      v(), d.value = false, u.value = true;
    }
    function C() {
      v(), u.value = false;
    }
    function E() {
      f();
    }
    return qi({
      contentId: ee(),
      open: u,
      stateAttribute: c,
      trigger: p,
      onTriggerChange(_) {
        p.value = _;
      },
      onTriggerEnter() {
        s.isOpenDelayed.value ? E() : y();
      },
      onTriggerLeave() {
        r.value ? C() : v();
      },
      onOpen: y,
      onClose: C,
      disableHoverableContent: r,
      disableClosingTrigger: l
    }), (_, x) => (openBlock(), createBlock(unref(He), null, {
      default: withCtx(() => [
        renderSlot(_.$slots, "default")
      ]),
      _: 3
    }));
  }
}), pp = /* @__PURE__ */ defineComponent({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(o2) {
    const t = o2, e = Wt(), a = Zo(), { forwardRef: s, currentElement: r } = $(), l = ref(false), i = ref(false);
    function u() {
      l.value = false;
    }
    function d() {
      l.value = true, document.addEventListener("pointerup", u, { once: true });
    }
    return onMounted(() => {
      e.onTriggerChange(r.value);
    }), (p, c) => (openBlock(), createBlock(unref(je), { "as-child": "" }, {
      default: withCtx(() => [
        createVNode(unref(D), {
          ref: unref(s),
          "aria-describedby": unref(e).open.value ? unref(e).contentId : void 0,
          "data-state": unref(e).stateAttribute.value,
          as: p.as,
          "as-child": t.asChild,
          onPointermove: c[0] || (c[0] = (f) => {
            f.pointerType !== "touch" && !i.value && !unref(a).isPointerInTransitRef.value && (unref(e).onTriggerEnter(), i.value = true);
          }),
          onPointerleave: c[1] || (c[1] = (f) => {
            unref(e).onTriggerLeave(), i.value = false;
          }),
          onPointerdown: d,
          onFocus: c[2] || (c[2] = () => {
            l.value || unref(e).onOpen();
          }),
          onBlur: c[3] || (c[3] = (f) => unref(e).onClose()),
          onClick: c[4] || (c[4] = () => {
            unref(e).disableClosingTrigger.value || unref(e).onClose();
          })
        }, {
          default: withCtx(() => [
            renderSlot(p.$slots, "default")
          ]),
          _: 3
        }, 8, ["aria-describedby", "data-state", "as", "as-child"])
      ]),
      _: 3
    }));
  }
}), Pa = /* @__PURE__ */ defineComponent({
  __name: "TooltipContentImpl",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: { default: 0 },
    align: { default: "center" },
    alignOffset: {},
    avoidCollisions: { type: Boolean, default: true },
    collisionBoundary: { default: () => [] },
    collisionPadding: { default: 0 },
    arrowPadding: { default: 0 },
    sticky: { default: "partial" },
    hideWhenDetached: { type: Boolean, default: false }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = Wt(), { forwardRef: r } = $(), l = useSlots(), i = computed(() => {
      var p;
      return (p = l.default) == null ? void 0 : p.call(l);
    }), u = computed(() => {
      var f;
      if (e.ariaLabel)
        return e.ariaLabel;
      let p = "";
      function c(v) {
        typeof v.children == "string" ? p += v.children : Array.isArray(v.children) && v.children.forEach((y) => c(y));
      }
      return (f = i.value) == null || f.forEach((v) => c(v)), p;
    }), d = computed(() => {
      const { ariaLabel: p, ...c } = e;
      return c;
    });
    return onMounted(() => {
      Be(window, "scroll", (p) => {
        const c = p.target;
        c != null && c.contains(s.trigger.value) && s.onClose();
      }), Be(window, Ea, s.onClose);
    }), (p, c) => (openBlock(), createBlock(unref(De), {
      "as-child": "",
      "disable-outside-pointer-events": false,
      onEscapeKeyDown: c[0] || (c[0] = (f) => a("escapeKeyDown", f)),
      onPointerDownOutside: c[1] || (c[1] = (f) => {
        var v;
        unref(s).disableClosingTrigger.value && ((v = unref(s).trigger.value) != null && v.contains(f.target)) && f.preventDefault(), a("pointerDownOutside", f);
      }),
      onFocusOutside: c[2] || (c[2] = withModifiers(() => {
      }, ["prevent"])),
      onDismiss: c[3] || (c[3] = (f) => unref(s).onClose())
    }, {
      default: withCtx(() => [
        createVNode(unref(Fe), mergeProps({
          ref: unref(r),
          "data-state": unref(s).stateAttribute.value
        }, { ...p.$attrs, ...d.value }, { style: {
          "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
          "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
          "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
        } }), {
          default: withCtx(() => [
            renderSlot(p.$slots, "default"),
            createVNode(unref(Je), {
              id: unref(s).contentId,
              role: "tooltip"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(u.value), 1)
              ]),
              _: 1
            }, 8, ["id"])
          ]),
          _: 3
        }, 16, ["data-state", "style"])
      ]),
      _: 3
    }));
  }
}), Gi = /* @__PURE__ */ defineComponent({
  __name: "TooltipContentHoverable",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  setup(o2) {
    const e = Ne(o2), { forwardRef: a, currentElement: s } = $(), { trigger: r, onClose: l } = Wt(), i = Zo(), u = ref(null);
    function d() {
      u.value = null, i.onPointerInTransitChange(false);
    }
    function p(c, f) {
      const v = c.currentTarget, y = { x: c.clientX, y: c.clientY }, C = Ki(y, v.getBoundingClientRect()), E = Ni(y, C), _ = Hi(f.getBoundingClientRect()), x = Wi([...E, ..._]);
      u.value = x, i.onPointerInTransitChange(true);
    }
    return watchEffect((c) => {
      if (r.value && s.value) {
        const f = (y) => p(y, s.value), v = (y) => p(y, r.value);
        r.value.addEventListener("pointerleave", f), s.value.addEventListener("pointerleave", v), c(() => {
          var y, C;
          (y = r.value) == null || y.removeEventListener("pointerleave", f), (C = s.value) == null || C.removeEventListener("pointerleave", v);
        });
      }
    }), watchEffect((c) => {
      if (u.value) {
        const f = (v) => {
          var x, B;
          if (!u.value)
            return;
          const y = v.target, C = { x: v.clientX, y: v.clientY }, E = ((x = r.value) == null ? void 0 : x.contains(y)) || ((B = s.value) == null ? void 0 : B.contains(y)), _ = !ji(C, u.value);
          E ? d() : _ && (d(), l());
        };
        document.addEventListener("pointermove", f), c(() => document.removeEventListener("pointermove", f));
      }
    }), (c, f) => (openBlock(), createBlock(Pa, mergeProps({ ref: unref(a) }, unref(e)), {
      default: withCtx(() => [
        renderSlot(c.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fp = /* @__PURE__ */ defineComponent({
  __name: "TooltipContent",
  props: {
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: { default: "top" },
    sideOffset: {},
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean }
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(o2, { emit: t }) {
    const e = o2, a = t, s = Wt(), r = ne(e, a), { forwardRef: l } = $();
    return (i, u) => unref(s).open.value ? (openBlock(), createBlock(resolveDynamicComponent(unref(s).disableHoverableContent.value ? Pa : Gi), mergeProps({
      key: 0,
      ref: unref(l)
    }, unref(r)), {
      default: withCtx(() => [
        renderSlot(i.$slots, "default")
      ]),
      _: 3
    }, 16)) : createCommentVNode("", true);
  }
}), vp = /* @__PURE__ */ defineComponent({
  __name: "TooltipArrow",
  props: {
    width: { default: 10 },
    height: { default: 5 },
    asChild: { type: Boolean },
    as: { default: "svg" }
  },
  setup(o2) {
    const t = o2;
    return $(), (e, a) => (openBlock(), createBlock(unref(Xe), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mp = /* @__PURE__ */ defineComponent({
  __name: "TooltipPortal",
  props: {
    to: {},
    disabled: { type: Boolean },
    forceMount: { type: Boolean }
  },
  setup(o2) {
    const t = o2;
    return (e, a) => (openBlock(), createBlock(unref(Te), normalizeProps(guardReactiveProps(t)), {
      default: withCtx(() => [
        renderSlot(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  $u as $,
  gu as A,
  Bu as B,
  yu as C,
  Du as D,
  bu as E,
  Cu as F,
  Gc as G,
  Bs as H,
  Iu as I,
  Jc as J,
  Ss as K,
  Ds as L,
  Au as M,
  ku as N,
  Ou as O,
  Pu as P,
  Vu as Q,
  Fu as R,
  Su as S,
  Tu as T,
  Lu as U,
  Vs as V,
  Nu as W,
  Xc as X,
  Yc as Y,
  Yu as Z,
  _u as _,
  sr as a,
  ac as a$,
  Ju as a0,
  Xu as a1,
  ju as a2,
  Wu as a3,
  zu as a4,
  Uu as a5,
  qu as a6,
  Gu as a7,
  Zu as a8,
  Qu as a9,
  Rd as aA,
  kd as aB,
  Md as aC,
  Td as aD,
  Dd as aE,
  Id as aF,
  Ad as aG,
  Nd as aH,
  Vd as aI,
  Hd as aJ,
  Fd as aK,
  Wd as aL,
  Ld as aM,
  Kd as aN,
  zd as aO,
  Ud as aP,
  Xd as aQ,
  Gd as aR,
  Qd as aS,
  Jd as aT,
  qd as aU,
  Zd as aV,
  Yd as aW,
  ec as aX,
  tc as aY,
  oc as aZ,
  nc as a_,
  ed as aa,
  td as ab,
  nd as ac,
  cd as ad,
  fd as ae,
  pd as af,
  sd as ag,
  rd as ah,
  ld as ai,
  id as aj,
  ud as ak,
  dd as al,
  od as am,
  vd as an,
  md as ao,
  hd as ap,
  gd as aq,
  yd as ar,
  bd as as,
  Cd as at,
  wd as au,
  _d as av,
  $d as aw,
  xd as ax,
  Pd as ay,
  Sd as az,
  Vn as b,
  sc as b0,
  lc as b1,
  rc as b2,
  uc as b3,
  dc as b4,
  cc as b5,
  pc as b6,
  fc as b7,
  vc as b8,
  mc as b9,
  zc as bA,
  Wc as bB,
  Qc as bC,
  ep as bD,
  np as bE,
  ap as bF,
  tp as bG,
  op as bH,
  ki as bI,
  Vi as bJ,
  Ai as bK,
  sp as bL,
  lp as bM,
  ip as bN,
  up as bO,
  rp as bP,
  Li as bQ,
  dp as bR,
  cp as bS,
  pp as bT,
  mp as bU,
  fp as bV,
  vp as bW,
  hc as ba,
  gc as bb,
  bc,
  Cc as bd,
  Ac as be,
  wc as bf,
  _c as bg,
  Oc as bh,
  Dc as bi,
  Sc as bj,
  Bc as bk,
  Ec as bl,
  Pc as bm,
  Tc as bn,
  xc as bo,
  Ic as bp,
  Mc as bq,
  kc as br,
  Fc as bs,
  Lc as bt,
  Vc as bu,
  Kc as bv,
  Nc as bw,
  Hc as bx,
  jc as by,
  Uc as bz,
  au as c,
  lu as d,
  eu as e,
  iu as f,
  du as g,
  uu as h,
  ir as i,
  fu as j,
  ks as k,
  lr as l,
  cu as m,
  nu as n,
  ou as o,
  pu as p,
  qc as q,
  ru as r,
  su as s,
  tu as t,
  ur as u,
  vu as v,
  wu as w,
  xu as x,
  mu as y,
  hu as z
};
