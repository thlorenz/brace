// Generated from ./rules/RULANG.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RULANGListener = require('./RULANGListener').RULANGListener;
var grammarFileName = "RULANG.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003@\u0162\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0007\u0002X\n\u0002\f\u0002\u000e\u0002[\u000b",
    "\u0002\u0003\u0002\u0007\u0002^\n\u0002\f\u0002\u000e\u0002a\u000b\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0005\u0007u\n\u0007\u0003\b\u0003\b\u0003\b\u0007\bz\n\b\f\b\u000e",
    "\b}\u000b\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0007\t\u0084\n",
    "\t\f\t\u000e\t\u0087\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0007\n\u0091\n\n\f\n\u000e\n\u0094\u000b\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u009b",
    "\n\u000b\f\u000b\u000e\u000b\u009e\u000b\u000b\u0003\u000b\u0003\u000b",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0006\f\u00a6\n\f\r\f\u000e\f\u00a7",
    "\u0003\f\u0003\f\u0003\f\u0003\f\u0007\f\u00ae\n\f\f\f\u000e\f\u00b1",
    "\u000b\f\u0003\f\u0006\f\u00b4\n\f\r\f\u000e\f\u00b5\u0003\r\u0003\r",
    "\u0003\r\u0007\r\u00bb\n\r\f\r\u000e\r\u00be\u000b\r\u0003\r\u0003\r",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e\u00c5\n\u000e\f\u000e",
    "\u000e\u000e\u00c8\u000b\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u00d3\n\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u0010",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0003\u0011\u0007\u0011\u00e1\n\u0011\f\u0011\u000e\u0011",
    "\u00e4\u000b\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0007\u0012\u00ec\n\u0012\f\u0012\u000e\u0012\u00ef",
    "\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0015\u0003\u0015\u0005\u0015\u0105\n\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003",
    "\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u011d\n\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0007\u0018\u0123\n",
    "\u0018\f\u0018\u000e\u0018\u0126\u000b\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u012e\n",
    "\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003",
    "\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0005",
    "\u001e\u013b\n\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003 \u0003",
    " \u0003!\u0003!\u0003!\u0005!\u0145\n!\u0003\"\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003&\u0003",
    "&\u0003&\u0003&\u0003\'\u0003\'\u0003(\u0003(\u0003(\u0005(\u015c\n",
    "(\u0003)\u0003)\u0003*\u0003*\u0003*\u0002\u0003.+\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468:<>@BDFHJLNPR\u0002\u0007\u0003\u0002\u0018\u0019\u0003\u0002",
    " !\u0003\u0002(*\u0003\u0002,3\u0003\u000247\u015c\u0002T\u0003\u0002",
    "\u0002\u0002\u0004b\u0003\u0002\u0002\u0002\u0006e\u0003\u0002\u0002",
    "\u0002\bh\u0003\u0002\u0002\u0002\nk\u0003\u0002\u0002\u0002\ft\u0003",
    "\u0002\u0002\u0002\u000ev\u0003\u0002\u0002\u0002\u0010\u0080\u0003",
    "\u0002\u0002\u0002\u0012\u008a\u0003\u0002\u0002\u0002\u0014\u0097\u0003",
    "\u0002\u0002\u0002\u0016\u00a1\u0003\u0002\u0002\u0002\u0018\u00b7\u0003",
    "\u0002\u0002\u0002\u001a\u00c1\u0003\u0002\u0002\u0002\u001c\u00cb\u0003",
    "\u0002\u0002\u0002\u001e\u00d7\u0003\u0002\u0002\u0002 \u00e2\u0003",
    "\u0002\u0002\u0002\"\u00e7\u0003\u0002\u0002\u0002$\u00f3\u0003\u0002",
    "\u0002\u0002&\u00f9\u0003\u0002\u0002\u0002(\u0104\u0003\u0002\u0002",
    "\u0002*\u0109\u0003\u0002\u0002\u0002,\u010d\u0003\u0002\u0002\u0002",
    ".\u011c\u0003\u0002\u0002\u00020\u012d\u0003\u0002\u0002\u00022\u012f",
    "\u0003\u0002\u0002\u00024\u0132\u0003\u0002\u0002\u00026\u0134\u0003",
    "\u0002\u0002\u00028\u0136\u0003\u0002\u0002\u0002:\u013a\u0003\u0002",
    "\u0002\u0002<\u013c\u0003\u0002\u0002\u0002>\u013f\u0003\u0002\u0002",
    "\u0002@\u0144\u0003\u0002\u0002\u0002B\u0146\u0003\u0002\u0002\u0002",
    "D\u0149\u0003\u0002\u0002\u0002F\u014c\u0003\u0002\u0002\u0002H\u014f",
    "\u0003\u0002\u0002\u0002J\u0152\u0003\u0002\u0002\u0002L\u0156\u0003",
    "\u0002\u0002\u0002N\u015b\u0003\u0002\u0002\u0002P\u015d\u0003\u0002",
    "\u0002\u0002R\u015f\u0003\u0002\u0002\u0002TU\u0005\u0004\u0003\u0002",
    "UY\u0005\u0006\u0004\u0002VX\u0005\b\u0005\u0002WV\u0003\u0002\u0002",
    "\u0002X[\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002\u0002YZ\u0003\u0002",
    "\u0002\u0002Z_\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002\\^",
    "\u0005\n\u0006\u0002]\\\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002",
    "\u0002_]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002`\u0003\u0003",
    "\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002bc\u0007\u0003\u0002\u0002",
    "cd\u0007:\u0002\u0002d\u0005\u0003\u0002\u0002\u0002ef\u0007\u0004\u0002",
    "\u0002fg\u0007:\u0002\u0002g\u0007\u0003\u0002\u0002\u0002hi\u0007\u0005",
    "\u0002\u0002ij\u0007:\u0002\u0002j\t\u0003\u0002\u0002\u0002kl\u0007",
    "\u0006\u0002\u0002lm\u0005\f\u0007\u0002m\u000b\u0003\u0002\u0002\u0002",
    "nu\u0005\u000e\b\u0002ou\u0005\u0010\t\u0002pu\u0005\u0012\n\u0002q",
    "u\u0005\u0018\r\u0002ru\u0005\u001a\u000e\u0002su\u0005\u0014\u000b",
    "\u0002tn\u0003\u0002\u0002\u0002to\u0003\u0002\u0002\u0002tp\u0003\u0002",
    "\u0002\u0002tq\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002ts\u0003",
    "\u0002\u0002\u0002u\r\u0003\u0002\u0002\u0002vw\u0007\u0007\u0002\u0002",
    "w{\u0007\b\u0002\u0002xz\u0005(\u0015\u0002yx\u0003\u0002\u0002\u0002",
    "z}\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002",
    "\u0002|~\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002\u0002~\u007f\u0007",
    "\t\u0002\u0002\u007f\u000f\u0003\u0002\u0002\u0002\u0080\u0081\u0007",
    "\n\u0002\u0002\u0081\u0085\u0007\b\u0002\u0002\u0082\u0084\u0005&\u0014",
    "\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u0087\u0003\u0002\u0002",
    "\u0002\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002",
    "\u0002\u0086\u0088\u0003\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0007\t\u0002\u0002\u0089\u0011\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0007\u000b\u0002\u0002\u008b\u008c\u0007\f\u0002",
    "\u0002\u008c\u008d\u00078\u0002\u0002\u008d\u008e\u0007\r\u0002\u0002",
    "\u008e\u0092\u0007\b\u0002\u0002\u008f\u0091\u0005\u001c\u000f\u0002",
    "\u0090\u008f\u0003\u0002\u0002\u0002\u0091\u0094\u0003\u0002\u0002\u0002",
    "\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002",
    "\u0093\u0095\u0003\u0002\u0002\u0002\u0094\u0092\u0003\u0002\u0002\u0002",
    "\u0095\u0096\u0007\t\u0002\u0002\u0096\u0013\u0003\u0002\u0002\u0002",
    "\u0097\u0098\u0007\u000e\u0002\u0002\u0098\u009c\u0007\b\u0002\u0002",
    "\u0099\u009b\u0005\u0016\f\u0002\u009a\u0099\u0003\u0002\u0002\u0002",
    "\u009b\u009e\u0003\u0002\u0002\u0002\u009c\u009a\u0003\u0002\u0002\u0002",
    "\u009c\u009d\u0003\u0002\u0002\u0002\u009d\u009f\u0003\u0002\u0002\u0002",
    "\u009e\u009c\u0003\u0002\u0002\u0002\u009f\u00a0\u0007\t\u0002\u0002",
    "\u00a0\u0015\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007=\u0002\u0002",
    "\u00a2\u00a3\u0007\u000f\u0002\u0002\u00a3\u00a5\u0007\u0010\u0002\u0002",
    "\u00a4\u00a6\u0005H%\u0002\u00a5\u00a4\u0003\u0002\u0002\u0002\u00a6",
    "\u00a7\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7",
    "\u00a8\u0003\u0002\u0002\u0002\u00a8\u00a9\u0003\u0002\u0002\u0002\u00a9",
    "\u00af\u0007\u0011\u0002\u0002\u00aa\u00ab\u0005$\u0013\u0002\u00ab",
    "\u00ac\u0007\u0012\u0002\u0002\u00ac\u00ae\u0003\u0002\u0002\u0002\u00ad",
    "\u00aa\u0003\u0002\u0002\u0002\u00ae\u00b1\u0003\u0002\u0002\u0002\u00af",
    "\u00ad\u0003\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002\u0002\u00b0",
    "\u00b3\u0003\u0002\u0002\u0002\u00b1\u00af\u0003\u0002\u0002\u0002\u00b2",
    "\u00b4\u0005$\u0013\u0002\u00b3\u00b2\u0003\u0002\u0002\u0002\u00b4",
    "\u00b5\u0003\u0002\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002\u0002\u00b5",
    "\u00b6\u0003\u0002\u0002\u0002\u00b6\u0017\u0003\u0002\u0002\u0002\u00b7",
    "\u00b8\u0007\u0013\u0002\u0002\u00b8\u00bc\u0007\b\u0002\u0002\u00b9",
    "\u00bb\u0005*\u0016\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00bb",
    "\u00be\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc",
    "\u00bd\u0003\u0002\u0002\u0002\u00bd\u00bf\u0003\u0002\u0002\u0002\u00be",
    "\u00bc\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007\t\u0002\u0002\u00c0",
    "\u0019\u0003\u0002\u0002\u0002\u00c1\u00c2\u0007\u0014\u0002\u0002\u00c2",
    "\u00c6\u0007\b\u0002\u0002\u00c3\u00c5\u0005*\u0016\u0002\u00c4\u00c3",
    "\u0003\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6\u00c4",
    "\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u00c9",
    "\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c9\u00ca",
    "\u0007\t\u0002\u0002\u00ca\u001b\u0003\u0002\u0002\u0002\u00cb\u00cc",
    "\u00079\u0002\u0002\u00cc\u00cd\u0005\u001e\u0010\u0002\u00cd\u00ce",
    "\u0007\u0015\u0002\u0002\u00ce\u00cf\u0007\b\u0002\u0002\u00cf\u00d0",
    "\u0005 \u0011\u0002\u00d0\u00d2\u0007\t\u0002\u0002\u00d1\u00d3\u0005",
    ",\u0017\u0002\u00d2\u00d1\u0003\u0002\u0002\u0002\u00d2\u00d3\u0003",
    "\u0002\u0002\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007",
    "\u0016\u0002\u0002\u00d5\u00d6\u0005\"\u0012\u0002\u00d6\u001d\u0003",
    "\u0002\u0002\u0002\u00d7\u00d8\u0007=\u0002\u0002\u00d8\u00d9\u0007",
    "\u0017\u0002\u0002\u00d9\u00da\t\u0002\u0002\u0002\u00da\u00db\u0007",
    "\u001a\u0002\u0002\u00db\u00dc\u0007<\u0002\u0002\u00dc\u00dd\u0007",
    "\u001b\u0002\u0002\u00dd\u00de\u0007\u000f\u0002\u0002\u00de\u001f\u0003",
    "\u0002\u0002\u0002\u00df\u00e1\u0005$\u0013\u0002\u00e0\u00df\u0003",
    "\u0002\u0002\u0002\u00e1\u00e4\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003",
    "\u0002\u0002\u0002\u00e2\u00e3\u0003\u0002\u0002\u0002\u00e3\u00e5\u0003",
    "\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e5\u00e6\u0005",
    "$\u0013\u0002\u00e6!\u0003\u0002\u0002\u0002\u00e7\u00ed\u0007\b\u0002",
    "\u0002\u00e8\u00e9\u0005$\u0013\u0002\u00e9\u00ea\u0007\u001c\u0002",
    "\u0002\u00ea\u00ec\u0003\u0002\u0002\u0002\u00eb\u00e8\u0003\u0002\u0002",
    "\u0002\u00ec\u00ef\u0003\u0002\u0002\u0002\u00ed\u00eb\u0003\u0002\u0002",
    "\u0002\u00ed\u00ee\u0003\u0002\u0002\u0002\u00ee\u00f0\u0003\u0002\u0002",
    "\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00f0\u00f1\u0005$\u0013",
    "\u0002\u00f1\u00f2\u0007\t\u0002\u0002\u00f2#\u0003\u0002\u0002\u0002",
    "\u00f3\u00f4\u0007\u0017\u0002\u0002\u00f4\u00f5\u0005.\u0018\u0002",
    "\u00f5\u00f6\u0005.\u0018\u0002\u00f6\u00f7\u0005.\u0018\u0002\u00f7",
    "\u00f8\u0007\u001b\u0002\u0002\u00f8%\u0003\u0002\u0002\u0002\u00f9",
    "\u00fa\u0007\u001d\u0002\u0002\u00fa\u00fb\u0007\u0017\u0002\u0002\u00fb",
    "\u00fc\u0005.\u0018\u0002\u00fc\u00fd\u0007\u0012\u0002\u0002\u00fd",
    "\u00fe\u0005.\u0018\u0002\u00fe\u00ff\u0007\u0012\u0002\u0002\u00ff",
    "\u0100\u0005.\u0018\u0002\u0100\u0101\u0007\u001b\u0002\u0002\u0101",
    "\'\u0003\u0002\u0002\u0002\u0102\u0105\u0007=\u0002\u0002\u0103\u0105",
    "\u0005J&\u0002\u0104\u0102\u0003\u0002\u0002\u0002\u0104\u0103\u0003",
    "\u0002\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u0107\u0007",
    "\u001a\u0002\u0002\u0107\u0108\u0005.\u0018\u0002\u0108)\u0003\u0002",
    "\u0002\u0002\u0109\u010a\u0007=\u0002\u0002\u010a\u010b\u0007\u001a",
    "\u0002\u0002\u010b\u010c\u00050\u0019\u0002\u010c+\u0003\u0002\u0002",
    "\u0002\u010d\u010e\u0007\u001e\u0002\u0002\u010e\u010f\u0005.\u0018",
    "\u0002\u010f-\u0003\u0002\u0002\u0002\u0110\u0111\b\u0018\u0001\u0002",
    "\u0111\u0112\u0005L\'\u0002\u0112\u0113\u0005.\u0018\t\u0113\u011d\u0003",
    "\u0002\u0002\u0002\u0114\u0115\u0007\u0017\u0002\u0002\u0115\u0116\u0005",
    ".\u0018\u0002\u0116\u0117\u0007\u001b\u0002\u0002\u0117\u011d\u0003",
    "\u0002\u0002\u0002\u0118\u011d\u00050\u0019\u0002\u0119\u011d\u0005",
    "J&\u0002\u011a\u011d\u0007=\u0002\u0002\u011b\u011d\u0005H%\u0002\u011c",
    "\u0110\u0003\u0002\u0002\u0002\u011c\u0114\u0003\u0002\u0002\u0002\u011c",
    "\u0118\u0003\u0002\u0002\u0002\u011c\u0119\u0003\u0002\u0002\u0002\u011c",
    "\u011a\u0003\u0002\u0002\u0002\u011c\u011b\u0003\u0002\u0002\u0002\u011d",
    "\u0124\u0003\u0002\u0002\u0002\u011e\u011f\f\b\u0002\u0002\u011f\u0120",
    "\u0005N(\u0002\u0120\u0121\u0005.\u0018\t\u0121\u0123\u0003\u0002\u0002",
    "\u0002\u0122\u011e\u0003\u0002\u0002\u0002\u0123\u0126\u0003\u0002\u0002",
    "\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0124\u0125\u0003\u0002\u0002",
    "\u0002\u0125/\u0003\u0002\u0002\u0002\u0126\u0124\u0003\u0002\u0002",
    "\u0002\u0127\u012e\u00054\u001b\u0002\u0128\u012e\u00056\u001c\u0002",
    "\u0129\u012e\u00058\u001d\u0002\u012a\u012e\u0005:\u001e\u0002\u012b",
    "\u012e\u0005@!\u0002\u012c\u012e\u00052\u001a\u0002\u012d\u0127\u0003",
    "\u0002\u0002\u0002\u012d\u0128\u0003\u0002\u0002\u0002\u012d\u0129\u0003",
    "\u0002\u0002\u0002\u012d\u012a\u0003\u0002\u0002\u0002\u012d\u012b\u0003",
    "\u0002\u0002\u0002\u012d\u012c\u0003\u0002\u0002\u0002\u012e1\u0003",
    "\u0002\u0002\u0002\u012f\u0130\u0007\u001f\u0002\u0002\u0130\u0131\u0007",
    ":\u0002\u0002\u01313\u0003\u0002\u0002\u0002\u0132\u0133\u0007:\u0002",
    "\u0002\u01335\u0003\u0002\u0002\u0002\u0134\u0135\t\u0003\u0002\u0002",
    "\u01357\u0003\u0002\u0002\u0002\u0136\u0137\u0007\"\u0002\u0002\u0137",
    "9\u0003\u0002\u0002\u0002\u0138\u013b\u0005<\u001f\u0002\u0139\u013b",
    "\u0005> \u0002\u013a\u0138\u0003\u0002\u0002\u0002\u013a\u0139\u0003",
    "\u0002\u0002\u0002\u013b;\u0003\u0002\u0002\u0002\u013c\u013d\u0007",
    "<\u0002\u0002\u013d\u013e\u0007#\u0002\u0002\u013e=\u0003\u0002\u0002",
    "\u0002\u013f\u0140\u0007<\u0002\u0002\u0140?\u0003\u0002\u0002\u0002",
    "\u0141\u0145\u0005B\"\u0002\u0142\u0145\u0005D#\u0002\u0143\u0145\u0005",
    "F$\u0002\u0144\u0141\u0003\u0002\u0002\u0002\u0144\u0142\u0003\u0002",
    "\u0002\u0002\u0144\u0143\u0003\u0002\u0002\u0002\u0145A\u0003\u0002",
    "\u0002\u0002\u0146\u0147\u0007$\u0002\u0002\u0147\u0148\u0007:\u0002",
    "\u0002\u0148C\u0003\u0002\u0002\u0002\u0149\u014a\u0007%\u0002\u0002",
    "\u014a\u014b\u0007:\u0002\u0002\u014bE\u0003\u0002\u0002\u0002\u014c",
    "\u014d\u0007&\u0002\u0002\u014d\u014e\u0007:\u0002\u0002\u014eG\u0003",
    "\u0002\u0002\u0002\u014f\u0150\u0007\'\u0002\u0002\u0150\u0151\u0007",
    "=\u0002\u0002\u0151I\u0003\u0002\u0002\u0002\u0152\u0153\u0007=\u0002",
    "\u0002\u0153\u0154\u0007\u000f\u0002\u0002\u0154\u0155\u0007=\u0002",
    "\u0002\u0155K\u0003\u0002\u0002\u0002\u0156\u0157\t\u0004\u0002\u0002",
    "\u0157M\u0003\u0002\u0002\u0002\u0158\u015c\u0005P)\u0002\u0159\u015c",
    "\u0005R*\u0002\u015a\u015c\u0007+\u0002\u0002\u015b\u0158\u0003\u0002",
    "\u0002\u0002\u015b\u0159\u0003\u0002\u0002\u0002\u015b\u015a\u0003\u0002",
    "\u0002\u0002\u015cO\u0003\u0002\u0002\u0002\u015d\u015e\t\u0005\u0002",
    "\u0002\u015eQ\u0003\u0002\u0002\u0002\u015f\u0160\t\u0006\u0002\u0002",
    "\u0160S\u0003\u0002\u0002\u0002\u0018Y_t{\u0085\u0092\u009c\u00a7\u00af",
    "\u00b5\u00bc\u00c6\u00d2\u00e2\u00ed\u0104\u011c\u0124\u012d\u013a\u0144",
    "\u015b"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'@rr_uri'", "'@rr_version_uri'", "'@include'", 
                     "'section'", "'schema'", "'{'", "'}'", "'meta_graph'", 
                     "'rules'", "'['", "']'", "'debug'", "':'", "'SELECT'", 
                     "'FROM'", "','", "'rsc_configuration'", "'knowledge_base'", 
                     "'when '", "'then'", "'('", "'s'", "'salience'", "'='", 
                     "')'", "'.'", "'triple'", "'if'", "'resource'", "'true'", 
                     "'false'", "'null'", "'f'", "'duration'", "'time'", 
                     "'date'", "'?'", "'not'", "'create_uuid_resource'", 
                     "'is_no_value'", "'literal_regex'", "'<'", "'>'", "'exists_not'", 
                     "'=='", "'<='", "'>='", "'and'", "'or'", "'+'", "'-'", 
                     "'*'", "'/'", 'null', "'rule'" ];

