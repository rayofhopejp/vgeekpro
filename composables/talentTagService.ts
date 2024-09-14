const checkTag = (tag: string, tags: string[]): boolean => {
	if (tag == "all") return true;
	return tags.indexOf(tag) !== -1;
}

const currentTags: string[] = [
	// 現時点で表示出来そうなものには表示タグを付けています。
	// ドロップダウン選択にする予定です。
	// タグID							|表示|概要
	//									|    |
	"all",								// * すべて表示
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
	"member",							// * ぶいぎーく！メンバー
	"meow",								// * にゃー (ねこ)
	"network",							// * ネットワーク
	"nodejs",							//   Node.js
	"operating-system",					//   OS (ジャンル)
	"react",							//   React
	"rpg-maker-mz",						//   RPGツクールMZ
	"security-girl",					// * セキュリティガール (ユニット名)
	"server",							//   サーバー
	"solid-js",							// * SolidJS
	"sqlserver",						//   SQL Server
	"staff",							// * ぶいぎーく！スタッフ
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
	"vrchat",							//   VRChay
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
]

const currentlyAvailableTags: string[] = [
	"all",								// * すべて表示
	"member",							// * ぶいぎーく！メンバー
	"staff",							// * ぶいぎーく！スタッフ
	"csharp",							// * C#
	"frontend",							// * フロントエンド
	"hardware",							// * ハードウェア
	"infrastructure",					// * インフラ
	"linux",							// * Linux (GNU/Linux)
	"meow",								// * にゃー (ねこ)
	"network",							// * ネットワーク
	"security-girl",					// * セキュリティガール (ユニット名)
	"solid-js",							// * SolidJS
]

export {currentlyAvailableTags, currentTags, checkTag};
