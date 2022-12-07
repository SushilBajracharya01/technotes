import { Link } from "react-router-dom";

/**
 *
 */
export default function Public() {
  return (
    <section>
      <h1>Welcome to DnD Tech Support</h1>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae
        magna pharetra, euismod ligula sed, pellentesque mi. Nulla facilisi.
        Aliquam turpis nisl, finibus eu elit eu, condimentum vulputate nisl.
        Aliquam nisi lacus, hendrerit sed consectetur at, cursus id massa. Sed
        ante mauris, consectetur quis scelerisque sit amet, tristique pulvinar
        leo. Nunc varius ipsum nec ligula sollicitudin, at posuere ex
        ullamcorper. Quisque sagittis massa vitae ligula luctus, nec
        sollicitudin sem ornare. Aenean in malesuada enim. Sed tristique cursus
        lacus quis convallis. Aenean dignissim, tellus vel interdum ultricies,
        lectus eros ultricies quam, id condimentum metus libero id purus. Morbi
        eu elit a risus sodales vehicula a id arcu. Suspendisse lorem eros,
        consectetur non elementum id, pellentesque ac libero. Cras arcu orci,
        scelerisque lacinia sagittis vitae, dignissim sit amet nisl.
      </div>

      <footer>
        <Link to="/login">Login</Link>
      </footer>
    </section>
  );
}
