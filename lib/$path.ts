export const pagesPath = {
  "footer": {
    "contact": {
      $url: (url?: { hash?: string }) => ({ pathname: '/footer/contact' as const, hash: url?.hash })
    },
    "result": {
      $url: (url?: { hash?: string }) => ({ pathname: '/footer/result' as const, hash: url?.hash })
    }
  },
  "header": {
    "atFirst": {
      $url: (url?: { hash?: string }) => ({ pathname: '/header/atFirst' as const, hash: url?.hash })
    }
  },
  "horse": {
    "amante": {
      $url: (url?: { hash?: string }) => ({ pathname: '/horse/amante' as const, hash: url?.hash })
    }
  },
  "news": {
    $url: (url?: { hash?: string }) => ({ pathname: '/news' as const, hash: url?.hash }),
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/news/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  "result": {
    "$2304": {
      $url: (url?: { hash?: string }) => ({ pathname: '/result/2304' as const, hash: url?.hash })
    },
    "$2305": {
      $url: (url?: { hash?: string }) => ({ pathname: '/result/2305' as const, hash: url?.hash })
    },
    "$2306": {
      $url: (url?: { hash?: string }) => ({ pathname: '/result/2306' as const, hash: url?.hash })
    },
    "$2307": {
      $url: (url?: { hash?: string }) => ({ pathname: '/result/2307' as const, hash: url?.hash })
    },
    "$2308": {
      $url: (url?: { hash?: string }) => ({ pathname: '/result/2308' as const, hash: url?.hash })
    }
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  $1_jpeg: '/1.jpeg',
  $2_jpeg: '/2.jpeg',
  favicon_ico: '/favicon.ico',
  next_svg: '/next.svg',
  vercel_svg: '/vercel.svg'
} as const

export type StaticPath = typeof staticPath
