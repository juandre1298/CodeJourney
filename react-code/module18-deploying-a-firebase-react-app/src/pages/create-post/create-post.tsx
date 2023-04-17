import { CreateForm } from "./create-form";
export const CreatePost = () => {
  return (
    <section className="post-section">
      {/*       <img
        className="exclamationbubble"
        src="/speech-bubble-vector-halftone-style-set/exclamation.png"
      /> */}
      <img
        className="megaphone"
        src="/illustrationn-megaphone-monochrome-style-isolated-white-background/megaphone.png"
      />
      <div className="speech-bubble">
        <h2>Create a post</h2>

        <CreateForm />
      </div>
    </section>
  );
};
