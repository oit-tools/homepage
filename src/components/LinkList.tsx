import * as React from 'react';
import { Link as MuiLink, styled, Tab, Box, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

const CustomLink = styled(MuiLink)({
    textDecoration: "none",
    color: "#20B2AA",
    fontSize: "1.3rem",
    lineHeight: 2,
});

const CustomTypo = styled(Typography)({
    fontSize: "1.3rem",
    lineHeight: 1.5,
});

export const LinkList = () => {
    const [value, setValue] = React.useState("1");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper', border: 1 }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} scrollButtons="auto" variant="scrollable">
                        <Tab label="全般" value="1" />
                        <Tab label="枚方キャンパス" value="2" />
                        <Tab label="大宮キャンパス" value="3" />
                        <Tab label="梅田キャンパス" value="4" />
                        <Tab label="マニュアル" value="5" />
                        <Tab label="公式アカウント" value="6" />
                        <Tab label="体育会系クラブ" value="7" />
                        <Tab label="文化会系クラブ" value="8" />
                        <Tab label="サークル" value="9" />
                        <Tab label="その他諸団体" value="10" />
                        <Tab label="新入生向け" value="11" />
                        <Tab label="プログラミング" value="12" />
                        <Tab label="進路・就職" value="13" />
                        <Tab label="その他" value="14" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <CustomLink
                        href="https://www.oit.ac.jp"
                        target="_blank"
                        rel="noopener noreferrer">
                        大阪工業大学公式ホームページ
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.portal.oit.ac.jp/CAMJWEB/top.do"
                        target="_blank"
                        rel="noopener noreferrer">
                        学内ポータルサイト
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://lss.oit.ac.jp/index.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        学習支援サイト(学内専用)
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/students/time_table.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        時間割
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/syllabus/index.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        Webシラバス
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://ufinity.lib.oit.ac.jp/"
                        target="_blank"
                        rel="noopener noreferrer">
                        図書館蔵書検索(Web OPAC)
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/toshokan/tosho/riyouannai.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        図書館の使い方等
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/inside/jugyou_anq/"
                        target="_blank"
                        rel="noopener noreferrer">
                        授業アンケート結果・単位取得率(学内専用)
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/"
                        target="_blank"
                        rel="noopener noreferrer">
                        クラブ・サークルサイト
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/oit/openinfo/data12.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        卒業・修了者数
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/oit/openinfo/data08.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        学生数
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://ja.wikipedia.org/wiki/%E5%A4%A7%E9%98%AA%E5%B7%A5%E6%A5%AD%E5%A4%A7%E5%AD%A6#%E5%AD%A6%E9%83%A8"
                        target="_blank"
                        rel="noopener noreferrer">
                        学科の略称一覧
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="2">
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/oit/access_hirakata.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        マップ
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/access/access_hirakata.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        交通アクセス
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://marshmallow-qa.com/oity_oit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Oityさんの過去の回答(マシュマロ)
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://black092.github.io/oit_bus/"
                        target="_blank"
                        rel="noopener noreferrer">
                        OITバス時刻表
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/is/projects/index.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        学生プロジェクト
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="3">
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/oit/access_omiya.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        マップ
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/access/access_omiya.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        交通アクセス
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="4">
                    <CustomLink
                        href="http://www.oit.ac.jp/rd/umeda/index.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        マップ
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/access/access_umeda.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        交通アクセス
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="5">
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/center/idpw.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        学内アカウント
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/center/printer.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        プリンター
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/center/vpn.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        VPN
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/center/folder.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        ファイルサーバー
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/center/manual.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        その他学内システムマニュアル
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="6">
                    <CustomLink
                        href="https://twitter.com/OIT_pr"
                        target="_blank"
                        rel="noopener noreferrer">
                        大阪工業大学【公式】
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://twitter.com/oit_jyoho"
                        target="_blank"
                        rel="noopener noreferrer">
                        工大 情報科学部事務室【公式】
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="7">
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/club/org-sports/200.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】体育会本部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/club/org-sports/201.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】陸上競技部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oittaf"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://sites.google.com/site/oittaf/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/club/org-sports/202.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】柔道部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/203.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】剣道部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_kendo"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/204.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】空手道部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/205.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】北道院拳法部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/206.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】洋弓部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/archery_oit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="http://oitarcheryclub.web.fc2.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/207.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】ラグビー部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitrugby15"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="http://www.kodai-rugby.com/nextstep/category/blog"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/208.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】ボクシング部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/209.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】サッカー部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/soccer_oit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/210.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】ハンドボール部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_handball"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/211.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】バレーボール部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_volley"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/212.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】バスケットボール部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitbasketball"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/213.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】卓球部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/214.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】バドミントン部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_bad"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/215.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】硬式庭球部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_tennispeace"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://www.instagram.com/tennis.peace/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Instagram
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/216.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】軟式庭球部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/217.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】硬式野球部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_bbc"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="http://www.osaka-it-bbc.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://www.instagram.com/oit_baseballteam/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Instagram
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/218.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】漕艇部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitrowing"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://oitrowing.wixsite.com/college-sorority"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://www.instagram.com/oit_rowing_/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Instagram
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/219.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】準硬式野球部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitjunko"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/220.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】水上競技部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitswimclub"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/221.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】航空部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/222.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】アイスホッケー部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_icehockey"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://www.instagram.com/oit_icehockey/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Instagram
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/223.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】自動車部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/224.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】クライミングスポーツ部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_csc"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/225.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】ワンダーフォーゲル部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_wv"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="http://www.oit-wangel.net/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/226.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】日本拳法部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/227.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】合気拳法部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitaikikenpoubu"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/228.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】体操部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/koudai_taiso"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/229.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】ゴルフ部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_golf"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/230.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】サイクリング部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/cycling_oit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/231.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】スキー部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_ski_club"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/232.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】カヌー部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/233.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】アメリカンフットボール部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/rowdies_oit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://rowdies.web.fc2.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://www.facebook.com/oit.rowdies"
                        target="_blank"
                        rel="noopener noreferrer">
                        Facebook
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/234.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】ソフトボール部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/235.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】テコンドー部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_taekwondo"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/236.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】フットサル部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_futsal"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/237.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】合気道部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/238.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】ストリートダンス部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_dance"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://www.instagram.com/daikoustdan_emacs/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Instagram
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-sports/1201.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】情報科学部 軟式野球部
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="8">
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/100.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】文化会本部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_bunkakai"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/101.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】土木文化研究部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/102.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】建築文化研究部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/103.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】電気科学研究部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/OIT_denkiken"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/104.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】機械工学研究部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="http://blog.livedoor.jp/kiken_oit/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/105.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】応用化学研究部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/OIT_oukakenn"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://appliedchemistryre.wixsite.com/mysite"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/106.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】電子工学研究部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_denshiken"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/107.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】知財推進部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/chizaisuishinbu"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/108.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・梅田】空間デザイン研究部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/109.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】生命工学研究部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitseimeiken"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/110.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】環境工学研究部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/111.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】美術部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/112.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】写真研究部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_syaken"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/113.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】演劇部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/kanki_1000"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/114.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】茶道部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitea_"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/115.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】ユースホステル部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oityouth"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/116.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】鉄道研究部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitrfc"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/117.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】将棋部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/118.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】ボランティア教育研究会
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/volo_oit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/119.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】漫画研究部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_mk"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://oitmk.web.fc2.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/120.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】天文学研究部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/tenmon_oit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://tenmon-oit.jimdofree.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/127.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・梅田】E.S.S.（English Speaking Society）
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/129.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・梅田】書道部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_shodo"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://oit-shodo.jimdofree.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/130.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】城北水辺クラブ
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://itasenpara.wixsite.com/shirokitamizubeclub"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/121.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】軽音楽部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_keion"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/122.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】マンドリン部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitmandolinclub"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://oitmandolinclub.wixsite.com/osaka-i-t-mandolin"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/123.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】クラシックギター部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/124.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】フォークソング部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/125.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮・枚方】ウインドアンサンブル
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/windensembleoit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://windensembleoit.wixsite.com/oit-windensemble"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/126.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】OCF軽音楽部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_ocf"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/128.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】コーラス部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/chorus_oit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/2101.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【梅田】OIT梅田ボランティア部
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/2102.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【梅田】イベントクリエイター部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://www.instagram.com/eventcreatorclub/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Instagram
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1101.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】HxSコンピュータ部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/hxs_"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1102.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】Creative NG
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1103.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】Creative Sound Lab
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitcslab"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="http://oitcslab.web.fc2.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1104.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】情報科学部軽音部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitk_on"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1105.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】ubiquitous Robot Lab.
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1106.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】ジャグリングクラブ
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/toss_oit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1107.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】Visual Acanthus Creation
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/vacreation2012"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1108.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】情報科学部文化表現部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/OITbunkahyougen"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1109.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】情報科学部ボランティア部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/zyoho_volunteer"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1110.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】情報科学部写真部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_ispc"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1111.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】情報科学部映画研究部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/movemovies"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-culture/1113.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】模型部
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="9">
                    <Typography variant="h4">
                        大宮キャンパス
                    </Typography>
                    <br />
                    <CustomTypo>
                        軍事研究会
                    </CustomTypo>
                    <CustomTypo>
                        フットサル Latiro
                    </CustomTypo>
                    <CustomTypo>
                        マジックサークル
                    </CustomTypo>
                    <CustomTypo>
                        卓上遊戯サークル
                    </CustomTypo>
                    <CustomTypo>
                        ウィッフルボールサークル
                    </CustomTypo>
                    <CustomTypo>
                        城北水辺クラブ
                    </CustomTypo>
                    <CustomTypo>
                        大阪工業大学管弦楽団
                    </CustomTypo>
                    <CustomTypo>
                        工大テニスサークル
                    </CustomTypo>
                    <CustomTypo>
                        ビブリオバトル
                    </CustomTypo>
                    <CustomTypo>
                        フィギュアスケート同好会
                    </CustomTypo>
                    <CustomTypo>
                        OITポケモンサークル
                    </CustomTypo>
                    <CustomTypo>
                        弁理士受験会
                    </CustomTypo>
                    <CustomTypo>
                        ボウリングサークル
                    </CustomTypo>
                    <CustomTypo>
                        シャトルDAYS
                    </CustomTypo>
                    <CustomTypo>
                        カレーと君と。～ナンorごはん～
                    </CustomTypo>
                    <CustomTypo>
                        OIT軟式野球サークル
                    </CustomTypo>
                    <CustomTypo>
                        アウトドア研究会
                    </CustomTypo>
                    <CustomTypo>
                        サバイバルゲームサークル
                    </CustomTypo>
                    <br />
                    <Typography variant="h4">
                        梅田キャンパス
                    </Typography>
                    <br />
                    <CustomTypo>
                        TRPGサークル
                    </CustomTypo>
                    <CustomTypo>
                        ものづくりサークル
                    </CustomTypo>
                    <CustomTypo>
                        フットサルサークル
                    </CustomTypo>
                    <CustomTypo>
                        Dream Crafters
                    </CustomTypo>
                    <CustomTypo>
                        大阪工業大学ピアノの会
                    </CustomTypo>
                    <CustomTypo>
                        サバイバルゲームサークル
                    </CustomTypo>
                    <CustomTypo>
                        OIT梅田フットサル
                    </CustomTypo>
                    <br />
                    <Typography variant="h4">
                        枚方キャンパス
                    </Typography>
                    <br />
                    <CustomTypo>
                        アナログゲーム研究会
                    </CustomTypo>
                    <CustomTypo>
                        マルチスポーツ
                    </CustomTypo>
                    <CustomTypo>
                        OITy
                    </CustomTypo>
                    <CustomTypo>
                        バーチャルライブ研究会
                    </CustomTypo>
                    <CustomTypo>
                        音ゲーサークル ゆる音△
                    </CustomTypo>
                    <CustomTypo>
                        雀朋
                    </CustomTypo>
                    <CustomTypo>
                        枚方TRPGサークル
                    </CustomTypo>
                    <CustomTypo>
                        バイクサークル
                    </CustomTypo>
                </TabPanel>
                <TabPanel value="10">
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/monolab/project/index.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        モノラボプロジェクト
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-various/301.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】城北祭実行委員会
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/shirokita_fes"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://shirokitapost.wixsite.com/sirokitasai"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://www.youtube.com/channel/UCdAfIFJhJgSYrR7qzlEsXlQ"
                        target="_blank"
                        rel="noopener noreferrer">
                        YouTube
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-various/2301.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【梅田】茶屋町祭実行委員会
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_chayamachi"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://chayamachipost.wixsite.com/my-site-1"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://www.instagram.com/oit_chayamachi/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Instagram
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-various/1301.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【枚方】北山祭実行委員会
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/kitayamasai_oit"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-various/302.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】應援團
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitouendan"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="http://koudai-ouendan.sakura.ne.jp/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-various/304.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】ボランティア・Link
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oitborarin"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://www.facebook.com/OITborarin/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Facebook
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-various/306.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】陶芸部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="http://www.oit.ac.jp/japanese/monolab/moon/index.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        Website
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-various/305.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】国際友好部
                    </CustomLink>
                    <CustomLink
                        marginLeft={2}
                        href="https://twitter.com/oit_yukobu123"
                        target="_blank"
                        rel="noopener noreferrer">
                        Twitter
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="http://www.oit.ac.jp/japanese/club/org-various/303.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        【大宮】留学生友好会
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="11">
                    <CustomLink
                        href="https://twitter.com/hashtag/%E6%98%A5%E3%81%8B%E3%82%89%E5%A4%A7%E5%B7%A5%E5%A4%A7"
                        target="_blank"
                        rel="noopener noreferrer">
                        #春から大工大
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://twitter.com/hashtag/OITlifehack"
                        target="_blank"
                        rel="noopener noreferrer">
                        #OITLifehack
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/center/pcspec/"
                        target="_blank"
                        rel="noopener noreferrer">
                        PCのスペック等
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="12">
                    <CustomLink
                        href="https://zenn.dev/yashikota/articles/3dc666b41c884d"
                        target="_blank"
                        rel="noopener noreferrer">
                        無料かつ高品質な初学者向けプログラミング学習教材まとめ
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="13">
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/career/data2.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        就職状況一覧[学部]
                    </CustomLink>
                    <br />
                    <CustomLink
                        href="https://www.oit.ac.jp/japanese/career/data.html"
                        target="_blank"
                        rel="noopener noreferrer">
                        就職状況一覧[大学院]
                    </CustomLink>
                    <br />
                </TabPanel>
                <TabPanel value="14">
                    <Typography variant="h3" color="red">
                        Twitterアカウントは大学に監視されてるよ！
                        発言には気をつけようね！
                    </Typography>
                </TabPanel>
            </TabContext>
        </Box>
    );
}