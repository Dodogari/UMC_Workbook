export const insertOwnerSql = "INSERT INTO owner (name, category, local_id) VALUES (?, ?);";

export const confirmName = "SELECT EXISTS(SELECT 1 FROM owner WHERE name = ?) as isExistName";

export const getLocalToOwnerID =
"SELECT own.name, loc.name "
+ "FROM owner own JOIN local loc on own.local_id = loc.id "
+ "WHERE own.owner_id = ? ORDER BY own.local_id ASC;";