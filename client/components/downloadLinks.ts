export type Provider =
  | "mediafire"
  | "mega"
  | "gdrive"
  | "direct"
  | "torrent"
  | "other";

export interface LinkItem {
  label: string;
  href: string;
  provider: Provider;
}

export type GroupId = "launcher" | "patch" | "client";

export interface DownloadGroup {
  id: GroupId;
  titleKey: string; // مفتاح الترجمة (مثلاً: "download.launcher")
  hintKey?: string; // مفتاح تلميح اختياري تحت العنوان (الحجم/ملحوظات)
  links: LinkItem[];
}

//أضف الروابط براحتك من هنا فقط
export const downloadGroups: DownloadGroup[] = [
  {
    id: "launcher",
    titleKey: "download.launcher",
    hintKey: "download.hint.launcher",
    links: [
      {
        label: "MediaFire",
        href: "https://www.mediafire.com/file/cijayj7lkflibg4/Era+of+Legends+-+Launcher.rar/file*",
        provider: "mediafire",
      },
      // {
      //   label: "MEGA",
      //   href: "https://example.com/launcher-mega",
      //   provider: "mega",
      // },
      // {
      //   label: "Google Drive",
      //   href: "https://example.com/launcher-gdrive",
      //   provider: "gdrive",
      // },
      // {
      //   label: "Direct",
      //   href: "https://example.com/launcher-direct",
      //   provider: "direct",
      // },
    ],
  },
  {
    id: "patch",
    titleKey: "download.patch",
    hintKey: "download.hint.patch",
    links: [
      {
        label: "MediaFire",
        href: "https://www.mediafire.com/file_premium/xf634wik50nk7oq/%D8%B9%D8%B5%D8%B1_%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B7%D9%8A%D8%B1_-_%D8%A7%D9%84%D8%A8%D8%A7%D8%AA%D8%B4_%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A.rar/file",
        provider: "mediafire",
      },
      // {
      //   label: "MEGA",
      //   href: "https://example.com/patch-mega",
      //   provider: "mega",
      // },
      // {
      //   label: "Google Drive",
      //   href: "https://example.com/patch-gdrive",
      //   provider: "gdrive",
      // },
    ],
  },
  {
    id: "client",
    titleKey: "download.client",
    hintKey: "download.hint.client",
    links: [
      {
        label: "MediaFire ",
        href: "https://www.mediafire.com/download_status.php?quickkey=paz60g1k2i0l1dn&origin=download",
        provider: "mediafire",
      },

      // {
      //   label: "MEGA",
      //   href: "https://example.com/client-mega",
      //   provider: "mega",
      // },
      // {
      //   label: "Torrent",
      //   href: "https://example.com/client-torrent",
      //   provider: "torrent",
      // },
    ],
  },
];
