export default function Titles({ children, title, className }) {
  switch (title) {
    case "small":
      return (
        <h3
          className={`text-[20px] text-bg_hover_button 
        ${className}`}
        >
          {children}
        </h3>
      );

    case "medium":
      return <h2 className={`text-3xl font-bold ${className}`}>{children}</h2>;

    case "large":
      return (
        <h2 className={`text-5xl font-extrabold ${className}`}>{children}</h2>
      );

    default:
      return <h2>Titre non defini</h2>;
  }
}