var symbolicNames = [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', 'null', 'null', 
                      'null', 'null', 'null', 'null', 'null', "RULE_PRIORITY", 
                      "RULE", "STRING", "LineTerminator", "NUMBER", "ID", 
                      "WS", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "goal", "uriStatement", "versionUriStatement", "includeStatement", 
                   "sectionBlock", "section", "schemaSection", "metaGraphSection", 
                   "primaryKnowledgeRulesSection", "querySection", "queryRule", 
                   "rscConfigurationSection", "knowledgeBaseSection", "ruleDef", 
                   "ruleHeader", "predicates", "inferences", "tripleLiteral", 
                   "tripleAssertion", "resourceDecl", "configProp", "filter", 
                   "expression", "atom", "resourceLiteral", "stringLiteral", 
                   "booleanLiteral", "nullLiteral", "numberLiteral", "floatLiteral", 
                   "intLiteral", "calendarLiteral", "durationLiteral", "timeLiteral", 
                   "dateLiteral", "queryId", "prefixedID", "unaryOperator", 
                   "binaryOperator", "boolOperator", "numOperator" ];

function RULANGParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RULANGParser.prototype = Object.create(antlr4.Parser.prototype);
RULANGParser.prototype.constructor = RULANGParser;

Object.defineProperty(RULANGParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RULANGParser.EOF = antlr4.Token.EOF;
RULANGParser.T__0 = 1;
RULANGParser.T__1 = 2;
RULANGParser.T__2 = 3;
RULANGParser.T__3 = 4;
RULANGParser.T__4 = 5;
RULANGParser.T__5 = 6;
RULANGParser.T__6 = 7;
RULANGParser.T__7 = 8;
RULANGParser.T__8 = 9;
RULANGParser.T__9 = 10;
RULANGParser.T__10 = 11;
RULANGParser.T__11 = 12;
RULANGParser.T__12 = 13;
RULANGParser.T__13 = 14;
RULANGParser.T__14 = 15;
RULANGParser.T__15 = 16;
RULANGParser.T__16 = 17;
RULANGParser.T__17 = 18;
RULANGParser.T__18 = 19;
RULANGParser.T__19 = 20;
RULANGParser.T__20 = 21;
RULANGParser.T__21 = 22;
RULANGParser.T__22 = 23;
RULANGParser.T__23 = 24;
RULANGParser.T__24 = 25;
RULANGParser.T__25 = 26;
RULANGParser.T__26 = 27;
RULANGParser.T__27 = 28;
RULANGParser.T__28 = 29;
RULANGParser.T__29 = 30;
RULANGParser.T__30 = 31;
RULANGParser.T__31 = 32;
RULANGParser.T__32 = 33;
RULANGParser.T__33 = 34;
RULANGParser.T__34 = 35;
RULANGParser.T__35 = 36;
RULANGParser.T__36 = 37;
RULANGParser.T__37 = 38;
RULANGParser.T__38 = 39;
RULANGParser.T__39 = 40;
RULANGParser.T__40 = 41;
RULANGParser.T__41 = 42;
RULANGParser.T__42 = 43;
RULANGParser.T__43 = 44;
RULANGParser.T__44 = 45;
RULANGParser.T__45 = 46;
RULANGParser.T__46 = 47;
RULANGParser.T__47 = 48;
RULANGParser.T__48 = 49;
RULANGParser.T__49 = 50;
RULANGParser.T__50 = 51;
RULANGParser.T__51 = 52;
RULANGParser.T__52 = 53;
RULANGParser.RULE_PRIORITY = 54;
RULANGParser.RULE = 55;
RULANGParser.STRING = 56;
RULANGParser.LineTerminator = 57;
RULANGParser.NUMBER = 58;
RULANGParser.ID = 59;
RULANGParser.WS = 60;
RULANGParser.COMMENT = 61;
RULANGParser.LINE_COMMENT = 62;

RULANGParser.RULE_goal = 0;
RULANGParser.RULE_uriStatement = 1;
RULANGParser.RULE_versionUriStatement = 2;
RULANGParser.RULE_includeStatement = 3;
RULANGParser.RULE_sectionBlock = 4;
RULANGParser.RULE_section = 5;
RULANGParser.RULE_schemaSection = 6;
RULANGParser.RULE_metaGraphSection = 7;
RULANGParser.RULE_primaryKnowledgeRulesSection = 8;
RULANGParser.RULE_querySection = 9;
RULANGParser.RULE_queryRule = 10;
RULANGParser.RULE_rscConfigurationSection = 11;
RULANGParser.RULE_knowledgeBaseSection = 12;
RULANGParser.RULE_ruleDef = 13;
RULANGParser.RULE_ruleHeader = 14;
RULANGParser.RULE_predicates = 15;
RULANGParser.RULE_inferences = 16;
RULANGParser.RULE_tripleLiteral = 17;
RULANGParser.RULE_tripleAssertion = 18;
RULANGParser.RULE_resourceDecl = 19;
RULANGParser.RULE_configProp = 20;
RULANGParser.RULE_filter = 21;
RULANGParser.RULE_expression = 22;
RULANGParser.RULE_atom = 23;
RULANGParser.RULE_resourceLiteral = 24;
RULANGParser.RULE_stringLiteral = 25;
RULANGParser.RULE_booleanLiteral = 26;
RULANGParser.RULE_nullLiteral = 27;
RULANGParser.RULE_numberLiteral = 28;
RULANGParser.RULE_floatLiteral = 29;
RULANGParser.RULE_intLiteral = 30;
RULANGParser.RULE_calendarLiteral = 31;
RULANGParser.RULE_durationLiteral = 32;
RULANGParser.RULE_timeLiteral = 33;
RULANGParser.RULE_dateLiteral = 34;
RULANGParser.RULE_queryId = 35;
RULANGParser.RULE_prefixedID = 36;
RULANGParser.RULE_unaryOperator = 37;
RULANGParser.RULE_binaryOperator = 38;
RULANGParser.RULE_boolOperator = 39;
RULANGParser.RULE_numOperator = 40;

function GoalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_goal;
    return this;
}

GoalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GoalContext.prototype.constructor = GoalContext;

GoalContext.prototype.uriStatement = function() {
    return this.getTypedRuleContext(UriStatementContext,0);
};

GoalContext.prototype.versionUriStatement = function() {
    return this.getTypedRuleContext(VersionUriStatementContext,0);
};

GoalContext.prototype.includeStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IncludeStatementContext);
    } else {
        return this.getTypedRuleContext(IncludeStatementContext,i);
    }
};

GoalContext.prototype.sectionBlock = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SectionBlockContext);
    } else {
        return this.getTypedRuleContext(SectionBlockContext,i);
    }
};

GoalContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterGoal(this);
	}
};

GoalContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitGoal(this);
	}
};




RULANGParser.GoalContext = GoalContext;

RULANGParser.prototype.goal = function() {

    var localctx = new GoalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RULANGParser.RULE_goal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.uriStatement();
        this.state = 83;
        this.versionUriStatement();
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RULANGParser.T__2) {
            this.state = 84;
            this.includeStatement();
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 93;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RULANGParser.T__3) {
            this.state = 90;
            this.sectionBlock();
            this.state = 95;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UriStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_uriStatement;
    this.value = null; // Token
    return this;
}

UriStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UriStatementContext.prototype.constructor = UriStatementContext;

