/**
 * Any component name which provides some data should be added here
 * and exposed in the correspondent component's setup()
 * using `defineExpose` imported from Vue.
 *
 * ```ts
 * defineExpose({
 *  name: Components.GROUP
 * })
 * ```
 *
 * The name will be exposed to the parent chain and can be used
 * by the child to check if the injection should take place or not.
 */
export const Components = {
  ROOT: "DropdownMenuRoot",
  SUB_MENU: "DropdownMenuSub",
  GROUP: "DropdownMenuGroup",
  RADIO_GROUP: "DropdownMenuRadioGroup",
  RADIO_ITEM: "DropdownMenuRadioItem",
  CHECKBOX_ITEM: "DropdownMenuCheckboxItem",
};
