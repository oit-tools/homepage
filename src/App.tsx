import * as React from 'react';
import { CssBaseline, Grid, Link, Typography, useMediaQuery, ThemeProvider, createTheme, GlobalStyles } from '@mui/material';
import { Header } from './components/Header';
import { MediaCard } from './components/Card';
import { Feed } from './components/Feed';
import { LinkList } from './components/LinkList';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export const App = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });

  // localStorageに保存されているならそれを使い、なければシステムの設定を使う
  React.useEffect(() => {
    if (localStorage.getItem('colorMode') === "dark") {
      setMode("dark");
    } else if (localStorage.getItem('colorMode') === "light") {
      setMode("light");
    } else if ((prefersDarkMode) === true) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [prefersDarkMode]);

  //トグルボタンでテーマを切り替える
  const colorMode = React.useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }
  ), []);

  //localStorageに保存
  React.useEffect(() => {
    if (mode === "dark") {
      localStorage.setItem("colorMode", "dark");
    } else {
      localStorage.setItem("colorMode", "light");
    }
  }, [mode]);

  // テーマの適応とダークモード時の背景
  const Theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        }
      }),
    [mode],
  );

  return (
    <>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0, paddingRight: 5 } }} />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={Theme}>
          <CssBaseline />
          <Header
            title="OIT Tools"
            url="https://oit.yashikota.com" />

          <Grid
            sx={{ flexGrow: 1, mt: "auto" }}
            container
            spacing={3}
            alignItems="center"
            justifyContent="center">
            <Grid sx={{ m:1 }}>
              <MediaCard
                title="OITシラバスアプリ"
                description="大阪工業大学の全学部・大学院に対応したシラバス閲覧アプリ。
                    インクリメンタルサーチやフィルタリングに対応。"
                image="%PUBLIC_URL%/syllabus.webp"
                url="https://syllabus.oit.yashikota.com?=hp" />
            </Grid>
            <Grid sx={{ m:1 }}>
              <MediaCard
                title="OIT Credit App"
                description="授業アンケート結果&成績評価状況を確認できるアプリ。
                    情報保護のため閲覧には学内のMicrosoftアカウント認証が必要です。"
                image="%PUBLIC_URL%/credit.webp"
                url="https://credit.oit.yashikota.com?=hp" />
            </Grid>
          </Grid>

          <Grid
            sx={{ flexGrow: 1, mt: "auto" }}
            container
            spacing={3}
            alignItems="center"
            justifyContent="center">
            <Grid item>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}>
                <Link
                  color="inherit"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.oit.ac.jp/japanese/students/list.php">
                  OIT News (最新10件)
                </Link>
              </Typography>
              <Feed />
            </Grid>
          </Grid>

          <Grid
            sx={{ flexGrow: 1, mb: "30px" }}
            container
            spacing={3}
            alignItems="center"
            justifyContent="center">
            <Grid item xs={12} md={11} lg={8} mt={5}>
              <Typography
                variant="h5"
                component="div"
                sx={{ textAlign: "center" }}>
                便利かもしれないリンク集
              </Typography>
              <LinkList />
            </Grid>
          </Grid>

        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}
