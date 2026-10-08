import "./StatCard.css";

export function StatCard({ title, value, icon: Icon, iconSize = 20, iconColor = "primary" }) {
  return (
    <div className="stat-card">
      {Icon && (
        <div className={`stat-card-icon icon-${iconColor}`}>
          <Icon size={iconSize} />
        </div>
      )}
      <div className="stat-card-content">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
}
