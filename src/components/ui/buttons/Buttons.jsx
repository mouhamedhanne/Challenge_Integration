export default function Buttons({ children, theme, className }) {
  switch (theme) {
    case "filled":
      return (
        <button
          className={`bg-bg_button text-white px-16 py-6
          rounded-[1.3rem] font-bold hover:bg-bg_hover_button
           transition duration-300 ease-in-out transform
          ${className}`}
        >
          {children}
        </button>
      );
    case "unFilled":
      return <button>{children}</button>;
    default:
      return <button>{children}</button>;
  }
}
