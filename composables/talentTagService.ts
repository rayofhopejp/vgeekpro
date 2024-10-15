const checkTag = (tag: string, tags: string[]): boolean => {
	if (tag == "all") return true;
	return tags.indexOf(tag) !== -1;
}

const specialTags: string[] = [
	"all",								// * すべて表示
	"member",							// * ぶいぎーく！メンバー
	"staff",							// * ぶいぎーく！スタッフ
] as const;

const unitTags: string[] = [
	"security-girl",					// * セキュリティガール (ユニット名)
	"hard-geeks",						// * はーどぎーく(ユニット名)
] as const;

const attributeTags: string[] = [
	// 現時点で表示出来そうなものには表示タグを付けています。
	// ドロップダウン選択にする予定です。
	// タグID							|表示|概要
	//									|    |
	"automation",						//   自動化
	"b-to-b",							//   企業間取引
	"backend",							//   バックエンド
	"chatgpt",							//   ChatGPT (広義の生成AIを含む)
	"cloud",							//   クラウド (Azure, AWS, GCP, etc...)
	"csharp",							// * C#
	"docker",							//   Docker
	"frontend",							// * フロントエンド
	"hardware",							// * ハードウェア
	"infrastructure",					// * インフラ
	"internet-information-services",	//   IIS
	"linux",							// * Linux (GNU/Linux)
	"macos",							//   macOS
	"meow",								// * にゃー (ねこ)
	"network",							// * ネットワーク
	"nodejs",							//   Node.js
	"operating-system",					//   OS (ジャンル)
	"react",							//   React
	"rpg-maker-mz",						//   RPGツクールMZ
	"server",							//   サーバー
	"solid-js",							// * SolidJS
	"sqlserver",						//   SQL Server
	"system-engineer",					//   システムエンジニア (広義)
	"typescript",						//   TypeScript
	"udonsharp",						//   UdonSharp
	"ui-ux",							//   UI・UX (デザイン)
	"unity3d",							//   Unity
	"windows-server",					//   Windows Server
	"deno",								//   Deno
	"svelte",							//   Svelte
	"web",								//   Web
	"freelance",						//   フリーランス
	"resonite",							//   Resonite
	"vrchat",							//   VRChat
	"lt",								//   Lightning Talks (?)
	"minecraft",						//   Minecraft
	"clang",							//   C言語
	"basic",							//   BASIC
	"windows-forms",					//   Windows フォーム
	"cryptography-research",			//   暗号研究
	"security-engineer",				//   セキュリティエンジニア
	"nessus",							//   Nessus
	"programming",						//   プログラミング
	"game-development",					//   ゲーム開発
	"retro-pc",							//   レトロPC
	"x68000",							//   X68000
	"mz700",							//   MZ-700
	"pc6000",							//   PC-6000 シリーズ
	"msx",								//   MSX
	"free-bsd",							//   FreeBSD
] as const;

const allTags: string[] = [].concat(specialTags, unitTags, attributeTags) as const;

type Tags = (typeof allTags)[number];

// まず無いとは思いますが、不要になったら削除します
const currentlyAvailableTags: string[] = [
	"csharp",							// * C#
	"frontend",							// * フロントエンド
	"hardware",							// * ハードウェア
	"infrastructure",					// * インフラ
	"linux",							// * Linux (GNU/Linux)
	"meow",								// * にゃー (ねこ)
	"network",							// * ネットワーク
	"solid-js",							// * SolidJS
] as const satisfies readonly Tags[]

export {unitTags, attributeTags, specialTags, currentlyAvailableTags, allTags, Tags, checkTag};
