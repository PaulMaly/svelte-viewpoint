(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('svelte/internal')) :
	typeof define === 'function' && define.amd ? define(['svelte/internal'], factory) :
	(global = global || self, global.Viewpoint = factory(global.internal));
}(this, (function (internal) { 'use strict';

	/* src/Viewpoint.svelte generated by Svelte v3.18.2 */

	const get_error_slot_changes = dirty => ({ error: dirty & /*load*/ 32 });
	const get_error_slot_context = ctx => ({ error: /*error*/ ctx[16] });
	const get_loading_slot_changes = dirty => ({});
	const get_loading_slot_context = ctx => ({});
	const get_waiting_slot_changes = dirty => ({});
	const get_waiting_slot_context = ctx => ({});

	// (11:0) {:catch error}
	function create_catch_block(ctx) {
		let current;
		const error_slot_template = /*$$slots*/ ctx[14].error;
		const error_slot = internal.create_slot(error_slot_template, ctx, /*$$scope*/ ctx[13], get_error_slot_context);

		return {
			c() {
				if (error_slot) error_slot.c();
			},
			m(target, anchor) {
				if (error_slot) {
					error_slot.m(target, anchor);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (error_slot && error_slot.p && dirty & /*$$scope, load*/ 8224) {
					error_slot.p(internal.get_slot_context(error_slot_template, ctx, /*$$scope*/ ctx[13], get_error_slot_context), internal.get_slot_changes(error_slot_template, /*$$scope*/ ctx[13], dirty, get_error_slot_changes));
				}
			},
			i(local) {
				if (current) return;
				internal.transition_in(error_slot, local);
				current = true;
			},
			o(local) {
				internal.transition_out(error_slot, local);
				current = false;
			},
			d(detaching) {
				if (error_slot) error_slot.d(detaching);
			}
		};
	}

	// (7:0) {:then comp}
	function create_then_block(ctx) {
		let if_block_anchor;
		let current;
		let if_block = /*comp*/ ctx[15] && create_if_block_2(ctx);

		return {
			c() {
				if (if_block) if_block.c();
				if_block_anchor = internal.empty();
			},
			m(target, anchor) {
				if (if_block) if_block.m(target, anchor);
				internal.insert(target, if_block_anchor, anchor);
				current = true;
			},
			p(ctx, dirty) {
				if (/*comp*/ ctx[15]) {
					if (if_block) {
						if_block.p(ctx, dirty);
						internal.transition_in(if_block, 1);
					} else {
						if_block = create_if_block_2(ctx);
						if_block.c();
						internal.transition_in(if_block, 1);
						if_block.m(if_block_anchor.parentNode, if_block_anchor);
					}
				} else if (if_block) {
					internal.group_outros();

					internal.transition_out(if_block, 1, 1, () => {
						if_block = null;
					});

					internal.check_outros();
				}
			},
			i(local) {
				if (current) return;
				internal.transition_in(if_block);
				current = true;
			},
			o(local) {
				internal.transition_out(if_block);
				current = false;
			},
			d(detaching) {
				if (if_block) if_block.d(detaching);
				if (detaching) internal.detach(if_block_anchor);
			}
		};
	}

	// (8:2) {#if comp}
	function create_if_block_2(ctx) {
		let switch_instance_anchor;
		let current;
		const switch_instance_spread_levels = [/*props*/ ctx[1], /*state*/ ctx[2]];
		var switch_value = /*comp*/ ctx[15];

		function switch_props(ctx) {
			let switch_instance_props = {};

			for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
				switch_instance_props = internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
			}

			return { props: switch_instance_props };
		}

		if (switch_value) {
			var switch_instance = new switch_value(switch_props());
		}

		return {
			c() {
				if (switch_instance) internal.create_component(switch_instance.$$.fragment);
				switch_instance_anchor = internal.empty();
			},
			m(target, anchor) {
				if (switch_instance) {
					internal.mount_component(switch_instance, target, anchor);
				}

				internal.insert(target, switch_instance_anchor, anchor);
				current = true;
			},
			p(ctx, dirty) {
				const switch_instance_changes = (dirty & /*props, state*/ 6)
				? internal.get_spread_update(switch_instance_spread_levels, [
						dirty & /*props*/ 2 && internal.get_spread_object(/*props*/ ctx[1]),
						dirty & /*state*/ 4 && internal.get_spread_object(/*state*/ ctx[2])
					])
				: {};

				if (switch_value !== (switch_value = /*comp*/ ctx[15])) {
					if (switch_instance) {
						internal.group_outros();
						const old_component = switch_instance;

						internal.transition_out(old_component.$$.fragment, 1, 0, () => {
							internal.destroy_component(old_component, 1);
						});

						internal.check_outros();
					}

					if (switch_value) {
						switch_instance = new switch_value(switch_props());
						internal.create_component(switch_instance.$$.fragment);
						internal.transition_in(switch_instance.$$.fragment, 1);
						internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
					} else {
						switch_instance = null;
					}
				} else if (switch_value) {
					switch_instance.$set(switch_instance_changes);
				}
			},
			i(local) {
				if (current) return;
				if (switch_instance) internal.transition_in(switch_instance.$$.fragment, local);
				current = true;
			},
			o(local) {
				if (switch_instance) internal.transition_out(switch_instance.$$.fragment, local);
				current = false;
			},
			d(detaching) {
				if (detaching) internal.detach(switch_instance_anchor);
				if (switch_instance) internal.destroy_component(switch_instance, detaching);
			}
		};
	}

	// (1:62)    {#if timeout && !timeoutTimer}
	function create_pending_block(ctx) {
		let current_block_type_index;
		let if_block;
		let if_block_anchor;
		let current;
		const if_block_creators = [create_if_block, create_if_block_1];
		const if_blocks = [];

		function select_block_type(ctx, dirty) {
			if (/*timeout*/ ctx[0] && !/*timeoutTimer*/ ctx[3]) return 0;
			if (!/*delayTimer*/ ctx[4]) return 1;
			return -1;
		}

		if (~(current_block_type_index = select_block_type(ctx))) {
			if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
		}

		return {
			c() {
				if (if_block) if_block.c();
				if_block_anchor = internal.empty();
			},
			m(target, anchor) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].m(target, anchor);
				}

				internal.insert(target, if_block_anchor, anchor);
				current = true;
			},
			p(ctx, dirty) {
				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type(ctx);

				if (current_block_type_index === previous_block_index) {
					if (~current_block_type_index) {
						if_blocks[current_block_type_index].p(ctx, dirty);
					}
				} else {
					if (if_block) {
						internal.group_outros();

						internal.transition_out(if_blocks[previous_block_index], 1, 1, () => {
							if_blocks[previous_block_index] = null;
						});

						internal.check_outros();
					}

					if (~current_block_type_index) {
						if_block = if_blocks[current_block_type_index];

						if (!if_block) {
							if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
							if_block.c();
						}

						internal.transition_in(if_block, 1);
						if_block.m(if_block_anchor.parentNode, if_block_anchor);
					} else {
						if_block = null;
					}
				}
			},
			i(local) {
				if (current) return;
				internal.transition_in(if_block);
				current = true;
			},
			o(local) {
				internal.transition_out(if_block);
				current = false;
			},
			d(detaching) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].d(detaching);
				}

				if (detaching) internal.detach(if_block_anchor);
			}
		};
	}

	// (4:24) 
	function create_if_block_1(ctx) {
		let current;
		const loading_slot_template = /*$$slots*/ ctx[14].loading;
		const loading_slot = internal.create_slot(loading_slot_template, ctx, /*$$scope*/ ctx[13], get_loading_slot_context);

		return {
			c() {
				if (loading_slot) loading_slot.c();
			},
			m(target, anchor) {
				if (loading_slot) {
					loading_slot.m(target, anchor);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (loading_slot && loading_slot.p && dirty & /*$$scope*/ 8192) {
					loading_slot.p(internal.get_slot_context(loading_slot_template, ctx, /*$$scope*/ ctx[13], get_loading_slot_context), internal.get_slot_changes(loading_slot_template, /*$$scope*/ ctx[13], dirty, get_loading_slot_changes));
				}
			},
			i(local) {
				if (current) return;
				internal.transition_in(loading_slot, local);
				current = true;
			},
			o(local) {
				internal.transition_out(loading_slot, local);
				current = false;
			},
			d(detaching) {
				if (loading_slot) loading_slot.d(detaching);
			}
		};
	}

	// (2:2) {#if timeout && !timeoutTimer}
	function create_if_block(ctx) {
		let current;
		const waiting_slot_template = /*$$slots*/ ctx[14].waiting;
		const waiting_slot = internal.create_slot(waiting_slot_template, ctx, /*$$scope*/ ctx[13], get_waiting_slot_context);

		return {
			c() {
				if (waiting_slot) waiting_slot.c();
			},
			m(target, anchor) {
				if (waiting_slot) {
					waiting_slot.m(target, anchor);
				}

				current = true;
			},
			p(ctx, dirty) {
				if (waiting_slot && waiting_slot.p && dirty & /*$$scope*/ 8192) {
					waiting_slot.p(internal.get_slot_context(waiting_slot_template, ctx, /*$$scope*/ ctx[13], get_waiting_slot_context), internal.get_slot_changes(waiting_slot_template, /*$$scope*/ ctx[13], dirty, get_waiting_slot_changes));
				}
			},
			i(local) {
				if (current) return;
				internal.transition_in(waiting_slot, local);
				current = true;
			},
			o(local) {
				internal.transition_out(waiting_slot, local);
				current = false;
			},
			d(detaching) {
				if (waiting_slot) waiting_slot.d(detaching);
			}
		};
	}

	function create_fragment(ctx) {
		let await_block_anchor;
		let promise;
		let current;

		let info = {
			ctx,
			current: null,
			token: null,
			pending: create_pending_block,
			then: create_then_block,
			catch: create_catch_block,
			value: 15,
			error: 16,
			blocks: [,,,]
		};

		internal.handle_promise(promise = Promise.resolve().then(/*wait*/ ctx[6]).then(/*load*/ ctx[5]).then(/*preload*/ ctx[7]), info);

		return {
			c() {
				await_block_anchor = internal.empty();
				info.block.c();
			},
			m(target, anchor) {
				internal.insert(target, await_block_anchor, anchor);
				info.block.m(target, info.anchor = anchor);
				info.mount = () => await_block_anchor.parentNode;
				info.anchor = await_block_anchor;
				current = true;
			},
			p(new_ctx, [dirty]) {
				ctx = new_ctx;
				info.ctx = ctx;

				if (dirty & /*load*/ 32 && promise !== (promise = Promise.resolve().then(/*wait*/ ctx[6]).then(/*load*/ ctx[5]).then(/*preload*/ ctx[7])) && internal.handle_promise(promise, info)) ; else {
					const child_ctx = ctx.slice();
					child_ctx[15] = info.resolved;
					info.block.p(child_ctx, dirty);
				}
			},
			i(local) {
				if (current) return;
				internal.transition_in(info.block);
				current = true;
			},
			o(local) {
				for (let i = 0; i < 3; i += 1) {
					const block = info.blocks[i];
					internal.transition_out(block);
				}

				current = false;
			},
			d(detaching) {
				if (detaching) internal.detach(await_block_anchor);
				info.block.d(detaching);
				info.token = null;
				info = null;
			}
		};
	}

	function instance($$self, $$props, $$invalidate) {
		let { component = null } = $$props,
			{ preloading = true } = $$props,
			props = null,
			state = null,
			timeoutTimer,
			delayTimer,
			{ delay = 200 } = $$props,
			{ timeout = 0 } = $$props,
			{ abort = 0 } = $$props;

		function wait() {
			delay && $$invalidate(4, delayTimer = setTimeout(
				() => {
					$$invalidate(4, delayTimer = clearTimeout(delayTimer));
				},
				delay
			));

			timeout && $$invalidate(3, timeoutTimer = setTimeout(
				() => {
					$$invalidate(3, timeoutTimer = clearTimeout(timeoutTimer));
				},
				timeout
			));
		}

		function preload(m) {
			return m && Promise.resolve(preloading && typeof m.preload === "function"
			? m.preload(props)
			: undefined).then((data = {}) => {
				$$invalidate(2, state = data);
				return m.default || m;
			});
		}

		let { $$slots = {}, $$scope } = $$props;

		$$self.$set = $$new_props => {
			$$invalidate(12, $$props = internal.assign(internal.assign({}, $$props), internal.exclude_internal_props($$new_props)));
			if ("component" in $$new_props) $$invalidate(8, component = $$new_props.component);
			if ("preloading" in $$new_props) $$invalidate(9, preloading = $$new_props.preloading);
			if ("delay" in $$new_props) $$invalidate(10, delay = $$new_props.delay);
			if ("timeout" in $$new_props) $$invalidate(0, timeout = $$new_props.timeout);
			if ("abort" in $$new_props) $$invalidate(11, abort = $$new_props.abort);
			if ("$$scope" in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
		};

		let load;

		$$self.$$.update = () => {
			 {
				const { preloading, component, timeout, delay, abort, ...other } = $$props;
				$$invalidate(1, props = other);
			}

			if ($$self.$$.dirty & /*component, abort*/ 2304) {
				 $$invalidate(5, load = function () {
					return new Promise((resolve, reject) => {
							let abortTimer;

							Promise.resolve(typeof component === "function"
							? component()
							: component).then(m => {
								clearTimeout(abortTimer);
								resolve(m);
							});

							abort && (abortTimer = setTimeout(
								() => {
									reject(new Error("Aborted by timeout."));
								},
								abort
							));
						});
				});
			}
		};

		$$props = internal.exclude_internal_props($$props);

		return [
			timeout,
			props,
			state,
			timeoutTimer,
			delayTimer,
			load,
			wait,
			preload,
			component,
			preloading,
			delay,
			abort,
			$$props,
			$$scope,
			$$slots
		];
	}

	class Viewpoint extends internal.SvelteComponent {
		constructor(options) {
			super();

			internal.init(this, options, instance, create_fragment, internal.safe_not_equal, {
				component: 8,
				preloading: 9,
				delay: 10,
				timeout: 0,
				abort: 11
			});
		}
	}

	return Viewpoint;

})));