UriStatementContext.prototype.STRING = function() {
    return this.getToken(RULANGParser.STRING, 0);
};

UriStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterUriStatement(this);
	}
};

UriStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitUriStatement(this);
	}
};




RULANGParser.UriStatementContext = UriStatementContext;

RULANGParser.prototype.uriStatement = function() {

    var localctx = new UriStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RULANGParser.RULE_uriStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.match(RULANGParser.T__0);
        this.state = 97;
        localctx.value = this.match(RULANGParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VersionUriStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_versionUriStatement;
    this.value = null; // Token
    return this;
}

VersionUriStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VersionUriStatementContext.prototype.constructor = VersionUriStatementContext;

VersionUriStatementContext.prototype.STRING = function() {
    return this.getToken(RULANGParser.STRING, 0);
};

VersionUriStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterVersionUriStatement(this);
	}
};

VersionUriStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitVersionUriStatement(this);
	}
};




RULANGParser.VersionUriStatementContext = VersionUriStatementContext;

RULANGParser.prototype.versionUriStatement = function() {

    var localctx = new VersionUriStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RULANGParser.RULE_versionUriStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(RULANGParser.T__1);
        this.state = 100;
        localctx.value = this.match(RULANGParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IncludeStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_includeStatement;
    this.value = null; // Token
    return this;
}

IncludeStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeStatementContext.prototype.constructor = IncludeStatementContext;

IncludeStatementContext.prototype.STRING = function() {
    return this.getToken(RULANGParser.STRING, 0);
};

IncludeStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterIncludeStatement(this);
	}
};

IncludeStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitIncludeStatement(this);
	}
};




RULANGParser.IncludeStatementContext = IncludeStatementContext;

RULANGParser.prototype.includeStatement = function() {

    var localctx = new IncludeStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RULANGParser.RULE_includeStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 102;
        this.match(RULANGParser.T__2);
        this.state = 103;
        localctx.value = this.match(RULANGParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SectionBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_sectionBlock;
    return this;
}

SectionBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SectionBlockContext.prototype.constructor = SectionBlockContext;

SectionBlockContext.prototype.section = function() {
    return this.getTypedRuleContext(SectionContext,0);
};

SectionBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterSectionBlock(this);
	}
};

SectionBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitSectionBlock(this);
	}
};




RULANGParser.SectionBlockContext = SectionBlockContext;

RULANGParser.prototype.sectionBlock = function() {

    var localctx = new SectionBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RULANGParser.RULE_sectionBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(RULANGParser.T__3);
        this.state = 106;
        this.section();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_section;
    return this;
}

SectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SectionContext.prototype.constructor = SectionContext;

SectionContext.prototype.schemaSection = function() {
    return this.getTypedRuleContext(SchemaSectionContext,0);
};

SectionContext.prototype.metaGraphSection = function() {
    return this.getTypedRuleContext(MetaGraphSectionContext,0);
};

SectionContext.prototype.primaryKnowledgeRulesSection = function() {
    return this.getTypedRuleContext(PrimaryKnowledgeRulesSectionContext,0);
};

SectionContext.prototype.rscConfigurationSection = function() {
    return this.getTypedRuleContext(RscConfigurationSectionContext,0);
};

SectionContext.prototype.knowledgeBaseSection = function() {
    return this.getTypedRuleContext(KnowledgeBaseSectionContext,0);
};

SectionContext.prototype.querySection = function() {
    return this.getTypedRuleContext(QuerySectionContext,0);
};

SectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterSection(this);
	}
};

SectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitSection(this);
	}
};




RULANGParser.SectionContext = SectionContext;

RULANGParser.prototype.section = function() {

    var localctx = new SectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RULANGParser.RULE_section);
    try {
        this.state = 114;
        switch(this._input.LA(1)) {
        case RULANGParser.T__4:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.schemaSection();
            break;
        case RULANGParser.T__7:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.metaGraphSection();
            break;
        case RULANGParser.T__8:
            this.enterOuterAlt(localctx, 3);
            this.state = 110;
            this.primaryKnowledgeRulesSection();
            break;
        case RULANGParser.T__16:
            this.enterOuterAlt(localctx, 4);
            this.state = 111;
            this.rscConfigurationSection();
            break;
        case RULANGParser.T__17:
            this.enterOuterAlt(localctx, 5);
            this.state = 112;
            this.knowledgeBaseSection();
            break;
        case RULANGParser.T__11:
            this.enterOuterAlt(localctx, 6);
            this.state = 113;
            this.querySection();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SchemaSectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_schemaSection;
    return this;
}

SchemaSectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SchemaSectionContext.prototype.constructor = SchemaSectionContext;

SchemaSectionContext.prototype.resourceDecl = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ResourceDeclContext);
    } else {
        return this.getTypedRuleContext(ResourceDeclContext,i);
    }
};

SchemaSectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterSchemaSection(this);
	}
};

SchemaSectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitSchemaSection(this);
	}
};




RULANGParser.SchemaSectionContext = SchemaSectionContext;

RULANGParser.prototype.schemaSection = function() {

    var localctx = new SchemaSectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RULANGParser.RULE_schemaSection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this.match(RULANGParser.T__4);
        this.state = 117;
        this.match(RULANGParser.T__5);
        this.state = 121;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RULANGParser.ID) {
            this.state = 118;
            this.resourceDecl();
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 124;
        this.match(RULANGParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MetaGraphSectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_metaGraphSection;
    return this;
}

MetaGraphSectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MetaGraphSectionContext.prototype.constructor = MetaGraphSectionContext;

MetaGraphSectionContext.prototype.tripleAssertion = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TripleAssertionContext);
    } else {
        return this.getTypedRuleContext(TripleAssertionContext,i);
    }
};

MetaGraphSectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterMetaGraphSection(this);
	}
};

MetaGraphSectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitMetaGraphSection(this);
	}
};




RULANGParser.MetaGraphSectionContext = MetaGraphSectionContext;

