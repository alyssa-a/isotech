export default function Section({ bgColor, className = "", children }) {
    let bgColorClass = '';
    switch (bgColor) {
        case "green":
            bgColorClass = "green-bg";
            break;
        case "lighter-grey":
            bgColorClass = "lighter-grey-bg";
            break;
        default:
            bgColorClass = '';
      }
      
    return (
        <div className={`py-2 ${className} ${bgColorClass}`}>
            <div className="container py-4">
                {children}
            </div>
        </div>
    );
}