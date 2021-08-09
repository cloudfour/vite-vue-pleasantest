import { createApp } from "vue";

export const render = (component) => {
  const div = document.createElement("div");
  document.body.append(div);
  const app = createApp(component);
  app.mount(div);
};