RULANGParser.prototype.metaGraphSection = function() {

    var localctx = new MetaGraphSectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RULANGParser.RULE_metaGraphSection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.match(RULANGParser.T__7);
        this.state = 127;
        this.match(RULANGParser.T__5);
        this.state = 131;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RULANGParser.T__26) {
            this.state = 128;
            this.tripleAssertion();
            this.state = 133;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 134;
        this.match(RULANGParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimaryKnowledgeRulesSectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_primaryKnowledgeRulesSection;
    this.setting = null; // Token
    return this;
}

PrimaryKnowledgeRulesSectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryKnowledgeRulesSectionContext.prototype.constructor = PrimaryKnowledgeRulesSectionContext;

PrimaryKnowledgeRulesSectionContext.prototype.RULE_PRIORITY = function() {
    return this.getToken(RULANGParser.RULE_PRIORITY, 0);
};

PrimaryKnowledgeRulesSectionContext.prototype.ruleDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RuleDefContext);
    } else {
        return this.getTypedRuleContext(RuleDefContext,i);
    }
};

PrimaryKnowledgeRulesSectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterPrimaryKnowledgeRulesSection(this);
	}
};

PrimaryKnowledgeRulesSectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitPrimaryKnowledgeRulesSection(this);
	}
};




RULANGParser.PrimaryKnowledgeRulesSectionContext = PrimaryKnowledgeRulesSectionContext;

RULANGParser.prototype.primaryKnowledgeRulesSection = function() {

    var localctx = new PrimaryKnowledgeRulesSectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, RULANGParser.RULE_primaryKnowledgeRulesSection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 136;
        this.match(RULANGParser.T__8);
        this.state = 137;
        this.match(RULANGParser.T__9);
        this.state = 138;
        localctx.setting = this.match(RULANGParser.RULE_PRIORITY);
        this.state = 139;
        this.match(RULANGParser.T__10);
        this.state = 140;
        this.match(RULANGParser.T__5);
        this.state = 144;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RULANGParser.RULE) {
            this.state = 141;
            this.ruleDef();
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 147;
        this.match(RULANGParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QuerySectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_querySection;
    return this;
}

QuerySectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuerySectionContext.prototype.constructor = QuerySectionContext;

QuerySectionContext.prototype.queryRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QueryRuleContext);
    } else {
        return this.getTypedRuleContext(QueryRuleContext,i);
    }
};

QuerySectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterQuerySection(this);
	}
};

QuerySectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitQuerySection(this);
	}
};




RULANGParser.QuerySectionContext = QuerySectionContext;

RULANGParser.prototype.querySection = function() {

    var localctx = new QuerySectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, RULANGParser.RULE_querySection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(RULANGParser.T__11);
        this.state = 150;
        this.match(RULANGParser.T__5);
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RULANGParser.ID) {
            this.state = 151;
            this.queryRule();
            this.state = 156;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 157;
        this.match(RULANGParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QueryRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_queryRule;
    this.id = null; // Token
    this._tripleLiteral = null; // TripleLiteralContext
    this.tl = []; // of TripleLiteralContexts
    return this;
}

QueryRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryRuleContext.prototype.constructor = QueryRuleContext;

QueryRuleContext.prototype.ID = function() {
    return this.getToken(RULANGParser.ID, 0);
};

QueryRuleContext.prototype.queryId = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(QueryIdContext);
    } else {
        return this.getTypedRuleContext(QueryIdContext,i);
    }
};

QueryRuleContext.prototype.tripleLiteral = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TripleLiteralContext);
    } else {
        return this.getTypedRuleContext(TripleLiteralContext,i);
    }
};

QueryRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterQueryRule(this);
	}
};

QueryRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitQueryRule(this);
	}
};




RULANGParser.QueryRuleContext = QueryRuleContext;

RULANGParser.prototype.queryRule = function() {

    var localctx = new QueryRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, RULANGParser.RULE_queryRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 159;
        localctx.id = this.match(RULANGParser.ID);
        this.state = 160;
        this.match(RULANGParser.T__12);
        this.state = 161;
        this.match(RULANGParser.T__13);
        this.state = 163; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 162;
            this.queryId();
            this.state = 165; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===RULANGParser.T__36);
        this.state = 167;
        this.match(RULANGParser.T__14);
        this.state = 173;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 168;
                localctx._tripleLiteral = this.tripleLiteral();
                localctx.tl.push(localctx._tripleLiteral);
                this.state = 169;
                this.match(RULANGParser.T__15); 
            }
            this.state = 175;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

        this.state = 177; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 176;
            localctx._tripleLiteral = this.tripleLiteral();
            localctx.tl.push(localctx._tripleLiteral);
            this.state = 179; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===RULANGParser.T__20);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RscConfigurationSectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_rscConfigurationSection;
    return this;
}

RscConfigurationSectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RscConfigurationSectionContext.prototype.constructor = RscConfigurationSectionContext;

RscConfigurationSectionContext.prototype.configProp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConfigPropContext);
    } else {
        return this.getTypedRuleContext(ConfigPropContext,i);
    }
};

RscConfigurationSectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterRscConfigurationSection(this);
	}
};

RscConfigurationSectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitRscConfigurationSection(this);
	}
};




RULANGParser.RscConfigurationSectionContext = RscConfigurationSectionContext;

RULANGParser.prototype.rscConfigurationSection = function() {

    var localctx = new RscConfigurationSectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, RULANGParser.RULE_rscConfigurationSection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(RULANGParser.T__16);
        this.state = 182;
        this.match(RULANGParser.T__5);
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RULANGParser.ID) {
            this.state = 183;
            this.configProp();
            this.state = 188;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 189;
        this.match(RULANGParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KnowledgeBaseSectionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_knowledgeBaseSection;
    return this;
}

KnowledgeBaseSectionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KnowledgeBaseSectionContext.prototype.constructor = KnowledgeBaseSectionContext;

KnowledgeBaseSectionContext.prototype.configProp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConfigPropContext);
    } else {
        return this.getTypedRuleContext(ConfigPropContext,i);
    }
};

KnowledgeBaseSectionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterKnowledgeBaseSection(this);
	}
};

KnowledgeBaseSectionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitKnowledgeBaseSection(this);
	}
};




RULANGParser.KnowledgeBaseSectionContext = KnowledgeBaseSectionContext;

RULANGParser.prototype.knowledgeBaseSection = function() {

    var localctx = new KnowledgeBaseSectionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, RULANGParser.RULE_knowledgeBaseSection);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(RULANGParser.T__17);
        this.state = 192;
        this.match(RULANGParser.T__5);
        this.state = 196;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RULANGParser.ID) {
            this.state = 193;
            this.configProp();
            this.state = 198;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 199;
        this.match(RULANGParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RuleDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_ruleDef;
    return this;
}

RuleDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleDefContext.prototype.constructor = RuleDefContext;

RuleDefContext.prototype.ruleHeader = function() {
    return this.getTypedRuleContext(RuleHeaderContext,0);
};

RuleDefContext.prototype.predicates = function() {
    return this.getTypedRuleContext(PredicatesContext,0);
};

RuleDefContext.prototype.inferences = function() {
    return this.getTypedRuleContext(InferencesContext,0);
};

RuleDefContext.prototype.filter = function() {
    return this.getTypedRuleContext(FilterContext,0);
};

RuleDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterRuleDef(this);
	}
};

RuleDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitRuleDef(this);
	}
};




RULANGParser.RuleDefContext = RuleDefContext;

RULANGParser.prototype.ruleDef = function() {

    var localctx = new RuleDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, RULANGParser.RULE_ruleDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(RULANGParser.RULE);
        this.state = 202;
        this.ruleHeader();
        this.state = 203;
        this.match(RULANGParser.T__18);
        this.state = 204;
        this.match(RULANGParser.T__5);
        this.state = 205;
        this.predicates();
        this.state = 206;
        this.match(RULANGParser.T__6);
        this.state = 208;
        _la = this._input.LA(1);
        if(_la===RULANGParser.T__27) {
            this.state = 207;
            this.filter();
        }

        this.state = 210;
        this.match(RULANGParser.T__19);
        this.state = 211;
        this.inferences();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RuleHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_ruleHeader;
    this.n = null; // Token
    this.s = null; // Token
    return this;
}

RuleHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleHeaderContext.prototype.constructor = RuleHeaderContext;

RuleHeaderContext.prototype.ID = function() {
    return this.getToken(RULANGParser.ID, 0);
};

RuleHeaderContext.prototype.NUMBER = function() {
    return this.getToken(RULANGParser.NUMBER, 0);
};

RuleHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterRuleHeader(this);
	}
};

RuleHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitRuleHeader(this);
	}
};




RULANGParser.RuleHeaderContext = RuleHeaderContext;

