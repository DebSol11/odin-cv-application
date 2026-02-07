import { Intro } from "./introduction";
import { IntroNameRender } from "./introduction";
import { IntroPurposeRender } from "./introduction";

export default function IntroRender({ name, purpose }) {
  return (
    <>
      <Intro />
      <IntroNameRender name={name} />
      <IntroPurposeRender purpose={purpose} />
    </>
  );
}
