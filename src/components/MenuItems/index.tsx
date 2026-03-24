import { Link } from "@tanstack/react-router";

const menus = [
  {
    title: "Teclados",
    categorySlug: "teclados",
    items: ["Mecânicos", "Compactos", "Sem fio", "RGB"],
  },
  {
    title: "Mouses",
    categorySlug: "mouses",
    items: ["Ergonômicos", "Sem fio", "Alta precisão", "Produtividade"],
  },
  {
    title: "Monitores",
    categorySlug: "monitores",
    items: ["Ultrawide", "4K", "Alta taxa", "Color Accuracy"],
  },
  {
    title: "Áudio",
    categorySlug: "audio",
    items: ["Headsets", "Microfones", "Speakers", "Noise Cancelling"],
  },
  {
    title: "Setups",
    categorySlug: null,
    items: ["Home Office", "Minimalista"],
  },
];

export const MenuItems = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 w-full lg:w-auto">
      {menus.map(({ title, items, categorySlug }) => (
        <nav key={title}>
          <ul className="flex flex-col gap-3">
            <li>
              {categorySlug ? (
                <Link
                  to="/products/category/$category"
                  params={{ category: categorySlug }}
                  className="font-semibold text-white text-xl hover:text-footer-hover transition-colors"
                >
                  {title}
                </Link>
              ) : (
                <p className="font-semibold text-white text-xl">{title}</p>
              )}
            </li>
            {items.map((item) => (
              <li key={item}>
                {categorySlug ? (
                  <Link
                    to="/products/category/$category"
                    params={{ category: categorySlug }}
                    className="font-medium text-surface-alt hover:text-white transition-colors text-xl"
                  >
                    {item}
                  </Link>
                ) : (
                  <span className="font-medium text-surface-alt text-xl">
                    {item}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