RULANGParser.prototype.ruleHeader = function() {

    var localctx = new RuleHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, RULANGParser.RULE_ruleHeader);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 213;
        localctx.n = this.match(RULANGParser.ID);
        this.state = 214;
        this.match(RULANGParser.T__20);
        this.state = 215;
        _la = this._input.LA(1);
        if(!(_la===RULANGParser.T__21 || _la===RULANGParser.T__22)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
        this.state = 216;
        this.match(RULANGParser.T__23);
        this.state = 217;
        localctx.s = this.match(RULANGParser.NUMBER);
        this.state = 218;
        this.match(RULANGParser.T__24);
        this.state = 219;
        this.match(RULANGParser.T__12);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PredicatesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_predicates;
    this._tripleLiteral = null; // TripleLiteralContext
    this.tl = []; // of TripleLiteralContexts
    return this;
}

PredicatesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PredicatesContext.prototype.constructor = PredicatesContext;

PredicatesContext.prototype.tripleLiteral = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TripleLiteralContext);
    } else {
        return this.getTypedRuleContext(TripleLiteralContext,i);
    }
};

PredicatesContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterPredicates(this);
	}
};

PredicatesContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitPredicates(this);
	}
};




RULANGParser.PredicatesContext = PredicatesContext;

RULANGParser.prototype.predicates = function() {

    var localctx = new PredicatesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, RULANGParser.RULE_predicates);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 221;
                localctx._tripleLiteral = this.tripleLiteral();
                localctx.tl.push(localctx._tripleLiteral); 
            }
            this.state = 226;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
        }

        this.state = 227;
        localctx._tripleLiteral = this.tripleLiteral();
        localctx.tl.push(localctx._tripleLiteral);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function InferencesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_inferences;
    this._tripleLiteral = null; // TripleLiteralContext
    this.tl = []; // of TripleLiteralContexts
    return this;
}

InferencesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InferencesContext.prototype.constructor = InferencesContext;

InferencesContext.prototype.tripleLiteral = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TripleLiteralContext);
    } else {
        return this.getTypedRuleContext(TripleLiteralContext,i);
    }
};

InferencesContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterInferences(this);
	}
};

InferencesContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitInferences(this);
	}
};




RULANGParser.InferencesContext = InferencesContext;

RULANGParser.prototype.inferences = function() {

    var localctx = new InferencesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, RULANGParser.RULE_inferences);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(RULANGParser.T__5);
        this.state = 235;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 230;
                localctx._tripleLiteral = this.tripleLiteral();
                localctx.tl.push(localctx._tripleLiteral);
                this.state = 231;
                this.match(RULANGParser.T__25); 
            }
            this.state = 237;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
        }

        this.state = 238;
        localctx._tripleLiteral = this.tripleLiteral();
        localctx.tl.push(localctx._tripleLiteral);
        this.state = 239;
        this.match(RULANGParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TripleLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_tripleLiteral;
    return this;
}

TripleLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TripleLiteralContext.prototype.constructor = TripleLiteralContext;

TripleLiteralContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

TripleLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterTripleLiteral(this);
	}
};

TripleLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitTripleLiteral(this);
	}
};




RULANGParser.TripleLiteralContext = TripleLiteralContext;

RULANGParser.prototype.tripleLiteral = function() {

    var localctx = new TripleLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, RULANGParser.RULE_tripleLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.match(RULANGParser.T__20);
        this.state = 242;
        this.expression(0);
        this.state = 243;
        this.expression(0);
        this.state = 244;
        this.expression(0);
        this.state = 245;
        this.match(RULANGParser.T__24);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TripleAssertionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_tripleAssertion;
    return this;
}

TripleAssertionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TripleAssertionContext.prototype.constructor = TripleAssertionContext;

TripleAssertionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

TripleAssertionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterTripleAssertion(this);
	}
};

TripleAssertionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitTripleAssertion(this);
	}
};




RULANGParser.TripleAssertionContext = TripleAssertionContext;

RULANGParser.prototype.tripleAssertion = function() {

    var localctx = new TripleAssertionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, RULANGParser.RULE_tripleAssertion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        this.match(RULANGParser.T__26);
        this.state = 248;
        this.match(RULANGParser.T__20);
        this.state = 249;
        this.expression(0);
        this.state = 250;
        this.match(RULANGParser.T__15);
        this.state = 251;
        this.expression(0);
        this.state = 252;
        this.match(RULANGParser.T__15);
        this.state = 253;
        this.expression(0);
        this.state = 254;
        this.match(RULANGParser.T__24);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ResourceDeclContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_resourceDecl;
    return this;
}

ResourceDeclContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResourceDeclContext.prototype.constructor = ResourceDeclContext;

ResourceDeclContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ResourceDeclContext.prototype.ID = function() {
    return this.getToken(RULANGParser.ID, 0);
};

ResourceDeclContext.prototype.prefixedID = function() {
    return this.getTypedRuleContext(PrefixedIDContext,0);
};

ResourceDeclContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterResourceDecl(this);
	}
};

ResourceDeclContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitResourceDecl(this);
	}
};




RULANGParser.ResourceDeclContext = ResourceDeclContext;

RULANGParser.prototype.resourceDecl = function() {

    var localctx = new ResourceDeclContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, RULANGParser.RULE_resourceDecl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            this.state = 256;
            this.match(RULANGParser.ID);
            break;

        case 2:
            this.state = 257;
            this.prefixedID();
            break;

        }
        this.state = 260;
        this.match(RULANGParser.T__23);
        this.state = 261;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConfigPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_configProp;
    this.idKey = null; // Token
    this.atomValue = null; // AtomContext
    return this;
}

ConfigPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConfigPropContext.prototype.constructor = ConfigPropContext;

ConfigPropContext.prototype.ID = function() {
    return this.getToken(RULANGParser.ID, 0);
};

ConfigPropContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ConfigPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterConfigProp(this);
	}
};

ConfigPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitConfigProp(this);
	}
};




RULANGParser.ConfigPropContext = ConfigPropContext;

RULANGParser.prototype.configProp = function() {

    var localctx = new ConfigPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, RULANGParser.RULE_configProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        localctx.idKey = this.match(RULANGParser.ID);
        this.state = 264;
        this.match(RULANGParser.T__23);
        this.state = 265;
        localctx.atomValue = this.atom();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FilterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_filter;
    return this;
}

FilterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FilterContext.prototype.constructor = FilterContext;

FilterContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FilterContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterFilter(this);
	}
};

FilterContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitFilter(this);
	}
};




RULANGParser.FilterContext = FilterContext;

RULANGParser.prototype.filter = function() {

    var localctx = new FilterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, RULANGParser.RULE_filter);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.match(RULANGParser.T__27);
        this.state = 268;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function AtomicExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AtomicExpressionContext.prototype = Object.create(ExpressionContext.prototype);
AtomicExpressionContext.prototype.constructor = AtomicExpressionContext;

RULANGParser.AtomicExpressionContext = AtomicExpressionContext;

AtomicExpressionContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};
AtomicExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterAtomicExpression(this);
	}
};

AtomicExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitAtomicExpression(this);
	}
};


function PrefixedIdExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PrefixedIdExpressionContext.prototype = Object.create(ExpressionContext.prototype);
PrefixedIdExpressionContext.prototype.constructor = PrefixedIdExpressionContext;

RULANGParser.PrefixedIdExpressionContext = PrefixedIdExpressionContext;

PrefixedIdExpressionContext.prototype.prefixedID = function() {
    return this.getTypedRuleContext(PrefixedIDContext,0);
};
PrefixedIdExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterPrefixedIdExpression(this);
	}
};

PrefixedIdExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitPrefixedIdExpression(this);
	}
};


function IdentifierExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdentifierExpressionContext.prototype = Object.create(ExpressionContext.prototype);
IdentifierExpressionContext.prototype.constructor = IdentifierExpressionContext;

RULANGParser.IdentifierExpressionContext = IdentifierExpressionContext;

IdentifierExpressionContext.prototype.ID = function() {
    return this.getToken(RULANGParser.ID, 0);
};
IdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterIdentifierExpression(this);
	}
};

IdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitIdentifierExpression(this);
	}
};


function QueryIdentifierExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

QueryIdentifierExpressionContext.prototype = Object.create(ExpressionContext.prototype);
QueryIdentifierExpressionContext.prototype.constructor = QueryIdentifierExpressionContext;

RULANGParser.QueryIdentifierExpressionContext = QueryIdentifierExpressionContext;

QueryIdentifierExpressionContext.prototype.queryId = function() {
    return this.getTypedRuleContext(QueryIdContext,0);
};
QueryIdentifierExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterQueryIdentifierExpression(this);
	}
};

QueryIdentifierExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitQueryIdentifierExpression(this);
	}
};


function UnaryOpExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

