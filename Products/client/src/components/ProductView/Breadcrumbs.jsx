import style from "./Breadcrumbs.module.css";
function Breadcrumbs({ path }) {
  return (
    <ul className={style.breadcrumb}>
      <li className={style.breadcrumb__item}>
        <a href="/products/innovations">Products</a>
      </li>
      <li className={style.breadcrumb__item}>
        <a href="!#">&nbsp;Innovations</a>
      </li>
      <li>&nbsp;Mini Spy Scope</li>
    </ul>
  );
}

export default Breadcrumbs;
