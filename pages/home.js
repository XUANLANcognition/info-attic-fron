import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/InfoAtticHome.module.css";

import { Card } from "antd";

const { Meta } = Card;

const data = [
  {
    title: "藏书阁",
    url: "/book/",
    img_url: "https://sm.ms/image/fXDmASPzlR6K5g1",
  },
  {
    title: "影视楼",
    url: "/movie",
    img_url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    title: "音乐盒",
    url: "/music",
    img_url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    title: "工具网站",
    url: "/tool",
    img_url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    title: "图库",
    url: "/tool",
    img_url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    title: "计算机技术博客",
    url: "/tool",
    img_url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    title: "新闻",
    url: "/tool",
    img_url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
  {
    title: "信息安全工具",
    url: "/tool",
    img_url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  },
];

export default function InfoAtticHome() {
  return (
    <div>
      <Head>
        <title>Info Attics Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>欢迎进入 Info-Attics.</h1>
      <h1 className={styles.title1}>信息大观园</h1>
      <h2 className={styles.title2}>
        当前页面还在草创阶段，较为简单。下面是不同信息阁楼的入口：
      </h2>

      <main className={styles.main}>
        {data.map((item) => {
          return (
            <Card key={item.title} hoverable style={{ width: 240, marginBottom: "28px" }}>
              <Link href={item.url}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </div>
              </Link>
            </Card>
          );
        })}
      </main>
    </div>
  );
}