UnaryOpExpressionContext.prototype = Object.create(ExpressionContext.prototype);
UnaryOpExpressionContext.prototype.constructor = UnaryOpExpressionContext;

RULANGParser.UnaryOpExpressionContext = UnaryOpExpressionContext;

UnaryOpExpressionContext.prototype.unaryOperator = function() {
    return this.getTypedRuleContext(UnaryOperatorContext,0);
};

UnaryOpExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
UnaryOpExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterUnaryOpExpression(this);
	}
};

UnaryOpExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitUnaryOpExpression(this);
	}
};


function ParenExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenExpressionContext.prototype = Object.create(ExpressionContext.prototype);
ParenExpressionContext.prototype.constructor = ParenExpressionContext;

RULANGParser.ParenExpressionContext = ParenExpressionContext;

ParenExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterParenExpression(this);
	}
};

ParenExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitParenExpression(this);
	}
};


function BinaryOpExpressionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op1 = null; // ExpressionContext;
    this.op2 = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryOpExpressionContext.prototype = Object.create(ExpressionContext.prototype);
BinaryOpExpressionContext.prototype.constructor = BinaryOpExpressionContext;

RULANGParser.BinaryOpExpressionContext = BinaryOpExpressionContext;

BinaryOpExpressionContext.prototype.binaryOperator = function() {
    return this.getTypedRuleContext(BinaryOperatorContext,0);
};

BinaryOpExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BinaryOpExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterBinaryOpExpression(this);
	}
};

BinaryOpExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitBinaryOpExpression(this);
	}
};



RULANGParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 44;
    this.enterRecursionRule(localctx, 44, RULANGParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 282;
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            localctx = new UnaryOpExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 271;
            this.unaryOperator();
            this.state = 272;
            this.expression(7);
            break;

        case 2:
            localctx = new ParenExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 274;
            this.match(RULANGParser.T__20);
            this.state = 275;
            this.expression(0);
            this.state = 276;
            this.match(RULANGParser.T__24);
            break;

        case 3:
            localctx = new AtomicExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 278;
            this.atom();
            break;

        case 4:
            localctx = new PrefixedIdExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 279;
            this.prefixedID();
            break;

        case 5:
            localctx = new IdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 280;
            this.match(RULANGParser.ID);
            break;

        case 6:
            localctx = new QueryIdentifierExpressionContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 281;
            this.queryId();
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 290;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new BinaryOpExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                localctx.op1 = _prevctx;
                this.pushNewRecursionContext(localctx, _startState, RULANGParser.RULE_expression);
                this.state = 284;
                if (!( this.precpred(this._ctx, 6))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                }
                this.state = 285;
                this.binaryOperator();
                this.state = 286;
                localctx.op2 = this.expression(7); 
            }
            this.state = 292;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.stringLiteral = function() {
    return this.getTypedRuleContext(StringLiteralContext,0);
};

AtomContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

AtomContext.prototype.nullLiteral = function() {
    return this.getTypedRuleContext(NullLiteralContext,0);
};

AtomContext.prototype.numberLiteral = function() {
    return this.getTypedRuleContext(NumberLiteralContext,0);
};

AtomContext.prototype.calendarLiteral = function() {
    return this.getTypedRuleContext(CalendarLiteralContext,0);
};

AtomContext.prototype.resourceLiteral = function() {
    return this.getTypedRuleContext(ResourceLiteralContext,0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitAtom(this);
	}
};




RULANGParser.AtomContext = AtomContext;

RULANGParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, RULANGParser.RULE_atom);
    try {
        this.state = 299;
        switch(this._input.LA(1)) {
        case RULANGParser.STRING:
            this.enterOuterAlt(localctx, 1);
            this.state = 293;
            this.stringLiteral();
            break;
        case RULANGParser.T__29:
        case RULANGParser.T__30:
            this.enterOuterAlt(localctx, 2);
            this.state = 294;
            this.booleanLiteral();
            break;
        case RULANGParser.T__31:
            this.enterOuterAlt(localctx, 3);
            this.state = 295;
            this.nullLiteral();
            break;
        case RULANGParser.NUMBER:
            this.enterOuterAlt(localctx, 4);
            this.state = 296;
            this.numberLiteral();
            break;
        case RULANGParser.T__33:
        case RULANGParser.T__34:
        case RULANGParser.T__35:
            this.enterOuterAlt(localctx, 5);
            this.state = 297;
            this.calendarLiteral();
            break;
        case RULANGParser.T__28:
            this.enterOuterAlt(localctx, 6);
            this.state = 298;
            this.resourceLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ResourceLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_resourceLiteral;
    this.value = null; // Token
    return this;
}

ResourceLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ResourceLiteralContext.prototype.constructor = ResourceLiteralContext;

ResourceLiteralContext.prototype.STRING = function() {
    return this.getToken(RULANGParser.STRING, 0);
};

ResourceLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterResourceLiteral(this);
	}
};

ResourceLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitResourceLiteral(this);
	}
};




RULANGParser.ResourceLiteralContext = ResourceLiteralContext;

RULANGParser.prototype.resourceLiteral = function() {

    var localctx = new ResourceLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, RULANGParser.RULE_resourceLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.match(RULANGParser.T__28);
        this.state = 302;
        localctx.value = this.match(RULANGParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_stringLiteral;
    return this;
}

StringLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringLiteralContext.prototype.constructor = StringLiteralContext;

StringLiteralContext.prototype.STRING = function() {
    return this.getToken(RULANGParser.STRING, 0);
};

StringLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterStringLiteral(this);
	}
};

StringLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitStringLiteral(this);
	}
};




RULANGParser.StringLiteralContext = StringLiteralContext;

RULANGParser.prototype.stringLiteral = function() {

    var localctx = new StringLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, RULANGParser.RULE_stringLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        this.match(RULANGParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_booleanLiteral;
    return this;
}

BooleanLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;


BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitBooleanLiteral(this);
	}
};




RULANGParser.BooleanLiteralContext = BooleanLiteralContext;

RULANGParser.prototype.booleanLiteral = function() {

    var localctx = new BooleanLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, RULANGParser.RULE_booleanLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        _la = this._input.LA(1);
        if(!(_la===RULANGParser.T__29 || _la===RULANGParser.T__30)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NullLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_nullLiteral;
    return this;
}

NullLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NullLiteralContext.prototype.constructor = NullLiteralContext;


NullLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterNullLiteral(this);
	}
};

NullLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitNullLiteral(this);
	}
};




RULANGParser.NullLiteralContext = NullLiteralContext;

RULANGParser.prototype.nullLiteral = function() {

    var localctx = new NullLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, RULANGParser.RULE_nullLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this.match(RULANGParser.T__31);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_numberLiteral;
    return this;
}

NumberLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberLiteralContext.prototype.constructor = NumberLiteralContext;

NumberLiteralContext.prototype.floatLiteral = function() {
    return this.getTypedRuleContext(FloatLiteralContext,0);
};

NumberLiteralContext.prototype.intLiteral = function() {
    return this.getTypedRuleContext(IntLiteralContext,0);
};

NumberLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterNumberLiteral(this);
	}
};

NumberLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitNumberLiteral(this);
	}
};




RULANGParser.NumberLiteralContext = NumberLiteralContext;

RULANGParser.prototype.numberLiteral = function() {

    var localctx = new NumberLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, RULANGParser.RULE_numberLiteral);
    try {
        this.state = 312;
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 310;
            this.floatLiteral();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 311;
            this.intLiteral();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FloatLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_floatLiteral;
    this.num = null; // Token
    return this;
}

FloatLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FloatLiteralContext.prototype.constructor = FloatLiteralContext;

FloatLiteralContext.prototype.NUMBER = function() {
    return this.getToken(RULANGParser.NUMBER, 0);
};

FloatLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterFloatLiteral(this);
	}
};

FloatLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitFloatLiteral(this);
	}
};




RULANGParser.FloatLiteralContext = FloatLiteralContext;

RULANGParser.prototype.floatLiteral = function() {

    var localctx = new FloatLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, RULANGParser.RULE_floatLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        localctx.num = this.match(RULANGParser.NUMBER);
        this.state = 315;
        this.match(RULANGParser.T__32);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_intLiteral;
    this.num = null; // Token
    return this;
}

IntLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntLiteralContext.prototype.constructor = IntLiteralContext;

IntLiteralContext.prototype.NUMBER = function() {
    return this.getToken(RULANGParser.NUMBER, 0);
};

IntLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterIntLiteral(this);
	}
};

IntLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitIntLiteral(this);
	}
};




RULANGParser.IntLiteralContext = IntLiteralContext;

