@echo off

echo pb-egret generate START...
for /F %%i in ('pb-egret generate') do ( set commitid=%%i)
echo pb-egret generate result: %commitid%
copy .\protobuf\bundles\protobuf-bundles.d.ts ..\libs\
echo pb-egret generate END...

echo ----------------------------------------

echo generate typescript class START...
node .\protobuf\generate-ts.js
echo generate typescript class END...

echo ----------------------------------------

pause