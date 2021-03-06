import { Space, Divider } from "antd";
import Link from "next/link";

const menu = [
  { url: "", title: "介绍" },
  { url: "/catalog", title: "目录" },
  { url: "/refer", title: "摘录" },
];

export default function BookPageMenu(props) {
  return (
    <div>
      <Space size={14} split={<Divider type="vertical" />}>
        {menu.map((item) => {
          return (
            <Link
              href={`/book/subject/${encodeURIComponent(props.book_id)}${item.url}`}
              passHref
            >
              <div style={{ cursor: "pointer" }}>
                {props.current == `${item.title}` ? (
                  <div style={{ color: "wheat", fontWeight: "bold" }}>{item.title}</div>
                ) : (
                  <div>{item.title}</div>
                )}
              </div>
            </Link>
          );
        })}
      </Space>
    </div>
  );
}