RULANGParser.prototype.intLiteral = function() {

    var localctx = new IntLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, RULANGParser.RULE_intLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 317;
        localctx.num = this.match(RULANGParser.NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CalendarLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_calendarLiteral;
    return this;
}

CalendarLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CalendarLiteralContext.prototype.constructor = CalendarLiteralContext;

CalendarLiteralContext.prototype.durationLiteral = function() {
    return this.getTypedRuleContext(DurationLiteralContext,0);
};

CalendarLiteralContext.prototype.timeLiteral = function() {
    return this.getTypedRuleContext(TimeLiteralContext,0);
};

CalendarLiteralContext.prototype.dateLiteral = function() {
    return this.getTypedRuleContext(DateLiteralContext,0);
};

CalendarLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterCalendarLiteral(this);
	}
};

CalendarLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitCalendarLiteral(this);
	}
};




RULANGParser.CalendarLiteralContext = CalendarLiteralContext;

RULANGParser.prototype.calendarLiteral = function() {

    var localctx = new CalendarLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, RULANGParser.RULE_calendarLiteral);
    try {
        this.state = 322;
        switch(this._input.LA(1)) {
        case RULANGParser.T__33:
            this.enterOuterAlt(localctx, 1);
            this.state = 319;
            this.durationLiteral();
            break;
        case RULANGParser.T__34:
            this.enterOuterAlt(localctx, 2);
            this.state = 320;
            this.timeLiteral();
            break;
        case RULANGParser.T__35:
            this.enterOuterAlt(localctx, 3);
            this.state = 321;
            this.dateLiteral();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DurationLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_durationLiteral;
    this.value = null; // Token
    return this;
}

DurationLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DurationLiteralContext.prototype.constructor = DurationLiteralContext;

DurationLiteralContext.prototype.STRING = function() {
    return this.getToken(RULANGParser.STRING, 0);
};

DurationLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterDurationLiteral(this);
	}
};

DurationLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitDurationLiteral(this);
	}
};




RULANGParser.DurationLiteralContext = DurationLiteralContext;

RULANGParser.prototype.durationLiteral = function() {

    var localctx = new DurationLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, RULANGParser.RULE_durationLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 324;
        this.match(RULANGParser.T__33);
        this.state = 325;
        localctx.value = this.match(RULANGParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TimeLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_timeLiteral;
    this.value = null; // Token
    return this;
}

TimeLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TimeLiteralContext.prototype.constructor = TimeLiteralContext;

TimeLiteralContext.prototype.STRING = function() {
    return this.getToken(RULANGParser.STRING, 0);
};

TimeLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterTimeLiteral(this);
	}
};

TimeLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitTimeLiteral(this);
	}
};




RULANGParser.TimeLiteralContext = TimeLiteralContext;

RULANGParser.prototype.timeLiteral = function() {

    var localctx = new TimeLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, RULANGParser.RULE_timeLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 327;
        this.match(RULANGParser.T__34);
        this.state = 328;
        localctx.value = this.match(RULANGParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DateLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_dateLiteral;
    this.value = null; // Token
    return this;
}

DateLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DateLiteralContext.prototype.constructor = DateLiteralContext;

DateLiteralContext.prototype.STRING = function() {
    return this.getToken(RULANGParser.STRING, 0);
};

DateLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterDateLiteral(this);
	}
};

DateLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitDateLiteral(this);
	}
};




RULANGParser.DateLiteralContext = DateLiteralContext;

RULANGParser.prototype.dateLiteral = function() {

    var localctx = new DateLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, RULANGParser.RULE_dateLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(RULANGParser.T__35);
        this.state = 331;
        localctx.value = this.match(RULANGParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QueryIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_queryId;
    return this;
}

QueryIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QueryIdContext.prototype.constructor = QueryIdContext;

QueryIdContext.prototype.ID = function() {
    return this.getToken(RULANGParser.ID, 0);
};

QueryIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterQueryId(this);
	}
};

QueryIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitQueryId(this);
	}
};




RULANGParser.QueryIdContext = QueryIdContext;

RULANGParser.prototype.queryId = function() {

    var localctx = new QueryIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, RULANGParser.RULE_queryId);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 333;
        this.match(RULANGParser.T__36);
        this.state = 334;
        this.match(RULANGParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrefixedIDContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_prefixedID;
    this.prefix = null; // Token
    this.value = null; // Token
    return this;
}

PrefixedIDContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixedIDContext.prototype.constructor = PrefixedIDContext;

PrefixedIDContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RULANGParser.ID);
    } else {
        return this.getToken(RULANGParser.ID, i);
    }
};


PrefixedIDContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterPrefixedID(this);
	}
};

PrefixedIDContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitPrefixedID(this);
	}
};




RULANGParser.PrefixedIDContext = PrefixedIDContext;

RULANGParser.prototype.prefixedID = function() {

    var localctx = new PrefixedIDContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, RULANGParser.RULE_prefixedID);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        localctx.prefix = this.match(RULANGParser.ID);
        this.state = 337;
        this.match(RULANGParser.T__12);
        this.state = 338;
        localctx.value = this.match(RULANGParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UnaryOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_unaryOperator;
    return this;
}

UnaryOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryOperatorContext.prototype.constructor = UnaryOperatorContext;


UnaryOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterUnaryOperator(this);
	}
};

UnaryOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitUnaryOperator(this);
	}
};




RULANGParser.UnaryOperatorContext = UnaryOperatorContext;

RULANGParser.prototype.unaryOperator = function() {

    var localctx = new UnaryOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, RULANGParser.RULE_unaryOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        _la = this._input.LA(1);
        if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (RULANGParser.T__37 - 38)) | (1 << (RULANGParser.T__38 - 38)) | (1 << (RULANGParser.T__39 - 38)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BinaryOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_binaryOperator;
    return this;
}

BinaryOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryOperatorContext.prototype.constructor = BinaryOperatorContext;

BinaryOperatorContext.prototype.boolOperator = function() {
    return this.getTypedRuleContext(BoolOperatorContext,0);
};

BinaryOperatorContext.prototype.numOperator = function() {
    return this.getTypedRuleContext(NumOperatorContext,0);
};

BinaryOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterBinaryOperator(this);
	}
};

BinaryOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitBinaryOperator(this);
	}
};




RULANGParser.BinaryOperatorContext = BinaryOperatorContext;

RULANGParser.prototype.binaryOperator = function() {

    var localctx = new BinaryOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, RULANGParser.RULE_binaryOperator);
    try {
        this.state = 345;
        switch(this._input.LA(1)) {
        case RULANGParser.T__41:
        case RULANGParser.T__42:
        case RULANGParser.T__43:
        case RULANGParser.T__44:
        case RULANGParser.T__45:
        case RULANGParser.T__46:
        case RULANGParser.T__47:
        case RULANGParser.T__48:
            this.enterOuterAlt(localctx, 1);
            this.state = 342;
            this.boolOperator();
            break;
        case RULANGParser.T__49:
        case RULANGParser.T__50:
        case RULANGParser.T__51:
        case RULANGParser.T__52:
            this.enterOuterAlt(localctx, 2);
            this.state = 343;
            this.numOperator();
            break;
        case RULANGParser.T__40:
            this.enterOuterAlt(localctx, 3);
            this.state = 344;
            this.match(RULANGParser.T__40);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BoolOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_boolOperator;
    return this;
}

BoolOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolOperatorContext.prototype.constructor = BoolOperatorContext;


BoolOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterBoolOperator(this);
	}
};

BoolOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitBoolOperator(this);
	}
};




RULANGParser.BoolOperatorContext = BoolOperatorContext;

RULANGParser.prototype.boolOperator = function() {

    var localctx = new BoolOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, RULANGParser.RULE_boolOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 347;
        _la = this._input.LA(1);
        if(!(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (RULANGParser.T__41 - 42)) | (1 << (RULANGParser.T__42 - 42)) | (1 << (RULANGParser.T__43 - 42)) | (1 << (RULANGParser.T__44 - 42)) | (1 << (RULANGParser.T__45 - 42)) | (1 << (RULANGParser.T__46 - 42)) | (1 << (RULANGParser.T__47 - 42)) | (1 << (RULANGParser.T__48 - 42)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RULANGParser.RULE_numOperator;
    return this;
}

NumOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumOperatorContext.prototype.constructor = NumOperatorContext;


NumOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.enterNumOperator(this);
	}
};

NumOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof RULANGListener ) {
        listener.exitNumOperator(this);
	}
};




RULANGParser.NumOperatorContext = NumOperatorContext;

RULANGParser.prototype.numOperator = function() {

    var localctx = new NumOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, RULANGParser.RULE_numOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 349;
        _la = this._input.LA(1);
        if(!(((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (RULANGParser.T__49 - 50)) | (1 << (RULANGParser.T__50 - 50)) | (1 << (RULANGParser.T__51 - 50)) | (1 << (RULANGParser.T__52 - 50)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


RULANGParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 22:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RULANGParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


module.exports.RULANGParser = RULANGParser;
