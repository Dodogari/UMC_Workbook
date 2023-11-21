export const insertOwnerSql = "INSERT INTO owner (name, category, local_id) VALUES (?, ?, ?);";

export const confirmName = "SELECT EXISTS(SELECT 1 FROM owner own WHERE own.name = ?) as isExistName";

export const getLocalToOwnerID =
"SELECT own.id, own.name, own.local_id, loc.id, loc.name "
+ "FROM owner own JOIN local loc on own.local_id = loc.id "
+ "WHERE own.id = ? ORDER BY own.local_id ASC";