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
	"csharp",							//   C#
	"docker",							//   Docker
	"frontend",							// * フロントエンド
	"hardware",							// * ハードウェア
	"infrastructure",					// * インフラ
	"internet-information-services",	//   IIS
	"linux",							//   Linux (GNU/Linux)
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
]

const currentlyAvailableTags: string[] = [
	"all",								// * すべて表示
	"member",							// * ぶいぎーく！メンバー
	"staff",							// * ぶいぎーく！スタッフ
	"frontend",							// * フロントエンド
	"hardware",							// * ハードウェア
	"infrastructure",					// * インフラ
	"meow",								// * にゃー (ねこ)
	"network",							// * ネットワーク
	"security-girl",					// * セキュリティガール (ユニット名)
	"solid-js",							// * SolidJS
]

export { currentlyAvailableTags, currentTags, checkTag };
